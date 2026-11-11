import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/data/industries";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CTABanner } from "@/components/ui/CTABanner";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata({
  title: "Website Solutions by Industry",
  description:
    "Explore sector-specific website needs for SaaS, retail, hospitality, real estate, healthcare and professional services.",
  path: "/industries",
});
export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Your business context"
        title="Different customers. Different decisions."
        description="The right website starts with the way your customers choose. Explore the journeys, content, and practical requirements that matter in your sector."
        trail={[{ name: "Industries", href: "/industries" }]}
        light
      />
      <Section width="wide" tone="white">
        <div className="grid gap-4 md:grid-cols-2">
          {industries.map((i, n) => (
            <Link
              key={i.slug}
              href={i.href}
              className="premium-card group relative flex min-h-[17rem] flex-col overflow-hidden rounded-md border border-sand bg-cream p-6 hover:border-indigo hover:bg-indigo hover:shadow-lg focus-visible:bg-indigo sm:p-8"
            >
              <span aria-hidden className="absolute -bottom-10 -right-5 font-display text-[9rem] font-bold leading-none text-indigo/[.045] transition-colors group-hover:text-vanilla/[.06]">0{n + 1}</span>
              <div className="relative flex justify-between">
                <span className="text-xs font-semibold text-indigo group-hover:text-champagne group-focus-visible:text-champagne">0{n + 1} / Industry</span>
                <ArrowUpRight className="h-5 w-5 text-indigo transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-champagne group-focus-visible:text-champagne" aria-hidden />
              </div>
              <h2 className="relative mt-8 text-step-3 font-semibold group-hover:text-vanilla group-focus-visible:text-vanilla">{i.name}</h2>
              <p className="relative mt-4 max-w-lg flex-1 text-text-muted group-hover:text-vanilla/80 group-focus-visible:text-vanilla/80">
                {i.shortDescription}
              </p>
              <span className="relative mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-indigo group-hover:text-champagne group-focus-visible:text-champagne">
                Explore your sector ↗
              </span>
            </Link>
          ))}
        </div>
      </Section>
      <CTABanner
        title="Your business does not fit neatly into a category?"
        subtitle="Tell us who your customers are and what they need to do. That is a better starting point than a label."
        primaryAction={{
          label: "Discuss your business",
          href: "/contact?source=%2Findustries",
        }}
      />
    </>
  );
}
