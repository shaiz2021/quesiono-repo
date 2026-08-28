import type { Service } from "./services";
import { seoCoreServices } from "./services-seo-core";
import { seoGrowthServices } from "./services-seo-growth";

const byslug = (slug: string) => {
  const found = [...seoCoreServices, ...seoGrowthServices].find((s) => s.slug === slug);
  if (!found) throw new Error(`Unknown SEO service slug: ${slug}`);
  return found;
};

/**
 * Parent first, then the disciplines in the order we'd actually run them:
 * foundation, then targeting, then on-site, then authority, then verticals.
 */
export const seoServices: Service[] = [
  "seo",
  "technical-seo",
  "keyword-research",
  "on-page-seo",
  "off-page-seo",
  "link-building",
  "local-seo",
  "ecommerce-seo",
].map(byslug);
