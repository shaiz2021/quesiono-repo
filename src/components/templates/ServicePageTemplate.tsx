import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

import type { Service } from "@/data/services";
import { getRelatedServices, getServiceBySlug } from "@/data/services";
import { getProjectBySlug, getProjectsByService } from "@/data/projects";
import { getTestimonialsByService } from "@/data/testimonials";
import { getBlogPostBySlug } from "@/data/blog";
import { getIndustryBySlug } from "@/data/industries";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { ProcessSteps } from "@/components/ui/ProcessSteps";
import { StatBlock } from "@/components/ui/StatBlock";
import { PricingTable } from "@/components/ui/PricingTable";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { CTABanner } from "@/components/ui/CTABanner";

import { GradientMesh } from "@/components/motion/GradientMesh";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { ShowreelCanvas } from "@/components/motion/ShowreelCanvas";
import { Spotlight } from "@/components/motion/Spotlight";
import { StickyProcess } from "@/components/motion/StickyProcess";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { getIcon } from "@/lib/icons";

/** Section keys, ordered per layout variant below. */
type Block =
  | "stats"
  | "overview"
  | "deliverables"
  | "stack"
  | "process"
  | "pricing"
  | "work"
  | "testimonial"
  | "industries"
  | "related"
  | "reading"
  | "faq";

/**
 * The main thing that differs between the twenty-two service pages. Same
 * sections, different running order — enough to stop them reading like one page
 * with the nouns swapped, without forking the code four ways.
 */
const blockOrder: Record<Service["layoutVariant"], Block[]> = {
  // Two-column hero. Numbers first, then the argument.
  split: [
    "stats",
    "overview",
    "deliverables",
    "process",
    "stack",
    "pricing",
    "work",
    "testimonial",
    "industries",
    "related",
    "reading",
    "faq",
  ],
  // Full-bleed hero, one idea per band, scroll-pinned process in the middle.
  stacked: [
    "overview",
    "deliverables",
    "process",
    "stats",
    "stack",
    "pricing",
    "work",
    "testimonial",
    "industries",
    "related",
    "reading",
    "faq",
  ],
  // Long-form argument leads. Further reading sits high — these pages get read.
  editorial: [
    "overview",
    "stats",
    "deliverables",
    "process",
    "work",
    "testimonial",
    "reading",
    "pricing",
    "industries",
    "related",
    "faq",
  ],
  // Media above the fold, the work rail directly beneath it.
  showcase: [
    "work",
    "overview",
    "stats",
    "deliverables",
    "process",
    "stack",
    "pricing",
    "testimonial",
    "industries",
    "related",
    "reading",
    "faq",
  ],
};

const statColumns = (count: number): 2 | 3 | 4 => {
  if (count % 4 === 0) return 4;
  if (count % 3 === 0) return 3;
  return 2;
};

/**
 * Crumbs excluding Home. Exported so the route can feed the same array to
 * breadcrumbSchema() — the visible trail and the structured data are then
 * physically incapable of disagreeing.
 */
export function serviceTrail(service: Service): Crumb[] {
  const trail: Crumb[] = [{ name: "Services", href: "/services" }];
  const parent = service.parentService ? getServiceBySlug(service.parentService) : undefined;
  if (parent) trail.push({ name: parent.navLabel ?? parent.name, href: parent.href });
  trail.push({ name: service.name, href: service.href });
  return trail;
}

