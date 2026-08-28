/**
 * The navigation tree.
 *
 * Built on the server and passed into NavBar as a prop. That indirection is
 * deliberate: NavBar is a client component, and importing the service and
 * project data directly would ship every service page's body copy — several
 * hundred kilobytes — into the client bundle. This projection is a few hundred
 * bytes and stays in sync because it's derived, not retyped.
 */

import { getServicesByGroup, groupBlurbs, groupLabels, services, type ServiceGroup } from "@/data/services";
import { industries } from "@/data/industries";
import { getFeaturedProjects } from "@/data/projects";

export interface NavItem {
  label: string;
  href: string;
  blurb?: string;
}

export interface NavColumn {
  label: string;
  blurb: string;
  href: string;
  items: NavItem[];
}

export interface NavFeature {
  eyebrow: string;
  title: string;
  blurb: string;
  href: string;
  cta: string;
}

export interface NavTree {
  serviceColumns: NavColumn[];
  industries: NavItem[];
  company: NavItem[];
  feature: NavFeature;
  /** Every service page, including the children reached from a parent. */
  serviceCount: number;
}

/** Company links, in the order someone researching us would want them. */
export const companyLinks: NavItem[] = [
  { label: "About the studio", href: "/about", blurb: "Who works here and how we think" },
  { label: "How we work", href: "/process", blurb: "Six stages, and what you do in each" },
  { label: "Pricing", href: "/pricing", blurb: "Real ranges, and what moves them" },
  { label: "Client results", href: "/testimonials", blurb: "What people said afterwards" },
  { label: "Questions", href: "/faq", blurb: "The ones we get asked most" },
  { label: "Careers", href: "/careers", blurb: "Open roles and how we hire" },
  { label: "Our products", href: "/products", blurb: "Tools we built for ourselves" },
];

/** Footer-only. Kept here so there is one list of legal URLs. */
export const legalLinks: NavItem[] = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Terms of service", href: "/terms-of-service" },
  { label: "Cookie policy", href: "/cookie-policy" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "Sitemap", href: "/sitemap" },
];

const serviceGroups: ServiceGroup[] = ["web", "seo", "content"];

const groupHrefs: Record<ServiceGroup, string> = {
  web: "/services",
  seo: "/services/seo",
  content: "/services/content-writing",
};

export function buildNavTree(): NavTree {
  const featured = getFeaturedProjects()[0];

  return {
    serviceColumns: serviceGroups.map((group) => ({
      label: groupLabels[group],
      blurb: groupBlurbs[group],
      href: groupHrefs[group],
      items: getServicesByGroup(group).map((service) => ({
        label: service.navLabel ?? service.name,
        href: service.href,
        blurb: service.shortDescription,
      })),
    })),

    industries: industries.map((industry) => ({
      label: industry.navLabel ?? industry.name,
      href: industry.href,
      blurb: industry.shortDescription,
    })),

    company: companyLinks,

    serviceCount: services.length,

    feature: {
      eyebrow: "Recent work",
      title: featured.name,
      blurb: featured.summary,
      href: `/portfolio/${featured.slug}`,
      cta: featured.metric ?? "Read the case study",
    },
  };
}
