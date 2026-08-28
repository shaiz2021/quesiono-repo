export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Case study slug in src/data/projects.ts, where one exists. */
  projectSlug?: string;
  industrySlug?: string;
  /** Service slugs this client engaged us for. Drives the pull-quote on service pages. */
  serviceSlugs?: string[];
  location?: string;
  year?: string;
  /** Optional headshot. Renders initials in a champagne monogram until a file lands here. */
  avatar?: string;
  /** Shown on the home page and in the compact rails. */
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "The menu was the thing. It used to be a PDF that took forever to open and I had to email someone every time we changed a price. Now my manager edits it from her phone between services. Bookings are up about a third, and I get fewer calls asking what time we open.",
    name: "Ahmed Khan",
    role: "Owner",
    company: "Local Bistro",
    projectSlug: "local-restaurant-website",
    industrySlug: "restaurants-hospitality",
    serviceSlugs: ["web-design", "wordpress-development", "local-seo"],
    location: "Lahore",
    year: "2024",
    featured: true,
  },
  {
    quote:
      "We'd been told our store needed a redesign. Quesiono looked at it and said the design was fine, the problem was eleven apps and a five-step checkout. That was a cheaper answer than the one we expected and it worked — conversion is up 25% on the same traffic.",
    name: "Sara Ali",
    role: "Marketing Manager",
    company: "Urban Apparel",
    projectSlug: "ecommerce-store",
    industrySlug: "ecommerce-retail",
    serviceSlugs: ["shopify-development", "ecommerce-development", "speed-optimization"],
    location: "Karachi",
    year: "2024",
    featured: true,
  },
  {
    quote:
      "They spent the first week sitting with our analysts instead of with me, which I'll admit I questioned at the time. It's where they found a timezone bug that was causing half the manual work. The dashboard saves us about nine hours a week and our clients log in themselves now.",
    name: "Omar Sheikh",
    role: "Founder",
    company: "SaaS Analytics",
    projectSlug: "saas-dashboard",
    industrySlug: "saas-startups",
    serviceSlugs: ["custom-development", "ui-ux-design", "web-development"],
    year: "2024",
    featured: true,
  },
  {
    quote:
      "Three of us gave three different answers to what our studio was for. They wrote that down, showed it to us, and then made us pick. Uncomfortable meeting, right decision. Our enquiries are three times what they were and people arrive already knowing what we do.",
    name: "Noor Haddad",
    role: "Creative Director & Co-founder",
    company: "Dazzle Studio",
    projectSlug: "dazzle-website",
    industrySlug: "professional-services",
    serviceSlugs: ["web-design", "landing-page-development", "content-writing"],
    location: "Dubai",
    year: "2025",
    featured: true,
  },
  {
    quote:
      "Two agencies told us accessibility was a checkbox at the end. Quesiono treated it as the brief. Every colour was checked before it went into the palette. We passed our AA audit first time, which for a three-practice group with a patient base like ours matters more than how the homepage looks.",
    name: "Dr Priya Raghavan",
    role: "Clinical Director",
    company: "Northgate Dental Group",
    projectSlug: "northgate-dental",
    industrySlug: "healthcare",
    serviceSlugs: ["web-design", "ui-ux-design", "content-writing"],
    location: "Manchester",
    year: "2025",
    featured: true,
  },
  {
    quote:
      "Our agents had started sending buyers to a portal because our own listings took nine seconds to load. That's a humiliating sentence to say out loud. It's a second and a half now, and people actually browse — we went from two pages a visit to nearly seven.",
    name: "Elena Vidal",
    role: "Managing Partner",
    company: "Castellan Realty",
    projectSlug: "castellan-realty",
    industrySlug: "real-estate",
    serviceSlugs: ["custom-development", "speed-optimization", "local-seo"],
    location: "Valencia",
    year: "2025",
  },
  {
    quote:
      "I'd assumed our advertising rules meant we couldn't say anything specific. They read the rules properly, drafted something specific, and let our compliance partner cut it. She changed nine phrases in nine thousand words. Enquiries in our actual practice area went from a fifth to seven in ten.",
    name: "Gregory Mercer",
    role: "Managing Partner",
    company: "Hartwell & Mercer LLP",
    projectSlug: "hartwell-mercer-law",
    industrySlug: "professional-services",
    serviceSlugs: ["web-design", "content-writing", "seo", "cms-development"],
    location: "Chicago",
    year: "2025",
  },
  {
    quote:
      "Four of the ten weeks went on restructuring product data, which is not what anyone wants to hear on a kick-off call. They were right. Once specifications were real fields instead of paragraphs, filtering worked, search worked, and our search-to-purchase rate nearly tripled. They also quoted eight weeks and ate the overrun.",
    name: "Tom Beddoe",
    role: "Ecommerce Director",
    company: "Coastline Outfitters",
    projectSlug: "coastline-outfitters",
    industrySlug: "ecommerce-retail",
    serviceSlugs: ["ecommerce-development", "shopify-development", "ecommerce-seo", "keyword-research"],
    location: "Cornwall",
    year: "2025",
  },
  {
    quote:
      "We inherited a WordPress install from an agency that had gone quiet. Twenty-two plugins, four of them abandoned, PHP two versions behind. Quesiono took over the maintenance, got it patched and monitored, and now I get a monthly note telling me what changed. I stopped worrying about it, which is the whole point.",
    name: "Rachel Osei",
    role: "Operations Manager",
    company: "Fielder & Kemp",
    industrySlug: "professional-services",
    serviceSlugs: ["website-maintenance", "speed-optimization", "wordpress-development"],
    location: "Birmingham",
    year: "2025",
  },
  {
    quote:
      "The writing is the part I didn't expect to be good. We'd used two content agencies before and both sent back things that read like they'd been generated. These came back sounding like someone who'd actually spoken to our engineers, because someone had. Six posts, four of them ranking.",
    name: "Daniel Ferraro",
    role: "Head of Marketing",
    company: "Loomtree",
    industrySlug: "saas-startups",
    serviceSlugs: ["content-writing", "blog-posts", "keyword-research", "on-page-seo"],
    year: "2025",
  },
];

export const featuredTestimonials = () => testimonials.filter((t) => t.featured);

export const getTestimonialsByService = (serviceSlug: string) =>
  testimonials.filter((t) => t.serviceSlugs?.includes(serviceSlug));

export const getTestimonialsByIndustry = (industrySlug: string) =>
  testimonials.filter((t) => t.industrySlug === industrySlug);

export const getTestimonialByProject = (projectSlug: string) =>
  testimonials.find((t) => t.projectSlug === projectSlug);
