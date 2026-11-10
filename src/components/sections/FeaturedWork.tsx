import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { Section } from "@/components/ui/Section";
export function FeaturedWork() {
  return (
    <Section tone="cream" width="wide" id="selected-work">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="eyebrow text-text-muted">Selected portfolio / real project visuals</p>
          <h2 className="mt-4 max-w-2xl text-step-5 font-bold">Work that meets the business where it is.</h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
            Explore the supplied project presentations and see how different
            businesses use their websites to explain services, show products,
            and help visitors take the next step.
          </p>
        </div>
        <Link href="/portfolio" className="text-link min-h-11">
          Explore the portfolio
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-7 lg:mt-14 lg:gap-8">
        {projects
          .filter((p) => p.evidence === "visual")
          .slice(0, 4)
          .map((p) => (
            <PortfolioCard key={p.slug} title={p.name} {...p} />
          ))}
      </div>
      <p className="mt-6 max-w-3xl border-l-2 border-champagne pl-4 text-xs leading-relaxed text-text-muted">
        These entries describe the supplied website visuals. Delivery scope and
        commercial outcomes are included only where Quesiono has supporting
        records to publish.
      </p>
    </Section>
  );
}
