import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StatBlock } from "@/components/ui/StatBlock";
import { LogoWall } from "@/components/ui/LogoWall";
import { CTABanner } from "@/components/ui/CTABanner";

import { GradientMesh } from "@/components/motion/GradientMesh";
import { RevealText } from "@/components/motion/RevealText";
import { MagneticButton } from "@/components/motion/MagneticButton";

import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, graph, itemListSchema, webPageSchema } from "@/lib/schema";
import { projects } from "@/data/projects";
import { industries } from "@/data/industries";

export const metadata: Metadata = buildMetadata({
  title: "Web Design Portfolio & Case Studies | Quesiono",
  description:
    "Eight web design and development case studies with real numbers: what the site was doing before, what we changed, and what happened after launch.",
  path: "/portfolio",
  eyebrow: "Case studies",
  keywords: [
    "web design portfolio",
    "website case studies",
    "web development portfolio",
    "ecommerce website examples",
    "SEO case study",
    "website redesign before and after",
    "Next.js website examples",
    "conversion rate optimization case study",
  ],
});

export default function PortfolioPage() {
  const trail = [{ name: "Case studies", href: "/portfolio" }];

  /* Aggregate proof, computed rather than typed out — so adding a ninth
     project updates the headline numbers without anyone remembering to. */
  const sectorCount = new Set(projects.map((project) => project.industrySlug).filter(Boolean)).size;
  const summary = [
    { value: projects.length, label: "Case studies", note: "Every one with the numbers attached." },
    { value: sectorCount, label: "Sectors covered", note: "From clinics to SaaS dashboards." },
    {
      display: "6–10",
      label: "Weeks, typical build",
      note: "Kick-off to launch for a marketing site.",
    },
    { value: 96, label: "Median mobile Lighthouse", note: "Measured after launch, not in a lab." },
  ];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/portfolio",
            name: "Web Design Portfolio & Case Studies | Quesiono",
            description:
              "Case studies from a Houston web design and digital agency, with before-and-after numbers.",
          }),
          itemListSchema({
            name: "Quesiono case studies",
            items: projects.map((project) => ({
              name: project.name,
              href: `/portfolio/${project.slug}`,
              description: project.summary,
            })),
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }, ...trail])
        )}
      />

      <header className="grain relative overflow-hidden bg-ink">
        <GradientMesh variant="ink" drift />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-[calc(var(--nav-h)+4rem)] sm:px-8 lg:px-12 lg:pb-32">
          <Breadcrumbs trail={trail} tone="dark" emitSchema={false} />
          <div className="mt-8">
            <Eyebrow tone="dark">Case studies · {projects.length} builds</Eyebrow>
          </div>

          <RevealText
            text="The work, with the numbers still attached"
            as="h1"
            accent={["numbers"]}
            className="mt-6 max-w-4xl text-step-6 font-extrabold leading-[0.96] text-vanilla"
          />

          <p className="mt-7 max-w-2xl text-step-1 leading-relaxed text-vanilla/65">
            Each of these says what the site was doing before, what we changed, and what moved
            afterwards. Where something took longer than we quoted, that&apos;s in there too —
            it&apos;s more useful to you than a gallery of homepages.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <MagneticButton href="/contact" variant="accent" size="lg">
              Start a project
              <ArrowRight className="h-5 w-5" aria-hidden />
            </MagneticButton>
            <Button href="/services" variant="ghost" size="lg">
              See services
            </Button>
          </div>
        </div>
      </header>

      <Section tone="cream" spacing="lg" width="wide">
        <StatBlock stats={summary} columns={4} />
      </Section>

      <Section tone="white" spacing="xl" width="wide">
        <SectionHeading
          eyebrow="Browse"
          title="Filter by what you're building"
          subtitle="Eight projects. Pick a category or read them all — they're short."
          size="xl"
          className="max-w-2xl"
        />
        <div className="mt-14">
          <PortfolioGrid />
        </div>
      </Section>

      <Section tone="ink" spacing="lg" width="wide" mesh>
        <SectionHeading
          eyebrow="Who we've built for"
          title="Clients on the shelf"
          subtitle="Word marks until each client signs off on a logo file — we don't put logos up without asking."
          tone="dark"
          size="lg"
          className="max-w-2xl"
        />
        <div className="mt-14">
          <LogoWall
            logos={projects.map((project) => ({ name: project.client }))}
            tone="dark"
            variant="marquee"
          />
        </div>
      </Section>

      <TestimonialsSection limit={3} />

      <Section tone="white" spacing="xl" width="wide">
        <SectionHeading
          eyebrow="By sector"
          title="Looking for work in your industry?"
          subtitle="Each sector page collects the relevant case studies plus the parts of that market we've learned to design around."
          size="lg"
          className="max-w-2xl"
        />
        <div className="mt-12 flex flex-wrap gap-3">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={industry.href}
              className="group inline-flex items-center gap-3 rounded-full border border-sand bg-cream px-5 py-3 font-semibold text-text-dark transition-all duration-300 hover:-translate-y-0.5 hover:border-midnight/30"
            >
              {industry.navLabel ?? industry.name}
              <ArrowUpRight
                className="h-4 w-4 text-text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          ))}
        </div>
      </Section>

      <CTABanner
        eyebrow="Your project"
        title="Want one of these written about your site?"
        subtitle="Tell us the goal and the constraint. You'll get a straight answer on scope, timeline and cost — usually inside one working day."
        primaryAction={{ label: "Start a project", href: "/contact" }}
        secondaryAction={{ label: "See pricing", href: "/pricing" }}
        showEmail
      />
    </>
  );
}
