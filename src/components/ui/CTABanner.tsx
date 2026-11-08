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
    <section className="bg-champagne text-ink">
      <div className="site-container grid gap-10 py-16 md:py-24 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <p className="eyebrow text-ink">{eyebrow}</p>
          <h2 className="mt-5 max-w-3xl text-step-5 font-bold">{title}</h2>
          {subtitle && <p className="mt-6 max-w-2xl text-ink/85">{subtitle}</p>}
        </div>
        <div className="flex flex-col items-start gap-5 lg:items-end">
          <Button href={primaryAction.href} variant="dark">
            {primaryAction.label}
            <ArrowUpRight className="h-5 w-5" aria-hidden />
          </Button>
          {secondaryAction && (
            <a
              href={secondaryAction.href}
              className="text-sm font-semibold underline underline-offset-4"
            >
              {secondaryAction.label}
            </a>
          )}
          {showEmail && (
            <a
              href={`mailto:${site.email}`}
              className="text-sm underline underline-offset-4"
            >
              {site.email}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
