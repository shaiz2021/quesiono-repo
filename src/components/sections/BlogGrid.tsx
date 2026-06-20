"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

const posts = [
  {
    slug: "first-post",
    title: "How to Build a Website That Converts",
    excerpt: "Learn the key principles of building a website that actually drives results for your business.",
    date: "Jan 15, 2025",
    category: "Web Dev",
    featured: true,
  },
  {
    slug: "seo-basics",
    title: "SEO Basics: Getting Started in 2025",
    excerpt: "Everything you need to know to start optimizing your website for search engines.",
    date: "Jan 10, 2025",
    category: "SEO",
    featured: false,
  },
  {
    slug: "content-strategy",
    title: "Content Strategy That Actually Works",
    excerpt: "How to create a content strategy that drives traffic and conversions.",
    date: "Jan 5, 2025",
    category: "Content",
    featured: false,
  },
];

export function BlogGrid() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Web Dev", "SEO", "Automation", "Branding", "Content"];
  const filteredPosts = filter === "All" ? posts : posts.filter((p) => p.category === filter);
  const featuredPost = posts.find((p) => p.featured);

  return (
    <>
      {featuredPost && (
        <section className="py-20 bg-cream">
          <div className="container mx-auto px-6">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="block bg-white rounded shadow-sm border border-sand/20 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-midnight aspect-video flex items-center justify-center">
                  <span className="text-vanilla/20 text-6xl font-libre italic">Q</span>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge label="Featured" />
                  <h2 className="text-3xl font-bold text-text-dark mt-4 mb-3">
                    {featuredPost.title}
                  </h2>
                  <p className="text-text-muted mb-4">{featuredPost.excerpt}</p>
                  <p className="text-text-muted text-sm">{featuredPost.date}</p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}
      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded font-semibold transition-colors ${
                  filter === category
                    ? "bg-midnight text-vanilla"
                    : "bg-white text-text-dark border border-sand hover:border-midnight"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredPosts
              .filter((p) => !p.featured)
              .map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block bg-white rounded shadow-sm border border-sand/20 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="bg-midnight aspect-video flex items-center justify-center">
                    <span className="text-vanilla/20 text-4xl font-libre italic">Q</span>
                  </div>
                  <div className="p-6">
                    <Badge label={post.category} variant="light" />
                    <h3 className="text-xl font-bold text-text-dark mt-3 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-text-muted mb-4">{post.excerpt}</p>
                    <p className="text-text-muted text-sm">{post.date}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
