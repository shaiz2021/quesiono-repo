import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { getFeaturedProjects, projects } from "@/data/projects";

/**
 * Home page work block: one feature card, then a two-up row.
 *
 * PortfolioCard draws its own SVG plate when a project has no `image`, so this
 * renders properly before any screenshots land in /public — the old version
 * gated everything on `project.image` and showed empty boxes.
 */
export function FeaturedWork() {
  const featured = getFeaturedProjects();
  const [lead, ...rest] = featured.length ? featured : projects;

  if (!lead) return null;

  return (
    <Section tone="ink" spacing="xl" width="wide" mesh id="work">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Eight builds, with the numbers attached"
          subtitle="Each case study says what the site was doing before, what we changed, and what happened after. Including the parts that took longer than we quoted."
          tone="dark"
          size="xl"
          className="max-w-2xl"
        />
        <Link
          href="/portfolio"
          className="group inline-flex items-center gap-2 font-semibold text-champagne transition-colors hover:text-vanilla"
        >
          All case studies
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </Link>
      </div>

      <div className="mt-16 space-y-8">
        <PortfolioCard
          title={lead.name}
          category={lead.category}
          slug={lead.slug}
          image={lead.image}
          imageAlt={lead.imageAlt}
          metric={lead.metric}
          metricLabel={lead.metricLabel}
          summary={lead.summary}
          tags={lead.tags}
          size="feature"
          priority
        />

        <div className="grid gap-8 md:grid-cols-2">
          {rest.slice(0, 2).map((project) => (
            <PortfolioCard
              key={project.slug}
              title={project.name}
              category={project.category}
              slug={project.slug}
              image={project.image}
              imageAlt={project.imageAlt}
              metric={project.metric}
              metricLabel={project.metricLabel}
              summary={project.summary}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
