import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HeroHome } from "@/components/sections/HeroHome";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Section } from "@/components/ui/Section";
import { CTABanner } from "@/components/ui/CTABanner";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { homeFaqs } from "@/data/studio";
import { industries } from "@/data/industries";
import { buildMetadata } from "@/lib/metadata";
import { enquiryHref } from "@/lib/enquiry";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, graph, webPageSchema } from "@/lib/schema";
export const metadata = buildMetadata({
  title: "Web Design, Development & SEO Agency",
  description:
    "Clear websites, useful software, and a better path to enquiry. Explore Quesiono’s web design, development, ecommerce, SEO, and content services.",
  path: "/",
});
const problems = [
  [
    "Our website no longer reflects our business.",
    "Give your offer a clearer structure and a stronger first impression.",
    "/services/web-design",
  ],
  [
    "People visit, but they do not enquire.",
    "Review the message, the evidence, and the steps between interest and action.",
    "/services/ui-ux-design",
  ],
  [
    "The store is getting in the way of sales.",
    "Make products easier to find and the purchase easier to complete.",
    "/services/ecommerce-development",
  ],
  [
    "We are hard to find in search.",
    "Identify the technical and content gaps holding back relevant pages.",
    "/services/seo",
  ],
  [
    "Our website feels slow or unreliable.",
    "Measure the bottlenecks and prioritize fixes that affect real visitors.",
    "/services/speed-optimization",
  ],
  [
    "Updating the site takes too much effort.",
    "Give your team better editing tools and a practical support plan.",
    "/services/website-maintenance",
  ],
];
export default function HomePage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/",
            name: "Quesiono — Web Design, Development & SEO",
            description:
              "Websites and digital services built around business needs.",
          }),
          faqSchema(homeFaqs),
        )}
      />
      <HeroHome />
      <Section tone="white" width="wide" id="business-problems">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-text-muted">Sound familiar?</p>
            <h2 className="mt-5 max-w-md text-step-5 font-bold">
              Your website should help.
              <br />
              Not hold you back.
            </h2>
            <p className="mt-6 max-w-sm text-text-muted">
              You do not need to know the technical answer. Start with the part
              that is not working.
            </p>
          </div>
          <div>
            {problems.map(([title, description, href], i) => (
              <Link
                href={href}
                key={href}
                className="group grid grid-cols-[1.5rem_1fr_1.2rem] gap-4 border-t border-sand py-6"
              >
                <span className="pt-1 text-xs text-text-muted">0{i + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {description}
                  </p>
                </div>
                <ArrowUpRight
                  className="h-5 w-5 text-indigo transition-transform group-hover:-translate-y-1"
                  aria-hidden
                />
              </Link>
            ))}
          </div>
        </div>
      </Section>
      <ServicesPreview />
      <FeaturedWork />
      <PrinciplesSection />
      <ProcessSection />
      <TestimonialsSection />
      <Section width="wide" tone="cream">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-text-muted">
              Built around your customers
            </p>
            <h2 className="mt-5 text-step-5 font-bold">
              The right experience
              <br />
              depends on the business.
            </h2>
            <p className="mt-6 max-w-lg text-text-muted">
              A clinic needs a reassuring route to an appointment. A retailer
              needs useful product discovery. Explore the questions that shape
              your sector.
            </p>
            <Link href="/industries" className="text-link mt-6">
              Explore all industries ↗
            </Link>
          </div>
          <div>
            {industries.map((i) => (
              <Link
                key={i.slug}
                href={i.href}
                className="flex min-h-16 items-center justify-between gap-4 border-b border-sand py-4 font-display text-lg font-semibold"
              >
                {i.name}
                <ArrowUpRight className="h-4 w-4 text-indigo" aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      </Section>
      <Section tone="white" width="wide" id="faq">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="eyebrow text-text-muted">Before we begin</p>
            <h2 className="mt-5 text-step-5 font-bold">
              A few useful answers.
            </h2>
            <Link href="/faq" className="text-link mt-6">
              Read all FAQs ↗
            </Link>
          </div>
          <FaqAccordion faqs={homeFaqs} />
        </div>
      </Section>
      <Section tone="cream" width="wide" spacing="md">
        <div className="flex flex-wrap items-center justify-between gap-8 border-y border-sand py-8">
          <div>
            <h2 className="text-step-2 font-semibold">
              Still working out what needs to change?
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-text-muted">
              Read the{" "}
              <Link
                className="underline underline-offset-4"
                href="/blog/website-redesign-checklist"
              >
                website redesign checklist
              </Link>
              , or share your URL and the problem you want to solve.
            </p>
          </div>
          <Link
            href={enquiryHref(undefined, "/", "website-review")}
            className="text-link"
          >
            Ask about a website review ↗
          </Link>
        </div>
      </Section>
      <CTABanner
        title="Have a website that isn’t doing enough for your business?"
        subtitle="Tell us what needs to change. We’ll help you work out a useful next step."
        primaryAction={{
          label: "Discuss Your Project",
          href: enquiryHref(undefined, "/"),
        }}
        secondaryAction={{ label: "Understand the process", href: "/process" }}
      />
    </>
  );
}
