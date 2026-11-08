import { NextResponse } from "next/server";
import { site } from "@/lib/site";
import { getServiceBySlug } from "@/data/services";
import { contactLimits, validWebsite } from "@/lib/contact";
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const MAX_BODY = 24000,
  WINDOW = 600000,
  MAX_HITS = 5;
const hits = new Map<string, number[]>();
function limited(key: string) {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW);
  if (recent.length >= MAX_HITS) return true;
  if (hits.size >= 1000) {
    hits.forEach((v, k) => {
      if (v.every((t) => now - t >= WINDOW)) hits.delete(k);
    });
    if (hits.size >= 1000 && !hits.has(key)) return true;
  }
  hits.set(key, [...recent, now]);
  return false;
}
function clean(value: string, multiline = false) {
  return (
    multiline
      ? value
          .replace(/\r\n/g, "\n")
          .replace(/[\u0000-\u0009\u000b-\u001f\u007f]/g, "")
      : value.replace(/[\u0000-\u001f\u007f]/g, " ")
  ).trim();
}
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
function reply(
  body: Record<string, unknown>,
  status = 200,
  headers: Record<string, string> = {},
) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store", ...headers },
  });
}
async function boundedBody(request: Request) {
  if (Number(request.headers.get("content-length")) > MAX_BODY)
    throw new Error("large");
  const reader = request.body?.getReader();
  if (!reader) throw new Error("json");
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_BODY) {
      await reader.cancel();
      throw new Error("large");
    }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.length;
  }
  return JSON.parse(new TextDecoder().decode(bytes));
}
export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && !new Set([site.url, new URL(request.url).origin]).has(origin))
    return reply(
      { error: "This form must be submitted from the Quesiono website." },
      403,
    );
  if (request.headers.get("sec-fetch-site") === "cross-site")
    return reply({ error: "Cross-site submission is not allowed." }, 403);
  if (
    !request.headers
      .get("content-type")
      ?.toLowerCase()
      .startsWith("application/json")
  )
    return reply({ error: "Send the form as JSON." }, 415);
  let raw: Record<string, unknown>;
  try {
    const body = await boundedBody(request);
    if (!body || Array.isArray(body) || typeof body !== "object")
      throw new Error("json");
    raw = body;
  } catch (error) {
    return reply(
      {
        error:
          error instanceof Error && error.message === "large"
            ? "The enquiry is too long. Please shorten it."
            : "The form could not be read. Please try again.",
      },
      error instanceof Error && error.message === "large" ? 413 : 400,
    );
  }
  // Never return a success screen for a submission that will not be delivered.
  if (raw.website)
    return reply(
      {
        error:
          "We could not accept this submission. Please email us if you need help.",
      },
      400,
    );
  const fields: Record<string, string> = {},
    errors: Record<string, string> = {};
  for (const [name, max] of Object.entries(contactLimits)) {
    const value = raw[name];
    if (value !== undefined && typeof value !== "string") {
      errors[name] = "Please use a text value.";
      continue;
    }
    if (typeof value === "string" && value.length > max)
      errors[name] = `Use ${max} characters or fewer.`;
    fields[name] = clean(
      typeof value === "string" ? value : "",
      name === "message",
    );
  }
  if (!fields.name) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email ?? ""))
    errors.email = "Enter a valid email address.";
  if ((fields.message ?? "").length < 12)
    errors.message = "Please add a short sentence about your goal.";
  if (fields.websiteUrl && !validWebsite(fields.websiteUrl))
    errors.websiteUrl = "Enter a full http:// or https:// website URL.";
  if (fields.service && !getServiceBySlug(fields.service))
    errors.service = "Please choose a service from the list.";
  if (raw.consent !== true)
    errors.consent = "Please confirm that we may use these details to respond.";
  for (const key of ["source", "landing"]) {
    if (fields[key])
      fields[key] =
        fields[key].startsWith("/") && !fields[key].startsWith("//")
          ? fields[key].split(/[?#]/)[0]
          : "";
  }
  if (fields.referrer) {
    try {
      fields.referrer = new URL(fields.referrer).origin;
    } catch {
      fields.referrer = "";
    }
  }
  if (Object.keys(errors).length)
    return reply(
      { error: "Please check the highlighted fields.", errors },
      400,
    );
  // Proxy headers must be overwritten by a trusted deployment ingress. Instance-local fallback.
  const ip =
    request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown";
  if (limited(ip))
    return reply(
      {
        error: `Too many enquiries in a short time. Please wait or email ${site.email}.`,
      },
      429,
      { "Retry-After": "600" },
    );
  const apiKey = process.env.RESEND_API_KEY,
    from = process.env.CONTACT_FROM,
    to = process.env.CONTACT_TO || site.email;
  if (!apiKey || !from)
    return reply(
      {
        error:
          "We cannot send through the form right now. Please use the email option below.",
        fallback: true,
      },
      503,
    );
  const rows: [string, string][] = [
    ["Name", fields.name],
    ["Email", fields.email],
    ["Project goal", fields.message],
    ["Website", fields.websiteUrl],
    ["Service", getServiceBySlug(fields.service)?.name || "Not sure yet"],
    ["Company", fields.company],
    ["Phone", fields.phone],
    ["Budget", fields.budget],
    ["Timeline", fields.timeline],
    ["Enquiry source", fields.source],
    ["Enquiry type", fields.intent || "Project"],
    ["Landing page", fields.landing],
    ["Referrer origin", fields.referrer],
    ...[
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
    ].map((k) => [k, fields[k]] as [string, string]),
    ["Permission", "Agreed to use these details to respond to this enquiry."],
    ["Privacy notice", `${site.url}/privacy-policy`],
  ].filter(([, v]) => !!v) as [string, string][];
  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n\n");
  const html =
    '<div style="font-family:system-ui;line-height:1.6"><h1>New Quesiono enquiry</h1>' +
    rows
      .map(
        ([label, value]) =>
          `<p><strong>${escapeHtml(label)}</strong><br><span style="white-space:pre-wrap">${escapeHtml(value)}</span></p>`,
      )
      .join("") +
    "</div>";
  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo: fields.email,
      subject: `Quesiono enquiry — ${fields.service || "project"}`,
      text,
      html,
    });
    if (error || !data?.id) {
      console.error("[contact] email provider rejected submission");
      return reply(
        {
          error:
            "Your enquiry was not accepted by our email service. Please try again or email us.",
          fallback: true,
        },
        502,
      );
    }
    return reply({ ok: true });
  } catch {
    console.error("[contact] email transport unavailable");
    return reply(
      {
        error:
          "We could not confirm email delivery. Please try again or email us.",
        fallback: true,
      },
      502,
    );
  }
}
export async function GET() {
  return reply({ error: "Use POST." }, 405, { Allow: "POST" });
}
