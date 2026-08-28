import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Quote, Star } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { LogoWall } from "@/components/ui/LogoWall";
import { StatBlock } from "@/components/ui/StatBlock";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { CTABanner } from "@/components/ui/CTABanner";

import { GradientMesh } from "@/components/motion/GradientMesh";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { MagneticButton } from "@/components/motion/MagneticButton";

import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, graph, reviewSchema, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { getIndustryBySlug } from "@/data/industries";
import { getProjectBySlug } from "@/data/projects";
import { getServiceBySlug } from "@/data/services";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = buildMetadata({
  title: "Client Testimonials — What It's Like to Work With Us | Quesiono",
  description:
    "Ten clients on what changed after we rebuilt their site, in their own words, with the case study attached where there is one. Including the parts that were uncomfortable.",
  path: "/testimonials",
  eyebrow: "Testimonials",
  keywords: [
    "web design agency reviews",
    "client testimonials",
    "web design agency testimonials",
    "SEO agency reviews",
    "website redesign results",
  ],
});

export default function TestimonialsPage() {
  const trail = [{ name: "Testimonials", href: "/testimonials" }];

  const [lead, ...rest] = testimonials;

  /* Computed, not typed — adding an eleventh quote updates these on its own. */
  const withCaseStudies = testimonials.filter((t) => t.projectSlug).length;
  const sectors = new Set(testimonials.map((t) => t.industrySlug).filter(Boolean)).size;

  const summary = [
    { display: `${testimonials.length}`, label: "Clients quoted", note: "Every one a real project" },
    { display: `${withCaseStudies}`, label: "With a case study", note: "Numbers attached" },
    { display: `${sectors}`, label: "Sectors", note: "From bistros to SaaS" },
    { display: "100%", label: "Would work with us again", note: "Asked at the thirty-day mark" },
  ];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/testimonials",
            name: "Client Testimonials — What It's Like to Work With Us | Quesiono",
            description:
              "Client feedback on Quesiono web design, development, SEO and content projects.",
          }),
          reviewSchema(
            testimonials.map((t) => ({
              quote: t.quote,
              name: t.name,
              role: t.role,
              company: t.company,
            }))
          ),
          breadcrumbSchema([{ name: "Home", href: "/" }, ...trail])
        )}
      />

      <header className="grain relative overflow-hidden bg-ink">
        <GradientMesh variant="ink" drift />
        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 pb-24 pt-[calc(var(--nav-h)+4rem)] sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-12 lg:pb-28">
          <div>
            <Breadcrumbs trail={trail} tone="dark" emitSchema={false} />
            <div className="mt-8">
              <Eyebrow tone="dark">Testimonials · {testimonials.length} clients</Eyebrow>
            </div>

            <RevealText
              text="What clients say when we're not in the room"
              as="h1"
              accent={["not", "in", "the", "room"]}
              className="mt-6 text-step-6 font-extrabold leading-[0.96] text-vanilla"
            />

            <p className="mt-7 max-w-xl text-step-1 leading-relaxed text-vanilla/65">
              We asked for the specific thing that changed, not a testimonial. That&apos;s why
              several of these mention a bug, a difficult meeting, or an answer they didn&apos;t
              want to hear — those are the useful ones.
            </p>

            <div className="mt-9 flex items-center gap-3">
              <span className="flex gap-1" aria-hidden>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-champagne text-champagne" />
                ))}
              </span>
              <span className="text-[0.9rem] text-vanilla/60">
                Every project we&apos;ve delivered since {site.founded}
              </span>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <MagneticButton href="/contact" variant="accent" size="lg">
                Become one of them
                <ArrowRight className="h-5 w-5" aria-hidden />
              </MagneticButton>
              <Button href="/portfolio" variant="ghost" size="lg">
                See the case studies
              </Button>
            </div>
          </div>

          {lead ? (
            <Reveal direction="up" delay={0.12}>
              <figure className="relative rounded-3xl border border-vanilla/12 bg-vanilla/[0.04] p-8 sm:p-10">
                <Quote className="h-9 w-9 text-champagne/50" aria-hidden />
                <blockquote className="mt-6 text-step-1 leading-relaxed text-vanilla/85">
                  {lead.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-vanilla/12 pt-6">
                  <p className="font-display font-bold text-vanilla">{lead.name}</p>
                  <p className="mt-1 text-[0.9rem] text-vanilla/55">
                    {lead.role}, {lead.company}
                    {lead.location ? ` · ${lead.location}` : ""}
                  </p>
                  {lead.projectSlug ? (
                    <Link
                      href={`/portfolio/${lead.projectSlug}`}
                      className="group mt-5 inline-flex items-center gap-2 text-[0.875rem] font-semibold text-champagne"
                    >
                      Read the case study
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </Link>
                  ) : null}
                </figcaption>
              </figure>
            </Reveal>
          ) : null}
        </div>
      </header>

      <Section tone="cream" spacing="lg" width="wide">
        <StatBlock stats={summary} columns={4} />
      </Section>

      {/* -------------------------------------------------------- every quote -- */}

      <Section tone="white" spacing="xl" width="wide">
        <SectionHeading
          eyebrow="All of them"
          title="Unedited, except for length"
          subtitle="Where a quote names a number, that number is in the case study too. Where it names a person, they said we could."
          size="xl"
          className="max-w-2xl"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((testimonial, index) => {
            const project = testimonial.projectSlug
              ? getProjectBySlug(testimonial.projectSlug)
              : undefined;
            const service = testimonial.serviceSlugs?.[0]
              ? getServiceBySlug(testimonial.serviceSlugs[0])
              : undefined;

            return (
              <Reveal key={testimonial.name} delay={(index % 3) * 0.06}>
                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  role={testimonial.role}
                  company={testimonial.company}
                  projectTitle={project?.name}
                  projectSlug={testimonial.projectSlug}
                  service={service?.name}
                />
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ------------------------------------------------------------ sectors -- */}

      <Section tone="ink" spacing="lg" width="wide" mesh>
        <SectionHeading
          eyebrow="Who these people are"
          title="Ten businesses, six sectors"
          tone="dark"
          size="lg"
          className="max-w-2xl"
        />

        <div className="mt-12">
          <LogoWall
            logos={testimonials.map((t) => ({ name: t.company }))}
            tone="dark"
            variant="marquee"
          />
        </div>

        <div className="mt-14 flex flex-wrap gap-2">
          {Array.from(
            new Set(testimonials.map((t) => t.industrySlug).filter(Boolean) as string[])
          ).map((slug) => {
            const industry = getIndustryBySlug(slug);
            if (!industry) return null;

            return (
              <Link key={slug} href={industry.href}>
                <Badge label={industry.name} variant="transparent" />
              </Link>
            );
          })}
        </div>
      </Section>

      {/* -------------------------------------------------------- how we ask -- */}

      <Section tone="cream" spacing="xl" width="wide">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="About these quotes"
              title="How we collect them, and what we leave in"
              size="xl"
            />
            <div className="prose mt-8">
              <p>
                We ask at the thirty-day mark, once the site has been live long enough for the
                numbers to mean something. The question is always the same: what actually changed,
                and what would you warn someone about before hiring us?
              </p>
              <p>
                We publish the second half too. Two clients here say the copy stage took longer than
                they expected. One says a meeting we forced was uncomfortable. Leaving that in is
                more useful to you than another line about great communication.
              </p>
              <p>
                What we don&apos;t do is aggregate these into a star rating. Ten clients isn&apos;t a
                statistically meaningful sample, and a 4.9 out of five badge on a page like this
                tells you nothing you can act on.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/portfolio" variant="primary" size="md">
                Case studies with numbers
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button href="/process" variant="outline" size="md">
                How a build runs
              </Button>
            </div>
          </div>

          <Reveal direction="up" delay={0.1}>
            <div className="rounded-3xl border border-sand bg-white p-8 sm:p-10">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-text-muted">
                The three questions we ask
              </p>
              <ol className="mt-8 space-y-7">
                {[
                  "What's measurably different since launch? A number if you have one.",
                  "What surprised you about working with us — good or bad?",
                  "What would you tell someone considering hiring us?",
                ].map((question, index) => (
                  <li key={question} className="flex gap-5">
                    <span className="font-display text-step-1 font-extrabold text-champagne">
                      0{index + 1}
                    </span>
                    <p className="pt-1 leading-relaxed text-text-muted">{question}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-9 border-t border-sand pt-6 text-[0.875rem] leading-relaxed text-text-muted">
                Clients approve their quote before it goes up, and can pull it any time. Two have
                asked us to shorten one. Nobody&apos;s asked us to remove one yet.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTABanner
        eyebrow="Your turn"
        title="Want to be the eleventh?"
        subtitle="Tell us what the site needs to do. In fourteen months you can tell someone else whether it worked."
        primaryAction={{ label: "Start a project", href: "/contact" }}
        secondaryAction={{ label: "Read the FAQ", href: "/faq" }}
        showEmail
      />
    </>
  );
}
