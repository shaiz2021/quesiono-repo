"use client";

import { useState } from "react";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { projects } from "@/data/projects";

export function PortfolioGrid() {
  const [filter, setFilter] = useState("All");
  const categorySet = new Set<string>();
  projects.forEach((p) => categorySet.add(p.category));
  const categories = ["All", ...Array.from(categorySet)];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? "bg-midnight text-vanilla shadow-lg"
                  : "bg-white text-text-dark border border-sand hover:border-midnight hover:shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <PortfolioCard
              key={project.slug}
              image={project.image}
              title={project.name}
              category={project.category}
              slug={project.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
