"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";
import {
  contactLimits,
  budgetOptions,
  timelineOptions,
  validWebsite,
  type ContactValues,
  type ContactField,
} from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";
const contextKeys = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "landing",
  "referrer",
] as const;
type Status = { kind: "idle" | "sending" | "sent" | "error"; message?: string };
export function ContactForm({
  services,
}: {
  services: { slug: string; name: string }[];
}) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [review, setReview] = useState(false);
  const [context, setContext] = useState<Record<string, string>>({});
  const started = useRef(false),
    lock = useRef(false),
    feedback = useRef<HTMLDivElement>(null);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    setError,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      websiteUrl: "",
      company: "",
      phone: "",
      service: "",
      budget: "",
      timeline: "",
      website: "",
      consent: false,
    },
  });
  useEffect(() => {
    const q = new URLSearchParams(location.search);
    const chosen = q.get("service");
    if (services.some((s) => s.slug === chosen)) setValue("service", chosen!);
    const source = q.get("source");
    const intent = q.get("intent");
    setReview(intent === "website-review");
    let stored: Record<string, string> = {};
    try {
      stored = JSON.parse(
        sessionStorage.getItem("quesiono-attribution") || "{}",
      );
    } catch {}
    const values: Record<string, string> = {};
    for (const key of contextKeys) {
      const v = q.get(key) || stored[key];
      if (typeof v === "string") values[key] = v.slice(0, contactLimits[key]);
    }
    if (source?.startsWith("/") && !source.startsWith("//"))
      values.source = source.split(/[?#]/)[0].slice(0, 250);
    if (intent === "website-review") values.intent = intent;
    setContext(values);
  }, [services, setValue]);
  useEffect(() => {
    if (status.kind === "sent" || status.kind === "error")
      feedback.current?.focus();
  }, [status]);
  function mailto() {
    const v = getValues();
    return `mailto:${site.email}?subject=${encodeURIComponent(review ? "Website review enquiry" : "Project enquiry")}&body=${encodeURIComponent([`Name: ${v.name}`, `Reply to: ${v.email}`, `Website: ${v.websiteUrl}`, `Service: ${v.service}`, `Company: ${v.company}`, `Phone: ${v.phone}`, `Budget: ${v.budget}`, `Timeline: ${v.timeline}`, "", v.message].join("\n"))}`;
  }
  async function submit(values: ContactValues) {
    if (lock.current) return;
    lock.current = true;
    setStatus({ kind: "sending" });
    trackEvent("enquiry_submit", {
      service: values.service,
      source: context.source,
    });
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, ...context }),
        signal: controller.signal,
      });
      const payload = await res.json();
      if (res.ok && payload.ok) {
        setStatus({ kind: "sent" });
        trackEvent("enquiry_success", {
          service: values.service,
          source: context.source,
        });
        reset();
      } else {
        if (payload.errors)
          for (const [key, message] of Object.entries(payload.errors)) {
            if (key in contactLimits || key === "consent")
              setError(key as ContactField, {
                type: "server",
                message: String(message),
              });
          }
        setStatus({
          kind: "error",
          message:
            payload.error ||
            "Your enquiry could not be sent. Please try again or email us.",
        });
        trackEvent("enquiry_error", {
          service: values.service,
          source: context.source,
          kind: String(res.status),
        });
      }
    } catch {
      setStatus({
        kind: "error",
        message:
          "We could not confirm delivery. Your details are still here. Please try again or send them by email.",
      });
      trackEvent("enquiry_error", { source: context.source, kind: "network" });
    } finally {
      clearTimeout(timeout);
      lock.current = false;
    }
  }
  const error = (name: ContactField | "consent") =>
    errors[name] ? (
      <p id={`${name}-error`} className="field-error">
        {errors[name]?.message}
      </p>
    ) : null;
  const attrs = (name: ContactField) => ({
    "aria-invalid": !!errors[name],
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
    maxLength: contactLimits[name],
  });
  if (status.kind === "sent")
    return (
      <div
        ref={feedback}
        tabIndex={-1}
        role="status"
        className="border border-sand bg-white p-8 sm:p-10"
      >
        <Check className="h-8 w-8 text-indigo" aria-hidden />
        <h2 className="mt-6 text-step-3 font-semibold">
          Thank you. Your enquiry is on its way.
        </h2>
        <p className="mt-5 text-text-muted">
          Our email service has accepted your message for delivery. We’ll review
          the details and reply to the email address you provided with any
          questions or a useful next step.
        </p>
        <p className="mt-4 text-sm text-text-muted">
          No payment or project commitment has been made.
        </p>
        <Button
          className="mt-7"
          variant="dark"
          onClick={() => {
            setStatus({ kind: "idle" });
            started.current = false;
          }}
        >
          Send another enquiry
        </Button>
      </div>
    );
  return (
    <form
      onSubmit={handleSubmit(submit, () =>
        trackEvent("enquiry_error", {
          source: context.source,
          kind: "validation",
        }),
      )}
      noValidate
      aria-busy={status.kind === "sending"}
      onFocus={() => {
        if (!started.current) {
          trackEvent("enquiry_start", { source: context.source });
          started.current = true;
        }
      }}
      className="relative overflow-hidden rounded-md border border-sand bg-white p-6 shadow-[0_22px_55px_-42px_rgba(11,15,28,.55)] before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-champagne sm:p-10"
    >
      <p className="eyebrow text-text-muted">
        {review ? "Website review" : "Project enquiry"}
      </p>
      <h2 className="mt-4 text-step-3 font-semibold">
        {review
          ? "What would you like your website to do better?"
          : "Tell us what needs to change."}
      </h2>
      <p className="mt-4 text-sm text-text-muted">
        Name, email, and a short project description are all we need to start.
        Fields marked * are required.
      </p>
      <fieldset disabled={status.kind === "sending"} className="mt-8 space-y-6">
        <legend className="sr-only">Your project details</legend>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="field-label" htmlFor="contact-name">
              Name *
            </label>
            <input
              id="contact-name"
              autoComplete="name"
              className="field"
              {...attrs("name")}
              {...register("name", {
                required: "Please enter your name.",
                maxLength: {
                  value: 120,
                  message: "Use 120 characters or fewer.",
                },
              })}
            />
            {error("name")}
          </div>
          <div>
            <label className="field-label" htmlFor="contact-email">
              Email *
            </label>
            <input
              id="contact-email"
              type="email"
              autoComplete="email"
              className="field"
              {...attrs("email")}
              {...register("email", {
                required: "Please enter an email address.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                  message: "Enter a valid email address.",
                },
              })}
            />
            {error("email")}
          </div>
        </div>
        <div>
          <label className="field-label" htmlFor="contact-message">
            What do you want to achieve? *
          </label>
          <textarea
            id="contact-message"
            rows={5}
            className="field resize-y"
            placeholder="Tell us about the problem, who the website is for, and what a useful outcome would look like."
            {...attrs("message")}
            {...register("message", {
              required: "Please describe your project.",
              minLength: {
                value: 12,
                message: "Please add a short sentence about your goal.",
              },
            })}
          />
          {error("message")}
        </div>
        <div>
          <label className="field-label" htmlFor="contact-url">
            Website URL{" "}
            <span className="font-normal text-text-muted">(optional)</span>
          </label>
          <input
            id="contact-url"
            type="url"
            autoComplete="url"
            inputMode="url"
            placeholder="https://yourwebsite.com"
            className="field"
            {...attrs("websiteUrl")}
            {...register("websiteUrl", {
              validate: (v) =>
                !v ||
                validWebsite(v) ||
                "Enter a full website URL, beginning with https://.",
            })}
          />
          {error("websiteUrl")}
        </div>
        <div>
          <label className="field-label" htmlFor="contact-service">
            Interested service{" "}
            <span className="font-normal text-text-muted">(optional)</span>
          </label>
          <select
            id="contact-service"
            className="field"
            {...register("service")}
          >
            <option value="">Help me choose</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
          {error("service")}
        </div>
        <details className="border-y border-sand py-4">
          <summary className="flex min-h-11 cursor-pointer items-center py-2 text-sm font-semibold transition-colors hover:text-indigo">
            Add budget, timeline, or contact details{" "}
            <span className="font-normal text-text-muted">(optional)</span>
          </summary>
          <div className="grid gap-6 py-5 sm:grid-cols-2">
            <div>
              <label className="field-label" htmlFor="contact-budget">
                Budget range (USD)
              </label>
              <select
                id="contact-budget"
                className="field"
                {...register("budget")}
              >
                <option value="">Prefer to discuss</option>
                {budgetOptions.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="field-label" htmlFor="contact-timeline">
                Timeline
              </label>
              <select
                id="contact-timeline"
                className="field"
                {...register("timeline")}
              >
                <option value="">No fixed date</option>
                {timelineOptions.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="field-label" htmlFor="contact-company">
                Company
              </label>
              <input
                id="contact-company"
                autoComplete="organization"
                className="field"
                {...attrs("company")}
                {...register("company")}
              />
              {error("company")}
            </div>
            <div>
              <label className="field-label" htmlFor="contact-phone">
                Phone
              </label>
              <input
                id="contact-phone"
                type="tel"
                autoComplete="tel"
                className="field"
                {...attrs("phone")}
                {...register("phone")}
              />
              {error("phone")}
            </div>
          </div>
        </details>
        <div
          className="absolute h-px w-px overflow-hidden opacity-0"
          aria-hidden="true"
        >
          <label htmlFor="company-site-check">Leave this field empty</label>
          <input
            id="company-site-check"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>
        <div>
          <label className="flex items-start gap-3 text-sm leading-relaxed text-text-muted">
            <input
              type="checkbox"
              className="mt-1 h-5 w-5 shrink-0 accent-indigo"
              aria-invalid={!!errors.consent}
              aria-describedby={errors.consent ? "consent-error" : undefined}
              {...register("consent", {
                required:
                  "Please confirm that we may use these details to respond.",
              })}
            />
            <span>
              I agree that Quesiono may use these details to respond to my
              enquiry, as described in the{" "}
              <Link
                href="/privacy-policy"
                className="font-medium text-indigo underline underline-offset-4"
              >
                privacy policy
              </Link>
              . *
            </span>
          </label>
          {error("consent")}
        </div>
        <Button
          type="submit"
          variant="dark"
          disabled={status.kind === "sending"}
          className="w-full sm:w-auto"
        >
          {status.kind === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
              Sending enquiry…
            </>
          ) : (
            <>
              Send project enquiry
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </>
          )}
        </Button>
      </fieldset>
      {status.kind === "error" && (
        <div
          ref={feedback}
          tabIndex={-1}
          role="alert"
          className="mt-6 border-l-2 border-indigo bg-cream p-5"
        >
          <p className="text-sm font-medium">{status.message}</p>
          <a
            href={mailto()}
            className="mt-3 inline-flex min-h-11 items-center text-sm text-indigo underline underline-offset-4"
          >
            Open an email draft with your details ↗
          </a>
        </div>
      )}
      <p className="mt-5 text-xs leading-relaxed text-text-muted">
        This is an enquiry, not a booking. We’ll review it and reply with
        questions or next steps. You will not be subscribed to marketing emails.
      </p>
    </form>
  );
}
