export interface ProjectMetric {
  /** Numeric value for the animated counter. Omit and use `display` for ranges. */
  value?: number;
  display?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  note?: string;
}

export interface ProjectSection {
  heading: string;
  paragraphs: string[];
}

export interface Project {
  evidence: "visual" | "pending";
  slug: string;
  name: string;
  client: string;
  /** Card label and the filter facet on /portfolio. Keep the set small. */
  category: string;

  industrySlug?: string;
  location?: string;
  year: string;
  /** Real elapsed time, kick-off to launch. */
  duration: string;

  /** Service slugs from src/data/services.ts. Drives the related-services rail. */
  services: string[];
  /** Short chips for cards. Not service slugs — plain language. */
  tags: string[];

  /** One line for cards and meta descriptions. */
  summary: string;
  /** Hero sub-headline on the case study page. */
  intro: string;

  /**
   * Kept as flat strings because the portfolio index and the older detail
   * layout read them directly. The three narrative sections below carry the
   * long-form version of the same arc.
   */
  challenge: string;
  solution: string;
  results: string;

  situation: ProjectSection;
  work: ProjectSection;
  outcome: ProjectSection;

  /** What we actually did, as discrete pieces of work. */
  approach: { title: string; description: string }[];
  stack?: { name: string; note: string }[];

  /** Full stat row on the case study page. */
  metrics: ProjectMetric[];
  /** The single number that goes on the card. */
  metric?: string;
  metricLabel?: string;

  relatedBlogSlugs?: string[];

  featured: boolean;
  url?: string;

  /** Media slots. Everything renders code-art until a real file lands here. */
  image?: string;
  imageAlt?: string;
  gallery?: { src: string; alt: string; caption?: string }[];
  videoSrc?: string;
  posterSrc?: string;

  keywords: { primary: string; secondary: string[] };
  meta: { title: string; description: string };
}

