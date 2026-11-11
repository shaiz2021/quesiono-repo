import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { discoveryGroups } from "@/data/service-groups";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Reveal } from "@/components/motion/Reveal";
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

const groupGuidance: Record<string, string> = {
  websites:
    "Explore web design, WordPress, Shopify and ecommerce development when visitors struggle to understand your offer, browse products or complete a purchase.",
  development:
    "Custom web applications, integrations and UX design fit when an existing platform cannot support the way your team or customers need to work.",
  growth:
    "Technical SEO, local SEO, Google Business Profile work and performance improvements help people find the right page and use it comfortably.",
  support:
    "Content writing, blog development and website maintenance keep the experience useful after the initial launch.",
};

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
              className="group flex min-h-14 items-center justify-between gap-4 border-b border-vanilla/25 px-3 py-3 text-sm transition-colors hover:bg-vanilla/10 focus-visible:bg-vanilla/10"
            >
              {g.title}
              <ArrowUpRight className="h-4 w-4 text-champagne transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
            </a>
          ))}
        </nav>
      </PageHero>
      {discoveryGroups.map((g, i) => (
        <Section
          key={g.id}
          id={g.id}
          tone={i % 2 ? "midnight" : i === 2 ? "white" : "cream"}
          width="wide"
        >
          <div className="grid gap-10 lg:grid-cols-[.62fr_1.38fr] lg:gap-14">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className={`eyebrow ${i % 2 ? "text-champagne" : "text-text-muted"}`}>/{g.number} — Focus area</p>
              <h2 className="mt-5 max-w-sm text-step-4 font-bold">{g.title}</h2>
              <p className={`mt-5 max-w-sm leading-relaxed ${i % 2 ? "text-vanilla/75" : "text-text-muted"}`}>{g.description}</p>
              <p className={`mt-5 max-w-sm border-l-2 border-champagne pl-5 text-sm leading-relaxed ${i % 2 ? "text-vanilla/75" : "text-text-muted"}`}>{groupGuidance[g.id]}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {g.slugs.map((slug, index) => {
                const s = services.find((s) => s.slug === slug)!;
                return (
                  <Reveal
                    key={slug}
                    delay={(index % 2) * 0.07}
                    className="h-full"
                  >
                    <ServiceCard
                      icon={s.icon}
                      title={s.name}
                      description={s.shortDescription}
                      href={s.href}
                      index={index + 1}
                      tags={s.outcomes?.slice(0, 2)}
                      tone={i % 2 ? "dark" : "light"}
                    />
                  </Reveal>
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
