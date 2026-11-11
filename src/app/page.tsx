import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HeroHome } from "@/components/sections/HeroHome";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
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
      <Section tone="cream" width="wide" id="business-problems" className="border-t-4 border-champagne">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow text-indigo">01 / Find your starting point</p>
            <h2 className="mt-5 max-w-md text-step-5 font-bold">
              What is your website <span className="text-indigo">not doing</span> for you?
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-text-muted">
              You do not need to know which service to buy. Choose the problem
              that sounds familiar, then explore a practical way forward.
            </p>
            <div className="mt-8 hidden h-px w-28 bg-champagne lg:block" aria-hidden />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {problems.map(([title, description, href], i) => (
              <Reveal key={href} delay={(i % 2) * 0.07} className="h-full">
                <Link
                  href={href}
                  className="premium-card group relative flex h-full min-h-[14rem] flex-col justify-between overflow-hidden rounded-md border border-sand bg-white p-5 hover:border-indigo hover:bg-indigo hover:shadow-[0_20px_45px_-28px_rgba(11,15,28,.7)] focus-visible:bg-indigo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne sm:p-6"
                >
                  <span aria-hidden className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-champagne transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                  <span className="flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold text-indigo group-hover:text-champagne group-focus-visible:text-champagne">0{i + 1} / THE CHALLENGE</span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-indigo transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-champagne group-focus-visible:text-champagne" aria-hidden />
                  </span>
                  <span className="mt-5 block">
                    <span className="block font-display text-step-1 font-bold leading-snug text-text-dark group-hover:text-vanilla group-focus-visible:text-vanilla">{title}</span>
                    <span className="mt-3 block text-sm leading-relaxed text-text-muted group-hover:text-vanilla/80 group-focus-visible:text-vanilla/80">{description}</span>
                  </span>
                </Link>
              </Reveal>
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
