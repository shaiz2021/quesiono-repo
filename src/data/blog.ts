import { designPosts } from "./blog-design";
import { developmentPosts } from "./blog-development";
import { seoPosts } from "./blog-seo";
import { growthPosts } from "./blog-growth";
import { businessPosts } from "./blog-business";

export type BlogCategory =
  | "Web Design"
  | "Development"
  | "SEO"
  | "Ecommerce"
  | "Content"
  | "Business";

export interface BlogPost {
  slug: string;
  title: string;
  /** Card and meta-description line. One or two sentences, no more. */
  excerpt: string;
  /** ISO date. Format for display with formatPostDate — schema needs the raw value. */
  date: string;
  /** ISO date of the last substantive edit, when there's been one. */
  updated?: string;
  category: BlogCategory;
  featured: boolean;
  /** Clean semantic HTML. No utility classes — the .prose layer owns styling. */
  content: string;
  author: string;
  authorRole: string;
  readTime: string;
  tags: string[];

  relatedServiceSlugs?: string[];
  relatedPostSlugs?: string[];
  relatedProjectSlugs?: string[];

  keywords: { primary: string; secondary: string[] };
  meta: { title: string; description: string };

  image?: string;
  imageAlt?: string;
  videoSrc?: string;
  posterSrc?: string;
}

/**
 * Newest first. The five source files group by subject; ordering is by date and
 * lives here so the index, the RSS feed, and the related rails all agree.
 */
export const blogPosts: BlogPost[] = [
  ...designPosts,
  ...developmentPosts,
  ...seoPosts,
  ...growthPosts,
  ...businessPosts,
].sort((a, b) => (a.date < b.date ? 1 : -1));

export const blogCategories: BlogCategory[] = [
  "Web Design",
  "Development",
  "SEO",
  "Ecommerce",
  "Content",
  "Business",
];

export const getBlogPostBySlug = (slug: string) => blogPosts.find((p) => p.slug === slug);

export const getBlogPostsByCategory = (category: string) =>
  category === "All" ? blogPosts : blogPosts.filter((p) => p.category === category);

/** The single hero post on /blog and the home page rail. */
export const getFeaturedBlogPost = () => blogPosts.find((p) => p.featured) ?? blogPosts[0];

export const featuredBlogPosts = () => blogPosts.filter((p) => p.featured);

/** blogPosts is already sorted newest-first, so this is just the head of the list. */
export const getRecentPosts = (limit = 3) => blogPosts.slice(0, limit);

export const getPostsByService = (serviceSlug: string) =>
  blogPosts.filter((p) => p.relatedServiceSlugs?.includes(serviceSlug));

/**
 * Explicit related posts where the record names them, topped up with same-category
 * posts so every article gets a full rail even before the links are curated.
 */
export const getRelatedPosts = (slug: string, limit = 3) => {
  const post = getBlogPostBySlug(slug);
  if (!post) return [];

  const explicit = (post.relatedPostSlugs ?? [])
    .map(getBlogPostBySlug)
    .filter((p): p is BlogPost => Boolean(p) && p!.slug !== slug);

  const sameCategory = blogPosts.filter(
    (p) => p.slug !== slug && p.category === post.category && !explicit.some((e) => e.slug === p.slug),
  );

  return [...explicit, ...sameCategory].slice(0, limit);
};

export const blogParams = () => blogPosts.map((p) => ({ slug: p.slug }));

/** "12 Mar 2026". Stable across locales because the month list is ours. */
export const formatPostDate = (iso: string) => {
  const [year, month, day] = iso.split("-");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const monthLabel = months[Number(month) - 1] ?? month;
  return `${Number(day)} ${monthLabel} ${year}`;
};

/** Rough word count from the HTML body — feeds wordCount in Article schema. */
export const postWordCount = (post: BlogPost) =>
  post.content
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;

/** H2 ids, in document order, for the sticky table of contents. */
export const postHeadings = (post: BlogPost) => {
  const pattern = /<h2 id="([^"]+)">([\s\S]*?)<\/h2>/g;
  const found: { id: string; label: string }[] = [];
  let match = pattern.exec(post.content);
  while (match) {
    found.push({ id: match[1], label: match[2].replace(/<[^>]+>/g, "").trim() });
    match = pattern.exec(post.content);
  }
  return found;
};
