"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { AlertCircle, ArrowRight, Check, Loader2, Mail } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { site } from "@/lib/site";

type FormValues = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
  /** Honeypot. Hidden from people, irresistible to bots. */
  website: string;
};

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "error"; message: string; mailto?: string };

const budgets = [
  "Under $1,500",
  "$1,500 – $4,000",
  "$4,000 – $10,000",
  "$10,000 – $25,000",
  "Over $25,000",
  "Not sure yet",
];

const timelines = [
  "As soon as you can start",
  "Next month",
  "This quarter",
  "Fixed launch date",
  "Just researching",
];

const field =
  "w-full rounded-xl border border-sand bg-white px-4 py-3 text-text-dark transition-colors duration-200 placeholder:text-text-muted/60 focus:border-midnight/40 focus:outline-none focus:ring-2 focus:ring-midnight/15";
const label = "block text-[0.85rem] font-semibold text-text-dark";
const errorText = "mt-1.5 text-[0.82rem] font-medium text-red-600";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      budget: "",
      timeline: "",
      message: "",
      website: "",
    },
  });

  /** Prefilled email link, used whenever the API can't deliver. */
  const buildMailto = () => {
    const values = getValues();
    const body = [
      `Name: ${values.name}`,
      values.company ? `Company: ${values.company}` : null,
      values.service ? `Service: ${values.service}` : null,
      values.budget ? `Budget: ${values.budget}` : null,
      values.timeline ? `Timeline: ${values.timeline}` : null,
      "",
      values.message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    return `mailto:${site.email}?subject=${encodeURIComponent(
      `Project enquiry — ${values.name || "website"}`
    )}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (values: FormValues) => {
    setStatus({ kind: "sending" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const payload = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        errors?: Partial<Record<keyof FormValues, string>>;
        fallback?: boolean;
      };

      if (response.ok && payload.ok) {
        reset();
        setStatus({ kind: "sent" });
        return;
      }

      /* Field-level messages from the server get attached to the inputs, so the
         user sees them where the problem is rather than in a banner. */
      if (payload.errors) {
        for (const [key, message] of Object.entries(payload.errors)) {
          if (message) setError(key as keyof FormValues, { type: "server", message });
        }
      }

      setStatus({
        kind: "error",
        message: payload.error ?? "That didn't go through.",
        mailto: payload.fallback ? buildMailto() : undefined,
      });
    } catch {
      /* Network failure — offline, blocked, DNS. The mailto still works. */
      setStatus({
        kind: "error",
        message: "We couldn't reach the server. Your connection, or ours.",
        mailto: buildMailto(),
      });
    }
  };

  if (status.kind === "sent") {
    return (
      <div className="rounded-3xl border border-sand bg-white p-10 text-center sm:p-14">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo/10 text-indigo">
          <Check className="h-7 w-7" aria-hidden />
        </span>
        <h3 className="mt-7 font-display text-step-3 font-extrabold tracking-tight text-text-dark">
          Got it.
        </h3>
        <p className="mx-auto mt-4 max-w-md leading-relaxed text-text-muted">
          It&apos;s in our inbox. You&apos;ll hear back within {site.responseTime} — from one of the
          five of us, not an autoresponder. If it&apos;s urgent, reply to that email and say so.
        </p>
        <div className="mt-9">
          <Button variant="outline" size="md" onClick={() => setStatus({ kind: "idle" })}>
            Send another
          </Button>
        </div>
      </div>
    );
  }

  const sending = status.kind === "sending";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-3xl border border-sand bg-white p-8 sm:p-10"
    >
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-text-muted">
        Project enquiry
      </p>
      <h2 className="mt-3 font-display text-step-3 font-extrabold tracking-tight text-text-dark">
        Tell us what you&apos;re building
      </h2>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-text-muted">
        Two fields are required. The rest just means fewer questions on the first call.
      </p>

      <div className="mt-9 space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className={label} htmlFor="contact-name">
              Name <span className="text-indigo">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              autoComplete="name"
              placeholder="Jordan Reyes"
              className={`mt-2 ${field}`}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              {...register("name", { required: "Tell us your name." })}
            />
            {errors.name ? (
              <p id="contact-name-error" className={errorText}>
                {errors.name.message}
              </p>
            ) : null}
          </div>

          <div>
            <label className={label} htmlFor="contact-email">
              Email <span className="text-indigo">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              className={`mt-2 ${field}`}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              {...register("email", {
                required: "We need an email to reply to.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                  message: "That email doesn't look right.",
                },
              })}
            />
            {errors.email ? (
              <p id="contact-email-error" className={errorText}>
                {errors.email.message}
              </p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className={label} htmlFor="contact-company">
              Company
            </label>
            <input
              id="contact-company"
              type="text"
              autoComplete="organization"
              placeholder="Optional"
              className={`mt-2 ${field}`}
              {...register("company")}
            />
          </div>

          <div>
            <label className={label} htmlFor="contact-phone">
              Phone
            </label>
            <input
              id="contact-phone"
              type="tel"
              autoComplete="tel"
              placeholder="Optional"
              className={`mt-2 ${field}`}
              {...register("phone")}
            />
          </div>
        </div>

        <div>
          <label className={label} htmlFor="contact-service">
            What do you need?
          </label>
          <select id="contact-service" className={`mt-2 ${field}`} {...register("service")}>
            <option value="">Not sure yet — help me work it out</option>
            {services
              .filter((service) => !service.parentService)
              .map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.name}
                </option>
              ))}
          </select>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className={label} htmlFor="contact-budget">
              Budget
            </label>
            <select id="contact-budget" className={`mt-2 ${field}`} {...register("budget")}>
              <option value="">Prefer not to say</option>
              {budgets.map((band) => (
                <option key={band} value={band}>
                  {band}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={label} htmlFor="contact-timeline">
              Timeline
            </label>
            <select id="contact-timeline" className={`mt-2 ${field}`} {...register("timeline")}>
              <option value="">No fixed date</option>
              {timelines.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className={label} htmlFor="contact-message">
            What&apos;s the project? <span className="text-indigo">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={6}
            placeholder="What the site needs to do, what's stopping it now, and any hard constraints — launch date, budget ceiling, systems it has to talk to."
            className={`mt-2 ${field} resize-y`}
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            {...register("message", {
              required: "Tell us a bit about the project.",
              minLength: {
                value: 12,
                message: "A sentence or two, so we can give you a useful answer.",
              },
            })}
          />
          {errors.message ? (
            <p id="contact-message-error" className={errorText}>
              {errors.message.message}
            </p>
          ) : null}
        </div>

        {/* Honeypot. Off-screen rather than display:none — some bots skip
            hidden inputs but happily fill positioned ones. */}
        <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>
      </div>

      {status.kind === "error" ? (
        <div
          role="alert"
          className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5 text-[0.9rem]"
        >
          <p className="flex items-start gap-2.5 font-semibold text-red-700">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
            {status.message}
          </p>
          {status.mailto ? (
            <p className="mt-3 pl-7 leading-relaxed text-red-700/85">
              Nothing lost —{" "}
              <a
                href={status.mailto}
                className="font-semibold underline decoration-2 underline-offset-2"
              >
                send it as an email instead
              </a>
              . Everything you typed is already in the draft.
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="mt-9 flex flex-col gap-5 border-t border-sand pt-8 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant="primary" size="lg" disabled={sending}>
          {sending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              Sending
            </>
          ) : (
            <>
              Send it
              <ArrowRight className="h-4 w-4" aria-hidden />
            </>
          )}
        </Button>

        <p className="inline-flex items-center gap-2 text-[0.85rem] text-text-muted">
          <Mail className="h-4 w-4" aria-hidden />
          Or email{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-indigo underline decoration-champagne decoration-2 underline-offset-4 hover:text-midnight"
          >
            {site.email}
          </a>
        </p>
      </div>
    </form>
  );
}
