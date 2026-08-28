import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, CalendarDays, Clock } from "lucide-react";

import {
  blogParams,
  formatPostDate,
  getBlogPostBySlug,
  getRelatedPosts,
  postHeadings,
  postWordCount,
} from "@/data/blog";
import { getServiceBySlug } from "@/data/services";
import { getProjectBySlug } from "@/data/projects";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { CTABanner } from "@/components/ui/CTABanner";

import { GradientMesh } from "@/components/motion/GradientMesh";
import { Reveal } from "@/components/motion/Reveal";

import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { articleSchema, breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogParams();
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};

  return buildMetadata({
    title: post.meta.title,
    description: post.meta.description,
    path: `/blog/${post.slug}`,
    eyebrow: post.category,
    cardType: "article",
    ogType: "article",
    publishedTime: post.date,
    modifiedTime: post.updated,
    keywords: [post.keywords.primary, ...post.keywords.secondary, ...post.tags],
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const trail = [
    { name: "Journal", href: "/blog" },
    { name: post.title, href: path },
  ];

  const headings = postHeadings(post);
  const related = getRelatedPosts(post.slug, 3);
  const services = (post.relatedServiceSlugs ?? [])
    .map(getServiceBySlug)
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
  const work = (post.relatedProjectSlugs ?? [])
    .map(getProjectBySlug)
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  const initials = post.author
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ path, name: post.meta.title, description: post.meta.description }),
          articleSchema({
            title: post.title,
            description: post.excerpt,
            path,
            datePublished: post.date,
            dateModified: post.updated,
            author: post.author,
            image: post.image,
            wordCount: postWordCount(post),
            section: post.category,
            keywords: [post.keywords.primary, ...post.keywords.secondary],
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }, ...trail])
        )}
      />

      <header className="grain relative overflow-hidden bg-ink">
        <GradientMesh variant="ink" />
        <div className="relative mx-auto w-full max-w-4xl px-5 pb-16 pt-[calc(var(--nav-h)+4rem)] sm:px-8">
          <Breadcrumbs
            trail={[{ name: "Journal", href: "/blog" }]}
            tone="dark"
            emitSchema={false}
          />

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Badge label={post.category} variant="accent" />
            <span className="inline-flex items-center gap-1.5 text-[0.85rem] text-vanilla/50">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden />
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            </span>
            <span className="inline-flex items-center gap-1.5 text-[0.85rem] text-vanilla/50">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              {post.readTime}
            </span>
          </div>

          <h1 className="mt-7 text-step-5 font-extrabold leading-[1.02] text-vanilla">
            {post.title}
          </h1>
          <p className="mt-6 text-step-1 leading-relaxed text-vanilla/65">{post.excerpt}</p>

          <div className="mt-10 flex items-center gap-4 border-t border-vanilla/10 pt-8">
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-champagne/20 font-display font-bold text-champagne"
              aria-hidden
            >
              {initials}
            </span>
            <div>
              <p className="font-display font-bold text-vanilla">{post.author}</p>
              <p className="text-[0.85rem] text-vanilla/50">
                {post.authorRole}, {site.name}
              </p>
            </div>
          </div>
        </div>
      </header>

      {post.image ? (
        <div className="bg-ink">
          <div className="mx-auto w-full max-w-5xl px-5 pb-16 sm:px-8">
            <Reveal direction="up">
              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-vanilla/10">
                <Image
                  src={post.image}
                  alt={post.imageAlt ?? post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 960px"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      ) : null}

      <Section tone="white" spacing="lg" width="wide">
        <div className="grid gap-12 lg:grid-cols-[0.28fr_0.72fr] lg:gap-16">
          {/* Sticky contents. Every h2 in the record carries an id, so this is
              generated rather than hand-maintained. */}
          {headings.length ? (
            <aside className="lg:sticky lg:top-[calc(var(--nav-h)+2rem)] lg:self-start">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-text-muted">
                On this page
              </p>
              <nav aria-label="Table of contents" className="mt-5">
                <ol className="space-y-3 border-l border-sand pl-4">
                  {headings.map((heading) => (
                    <li key={heading.id}>
                      <a
                        href={`#${heading.id}`}
                        className="text-[0.9rem] leading-snug text-text-muted transition-colors hover:text-text-dark"
                      >
                        {heading.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              {post.tags.length ? (
                <div className="mt-10">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-text-muted">
                    Filed under
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} label={tag} variant="outline" />
                    ))}
                  </div>
                </div>
              ) : null}
            </aside>
          ) : (
            <div aria-hidden />
          )}

          <div
            className="prose"
            /* Content is authored in this repo, not user-submitted. */
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </Section>

      {services.length ? (
        <Section tone="cream" spacing="md" width="wide">
          <SectionHeading
            eyebrow="Want us to do it"
            title="The services behind this article"
            subtitle="If you'd rather not run this yourself, these are the pages that cover it."
            size="md"
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={service.href}
                className="group inline-flex items-center gap-3 rounded-full border border-sand bg-white px-5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-midnight/30"
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
        </Section>
      ) : null}

      {work.length ? (
        <Section tone="white" spacing="lg" width="wide">
          <SectionHeading
            eyebrow="Seen in the wild"
            title="Where we did this on a real project"
            size="lg"
          />
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

      {related.length ? (
        <Section tone="cream" spacing="lg" width="wide">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Keep reading" title="More from the journal" size="lg" />
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 font-semibold text-indigo transition-colors hover:text-midnight"
            >
              Every article
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="group flex flex-col rounded-2xl border border-sand bg-white p-7 transition-all duration-400 ease-smooth hover:-translate-y-1 hover:border-midnight/25 hover:shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <Badge label={item.category} variant="outline" />
                  <span className="text-[0.8rem] text-text-muted">{item.readTime}</span>
                </div>
                <h3 className="mt-5 font-display text-step-1 font-bold text-text-dark">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-text-muted">
                  {item.excerpt}
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

      <CTABanner
        eyebrow="Got a project"
        title="Prefer to hand this to someone else?"
        subtitle="Tell us what the site needs to do. You'll get a straight answer on scope, timeline and cost — usually inside one working day."
        primaryAction={{ label: "Start a project", href: "/contact" }}
        secondaryAction={{ label: "See our work", href: "/portfolio" }}
        showEmail
      />
    </>
  );
}
