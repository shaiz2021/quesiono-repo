"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  detail?: string[];
}

/**
 * Scroll-pinned process section. The left rail stays put and tracks progress
 * while the steps scroll past on the right.
 *
 * Below lg it collapses to a plain vertical list — pinning on a short mobile
 * viewport fights the user rather than helping them.
 */
export function StickyProcess({
  steps,
  eyebrow,
  title,
  intro,
  tone = "dark",
}: {
  steps: ProcessStep[];
  eyebrow: string;
  title: string;
  intro?: string;
  tone?: "dark" | "light";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 80%"],
  });
  const height = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 180,
    damping: 34,
  });

  const dark = tone === "dark";

  return (
    <div ref={ref} className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-20">
      {/* Sticky rail */}
      <div className="lg:sticky lg:top-32 lg:self-start">
        <p
          className={cn(
            "text-[0.7rem] font-semibold uppercase tracking-[0.22em]",
            dark ? "text-champagne" : "text-indigo"
          )}
        >
          {eyebrow}
        </p>
        <h2
          className={cn(
            "mt-4 font-display text-step-5 font-extrabold",
            dark ? "text-vanilla" : "text-text-dark"
          )}
        >
          {title}
        </h2>
        {intro && (
          <p
            className={cn(
              "mt-5 text-step-0 leading-relaxed",
              dark ? "text-vanilla/75" : "text-text-muted"
            )}
          >
            {intro}
          </p>
        )}

        <div className="mt-10 hidden items-center gap-4 lg:flex">
          <div
            className={cn(
              "relative h-40 w-0.5 overflow-hidden rounded-full",
              dark ? "bg-vanilla/15" : "bg-sand"
            )}
          >
            <motion.div
              className="absolute left-0 top-0 w-full rounded-full bg-champagne"
              style={{ height: reduced ? "100%" : height }}
            />
          </div>
          <span
            className={cn(
              "text-[0.7rem] uppercase tracking-[0.2em]",
              dark ? "text-vanilla/70" : "text-text-muted"
            )}
          >
            {steps.length} steps
          </span>
        </div>
      </div>

      {/* Steps */}
      <ol className="space-y-5 border-l border-champagne/35 pl-5 lg:border-l-0 lg:pl-0">
        {steps.map((step) => (
          <li
            key={step.step}
            className={cn(
              "premium-card group relative rounded-2xl border p-6 before:absolute before:-left-[1.56rem] before:top-8 before:h-2 before:w-2 before:rounded-full before:bg-champagne lg:before:hidden sm:p-9",
              dark
                ? "border-vanilla/10 bg-midnight/60 hover:border-champagne/60 hover:bg-indigo/60"
                : "border-sand bg-white hover:border-champagne/60"
            )}
          >
            <div className="flex items-start gap-5">
              <span
                className={cn(
                  "shrink-0 font-display text-step-4 font-extrabold leading-none",
                  dark ? "text-champagne" : "text-indigo"
                )}
              >
                {step.step}
              </span>
              <div className="min-w-0">
                <h3
                  className={cn(
                    "font-display text-step-2 font-bold",
                    dark ? "text-vanilla" : "text-text-dark"
                  )}
                >
                  {step.title}
                </h3>
                <p
                  className={cn(
                    "mt-3 leading-relaxed",
                    dark ? "text-vanilla/75" : "text-text-muted"
                  )}
                >
                  {step.description}
                </p>
                {step.detail && step.detail.length > 0 && (
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {step.detail.map((item) => (
                      <li
                        key={item}
                        className={cn(
                          "flex items-start gap-2 text-[0.92rem]",
                          dark ? "text-vanilla/75" : "text-text-muted"
                        )}
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-champagne" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
