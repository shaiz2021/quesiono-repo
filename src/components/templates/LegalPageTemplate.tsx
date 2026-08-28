import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

import { GradientMesh } from "@/components/motion/GradientMesh";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";

import { legalLinks } from "@/lib/nav";
import { site } from "@/lib/site";

/**
 * One block of legal copy. Everything is optional so a section can be a single
 * paragraph or a paragraph plus a list plus a definition table, without four
 * different section types.
 */
export interface LegalBlock {
  h3?: string;
  p?: string;
  list?: string[];
  steps?: string[];
  rows?: { term: string; detail: string }[];
}

export interface LegalSection {
  /** Anchor target. Also the jump-link key, so it has to be unique per page. */
  id: string;
  heading: string;
  blocks: LegalBlock[];
}

/**
 * Shared shell for the four policy pages and nothing else. They have identical
 * structure — hero, jump list, numbered sections, contact footer — so the pages
 * themselves are data files with a `sections` array.
 */
export function LegalPageTemplate({
  eyebrow = "Legal",
  title,
  accent,
  intro,
  updated,
  effective,
  facts,
  sections,
  path,
}: {
  eyebrow?: string;
  title: string;
  accent?: string[];
  intro: string;
  /** Human-readable date, e.g. "August 2026". Shown, not parsed. */
  updated: string;
  effective?: string;
  facts?: { term: string; detail: string }[];
  sections: LegalSection[];
  path: string;
}) {
  const others = legalLinks.filter((link) => link.href !== path);

  return (
    <>
      <header className="grain relative overflow-hidden bg-ink">
        <GradientMesh variant="ink" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-[calc(var(--nav-h)+4rem)] sm:px-8 lg:px-12">
          <Breadcrumbs
            trail={[{ name: title, href: path }]}
            tone="dark"
            emitSchema={false}
          />
          <div className="mt-8">
            <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          </div>

          <RevealText
            text={title}
            as="h1"
            accent={accent}
            className="mt-6 max-w-4xl text-step-5 font-extrabold leading-[1.02] text-vanilla"
          />

          <p className="mt-7 max-w-2xl text-step-1 leading-relaxed text-vanilla/65">{intro}</p>

          <dl className="mt-12 grid gap-6 border-t border-vanilla/12 pt-9 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-champagne">
                Last updated
              </dt>
              <dd className="mt-2 text-vanilla/70">{updated}</dd>
            </div>
            {effective ? (
              <div>
                <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-champagne">
                  In effect since
                </dt>
                <dd className="mt-2 text-vanilla/70">{effective}</dd>
              </div>
            ) : null}
            {facts?.map((fact) => (
              <div key={fact.term}>
                <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-champagne">
                  {fact.term}
                </dt>
                <dd className="mt-2 text-vanilla/70">{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <Section tone="white" spacing="xl" width="wide">
        <div className="grid gap-14 lg:grid-cols-[15rem_1fr] lg:gap-20">
          {/* ------------------------------------------------------------ jump -- */}
          <nav
            aria-label="On this page"
            className="lg:sticky lg:top-[calc(var(--nav-h)+2rem)] lg:self-start"
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-text-muted">
              On this page
            </p>
            <ol className="mt-5 space-y-0">
              {sections.map((section, index) => (
                <li key={section.id} className="border-t border-sand first:border-t-0">
                  <a
                    href={`#${section.id}`}
                    className="flex gap-3 py-3 text-[0.9rem] leading-snug text-text-muted transition-colors hover:text-indigo"
                  >
                    <span className="font-display font-bold text-champagne">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* --------------------------------------------------------- content -- */}
          <div className="max-w-3xl">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-[calc(var(--nav-h)+2rem)] border-t border-sand pt-12 first:border-t-0 first:pt-0 [&+section]:mt-16"
              >
                <p className="font-display text-[0.85rem] font-bold tracking-[0.1em] text-champagne">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 font-display text-step-3 font-extrabold tracking-tight text-text-dark">
                  {section.heading}
                </h2>

                <div className="prose mt-7">
                  {section.blocks.map((block, blockIndex) => (
                    <div key={`${section.id}-${blockIndex}`} className="[&+div]:mt-6">
                      {block.h3 ? <h3>{block.h3}</h3> : null}
                      {block.p ? <p>{block.p}</p> : null}
                      {block.list?.length ? (
                        <ul>
                          {block.list.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      ) : null}
                      {block.steps?.length ? (
                        <ol>
                          {block.steps.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ol>
                      ) : null}
                      {block.rows?.length ? (
                        <dl className="mt-6 overflow-hidden rounded-2xl border border-sand">
                          {block.rows.map((row) => (
                            <div
                              key={row.term}
                              className="grid gap-2 border-b border-sand bg-cream/40 px-6 py-5 last:border-b-0 sm:grid-cols-[12rem_1fr] sm:gap-6"
                            >
                              <dt className="font-display font-bold text-text-dark">{row.term}</dt>
                              <dd className="text-[0.95rem] leading-relaxed text-text-muted">
                                {row.detail}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      ) : null}
                    </div>
                  ))}
                </div>
              </section>
            ))}

            {/* ------------------------------------------------------- contact -- */}
            <Reveal direction="up">
              <div className="mt-20 rounded-3xl border border-sand bg-cream p-8 sm:p-10">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo/10 text-indigo">
                  <Mail className="h-6 w-6" aria-hidden />
                </span>
                <h2 className="mt-6 font-display text-step-2 font-extrabold tracking-tight text-text-dark">
                  Questions about this page?
                </h2>
                <p className="mt-4 max-w-xl leading-relaxed text-text-muted">
                  A person reads that inbox, not a ticketing system. Email {site.email} and
                  you&apos;ll hear back inside {site.responseTime}.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href={`mailto:${site.email}`} variant="primary" size="md">
                    {site.email}
                  </Button>
                  <Button href="/contact" variant="outline" size="md">
                    Contact page
                  </Button>
                </div>
                <p className="mt-8 border-t border-sand pt-6 text-[0.875rem] leading-relaxed text-text-muted">
                  Postal: {site.legalName}, {site.address.street}, {site.address.city},{" "}
                  {site.address.region} {site.address.postalCode}, {site.address.countryName}.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* -------------------------------------------------------- other pages -- */}

      <Section tone="cream" spacing="lg" width="wide">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-text-muted">
          The rest of the small print
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {others.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-sand bg-white px-6 py-5 font-display font-bold text-text-dark transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-midnight/25 hover:text-indigo"
            >
              {link.label}
              <ArrowUpRight
                className="h-4 w-4 shrink-0 opacity-40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                aria-hidden
              />
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
