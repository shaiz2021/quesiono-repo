export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  icon: string;
  href: string;
  parentService?: string;
  group: "web" | "seo" | "content";
}

export const services: Service[] = [
  {
    slug: "web-development",
    name: "Web Development",
    shortDescription: "Fast, responsive, SEO-ready websites built to your exact specs.",
    icon: "code2",
    href: "/services/web-development",
    group: "web",
  },
  {
    slug: "cms-development",
    name: "CMS Development",
    shortDescription: "Manage your content without touching code on WordPress, Shopify, or Shopify.",
    icon: "layout-dashboard",
    href: "/services/cms-development",
    group: "web",
  },
  {
    slug: "custom-development",
    name: "Custom Development",
    shortDescription: "Bespoke web applications, dashboards, and internal systems.",
    icon: "terminal",
    href: "/services/custom-development",
    group: "web",
  },
  {
    slug: "landing-page-development",
    name: "Landing Page Development",
    shortDescription: "High-converting landing pages built for paid traffic and lead gen.",
    icon: "file-text",
    href: "/services/landing-page-development",
    group: "web",
  },
  {
    slug: "seo",
    name: "SEO",
    shortDescription: "Full SEO strategy and execution to get you found on Google.",
    icon: "search",
    href: "/services/seo",
    group: "seo",
  },
  {
    slug: "on-page-seo",
    name: "On-Page SEO",
    shortDescription: "Technical optimization for your site structure and content.",
    icon: "file-edit",
    href: "/services/seo/on-page-seo",
    parentService: "seo",
    group: "seo",
  },
  {
    slug: "off-page-seo",
    name: "Off-Page SEO",
    shortDescription: "Build domain authority with strategic links and digital PR.",
    icon: "link2",
    href: "/services/seo/off-page-seo",
    parentService: "seo",
    group: "seo",
  },
  {
    slug: "content-writing",
    name: "Content Writing",
    shortDescription: "SEO-optimized content that ranks and converts.",
    icon: "pen-tool",
    href: "/services/content-writing",
    group: "content",
  },
  {
    slug: "blog-posts",
    name: "Blog Post Writing",
    shortDescription: "Well-researched blog posts that drive organic traffic.",
    icon: "book-open",
    href: "/services/content-writing/blog-posts",
    parentService: "content-writing",
    group: "content",
  },
  {
    slug: "article-writing",
    name: "Article Writing",
    shortDescription: "Long-form thought leadership and editorial content.",
    icon: "file-text",
    href: "/services/content-writing/article-writing",
    parentService: "content-writing",
    group: "content",
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const getServicesByGroup = (group: "web" | "seo" | "content") =>
  services.filter((s) => s.group === group && !s.parentService);
