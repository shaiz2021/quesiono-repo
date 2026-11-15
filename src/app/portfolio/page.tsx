import { PageHero } from "@/components/ui/PageHero";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { Section } from "@/components/ui/Section";
import { CTABanner } from "@/components/ui/CTABanner";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata({
  title: "Website Design & Content Portfolio",
  description:
    "Explore Quesiono's supplied website and social content presentations, including fitness, real estate, landscaping, interiors and building products.",
  path: "/portfolio",
});
export default function PortfolioPage() {
  const work = projects.filter((p) => p.evidence === "visual");
  return (
    <>
      <PageHero
        eyebrow="The portfolio"
        title="A closer look at the experience."
        description="Explore the visual details: how an offer is introduced, how information is organized, and how the experience carries onto a smaller screen."
        trail={[{ name: "Work", href: "/portfolio" }]}
        light
      />
      <Section width="wide" tone="white">
        <PortfolioGrid
          items={work.map((p) => ({
            title: p.name,
            category: p.category,
            slug: p.slug,
            image: p.image,
            imageAlt: p.imageAlt,
            summary: p.summary,
            tags: p.tags,
          }))}
        />
        <p className="mt-10 max-w-2xl text-sm text-text-muted">
          Portfolio descriptions refer to the supplied visuals. We do not
          attribute measured business outcomes to these presentations without supporting records.
        </p>
      </Section>
      <CTABanner
        title="What should people do after they find you?"
        subtitle="Whether you need a website, a clearer content experience or something else, start with the next step you want to make easier for your audience."
        primaryAction={{
          label: "Discuss a similar project",
          href: "/contact?source=%2Fportfolio",
        }}
      />
    </>
  );
}
