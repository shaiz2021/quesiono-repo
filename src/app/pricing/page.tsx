import Link from "next/link";
import { services } from "@/data/services";
import { discoveryGroups } from "@/data/service-groups";
import { commercialPolicy, approvedTiers } from "@/data/commercial";
import { pricingFactors, studioFaqGroups } from "@/data/studio";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { PricingTable } from "@/components/ui/PricingTable";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CTABanner } from "@/components/ui/CTABanner";
import { buildMetadata } from "@/lib/metadata";
import { enquiryHref } from "@/lib/enquiry";
export const metadata = buildMetadata({
  title: "Website Pricing & Project Scope",
  description:
    "Understand what affects a website quote, which costs to plan for, and how Quesiono scopes design, development, SEO and support.",
  path: "/pricing",
});
export default function PricingPage() {
  const approved = services.filter((s) => approvedTiers(s.slug).length);
  return (
    <>
      <PageHero
        eyebrow="Scope before numbers"
        title="A clear quote starts with a clear scope."
        description="A landing page, a store, and a custom application involve different work. Compare the scope you need, understand the costs around it, and request a proposal for your project."
        trail={[{ name: "Pricing", href: "/pricing" }]}
        action={{
          label: "Request a project quote",
          href: enquiryHref(undefined, "/pricing"),
        }}
      />
      <Section width="wide" tone="white">
        <p className="eyebrow text-text-muted">Choose a starting point</p>
        <h2 className="mt-5 text-step-4 font-bold">
          What kind of work do you need?
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {discoveryGroups.map((g) => (
            <article
              key={g.id}
              className="flex flex-col border border-sand p-7"
            >
              <p className="text-xs text-text-muted">/{g.number}</p>
              <h3 className="mt-4 text-step-3 font-semibold">{g.title}</h3>
              <p className="mt-4 flex-1 text-sm text-text-muted">
                {g.description}
              </p>
              <p className="mt-6 border-t border-sand pt-5 font-semibold">
                Quoted against your requirements
              </p>
              <p className="mt-2 text-sm text-text-muted">
                Deliverables and schedule agreed before work begins.
              </p>
              <Link href={`/services#${g.id}`} className="text-link mt-5">
                Compare the services ↗
              </Link>
            </article>
          ))}
        </div>
      </Section>
      {approved.map((s) => (
        <Section key={s.slug} width="wide">
          <h2 className="text-step-3 font-semibold">{s.name}</h2>
          <PricingTable
            className="mt-8"
            tiers={approvedTiers(s.slug).map((t) => ({
              ...t,
              cta: {
                label: "Discuss this scope",
                href: enquiryHref(s.slug, "/pricing"),
              },
            }))}
          />
        </Section>
      ))}
      <Section width="wide">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-text-muted">What moves the quote</p>
            <h2 className="mt-5 text-step-4 font-bold">
              Price follows the work.
              <br />
              Not the number of pages alone.
            </h2>
          </div>
          <div>
            {pricingFactors.map((f) => (
              <div key={f.title} className="border-t border-sand py-6">
                <h3 className="text-step-2 font-semibold">{f.title}</h3>
                <p className="mt-3 text-sm text-text-muted">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section tone="ink" width="wide" id="retainers">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow text-champagne">The full picture</p>
            <h2 className="mt-5 text-step-4 font-bold">
              Plan for launch.
              <br />
              And for what follows.
            </h2>
            <p className="mt-6 text-vanilla/75">
              {commercialPolicy.exclusions}
            </p>
          </div>
          <div className="space-y-7">
            <div>
              <h3 className="text-step-2 font-semibold">Project delivery</h3>
              <p className="mt-3 text-sm text-vanilla/75">
                {commercialPolicy.pricing}
              </p>
            </div>
            <div>
              <h3 className="text-step-2 font-semibold">Schedule</h3>
              <p className="mt-3 text-sm text-vanilla/75">
                {commercialPolicy.timing}
              </p>
            </div>
            <div>
              <h3 className="text-step-2 font-semibold">Ongoing work</h3>
              <p className="mt-3 text-sm text-vanilla/75">
                Maintenance, content and SEO can be scoped as recurring work.
                The proposal specifies activities, reporting, support coverage
                and cancellation terms.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section width="prose" tone="white">
        <h2 className="text-step-3 font-semibold">
          Before you request a quote.
        </h2>
        <FaqAccordion className="mt-7" faqs={studioFaqGroups[0].faqs} />
      </Section>
      <CTABanner
        title="Tell us the goal. We’ll help define the scope."
        subtitle="Share your website, the problem to solve and any budget or deadline constraints."
        primaryAction={{
          label: "Request a project quote",
          href: enquiryHref(undefined, "/pricing"),
        }}
        secondaryAction={{ label: "See the process", href: "/process" }}
      />
    </>
  );
}
