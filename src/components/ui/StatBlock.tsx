"use client";

import { Counter } from "@/components/motion/Counter";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export interface Stat {
  /** Numeric target for the count-up. Omit when using `display`. */
  value?: number;
  /** Literal text for stats that aren't a single number ("24/7", "6 wks"). */
  display?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  /** Optional one-line qualifier so the number isn't left unexplained. */
  note?: string;
}

/**
 * Stat row with count-up numerals.
 *
 * `tone` describes the background it sits on. It defaults to light because
 * every stat row on the site is on cream or white — the old dark default
 * painted vanilla numerals onto cream, which read as blank space.
 */
export function StatBlock({
  stats,
  tone = "light",
  columns,
  className,
}: {
  stats: Stat[];
  tone?: "light" | "dark";
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  const dark = tone === "dark";
  const count = columns ?? (stats.length === 2 ? 2 : stats.length % 4 === 0 ? 4 : 3);
  const cols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <RevealGroup
      className={cn(
        "grid divide-y divide-dashed sm:divide-y-0",
        cols[count],
        dark ? "divide-vanilla/12" : "divide-sand",
        className
      )}
    >
      {stats.map((stat) => (
        <RevealItem
          key={stat.label}
          className={cn(
            "px-2 py-6 first:pt-0 sm:px-6 sm:py-0 sm:first:pt-0",
            dark ? "sm:border-l sm:border-vanilla/12" : "sm:border-l sm:border-sand"
          )}
        >
          <p
            className={cn(
              "font-display text-step-5 font-extrabold leading-none tracking-tight",
              dark ? "text-vanilla" : "text-text-dark"
            )}
          >
            {stat.display ?? (
              <Counter
                value={stat.value ?? 0}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimals={stat.decimals}
              />
            )}
          </p>
          <p
            className={cn(
              "mt-3 text-[0.78rem] font-semibold uppercase tracking-[0.16em]",
              dark ? "text-champagne" : "text-text-muted"
            )}
          >
            {stat.label}
          </p>
          {stat.note && (
            <p
              className={cn(
                "mt-2 text-[0.88rem] leading-relaxed",
                dark ? "text-vanilla/50" : "text-text-muted"
              )}
            >
              {stat.note}
            </p>
          )}
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
