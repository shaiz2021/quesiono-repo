"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { projectCategories, projects } from "@/data/projects";

/**
 * Filterable case study grid.
 *
 * The filter is client state rather than a URL param on purpose — with eight
 * projects it isn't worth a route change, and the layout animation reads much
 * better without a navigation in the middle of it.
 */
export function PortfolioGrid() {
  const [active, setActive] = useState("All");
  const reduceMotion = useReducedMotion();

  const filters = useMemo(() => {
    const categories = projectCategories();
    return [
      { label: "All", count: projects.length },
      ...categories.map((category) => ({
        label: category,
        count: projects.filter((project) => project.category === category).length,
      })),
    ];
  }, []);

  const shown =
    active === "All" ? projects : projects.filter((project) => project.category === active);

  return (
    <div>
      <div
        className="flex flex-wrap gap-3"
        role="group"
        aria-label="Filter case studies by category"
      >
        {filters.map((filter) => {
          const selected = filter.label === active;

          return (
            <button
              key={filter.label}
              type="button"
              onClick={() => setActive(filter.label)}
              aria-pressed={selected}
              className={[
                "inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-[0.9rem] font-semibold transition-all duration-300",
                selected
                  ? "border-midnight bg-midnight text-vanilla shadow-lg"
                  : "border-sand bg-white text-text-dark hover:-translate-y-0.5 hover:border-midnight/40",
              ].join(" ")}
            >
              {filter.label}
              <span className={selected ? "text-vanilla/50" : "text-text-muted"}>
                {filter.count}
              </span>
            </button>
          );
        })}
      </div>

      <motion.div layout={!reduceMotion} className="mt-14 grid gap-8 lg:grid-cols-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((project) => (
            <motion.div
              key={project.slug}
              layout={!reduceMotion}
              initial={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <PortfolioCard
                title={project.name}
                category={project.category}
                slug={project.slug}
                image={project.image}
                imageAlt={project.imageAlt}
                metric={project.metric}
                metricLabel={project.metricLabel}
                summary={project.summary}
                tags={project.tags}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {shown.length === 0 ? (
        <p className="mt-14 text-text-muted">
          Nothing in that category yet. Try &ldquo;All&rdquo;.
        </p>
      ) : null}
    </div>
  );
}
