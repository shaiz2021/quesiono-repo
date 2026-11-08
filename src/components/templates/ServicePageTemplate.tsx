import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import {
  getRelatedServices,
  getServiceBySlug,
  type Service,
} from "@/data/services";
import { projects } from "@/data/projects";
import { getBlogPostBySlug } from "@/data/blog";
import { commercialPolicy, approvedTiers } from "@/data/commercial";
import { getTestimonialsByService } from "@/data/testimonials";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { PricingTable } from "@/components/ui/PricingTable";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CTABanner } from "@/components/ui/CTABanner";
import { enquiryHref } from "@/lib/enquiry";
import type { Crumb } from "@/components/ui/Breadcrumbs";
export function serviceTrail(service: Service): Crumb[] {
  const trail = [{ name: "Services", href: "/services" }];
  const parent = service.parentService
    ? getServiceBySlug(service.parentService)
    : undefined;
  if (parent) trail.push({ name: parent.name, href: parent.href });
  return [...trail, { name: service.name, href: service.href }];
}
export function ServicePageTemplate({ service: s }: { service: Service }) {
  const href = enquiryHref(s.slug, s.href);
  const related = getRelatedServices(s);
  const work = projects
    .filter((p) => p.evidence === "visual" && p.services.includes(s.slug))
    .slice(0, 2);
  const reading = (s.blogSlugs ?? [])
    .map(getBlogPostBySlug)
    .filter((p) => p !== undefined)
    .slice(0, 2);
  const tiers = approvedTiers(s.slug);
  const reviews = getTestimonialsByService(s.slug);
  const editorial = s.layoutVariant === "editorial";
  return (
    <>
      <PageHero
        eyebrow={s.hero.eyebrow}
        title={s.hero.headline}
        description={s.hero.sub}
        trail={serviceTrail(s)}
        action={{ label: `Discuss ${s.navLabel ?? s.name}`, href }}
        light={editorial}
      >
        <aside
          className={`border-l-2 border-champagne pl-6 ${editorial ? "text-text-muted" : "text-vanilla/75"}`}
        >
          <p className="eyebrow">A useful starting point</p>
          <ul className="mt-5 space-y-3">
            {s.deliverables.slice(0, 3).map((d) => (
              <li key={d.title} className="flex gap-3 text-sm">
                <Check className="mt-1 h-4 w-4 shrink-0" aria-hidden />
                {d.title}
              </li>
            ))}
          </ul>
          <a
            href="#scope"
            className={`mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold ${editorial ? "text-indigo" : "text-champagne"}`}
          >
            See the scope
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </aside>
      </PageHero>
      <nav
        aria-label="On this service page"
        className="border-b border-sand bg-white"
      >
        <div className="site-container flex flex-wrap gap-x-7 py-3 text-sm text-text-muted">
          {[
            ["overview", "The problem"],
            ["scope", "Deliverables"],
            ["process", "Process"],
            ["pricing", "Scope & cost"],
            ["faq", "FAQs"],
          ].map(([id, label]) => (
            <a
              key={id}
              className="inline-flex min-h-11 items-center hover:text-indigo"
              href={`#${id}`}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
      <Section id="overview" width={editorial ? "prose" : "wide"} tone="white">
        <div className={editorial ? "" : "grid gap-8 lg:grid-cols-2"}>
          <div>
            <p className="eyebrow text-text-muted">Why this work matters</p>
            <h2 className="mt-5 max-w-xl text-step-4 font-bold">
              {s.overview.heading}
            </h2>
          </div>
          <div className="space-y-5">
            {s.overview.paragraphs.map((p) => (
              <p key={p} className="text-step-1 text-text-muted">
                {p}
              </p>
            ))}
            <p className="text-sm text-text-muted">
              The first step is to understand your current setup and the
              decisions your customers or team need to make.
            </p>
          </div>
        </div>
      </Section>
      <Section id="scope" width="wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-text-muted">The scope</p>
            <h2 className="mt-5 text-step-4 font-bold">What we can deliver.</h2>
          </div>
          <p className="max-w-md text-sm text-text-muted">
            These are the building blocks. Your proposal specifies which are
            included and what is outside the scope.
          </p>
        </div>
        <div
          className={`mt-12 grid gap-x-12 ${editorial ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}
        >
          {s.deliverables.map((d, i) => (
            <article key={d.title} className="border-t border-sand py-7">
              <p className="text-xs text-text-muted">0{i + 1}</p>
              <h3 className="mt-4 text-step-2 font-semibold">{d.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                {d.description}
              </p>
            </article>
          ))}
        </div>
      </Section>
      <Section id="process" tone="ink" width="wide">
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="eyebrow text-champagne">How the work happens</p>
            <h2 className="mt-5 text-step-4 font-bold">
              A clear sequence.
              <br />
              Visible decisions.
            </h2>
            <Link
              href="/process"
              className="mt-6 inline-flex min-h-11 items-center text-sm text-champagne underline underline-offset-4"
            >
              Our complete process ↗
            </Link>
          </div>
          <ol>
            {s.process.map((step) => (
              <li
                key={step.step}
                className="grid grid-cols-[2rem_1fr] gap-5 border-t border-vanilla/25 py-6"
              >
                <span className="text-sm text-champagne">{step.step}</span>
                <div>
                  <h3 className="text-step-2 font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-vanilla/75">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>
      {work.length > 0 && (
        <Section tone="cream" width="wide">
          <p className="eyebrow text-text-muted">Related portfolio</p>
          <h2 className="mt-5 text-step-4 font-bold">
            Explore the design decisions.
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {work.map((p) => (
              <PortfolioCard key={p.slug} title={p.name} {...p} />
            ))}
          </div>
        </Section>
      )}
      {reviews.length > 0 && (
        <Section tone="white" width="prose">
          <TestimonialCard {...reviews[0]} />
        </Section>
      )}
      <Section id="pricing" tone="white" width="wide">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-text-muted">Investment & timing</p>
            <h2 className="mt-5 text-step-4 font-bold">
              Know what you are agreeing to.
            </h2>
            <p className="mt-6 text-text-muted">{commercialPolicy.pricing}</p>
            <Button href={href} variant="dark" className="mt-7">
              Request a scoped proposal
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
          <dl className="space-y-6 border-t border-sand pt-6">
            <div>
              <dt className="font-semibold">Delivery schedule</dt>
              <dd className="mt-2 text-sm text-text-muted">
                {commercialPolicy.timing}
              </dd>
            </div>
            <div>
              <dt className="font-semibold">What is outside the quote?</dt>
              <dd className="mt-2 text-sm text-text-muted">
                {commercialPolicy.exclusions}
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Your part</dt>
              <dd className="mt-2 text-sm text-text-muted">
                Provide accurate business information, access to agreed systems,
                and consolidated feedback at review points.
              </dd>
            </div>
            <Link href="/pricing" className="text-link">
              See how pricing works ↗
            </Link>
          </dl>
        </div>
        {tiers.length > 0 && (
          <PricingTable
            tiers={tiers.map((t) => ({
              ...t,
              cta: { label: "Discuss this scope", href },
            }))}
            className="mt-12"
          />
        )}
      </Section>
      <Section id="faq" width="prose">
        <p className="eyebrow text-text-muted">Before you decide</p>
        <h2 className="mt-5 text-step-4 font-bold">
          {s.name}: your questions.
        </h2>
        <FaqAccordion faqs={s.faqs} className="mt-8" />
      </Section>
      <Section tone="white" width="wide" spacing="md">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-step-2 font-semibold">Related expertise</h2>
            <ul className="mt-5">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link href={r.href} className="text-link">
                    {r.name} ↗
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {reading.length > 0 && (
            <div>
              <h2 className="text-step-2 font-semibold">Useful reading</h2>
              <ul className="mt-5">
                {reading.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`} className="text-link">
                      {p.title} ↗
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Section>
      <CTABanner
        title={`Let’s talk about your ${s.navLabel?.toLowerCase() ?? s.name.toLowerCase()} project.`}
        subtitle="Share the problem, the current website, and what a useful outcome would look like."
        primaryAction={{ label: `Discuss ${s.navLabel ?? s.name}`, href }}
        secondaryAction={{ label: "Explore other services", href: "/services" }}
      />
    </>
  );
}
