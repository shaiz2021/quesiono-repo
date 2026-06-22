"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts, getFeaturedBlogPost } from "@/data/blog";

export function BlogGrid() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Web Dev", "SEO", "Automation", "Branding", "Content"];
  const filteredPosts = filter === "All" ? blogPosts : blogPosts.filter((p) => p.category === filter);
  const featuredPost = getFeaturedBlogPost();

  return (
    <>
      {featuredPost && (
        <section className="py-24 bg-cream">
          <div className="container mx-auto px-6">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="block bg-white rounded-2xl shadow-lg border border-sand/30 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-midnight aspect-video flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo/30 to-midnight"></div>
                  <span className="text-vanilla/20 text-8xl md:text-9xl font-libre italic relative z-10 group-hover:scale-110 transition-transform duration-500">Q</span>
                </div>
                <div className="p-10 md:p-14 flex flex-col justify-center">
                  <Badge label="Featured" />
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-libre italic text-text-dark mt-6 mb-5 leading-tight group-hover:text-indigo transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-text-muted mb-7 text-lg leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-6 text-text-muted text-sm mb-8">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-indigo font-bold text-lg">
                    Read More <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === category
                    ? "bg-midnight text-vanilla shadow-lg"
                    : "bg-cream text-text-dark border border-sand hover:border-midnight hover:shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts
              .filter((p) => !p.featured)
              .map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block bg-cream rounded-2xl shadow-sm border border-sand/20 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="bg-midnight aspect-video flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo/20 to-midnight"></div>
                    <span className="text-vanilla/20 text-5xl md:text-6xl font-libre italic relative z-10 group-hover:scale-110 transition-transform duration-500">Q</span>
                  </div>
                  <div className="p-8">
                    <Badge label={post.category} variant="light" />
                    <h3 className="text-xl md:text-2xl font-bold text-text-dark mt-5 mb-4 leading-snug group-hover:text-indigo transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-text-muted mb-6 leading-relaxed">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-text-muted text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-indigo group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
