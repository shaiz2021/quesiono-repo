import { notFound } from "next/navigation";
import { industries, getIndustryBySlug } from "@/data/industries";
import { getServiceBySlug } from "@/data/services";
import { projects } from "@/data/projects";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CTABanner } from "@/components/ui/CTABanner";
import { buildMetadata } from "@/lib/metadata";
import { enquiryHref } from "@/lib/enquiry";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, graph } from "@/lib/schema";
export const dynamicParams = false;
export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}
export function generateMetadata({ params }: { params: { slug: string } }) {
  const i = getIndustryBySlug(params.slug);
  return i
    ? buildMetadata({
        title: i.meta.title,
        description: i.meta.description,
        path: i.href,
      })
    : {};
}
export default function IndustryPage({ params }: { params: { slug: string } }) {
  const i = getIndustryBySlug(params.slug);
  if (!i) notFound();
  const services = i.serviceSlugs
    .map(getServiceBySlug)
    .filter((s) => s !== undefined);
  const work = projects
    .filter((p) => p.evidence === "visual" && p.industrySlug === i.slug)
    .slice(0, 2);
  return (
    <>
      <JsonLd data={graph(faqSchema(i.faqs))} />
      <PageHero
        eyebrow={i.name}
        title={i.hero.headline}
        description={i.hero.sub}
        trail={[
          { name: "Industries", href: "/industries" },
          { name: i.name, href: i.href },
        ]}
        action={{
          label: "Discuss your website",
          href: enquiryHref(undefined, i.href),
        }}
      />
      <Section width="wide" tone="white">
        <div className="grid gap-10 lg:grid-cols-2">
          <h2 className="text-step-4 font-bold">{i.overview.heading}</h2>
          <div>
            {i.overview.paragraphs.map((p) => (
              <p key={p} className="text-step-1 text-text-muted">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Section>
      <Section width="wide">
        <p className="eyebrow text-text-muted">The practical challenges</p>
        <h2 className="mt-5 text-step-4 font-bold">
          What the website needs to get right.
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {i.challenges.map((c, index) => (
            <article key={c.title} className="premium-card rounded-md border border-sand bg-white p-6 hover:border-indigo hover:shadow-lg sm:p-7">
              <span className="text-xs font-semibold text-indigo">/ 0{index + 1}</span>
              <h3 className="mt-5 text-step-2 font-semibold">{c.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                {c.description}
              </p>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="ink" width="wide">
        <p className="eyebrow text-champagne">The response</p>
        <h2 className="mt-5 text-step-4 font-bold">
          Build the experience around those needs.
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {i.approach.map((a, index) => (
            <article key={a.title} className="premium-card rounded-md border border-vanilla/20 bg-midnight p-6 hover:border-champagne/60 hover:bg-indigo/60 sm:p-7">
              <span className="text-xs font-semibold text-champagne">/ 0{index + 1}</span>
              <h3 className="mt-5 text-step-2 font-semibold">{a.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-vanilla/75">
                {a.description}
              </p>
            </article>
          ))}
        </div>
      </Section>
      <Section width="wide" tone="white">
        <h2 className="text-step-4 font-bold">The services that support it.</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              icon={s.icon}
              title={s.name}
              description={s.shortDescription}
              href={s.href}
              tags={s.outcomes?.slice(0, 2)}
              tone="light"
            />
          ))}
        </div>
      </Section>
      {work.length > 0 && (
        <Section width="wide">
          <h2 className="text-step-4 font-bold">
            Related portfolio presentations.
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {work.map((p) => (
              <PortfolioCard key={p.slug} title={p.name} {...p} />
            ))}
          </div>
        </Section>
      )}
      <Section width="prose" tone="white">
        <h2 className="text-step-3 font-semibold">
          Questions for your sector.
        </h2>
        <FaqAccordion faqs={i.faqs} className="mt-8" />
      </Section>
      <CTABanner
        title="Let’s start with your customers."
        subtitle={`Tell us what a useful website would change for your ${i.name.toLowerCase()} business.`}
        primaryAction={{
          label: "Discuss your project",
          href: enquiryHref(undefined, i.href),
        }}
        secondaryAction={{ label: "Understand our process", href: "/process" }}
      />
    </>
  );
}
