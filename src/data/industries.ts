import type { ServiceStat } from "./services";

export interface IndustryChallenge {
  title: string;
  description: string;
  icon?: string;
}

export interface IndustryFaq {
  question: string;
  answer: string;
}

export interface Industry {
  slug: string;
  name: string;
  /** Shorter label for nav columns where the full name wraps. */
  navLabel?: string;
  icon: string;
  href: string;
  shortDescription: string;

  hero: {
    eyebrow: string;
    headline: string;
    accent?: string[];
    sub: string;
  };

  overview: {
    heading: string;
    paragraphs: string[];
  };

  /** What's specifically hard about building for this sector. */
  challengesHeading?: string;
  challenges: IndustryChallenge[];

  /** How we handle each of those, in the same order where it maps cleanly. */
  approachHeading?: string;
  approach: { title: string; description: string }[];

  stats?: ServiceStat[];
  faqs: IndustryFaq[];

  serviceSlugs: string[];
  caseStudySlugs: string[];
  blogSlugs?: string[];

  keywords: { primary: string; secondary: string[]; semantic: string[] };
  meta: { title: string; description: string };
  media?: {
    image?: string;
    imageAlt?: string;
    videoSrc?: string;
    posterSrc?: string;
  };
}

export const industries: Industry[] = [
  {
    slug: "saas-startups",
    name: "SaaS & Startups",
    icon: "rocket",
    href: "/industries/saas-startups",
    shortDescription:
      "Help prospective users see what the product does, who it is for, and what happens after they sign up.",
    hero: {
      eyebrow: "SaaS & Startups",
      headline: "Make your product easier to understand.",
      sub: "Help prospective users see what the product does, who it is for, and what happens after they sign up.",
    },
    overview: {
      heading: "What your visitors need to decide",
      paragraphs: [
        "For a SaaS website, the key decision is often whether a trial or demo is worth the effort. Product screenshots, clear use cases, pricing explanations and integration information should answer that question before a visitor reaches the form.",
      ],
    },
    challengesHeading: "What's hard about SaaS sites",
    challenges: [
      {
        icon: "message",
        title: "Explaining an abstract product",
        description:
          "Nobody can picture your software from a description of its benefits. Without screenshots, a real walkthrough, and concrete before-and-after, the page stays theoretical.",
      },
      {
        icon: "credit-card",
        title: "Pricing pages that lose people",
        description:
          "Three tiers, twenty feature rows, and no guidance on which one fits. Prospects who can't self-select either email sales or leave, and most leave.",
      },
      {
        icon: "activity",
        title: "Traffic that arrives all at once",
        description:
          "A launch, a funding announcement, or a post that lands. A site that's fine at 200 visitors an hour and dies at 20,000 wastes the one moment you were building toward.",
      },
      {
        icon: "book-open",
        title: "Docs treated as an afterthought",
        description:
          "Documentation is often your highest-traffic organic asset and it's usually on a subdomain nobody optimised, invisible to search and disconnected from the marketing site.",
      },
      {
        icon: "bar-chart",
        title: "No line from page to signup",
        description:
          "Without properly instrumented events, you can't tell which page produced the trial, so every optimisation decision becomes an opinion.",
      },
    ],
    approachHeading: "How we handle it",
    approach: [
      {
        title: "Product-first messaging",
        description:
          "We use the software before we write about it, then lead with what it does. Screenshots and short product clips carry the explanation instead of adjectives.",
      },
      {
        title: "Pricing built for self-selection",
        description:
          'A recommendation per tier, a plain "best for" line, and the two or three differences that actually decide it. Comparison tables collapse sensibly on mobile.',
      },
      {
        title: "Static delivery from the CDN",
        description:
          "Marketing pages are statically generated and served from the edge, so a launch spike costs you nothing and nothing falls over.",
      },
      {
        title: "Docs as a first-class surface",
        description:
          "Indexable, searchable, on the same domain where possible, with schema and internal links back to the relevant product pages.",
      },
      {
        title: "Instrumented from launch",
        description:
          "Trial signups, demo requests, and pricing interactions tracked as events and verified against your product analytics, so attribution is real.",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Can the marketing site connect to our product?",
        answer:
          "Yes. We can scope authentication links, trial or demo flows, product analytics events and a shared design system. The marketing site and application can remain separate where that makes maintenance easier.",
      },
      {
        question: "What should we prepare for the first conversation?",
        answer:
          "Bring your current website, the main customer journeys you need to improve and any systems or approval requirements the project must work with.",
      },
    ],
    serviceSlugs: [
      "web-design",
      "web-development",
      "ui-ux-design",
      "custom-development",
      "content-writing",
      "seo",
    ],
    caseStudySlugs: [],
    blogSlugs: [
      "nextjs-14-best-practices",
      "how-to-build-website-that-converts",
      "core-web-vitals-guide",
    ],
    keywords: {
      primary: "SaaS website design and development",
      secondary: [
        "SaaS web design agency",
        "startup website development",
        "B2B SaaS marketing site",
        "product-led website design",
      ],
      semantic: [
        "trial conversion",
        "pricing page design",
        "product tour",
        "documentation SEO",
        "onboarding flow",
        "edge delivery",
        "launch traffic",
        "activation rate",
        "self-serve signup",
        "feature comparison table",
        "GA4 events",
        "product analytics",
      ],
    },
    meta: {
      title: "SaaS & Startup Web Design and Development | Quesiono",
      description:
        "Help prospective users see what the product does, who it is for, and what happens after they sign up.",
    },
    media: {
      imageAlt:
        "SaaS marketing site with a product screenshot and pricing tiers",
    },
  },
  {
    slug: "ecommerce-retail",
    name: "Ecommerce & Retail",
    icon: "shopping-cart",
    href: "/industries/ecommerce-retail",
    shortDescription:
      "Connect product discovery, useful detail pages, reliable checkout, and the operations behind each order.",
    hero: {
      eyebrow: "Ecommerce & Retail",
      headline:
        "Help shoppers find the right product. Then make buying simple.",
      sub: "Connect product discovery, useful detail pages, reliable checkout, and the operations behind each order.",
    },
    overview: {
      heading: "What your visitors need to decide",
      paragraphs: [
        "A large catalogue needs more than a grid of products. Clear categories, meaningful filters, shipping information and accurate stock data help customers decide what to buy and reduce avoidable questions for your team.",
      ],
    },
    challengesHeading: "Where retail sites lose money",
    challenges: [
      {
        icon: "search",
        title: "Discovery that doesn't fit the catalogue",
        description:
          "Forty considered-purchase SKUs need comparison depth. Four thousand need search and faceting. Getting this backwards buries your products or overwhelms the page.",
      },
      {
        icon: "credit-card",
        title: "Checkout friction",
        description:
          "Forced account creation, shipping cost revealed at step three, no wallet payments. Each one has a measurable drop-off and each one is fixable.",
      },
      {
        icon: "boxes",
        title: "Stock that lies",
        description:
          "If the site and the warehouse disagree, you're either overselling or hiding inventory. Both cost more than the integration would have.",
      },
      {
        icon: "zap",
        title: "App and script bloat",
        description:
          "Reviews, chat, upsells and analytics can add competing interfaces and extra loading work. Audit which tools the store needs and how they affect the customer journey.",
      },
      {
        icon: "file-search",
        title: "Category pages with nothing on them",
        description:
          "Collection pages catch the highest-intent searches and usually contain a grid and one sentence, so guides and marketplaces outrank them.",
      },
    ],
    approachHeading: "How we handle it",
    approach: [
      {
        title: "Architecture from the catalogue",
        description:
          "We look at SKU count, attributes, and price bands first, then decide the template set and filter strategy. Platform recommendation follows from that, not from preference.",
      },
      {
        title: "Checkout measured step by step",
        description:
          "Funnel instrumented per step so we can see exactly where people leave, then fix that step rather than redesigning the whole flow on a hunch.",
      },
      {
        title: "Real integrations, tested",
        description:
          "ERP, 3PL, or POS sync with reconciliation reporting, plus test orders covering the agreed tax and shipping scenarios before launch.",
      },
      {
        title: "App audit as standard",
        description:
          "Review the purpose and loading cost of installed apps, then recommend removal, replacement or theme implementation where appropriate.",
      },
      {
        title: "Category pages built to rank",
        description:
          "Buying guidance, subcategory links, and FAQ content on collection pages, with faceted-navigation rules so filters don't spawn duplicate URLs.",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Can you work with our inventory and fulfilment tools?",
        answer:
          "We review supported integrations, stock rules and data quality before proposing the store architecture. Testing should include out-of-stock items, order updates and the points where systems exchange data.",
      },
      {
        question: "What should we prepare for the first conversation?",
        answer:
          "Bring your current website, the main customer journeys you need to improve and any systems or approval requirements the project must work with.",
      },
    ],
    serviceSlugs: [
      "ecommerce-development",
      "shopify-development",
      "ecommerce-seo",
      "speed-optimization",
      "ui-ux-design",
      "web-design",
    ],
    caseStudySlugs: [],
    blogSlugs: [
      "shopify-store-conversion-optimization",
      "core-web-vitals-guide",
      "how-to-build-website-that-converts",
    ],
    keywords: {
      primary: "ecommerce web design and development",
      secondary: [
        "ecommerce website agency",
        "Shopify design agency",
        "online store redesign",
        "retail website development",
      ],
      semantic: [
        "conversion rate",
        "average order value",
        "faceted search",
        "checkout funnel",
        "inventory sync",
        "3PL integration",
        "app bloat",
        "collection page SEO",
        "Product schema",
        "cart abandonment",
        "multi-currency",
        "product data attributes",
      ],
    },
    meta: {
      title: "Ecommerce & Retail Web Design and Development | Quesiono",
      description:
        "Connect product discovery, useful detail pages, reliable checkout, and the operations behind each order.",
    },
    media: {
      imageAlt:
        "Retail collection page with filters beside a mobile checkout flow",
    },
  },
  {
    slug: "restaurants-hospitality",
    name: "Restaurants & Hospitality",
    navLabel: "Restaurants",
    icon: "utensils",
    href: "/industries/restaurants-hospitality",
    shortDescription:
      "Give guests the information they need on a phone: what is on, when you are open, and how to reserve or order.",
    hero: {
      eyebrow: "Restaurants & Hospitality",
      headline: "Make the menu, the booking, and the visit easier.",
      sub: "Give guests the information they need on a phone: what is on, when you are open, and how to reserve or order.",
    },
    overview: {
      heading: "What your visitors need to decide",
      paragraphs: [
        "Guests may be comparing options while they are already on the move. Readable menus, accurate opening hours, location details and a straightforward reservation path should be easy to reach without downloads or unnecessary steps.",
      ],
    },
    challengesHeading: "What goes wrong on restaurant sites",
    challenges: [
      {
        icon: "file-text",
        title: "The menu as a PDF",
        description:
          "Slow to open, unreadable on a phone, invisible to search engines, and impossible to update without a designer. The most common and most costly mistake in the sector.",
      },
      {
        icon: "calendar",
        title: "Booking flow that leaks",
        description:
          "A reservation widget that redirects to a slow third-party page loses people mid-decision. So does one that can't show availability without a full page load.",
      },
      {
        icon: "map-pin",
        title: "Losing the map pack",
        description:
          "Most restaurant discovery happens in Maps and the local pack, not on page one of a blue-link search. An unmanaged profile means invisible at the exact moment of intent.",
      },
      {
        icon: "monitor",
        title: "Built for desktop",
        description:
          "Guests often look for a menu, directions or a booking on a phone. Those tasks should be reviewed on small screens from the start.",
      },
      {
        icon: "calendar",
        title: "Stale hours and closures",
        description:
          "Wrong holiday hours produce a bad review from someone who drove over. It's a five-minute fix that nobody owns.",
      },
    ],
    approachHeading: "How we handle it",
    approach: [
      {
        title: "Menus in HTML, editable by you",
        description:
          "Structured dishes with prices, dietary tags, and sections. Your team edits from a phone, and Menu schema makes items eligible to appear in search results.",
      },
      {
        title: "Booking that stays on the page",
        description:
          "OpenTable, Resy, SevenRooms, or Tock embedded properly, or a custom form with capacity rules if you'd rather not pay per cover.",
      },
      {
        title: "Local SEO from day one",
        description:
          "Profile optimisation, review workflow, photo cadence, and LocalBusiness plus Restaurant schema. This is where the bookings come from.",
      },
      {
        title: "Mobile designed first",
        description:
          "Menu, hours, call, and directions reachable in one tap from any page. Designed at 375px before anything is drawn at desktop width.",
      },
      {
        title: "Hours and events in one place",
        description:
          "Special hours, closures, and events managed in the CMS and pushed to your Google profile so they can't disagree.",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Can our team update the menu?",
        answer:
          "Yes. Editable menu sections, prices and dietary information can be part of the CMS scope. Your team confirms food and allergen information and remains responsible for keeping it accurate.",
      },
      {
        question: "What should we prepare for the first conversation?",
        answer:
          "Bring your current website, the main customer journeys you need to improve and any systems or approval requirements the project must work with.",
      },
    ],
    serviceSlugs: [
      "web-design",
      "local-seo",
      "wordpress-development",
      "landing-page-development",
      "website-maintenance",
    ],
    caseStudySlugs: [],
    blogSlugs: [
      "local-seo-strategy-small-business",
      "how-to-build-website-that-converts",
      "core-web-vitals-guide",
    ],
    keywords: {
      primary: "restaurant website design",
      secondary: [
        "hospitality web design agency",
        "restaurant website development",
        "online reservation system integration",
        "restaurant local SEO",
      ],
      semantic: [
        "HTML menu",
        "Menu schema",
        "Restaurant schema",
        "Google Business Profile",
        "map pack",
        "mobile-first design",
        "OpenTable integration",
        "click-to-call",
        "special hours",
        "review management",
        "online ordering",
        "cover volume",
      ],
    },
    meta: {
      title: "Restaurant & Hospitality Website Design | Quesiono",
      description:
        "Give guests the information they need on a phone: what is on, when you are open, and how to reserve or order.",
    },
    media: {
      imageAlt:
        "Restaurant website on a phone showing the menu and a reservation form",
    },
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "building",
    href: "/industries/real-estate",
    shortDescription:
      "Help buyers and tenants explore listings, compare details, and contact the right person with a specific property in mind.",
    hero: {
      eyebrow: "Real Estate",
      headline: "Turn property browsing into a useful conversation.",
      sub: "Help buyers and tenants explore listings, compare details, and contact the right person with a specific property in mind.",
    },
    overview: {
      heading: "What your visitors need to decide",
      paragraphs: [
        "Property websites need useful search, accurate information and strong imagery. We plan the listing structure, enquiry context and feed dependencies together so the site can support both discovery and the work of your agents.",
      ],
    },
    challengesHeading: "What's hard about property sites",
    challenges: [
      {
        icon: "monitor",
        title: "Image weight",
        description:
          "Property photography is the point and also the payload. Unoptimised galleries make listing pages the slowest on the site, exactly where you need people to linger.",
      },
      {
        icon: "plug",
        title: "Feed integration",
        description:
          "IDX and MLS feeds vary wildly in quality and update cadence. Mapping fields, handling missing data, and dealing with duplicates is most of the work.",
      },
      {
        icon: "search",
        title: "Search that has to feel instant",
        description:
          "Price, beds, type, and area filters returning results without a full page load. Anything slower and people go back to the portal.",
      },
      {
        icon: "signpost",
        title: "Sold listings thrown away",
        description:
          "Delisted properties often become 404s, discarding accumulated authority and links. Sold archives are also genuine local-search assets.",
      },
      {
        icon: "map-pin",
        title: "Thin area pages",
        description:
          "Thirty templated neighbourhood pages with the name swapped get discounted. Ten substantive ones with real local knowledge outrank them comfortably.",
      },
    ],
    approachHeading: "How we handle it",
    approach: [
      {
        title: "Image pipeline built for galleries",
        description:
          "Responsive image delivery, appropriate loading priorities and reserved media dimensions to improve loading and reduce avoidable layout shifts.",
      },
      {
        title: "Resilient feed sync",
        description:
          "Scheduled ingestion with field mapping, validation, and a reconciliation report. Missing or malformed records surface as alerts, not as broken listings.",
      },
      {
        title: "Instant filtered search",
        description:
          "Client-side filtering over an indexed dataset, with map and list views sharing state and URLs that are shareable and bookmarkable.",
      },
      {
        title: "A written URL policy for sold stock",
        description:
          "Sold listings kept with clear status and links to similar available properties, or redirected to the area page. Nothing valuable becomes a 404.",
      },
      {
        title: "Area pages with real substance",
        description:
          "Your recent sales, price trends, schools, and transport, plus LocalBusiness and RealEstateListing schema. Written, not generated.",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Can you connect a property feed?",
        answer:
          "We assess the feed provider, access permissions, update frequency and field quality first. The proposal identifies supported search features, synchronisation behaviour and any third-party costs.",
      },
      {
        question: "What should we prepare for the first conversation?",
        answer:
          "Bring your current website, the main customer journeys you need to improve and any systems or approval requirements the project must work with.",
      },
    ],
    serviceSlugs: [
      "web-design",
      "custom-development",
      "local-seo",
      "landing-page-development",
      "speed-optimization",
    ],
    caseStudySlugs: [],
    blogSlugs: [
      "local-seo-strategy-small-business",
      "core-web-vitals-guide",
      "how-to-build-website-that-converts",
    ],
    keywords: {
      primary: "real estate website development",
      secondary: [
        "real estate web design agency",
        "IDX website development",
        "MLS integration services",
        "property listing website",
      ],
      semantic: [
        "IDX feed",
        "RESO Web API",
        "property search filters",
        "map view",
        "image optimisation",
        "AVIF and WebP",
        "RealEstateListing schema",
        "neighbourhood pages",
        "lead routing",
        "agent profiles",
        "sold archive",
        "local search",
      ],
    },
    meta: {
      title: "Real Estate Website Design & IDX Development | Quesiono",
      description:
        "Help buyers and tenants explore listings, compare details, and contact the right person with a specific property in mind.",
    },
    media: {
      imageAlt:
        "Property search page with map and list views beside a listing gallery",
    },
  },
  {
    slug: "healthcare",
    name: "Healthcare & Clinics",
    navLabel: "Healthcare",
    icon: "heart-pulse",
    href: "/industries/healthcare",
    shortDescription:
      "Make services, practitioners, locations, and appointment options clear, with accessible content and carefully scoped enquiry forms.",
    hero: {
      eyebrow: "Healthcare & Clinics",
      headline: "Help patients feel informed before they book.",
      sub: "Make services, practitioners, locations, and appointment options clear, with accessible content and carefully scoped enquiry forms.",
    },
    overview: {
      heading: "What your visitors need to decide",
      paragraphs: [
        "A clinic website should help someone find the right service without asking them to navigate medical jargon. We prioritize readable information, accessible journeys and a clear separation between general enquiries and sensitive patient systems.",
      ],
    },
    challengesHeading: "What healthcare sites get wrong",
    challenges: [
      {
        icon: "message",
        title: "Clinical language",
        description:
          "Patients search for symptoms in everyday words. A site written in medical terminology is both harder to read and invisible to the searches patients actually type.",
      },
      {
        icon: "shield",
        title: "Forms handling health data casually",
        description:
          "A symptom description in a contact form is health information. Emailed to an inbox with no documented retention or access control, that's a real compliance problem.",
      },
      {
        icon: "scale",
        title: "Accessibility as an afterthought",
        description:
          "Low contrast, unlabelled fields, and keyboard traps exclude a meaningful share of the very patients the clinic exists to serve.",
      },
      {
        icon: "calendar",
        title: "Booking that isn't really booking",
        description:
          "A form that says someone will call back within two business days is not a booking. Patients with an urgent concern go to whoever can see them sooner.",
      },
      {
        icon: "users",
        title: "No visible clinicians",
        description:
          "Patients choose a person, not a practice. Stock photography and no clinician profiles undermines exactly the trust the site needs to build.",
      },
    ],
    approachHeading: "How we handle it",
    approach: [
      {
        title: "Plain language, patient-first",
        description:
          "Conditions described the way patients describe them, with the clinical term alongside. Better for comprehension and for search at the same time.",
      },
      {
        title: "Documented data handling",
        description:
          "Any form carrying health information gets a documented path: where it's stored, who can access it, retention period, and encryption. Written down before it's built.",
      },
      {
        title: "WCAG 2.1 AA as the floor",
        description:
          "Contrast verified numerically, full keyboard operation, labelled fields with real error messages, and a screen-reader pass on every interactive element.",
      },
      {
        title: "Real availability where possible",
        description:
          "Integrated with your practice management system so patients see genuine slots. If integration isn't available, we're explicit about response times rather than vague.",
      },
      {
        title: "Clinicians front and centre",
        description:
          "Profiles with credentials, specialisms, languages spoken, and their own booking link. Photography specced even when we're not shooting it.",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Can the website collect patient information?",
        answer:
          "We scope general website enquiries separately from clinical workflows. Sensitive information should use systems and processes approved by your organization and qualified privacy or compliance advisers.",
      },
      {
        question: "What should we prepare for the first conversation?",
        answer:
          "Bring your current website, the main customer journeys you need to improve and any systems or approval requirements the project must work with.",
      },
    ],
    serviceSlugs: [
      "web-design",
      "ui-ux-design",
      "local-seo",
      "content-writing",
      "website-maintenance",
    ],
    caseStudySlugs: [],
    blogSlugs: [
      "local-seo-strategy-small-business",
      "ux-design-principles-that-increase-conversions",
      "how-to-build-website-that-converts",
    ],
    keywords: {
      primary: "healthcare website design",
      secondary: [
        "medical website development",
        "clinic website design agency",
        "dental website design",
        "accessible healthcare web design",
      ],
      semantic: [
        "WCAG 2.1 AA",
        "protected health information",
        "BAA",
        "online appointment booking",
        "practice management integration",
        "clinician profiles",
        "plain language",
        "patient journey",
        "local SEO for clinics",
        "data retention",
        "screen reader testing",
        "insurance coverage information",
      ],
    },
    meta: {
      title: "Healthcare & Clinic Website Design | Quesiono",
      description:
        "Make services, practitioners, locations, and appointment options clear, with accessible content and carefully scoped enquiry forms.",
    },
    media: {
      imageAlt:
        "Clinic website showing clinician profiles and an appointment booking step",
    },
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: "scale",
    href: "/industries/professional-services",
    shortDescription:
      "Help prospective clients understand your services, assess the fit, and make an informed enquiry.",
    hero: {
      eyebrow: "Professional Services",
      headline: "Make your expertise easier to choose.",
      sub: "Help prospective clients understand your services, assess the fit, and make an informed enquiry.",
    },
    overview: {
      heading: "What your visitors need to decide",
      paragraphs: [
        "Professional service websites need to answer three questions clearly: do you handle this problem, what does working with you involve, and what should the client do next? We structure service pages around those decisions and use evidence that your team can substantiate.",
      ],
    },
    challengesHeading: "What holds these firms back",
    challenges: [
      {
        icon: "message",
        title: "Interchangeable positioning",
        description:
          "Six firms in a market all claiming experience, integrity, and client focus. Nothing on the page helps a prospect choose, so they default to price or proximity.",
      },
      {
        icon: "users",
        title: "Practitioners hidden",
        description:
          "Thin bios and stock photography, when the individual practitioner is the actual product. Prospects want to know who they'd be working with.",
      },
      {
        icon: "scale",
        title: "Conduct rules misread as silence",
        description:
          "Advertising rules limit what you can claim, and firms often overcorrect into saying nothing specific at all. There's substantial room between prohibited claims and generic filler.",
      },
      {
        icon: "file-search",
        title: "Practice areas that don't rank",
        description:
          "One page listing eight service lines competes for nothing. Prospects search for their specific issue, and that needs its own page with real depth.",
      },
      {
        icon: "clipboard",
        title: "Unqualified enquiries",
        description:
          "A bare contact form produces calls outside your practice area and below your minimum engagement, eating partner time.",
      },
    ],
    approachHeading: "How we handle it",
    approach: [
      {
        title: "Positioning built from your matters",
        description:
          "We interview partners about the work they actually do best and want more of, then write the site around that rather than around the full service list.",
      },
      {
        title: "Practitioner profiles that carry weight",
        description:
          "Real background, notable work, publications, speaking, languages, and a direct contact route. Photography specced properly even where we don't shoot it.",
      },
      {
        title: "Compliant but specific",
        description:
          "We work within your jurisdiction's advertising rules and find the substance that's still permitted \u2014 matter types, sectors, scale, process, and outcomes described appropriately.",
      },
      {
        title: "A page per practice area",
        description:
          "Each one built around the queries prospects actually search, with the questions they ask on a first call answered before they call.",
      },
      {
        title: "Qualification in the enquiry",
        description:
          "Structured intake that captures matter type, jurisdiction, and timing, routed to the right practitioner. Fewer wasted calls, better first conversations.",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Can you work with our review or compliance team?",
        answer:
          "Yes. We agree who reviews claims, credentials and sector-specific wording before drafting. Required approvals and review time become explicit project dependencies.",
      },
      {
        question: "What should we prepare for the first conversation?",
        answer:
          "Bring your current website, the main customer journeys you need to improve and any systems or approval requirements the project must work with.",
      },
    ],
    serviceSlugs: [
      "web-design",
      "web-development",
      "content-writing",
      "seo",
      "local-seo",
      "cms-development",
    ],
    caseStudySlugs: [],
    blogSlugs: [
      "content-strategy-that-actually-works",
      "how-to-build-website-that-converts",
      "local-seo-strategy-small-business",
    ],
    keywords: {
      primary: "professional services website design",
      secondary: [
        "law firm website design",
        "accounting firm web design",
        "consulting website development",
        "B2B professional services website",
      ],
      semantic: [
        "practice area pages",
        "practitioner profiles",
        "attorney advertising rules",
        "client intake form",
        "lead qualification",
        "thought leadership",
        "matter types",
        "credibility signals",
        "referral traffic",
        "local search",
        "case results",
        "professional conduct compliance",
      ],
    },
    meta: {
      title: "Law, Accounting & Consulting Website Design | Quesiono",
      description:
        "Help prospective clients understand your services, assess the fit, and make an informed enquiry.",
    },
    media: {
      imageAlt:
        "Professional services site showing practice area pages and a practitioner profile",
    },
  },
];

export const getIndustryBySlug = (slug: string) =>
  industries.find((industry) => industry.slug === slug);

export const industryParams = () =>
  industries.map((industry) => ({ slug: industry.slug }));
