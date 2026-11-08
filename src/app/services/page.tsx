import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { discoveryGroups } from "@/data/service-groups";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CTABanner } from "@/components/ui/CTABanner";
import { buildMetadata } from "@/lib/metadata";
import { enquiryHref } from "@/lib/enquiry";
import { JsonLd } from "@/components/seo/JsonLd";
import { graph, itemListSchema } from "@/lib/schema";
export const metadata = buildMetadata({
  title: "Web Design, Development, SEO & Content Services",
  description:
    "Find the right service for your business: websites, ecommerce, custom software, UI/UX, SEO, content, and ongoing support. Explore scope and next steps.",
  path: "/services",
});
export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={graph(
          itemListSchema({
            name: "Quesiono services",
            items: services.map((s) => ({
              name: s.name,
              href: s.href,
              description: s.shortDescription,
            })),
          }),
        )}
      />
      <PageHero
        eyebrow="Our expertise"
        title="Start with the problem. Find the right service."
        description="Launch something new, improve what you have, or connect the pieces that are slowing you down. Each service explains the scope, the decisions, and what you can expect to receive."
        trail={[{ name: "Services", href: "/services" }]}
        action={{
          label: "Help me choose",
          href: enquiryHref(undefined, "/services"),
        }}
      >
        <nav
          aria-label="Service categories"
          className="border-t border-vanilla/25"
        >
          {discoveryGroups.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="flex min-h-14 items-center justify-between gap-4 border-b border-vanilla/25 py-3 text-sm"
            >
              {g.title}
              <ArrowUpRight className="h-4 w-4 text-champagne" aria-hidden />
            </a>
          ))}
        </nav>
      </PageHero>
      {discoveryGroups.map((g, i) => (
        <Section
          key={g.id}
          id={g.id}
          tone={i % 2 ? "white" : "cream"}
          width="wide"
        >
          <div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
            <div>
              <p className="eyebrow text-text-muted">/{g.number}</p>
              <h2 className="mt-5 text-step-4 font-bold">{g.title}</h2>
              <p className="mt-5 max-w-sm text-text-muted">{g.description}</p>
            </div>
            <div>
              {g.slugs.map((slug) => {
                const s = services.find((s) => s.slug === slug)!;
                return (
                  <Link
                    key={slug}
                    href={s.href}
                    className="group grid grid-cols-[1fr_1.5rem] gap-4 border-t border-sand py-6"
                  >
                    <div>
                      <h3 className="text-step-2 font-semibold">{s.name}</h3>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted">
                        {s.shortDescription}
                      </p>
                      <span className="mt-4 inline-block text-sm font-semibold text-indigo">
                        Explore scope & deliverables
                      </span>
                    </div>
                    <ArrowUpRight
                      className="mt-1 h-5 w-5 text-indigo transition-transform group-hover:-translate-y-1"
                      aria-hidden
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </Section>
      ))}
      <CTABanner
        title="A focused improvement or a complete rebuild?"
        subtitle="Share your website and the result you need. We can help identify the work that belongs in the first phase."
        primaryAction={{
          label: "Discuss your priorities",
          href: enquiryHref(undefined, "/services"),
        }}
        secondaryAction={{ label: "How we scope a project", href: "/pricing" }}
      />
    </>
  );
}
