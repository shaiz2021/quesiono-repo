import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { GradientMesh } from "@/components/motion/GradientMesh";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { ShowreelCanvas } from "@/components/motion/ShowreelCanvas";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

/**
 * The home page hero.
 *
 * 100svh rather than 100vh — on iOS Safari the viewport unit includes the
 * collapsing address bar, which pushed the CTAs below the fold on first paint.
 */
export function HeroHome() {
  const proof = [
    { value: `${services.length}`, label: "services, all documented" },
    { value: `${projects.length}`, label: "case studies with numbers" },
    { value: "96", label: "median mobile Lighthouse" },
  ];

  return (
    <header className="grain relative flex min-h-[100svh] flex-col overflow-hidden bg-ink">
      <GradientMesh variant="ink" drift />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-5 pb-16 pt-[calc(var(--nav-h)+3rem)] sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div>
            <Eyebrow tone="dark">Web design &amp; digital agency · Houston, TX</Eyebrow>

            <RevealText
              text="Websites that load fast, read clearly, and bring in work"
              as="h1"
              accent={["load", "fast,"]}
              className="mt-7 text-step-7 font-extrabold leading-[0.92] tracking-tight text-vanilla"
            />

            <p className="mt-8 max-w-xl text-step-1 leading-relaxed text-vanilla/65">
              We&apos;re a five-person studio. We design and build the site, write the words that
              go on it, and set up the search structure while it&apos;s still being built — because
              bolting that on afterwards costs three times as much and never quite works.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <MagneticButton href="/contact" variant="accent" size="lg">
                Start a project
                <ArrowRight className="h-5 w-5" aria-hidden />
              </MagneticButton>
              <Button href="/portfolio" variant="ghost" size="lg">
                See the work
              </Button>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-vanilla/10 pt-8">
              {proof.map((item) => (
                <div key={item.label}>
                  <dt className="font-display text-step-2 font-extrabold text-champagne">
                    {item.value}
                  </dt>
                  <dd className="mt-1 text-[0.8rem] leading-snug text-vanilla/50">{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <Reveal direction="up" delay={0.15}>
            <ShowreelCanvas label="quesiono.com" />

            <div className="mt-6 flex items-center justify-center gap-2 text-[0.85rem] text-vanilla/45">
              <span className="flex gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-champagne text-champagne" />
                ))}
              </span>
              <Link
                href="/testimonials"
                className="underline-offset-4 transition-colors hover:text-vanilla hover:underline"
              >
                What clients said afterwards
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </header>
  );
}
