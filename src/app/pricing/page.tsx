import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Minus } from "lucide-react";

import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { PricingTable } from "@/components/ui/PricingTable";
import { StatBlock } from "@/components/ui/StatBlock";
import { CTABanner } from "@/components/ui/CTABanner";

import { GradientMesh } from "@/components/motion/GradientMesh";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { MagneticButton } from "@/components/motion/MagneticButton";

import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, graph, webPageSchema } from "@/lib/schema";
import { getServiceBySlug } from "@/data/services";
import {
  pricingBands,
  pricingFactors,
  retainerTiers,
  studioFaqGroups,
  studioStats,
} from "@/data/studio";

export const metadata: Metadata = buildMetadata({
  title: "Web Design Pricing — Real Numbers, Fixed Scope | Quesiono",
  description:
    "What a website actually costs: landing pages from $117, marketing sites $118–$437, ecommerce from $306. Fixed scope, fixed price, no hourly billing.",
  path: "/pricing",
  eyebrow: "Pricing",
  keywords: [
    "web design pricing",
    "how much does a website cost",
    "website design cost",
    "ecommerce website cost",
    "SEO retainer pricing",
    "web development pricing",
    "fixed price web design",
    "website maintenance cost",
  ],
});

/* Pulled from the shared FAQ data — the money answers, plus the two people
   always ask on a pricing page specifically. */
const pricingFaqs = [
  studioFaqGroups[1].faqs[0],
  studioFaqGroups[1].faqs[1],
  studioFaqGroups[1].faqs[3],
  studioFaqGroups[1].faqs[2],
  studioFaqGroups[1].faqs[4],
  studioFaqGroups[2].faqs[4],
];

const notIncluded = [
  {
    label: "Ad spend and media buying",
    detail: "We don't run paid campaigns. We'll build the landing pages for whoever does.",
  },
  {
    label: "Stock photography licences",
    detail: "Usually $15–$100 total. We'll pick the images; the licence goes in your name.",
  },
  {
    label: "Domains and hosting fees",
    detail: "Roughly $7.50–$30 a month depending on the stack. Paid to the host, not to us.",
  },
  {
    label: "Third-party subscriptions",
    detail: "Shopify, a CRM, an email platform. We configure them; you own the accounts.",
  },
];

