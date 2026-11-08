import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { Section } from "@/components/ui/Section";
export function FeaturedWork() {
  return (
    <Section tone="cream" width="wide" id="selected-work">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow text-text-muted">Selected portfolio</p>
          <h2 className="mt-4 max-w-2xl text-step-5 font-bold">
            Different businesses.
            <br />
            Thoughtful digital experiences.
          </h2>
        </div>
        <Link href="/portfolio" className="text-link">
          Explore the portfolio
          <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {projects
          .filter((p) => p.evidence === "visual")
          .slice(0, 2)
          .map((p) => (
            <PortfolioCard key={p.slug} title={p.name} {...p} />
          ))}
      </div>
    </Section>
  );
}
