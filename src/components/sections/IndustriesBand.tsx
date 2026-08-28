import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { getIcon } from "@/lib/icons";
import { industries } from "@/data/industries";

/**
 * Sector band. Six cards, each linking to a full industry page — these exist
 * because "we work with everyone" reads as "we've never done yours".
 */
export function IndustriesBand() {
  return (
    <Section tone="cream" spacing="xl" width="wide" id="industries">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading
          eyebrow="Who we build for"
          title="Sectors we know the awkward parts of"
          subtitle="A clinic site and a Shopify store fail in completely different ways. Knowing which failure to design against saves a discovery round."
          size="xl"
          className="max-w-2xl"
        />
        <Link
          href="/industries"
          className="group inline-flex items-center gap-2 font-semibold text-indigo transition-colors hover:text-midnight"
        >
          Every sector
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </Link>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry, index) => {
          const Icon = getIcon(industry.icon);

          return (
            <Reveal key={industry.slug} delay={index * 0.06}>
              <Link
                href={industry.href}
                className="group flex h-full flex-col rounded-3xl border border-sand bg-white p-8 transition-all duration-400 ease-smooth hover:-translate-y-1.5 hover:border-midnight/25 hover:shadow-xl"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-midnight/[0.06] text-midnight transition-colors duration-300 group-hover:bg-indigo group-hover:text-vanilla">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-step-1 font-bold text-text-dark">
                  {industry.name}
                </h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-text-muted">
                  {industry.shortDescription}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-indigo">
                  How we work here
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
