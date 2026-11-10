import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { discoveryGroups } from "@/data/service-groups";
import { getServiceBySlug } from "@/data/services";
import { Section } from "@/components/ui/Section";

const visualNotes: Record<string, { label: string; note: string }> = {
  websites: { label: "01 / Make it clear", note: "Web design · WordPress · Shopify" },
  development: { label: "02 / Make it work", note: "Applications · UX · integrations" },
  growth: { label: "03 / Make it findable", note: "SEO · local search · performance" },
  support: { label: "04 / Keep it useful", note: "Content · blogging · care" },
};

export function ServicesPreview() {
  return (
    <Section tone="ink" width="wide" id="services" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -right-28 top-10 h-80 w-80 rounded-full border border-champagne/15" />
      <div className="relative grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
        <div>
          <p className="eyebrow text-champagne">How we can help</p>
          <h2 className="mt-5 max-w-xl text-step-5 font-bold text-vanilla">
            Find the right way
            <br />
            <span className="text-champagne">forward.</span>
          </h2>
        </div>
        <div className="max-w-xl lg:justify-self-end">
          <p className="text-base leading-relaxed text-vanilla/75">
            Start with what is slowing your business down. We can focus on one
            change or connect your website, search, content, and tools into a
            more useful whole.
          </p>
          <Link href="/services" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-champagne underline-offset-4 hover:underline">
            Explore all services <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>

      <div className="relative mt-12 grid gap-4 sm:grid-cols-2 xl:gap-5">
        {discoveryGroups.map((group, index) => {
          const note = visualNotes[group.id];
          const linkedServices = group.slugs
            .map((slug) => getServiceBySlug(slug))
            .filter((service): service is NonNullable<typeof service> => Boolean(service));
          const leadingService = linkedServices[0];

          return (
            <article
              key={group.id}
              className={`service-feature group relative flex min-h-[18rem] flex-col justify-between overflow-hidden rounded-lg border border-vanilla/15 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-champagne/60 hover:bg-indigo/40 focus-within:border-champagne/70 sm:p-8 ${index === 0 ? "sm:col-span-2 sm:min-h-[20rem] lg:flex-row lg:items-end" : ""}`}
            >
              <div aria-hidden className="service-feature-mark absolute -right-2 -top-10 select-none font-display text-[11rem] font-bold leading-none text-vanilla/[.035] sm:text-[14rem]">
                0{index + 1}
              </div>
              <div className="relative z-10 max-w-xl">
                <p className="text-[.68rem] font-semibold uppercase tracking-[.2em] text-champagne">{note?.label ?? `0${index + 1}`}</p>
                <h3 className="mt-5 max-w-lg font-display text-step-3 font-bold text-vanilla sm:text-step-4">{group.title}</h3>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-vanilla/65 sm:text-base">{group.description}</p>
              </div>

              <div className={`relative z-10 mt-8 ${index === 0 ? "lg:mt-0 lg:w-[38%] lg:shrink-0" : ""}`}>
                <p className="mb-3 text-xs text-vanilla/70">Start with a service</p>
                <div className="flex flex-wrap gap-2">
                  {linkedServices.slice(0, index === 0 ? 5 : 3).map((service) => (
                    <Link
                      key={service.slug}
                      href={service.href}
                      className="inline-flex min-h-10 items-center gap-2 rounded-full border border-vanilla/20 bg-ink/50 px-3.5 text-xs font-medium text-vanilla/85 transition-colors hover:border-champagne hover:bg-champagne hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne"
                    >
                      {service.navLabel ?? service.name}
                      <ArrowUpRight className="h-3.5 w-3.5 text-champagne group-hover:text-ink" aria-hidden />
                    </Link>
                  ))}
                </div>
                <Link
                  href={leadingService?.href ?? "/services"}
                  className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-champagne"
                >
                  See what fits <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" aria-hidden />
                </Link>
              </div>
            </article>
          );
        })}
      </div>

      <div className="relative mt-6 flex flex-wrap items-center gap-2 border-t border-vanilla/10 pt-5 text-xs text-vanilla/45">
        <span className="mr-1 text-vanilla/70">Explore related work:</span>
        <Link href="/services/seo/local-seo" className="min-h-10 rounded-full border border-vanilla/15 px-3.5 py-2 text-vanilla/75 transition-colors hover:border-champagne hover:text-champagne">Google Business Profile</Link>
        <Link href="/services/custom-development" className="min-h-10 rounded-full border border-vanilla/15 px-3.5 py-2 text-vanilla/75 transition-colors hover:border-champagne hover:text-champagne">Workflow automation</Link>
        <Link href="/services/content-writing" className="min-h-10 rounded-full border border-vanilla/15 px-3.5 py-2 text-vanilla/75 transition-colors hover:border-champagne hover:text-champagne">Content strategy</Link>
      </div>
    </Section>
  );
}
