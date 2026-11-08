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
        <div className="grid gap-x-14 gap-y-4 md:grid-cols-2">
          {industries.map((i, n) => (
            <Link
              key={i.slug}
              href={i.href}
              className="group border-t border-sand py-8"
            >
              <div className="flex justify-between">
                <span className="text-xs text-text-muted">0{n + 1}</span>
                <ArrowUpRight className="h-5 w-5 text-indigo" aria-hidden />
              </div>
              <h2 className="mt-5 text-step-3 font-semibold">{i.name}</h2>
              <p className="mt-4 max-w-lg text-text-muted">
                {i.shortDescription}
              </p>
              <span className="mt-5 inline-block text-sm font-semibold text-indigo">
                Explore your sector
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