export default function PricingPage() {
  const trail = [{ name: "Pricing", href: "/pricing" }];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/pricing",
            name: "Web Design Pricing — Real Numbers, Fixed Scope | Quesiono",
            description:
              "Project and retainer pricing for web design, development, SEO and content work.",
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }, ...trail]),
          faqSchema(pricingFaqs)
        )}
      />

      <header className="grain relative overflow-hidden bg-ink">
        <GradientMesh variant="ink" drift />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-[calc(var(--nav-h)+4rem)] sm:px-8 lg:px-12 lg:pb-28">
          <Breadcrumbs trail={trail} tone="dark" emitSchema={false} />
          <div className="mt-8">
            <Eyebrow tone="dark">Pricing</Eyebrow>
          </div>

          <RevealText
            text="Numbers on the page, before you have to ask"
            as="h1"
            accent={["before", "you", "have", "to", "ask"]}
            className="mt-6 max-w-4xl text-step-6 font-extrabold leading-[0.96] text-vanilla"
          />

          <p className="mt-7 max-w-2xl text-step-1 leading-relaxed text-vanilla/65">
            Most agency pricing pages say &ldquo;every project is different&rdquo; and then ask for
            your phone number. Every project is different. The ranges below are still true, and
            they&apos;re the same ones we quote on the first call.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <MagneticButton href="/contact" variant="accent" size="lg">
              Get a fixed quote
              <ArrowRight className="h-5 w-5" aria-hidden />
            </MagneticButton>
            <Button href="#retainers" variant="ghost" size="lg">
              Monthly work
            </Button>
          </div>

          <div className="mt-14 grid gap-6 border-t border-vanilla/12 pt-10 sm:grid-cols-3">
            {[
              { term: "How we bill", detail: "Fixed price against fixed scope. Never hourly." },
              { term: "Payment split", detail: "40% to start, 30% at design sign-off, 30% at launch." },
              { term: "Change requests", detail: "Quoted separately, before the work starts." },
            ].map((item) => (
              <div key={item.term}>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-champagne">
                  {item.term}
                </p>
                <p className="mt-2.5 leading-relaxed text-vanilla/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------------- bands -- */}

      <Section tone="cream" spacing="xl" width="wide" id="projects">
        <SectionHeading
          eyebrow="Project work"
          title="Four shapes of build, four ranges"
          subtitle="Where you land in a range depends on template count, integrations, and who writes the copy. The section below that breaks it down."
          size="xl"
          className="max-w-2xl"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {pricingBands.map((band, index) => {
            const service = getServiceBySlug(band.serviceSlug);

            return (
              <Reveal key={band.label} delay={index * 0.06}>
                <div className="flex h-full flex-col rounded-3xl border border-sand bg-white p-8 transition-all duration-400 ease-smooth hover:-translate-y-1 hover:border-midnight/25 hover:shadow-xl sm:p-10">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <h3 className="font-display text-step-2 font-extrabold tracking-tight text-text-dark">
                      {band.label}
                    </h3>
                    <Badge label={band.timeline} variant="outline" />
                  </div>

                  <p className="mt-5 font-display text-step-3 font-extrabold tracking-tight text-indigo">
                    {band.range}
                  </p>

                  <p className="mt-5 leading-relaxed text-text-muted">{band.summary}</p>

                  <ul className="mt-8 flex-1 space-y-3.5 border-t border-sand pt-8">
                    {band.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[0.95rem] leading-relaxed text-text-muted"
                      >
                        <Check className="mt-1 h-4 w-4 shrink-0 text-indigo" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-9 flex flex-wrap gap-3">
                    <Button href="/contact" variant="primary" size="sm">
                      Get a quote
                    </Button>
                    {service ? (
                      <Button href={service.href} variant="outline" size="sm">
                        {service.name}
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                      </Button>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-12 max-w-3xl leading-relaxed text-text-muted">
          Smaller pieces of work — a speed rescue, a technical audit, a batch of articles — are
        quoted individually and usually land between $87 and $500. Every{" "}
        <Link
            href="/services"
            className="font-semibold text-indigo underline decoration-champagne decoration-2 underline-offset-4 hover:text-midnight"
          >
            service page
          </Link>{" "}
          has its own tiers with what&apos;s in and what isn&apos;t.
        </p>
      </Section>

      {/* ----------------------------------------------------------- factors -- */}

      <Section tone="ink" spacing="xl" width="wide" mesh>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeading
            eyebrow="What moves the number"
            title="Six things, in the order they matter"
            subtitle="If you want to bring a quote down, this is the list to look at. Most of it is decisions, not discounts."
            tone="dark"
            size="xl"
            className="lg:sticky lg:top-[calc(var(--nav-h)+3rem)] lg:self-start"
          />
          <FeatureGrid features={pricingFactors} tone="dark" columns={2} />
        </div>
      </Section>

      {/* --------------------------------------------------------- retainers -- */}

      <Section tone="white" spacing="xl" width="wide" id="retainers">
        <SectionHeading
          eyebrow="Monthly work"
          title="Retainers, for after the launch"
          subtitle="Billed monthly in advance, cancellable with thirty days' notice. No twelve-month lock-ins — if the work stops being worth it, you should be able to stop."
          size="xl"
          className="max-w-2xl"
        />

        <PricingTable
          tiers={retainerTiers}
          note="Retainers are capped at four clients per person, so availability moves. Ask before you plan a budget around one."
          className="mt-16"
        />
      </Section>

      {/* ------------------------------------------------------- not included -- */}

      <Section tone="cream" spacing="lg" width="wide">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Being straight about it"
              title="What the quote doesn't cover"
              size="lg"
            />
            <p className="mt-7 max-w-lg leading-relaxed text-text-muted">
              These are the costs that surprise people three weeks in when nobody mentioned them at
              the start. They&apos;re small. They&apos;re also real, so here they are.
            </p>
            <div className="mt-9">
              <Button href="/faq" variant="outline" size="md">
                Read the full FAQ
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </div>

          <ul className="space-y-0">
            {notIncluded.map((item) => (
              <li key={item.label} className="border-t border-sand py-6">
                <p className="flex items-start gap-3 font-display font-bold text-text-dark">
                  <Minus className="mt-1.5 h-4 w-4 shrink-0 text-text-muted" aria-hidden />
                  {item.label}
                </p>
                <p className="mt-2 pl-7 text-[0.95rem] leading-relaxed text-text-muted">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="midnight" spacing="lg" width="wide">
        <StatBlock stats={studioStats} columns={4} tone="dark" />
      </Section>

      <TestimonialsSection limit={3} tone="white" />

      {/* -------------------------------------------------------------- faqs -- */}

      <Section tone="cream" spacing="xl" width="default">
        <SectionHeading
          eyebrow="Money questions"
          title="Asked on nearly every first call"
          size="xl"
          className="max-w-2xl"
        />
        <div className="mt-14">
          <FaqAccordion faqs={pricingFaqs} />
        </div>
      </Section>

      <CTABanner
        eyebrow="Next step"
        title="Want the actual number for your project?"
        subtitle="Send the URL, the goal, and any deadline. You'll get a range on the first reply and a fixed price in the written scope three days after the call."
        primaryAction={{ label: "Get a quote", href: "/contact" }}
        secondaryAction={{ label: "See the process", href: "/process" }}
        showEmail
      />
    </>
  );
}
