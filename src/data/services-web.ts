import type { Service } from "./services";
import { buildServices } from "./services-web-build";
import { platformServices } from "./services-web-platforms";

const byslug = (slug: string) => {
  const found = [...buildServices, ...platformServices].find((s) => s.slug === slug);
  if (!found) throw new Error(`Unknown web service slug: ${slug}`);
  return found;
};

/**
 * Display order for the nav column and the services index — most-asked-for
 * first, post-launch work last. The two source files are split by kind, not by
 * priority, so the order is declared here rather than falling out of the arrays.
 */
export const webServices: Service[] = [
  "web-design",
  "web-development",
  "ui-ux-design",
  "ecommerce-development",
  "wordpress-development",
  "shopify-development",
  "cms-development",
  "custom-development",
  "landing-page-development",
  "website-maintenance",
  "speed-optimization",
].map(byslug);
