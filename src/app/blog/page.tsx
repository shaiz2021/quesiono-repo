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
  return (
    <>
      <PageHero
        eyebrow="The journal"
        title="Make a more informed next move."
        description="Practical guides for the decisions behind a better website: what to improve, what to measure, and what to ask before committing to a build."
        trail={[{ name: "Journal", href: "/blog" }]}
        light
      />
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
