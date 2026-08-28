"use client";

import { Check, Minus } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { cn } from "@/lib/utils";

export interface PricingTier {
  name: string;
  /** Formatted, e.g. "$2,400" or "From $6,000". Kept as text so currency and
   *  qualifiers stay in the data rather than being assembled in the view. */
  price: string;
  period?: string;
  summary: string;
  features: string[];
  /** Shown greyed with a dash — makes the tier boundary honest. */
  excludes?: string[];
  timeline?: string;
  bestFor?: string;
  highlight?: boolean;
  cta?: { label: string; href: string };
}

export function PricingTable({
  tiers,
  tone = "light",
  note,
  className,
}: {
  tiers: PricingTier[];
  tone?: "light" | "dark";
  note?: string;
  className?: string;
}) {
  const dark = tone === "dark";

  return (
    <div className={className}>
      <RevealGroup
        className={cn(
          "grid items-start gap-6",
          tiers.length === 2
            ? "md:grid-cols-2"
            : tiers.length >= 4
              ? "md:grid-cols-2 xl:grid-cols-4"
              : "md:grid-cols-3"
        )}
      >
        {tiers.map((tier) => (
          <RevealItem key={tier.name} className="h-full">
            <div
              className={cn(
                "relative flex h-full flex-col rounded-3xl border p-8",
                tier.highlight
                  ? dark
                    ? "border-champagne/60 bg-indigo shadow-2xl md:-mt-4 md:pb-12"
                    : "border-champagne bg-white shadow-xl md:-mt-4 md:pb-12"
                  : dark
                    ? "border-vanilla/10 bg-midnight/60"
                    : "border-sand bg-white"
              )}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-8 rounded-full bg-champagne px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-ink">
                  Most chosen
                </span>
              )}

              <h3
                className={cn(
                  "font-display text-step-2 font-extrabold",
                  dark ? "text-vanilla" : "text-text-dark"
                )}
              >
                {tier.name}
              </h3>
              <p
                className={cn(
                  "mt-2 min-h-[3rem] text-[0.95rem] leading-relaxed",
                  dark ? "text-vanilla/60" : "text-text-muted"
                )}
              >
                {tier.summary}
              </p>

              <p className="mt-6 flex items-baseline gap-1.5">
                <span
                  className={cn(
                    "font-display text-step-4 font-extrabold tracking-tight",
                    dark ? "text-vanilla" : "text-text-dark"
                  )}
                >
                  {tier.price}
                </span>
                {tier.period && (
                  <span
                    className={cn(
                      "text-[0.85rem]",
                      dark ? "text-vanilla/45" : "text-text-muted"
                    )}
                  >
                    {tier.period}
                  </span>
                )}
              </p>

              {(tier.timeline || tier.bestFor) && (
                <dl
                  className={cn(
                    "mt-6 space-y-2 border-t pt-5 text-[0.85rem]",
                    dark ? "border-vanilla/10" : "border-sand"
                  )}
                >
                  {tier.timeline && (
                    <div className="flex gap-2">
                      <dt className={dark ? "text-vanilla/40" : "text-text-muted"}>
                        Timeline
                      </dt>
                      <dd className={cn("font-medium", dark ? "text-vanilla/80" : "text-text-dark")}>
                        {tier.timeline}
                      </dd>
                    </div>
                  )}
                  {tier.bestFor && (
                    <div className="flex gap-2">
                      <dt className={dark ? "text-vanilla/40" : "text-text-muted"}>
                        Best for
                      </dt>
                      <dd className={cn("font-medium", dark ? "text-vanilla/80" : "text-text-dark")}>
                        {tier.bestFor}
                      </dd>
                    </div>
                  )}
                </dl>
              )}

              <ul
                className={cn(
                  "mt-6 flex-1 space-y-3 border-t pt-6 text-[0.93rem]",
                  dark ? "border-vanilla/10" : "border-sand"
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-champagne"
                      aria-hidden
                    />
                    <span className={dark ? "text-vanilla/75" : "text-text-dark"}>
                      {feature}
                    </span>
                  </li>
                ))}
                {tier.excludes?.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Minus
                      className={cn(
                        "mt-0.5 h-4 w-4 shrink-0",
                        dark ? "text-vanilla/25" : "text-text-muted/50"
                      )}
                      aria-hidden
                    />
                    <span className={dark ? "text-vanilla/35" : "text-text-muted/70"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <MagneticButton
                href={tier.cta?.href ?? "/contact"}
                variant={
                  tier.highlight ? "accent" : dark ? "ghost" : "outline"
                }
                fullWidth
                className="mt-8"
              >
                {tier.cta?.label ?? `Scope a ${tier.name.toLowerCase()} build`}
              </MagneticButton>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      {note && (
        <p
          className={cn(
            "mt-8 text-center text-[0.88rem]",
            dark ? "text-vanilla/45" : "text-text-muted"
          )}
        >
          {note}
        </p>
      )}
    </div>
  );
}
