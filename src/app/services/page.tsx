import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StatBlock } from "@/components/ui/StatBlock";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CapabilityStrip } from "@/components/ui/CapabilityStrip";
import { CTABanner } from "@/components/ui/CTABanner";

import { GradientMesh } from "@/components/motion/GradientMesh";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { MagneticButton } from "@/components/motion/MagneticButton";

import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, graph, itemListSchema, webPageSchema } from "@/lib/schema";
import { getIcon } from "@/lib/icons";
import {
  getChildServices,
  getServicesByGroup,
  groupBlurbs,
  groupLabels,
  services,
  type ServiceGroup,
} from "@/data/services";
import { pricingBands, studioStats } from "@/data/studio";

const groups: ServiceGroup[] = ["web", "seo", "content"];

const indexFaqs = [
  {
    question: "Do I have to buy design, development, SEO and content together?",
    answer:
      "No. Most people start with one. A common first project is a marketing site build, then SEO as a retainer once it's live. Buying all four at once is only sensible if you're launching something new and have nothing to work with yet.",
  },
  {
    question: "Which service should I start with if my site already exists?",
    answer:
      "Start with a technical SEO audit if traffic is flat, or on-page SEO if traffic is fine but nobody converts. If the site is more than four years old or was built on a page builder, a rebuild usually costs less than fixing it — we'll tell you which of the two you're looking at before you pay us anything.",
  },
  {
    question: "What does a project cost?",
    answer:
      "A single landing page starts at $117. A marketing site of eight to fifteen pages runs $237 to $875 depending on how much design and copy is involved. Ecommerce starts around $306. Custom applications start at $875. Every one of those is a fixed number written down before we start.",
  },
  {
    question: "Can you work with our existing developers?",
    answer:
      "Yes, and about a quarter of our work is that. We'll do design and copy, hand over a component library and a spec, and stay available for review calls. It's slower than doing the build ourselves, so budget an extra two weeks.",
  },
  {
    question: "How many services do you actually offer?",
    answer: `Twenty-two, and every one of them has its own page explaining what's included, what it costs and how long it takes. Nothing on this site is a service we'd have to go and find a freelancer for.`,
  },
];

export const metadata: Metadata = buildMetadata({
  title: "Web Design, Development, SEO & Content Services | Quesiono",
  description:
    "22 services across design and build, search and growth, and content. Fixed scope, fixed price, and a page for each one explaining exactly what's included.",
  path: "/services",
  eyebrow: "Services",
  keywords: [
    "web design services",
    "web development services",
    "SEO services",
    "content writing services",
    "digital agency services",
    "ecommerce development services",
    "landing page design service",
    "website maintenance services",
    "technical SEO services",
    "custom web application development",
  ],
});

