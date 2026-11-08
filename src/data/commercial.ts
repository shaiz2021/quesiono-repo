import drafts from "./commercial-drafts.json";
import type { ServiceTier } from "./services";
/** Prices stay unpublished until an owner verifies scope and delivery estimates.
 * Set approved and edit tiers here via commercial-drafts.json; all pages use this accessor. */
export function approvedTiers(slug: string): ServiceTier[] {
  const entry = drafts[slug as keyof typeof drafts];
  return entry?.approved ? (entry.tiers as ServiceTier[]) : [];
}
export const commercialPolicy = {
  pricing:
    "Your quote is based on an agreed scope. It lists deliverables, exclusions, third-party costs, review rounds, and payment milestones before work begins.",
  timing:
    "Your delivery schedule is confirmed after scope, content readiness, integrations, and review availability have been assessed.",
  exclusions:
    "Hosting, domains, paid software, stock assets, ongoing support, and additional features are included only when listed in the proposal.",
};
