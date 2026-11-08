import Link from "next/link";
import { studioFaqGroups, studioFaqs } from "@/data/studio";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CTABanner } from "@/components/ui/CTABanner";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, faqSchema } from "@/lib/schema";
export const metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers about website project costs, timing, platforms, ownership, collaboration and ongoing support at Quesiono.",
  path: "/faq",
});
export default function FaqPage() {
  return (
    <>
      <JsonLd data={graph(faqSchema(studioFaqs))} />
      <PageHero
        eyebrow="Before you decide"
        title="Useful questions. Straightforward answers."
        description="A place to start when you are comparing options, planning a budget, or working out how a website project fits into your business."
        trail={[{ name: "FAQ", href: "/faq" }]}
        light
      />
      <Section width="wide" tone="white">
        <div className="grid gap-12 lg:grid-cols-[.5fr_1.5fr]">
          <nav
            aria-label="Question categories"
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="eyebrow text-text-muted">Jump to a topic</p>
            {studioFaqGroups.map((g, i) => (
              <a
                key={g.label}
                href={`#questions-${i}`}
                className="mt-4 block py-2 text-sm font-semibold text-indigo"
              >
                {g.label} ↓
              </a>
            ))}
            <div className="mt-8 border-t border-sand pt-5">
              <Link href="/pricing" className="text-link">
                Pricing guide ↗
              </Link>
              <br />
              <Link href="/process" className="text-link">
                Our process ↗
              </Link>
            </div>
          </nav>
          <div className="space-y-16">
            {studioFaqGroups.map((g, i) => (
              <section key={g.label} id={`questions-${i}`}>
                <h2 className="text-step-3 font-semibold">{g.label}</h2>
                <FaqAccordion faqs={g.faqs} className="mt-7" />
              </section>
            ))}
          </div>
        </div>
      </Section>
      <CTABanner
        title="Have a question about your own project?"
        subtitle="Share the context and we can give you a more useful answer."
        primaryAction={{
          label: "Ask about your project",
          href: "/contact?source=%2Ffaq",
        }}
        secondaryAction={{
          label: "Explore service-specific FAQs",
          href: "/services",
        }}
      />
    </>
  );
}
