/**
 * Single source of truth for site-wide constants.
 *
 * Anything that appears in more than one place — the domain, the business
 * address, social handles — lives here so structured data, the footer, and
 * the contact page can never drift apart.
 */

export const site = {
  name: "Quesiono",
  legalName: "Quesiono",
  tagline: "Web Design & Digital Agency",
  url: "https://quesiono.com",
  description:
    "Quesiono is a web design and digital agency. We build fast websites, run SEO that earns rankings, and write content that brings in work.",
  founded: "2022",

  email: "hello@quesiono.com",
  phone: "+1-713-555-0142",

  address: {
    street: "4201 Main St, Ste 200",
    city: "Houston",
    region: "TX",
    regionName: "Texas",
    postalCode: "77002",
    country: "US",
    countryName: "United States",
  },

  geo: {
    latitude: 29.7372,
    longitude: -95.3781,
  },

  social: {
    linkedin: "https://www.linkedin.com/company/quesiono",
    instagram: "https://www.instagram.com/quesiono_com",
    x: "https://x.com/Quesiono_com",
  },

  /** Weekday opening hours, used for LocalBusiness schema. */
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },

  /** Response-time promise. Referenced in copy, so it lives in one place. */
  responseTime: "one business day",
} as const;

export const socialLinks = [
  { label: "LinkedIn", href: site.social.linkedin, icon: "linkedin" as const },
  { label: "Instagram", href: site.social.instagram, icon: "instagram" as const },
  { label: "X", href: site.social.x, icon: "x" as const },
];

/** Absolute URL for a site-relative path. Structured data requires absolute. */
export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Builds the OG image URL for a page. */
export function ogImage(params: {
  title: string;
  eyebrow?: string;
  type?: "default" | "service" | "article" | "work";
}): string {
  const search = new URLSearchParams({ title: params.title });
  if (params.eyebrow) search.set("eyebrow", params.eyebrow);
  if (params.type) search.set("type", params.type);
  return `${site.url}/api/og?${search.toString()}`;
}
