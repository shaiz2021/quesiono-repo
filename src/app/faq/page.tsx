import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CTABanner } from "@/components/ui/CTABanner";

import { GradientMesh } from "@/components/motion/GradientMesh";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";

import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, graph, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { services } from "@/data/services";
import { studioFaqGroups, studioFaqs } from "@/data/studio";

export const metadata: Metadata = buildMetadata({
  title: "FAQ — Costs, Timelines and How We Work | Quesiono",
  description:
    "Straight answers on what a website costs, how long a build takes, who does the work, what happens to your rankings in a rebuild, and what handover includes.",
  path: "/faq",
  eyebrow: "FAQ",
  keywords: [
    "web design FAQ",
    "how much does a website cost",
    "how long does a website take",
    "website rebuild SEO",
    "web design agency questions",
    "website maintenance FAQ",
  ],
});

/** Anchor id per group, derived so the jump links can't drift from the headings. */
const groupId = (label: string) => label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function FaqPage() {
  const trail = [{ name: "FAQ", href: "/faq" }];

  /* Service pages carry their own FAQs. Linking to a few of the biggest saves
     people asking us the same thing in a form. */
  const servicesWithFaqs = services.filter((service) => service.faqs?.length).slice(0, 6);

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/faq",
            name: "FAQ — Costs, Timelines and How We Work | Quesiono",
            description:
              "Answers to the questions Quesiono gets asked most about cost, timelines, process and handover.",
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }, ...trail]),
          faqSchema(studioFaqs)
        )}
      />

      <header className="grain relative overflow-hidden bg-ink">
        <GradientMesh variant="ink" drift />
        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 pb-24 pt-[calc(var(--nav-h)+4rem)] sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:px-12 lg:pb-28">
          <div>
            <Breadcrumbs trail={trail} tone="dark" emitSchema={false} />
            <div className="mt-8">
              <Eyebrow tone="dark">FAQ · {studioFaqs.length} answers</Eyebrow>
            </div>

            <RevealText
              text="The questions, with actual answers"
              as="h1"
              accent={["actual", "answers"]}
              className="mt-6 text-step-6 font-extrabold leading-[0.96] text-vanilla"
            />

            <p className="mt-7 max-w-xl text-step-1 leading-relaxed text-vanilla/65">
              Prices, timelines, who does the work, what happens to your rankings if we rebuild.
              Where the honest answer is &ldquo;it depends&rdquo;, we&apos;ve said what it depends
              on.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" variant="accent" size="lg">
                Ask us directly
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Button>
              <Button href="/pricing" variant="ghost" size="lg">
                See pricing
              </Button>
            </div>
          </div>

          <Reveal direction="up" delay={0.12}>
            <nav
              aria-label="Jump to a section"
              className="rounded-3xl border border-vanilla/12 bg-vanilla/[0.04] p-8 lg:sticky lg:top-[calc(var(--nav-h)+2rem)]"
            >
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-champagne">
                Jump to
              </p>
              <ul className="mt-6 space-y-0">
                {studioFaqGroups.map((group) => (
                  <li key={group.label} className="border-t border-vanilla/10 first:border-t-0">
                    <a
                      href={`#${groupId(group.label)}`}
                      className="group flex items-center justify-between gap-4 py-4 font-display font-bold text-vanilla transition-colors hover:text-champagne"
                    >
                      {group.label}
                      <span className="inline-flex items-center gap-2 text-[0.8rem] font-semibold text-vanilla/40">
                        {group.faqs.length}
                        <ArrowRight
                          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden
                        />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mt-7 border-t border-vanilla/10 pt-6 text-[0.875rem] leading-relaxed text-vanilla/55">
                Nothing here matching? Email{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold text-champagne underline decoration-2 underline-offset-4"
                >
                  {site.email}
                </a>{" "}
                and you&apos;ll get a reply inside {site.responseTime}.
              </p>
            </nav>
          </Reveal>
        </div>
      </header>

      {/* ------------------------------------------------------------ groups -- */}

      {studioFaqGroups.map((group, index) => {
        const tone = index % 2 === 0 ? "cream" : "white";

        return (
          <Section
            key={group.label}
            tone={tone}
            spacing="xl"
            width="default"
            id={groupId(group.label)}
          >
            <SectionHeading
              eyebrow={`0${index + 1} · ${group.faqs.length} questions`}
              title={group.label}
              size="xl"
              className="max-w-2xl"
            />
            <div className="mt-14">
              {/* Only the first group opens on load — three open panels at once
                  buries the section headings below the fold. */}
              <FaqAccordion faqs={group.faqs} defaultOpen={index === 0 ? 0 : null} />
            </div>
          </Section>
        );
      })}

      {/* -------------------------------------------------- service-specific -- */}

      <Section tone="ink" spacing="xl" width="wide" mesh>
        <SectionHeading
          eyebrow="More specific questions"
          title="Each service page answers its own"
          subtitle="Questions about crawl budgets, Shopify apps, or WordPress hosting live on the pages they belong to, where there's room to answer properly."
          tone="dark"
          size="xl"
          className="max-w-2xl"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesWithFaqs.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.05}>
              <Link
                href={`${service.href}#faq`}
                className="group flex h-full flex-col rounded-2xl border border-vanilla/12 bg-vanilla/[0.04] p-7 transition-all duration-400 ease-smooth hover:-translate-y-1 hover:border-champagne/40 hover:bg-vanilla/[0.07]"
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-champagne">
                  {service.faqs?.length} questions
                </p>
                <h3 className="mt-4 font-display text-step-1 font-bold text-vanilla">
                  {service.name}
                </h3>
                <p className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-vanilla/55">
                  {service.faqs?.[0]?.question}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[0.875rem] font-semibold text-champagne">
                  Read the answers
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12">
          <Button href="/services" variant="accent" size="md">
            All {services.length} services
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </Section>

      {/* --------------------------------------------------------------- ask -- */}

      <Section tone="cream" spacing="lg" width="default">
        <div className="rounded-3xl border border-sand bg-white p-8 text-center sm:p-14">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo/10 text-indigo">
            <Mail className="h-7 w-7" aria-hidden />
          </span>
          <h2 className="mt-7 font-display text-step-3 font-extrabold tracking-tight text-text-dark">
            Asked something we haven&apos;t answered?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-text-muted">
            Send it over. If it turns out to be a question other people have too, it ends up on this
            page — about a third of what&apos;s here got added that way.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" size="md">
              Ask a question
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button href={`mailto:${site.email}`} variant="outline" size="md">
              {site.email}
            </Button>
          </div>
        </div>
      </Section>

      <CTABanner
        eyebrow="Or skip ahead"
        title="Answers are faster on a call"
        subtitle="Forty-five minutes, no deck, no discovery fee. You'll get a price range before it ends."
        primaryAction={{ label: "Book the call", href: "/contact" }}
        secondaryAction={{ label: "How we work", href: "/process" }}
        showEmail
      />
    </>
  );
}
