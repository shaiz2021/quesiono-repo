"use client";

import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

export interface Feature {
  icon?: string;
  title: string;
  description: string;
}

/**
 * Icon + title + description card grid. Replaces the block that was
 * copy-pasted into every service page.
 */
export function FeatureGrid({
  features,
  tone = "light",
  columns = 3,
  numbered = false,
  className,
}: {
  features: Feature[];
  tone?: "light" | "dark";
  columns?: 2 | 3 | 4;
  /** Show a champagne index instead of an icon. */
  numbered?: boolean;
  className?: string;
}) {
  const dark = tone === "dark";
  const cols = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <RevealGroup className={cn("grid gap-5", cols[columns], className)}>
      {features.map((feature, i) => {
        const Icon = getIcon(feature.icon);
        return (
          <RevealItem key={feature.title}>
            <div
              className={cn(
                "group h-full rounded-2xl border p-7 transition-all duration-300 ease-smooth hover:-translate-y-1",
                dark
                  ? "border-vanilla/10 bg-indigo/50 hover:border-champagne/40 hover:bg-indigo/80"
                  : "border-sand bg-white hover:border-champagne/60 hover:shadow-lg"
              )}
            >
              {numbered ? (
                <span className="font-display text-step-3 font-extrabold text-champagne">
                  {String(i + 1).padStart(2, "0")}
                </span>
              ) : (
                <span
                  className={cn(
                    "grid h-12 w-12 place-items-center rounded-xl transition-colors",
                    dark
                      ? "bg-ink/60 text-champagne group-hover:bg-ink"
                      : "bg-cream text-midnight group-hover:bg-sand/60"
                  )}
                >
                  <Icon className="h-6 w-6" />
                </span>
              )}

              <h3
                className={cn(
                  "mt-5 font-display text-step-1 font-bold",
                  dark ? "text-vanilla" : "text-text-dark"
                )}
              >
                {feature.title}
              </h3>
              <p
                className={cn(
                  "mt-3 leading-relaxed",
                  dark ? "text-vanilla/65" : "text-text-muted"
                )}
              >
                {feature.description}
              </p>
            </div>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
