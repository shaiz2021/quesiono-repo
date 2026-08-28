"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { PostCard } from "@/components/ui/PostCard";
import { blogCategories, blogPosts } from "@/data/blog";

/**
 * Filterable journal grid. The old version filtered against a hand-typed list
 * of category names ("Web Dev", "Automation") that no post actually used, so
 * four of the six tabs returned nothing — the list now comes from the data.
 */
export function BlogGrid({ exclude = [] }: { exclude?: string[] }) {
  const [active, setActive] = useState("All");
  const reduceMotion = useReducedMotion();

  const pool = blogPosts.filter((post) => !exclude.includes(post.slug));

  const filters = [
    { label: "All", count: pool.length },
    ...blogCategories
      .map((category) => ({
        label: category,
        count: pool.filter((post) => post.category === category).length,
      }))
      .filter((filter) => filter.count > 0),
  ];

  const shown = active === "All" ? pool : pool.filter((post) => post.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-3" role="group" aria-label="Filter articles by category">
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

      <motion.div
        layout={!reduceMotion}
        className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {shown.map((post) => (
            <motion.div
              key={post.slug}
              layout={!reduceMotion}
              initial={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
              animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <PostCard post={post} showImage showDate />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
