import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { routeGroups } from "@/lib/routes";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata({
  title: "Sitemap — Explore Quesiono",
  description:
    "Browse Quesiono services, portfolio, industry pages, practical guides, company information and policies.",
  path: "/sitemap",
});
export default function SitemapPage() {
  return (
    <>
      <PageHero
        eyebrow="Find your way"
        title="The website, at a glance."
        description="Browse by topic, or use the links below to find a specific service, guide, or project page."
        trail={[{ name: "Sitemap", href: "/sitemap" }]}
        light
      />
      <Section width="wide" tone="white">
        <div className="space-y-12">
          {routeGroups()
            .filter((g) => g.routes.length)
            .map((g) => (
              <section key={g.label}>
                <h2 className="text-step-3 font-semibold">{g.label}</h2>
                <p className="mt-3 text-sm text-text-muted">{g.blurb}</p>
                <ul className="mt-7 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
                  {g.routes.map((r) => (
                    <li key={r.href} className="border-t border-sand py-4">
                      <Link
                        href={r.href}
                        className="font-semibold text-indigo hover:underline"
                      >
                        {r.label} ↗
                      </Link>
                      {r.blurb && (
                        <p className="mt-2 text-sm text-text-muted">
                          {r.blurb}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
        </div>
        <a href="/sitemap.xml" className="text-link mt-12">
          XML sitemap ↗
        </a>
      </Section>
    </>
  );
}
