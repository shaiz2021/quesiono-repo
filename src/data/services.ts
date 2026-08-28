import { webServices } from "./services-web";
import { seoServices } from "./services-seo";
import { contentServices } from "./services-content";

export type ServiceGroup = "web" | "seo" | "content";

/**
 * Controls how ServicePageTemplate orders and styles its sections. Twenty-two
 * pages driven by one template would otherwise all feel identical; the variant
 * gives each cluster its own rhythm without forking the code.
 *
 * - split      — two-column hero, deliverables beside the overview
 * - stacked    — full-bleed hero, one idea per band
 * - editorial  — narrow measure, long-form overview leads
 * - showcase   — media-forward, mockup or gallery above the fold
 */
export type LayoutVariant = "split" | "stacked" | "editorial" | "showcase";

export interface ServiceKeywords {
  /** The one phrase this page is built to rank for. Appears in H1 and meta title. */
  primary: string;
  /** Supporting head terms. Each should show up in an H2 or a deliverable title. */
  secondary: string[];
  /** Entities and related terms Google expects on a page about this topic. */
  semantic: string[];
}

export interface Deliverable {
  title: string;
  description: string;
  icon?: string;
}

export interface ServiceStep {
  step: string;
  title: string;
  description: string;
  detail?: string[];
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceTier {
  name: string;
  price: string;
  period?: string;
  summary: string;
  features: string[];
  excludes?: string[];
  timeline?: string;
  bestFor?: string;
  highlight?: boolean;
}

export interface ServiceStat {
  value?: number;
  display?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  note?: string;
}

/**
 * Media slots. Everything renders from code art until a file exists at these
 * paths — drop an image or an MP4 into /public and set the field, no component
 * changes needed.
 */
export interface ServiceMedia {
  image?: string;
  imageAlt?: string;
  gallery?: { src: string; alt: string; caption?: string }[];
  videoSrc?: string;
  posterSrc?: string;
}

export interface Service {
  slug: string;
  name: string;
  /** Shorter label for nav columns and cards where the full name wraps badly. */
  navLabel?: string;
  shortDescription: string;
  icon: string;
  href: string;
  parentService?: string;
  group: ServiceGroup;
  /** Surfaces in the nav's featured panel and the home page grid. */
  featured?: boolean;
  layoutVariant: LayoutVariant;

  hero: {
    eyebrow: string;
    headline: string;
    /** Words in the headline to tint champagne. */
    accent?: string[];
    sub: string;
  };

  overview: {
    heading: string;
    paragraphs: string[];
  };

  /** Short proof points. Rendered as a checklist under the overview. */
  outcomes?: string[];

  deliverablesHeading?: string;
  deliverablesIntro?: string;
  deliverables: Deliverable[];

  processHeading?: string;
  process: ServiceStep[];

  techStack?: { name: string; note: string }[];
  stats?: ServiceStat[];

  pricingTiers?: ServiceTier[];
  pricingNote?: string;

  faqs: ServiceFaq[];

  relatedSlugs: string[];
  caseStudySlugs: string[];
  blogSlugs?: string[];
  industrySlugs?: string[];

  keywords: ServiceKeywords;
  meta: { title: string; description: string };
  media?: ServiceMedia;
}

export const services: Service[] = [
  ...webServices,
  ...seoServices,
  ...contentServices,
];

export const groupLabels: Record<ServiceGroup, string> = {
  web: "Design & Build",
  seo: "Search & Growth",
  content: "Words & Editorial",
};

export const groupBlurbs: Record<ServiceGroup, string> = {
  web: "Design, build, launch, and keep it fast afterwards.",
  seo: "Get found for the searches that actually turn into work.",
  content: "Pages and posts written by people who read the brief.",
};

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);

/** Top-level services only — children are reached from their parent page. */
export const getServicesByGroup = (group: ServiceGroup) =>
  services.filter((service) => service.group === group && !service.parentService);

export const getAllServicesByGroup = (group: ServiceGroup) =>
  services.filter((service) => service.group === group);

export const getChildServices = (parentSlug: string) =>
  services.filter((service) => service.parentService === parentSlug);

/**
 * Resolves a catch-all route segment array back to a record. `/services/seo/local-seo`
 * arrives as ["seo", "local-seo"], so match on href rather than the last segment —
 * two services could otherwise share a leaf slug.
 */
export const getServiceByPath = (segments: string[]) => {
  const href = `/services/${segments.join("/")}`;
  return services.find((service) => service.href === href);
};

export const getRelatedServices = (service: Service) =>
  service.relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((related): related is Service => Boolean(related));

export const featuredServices = () => services.filter((service) => service.featured);

/** Flat list of every service path for generateStaticParams and the sitemap. */
export const serviceParams = () =>
  services.map((service) => ({
    slug: service.href.replace("/services/", "").split("/"),
  }));
