import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CapabilityStrip } from "@/components/ui/CapabilityStrip";
import { CTABanner } from "@/components/ui/CTABanner";

import { GradientMesh } from "@/components/motion/GradientMesh";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { MagneticButton } from "@/components/motion/MagneticButton";

import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, graph, itemListSchema, webPageSchema } from "@/lib/schema";
import { getIcon } from "@/lib/icons";
import { industries } from "@/data/industries";
import { getProjectBySlug } from "@/data/projects";
import { getServiceBySlug } from "@/data/services";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Build For — SaaS, Ecommerce, Healthcare & More",
  description:
    "Web design and SEO for SaaS, ecommerce, restaurants, real estate, healthcare and professional services. What's specifically hard in each, and how we handle it.",
  path: "/industries",
  eyebrow: "Industries",
  keywords: [
    "industry specific web design",
    "SaaS web design agency",
    "ecommerce web design",
    "healthcare website design",
    "real estate web design",
    "restaurant website design",
    "professional services web design",
  ],
});

export default function IndustriesIndexPage() {
  const trail = [{ name: "Industries", href: "/industries" }];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/industries",
            name: "Industries We Build For — SaaS, Ecommerce, Healthcare & More",
            description:
              "The sectors Quesiono builds websites for, and what's specifically hard about each.",
          }),
          itemListSchema({
            name: "Industries Quesiono serves",
            items: industries.map((industry) => ({
              name: industry.name,
              href: industry.href,
              description: industry.shortDescription,
            })),
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }, ...trail])
        )}
      />

      <header className="grain relative overflow-hidden bg-ink">
        <GradientMesh variant="ink" drift />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-[calc(var(--nav-h)+4rem)] sm:px-8 lg:px-12 lg:pb-28">
          <Breadcrumbs trail={trail} tone="dark" emitSchema={false} />
          <div className="mt-8">
            <Eyebrow tone="dark">Industries · {industries.length} sectors</Eyebrow>
          </div>

          <RevealText
            text="A booking flow and a SaaS trial are not the same job"
            as="h1"
            accent={["not", "the", "same", "job"]}
            className="mt-6 max-w-4xl text-step-6 font-extrabold leading-[0.96] text-vanilla"
          />

          <p className="mt-7 max-w-2xl text-step-1 leading-relaxed text-vanilla/65">
            We&apos;re not sector specialists and we won&apos;t pretend otherwise. But we&apos;ve
            built enough in these six to know where each one goes wrong — the clinic form that
            leaks patient data, the store whose filters kill its own category pages, the startup
            homepage that never says what the product does.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <MagneticButton href="/contact" variant="accent" size="lg">
              Talk about your sector
              <ArrowRight className="h-5 w-5" aria-hidden />
            </MagneticButton>
            <Button href="/portfolio" variant="ghost" size="lg">
              See the work
            </Button>
          </div>

          <div className="mt-14 flex flex-wrap gap-2 border-t border-vanilla/12 pt-10">
            {industries.map((industry) => (
              <Link key={industry.slug} href={industry.href}>
                <Badge label={industry.name} variant="transparent" />
              </Link>
            ))}
          </div>
        </div>
      </header>

      <CapabilityStrip tone="midnight" />

      {/* ---------------------------------------------------------- the list -- */}

      <Section tone="cream" spacing="xl" width="wide">
        <SectionHeading
          eyebrow="Pick yours"
          title="Six sectors, and what's hard about each"
          subtitle="Every page below names the specific problem, not a rewritten version of the same paragraph."
          size="xl"
          className="max-w-2xl"
        />

        <div className="mt-16 space-y-6">
          {industries.map((industry, index) => {
            const Icon = getIcon(industry.icon);
            const services = industry.serviceSlugs
              .map(getServiceBySlug)
              .filter((service): service is NonNullable<typeof service> => Boolean(service))
              .slice(0, 4);
            const study = industry.caseStudySlugs.map(getProjectBySlug).find(Boolean);
            const lead = industry.challenges[0];

            return (
              <Reveal key={industry.slug} delay={index * 0.05}>
                <article className="group grid gap-8 rounded-3xl border border-sand bg-white p-8 transition-all duration-400 ease-smooth hover:-translate-y-1 hover:border-midnight/25 hover:shadow-xl sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
                  <div>
                    <div className="flex items-start gap-5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cream text-midnight transition-colors duration-300 group-hover:bg-indigo group-hover:text-vanilla">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <div>
                        <h3 className="font-display text-step-2 font-extrabold tracking-tight text-text-dark">
                          <Link href={industry.href} className="hover:text-indigo">
                            {industry.name}
                          </Link>
                        </h3>
                        <p className="mt-2 leading-relaxed text-text-muted">
                          {industry.shortDescription}
                        </p>
                      </div>
                    </div>

                    {lead ? (
                      <div className="mt-8 rounded-2xl bg-cream p-6">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-text-muted">
                          The usual problem
                        </p>
                        <p className="mt-3 font-display font-bold text-text-dark">{lead.title}</p>
                        <p className="mt-2 text-[0.92rem] leading-relaxed text-text-muted">
                          {lead.description}
                        </p>
                      </div>
                    ) : null}

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <Button href={industry.href} variant="primary" size="sm">
                        {industry.navLabel ?? industry.name} sites
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Button>
                      {study ? (
                        <Link
                          href={`/portfolio/${study.slug}`}
                          className="group/link inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-indigo hover:text-midnight"
                        >
                          Case study: {study.client}
                          <ArrowUpRight
                            className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                            aria-hidden
                          />
                        </Link>
                      ) : null}
                    </div>
                  </div>

                  <div className="border-t border-sand pt-8 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-text-muted">
                      What we usually do here
                    </p>
                    <ul className="mt-5 space-y-3">
                      {services.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={service.href}
                            className="group/svc inline-flex items-start gap-2 font-semibold text-text-dark transition-colors hover:text-indigo"
                          >
                            {service.name}
                            <ArrowUpRight
                              className="mt-1 h-3.5 w-3.5 shrink-0 opacity-40 transition-transform duration-300 group-hover/svc:-translate-y-0.5 group-hover/svc:translate-x-0.5 group-hover/svc:opacity-100"
                              aria-hidden
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {industry.stats?.length ? (
                      <dl className="mt-8 space-y-4 border-t border-sand pt-6">
                        {industry.stats.slice(0, 2).map((stat) => (
                          <div key={stat.label}>
                            <dt className="font-display text-step-1 font-extrabold tracking-tight text-champagne">
                              {stat.display ??
                                `${stat.prefix ?? ""}${stat.value ?? ""}${stat.suffix ?? ""}`}
                            </dt>
                            <dd className="mt-1 text-[0.85rem] text-text-muted">{stat.label}</dd>
                          </div>
                        ))}
                      </dl>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* -------------------------------------------------------- not listed -- */}

      <Section tone="ink" spacing="lg" width="wide" mesh>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Not on the list?"
              title="Most of what we do transfers"
              tone="dark"
              size="lg"
            />
            <p className="mt-7 max-w-xl leading-relaxed text-vanilla/60">
              We&apos;ve also built for manufacturers, a law firm, two nonprofits, a recruitment
              agency, and a music school. The sector changes the content and the compliance work.
              It rarely changes whether the site loads fast or whether the copy answers the question
              someone came with.
            </p>
            <p className="mt-5 max-w-xl leading-relaxed text-vanilla/60">
              What we won&apos;t do is claim deep expertise we don&apos;t have. If your industry
              needs regulatory knowledge we lack — clinical trials, financial advice, anything
              licensed — we&apos;ll tell you on the first call and suggest bringing in a specialist
              alongside us.
            </p>
            <div className="mt-9">
              <Button href="/contact" variant="accent" size="md">
                Tell us about it
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-vanilla/12 bg-vanilla/[0.04] p-8">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-champagne">
              Also built for
            </p>
            <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {[
                "Manufacturing",
                "Legal",
                "Nonprofits",
                "Recruitment",
                "Education",
                "Fitness studios",
                "Trades and home services",
                "B2B distribution",
              ].map((item) => (
                <li
                  key={item}
                  className="border-t border-vanilla/10 pt-3 text-[0.92rem] text-vanilla/70"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <TestimonialsSection limit={3} tone="white" />

      <CTABanner
        eyebrow="Next step"
        title="Tell us what your customers get wrong"
        subtitle="The thing people misunderstand about your business is usually the thing your homepage should fix first. Start there and the rest of the site writes itself."
        primaryAction={{ label: "Start a project", href: "/contact" }}
        secondaryAction={{ label: "Browse services", href: "/services" }}
        showEmail
      />
    </>
  );
}
