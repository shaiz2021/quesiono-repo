"use client";

import { ArrowRight, Mail } from "lucide-react";
import { GradientMesh } from "@/components/motion/GradientMesh";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { RevealText } from "@/components/motion/RevealText";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "./Eyebrow";
import { site } from "@/lib/site";

interface CTABannerProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  /** Words in `title` to tint champagne. */
  accent?: string[];
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string } | null;
  /** Adds the email line under the buttons — good for page-bottom placements. */
  showEmail?: boolean;
}

/**
 * Closing call to action. One per page, at the bottom.
 */
export function CTABanner({
  title,
  subtitle,
  eyebrow = "Next step",
  accent = [],
  primaryAction = { label: "Start a project", href: "/contact" },
  secondaryAction = { label: "See the work", href: "/portfolio" },
  showEmail = true,
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 md:py-28 lg:py-32">
      <GradientMesh variant="ink" />

      <div className="relative mx-auto w-full px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <Eyebrow tone="dark" centered>
              {eyebrow}
            </Eyebrow>
          </Reveal>

          <RevealText
            as="h2"
            text={title}
            accent={accent}
            delay={0.08}
            className="mt-6 font-display text-step-6 font-extrabold text-vanilla"
          />

          {subtitle && (
            <Reveal delay={0.18}>
              <p className="mx-auto mt-6 max-w-2xl text-step-1 leading-relaxed text-vanilla/65 text-pretty">
                {subtitle}
              </p>
            </Reveal>
          )}

          <Reveal delay={0.26}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton href={primaryAction.href} variant="accent" size="lg">
                {primaryAction.label}
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              {secondaryAction && (
                <MagneticButton href={secondaryAction.href} variant="ghost" size="lg">
                  {secondaryAction.label}
                </MagneticButton>
              )}
            </div>
          </Reveal>

          {showEmail && (
            <Reveal delay={0.34}>
              <p className="mt-8 flex flex-wrap items-center justify-center gap-2 text-[0.9rem] text-vanilla/45">
                <Mail className="h-4 w-4 text-champagne" aria-hidden />
                Rather write first?
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-vanilla underline decoration-champagne decoration-2 underline-offset-4 transition-colors hover:text-champagne"
                >
                  {site.email}
                </a>
                <span className="text-vanilla/30">
                  — we reply within {site.responseTime}.
                </span>
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
