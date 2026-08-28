import type { Metadata } from "next";

import { HeroHome } from "@/components/sections/HeroHome";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { IndustriesBand } from "@/components/sections/IndustriesBand";
import { ProductsStrip } from "@/components/sections/ProductsStrip";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { JournalRail } from "@/components/sections/JournalRail";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatBlock } from "@/components/ui/StatBlock";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CapabilityStrip } from "@/components/ui/CapabilityStrip";
import { CTABanner } from "@/components/ui/CTABanner";

import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema, graph, itemListSchema, webPageSchema } from "@/lib/schema";
import { homeFaqs, studioStats } from "@/data/studio";
import { services } from "@/data/services";

export const metadata: Metadata = buildMetadata({
  title: "Web Design & Digital Agency in Houston | Quesiono",
  description:
    "Quesiono is a Houston web design and digital agency. We design and build fast, search-ready websites, then write the content and run the SEO that gets them found.",
  path: "/",
  eyebrow: "Web design & digital agency",
  keywords: [
    "web design agency",
    "digital agency Houston",
    "web design and development company",
    "custom website design",
    "Next.js development agency",
    "SEO services",
    "ecommerce web design",
    "conversion focused web design",
    "content writing services",
    "website redesign agency",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/",
            name: "Web Design & Digital Agency in Houston | Quesiono",
            description:
              "Houston web design and digital agency. Fast, search-ready websites, written content, and SEO that brings in work.",
          }),
          itemListSchema({
            name: "Services at Quesiono",
            items: services
              .filter((service) => !service.parentService)
              .map((service) => ({
                name: service.name,
                href: service.href,
                description: service.shortDescription,
              })),
          }),
          faqSchema(homeFaqs)
        )}
      />

      <HeroHome />

      <CapabilityStrip tone="midnight" />

      <Section tone="cream" spacing="lg" width="wide">
        <StatBlock stats={studioStats} columns={4} />
      </Section>

      <ServicesPreview />
      <FeaturedWork />
      <PrinciplesSection />
      <ProcessSection />
      <IndustriesBand />
      <ProductsStrip />
      <TestimonialsSection />
      <JournalRail />

      <Section tone="cream" spacing="xl" width="prose" id="faq">
        <SectionHeading
          eyebrow="Before you ask"
          title="The six questions we get every week"
          subtitle="Longer answers, plus another ten, live on the FAQ page."
          align="center"
          size="xl"
        />
        <FaqAccordion faqs={homeFaqs} className="mt-14" />
      </Section>

      <CTABanner
        eyebrow="Let's start"
        title="Tell us what the site needs to do"
        subtitle="Not a brief, not a spec — just the goal and the constraint. You'll get a straight answer on scope, timeline and cost, usually inside one working day."
        primaryAction={{ label: "Start a project", href: "/contact" }}
        secondaryAction={{ label: "See pricing", href: "/pricing" }}
        showEmail
      />
    </>
  );
}
