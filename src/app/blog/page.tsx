import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";

import { BlogGrid } from "@/components/sections/BlogGrid";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTABanner } from "@/components/ui/CTABanner";

import { GradientMesh } from "@/components/motion/GradientMesh";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { ShowreelCanvas } from "@/components/motion/ShowreelCanvas";

import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, graph, itemListSchema, webPageSchema } from "@/lib/schema";
import { blogCategories, blogPosts, formatPostDate, getFeaturedBlogPost } from "@/data/blog";
import { team } from "@/data/studio";

export const metadata: Metadata = buildMetadata({
  title: "Journal — Web Design, Development & SEO Guides | Quesiono",
  description:
    "Long, specific guides on web design, Next.js development, technical SEO and content, written by the people who do the work. No listicles.",
  path: "/blog",
  eyebrow: "Journal",
  keywords: [
    "web design blog",
    "web development guides",
    "SEO guides",
    "Core Web Vitals guide",
    "Next.js tutorials",
    "technical SEO checklist",
    "website cost guide",
    "content strategy guide",
  ],
});

export default function BlogIndexPage() {
  const trail = [{ name: "Journal", href: "/blog" }];
  const lead = getFeaturedBlogPost();

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/blog",
            name: "Journal — Web Design, Development & SEO Guides | Quesiono",
            description:
              "Guides on web design, development, SEO and content from a Houston digital agency.",
          }),
          itemListSchema({
            name: "Quesiono journal",
            items: blogPosts.map((post) => ({
              name: post.title,
              href: `/blog/${post.slug}`,
              description: post.excerpt,
            })),
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }, ...trail])
        )}
      />

      <header className="grain relative overflow-hidden bg-ink">
        <GradientMesh variant="ink" drift />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-[calc(var(--nav-h)+4rem)] sm:px-8 lg:px-12">
          <Breadcrumbs trail={trail} tone="dark" emitSchema={false} />
          <div className="mt-8">
            <Eyebrow tone="dark">Journal · {blogPosts.length} articles</Eyebrow>
          </div>

          <RevealText
            text="Notes from inside the work"
            as="h1"
            accent={["inside"]}
            className="mt-6 max-w-3xl text-step-6 font-extrabold leading-[0.96] text-vanilla"
          />

          <p className="mt-7 max-w-2xl text-step-1 leading-relaxed text-vanilla/65">
            Everything here is written by whoever actually did the thing — the developer who fixed
            the LCP, the SEO lead who ran the audit. That means fewer posts than most agency blogs
            and considerably more detail in each one.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {blogCategories.map((category) => (
              <Badge key={category} label={category} variant="transparent" />
            ))}
          </div>
        </div>
      </header>

      {lead ? (
        <Section tone="cream" spacing="lg" width="wide">
          <Reveal>
            <Link
              href={`/blog/${lead.slug}`}
              className="group grid overflow-hidden rounded-3xl border border-sand bg-white transition-all duration-400 ease-smooth hover:-translate-y-1 hover:border-midnight/25 hover:shadow-2xl lg:grid-cols-[0.92fr_1.08fr]"
            >
              <div className="relative">
                {lead.image ? (
                  <div className="relative h-full min-h-[280px]">
                    <Image
                      src={lead.image}
                      alt={lead.imageAlt ?? lead.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </div>
                ) : (
                  <div className="h-full bg-ink p-8">
                    <ShowreelCanvas label={`${lead.category} · quesiono.com`} />
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-12">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge label="Latest read" variant="accent" />
                  <Badge label={lead.category} variant="outline" />
                </div>

                <h2 className="mt-6 font-display text-step-4 font-extrabold leading-[1.04] tracking-tight text-text-dark transition-colors duration-300 group-hover:text-indigo">
                  {lead.title}
                </h2>

                <p className="mt-5 text-step-0 leading-relaxed text-text-muted">{lead.excerpt}</p>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.85rem] text-text-muted">
                  <span className="font-semibold text-text-dark">{lead.author}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                    <time dateTime={lead.date}>{formatPostDate(lead.date)}</time>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" aria-hidden />
                    {lead.readTime}
                  </span>
                </div>

                <span className="mt-9 inline-flex items-center gap-2 font-semibold text-indigo">
                  Read it
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </div>
            </Link>
          </Reveal>
        </Section>
      ) : null}

      <Section tone="white" spacing="xl" width="wide">
        <SectionHeading
          eyebrow="Everything else"
          title="Browse by what you're working on"
          size="xl"
          className="max-w-2xl"
        />
        <div className="mt-14">
          <BlogGrid exclude={lead ? [lead.slug] : []} />
        </div>
      </Section>

      <Section tone="ink" spacing="lg" width="wide" mesh>
        <SectionHeading
          eyebrow="Who writes this"
          title="Five people, five beats"
          subtitle="Nobody here writes about a topic they don't work in. It's why the SEO posts are dense and the design posts have opinions."
          tone="dark"
          size="lg"
          className="max-w-2xl"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => {
            const written = blogPosts.filter((post) => post.author === member.name);

            return (
              <div
                key={member.name}
                className="rounded-2xl border border-vanilla/12 bg-vanilla/[0.04] p-7"
              >
                <div className="flex items-center gap-4">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-champagne/20 font-display text-[0.9rem] font-bold text-champagne"
                    aria-hidden
                  >
                    {member.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                  <div>
                    <p className="font-display font-bold text-vanilla">{member.name}</p>
                    <p className="text-[0.8rem] text-vanilla/50">{member.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-[0.9rem] leading-relaxed text-vanilla/55">{member.focus}</p>
                <p className="mt-5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-champagne">
                  {written.length} {written.length === 1 ? "article" : "articles"}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <Button href="/about" variant="accent" size="md">
            Meet the studio
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </Section>

      <CTABanner
        eyebrow="Rather not DIY"
        title="Want us to just do it?"
        subtitle="Most of these guides describe work we'll do for you. Send the URL and the goal — you'll get a straight answer inside one working day."
        primaryAction={{ label: "Start a project", href: "/contact" }}
        secondaryAction={{ label: "See services", href: "/services" }}
        showEmail
      />
    </>
  );
}
