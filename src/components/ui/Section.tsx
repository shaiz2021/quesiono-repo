import { cn } from "@/lib/utils";
import { GradientMesh } from "@/components/motion/GradientMesh";
import type { ReactNode } from "react";

export type SectionTone = "ink" | "midnight" | "indigo" | "cream" | "white";

const tones: Record<SectionTone, string> = {
  ink: "bg-ink text-vanilla",
  midnight: "bg-midnight text-vanilla",
  indigo: "bg-indigo text-vanilla",
  cream: "bg-cream text-text-dark",
  white: "bg-white text-text-dark",
};

const widths = {
  narrow: "max-w-3xl",
  prose: "max-w-4xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
  full: "max-w-none",
};

/**
 * Standard section shell: vertical rhythm, gutters, max-width, optional mesh
 * background. Every page section goes through this so spacing stays
 * consistent instead of being re-typed per file.
 */
export function Section({
  children,
  tone = "cream",
  width = "default",
  spacing = "lg",
  mesh = false,
  className,
  innerClassName,
  id,
}: {
  children: ReactNode;
  tone?: SectionTone;
  width?: keyof typeof widths;
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  mesh?: boolean;
  className?: string;
  innerClassName?: string;
  id?: string;
}) {
  const spacings = {
    none: "",
    sm: "py-12 md:py-16",
    md: "py-16 md:py-24",
    lg: "py-20 md:py-28 lg:py-32",
    xl: "py-24 md:py-36 lg:py-44",
  };

  const isDark = tone === "ink" || tone === "midnight" || tone === "indigo";

  return (
    <section
      id={id}
      className={cn("relative overflow-hidden", tones[tone], spacings[spacing], className)}
    >
      {mesh && <GradientMesh variant={isDark ? (tone === "ink" ? "ink" : "midnight") : "cream"} />}
      <div className="relative mx-auto w-full px-5 sm:px-8 lg:px-12">
        <div className={cn("mx-auto", widths[width], innerClassName)}>{children}</div>
      </div>
    </section>
  );
}