export const projects: Project[] = [
  {
    slug: "local-restaurant-website",
    name: "Dream Floor",
    client: "Dream Floor",
    category: "Landscaping",
    industrySlug: "professional-services",
    year: "",
    duration: "",
    services: ["web-design", "web-development", "local-seo"],
    tags: ["Service discovery", "Responsive layouts", "Project imagery"],
    summary: "A service website that makes landscaping easier to explore.",
    intro:
      "Landscaping and gardening services need to be easy to understand before a customer can request a visit.",
    challenge:
      "Landscaping and gardening services need to be easy to understand before a customer can request a visit.",
    solution:
      "The supplied desktop and mobile views show a clear service introduction, service categories, project photography and contact pathways.",
    results: "",
    situation: {
      heading: "The visitor\u2019s decision",
      paragraphs: [
        "Landscaping and gardening services need to be easy to understand before a customer can request a visit.",
      ],
    },
    work: {
      heading: "What the visual shows",
      paragraphs: [
        "The supplied desktop and mobile views show a clear service introduction, service categories, project photography and contact pathways.",
      ],
    },
    outcome: {
      heading: "What can be assessed",
      paragraphs: [
        "This portfolio entry describes the supplied website presentation. Commercial results, delivery scope and launch measurements are not published without supporting records.",
      ],
    },
    approach: [],
    stack: [],
    metrics: [],
    relatedBlogSlugs: [
      "local-seo-strategy-small-business",
      "core-web-vitals-guide",
    ],
    featured: true,
    image: "/images/projects/project-1.png",
    imageAlt:
      "Dream Floor website presentation showing desktop and mobile layouts",
    keywords: {
      primary: "landscaping website design",
      secondary: ["Service discovery", "Responsive layouts", "Project imagery"],
    },
    meta: {
      title: "Dream Floor Website Design | Quesiono",
      description:
        "A service website that makes landscaping easier to explore.",
    },
    evidence: "visual",
    gallery: [],
  },
  {
    slug: "saas-dashboard",
    name: "LSI-Decors",
    client: "LSI-Decors",
    category: "Interiors",
    industrySlug: "professional-services",
    year: "",
    duration: "",
    services: ["web-design", "wordpress-development", "content-writing"],
    tags: ["Visual hierarchy", "Project showcase", "Mobile layout"],
    summary: "Let the spaces do the talking.",
    intro:
      "Interior and exterior design is a visual decision. Visitors need to see the work and understand which services fit their project.",
    challenge:
      "Interior and exterior design is a visual decision. Visitors need to see the work and understand which services fit their project.",
    solution:
      "The supplied presentation pairs a prominent interior image with service and project sections across desktop and mobile layouts.",
    results: "",
    situation: {
      heading: "The visitor\u2019s decision",
      paragraphs: [
        "Interior and exterior design is a visual decision. Visitors need to see the work and understand which services fit their project.",
      ],
    },
    work: {
      heading: "What the visual shows",
      paragraphs: [
        "The supplied presentation pairs a prominent interior image with service and project sections across desktop and mobile layouts.",
      ],
    },
    outcome: {
      heading: "What can be assessed",
      paragraphs: [
        "This portfolio entry describes the supplied website presentation. Commercial results, delivery scope and launch measurements are not published without supporting records.",
      ],
    },
    approach: [],
    stack: [],
    metrics: [],
    relatedBlogSlugs: [
      "nextjs-14-best-practices",
      "automating-your-workflow-tools-tips",
    ],
    featured: true,
    image: "/images/projects/project-2.png",
    imageAlt:
      "LSI-Decors website presentation showing desktop and mobile layouts",
    keywords: {
      primary: "interiors website design",
      secondary: ["Visual hierarchy", "Project showcase", "Mobile layout"],
    },
    meta: {
      title: "LSI-Decors Website Design | Quesiono",
      description: "Let the spaces do the talking.",
    },
    evidence: "visual",
    gallery: [],
  },
  {
    slug: "ecommerce-store",
    name: "Arizto",
    client: "Arizto",
    category: "Real estate",
    industrySlug: "real-estate",
    year: "",
    duration: "",
    services: ["web-design", "ui-ux-design", "custom-development"],
    tags: ["Property discovery", "Listing cards", "Responsive design"],
    summary: "A property experience designed around discovery.",
    intro:
      "Property seekers need a useful way to browse homes, inspect listings and decide when to contact an agent.",
    challenge:
      "Property seekers need a useful way to browse homes, inspect listings and decide when to contact an agent.",
    solution:
      "The supplied views show property-led navigation, listing cards and a mobile browsing layout. The presentation puts property photography at the centre of the page.",
    results: "",
    situation: {
      heading: "The visitor\u2019s decision",
      paragraphs: [
        "Property seekers need a useful way to browse homes, inspect listings and decide when to contact an agent.",
      ],
    },
    work: {
      heading: "What the visual shows",
      paragraphs: [
        "The supplied views show property-led navigation, listing cards and a mobile browsing layout. The presentation puts property photography at the centre of the page.",
      ],
    },
    outcome: {
      heading: "What can be assessed",
      paragraphs: [
        "This portfolio entry describes the supplied website presentation. Commercial results, delivery scope and launch measurements are not published without supporting records.",
      ],
    },
    approach: [],
    stack: [],
    metrics: [],
    relatedBlogSlugs: [
      "shopify-store-conversion-optimization",
      "core-web-vitals-guide",
    ],
    featured: true,
    image: "/images/projects/project-3.png",
    imageAlt: "Arizto website presentation showing desktop and mobile layouts",
    keywords: {
      primary: "real estate website design",
      secondary: ["Property discovery", "Listing cards", "Responsive design"],
    },
    meta: {
      title: "Arizto Website Design | Quesiono",
      description: "A property experience designed around discovery.",
    },
    evidence: "visual",
    gallery: [],
  },
  {
    slug: "dazzle-website",
    name: "Gerard",
    client: "Gerard",
    category: "Building products",
    industrySlug: "professional-services",
    year: "",
    duration: "",
    services: ["web-design", "cms-development", "content-writing"],
    tags: ["Audience pathways", "Product presentation", "Content structure"],
    summary: "Different buyers. Clearer routes to the right information.",
    intro:
      "Homeowners and building professionals need different information before selecting a roofing product.",
    challenge:
      "Homeowners and building professionals need different information before selecting a roofing product.",
    solution:
      "The supplied views separate homeowner and professional pathways and use product imagery to introduce the roofing range.",
    results: "",
    situation: {
      heading: "The visitor\u2019s decision",
      paragraphs: [
        "Homeowners and building professionals need different information before selecting a roofing product.",
      ],
    },
    work: {
      heading: "What the visual shows",
      paragraphs: [
        "The supplied views separate homeowner and professional pathways and use product imagery to introduce the roofing range.",
      ],
    },
    outcome: {
      heading: "What can be assessed",
      paragraphs: [
        "This portfolio entry describes the supplied website presentation. Commercial results, delivery scope and launch measurements are not published without supporting records.",
      ],
    },
    approach: [],
    stack: [],
    metrics: [],
    relatedBlogSlugs: [
      "brand-identity-guide-2025",
      "website-redesign-checklist",
    ],
    featured: true,
    image: "/images/projects/project-4.png",
    imageAlt: "Gerard website presentation showing desktop and mobile layouts",
    keywords: {
      primary: "building products website design",
      secondary: [
        "Audience pathways",
        "Product presentation",
        "Content structure",
      ],
    },
    meta: {
      title: "Gerard Website Design | Quesiono",
      description: "Different buyers. Clearer routes to the right information.",
    },
    evidence: "visual",
    gallery: [],
  },
  {
    slug: "northgate-dental",
    name: "Northgate Dental",
    client: "Northgate Dental Group",
    category: "Healthcare",
    industrySlug: "healthcare",
    year: "",
    duration: "",
    services: ["web-design", "ui-ux-design", "local-seo", "content-writing"],
    tags: ["WCAG 2.1 AA", "Online booking", "Plain language"],
    summary:
      "An archived project brief. Explore the related services for current scope and delivery information.",
    intro:
      "An archived project brief. Explore the related services for current scope and delivery information.",
    challenge:
      "An inaccessible site \u2014 2.9:1 contrast, unlabelled form fields, keyboard traps \u2014 with clinical language, no clinician profiles, and no way to book anything.",
    solution:
      "A rebuild to WCAG 2.1 AA with plain-language treatment pages, clinician profiles, and real availability pulled from their practice management system.",
    results:
      "Around 62% of new-patient bookings now happen online; reception call volume down 34%.",
    situation: {
      heading: "Where they started",
      paragraphs: [
        "Northgate run three practices and had one website that served none of them properly. The accessibility audit we ran in week one found body text at 2.9:1 contrast, six unlabelled form fields, a cookie banner that couldn't be dismissed with a keyboard, and a treatment menu that trapped focus once opened.",
        "For a healthcare provider that's a legal exposure as well as a usability failure. It's also self-defeating: a dental patient base skews older and includes people with low vision and motor impairments, which is precisely the audience the site was excluding.",
        'The copy was written in clinical language. Their page for what patients call "a cracked tooth" was titled "Restorative Indirect Restorations" and ranked for nothing, because nobody searches that.',
        "And there was no booking. A form promised a callback within two working days. Reception logged roughly 190 calls a week, and the practice manager estimated three quarters were hours, pricing, insurance coverage, or appointment requests.",
      ],
    },
    work: {
      heading: "What we built",
      paragraphs: [
        "Accessibility was the constraint we designed inside rather than a checklist at the end. Every colour pair was computed before it went in the palette, every interactive element got a keyboard and screen-reader pass, and forms use real labels with error messages that say what to do rather than what went wrong.",
        'The content got rewritten in the words patients use, with the clinical term alongside for accuracy. "Cracked or chipped tooth" as the page title, "indirect restoration" in the body where it belongs. That single change is why those pages now rank \u2014 patient language and search language are the same language.',
        "Booking connects to their practice management system, so patients see real slots per practice and per clinician instead of requesting a callback. Clinician profiles carry credentials, specialisms, languages spoken, and their own booking link, because patients pick a person.",
        "One thing we documented before writing any code: what happens to a form submission that mentions a symptom. That's health information. Storage location, who can read it, retention period, and encryption all written down and signed off, with a BAA covering our part.",
      ],
    },
    outcome: {
      heading: "What happened",
      paragraphs: [
        "About 62% of new-patient bookings come through the site now. Reception call volume dropped 34%, and the practice manager reallocated most of that time to recall calls, which are worth considerably more.",
        "The accessibility audit came back clean at WCAG 2.1 AA across all templates. We're explicit that AA is a floor rather than a finish line \u2014 a few AAA criteria are met and several aren't, and we've listed which on their accessibility statement rather than implying more than is true.",
      ],
    },
    approach: [
      {
        title: "Accessibility as a design constraint",
        description:
          "Contrast computed before entering the palette. Keyboard and screen-reader passes on every interactive element. Real labels, actionable error messages.",
      },
      {
        title: "Patient language, clinical accuracy",
        description:
          "Page titles in the words patients search, clinical terminology in the body. Better comprehension and better rankings from one change.",
      },
      {
        title: "Real availability, not a callback promise",
        description:
          "Integrated with their practice management system so patients see genuine slots per practice and per clinician.",
      },
      {
        title: "Documented handling for health data",
        description:
          "Storage, access, retention, and encryption written down and signed off before build, with a BAA covering our services.",
      },
    ],
    stack: [
      {
        name: "Next.js 14",
        note: "Static pages, server actions for the booking handoff.",
      },
      {
        name: "Payload CMS",
        note: "Self-hosted \u2014 data residency was a requirement.",
      },
      {
        name: "Dentally API",
        note: "Live availability and appointment creation.",
      },
    ],
    metrics: [],
    relatedBlogSlugs: [
      "ux-design-principles-that-increase-conversions",
      "local-seo-strategy-small-business",
    ],
    featured: false,
    imageAlt:
      "Northgate Dental website showing clinician profiles and an accessible booking form",
    keywords: {
      primary: "dental website design case study",
      secondary: [
        "accessible healthcare website",
        "WCAG 2.1 AA rebuild",
        "online appointment booking integration",
      ],
    },
    meta: {
      title: "Northgate Dental \u2014 Project Archive | Quesiono",
      description:
        "An archived project brief. Explore the related services for current scope and delivery information.",
    },
    evidence: "pending",
    image: undefined,
  },
  {
    slug: "castellan-realty",
    name: "Castellan Realty",
    client: "Castellan Realty",
    category: "Real Estate",
    industrySlug: "real-estate",
    year: "",
    duration: "",
    services: [
      "custom-development",
      "web-design",
      "speed-optimization",
      "local-seo",
    ],
    tags: ["MLS feed", "Instant search", "Image pipeline"],
    summary:
      "An archived project brief. Explore the related services for current scope and delivery information.",
    intro:
      "An archived project brief. Explore the related services for current scope and delivery information.",
    challenge:
      "A 9.2-second listing page from unoptimised galleries, a search that reloaded the page on every filter change, and 300 sold listings turned into 404s.",
    solution:
      "A rebuilt image pipeline, client-side filtering over an indexed dataset, resilient RESO feed sync, and a written URL policy for delisted stock.",
    results:
      "Listing LCP down to 1.5s; organic enquiries up 2.4\u00d7; pages per session up from 2.1 to 6.8.",
    situation: {
      heading: "Where they started",
      paragraphs: [
        "Castellan's problem was measurable in a single number: 9.2 seconds to largest contentful paint on a listing page over 4G. Property photography is the point of a property site and it was also the payload \u2014 eight to fourteen full-resolution JPEGs per listing, served at original size and scaled down in the browser.",
        "Search made it worse. Every filter change \u2014 price, beds, type \u2014 triggered a full page reload, so refining a search meant waiting nine seconds again. Their analytics showed 2.1 pages per session, which for a property site means people were looking at one listing and leaving.",
        "Then the URL problem. Their previous developer had configured delisted properties to return 404. Around 300 sold listings had accumulated links and search authority over four years, and all of it was being discarded on the day of sale.",
        "Their agents had quietly adapted by sending buyers links to the portal instead of their own site. Every one of those visits was a lead they paid a fee on.",
      ],
    },
    work: {
      heading: "What we built",
      paragraphs: [
        "The image pipeline was the first fix and the biggest. AVIF with WebP fallback, generated at five widths, the hero preloaded and everything below the fold lazy-loaded, with blurred placeholders so the layout never shifts as photos arrive. Same photography, roughly an eighth of the bytes.",
        "Search became client-side over a pre-built index. Filters apply instantly, map and list views share state, and the URL updates so a filtered search can be bookmarked or sent to a client \u2014 which is what the agents were using the portal for.",
        "The feed was the unglamorous half of the project. Their RESO Web API source sends duplicate records and occasionally omits required fields, so ingestion runs every fifteen minutes with validation and a reconciliation report. Bad records raise an alert instead of quietly publishing a listing with no price.",
        "For sold stock we wrote an actual policy rather than picking a default. Sold listings stay live with clear status and links to similar available properties; the handful that were genuinely worthless get a 301 to their area page. Nothing that had earned links gets thrown away.",
      ],
    },
    outcome: {
      heading: "What happened",
      paragraphs: [
        "Listing LCP came down from 9.2 seconds to 1.5. Pages per session went from 2.1 to 6.8 \u2014 people browse now, which was the whole objective. Organic enquiries were up 2.4\u00d7 over five months.",
        'The sold archive turned out to be a genuine asset. Those 300 pages are evidence Castellan actually sell in each neighbourhood, and they now bring in a steady trickle of "how much did X sell for" searches that convert into valuation requests.',
        "Eleven weeks is longer than the site itself needed. Four of them were feed work, and we'd budget the same again.",
      ],
    },
    approach: [
      {
        title: "An image pipeline built for galleries",
        description:
          "AVIF with WebP fallback at five widths, hero preloaded, blur placeholders below the fold. Same photos, roughly an eighth of the bytes.",
      },
      {
        title: "Instant client-side filtering",
        description:
          "Pre-built search index, map and list sharing state, and shareable filtered URLs \u2014 the thing agents had been using the portal for.",
      },
      {
        title: "Feed sync that fails loudly",
        description:
          "RESO Web API ingestion every fifteen minutes with validation, deduplication, and a reconciliation report. Bad records alert rather than publish.",
      },
      {
        title: "A written policy for sold listings",
        description:
          "Sold stock kept with clear status and links to comparable properties. Only genuinely worthless URLs redirect. Nothing with links is discarded.",
      },
    ],
    stack: [
      {
        name: "Next.js 14",
        note: "ISR for listings, static for area pages.",
      },
      {
        name: "RESO Web API",
        note: "Scheduled ingestion with validation and reconciliation.",
      },
      {
        name: "Sharp",
        note: "AVIF and WebP generation at build and on ingest.",
      },
      {
        name: "MapLibre",
        note: "Self-hosted tiles \u2014 no per-view mapping bill.",
      },
    ],
    metrics: [],
    relatedBlogSlugs: [
      "core-web-vitals-guide",
      "technical-seo-audit-checklist",
    ],
    featured: false,
    imageAlt:
      "Castellan Realty property search with map view and a listing photo gallery",
    keywords: {
      primary: "real estate website case study",
      secondary: [
        "MLS feed integration",
        "property search performance",
        "IDX website build",
      ],
    },
    meta: {
      title: "Castellan Realty \u2014 Project Archive | Quesiono",
      description:
        "An archived project brief. Explore the related services for current scope and delivery information.",
    },
    evidence: "pending",
    image: undefined,
  },
  {
    slug: "hartwell-mercer-law",
    name: "Hartwell & Mercer",
    client: "Hartwell & Mercer LLP",
    category: "Professional Services",
    industrySlug: "professional-services",
    year: "",
    duration: "",
    services: [
      "web-design",
      "web-development",
      "content-writing",
      "seo",
      "cms-development",
    ],
    tags: ["Practice areas", "Intake", "Compliance review"],
    summary:
      "An archived project brief. Explore the related services for current scope and delivery information.",
    intro:
      "An archived project brief. Explore the related services for current scope and delivery information.",
    challenge:
      "One page listing eight service lines, partner bios of two sentences each, and a bare contact form producing enquiries far outside their practice and their minimum engagement.",
    solution:
      "Positioning built from partner interviews, seven substantive practice area pages, real practitioner profiles, and structured intake \u2014 all drafted inside Illinois advertising rules.",
    results:
      "Organic enquiries up 88%, and 71% of them now within practice scope, up from 22%.",
    situation: {
      heading: "Where they started",
      paragraphs: [
        'The site had one services page listing eight practice areas as bullet points. Nothing on it distinguished Hartwell & Mercer from any other mid-sized litigation firm in Chicago, and their homepage headline was "Trusted advisors since 1994".',
        "Partner bios ran two sentences. Law school, admission year, done. For a firm where the individual practitioner is the product, that's the most expensive omission on the site.",
        "The intake problem was concrete and quantified. Their office manager tracked enquiries for a quarter before we started: 22% fell within their practice areas and above their minimum engagement. The rest were family law, personal injury, and traffic matters, each one costing somebody fifteen minutes to redirect.",
        "The managing partner's stated reason for the vagueness was compliance \u2014 Illinois advertising rules restrict what a firm may claim. That's true, and it had been read far more broadly than it says.",
      ],
    },
    work: {
      heading: "What we built",
      paragraphs: [
        "Positioning came out of interviews with five partners about the matters they handle best and want more of. The answer was consistent and much narrower than the site: shareholder and partnership disputes in closely held companies, matters in the $2m\u2013$20m range. Three of the eight listed practice areas were work they'd stopped seeking years earlier and hadn't removed.",
        "Each real practice area got its own page, built around what prospects search and the questions they ask on a first call. What does a shareholder dispute cost. How long does it take. What happens if there's an arbitration clause. Answering those before the call is the whole mechanism.",
        'On compliance, we drafted specific and let their reviewer cut. Illinois rules prohibit guarantees, superlatives, and comparative claims \u2014 they don\'t prohibit describing your work. "We handle shareholder disputes in closely held companies, typically $2m to $20m in dispute" clears review comfortably. Their compliance partner changed nine phrases across roughly 9,000 words.',
        "Intake became structured: matter type, jurisdiction, opposing party for a conflicts pre-check, and timing, routed to the right partner. It's a longer form than a contact page usually gets away with, and for a high-value low-volume practice the length is a filter rather than a cost.",
      ],
    },
    outcome: {
      heading: "What happened",
      paragraphs: [
        "Organic enquiries rose 88% over six months. More importantly, in-scope enquiries went from 22% to 71%. Total volume up and waste down at the same time, because specificity attracts the right people and repels the wrong ones in the same motion.",
        "Five of the seven practice area pages rank on page one for their primary term in the Chicago market. The two that don't target the most competitive phrases and are moving slowly, which we told them to expect.",
      ],
    },
    approach: [
      {
        title: "Positioning from partner interviews",
        description:
          "Five partners asked which matters they handle best and want more of. The answer was far narrower than the eight practice areas listed.",
      },
      {
        title: "A page per real practice area",
        description:
          "Built around what prospects search and the questions they ask on a first call. Cost, timeline, and process answered before contact.",
      },
      {
        title: "Specific, then compliance-reviewed",
        description:
          "Drafted with real matter types and ranges inside Illinois advertising rules. Their compliance partner changed nine phrases across 9,000 words.",
      },
      {
        title: "Intake that qualifies",
        description:
          "Matter type, jurisdiction, opposing party for conflicts, and timing \u2014 routed to the right partner. Length as a filter, not a cost.",
      },
    ],
    stack: [
      {
        name: "Next.js 14",
        note: "Static pages, server-side intake handling.",
      },
      {
        name: "Sanity",
        note: "Practice areas and bios editable by their marketing coordinator.",
      },
      {
        name: "Clio",
        note: "Intake handoff into their existing matter workflow.",
      },
    ],
    metrics: [],
    relatedBlogSlugs: [
      "content-strategy-that-actually-works",
      "seo-basics-getting-started-2025",
    ],
    featured: false,
    imageAlt:
      "Hartwell & Mercer law firm website showing a practice area page and partner profile",
    keywords: {
      primary: "law firm website case study",
      secondary: [
        "legal SEO results",
        "practice area pages",
        "law firm client intake",
      ],
    },
    meta: {
      title: "Hartwell & Mercer \u2014 Project Archive | Quesiono",
      description:
        "An archived project brief. Explore the related services for current scope and delivery information.",
    },
    evidence: "pending",
    image: undefined,
  },
  {
    slug: "coastline-outfitters",
    name: "Coastline Outfitters",
    client: "Coastline Outfitters",
    category: "Ecommerce",
    industrySlug: "ecommerce-retail",
    year: "",
    duration: "",
    services: [
      "ecommerce-development",
      "shopify-development",
      "ecommerce-seo",
      "keyword-research",
      "content-writing",
    ],
    tags: ["3,400 SKUs", "Faceted search", "Inventory sync"],
    summary:
      "An archived project brief. Explore the related services for current scope and delivery information.",
    intro:
      "An archived project brief. Explore the related services for current scope and delivery information.",
    challenge:
      "3,400 SKUs with specifications buried in prose, so filtering by the attributes people actually buy on was impossible. Two warehouses oversold roughly 40 orders a month.",
    solution:
      "A structured product data rebuild across the full catalogue, faceted search on real attributes, and inventory sync unified across both warehouses.",
    results:
      "Search-to-purchase rate up 2.9\u00d7; oversells down to under two a month; organic revenue up 61%.",
    situation: {
      heading: "Where they started",
      paragraphs: [
        "Coastline's catalogue was the problem and also the opportunity. 3,400 SKUs of technical outdoor equipment \u2014 jackets, boots, packs, sleeping systems \u2014 where buyers choose on specifications. Hydrostatic head, fill power, pack weight, temperature rating.",
        "None of it existed as structured data. Every specification was written into the description paragraph, differently by whoever added the product, over nine years. So the only filters available were price, brand, and size. Someone looking for a jacket rated above 20,000mm had to open products one at a time and read.",
        'Their internal search was worse. Searching "waterproof jacket" returned 340 results in no useful order, and their analytics showed people who used search converted worse than people who didn\'t \u2014 which is close to diagnostic.',
        "Operationally, two warehouses ran separate stock counts that reconciled overnight. Roughly 40 orders a month were oversold, each one a refund, an apology, and often a lost customer.",
      ],
    },
    work: {
      heading: "What we built",
      paragraphs: [
        "Ten weeks, and about four of them were spent on product data. We built an attribute schema per category \u2014 different fields for a sleeping bag than for a boot \u2014 then extracted what we could from existing descriptions and had Coastline's product team fill the rest. It's the least interesting work in the project and nothing else would have functioned without it.",
        "With real attributes in place, faceted search became straightforward. Filter jackets by hydrostatic head, sleeping bags by comfort rating, packs by capacity and load. Facets are generated from the schema, so adding a category doesn't need a developer. Search runs on a typo-tolerant index with results ranked by relevance and availability rather than by date added.",
        "Inventory sync now runs through a single source of truth that both warehouses write to, with a reconciliation report that flags a discrepancy the same hour rather than the next morning.",
        "The content side followed the data. Buying guides per category \u2014 how to read a waterproof rating, what fill power means \u2014 which target the informational searches that precede a purchase and internally link into the relevant faceted views.",
      ],
    },
    outcome: {
      heading: "What happened",
      paragraphs: [
        "Search-to-purchase rate rose 2.9\u00d7, and search users now convert better than non-search users rather than worse. Oversells dropped from around 40 a month to under two. Organic revenue was up 61% over seven months, with roughly a third of that traceable to the buying guides.",
        "One honest note on scope: we quoted eight weeks and it took ten. The product data extraction was harder than our sample suggested \u2014 nine years of inconsistent description writing does not extract cleanly, and we absorbed the overrun.",
      ],
    },
    approach: [
      {
        title: "Product data rebuilt first",
        description:
          "A per-category attribute schema, extraction from existing descriptions, and manual fill by their product team. Four of the ten weeks.",
      },
      {
        title: "Faceted search on real attributes",
        description:
          "Hydrostatic head, fill power, capacity, load rating. Facets generated from the schema, so a new category needs no developer.",
      },
      {
        title: "One source of truth for stock",
        description:
          "Both warehouses write to a single count, with same-hour discrepancy reporting instead of an overnight reconciliation.",
      },
      {
        title: "Buying guides that feed the facets",
        description:
          "Category guides targeting the informational searches before a purchase, linking into the relevant filtered views.",
      },
    ],
    stack: [
      {
        name: "Shopify Plus",
        note: "Metafield-driven attributes, custom storefront sections.",
      },
      {
        name: "Algolia",
        note: "Typo-tolerant search, facet generation from the schema.",
      },
      {
        name: "Cin7",
        note: "Unified inventory across both warehouses.",
      },
      {
        name: "Sanity",
        note: "Buying guides, separate from the product catalogue.",
      },
    ],
    metrics: [],
    relatedBlogSlugs: [
      "shopify-store-conversion-optimization",
      "content-strategy-that-actually-works",
    ],
    featured: false,
    imageAlt:
      "Coastline Outfitters faceted product search filtering technical outdoor gear",
    keywords: {
      primary: "ecommerce faceted search case study",
      secondary: [
        "product data structuring",
        "Shopify Plus catalogue",
        "inventory sync integration",
      ],
    },
    meta: {
      title: "Coastline Outfitters \u2014 Project Archive | Quesiono",
      description:
        "An archived project brief. Explore the related services for current scope and delivery information.",
    },
    evidence: "pending",
    image: undefined,
  },
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const getFeaturedProjects = () => projects.filter((p) => p.featured);

export const getProjectsByIndustry = (industrySlug: string) =>
  projects.filter((p) => p.industrySlug === industrySlug);

/** Case studies that used a given service. Drives the rail on service pages. */
export const getProjectsByService = (serviceSlug: string) =>
  projects.filter((p) => p.services.includes(serviceSlug));

export const projectCategories = () =>
  Array.from(new Set(projects.map((p) => p.category))).sort();

export const projectParams = () => projects.map((p) => ({ slug: p.slug }));
