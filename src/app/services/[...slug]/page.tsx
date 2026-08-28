import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getServiceByPath, serviceParams } from "@/data/services";
import { ServicePageTemplate, serviceTrail } from "@/components/templates/ServicePageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  graph,
  serviceSchema,
  webPageSchema,
} from "@/lib/schema";

/**
 * Every service page except the index. `src/app/services/page.tsx` is a static
 * segment, so Next matches it first — the catch-all only sees deeper paths.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceParams();
}

export function generateMetadata({ params }: { params: { slug: string[] } }): Metadata {
  const service = getServiceByPath(params.slug);
  if (!service) return {};

  return buildMetadata({
    title: service.meta.title,
    description: service.meta.description,
    path: service.href,
    eyebrow: service.hero.eyebrow,
    cardType: "service",
    keywords: [
      service.keywords.primary,
      ...service.keywords.secondary,
      ...service.keywords.semantic,
    ],
  });
}

export default function ServicePage({ params }: { params: { slug: string[] } }) {
  const service = getServiceByPath(params.slug);
  if (!service) notFound();

  const trail = [{ name: "Home", href: "/" }, ...serviceTrail(service)];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: service.href,
            name: service.meta.title,
            description: service.meta.description,
          }),
          serviceSchema({
            name: service.name,
            description: service.shortDescription,
            path: service.href,
            serviceType: service.keywords.primary,
            offers: service.pricingTiers?.map((tier) => ({
              name: tier.name,
              price: tier.price,
              description: tier.summary,
            })),
          }),
          breadcrumbSchema(trail),
          ...(service.faqs.length ? [faqSchema(service.faqs)] : [])
        )}
      />
      <ServicePageTemplate service={service} />
    </>
  );
}
