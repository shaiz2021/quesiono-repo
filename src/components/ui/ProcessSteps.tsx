"use client";

import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";
import type { ProcessStep } from "@/components/motion/StickyProcess";

/**
 * Plain numbered step list with a connecting rule. The lighter counterpart to
 * StickyProcess — use this inside a page that already has a pinned section, or
 * where the process is a supporting detail rather than the main event.
 */
export function ProcessSteps({
  steps,
  tone = "light",
  layout = "vertical",
  className,
}: {
  steps: ProcessStep[];
  tone?: "light" | "dark";
  layout?: "vertical" | "horizontal";
  className?: string;
}) {
  const dark = tone === "dark";

  if (layout === "horizontal") {
    return (
      <ol
        className={cn(
          "grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
          className
        )}
      >
        {steps.map((step, i) => (
          <Reveal key={step.step} delay={i * 0.07} className="h-full">
            <li className="relative h-full list-none">
              {/* Connector, desktop only — it would collide with stacked cards. */}
              {i < steps.length - 1 && (
                <span
                  className={cn(
                    "absolute left-14 right-0 top-5 hidden h-px lg:block",
                    dark ? "bg-vanilla/15" : "bg-sand"
                  )}
                  aria-hidden
                />
              )}
              <span
                className={cn(
                  "relative grid h-10 w-10 place-items-center rounded-full border font-display text-[0.85rem] font-bold",
                  dark
                    ? "border-champagne/50 bg-ink text-champagne"
                    : "border-champagne bg-cream text-midnight"
                )}
              >
                {step.step}
              </span>
              <h3
                className={cn(
                  "mt-6 font-display text-step-1 font-bold",
                  dark ? "text-vanilla" : "text-text-dark"
                )}
              >
                {step.title}
              </h3>
              <p
                className={cn(
                  "mt-3 leading-relaxed",
                  dark ? "text-vanilla/65" : "text-text-muted"
                )}
              >
                {step.description}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    );
  }

  return (
    <ol className={cn("relative space-y-10", className)}>
      {/* Spine runs the full height behind the markers. */}
      <span
        className={cn(
          "absolute bottom-6 left-5 top-6 w-px",
          dark ? "bg-vanilla/12" : "bg-sand"
        )}
        aria-hidden
      />
      {steps.map((step, i) => (
        <Reveal key={step.step} delay={i * 0.06}>
          <li className="relative list-none pl-16">
            <span
              className={cn(
                "absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border font-display text-[0.85rem] font-bold",
                dark
                  ? "border-champagne/50 bg-ink text-champagne"
                  : "border-champagne bg-cream text-midnight"
              )}
            >
              {step.step}
            </span>
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
                "mt-3 max-w-2xl leading-relaxed",
                dark ? "text-vanilla/65" : "text-text-muted"
              )}
            >
              {step.description}
            </p>
            {step.detail && step.detail.length > 0 && (
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {step.detail.map((item) => (
                  <li
                    key={item}
                    className={cn(
                      "flex items-start gap-2 text-[0.92rem]",
                      dark ? "text-vanilla/55" : "text-text-muted"
                    )}
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-champagne" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
