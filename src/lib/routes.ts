/**
 * Every URL on the site, in one place.
 *
 * Both sitemaps read from here — the XML one Google crawls and the HTML one at
 * /sitemap that people read — so a new service or article appears in both the
 * moment its data record lands. Nothing on this list is typed by hand except
 * the core pages, which have no data file to derive from.
 */

import { blogPosts } from "@/data/blog";
import { industries } from "@/data/industries";
import { products } from "@/data/products";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { openRoles } from "@/data/studio";
import { legalLinks } from "@/lib/nav";

export type ChangeFrequency = "daily" | "weekly" | "monthly" | "yearly";

export interface RouteEntry {
  href: string;
  label: string;
  /** One line for the HTML sitemap. Skipped for legal pages, which speak for themselves. */
  blurb?: string;
  /** ISO date, where the content has a real one. Feeds lastModified. */
  updated?: string;
  priority: number;
  changeFrequency: ChangeFrequency;
}

export interface RouteGroup {
  label: string;
  blurb: string;
  /** The index page for the group, when it has one. */
  href?: string;
  routes: RouteEntry[];
}

const core: RouteEntry[] = [
  {
    href: "/",
    label: "Home",
    blurb: "What we do, who we've done it for, and what it costs.",
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    href: "/services",
    label: "Services",
    blurb: `All ${services.length} services, grouped by web, search and content.`,
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    href: "/portfolio",
    label: "Work",
    blurb: `${projects.length} case studies with the numbers attached.`,
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    href: "/industries",
    label: "Industries",
    blurb: `The ${industries.length} sectors we've built enough in to know where they go wrong.`,
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    href: "/pricing",
    label: "Pricing",
    blurb: "Real ranges by project type, plus what moves a quote up or down.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    href: "/process",
    label: "Process",
    blurb: "Six stages from first call to handover, week by week.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    href: "/about",
    label: "About",
    blurb: "Who works here, how the studio runs, and what we turn down.",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    href: "/testimonials",
    label: "Testimonials",
    blurb: "Clients on what changed, including the uncomfortable parts.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    href: "/blog",
    label: "Journal",
    blurb: `${blogPosts.length} articles on design, build, search and running the thing.`,
    priority: 0.8,
    changeFrequency: "weekly",
  },
  {
    href: "/products",
    label: "Products",
    blurb: `${products.length === 1 ? "The tool" : "Tools"} we built for ourselves and then shipped.`,
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    href: "/faq",
    label: "FAQ",
    blurb: "Costs, timelines, ownership, and what happens to your rankings.",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    href: "/careers",
    label: "Careers",
    blurb: `${openRoles.length ? `${openRoles.length} open ${openRoles.length === 1 ? "role" : "roles"}` : "No open roles"}, and how hiring runs.`,
    priority: 0.6,
    changeFrequency: "weekly",
  },
  {
    href: "/contact",
    label: "Contact",
    blurb: "Tell us what the site has to do. Reply inside one business day.",
    priority: 0.9,
    changeFrequency: "monthly",
  },
];

export function routeGroups(): RouteGroup[] {
  return [
    {
      label: "Main pages",
      blurb: "The thirteen pages that carry the argument.",
      routes: core,
    },
    {
      label: "Services",
      blurb: "Parent services first, then the specialisms underneath them.",
      href: "/services",
      routes: services.map((service) => ({
        href: service.href,
        label: service.name,
        blurb: service.shortDescription,
        priority: service.parentService ? 0.7 : 0.9,
        changeFrequency: "monthly" as const,
      })),
    },
    {
      label: "Industries",
      blurb: "What's specifically hard in each sector, and how we handle it.",
      href: "/industries",
      routes: industries.map((industry) => ({
        href: industry.href,
        label: industry.name,
        blurb: industry.shortDescription,
        priority: 0.7,
        changeFrequency: "monthly" as const,
      })),
    },
    {
      label: "Case studies",
      blurb: "One page per project, with the before, the decision and the result.",
      href: "/portfolio",
      routes: projects.map((project) => ({
        href: `/portfolio/${project.slug}`,
        label: `${project.client} — ${project.name}`,
        blurb: project.summary,
        priority: 0.8,
        changeFrequency: "yearly" as const,
      })),
    },
    {
      label: "Journal",
      blurb: "Newest first. Written by the people who do the work.",
      href: "/blog",
      routes: blogPosts.map((post) => ({
        href: `/blog/${post.slug}`,
        label: post.title,
        blurb: post.excerpt,
        updated: post.updated ?? post.date,
        priority: post.featured ? 0.7 : 0.6,
        changeFrequency: "monthly" as const,
      })),
    },
    {
      label: "Open roles",
      blurb: "Each one says what the job is and what we need.",
      href: "/careers",
      routes: openRoles.map((role) => ({
        href: `/careers/${role.slug}`,
        label: role.title,
        blurb: role.summary,
        updated: role.posted,
        priority: 0.5,
        changeFrequency: "weekly" as const,
      })),
    },
    {
      label: "Legal and small print",
      blurb: "Policies, terms, and the accessibility statement.",
      routes: legalLinks.map((link) => ({
        href: link.href,
        label: link.label,
        priority: 0.3,
        changeFrequency: "yearly" as const,
      })),
    },
  ];
}

/** Flat list for the XML sitemap. Deduped, because /sitemap appears in a group too. */
export function allRoutes(): RouteEntry[] {
  const seen = new Set<string>();
  const flat: RouteEntry[] = [];

  routeGroups().forEach((group) => {
    group.routes.forEach((route) => {
      if (seen.has(route.href)) return;
      seen.add(route.href);
      flat.push(route);
    });
  });

  return flat;
}

export const routeCount = () => allRoutes().length;
