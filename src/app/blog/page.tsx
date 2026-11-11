import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { blogPosts } from "@/data/blog";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata({
  title: "Journal — Website, Design & SEO Guides",
  description:
    "Practical guides to planning a website, improving user journeys, understanding search, and maintaining the systems behind your business.",
  path: "/blog",
});
export default function BlogPage() {
  const startingPoints = [
    { slug: "website-redesign-checklist", label: "Website planning", need: "Planning a new website or a redesign?" },
    { slug: "technical-seo-audit-checklist", label: "Search visibility", need: "Trying to understand what search engines can reach?" },
    { slug: "shopify-store-conversion-optimization", label: "Ecommerce", need: "Looking for friction in the path to purchase?" },
  ].map((entry) => ({ ...entry, post: blogPosts.find((post) => post.slug === entry.slug) }));
  return (
    <>
      <PageHero
        eyebrow="The journal"
        title="Make a more informed next move."
        description="Practical guides for the decisions behind a better website: what to improve, what to measure, and what to ask before committing to a build."
        trail={[{ name: "Journal", href: "/blog" }]}
        light
      />
      <Section width="wide" tone="midnight">
        <div className="grid gap-7 lg:grid-cols-[.7fr_1.3fr] lg:gap-14">
          <div>
            <p className="eyebrow text-champagne">Start with a decision</p>
            <h2 className="mt-5 text-step-4 font-bold text-vanilla">Three useful places to begin.</h2>
            <p className="mt-5 max-w-md text-vanilla/75">Choose the question closest to your current project. Each guide links to the related service when you are ready to look at scope.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {startingPoints.map(({ slug, label, need, post }) => post && (
              <Link key={slug} href={`/blog/${slug}`} className="premium-card group flex h-full min-h-[14rem] flex-col rounded-md border border-vanilla/20 bg-ink/50 p-5 hover:border-champagne hover:bg-indigo/70 sm:p-6">
                <span className="text-xs font-semibold uppercase tracking-[.14em] text-champagne">{label}</span>
                <h3 className="mt-6 flex-1 text-step-1 font-semibold text-vanilla">{need}</h3>
                <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-vanilla/80">Read {post.title} <ArrowUpRight className="h-4 w-4 shrink-0 text-champagne transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden /></span>
              </Link>
            ))}
          </div>
        </div>
      </Section>
      <Section width="wide" tone="white">
        <BlogGrid
          posts={blogPosts.map(
            ({ slug, title, excerpt, category, readTime }) => ({
              slug,
              title,
              excerpt,
              category,
              readTime,
            }),
          )}
        />
      </Section>
    </>
  );
}
