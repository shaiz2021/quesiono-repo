import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";

import { getProjectBySlug, projectParams, projects } from "@/data/projects";
import { getServiceBySlug } from "@/data/services";
import { getIndustryBySlug } from "@/data/industries";
import { getTestimonialByProject } from "@/data/testimonials";
import { getBlogPostBySlug } from "@/data/blog";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StatBlock } from "@/components/ui/StatBlock";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { BeforeAfter } from "@/components/ui/BeforeAfter";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { CTABanner } from "@/components/ui/CTABanner";

import { GradientMesh } from "@/components/motion/GradientMesh";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { ShowreelCanvas } from "@/components/motion/ShowreelCanvas";
import { MagneticButton } from "@/components/motion/MagneticButton";

import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, caseStudySchema, graph, webPageSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return projectParams();
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};

  return buildMetadata({
    title: project.meta.title,
    description: project.meta.description,
    path: `/portfolio/${project.slug}`,
    eyebrow: project.category,
    cardType: "work",
    keywords: [project.keywords.primary, ...project.keywords.secondary],
  });
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const path = `/portfolio/${project.slug}`;
  const trail = [
    { name: "Case studies", href: "/portfolio" },
    { name: project.name, href: path },
  ];

  const services = project.services
    .map(getServiceBySlug)
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
  const industry = project.industrySlug ? getIndustryBySlug(project.industrySlug) : undefined;
  const testimonial = getTestimonialByProject(project.slug);
  const reading = (project.relatedBlogSlugs ?? [])
    .map(getBlogPostBySlug)
    .filter((post): post is NonNullable<typeof post> => Boolean(post));

  /* Next project in publication order, wrapping at the end — so there's always
     somewhere to go from the bottom of a case study. */
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  const facts = [
    { label: "Client", value: project.client },
    { label: "Sector", value: industry?.name ?? project.category },
    { label: "Year", value: project.year },
    { label: "Build time", value: project.duration },
    ...(project.location ? [{ label: "Location", value: project.location }] : []),
  ];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path,
            name: project.meta.title,
            description: project.meta.description,
          }),
          caseStudySchema({
            name: project.name,
            description: project.summary,
            path,
            image: project.image,
            client: project.client,
            keywords: [project.keywords.primary, ...project.keywords.secondary],
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }, ...trail])
        )}
      />

      <header className="grain relative overflow-hidden bg-ink">
        <GradientMesh variant="ink" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-[calc(var(--nav-h)+4rem)] sm:px-8 lg:px-12">
          <Breadcrumbs trail={trail} tone="dark" emitSchema={false} />

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Badge label={project.category} variant="accent" />
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} label={tag} variant="transparent" />
            ))}
          </div>

          <RevealText
            text={project.name}
            as="h1"
            className="mt-7 max-w-4xl text-step-7 font-extrabold leading-[0.94] text-vanilla"
          />
          <p className="mt-7 max-w-2xl text-step-1 leading-relaxed text-vanilla/65">
            {project.intro}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticButton href="/contact" variant="accent" size="lg">
              Start a project like this
              <ArrowRight className="h-5 w-5" aria-hidden />
            </MagneticButton>
            {project.url ? (
              <Button href={project.url} variant="ghost" size="lg">
                Visit the live site
                <ExternalLink className="h-4 w-4" aria-hidden />
              </Button>
            ) : null}
          </div>

          <dl className="mt-16 grid gap-x-8 gap-y-6 border-t border-vanilla/10 pt-8 sm:grid-cols-3 lg:grid-cols-5">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-vanilla/40">
                  {fact.label}
                </dt>
                <dd className="mt-2 font-display font-bold text-vanilla">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <Reveal direction="up" delay={0.1} className="mt-14">
            {project.image ? (
              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-vanilla/10">
                <Image
                  src={project.image}
                  alt={project.imageAlt ?? project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  priority
                />
              </div>
            ) : (
              <ShowreelCanvas
                videoSrc={project.videoSrc}
                posterSrc={project.posterSrc}
                label={project.client}
                caption={project.keywords.primary}
              />
            )}
          </Reveal>
        </div>
      </header>

      {project.metrics.length ? (
        <Section tone="cream" spacing="md" width="wide">
          <div className="mb-10">
            <Eyebrow>The numbers</Eyebrow>
          </div>
          <StatBlock
            stats={project.metrics}
            columns={project.metrics.length % 4 === 0 ? 4 : 3}
          />
        </Section>
      ) : null}

      <Section tone="white" spacing="lg" width="prose">
        <article className="space-y-16">
          <div>
            <SectionHeading
              eyebrow="Where it started"
              title={project.situation.heading}
              as="h2"
              size="xl"
            />
            <div className="mt-8 space-y-6">
              {project.situation.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-step-1 leading-relaxed text-text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="What we did"
              title={project.work.heading}
              as="h2"
              size="xl"
            />
            <div className="mt-8 space-y-6">
              {project.work.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="text-step-1 leading-relaxed text-text-muted"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </Section>

      {project.approach.length ? (
        <Section tone="cream" spacing="lg" width="wide">
          <SectionHeading
            eyebrow="The work, in pieces"
            title="Everything that shipped"
            size="lg"
          />
          <FeatureGrid features={project.approach} columns={2} numbered className="mt-14" />
        </Section>
      ) : null}

      {project.gallery?.length ? (
        <Section tone="white" spacing="lg" width="wide">
          <SectionHeading eyebrow="Screens" title="A look at the build" size="lg" />
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {project.gallery.map((shot) => (
              <figure key={shot.src}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-sand">
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                {shot.caption ? (
                  <figcaption className="mt-3 text-[0.85rem] text-text-muted">
                    {shot.caption}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </Section>
      ) : (
        <Section tone="white" spacing="lg" width="wide">
          <SectionHeading
            eyebrow="Before and after"
            title="What changed on the page"
            subtitle="Drag the handle. Same content, different hierarchy — that's usually where the conversion lift comes from."
            size="lg"
          />
          <BeforeAfter
            className="mt-14"
            caption={`${project.client} — the old layout against the rebuilt one.`}
          />
        </Section>
      )}

      {project.stack?.length ? (
        <Section tone="ink" spacing="md" width="wide" mesh>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <SectionHeading
              eyebrow="Stack"
              title="What it's built on"
              tone="dark"
              size="md"
            />
            <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {project.stack.map((tool) => (
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
      ) : null}

      <Section tone="cream" spacing="lg" width="prose">
        <SectionHeading
          eyebrow="Where it landed"
          title={project.outcome.heading}
          as="h2"
          size="xl"
        />
        <div className="mt-8 space-y-6">
          {project.outcome.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-step-1 leading-relaxed text-text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {testimonial ? (
        <Section tone="indigo" spacing="md" width="prose" mesh>
          <TestimonialCard
            quote={testimonial.quote}
            name={testimonial.name}
            role={testimonial.role}
            company={testimonial.company}
            tone="dark"
            size="feature"
          />
        </Section>
      ) : null}

      {services.length ? (
        <Section tone="white" spacing="md" width="wide">
          <SectionHeading
            eyebrow="Services on this project"
            title="What we were hired to do"
            size="md"
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={service.href}
                className="group inline-flex items-center gap-3 rounded-full border border-sand bg-cream px-5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-midnight/30"
              >
                <span className="font-semibold text-text-dark">
                  {service.navLabel ?? service.name}
                </span>
                <ArrowUpRight
                  className="h-4 w-4 text-text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            ))}
          </div>
          {industry ? (
            <p className="mt-8 text-text-muted">
              More on how we work in this sector:{" "}
              <Link
                href={industry.href}
                className="font-semibold text-indigo underline decoration-champagne decoration-2 underline-offset-4 hover:text-midnight"
              >
                {industry.name}
              </Link>
              .
            </p>
          ) : null}
        </Section>
      ) : null}

      {reading.length ? (
        <Section tone="cream" spacing="md" width="wide">
          <SectionHeading eyebrow="Related reading" title="The thinking behind it" size="md" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reading.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-sand bg-white p-7 transition-all duration-400 ease-smooth hover:-translate-y-1 hover:border-midnight/25 hover:shadow-xl"
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
      ) : null}

      <Section tone="white" spacing="lg" width="wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Next case study" title={next.name} size="lg" />
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
        <div className="mt-12">
          <PortfolioCard
            title={next.name}
            category={next.category}
            slug={next.slug}
            image={next.image}
            imageAlt={next.imageAlt}
            metric={next.metric}
            metricLabel={next.metricLabel}
            summary={next.summary}
            tags={next.tags}
            size="feature"
          />
        </div>
      </Section>

      <CTABanner
        eyebrow="Your turn"
        title="Got a project that looks like this one?"
        subtitle="Tell us the goal and the constraints. You'll get a straight answer on scope, timeline and cost — usually inside one working day."
        primaryAction={{ label: "Start a project", href: "/contact" }}
        secondaryAction={{ label: "See pricing", href: "/pricing" }}
        showEmail
      />
    </>
  );
}