export default function ServicesIndexPage() {
  const trail = [{ name: "Services", href: "/services" }];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/services",
            name: "Web Design, Development, SEO & Content Services | Quesiono",
            description:
              "22 services across design and build, search and growth, and content, each with fixed scope and price.",
          }),
          itemListSchema({
            name: "Services at Quesiono",
            items: services.map((service) => ({
              name: service.name,
              href: service.href,
              description: service.shortDescription,
            })),
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }, ...trail]),
          faqSchema(indexFaqs)
        )}
      />

      <header className="grain relative overflow-hidden bg-ink">
        <GradientMesh variant="ink" drift />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-[calc(var(--nav-h)+4rem)] sm:px-8 lg:px-12 lg:pb-32">
          <Breadcrumbs trail={trail} tone="dark" emitSchema={false} />
          <div className="mt-8">
            <Eyebrow tone="dark">Services · {services.length} of them</Eyebrow>
          </div>

          <RevealText
            text="Everything it takes to make a website earn its keep"
            as="h1"
            accent={["earn", "its", "keep"]}
            className="mt-6 max-w-4xl text-step-6 font-extrabold leading-[0.96] text-vanilla"
          />

          <p className="mt-7 max-w-2xl text-step-1 leading-relaxed text-vanilla/65">
            Design and build, search and growth, words. Each service page below tells you what&apos;s
            included, what it costs, how long it takes, and what we&apos;d need from you. No
            &ldquo;contact us for pricing&rdquo;.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <MagneticButton href="/contact" variant="accent" size="lg">
              Get a fixed quote
              <ArrowRight className="h-5 w-5" aria-hidden />
            </MagneticButton>
            <Button href="/pricing" variant="ghost" size="lg">
              See price bands
            </Button>
          </div>
        </div>
      </header>

      <CapabilityStrip tone="midnight" />

      <Section tone="cream" spacing="lg" width="wide">
        <StatBlock stats={studioStats} columns={4} />
      </Section>

      {groups.map((group, groupIndex) => {
        const parents = getServicesByGroup(group);
        const tone = groupIndex === 1 ? "ink" : "white";
        const dark = tone === "ink";

        return (
          <Section
            key={group}
            tone={tone}
            spacing="xl"
            width="wide"
            mesh={dark}
            id={group}
          >
            <div className="flex flex-wrap items-end justify-between gap-8">
              <SectionHeading
                eyebrow={`0${groupIndex + 1} · ${groupLabels[group]}`}
                title={groupBlurbs[group]}
                tone={dark ? "dark" : "light"}
                size="xl"
                className="max-w-2xl"
              />
              <p
                className={[
                  "text-[0.85rem] font-semibold uppercase tracking-[0.14em]",
                  dark ? "text-vanilla/40" : "text-text-muted",
                ].join(" ")}
              >
                {parents.length} core {parents.length === 1 ? "service" : "services"}
              </p>
            </div>

            <div className="mt-14 space-y-6">
              {parents.map((service, index) => {
                const children = getChildServices(service.slug);
                const Icon = getIcon(service.icon);
                /* Cheapest tier doubles as the "from" price — it's the same
                   number the service page shows, so the two can't disagree. */
                const entryTier = service.pricingTiers?.[0];

                return (
                  <Reveal key={service.slug} delay={index * 0.05}>
                    <div
                      className={[
                        "grid gap-8 rounded-3xl border p-8 transition-colors duration-300 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:p-10",
                        dark
                          ? "border-vanilla/12 bg-vanilla/[0.04] hover:border-champagne/35"
                          : "border-sand bg-cream hover:border-midnight/25",
                      ].join(" ")}
                    >
                      <div>
                        <div className="flex items-start gap-5">
                          <span
                            className={[
                              "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl",
                              dark
                                ? "bg-champagne/15 text-champagne"
                                : "bg-midnight/[0.06] text-midnight",
                            ].join(" ")}
                          >
                            <Icon className="h-6 w-6" aria-hidden />
                          </span>
                          <div>
                            <h3
                              className={[
                                "font-display text-step-2 font-extrabold tracking-tight",
                                dark ? "text-vanilla" : "text-text-dark",
                              ].join(" ")}
                            >
                              <Link href={service.href} className="hover:underline decoration-champagne decoration-2 underline-offset-4">
                                {service.name}
                              </Link>
                            </h3>
                            {entryTier ? (
                              <p
                                className={[
                                  "mt-1.5 text-[0.9rem] font-semibold",
                                  dark ? "text-champagne" : "text-indigo",
                                ].join(" ")}
                              >
                                From {entryTier.price}
                                {entryTier.timeline ? ` · ${entryTier.timeline}` : ""}
                              </p>
                            ) : null}
                          </div>
                        </div>

                        <p
                          className={[
                            "mt-6 max-w-xl leading-relaxed",
                            dark ? "text-vanilla/60" : "text-text-muted",
                          ].join(" ")}
                        >
                          {service.shortDescription}
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-4">
                          <Button
                            href={service.href}
                            variant={dark ? "accent" : "primary"}
                            size="sm"
                          >
                            What&apos;s included
                            <ArrowUpRight className="h-4 w-4" aria-hidden />
                          </Button>
                          {service.keywords.primary ? (
                            <Badge
                              label={service.keywords.primary}
                              variant={dark ? "transparent" : "outline"}
                            />
                          ) : null}
                        </div>
                      </div>

                      {children.length ? (
                        <div
                          className={[
                            "border-t pt-8 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0",
                            dark ? "border-vanilla/10" : "border-sand",
                          ].join(" ")}
                        >
                          <p
                            className={[
                              "text-[0.72rem] font-semibold uppercase tracking-[0.14em]",
                              dark ? "text-vanilla/40" : "text-text-muted",
                            ].join(" ")}
                          >
                            Goes deeper
                          </p>
                          <ul className="mt-5 space-y-3">
                            {children.map((child) => (
                              <li key={child.slug}>
                                <Link
                                  href={child.href}
                                  className={[
                                    "group inline-flex items-center gap-2 font-semibold transition-colors",
                                    dark
                                      ? "text-vanilla/80 hover:text-champagne"
                                      : "text-text-dark hover:text-indigo",
                                  ].join(" ")}
                                >
                                  {child.navLabel ?? child.name}
                                  <ArrowUpRight
                                    className="h-3.5 w-3.5 opacity-50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                                    aria-hidden
                                  />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : service.outcomes?.length ? (
                        <div
                          className={[
                            "border-t pt-8 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0",
                            dark ? "border-vanilla/10" : "border-sand",
                          ].join(" ")}
                        >
                          <p
                            className={[
                              "text-[0.72rem] font-semibold uppercase tracking-[0.14em]",
                              dark ? "text-vanilla/40" : "text-text-muted",
                            ].join(" ")}
                          >
                            You get
                          </p>
                          <ul className="mt-5 space-y-3">
                            {service.outcomes.slice(0, 4).map((outcome) => (
                              <li
                                key={outcome}
                                className={[
                                  "text-[0.9rem] leading-relaxed",
                                  dark ? "text-vanilla/60" : "text-text-muted",
                                ].join(" ")}
                              >
                                {outcome}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Section>
        );
      })}

      <Section tone="cream" spacing="xl" width="wide" id="bands">
        <SectionHeading
          eyebrow="Rough numbers"
          title="What projects actually cost"
          subtitle="Bands, not quotes — but they're the bands our last two years of invoices fall into. The full breakdown is on the pricing page."
          size="xl"
          className="max-w-2xl"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {pricingBands.map((band, index) => (
            <Reveal key={band.label} delay={index * 0.06}>
              <div className="flex h-full flex-col rounded-3xl border border-sand bg-white p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-step-1 font-bold text-text-dark">
                    {band.label}
                  </h3>
                  <Badge label={band.timeline} variant="outline" />
                </div>
                <p className="mt-4 font-display text-step-3 font-extrabold tracking-tight text-indigo">
                  {band.range}
                </p>
                <p className="mt-4 flex-1 leading-relaxed text-text-muted">{band.summary}</p>
                <ul className="mt-6 space-y-2 border-t border-sand pt-6">
                  {band.includes.map((item) => (
                    <li key={item} className="text-[0.9rem] text-text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/pricing" variant="primary" size="lg">
            Full pricing breakdown
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </Section>

      <Section tone="white" spacing="xl" width="wide">
        <SectionHeading
          eyebrow="Popular combinations"
          title="What people usually buy together"
          size="lg"
          className="max-w-2xl"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services
            .filter((service) => service.featured)
            .slice(0, 6)
            .map((service, index) => (
              <ServiceCard
                key={service.slug}
                icon={service.icon}
                title={service.navLabel ?? service.name}
                description={service.shortDescription}
                href={service.href}
                index={index}
                cta={service.pricingTiers?.[0] ? `From ${service.pricingTiers[0].price}` : undefined}
              />
            ))}
        </div>
      </Section>

      <Section tone="cream" spacing="xl" width="prose" id="faq">
        <SectionHeading
          eyebrow="Questions"
          title="Before you pick one"
          align="center"
          size="xl"
        />
        <FaqAccordion faqs={indexFaqs} className="mt-14" />
      </Section>

      <CTABanner
        eyebrow="Next step"
        title="Not sure which of the 22 you need?"
        subtitle="Send the URL and the goal. We'll say what we'd do first, what we'd leave, and what it costs — usually inside one working day."
        primaryAction={{ label: "Start a project", href: "/contact" }}
        secondaryAction={{ label: "See the work", href: "/portfolio" }}
        showEmail
      />
    </>
  );
}
