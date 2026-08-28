import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import {
  getChildServices,
  getServicesByGroup,
  groupBlurbs,
  groupLabels,
  services,
  type ServiceGroup,
} from "@/data/services";

const order: ServiceGroup[] = ["web", "seo", "content"];

/**
 * Home page services block. Grouped rather than a flat six-card grid — the
 * catalog is 22 deep now, and a flat grid gave no sense of which of those
 * three things you'd actually be hiring us for.
 */
export function ServicesPreview() {
  return (
    <Section tone="cream" spacing="xl" width="wide" id="services">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading
          eyebrow="What we do"
          title="Three things, done properly"
          subtitle="Design and build, search and growth, words. Most clients start with one and add the next once the first is paying for itself."
          size="xl"
          className="max-w-2xl"
        />
        <Link
          href="/services"
          className="group inline-flex items-center gap-2 font-semibold text-indigo transition-colors hover:text-midnight"
        >
          All {services.length} services
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </Link>
      </div>

      <div className="mt-16 space-y-20">
        {order.map((group, groupIndex) => {
          const parents = getServicesByGroup(group);

          return (
            <div key={group}>
              <Reveal>
                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 border-t border-sand pt-7">
                  <span className="font-display text-[0.8rem] font-bold uppercase tracking-[0.16em] text-champagne">
                    0{groupIndex + 1}
                  </span>
                  <h3 className="font-display text-step-3 font-extrabold tracking-tight text-text-dark">
                    {groupLabels[group]}
                  </h3>
                  <p className="text-text-muted">{groupBlurbs[group]}</p>
                </div>
              </Reveal>

              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {parents.map((service, index) => {
                  const children = getChildServices(service.slug);

                  return (
                    <ServiceCard
                      key={service.slug}
                      icon={service.icon}
                      title={service.navLabel ?? service.name}
                      description={service.shortDescription}
                      href={service.href}
                      index={index}
                      tags={children.slice(0, 3).map((child) => child.navLabel ?? child.name)}
                      cta={children.length ? `${children.length} specialisms` : undefined}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <Reveal>
        <div className="mt-20 flex flex-col items-start gap-6 rounded-3xl border border-sand bg-white p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <p className="font-display text-step-2 font-bold text-text-dark">
              Not sure which of these you need?
            </p>
            <p className="mt-2 max-w-xl text-text-muted">
              Send us the URL and what you want it to do. We&apos;ll say which of the three would
              move the number, and which would be a waste of your money right now.
            </p>
          </div>
          <Button href="/contact" variant="primary" size="lg" className="shrink-0">
            Ask us
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
