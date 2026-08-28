"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Ties the quote to real work. Links to the case study when a slug is given. */
  projectTitle?: string;
  projectSlug?: string;
  /** The service this client bought — useful on service pages. */
  service?: string;
  tone?: "light" | "dark";
  size?: "default" | "feature";
}

export function TestimonialCard({
  quote,
  name,
  role,
  company,
  projectTitle,
  projectSlug,
  service,
  tone = "light",
  size = "default",
}: TestimonialCardProps) {
  const reduced = useReducedMotion();
  const dark = tone === "dark";
  const feature = size === "feature";

  return (
    <motion.figure
      initial={reduced ? undefined : { opacity: 0, y: 26 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative flex h-full flex-col rounded-3xl border p-8 transition-colors duration-400 sm:p-10",
        dark
          ? "border-vanilla/10 bg-indigo/50 hover:border-champagne/40"
          : "border-sand bg-white hover:border-champagne/60"
      )}
    >
      {/* Oversized quote mark, set in the display face and clipped by padding. */}
      <span
        className={cn(
          "pointer-events-none absolute right-7 top-3 select-none font-display text-[5.5rem] font-extrabold leading-none",
          dark ? "text-vanilla/[0.07]" : "text-sand/70"
        )}
        aria-hidden
      >
        &rdquo;
      </span>

      <blockquote
        className={cn(
          "relative flex-1 font-display font-semibold leading-snug tracking-tight text-pretty",
          feature ? "text-step-3" : "text-step-1",
          dark ? "text-vanilla" : "text-text-dark"
        )}
      >
        {quote}
      </blockquote>

      <figcaption
        className={cn(
          "mt-8 flex items-center gap-4 border-t pt-6",
          dark ? "border-vanilla/10" : "border-sand"
        )}
      >
        <span
          className={cn(
            "grid h-11 w-11 shrink-0 place-items-center rounded-full font-display text-step-0 font-bold",
            dark ? "bg-champagne text-ink" : "bg-midnight text-vanilla"
          )}
          aria-hidden
        >
          {name.charAt(0)}
        </span>
        <span className="min-w-0">
          <span
            className={cn(
              "block font-semibold",
              dark ? "text-vanilla" : "text-text-dark"
            )}
          >
            {name}
          </span>
          <span
            className={cn(
              "block text-[0.85rem]",
              dark ? "text-vanilla/50" : "text-text-muted"
            )}
          >
            {role}, {company}
          </span>
        </span>
      </figcaption>

      {(projectTitle || service) && (
        <p
          className={cn(
            "mt-4 text-[0.8rem] uppercase tracking-[0.13em]",
            dark ? "text-vanilla/40" : "text-text-muted"
          )}
        >
          {projectSlug && projectTitle ? (
            <Link
              href={`/portfolio/${projectSlug}`}
              className="underline decoration-champagne decoration-2 underline-offset-4 transition-colors hover:text-champagne"
            >
              {projectTitle}
            </Link>
          ) : (
            projectTitle
          )}
          {projectTitle && service && <span aria-hidden> · </span>}
          {service}
        </p>
      )}
    </motion.figure>
  );
}
