import { ArrowUpRight } from "lucide-react";
import { Button } from "./Button";
import { site } from "@/lib/site";
export function CTABanner({
  title,
  subtitle,
  eyebrow = "A useful next step",
  primaryAction = { label: "Discuss Your Project", href: "/contact" },
  secondaryAction = { label: "Explore Our Work", href: "/portfolio" },
  showEmail = true,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  accent?: string[];
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string } | null;
  showEmail?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-champagne via-[#d4b674] to-sand text-ink">
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-40 h-[30rem] w-[30rem] rounded-full border border-ink/10" />
      <div aria-hidden className="pointer-events-none absolute -right-6 -top-20 h-[22rem] w-[22rem] rounded-full border border-ink/10" />
      <div className="site-container relative py-8 sm:py-12 lg:py-16">
        <div className="relative grid gap-8 overflow-hidden rounded-md bg-ink px-6 py-8 text-vanilla shadow-[0_24px_65px_-38px_rgba(11,15,28,.75)] sm:px-10 sm:py-11 lg:grid-cols-[1.35fr_.65fr] lg:items-end lg:px-14 lg:py-14">
          <div aria-hidden className="pointer-events-none absolute -bottom-36 right-[24%] hidden h-[25rem] w-[25rem] rounded-full border border-champagne/15 lg:block" />
          <div className="relative z-10">
            <p className="eyebrow text-champagne">{eyebrow} <span className="ml-2 text-vanilla/70">/ Quesiono</span></p>
            <h2 className="mt-5 max-w-3xl text-step-5 font-bold text-vanilla">{title}</h2>
            {subtitle && <p className="mt-5 max-w-2xl text-vanilla/65">{subtitle}</p>}
          </div>
          <div className="relative z-10 flex flex-col items-start gap-4 border-t border-vanilla/15 pt-6 lg:items-end lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <Button href={primaryAction.href} variant="accent" className="group">
              {primaryAction.label}
              <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </Button>
            {secondaryAction && (
              <a
                href={secondaryAction.href}
                className="inline-flex min-h-11 items-center text-sm font-semibold text-vanilla/75 underline decoration-vanilla/35 underline-offset-4 transition-colors hover:text-champagne hover:decoration-champagne"
              >
                {secondaryAction.label}
              </a>
            )}
            {showEmail && (
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-11 items-center text-sm text-vanilla/55 transition-colors hover:text-champagne"
              >
                {site.email}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
