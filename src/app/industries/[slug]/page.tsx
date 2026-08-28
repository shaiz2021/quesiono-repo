import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { getIndustryBySlug, industries, industryParams } from "@/data/industries";
import { getServiceBySlug } from "@/data/services";
import { getProjectBySlug } from "@/data/projects";
import { getTestimonialsByIndustry } from "@/data/testimonials";
import { getBlogPostBySlug } from "@/data/blog";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { StatBlock } from "@/components/ui/StatBlock";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ServiceCard } from "@/components/ui/ServiceCard";
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
import { breadcrumbSchema, faqSchema, graph, serviceSchema, webPageSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return industryParams();
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) return {};

  return buildMetadata({
    title: industry.meta.title,
    description: industry.meta.description,
    path: industry.href,
    eyebrow: industry.hero.eyebrow,
    cardType: "service",
    keywords: [
      industry.keywords.primary,
      ...industry.keywords.secondary,
      ...industry.keywords.semantic,
    ],
  });
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) notFound();

  const trail = [
    { name: "Industries", href: "/industries" },
    { name: industry.name, href: industry.href },
  ];

  const services = industry.serviceSlugs
    .map(getServiceBySlug)
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  const work = industry.caseStudySlugs
    .map(getProjectBySlug)
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  const testimonial = getTestimonialsByIndustry(industry.slug)[0];

  const reading = (industry.blogSlugs ?? [])
    .map(getBlogPostBySlug)
    .filter((post): post is NonNullable<typeof post> => Boolean(post));

  const siblings = industries.filter((item) => item.slug !== industry.slug);

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: industry.href,
            name: industry.meta.title,
            description: industry.meta.description,
          }),
          serviceSchema({
            name: `Web design and development for ${industry.name}`,
            description: industry.shortDescription,
            path: industry.href,
            serviceType: industry.keywords.primary,
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }, ...trail]),
          ...(industry.faqs.length ? [faqSchema(industry.faqs)] : [])
        )}
      />

      <header className="grain relative overflow-hidden bg-ink">
        <GradientMesh variant="ink" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-24 pt-[calc(var(--nav-h)+4rem)] sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-12 lg:pb-32">
          <div>
            <Breadcrumbs trail={trail} tone="dark" emitSchema={false} />
            <div className="mt-8">
              <Eyebrow tone="dark">{industry.hero.eyebrow}</Eyebrow>
            </div>
            <RevealText
              text={industry.hero.headline}
              as="h1"
              accent={industry.hero.accent}
              className="mt-6 text-step-6 font-extrabold leading-[0.98] text-vanilla"
            />
            <p className="mt-7 max-w-xl text-step-1 leading-relaxed text-vanilla/65">
              {industry.hero.sub}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <MagneticButton href="/contact" variant="accent" size="lg">
                Talk about your sector
                <ArrowRight className="h-5 w-5" aria-hidden />
              </MagneticButton>
              <Button href="#work" variant="ghost" size="lg">
                See the work
              </Button>
            </div>
          </div>

          <Reveal direction="up" delay={0.12}>
            {industry.media?.image ? (
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-vanilla/10">
                <Image
                  src={industry.media.image}
                  alt={industry.media.imageAlt ?? industry.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
              </div>
            ) : (
              <ShowreelCanvas
                videoSrc={industry.media?.videoSrc}
                posterSrc={industry.media?.posterSrc}
                label={industry.name}
                caption={industry.keywords.primary}
              />
            )}
          </Reveal>
        </div>
      </header>

      {industry.stats?.length ? (
        <Section tone="cream" spacing="md" width="wide">
          <StatBlock stats={industry.stats} columns={industry.stats.length % 4 === 0 ? 4 : 3} />
        </Section>
      ) : null}

      <Section tone="white" spacing="lg" width="prose" id="overview">
        <SectionHeading eyebrow="Context" title={industry.overview.heading} as="h2" size="xl" />
        <div className="mt-8 space-y-6">
          {industry.overview.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-step-1 leading-relaxed text-text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      <Section tone="ink" spacing="lg" width="wide" mesh>
        <SectionHeading
          eyebrow="The hard parts"
          title={industry.challengesHeading ?? `What's hard about ${industry.name} sites`}
          subtitle="Every sector has its own set. Naming them up front is how a brief stops being a wish list."
          tone="dark"
          size="lg"
        />
        <FeatureGrid features={industry.challenges} tone="dark" columns={3} className="mt-14" />
      </Section>

      <Section tone="cream" spacing="lg" width="wide">
        <SectionHeading
          eyebrow="Our answer"
          title={industry.approachHeading ?? "How we handle it"}
          size="lg"
        />
        <FeatureGrid features={industry.approach} columns={2} numbered className="mt-14" />
      </Section>

      {services.length ? (
        <Section tone="white" spacing="lg" width="wide">
          <SectionHeading
            eyebrow="What we run here"
            title={`Services that fit ${industry.navLabel ?? industry.name}`}
            subtitle="Not every service suits every sector. These are the ones that earn their keep in yours."
            size="lg"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard
                key={service.slug}
                icon={service.icon}
                title={service.navLabel ?? service.name}
                description={service.shortDescription}
                href={service.href}
                index={index}
              />
            ))}
          </div>
        </Section>
      ) : null}

      {work.length ? (
        <Section tone="cream" spacing="lg" width="wide" id="work">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Proof"
              title="Projects in this sector"
              subtitle="With the numbers, the timeline, and the parts that went sideways."
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
            {work.slice(0, 2).map((project) => (
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
              />
            ))}
          </div>
        </Section>
      ) : null}

      {testimonial ? (
        <Section tone="indigo" spacing="md" width="prose" mesh>
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
      ) : null}

      {reading.length ? (
        <Section tone="white" spacing="md" width="wide">
          <SectionHeading
            eyebrow="Further reading"
            title="Related notes from the journal"
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
      ) : null}

      {industry.faqs.length ? (
        <Section tone="cream" spacing="lg" width="prose" id="faq">
          <SectionHeading
            eyebrow="Questions"
            title={`${industry.navLabel ?? industry.name}, answered`}
            align="center"
            size="lg"
          />
          <FaqAccordion faqs={industry.faqs} className="mt-14" />
        </Section>
      ) : null}

      <Section tone="white" spacing="md" width="wide">
        <SectionHeading eyebrow="Other sectors" title="We also work in" size="md" />
        <div className="mt-8 flex flex-wrap gap-3">
          {siblings.map((item) => (
            <Link
              key={item.slug}
              href={item.href}
              className="inline-flex items-center rounded-full border border-sand bg-cream px-5 py-2.5 font-semibold text-text-dark transition-all duration-300 hover:-translate-y-0.5 hover:border-midnight/30"
            >
              {item.navLabel ?? item.name}
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner
        eyebrow="Next step"
        title={`Building for ${industry.navLabel ?? industry.name}?`}
        subtitle="Tell us the goal and the constraints. We'll tell you what it takes, what it costs, and what we'd do first."
        primaryAction={{ label: "Start a project", href: "/contact" }}
        secondaryAction={{ label: "See pricing", href: "/pricing" }}
        showEmail
      />
    </>
  );
}
