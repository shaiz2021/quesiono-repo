"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
                className={`min-h-11 rounded-full border px-5 py-2 text-sm font-semibold transition-[background-color,border-color,color,transform] duration-300 active:scale-95 ${category === c ? "border-ink bg-ink text-vanilla" : "border-sand bg-white text-text-dark hover:border-indigo hover:bg-cream"}`}
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
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {shown.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="premium-card group relative flex min-h-[16rem] flex-col overflow-hidden rounded-md border border-sand bg-cream p-6 hover:border-indigo hover:bg-white hover:shadow-lg focus-visible:border-indigo sm:p-8"
          >
            <span aria-hidden className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-champagne transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
            <p className="eyebrow text-indigo">
              {p.category} / {p.readTime}
            </p>
            <h2 className="mt-4 text-step-3 font-semibold">{p.title}</h2>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">
              {p.excerpt}
            </p>
            <span className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-indigo">
              Read the guide <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
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
