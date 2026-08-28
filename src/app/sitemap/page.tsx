import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTABanner } from "@/components/ui/CTABanner";

import { GradientMesh } from "@/components/motion/GradientMesh";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";

import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { routeGroups } from "@/lib/routes";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Sitemap — Every Page on Quesiono.com",
  description:
    "The whole site on one page: services, industries, case studies, journal articles, open roles and policies. Grouped, with a line on what each page covers.",
  path: "/sitemap",
  eyebrow: "Sitemap",
  keywords: ["sitemap", "site index", "all pages", "Quesiono site map"],
});

/** Anchor per group, derived so the jump links can't drift from the headings. */
const groupId = (label: string) => label.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export default function SitemapPage() {
  const groups = routeGroups();
  const total = groups.reduce((sum, group) => sum + group.routes.length, 0);
  const trail = [{ name: "Sitemap", href: "/sitemap" }];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/sitemap",
            name: "Sitemap — Every Page on Quesiono.com",
            description: "A grouped index of every page on quesiono.com.",
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }, ...trail])
        )}
      />

      <header className="grain relative overflow-hidden bg-ink">
        <GradientMesh variant="ink" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-[calc(var(--nav-h)+4rem)] sm:px-8 lg:px-12">
          <Breadcrumbs trail={trail} tone="dark" emitSchema={false} />
          <div className="mt-8">
            <Eyebrow tone="dark">Sitemap · {total} pages</Eyebrow>
          </div>

          <RevealText
            text="Everything, on one page"
            as="h1"
            accent={["one", "page"]}
            className="mt-6 max-w-3xl text-step-5 font-extrabold leading-[1.02] text-vanilla"
          />

          <p className="mt-7 max-w-2xl text-step-1 leading-relaxed text-vanilla/65">
            Written for people, not crawlers — every link carries a line on what the page actually
            covers. If you want the machine-readable one, it&apos;s at{" "}
            <a
              href="/sitemap.xml"
              className="font-semibold text-champagne underline decoration-2 underline-offset-4"
            >
              /sitemap.xml
            </a>
            .
          </p>

          <nav aria-label="Jump to a group" className="mt-12 flex flex-wrap gap-2 border-t border-vanilla/12 pt-9">
            {groups.map((group) => (
              <a
                key={group.label}
                href={`#${groupId(group.label)}`}
                className="inline-flex items-center gap-2 rounded-full border border-vanilla/15 px-4 py-2 text-[0.85rem] font-semibold text-vanilla/70 transition-colors duration-300 hover:border-champagne/50 hover:text-champagne"
              >
                {group.label}
                <span className="text-vanilla/40">{group.routes.length}</span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {groups.map((group, index) => (
        <Section
          key={group.label}
          tone={index % 2 === 0 ? "cream" : "white"}
          spacing="lg"
          width="wide"
          id={groupId(group.label)}
        >
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow={`${group.routes.length} ${group.routes.length === 1 ? "page" : "pages"}`}
              title={group.label}
              subtitle={group.blurb}
              size="lg"
              className="max-w-2xl"
            />
            {group.href ? (
              <Button href={group.href} variant="outline" size="sm">
                Go to the index
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            ) : null}
          </div>

          <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-sand bg-sand sm:grid-cols-2 lg:grid-cols-3">
            {group.routes.map((route, routeIndex) => (
              <Reveal key={route.href} delay={Math.min(routeIndex, 5) * 0.03}>
                <li className="h-full bg-white">
                  <Link
                    href={route.href}
                    className="group flex h-full flex-col p-6 transition-colors duration-300 hover:bg-cream"
                  >
                    <span className="flex items-start justify-between gap-3 font-display font-bold text-text-dark transition-colors group-hover:text-indigo">
                      {route.label}
                      <ArrowUpRight
                        className="mt-1 h-4 w-4 shrink-0 opacity-30 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                        aria-hidden
                      />
                    </span>
                    {route.blurb ? (
                      <span className="mt-2.5 text-[0.9rem] leading-relaxed text-text-muted">
                        {route.blurb}
                      </span>
                    ) : null}
                    <span className="mt-auto pt-4 font-mono text-[0.75rem] text-text-muted/60">
                      {route.href}
                    </span>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </Section>
      ))}

      <Section tone="ink" spacing="lg" width="wide" mesh>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="For crawlers and the curious"
              title="How this page stays right"
              tone="dark"
              size="lg"
            />
            <p className="mt-7 max-w-xl leading-relaxed text-vanilla/60">
              Both sitemaps read the same list. A new service page, article or role appears here and
              in the XML feed the moment its record lands in the data files — nobody has to remember
              to add it twice, which is why most sitemaps go stale.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/sitemap.xml" variant="accent" size="md">
                XML sitemap
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button href="/contact" variant="ghost" size="md">
                Report a broken link
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-vanilla/12 bg-vanilla/[0.04] p-8">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-champagne">
              Can&apos;t find it?
            </p>
            <p className="mt-5 leading-relaxed text-vanilla/70">
              Email {site.email} and say what you were looking for. If two people ask for the same
              thing, it usually becomes a page.
            </p>
            <dl className="mt-8 space-y-4 border-t border-vanilla/12 pt-6 text-[0.9rem]">
              {[
                { term: "Total pages", detail: `${total}` },
                { term: "Groups", detail: `${groups.length}` },
                { term: "Reply time", detail: site.responseTime },
              ].map((item) => (
                <div key={item.term} className="flex items-baseline justify-between gap-4">
                  <dt className="text-vanilla/50">{item.term}</dt>
                  <dd className="font-display font-bold text-vanilla">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <CTABanner
        eyebrow="Or skip the browsing"
        title="Tell us what you're trying to do"
        subtitle="Faster than reading twelve service pages. Forty-five minutes, no deck, and you'll leave with a price range."
        primaryAction={{ label: "Start a project", href: "/contact" }}
        secondaryAction={{ label: "See pricing", href: "/pricing" }}
        showEmail
      />
    </>
  );
}
