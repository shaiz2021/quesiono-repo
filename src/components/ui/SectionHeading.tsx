"use client";

import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";
import { RevealText } from "@/components/motion/RevealText";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Section header: eyebrow, animated heading, optional lead paragraph.
 *
 * `accent` tints matching words in champagne so a single phrase can carry
 * emphasis without a second type style.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "light",
  as = "h2",
  size = "lg",
  accent = [],
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2" | "h3";
  size?: "md" | "lg" | "xl";
  accent?: string[];
  className?: string;
}) {
  const dark = tone === "dark";
  const sizes = {
    md: "text-step-4",
    lg: "text-step-5",
    xl: "text-step-6",
  };

  return (
    <div className={cn(align === "center" && "text-center", className)}>
      {eyebrow && (
        <Reveal>
          <Eyebrow tone={tone} centered={align === "center"}>
            {eyebrow}
          </Eyebrow>
        </Reveal>
      )}

      <RevealText
        as={as}
        text={title}
        accent={accent}
        delay={eyebrow ? 0.08 : 0}
        className={cn(
          "mt-5 font-display font-extrabold",
          sizes[size],
          dark ? "text-vanilla" : "text-text-dark"
        )}
      />

      {subtitle && (
        <Reveal delay={0.18}>
          <p
            className={cn(
              "mt-6 max-w-2xl text-step-1 leading-relaxed text-pretty",
              dark ? "text-vanilla/65" : "text-text-muted",
              align === "center" && "mx-auto"
            )}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
