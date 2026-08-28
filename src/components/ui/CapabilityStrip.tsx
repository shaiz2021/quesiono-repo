"use client";

import { Marquee } from "@/components/motion/Marquee";

/**
 * The capability strip under the hero.
 *
 * Every item here maps to a real page in the service catalog — the previous
 * version advertised branding, automation and social media, none of which we
 * sell. Claims on the home page have to be claims we can deliver on.
 */
const capabilities = [
  "Web Design",
  "Web Development",
  "UI/UX Design",
  "Ecommerce Builds",
  "WordPress",
  "Shopify",
  "Technical SEO",
  "Local SEO",
  "Link Building",
  "Content Writing",
  "Landing Pages",
  "Speed Optimization",
];

export function CapabilityStrip({ tone = "midnight" }: { tone?: "midnight" | "ink" }) {
  return (
    <div
      className={`overflow-hidden border-y border-vanilla/10 py-5 ${
        tone === "ink" ? "bg-ink" : "bg-midnight"
      }`}
    >
      <Marquee
        items={capabilities}
        itemClassName="text-[0.82rem] font-semibold uppercase tracking-[0.2em] text-vanilla/45"
        speed="52s"
      />
      <span className="sr-only">
        Services: {capabilities.join(", ")}.
      </span>
    </div>
  );
}
