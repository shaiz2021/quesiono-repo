"use client";
import { useState } from "react";
import Link from "next/link";
type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
};
export function BlogGrid({ posts }: { posts: Post[] }) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const shown = posts.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      `${p.title} ${p.excerpt}`.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <div>
      <div className="grid gap-5 md:grid-cols-[1fr_20rem]">
        <div
          role="group"
          aria-label="Filter articles by category"
          className="flex flex-wrap gap-2"
        >
          {["All", ...Array.from(new Set(posts.map((p) => p.category)))].map(
            (c) => (
              <button
                type="button"
                key={c}
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={`min-h-11 rounded border px-4 py-2 text-sm ${category === c ? "border-ink bg-ink text-vanilla" : "border-sand text-text-dark"}`}
              >
                {c}
              </button>
            ),
          )}
        </div>
        <div>
          <label htmlFor="journal-search" className="sr-only">
            Search articles
          </label>
          <input
            id="journal-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the journal"
            className="field !mt-0"
          />
        </div>
      </div>
      <p role="status" className="mt-6 text-sm text-text-muted">
        {shown.length} {shown.length === 1 ? "article" : "articles"}
      </p>
      <div className="mt-5 grid gap-x-12 md:grid-cols-2">
        {shown.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="border-t border-sand py-8"
          >
            <p className="eyebrow text-text-muted">
              {p.category} / {p.readTime}
            </p>
            <h2 className="mt-4 text-step-3 font-semibold">{p.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              {p.excerpt}
            </p>
            <span className="mt-5 inline-block text-sm font-semibold text-indigo">
              Read the guide ↗
            </span>
          </Link>
        ))}
      </div>
      {!shown.length && (
        <p className="py-8 text-text-muted">
          No articles match. Try a broader search or choose another category.
        </p>
      )}
    </div>
  );
}
