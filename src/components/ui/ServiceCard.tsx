"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  tone?: "light" | "dark";
  /** Rendered as a champagne index in the corner. */
  index?: number;
  /** Short deliverable names — the concrete proof under the pitch. */
  tags?: string[];
  cta?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  href,
  tone = "dark",
  index,
  tags,
  cta = "See what's included",
}: ServiceCardProps) {
  const Icon = getIcon(icon);
  const reduced = useReducedMotion();
  const dark = tone === "dark";

  return (
    <motion.div
      initial={reduced ? undefined : { opacity: 0, y: 26 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        href={href}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-2xl border p-7 transition-all duration-400 ease-smooth hover:-translate-y-1.5 sm:p-9",
          dark
            ? "border-vanilla/10 bg-indigo/60 hover:border-champagne/50 hover:bg-indigo"
            : "border-sand bg-white hover:border-champagne hover:shadow-xl"
        )}
      >
        {/* Champagne wash that wipes in on hover. */}
        <span
          className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-champagne transition-transform duration-500 ease-smooth group-hover:scale-x-100"
          aria-hidden
        />

        <div className="flex items-start justify-between gap-4">
          <span
            className={cn(
              "grid h-12 w-12 shrink-0 place-items-center rounded-xl transition-colors duration-300",
              dark
                ? "bg-ink/70 text-champagne group-hover:bg-ink"
                : "bg-cream text-midnight group-hover:bg-sand/60"
            )}
          >
            <Icon className="h-6 w-6" />
          </span>
          {index !== undefined && (
            <span
              className={cn(
                "font-display text-[0.8rem] font-bold tracking-[0.14em]",
                dark ? "text-vanilla/25" : "text-sand"
              )}
            >
              {String(index).padStart(2, "0")}
            </span>
          )}
        </div>

        <h3
          className={cn(
            "mt-6 font-display text-step-2 font-bold leading-tight",
            dark ? "text-vanilla" : "text-text-dark"
          )}
        >
          {title}
        </h3>

        <p
          className={cn(
            "mt-4 flex-1 leading-relaxed",
            dark ? "text-vanilla/65" : "text-text-muted"
          )}
        >
          {description}
        </p>

        {tags && tags.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className={cn(
                  "rounded-full border px-2.5 py-1 text-[0.72rem] font-medium",
                  dark
                    ? "border-vanilla/15 text-vanilla/55"
                    : "border-sand text-text-muted"
                )}
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <span
          className={cn(
            "mt-8 inline-flex items-center gap-2 text-[0.9rem] font-semibold",
            dark ? "text-vanilla" : "text-midnight"
          )}
        >
          <span className="bg-gradient-to-r from-champagne to-champagne bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-400 ease-smooth group-hover:bg-[length:100%_1px]">
            {cta}
          </span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </Link>
    </motion.div>
  );
}