export function ServicePageTemplate({ service }: { service: Service }) {
  const variant = service.layoutVariant;

  const related = getRelatedServices(service);

  /* caseStudySlugs is the curated pick; getProjectsByService is the fallback so a
     record with no curated slugs still gets a work rail. */
  const curated = service.caseStudySlugs
    .map(getProjectBySlug)
    .filter((project): project is NonNullable<typeof project> => Boolean(project));
  const work = curated.length ? curated : getProjectsByService(service.slug);

  const testimonial = getTestimonialsByService(service.slug)[0];

  const reading = (service.blogSlugs ?? [])
    .map(getBlogPostBySlug)
    .filter((post): post is NonNullable<typeof post> => Boolean(post));

  const sectors = (service.industrySlugs ?? [])
    .map(getIndustryBySlug)
    .filter((industry): industry is NonNullable<typeof industry> => Boolean(industry));

  const trail = serviceTrail(service);

  const blocks: Record<Block, ReactNode> = {
    stats: service.stats?.length ? (
      <Section key="stats" tone="cream" spacing="md" width="wide">
        <StatBlock stats={service.stats} columns={statColumns(service.stats.length)} />
      </Section>
    ) : null,

    overview: (
      <Section
        key="overview"
        tone="white"
        width={variant === "editorial" ? "prose" : "wide"}
        spacing="lg"
        id="overview"
      >
        <div
          className={
            variant === "editorial" ? "" : "grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20"
          }
        >
          <div>
            <SectionHeading
              eyebrow="The short version"
              title={service.overview.heading}
              as="h2"
              size={variant === "editorial" ? "xl" : "lg"}
            />
            <div className="mt-8 space-y-6">
              {service.overview.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-step-1 leading-relaxed text-text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {service.outcomes?.length ? (
            <Reveal direction="up" className="self-start">
              <div className="rounded-3xl border border-sand bg-cream p-8">
                <Eyebrow>What you end up with</Eyebrow>
                <ul className="mt-6 space-y-4">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-champagne/25">
                        <Check className="h-3 w-3 text-ink" aria-hidden />
                      </span>
                      <span className="text-[0.95rem] leading-relaxed text-text-dark">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ) : null}
        </div>
      </Section>
    ),

    deliverables: service.deliverables.length ? (
      <Section key="deliverables" tone="cream" spacing="lg" width="wide" id="deliverables">
        <SectionHeading
          eyebrow="Scope"
          title={service.deliverablesHeading ?? "What's included"}
          subtitle={service.deliverablesIntro}
          align={variant === "stacked" ? "center" : "left"}
          size="lg"
        />
        <FeatureGrid
          features={service.deliverables}
          columns={variant === "editorial" ? 2 : 3}
          className="mt-14"
        />
      </Section>
    ) : null,

    stack: service.techStack?.length ? (
      <Section key="stack" tone="ink" spacing="md" width="wide" mesh>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            eyebrow="Tools"
            title="What we build it with"
            subtitle="Picked per project, not per fashion cycle. Here's the usual shortlist and why each one is on it."
            tone="dark"
            size="md"
          />
          <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {service.techStack.map((tool) => (
              <div key={tool.name} className="border-t border-vanilla/15 pt-4">
                <dt className="font-display font-bold text-vanilla">{tool.name}</dt>
                <dd className="mt-1.5 text-[0.9rem] leading-relaxed text-vanilla/55">
                  {tool.note}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>
    ) : null,

    process: service.process.length ? (
      variant === "stacked" || variant === "showcase" ? (
        <Section key="process" tone="ink" spacing="xl" width="wide" mesh>
          <StickyProcess
            key="process"
            steps={service.process}
            eyebrow="How it runs"
            title={service.processHeading ?? "The process, stage by stage"}
            intro="No stage starts before the last one is signed off. You always know what's next and what we need from you."
          />
        </Section>
      ) : (
        <Section key="process" tone="ink" spacing="lg" width="wide" mesh id="process">
          <SectionHeading
            eyebrow="How it runs"
            title={service.processHeading ?? "The process, stage by stage"}
            tone="dark"
            size="lg"
          />
          <ProcessSteps
            steps={service.process}
            tone="dark"
            layout={variant === "editorial" ? "vertical" : "horizontal"}
            className="mt-14"
          />
        </Section>
      )
    ) : null,

    pricing: service.pricingTiers?.length ? (
      <Section key="pricing" tone="white" spacing="lg" width="wide" id="pricing">
        <SectionHeading
          eyebrow="Investment"
          title="What it costs"
          subtitle="Fixed price against a defined scope. If a brief isn't specific enough to price properly, we'll say so instead of padding it."
          align="center"
          size="lg"
        />
        <PricingTable tiers={service.pricingTiers} note={service.pricingNote} className="mt-14" />
      </Section>
    ) : null,

    work: work.length ? (
      <Section key="work" tone="cream" spacing="lg" width="wide" id="work">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Proof"
            title={`${service.navLabel ?? service.name} in practice`}
            subtitle="Real projects, with the numbers and the parts that took longer than planned."
            size="lg"
            className="max-w-2xl"
          />
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 font-semibold text-indigo transition-colors hover:text-midnight"
          >
            All case studies
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {work.slice(0, 2).map((project, index) => (
            <PortfolioCard
              key={project.slug}
              title={project.name}
              category={project.category}
              slug={project.slug}
              image={project.image}
              imageAlt={project.imageAlt}
              metric={project.metric}
              metricLabel={project.metricLabel}
              summary={project.summary}
              tags={project.tags}
              priority={index === 0 && variant === "showcase"}
            />
          ))}
        </div>
      </Section>
    ) : null,

    testimonial: testimonial ? (
      <Section key="testimonial" tone="indigo" spacing="md" width="prose" mesh>
        <TestimonialCard
          quote={testimonial.quote}
          name={testimonial.name}
          role={testimonial.role}
          company={testimonial.company}
          projectSlug={testimonial.projectSlug}
          tone="dark"
          size="feature"
        />
      </Section>
    ) : null,

    industries: sectors.length ? (
      <Section key="industries" tone="white" spacing="md" width="wide">
        <SectionHeading
          eyebrow="Sectors"
          title="Where we've done this before"
          subtitle="Industry context changes the brief. These are the ones whose pitfalls we already know."
          size="md"
          className="max-w-2xl"
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {sectors.map((industry) => {
            const Icon = getIcon(industry.icon);
            return (
              <Link
                key={industry.slug}
                href={industry.href}
                className="group inline-flex items-center gap-3 rounded-full border border-sand bg-cream px-5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-midnight/30"
              >
                <Icon className="h-4 w-4 text-champagne" aria-hidden />
                <span className="font-semibold text-text-dark">{industry.name}</span>
                <ArrowUpRight
                  className="h-4 w-4 text-text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            );
          })}
        </div>
      </Section>
    ) : null,

    related: related.length ? (
      <Section key="related" tone="cream" spacing="lg" width="wide">
        <SectionHeading
          eyebrow="Pairs well with"
          title="Services that usually run alongside this one"
          size="lg"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {related.slice(0, 3).map((item, index) => (
            <ServiceCard
              key={item.slug}
              icon={item.icon}
              title={item.navLabel ?? item.name}
              description={item.shortDescription}
              href={item.href}
              index={index}
            />
          ))}
        </div>
      </Section>
    ) : null,

    reading: reading.length ? (
      <Section key="reading" tone="white" spacing="md" width="wide">
        <SectionHeading
          eyebrow="Further reading"
          title="How we think about this"
          subtitle="Written by the people who do the work."
          size="md"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reading.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-sand bg-cream p-7 transition-all duration-400 ease-smooth hover:-translate-y-1 hover:border-midnight/25 hover:shadow-xl"
            >
              <div className="flex items-center gap-3">
                <Badge label={post.category} variant="outline" />
                <span className="text-[0.8rem] text-text-muted">{post.readTime}</span>
              </div>
              <h3 className="mt-5 font-display text-step-1 font-bold text-text-dark">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-text-muted">
                {post.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-indigo">
                Read it
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    ) : null,

    faq: service.faqs.length ? (
      <Section key="faq" tone="cream" spacing="lg" width="prose" id="faq">
        <SectionHeading
          eyebrow="Questions"
          title="The things people ask before we start"
          align="center"
          size="lg"
        />
        <FaqAccordion faqs={service.faqs} className="mt-14" />
      </Section>
    ) : null,
  };

  return (
    <>
      <ServiceHero service={service} trail={trail} />
      {blockOrder[variant].map((key) => blocks[key])}

      <CTABanner
        eyebrow="Next step"
        title={`Let's talk about ${(service.navLabel ?? service.name).toLowerCase()}`}
        subtitle="Tell us what the site needs to do. You'll get a straight answer on scope, timeline and cost — usually inside one working day."
        primaryAction={{ label: "Start a project", href: "/contact" }}
        secondaryAction={{ label: "See pricing", href: "/pricing" }}
        showEmail
      />
    </>
  );
}

/* ---------------------------------------------------------------- hero ---- */

function ServiceHero({ service, trail }: { service: Service; trail: Crumb[] }) {
  const { hero, media } = service;

  const actions = (
    <>
      <MagneticButton href="/contact" variant="accent" size="lg">
        Start a project
        <ArrowRight className="h-5 w-5" aria-hidden />
      </MagneticButton>
      <Button href="#deliverables" variant="ghost" size="lg">
        What&apos;s included
      </Button>
    </>
  );

  const intro = (
    <>
      <Breadcrumbs trail={trail} tone="dark" emitSchema={false} />
      <div className="mt-8">
        <Eyebrow tone="dark">{hero.eyebrow}</Eyebrow>
      </div>
      <RevealText
        text={hero.headline}
        as="h1"
        accent={hero.accent}
        className="mt-6 text-step-6 font-extrabold leading-[0.98] text-vanilla"
      />
      <p className="mt-7 max-w-xl text-step-1 leading-relaxed text-vanilla/65">{hero.sub}</p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">{actions}</div>
    </>
  );

  if (service.layoutVariant === "editorial") {
    return (
      <header className="grain relative overflow-hidden bg-ink">
        <GradientMesh variant="ink" />
        <div className="relative mx-auto w-full max-w-3xl px-5 pb-24 pt-[calc(var(--nav-h)+4.5rem)] sm:px-8 md:pb-32">
          {intro}
        </div>
      </header>
    );
  }

  if (service.layoutVariant === "stacked") {
    return (
      <header className="grain relative overflow-hidden bg-ink">
        <GradientMesh variant="ink" />
        <div className="relative mx-auto w-full max-w-4xl px-5 pb-24 pt-[calc(var(--nav-h)+4.5rem)] text-center sm:px-8 md:pb-32">
          <div className="flex justify-center">
            <Breadcrumbs trail={trail} tone="dark" emitSchema={false} />
          </div>
          <div className="mt-8">
            <Eyebrow tone="dark" centered>
              {hero.eyebrow}
            </Eyebrow>
          </div>
          <RevealText
            text={hero.headline}
            as="h1"
            accent={hero.accent}
            className="mt-6 text-step-6 font-extrabold leading-[0.98] text-vanilla"
          />
          <p className="mx-auto mt-7 max-w-2xl text-step-1 leading-relaxed text-vanilla/65">
            {hero.sub}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">{actions}</div>
        </div>
      </header>
    );
  }

  if (service.layoutVariant === "showcase") {
    return (
      <header className="grain relative overflow-hidden bg-ink">
        <GradientMesh variant="ink" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-[calc(var(--nav-h)+4rem)] sm:px-8 lg:px-12">
          <div className="max-w-3xl">{intro}</div>
          <Reveal direction="up" delay={0.15} className="mt-16">
            <ShowreelCanvas
              videoSrc={media?.videoSrc}
              posterSrc={media?.posterSrc}
              label={service.name}
              caption={service.keywords.primary}
            />
          </Reveal>
        </div>
      </header>
    );
  }

  // split — the default
  return (
    <header className="grain relative overflow-hidden bg-ink">
      <GradientMesh variant="ink" />
      <Spotlight>
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-24 pt-[calc(var(--nav-h)+4rem)] sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-12 lg:pb-32">
          <div>{intro}</div>
          <Reveal direction="up" delay={0.12}>
            {media?.image ? (
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-vanilla/10">
                <Image
                  src={media.image}
                  alt={media.imageAlt ?? service.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
              </div>
            ) : (
              <ShowreelCanvas
                videoSrc={media?.videoSrc}
                posterSrc={media?.posterSrc}
                label={service.name}
                caption={service.keywords.primary}
              />
            )}
          </Reveal>
        </div>
      </Spotlight>
    </header>
  );
}
