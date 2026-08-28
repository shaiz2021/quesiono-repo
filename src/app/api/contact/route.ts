/**
 * Contact form endpoint.
 *
 * The previous version of the form resolved a setTimeout and showed a success
 * screen without sending anything, so every enquiry through the site was lost.
 * This actually delivers.
 *
 * Behaviour without configuration: if RESEND_API_KEY is absent the route
 * returns 503 with `fallback: true` and the client shows a prefilled mailto
 * link instead of a success screen. That's deliberate — silently accepting a
 * message we can't deliver is how the original bug happened.
 *
 * Environment:
 *   RESEND_API_KEY   required to send
 *   CONTACT_TO       optional, defaults to site.email
 *   CONTACT_FROM     optional, defaults to onboarding@resend.dev (Resend's
 *                    test sender — set a verified domain sender in production)
 */

import { NextResponse } from "next/server";

import { site } from "@/lib/site";
import { getServiceBySlug } from "@/data/services";

export const runtime = "nodejs";
/** Never cached — it's a POST-only mutation endpoint. */
export const dynamic = "force-dynamic";

const LIMITS = {
  name: 120,
  email: 254,
  company: 160,
  phone: 40,
  service: 80,
  budget: 40,
  timeline: 60,
  message: 5000,
} as const;

const MIN_MESSAGE = 12;

/* --------------------------------------------------------------- limiting -- */

/**
 * In-memory sliding window: 5 submissions per IP per 10 minutes.
 *
 * Per-instance, so it resets on redeploy and doesn't coordinate across
 * serverless instances. That's an accepted trade-off — it stops the obvious
 * scripted flood without adding a Redis dependency to a brochure site. Move
 * this to a shared store if the form ever becomes a real target.
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(key: string, now: number) {
  const recent = (hits.get(key) ?? []).filter((stamp) => now - stamp < WINDOW_MS);

  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(key, recent);
    return true;
  }

  recent.push(now);
  hits.set(key, recent);

  /* Opportunistic sweep so the map can't grow without bound on a long-lived
     instance. Cheap: it only runs when the map is already large. */
  if (hits.size > 500) {
    hits.forEach((stamps, ip) => {
      if (stamps.every((stamp: number) => now - stamp >= WINDOW_MS)) hits.delete(ip);
    });
  }

  return false;
}

/* -------------------------------------------------------------- validation -- */

/** Deliberately permissive — the goal is to reject typos, not to police TLDs. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function clean(value: unknown, max: number, multiline = false) {
  if (typeof value !== "string") return "";
  /* Strip control characters so nothing can inject a header break into the
     outgoing mail. Newlines are allowed only where the caller asks for them,
     which is the message body and nowhere else. */
  const stripped = multiline
    ? value.replace(/\r\n/g, "\n").replace(/[^\S\n]+/g, " ").replace(/[\u0000-\u0009\u000b-\u001f\u007f]/g, "")
    : value.replace(/[\u0000-\u001f\u007f]/g, " ");
  return stripped.trim().slice(0, max);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Send valid JSON." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Send valid JSON." }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;

  /* Honeypot. A real person never sees this field, so anything in it is a bot.
     Return 200 rather than an error — a spammer that gets a failure just
     retries with the field removed. */
  if (clean(raw.website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const fields = {
    name: clean(raw.name, LIMITS.name),
    email: clean(raw.email, LIMITS.email),
    company: clean(raw.company, LIMITS.company),
    phone: clean(raw.phone, LIMITS.phone),
    service: clean(raw.service, LIMITS.service),
    budget: clean(raw.budget, LIMITS.budget),
    timeline: clean(raw.timeline, LIMITS.timeline),
    message: clean(raw.message, LIMITS.message, true),
  };

  const errors: Record<string, string> = {};
  if (!fields.name) errors.name = "Tell us your name.";
  if (!fields.email) errors.email = "We need an email to reply to.";
  else if (!EMAIL.test(fields.email)) errors.email = "That email doesn't look right.";
  if (!fields.message) errors.message = "Tell us a bit about the project.";
  else if (fields.message.length < MIN_MESSAGE) {
    errors.message = "A sentence or two, so we can give you a useful answer.";
  }

  if (Object.keys(errors).length) {
    return NextResponse.json({ error: "Some fields need fixing.", errors }, { status: 400 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  /* Counted after validation on purpose: the thing worth limiting is messages
     that would actually send mail, not someone fixing a typo in their email
     address four times. */
  if (rateLimited(ip, Date.now())) {
    return NextResponse.json(
      {
        error: `That's a few messages in a short window. Email ${site.email} directly and we'll pick it up.`,
      },
      { status: 429, headers: { "Retry-After": "600" } }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    /* No mail transport configured. Say so honestly and let the client offer
       a mailto: link rather than pretending the message went somewhere. */
    return NextResponse.json(
      {
        error: "Our form isn't connected to email yet.",
        fallback: true,
      },
      { status: 503 }
    );
  }

  const serviceName = fields.service
    ? getServiceBySlug(fields.service)?.name ?? fields.service
    : "Not specified";

  const rows: [string, string][] = [
    ["Name", fields.name],
    ["Email", fields.email],
    ["Company", fields.company || "—"],
    ["Phone", fields.phone || "—"],
    ["Service", serviceName],
    ["Budget", fields.budget || "—"],
    ["Timeline", fields.timeline || "—"],
  ];

  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    fields.message,
  ].join("\n");

  const html = [
    '<div style="font-family:system-ui,-apple-system,sans-serif;font-size:15px;line-height:1.6;color:#1a1a2e">',
    `<h2 style="margin:0 0 16px">New enquiry from ${escapeHtml(fields.name)}</h2>`,
    '<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:24px">',
    ...rows.map(
      ([label, value]) =>
        `<tr><td style="padding:6px 20px 6px 0;color:#6b6b7b">${label}</td>` +
        `<td style="padding:6px 0;font-weight:600">${escapeHtml(value)}</td></tr>`
    ),
    "</table>",
    '<div style="padding:16px;background:#f7f4ef;border-radius:8px;white-space:pre-wrap">',
    escapeHtml(fields.message),
    "</div>",
    "</div>",
  ].join("");

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM ?? "Quesiono site <onboarding@resend.dev>",
      to: process.env.CONTACT_TO ?? site.email,
      replyTo: fields.email,
      subject: `New enquiry — ${fields.name}${fields.company ? ` (${fields.company})` : ""}`,
      text,
      html,
    });

    if (error) {
      console.error("[contact] Resend rejected the send:", error);
      return NextResponse.json(
        { error: "We couldn't send that just now.", fallback: true },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (cause) {
    console.error("[contact] send threw:", cause);
    return NextResponse.json(
      { error: "Something broke on our side.", fallback: true },
      { status: 500 }
    );
  }
}

/** Anything other than POST gets a clear 405 rather than a Next.js 404. */
export async function GET() {
  return NextResponse.json({ error: "Use POST." }, { status: 405, headers: { Allow: "POST" } });
}
