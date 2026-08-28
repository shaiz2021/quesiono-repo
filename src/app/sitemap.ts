import type { MetadataRoute } from "next";

import { allRoutes } from "@/lib/routes";
import { absoluteUrl } from "@/lib/site";

/**
 * XML sitemap, generated from the shared route registry in src/lib/routes.ts.
 *
 * Nothing is listed by hand here. Add a service, an article or a role and it
 * appears in this file and on the HTML sitemap at /sitemap at the same time.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return allRoutes().map((route) => ({
    url: absoluteUrl(route.href),
    lastModified: route.updated ? new Date(route.updated) : now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
