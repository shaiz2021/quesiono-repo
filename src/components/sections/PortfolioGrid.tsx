"use client";
import { useState } from "react";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
type Card = Parameters<typeof PortfolioCard>[0];
export function PortfolioGrid({ items }: { items: Card[] }) {
  const [active, setActive] = useState("All");
  const categories = [
    "All",
    ...Array.from(new Set(items.map((p) => p.category))),
  ];
  const shown = items.filter((p) => active === "All" || p.category === active);
  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter portfolio by industry"
      >
        {categories.map((c) => (
          <button
            type="button"
            key={c}
            aria-pressed={c === active}
            onClick={() => setActive(c)}
            className={`min-h-11 rounded-full border px-5 py-2 text-sm font-semibold transition-[background-color,border-color,color,transform] duration-300 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo ${active === c ? "border-ink bg-ink text-vanilla" : "border-sand bg-white text-text-dark hover:border-indigo hover:bg-cream"}`}
          >
            {c}
          </button>
        ))}
      </div>
      <p role="status" className="mt-5 text-sm text-text-muted">
        {shown.length} {shown.length === 1 ? "project" : "projects"}
      </p>
      <div key={active} className="portfolio-filter-in mt-8 grid gap-x-10 gap-y-14 md:grid-cols-2">
        {shown.map((p) => (
          <PortfolioCard key={p.slug} {...p} />
        ))}
      </div>
    </div>
  );
}
