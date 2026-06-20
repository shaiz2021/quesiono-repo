export interface Project {
  slug: string;
  name: string;
  client: string;
  category: string;
  services: string[];
  summary: string;
  challenge: string;
  solution: string;
  results: string;
  image: string;
  url?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "local-restaurant-website",
    name: "Local Bistro",
    client: "Local Restaurant",
    category: "Web Development",
    services: ["web-development", "seo"],
    summary: "A modern restaurant website with online reservation system.",
    challenge: "The client needed a fast, mobile-friendly website that could handle online bookings.",
    solution: "Built a Next.js site with a custom reservation form and SEO-optimized content.",
    results: "30% increase in online bookings in the first month.",
    image: "/images/projects/project-1.png",
    featured: true,
  },
  {
    slug: "saas-dashboard",
    name: "SaaS Analytics",
    client: "Startup",
    category: "Custom Development",
    services: ["custom-development"],
    summary: "A custom analytics dashboard for a SaaS startup.",
    challenge: "The client needed real-time data visualization and user authentication.",
    solution: "Built a React dashboard with Firebase auth and Chart.js.",
    results: "Used by 500+ active users daily.",
    image: "/images/projects/project-2.png",
    featured: true,
  },
  {
    slug: "ecommerce-store",
    name: "Urban Apparel",
    client: "E-commerce Brand",
    category: "Web Development",
    services: ["web-development", "cms-development"],
    summary: "A Shopify store with custom theme and SEO.",
    challenge: "The client wanted a unique storefront that stood out from competitors.",
    solution: "Custom Shopify theme with optimized product pages.",
    results: "25% increase in conversion rate.",
    image: "/images/projects/project-3.png",
    featured: true,
  },
  {
    slug: "dazzle-website",
    name: "Dazzle",
    client: "Creative Agency",
    category: "Web Development",
    services: ["web-development", "landing-page-development"],
    summary: "A Shopify store with custom theme and SEO.",
    challenge: "The client wanted a unique storefront that stood out from competitors.",
    solution: "Custom Shopify theme with optimized product pages.",
    results: "25% increase in conversion rate.",
    image: "/images/projects/project-4.png",
    featured: true,
  },
];

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
export const getFeaturedProjects = () => projects.filter((p) => p.featured);
