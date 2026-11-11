import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projectParams, projects } from "@/data/projects";
import { getServiceBySlug } from "@/data/services";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CTABanner } from "@/components/ui/CTABanner";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { buildMetadata } from "@/lib/metadata";
import { enquiryHref } from "@/lib/enquiry";
export const dynamicParams = false;
export const generateStaticParams = projectParams;
export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getProjectBySlug(params.slug);
  return p
    ? buildMetadata({
        title: p.meta.title,
        description: p.meta.description,
        path: `/portfolio/${p.slug}`,
        noIndex: p.evidence === "pending",
      })
    : {};
}
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = getProjectBySlug(params.slug);
  if (!p) notFound();
  const source = `/portfolio/${p.slug}`;
  const related = p.services
    .map(getServiceBySlug)
    .filter((s) => s !== undefined);
  return (
    <>
      <PageHero
        eyebrow={
          p.evidence === "visual"
            ? `${p.category} / Website presentation`
            : "Project archive"
        }
        title={p.name}
        description={
          p.evidence === "visual"
            ? p.summary
            : "This earlier project record is retained at its original URL. Its client attribution and results have not been verified, so they are not presented as evidence of completed work."
        }
        trail={[
          { name: "Work", href: "/portfolio" },
          { name: p.name, href: source },
        ]}
        light
      />
      {p.image && (
        <Section width="wide" tone="ink" spacing="sm">
          <figure className="overflow-hidden rounded-lg border border-vanilla/20 bg-midnight p-2 shadow-[0_30px_80px_-45px_rgba(0,0,0,.8)] sm:p-4">
            <div className="flex h-10 items-center gap-2 px-3 text-vanilla/75">
              <span className="h-2 w-2 rounded-full bg-champagne" aria-hidden />
              <span className="h-2 w-2 rounded-full bg-vanilla/50" aria-hidden />
              <span className="h-2 w-2 rounded-full bg-vanilla/30" aria-hidden />
              <span className="ml-3 text-xs font-medium">{p.name} / desktop & mobile</span>
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-sand">
              <Image
                src={p.image}
                alt={p.imageAlt ?? p.name}
                fill
                sizes="(max-width: 1280px) 100vw, 1184px"
                priority
                className="object-contain"
              />
            </div>
            <figcaption className="px-3 py-4 text-xs text-vanilla/70">
              Supplied project presentation. Explore the visible design decisions below.
            </figcaption>
          </figure>
        </Section>
      )}
      {p.evidence === "visual" && (
        <Section width="wide" tone="white">
          <div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
            <div>
              <p className="eyebrow text-text-muted">Reading the design</p>
              <p className="mt-5 text-sm text-text-muted">
                Desktop & mobile presentation
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                {p.tags.map((t) => (
                  <li key={t} className="border-t border-sand pt-3">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-10">
              {[p.situation, p.work, p.outcome].map((s, index) => (
                <div key={s.heading} className="border-l-2 border-champagne pl-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[.16em] text-indigo">0{index + 1} / Project reading</p>
                  <h2 className="text-step-3 font-semibold">{s.heading}</h2>
                  {s.paragraphs.map((t) => (
                    <p key={t} className="mt-5 leading-relaxed text-text-muted">
                      {t}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}
      <Section width="wide">
        <h2 className="text-step-3 font-semibold">
          Explore the relevant expertise.
        </h2>
        <div className="mt-7 flex flex-wrap gap-3">
          {related.map((s) => (
            <Link
              href={s.href}
              key={s.slug}
              className="premium-card inline-flex min-h-11 items-center rounded-full border border-sand bg-white px-5 py-3 text-sm font-semibold text-indigo hover:border-indigo hover:bg-indigo hover:text-vanilla focus-visible:bg-indigo focus-visible:text-vanilla"
            >
              {s.name} ↗
            </Link>
          ))}
        </div>
      </Section>
      <Section width="wide" tone="white">
        <h2 className="text-step-3 font-semibold">Another perspective.</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          {projects
            .filter((q) => q.evidence === "visual" && q.slug !== p.slug)
            .slice(0, 2)
            .map((q) => (
              <PortfolioCard key={q.slug} title={q.name} {...q} />
            ))}
        </div>
      </Section>
      <CTABanner
        title="Have a similar problem to solve?"
        subtitle="Tell us about your customers, the information they need, and the next step your website should help them take."
        primaryAction={{
          label: "Discuss a similar project",
          href: enquiryHref(related[0]?.slug, source),
        }}
        secondaryAction={{ label: "Explore the portfolio", href: "/portfolio" }}
      />
    </>
  );
}
