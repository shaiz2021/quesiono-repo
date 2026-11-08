import type { Service } from "./services";
export const serviceContent: Service[] = [
  {
    slug: "web-design",
    name: "Web Design",
    shortDescription:
      "For businesses whose website looks dated, feels inconsistent, or makes the offer hard to understand. We plan the pages, shape the content, and design a clear route to enquiry.",
    icon: "paintbrush",
    href: "/services/web-design",
    group: "web",
    featured: true,
    layoutVariant: "showcase",
    hero: {
      eyebrow: "Web Design",
      headline: "Make your website as clear as your business.",
      sub: "For businesses whose website looks dated, feels inconsistent, or makes the offer hard to understand. We plan the pages, shape the content, and design a clear route to enquiry.",
    },
    overview: {
      heading:
        "Visitors should understand why you matter before they have to scroll.",
      paragraphs: [
        "Start with the questions customers ask before buying. We turn those answers into page structure, readable layouts, and responsive designs that give your development team a clear specification.",
      ],
    },
    outcomes: [
      "Discovery and content audit",
      "Wireframes and page architecture",
      "Visual design and art direction",
      "Component library",
    ],
    deliverablesHeading: "What's in a web design engagement",
    deliverables: [
      {
        icon: "compass",
        title: "Discovery and content audit",
        description:
          "A working session on who buys, what stalls them, and what you already have. We inventory every existing page so nothing useful gets lost in the move.",
      },
      {
        icon: "ruler",
        title: "Wireframes and page architecture",
        description:
          "Low-fidelity layouts for every unique template. Cheap to change at this stage, expensive to change after visual design \u2014 so this is where we argue about section order.",
      },
      {
        icon: "brush",
        title: "Visual design and art direction",
        description:
          "Type scale, colour, spacing rhythm, photography treatment, iconography. Two directions to react to, then one refined to final.",
      },
      {
        icon: "layers",
        title: "Component library",
        description:
          "Buttons, cards, forms, tables, navigation, and every state each one needs \u2014 hover, focus, disabled, error, loading, empty.",
      },
      {
        icon: "monitor",
        title: "Responsive design at four breakpoints",
        description:
          "375, 768, 1024, and 1440. Designed, not inferred. Tables, nav, and pricing grids get explicit mobile treatments because those are where responsive design usually falls apart.",
      },
      {
        icon: "clipboard",
        title: "Developer handoff file",
        description:
          "Annotated Figma with tokens, spacing values, and interaction notes. If someone else builds it, they won't have to guess.",
      },
    ],
    processHeading: "How the design work runs",
    process: [
      {
        step: "01",
        title: "Discovery",
        description:
          "A 90-minute call plus a questionnaire. We come out of it with your buyer, your objections, and a page list.",
        detail: [
          "Stakeholder interview",
          "Competitor teardown",
          "Analytics review",
          "Content inventory",
        ],
      },
      {
        step: "02",
        title: "Structure",
        description:
          "Sitemap and wireframes. We agree on what each page has to do before we decide how it looks.",
        detail: [
          "Sitemap",
          "Wireframes per template",
          "Copy outline",
          "Conversion path mapping",
        ],
      },
      {
        step: "03",
        title: "Design",
        description:
          "Develop the agreed design direction across the scoped templates and responsive layouts.",
        detail: [
          "Moodboard",
          "Two concepts",
          "Full template set",
          "Component states",
        ],
      },
      {
        step: "04",
        title: "Review",
        description:
          "Two structured rounds of revisions. Comments go in Figma so nothing gets lost in an email thread.",
        detail: [
          "Clickable prototype",
          "Two revision rounds",
          "Accessibility contrast check",
        ],
      },
      {
        step: "05",
        title: "Handoff",
        description:
          "Annotated file, tokens, and a walkthrough call \u2014 either to our build team or to yours.",
        detail: [
          "Design tokens",
          "Annotated specs",
          "Asset export",
          "Walkthrough recording",
        ],
      },
    ],
    stats: [],
    pricingTiers: undefined,
    pricingNote: undefined,
    faqs: [
      {
        question: "Does this include development?",
        answer:
          "Design and development can be scoped together or separately. A design-only engagement includes agreed layouts, reusable components, and handover notes for your developer.",
      },
      {
        question: "What affects the cost of web design?",
        answer:
          "The scope depends on the current setup, the deliverables, integrations and review requirements. We confirm inclusions, exclusions and a delivery schedule in a written proposal before work begins.",
      },
      {
        question: "What should I send with my enquiry?",
        answer:
          "Share your website if you have one, the problem you want to solve and any important constraints. A short description is enough to start; access to accounts can be arranged later.",
      },
    ],
    relatedSlugs: [
      "ui-ux-design",
      "web-development",
      "landing-page-development",
      "wordpress-development",
    ],
    caseStudySlugs: [],
    blogSlugs: [
      "how-to-build-website-that-converts",
      "ux-design-principles-that-increase-conversions",
      "website-redesign-checklist",
      "brand-identity-guide-2025",
    ],
    industrySlugs: ["saas-startups", "professional-services", "real-estate"],
    keywords: {
      primary: "custom web design services",
      secondary: [
        "website design company",
        "responsive web design",
        "professional website design",
        "UI design for websites",
      ],
      semantic: [
        "design system",
        "wireframes",
        "Figma",
        "art direction",
        "visual hierarchy",
        "typography scale",
        "colour contrast",
        "WCAG",
        "mobile-first design",
        "conversion-focused layout",
        "brand guidelines",
        "developer handoff",
      ],
    },
    meta: {
      title: "Web Design Services | Quesiono",
      description:
        "For businesses whose website looks dated, feels inconsistent, or makes the offer hard to understand. We plan the pages, shape the content, and design a clear route to enquiry.",
    },
    media: {
      imageAlt:
        "Responsive web design layouts shown at mobile, tablet, and desktop widths",
    },
  },
  {
    slug: "web-development",
    name: "Web Development",
    shortDescription:
      "For teams that need a dependable website they can update. We build responsive pages, connect the right CMS, and test the journeys that matter to your business.",
    icon: "code2",
    href: "/services/web-development",
    group: "web",
    featured: true,
    layoutVariant: "split",
    hero: {
      eyebrow: "Web Development",
      headline: "A website that works beyond launch day.",
      sub: "For teams that need a dependable website they can update. We build responsive pages, connect the right CMS, and test the journeys that matter to your business.",
    },
    overview: {
      heading: "Good development makes everyday work easier.",
      paragraphs: [
        "A website has to serve customers and the people maintaining it. We define editing needs, integrations, accessibility requirements, and deployment before selecting the implementation.",
      ],
    },
    outcomes: [
      "Hand-coded front end",
      "Core Web Vitals work",
      "Technical SEO foundation",
      "Accessibility pass",
    ],
    deliverablesHeading: "What we build",
    deliverables: [
      {
        icon: "code2",
        title: "Hand-coded front end",
        description:
          "Responsive front-end development with reusable components and typed interfaces, using the stack agreed for the project.",
      },
      {
        icon: "gauge",
        title: "Core Web Vitals work",
        description:
          "LCP, CLS, and INP measured on a throttled mid-range device before we call anything done. Font loading, image sizing, and layout reservation handled up front.",
      },
      {
        icon: "search",
        title: "Technical SEO foundation",
        description:
          "Server-rendered HTML, clean canonicals, JSON-LD structured data, generated sitemap, per-page meta and Open Graph cards.",
      },
      {
        icon: "shield",
        title: "Accessibility pass",
        description:
          "Semantic landmarks, visible focus, labelled forms, reduced-motion support, and a keyboard-only walkthrough of every interactive element.",
      },
      {
        icon: "layout-dashboard",
        title: "CMS integration",
        description:
          "Content modelled so your team edits text and images without touching layout. Sanity, Payload, or headless WordPress depending on what you already run.",
      },
      {
        icon: "rocket",
        title: "Deployment and CI",
        description:
          "A preview environment, a defined release process and documented rollback arrangements appropriate to your hosting setup.",
      },
    ],
    processHeading: "How a build runs",
    process: [
      {
        step: "01",
        title: "Technical scope",
        description:
          "We turn the design into a component inventory and a data model, then flag anything that'll be harder than it looks.",
        detail: [
          "Component inventory",
          "Content model",
          "Integration list",
          "Risk flags",
        ],
      },
      {
        step: "02",
        title: "Foundation",
        description:
          "Set up the repository, shared styles, page structure, content model and checks needed for the agreed build.",
        detail: [
          "Repo and CI",
          "Design tokens",
          "CMS schema",
          "Base components",
        ],
      },
      {
        step: "03",
        title: "Build",
        description:
          "Templates and pages, shipped to a preview URL as they finish. You review continuously instead of waiting for one big reveal.",
        detail: [
          "Templates",
          "Page assembly",
          "Forms and integrations",
          "Rolling preview builds",
        ],
      },
      {
        step: "04",
        title: "Hardening",
        description:
          "Performance budget, accessibility audit, cross-browser checks, and a real-device pass on iOS and Android.",
        detail: [
          "Lighthouse budget",
          "Keyboard audit",
          "Safari and Firefox",
          "Real-device testing",
        ],
      },
      {
        step: "05",
        title: "Launch",
        description:
          "DNS, redirect map from the old URLs, analytics, Search Console, and a monitored first week.",
        detail: [
          "301 redirect map",
          "DNS cutover",
          "Analytics and Search Console",
          "Week-one monitoring",
        ],
      },
    ],
    techStack: [
      {
        name: "Next.js",
        note: "App Router, static and server rendering per route",
      },
      {
        name: "TypeScript",
        note: "Typed end to end, including CMS content",
      },
      {
        name: "Tailwind CSS",
        note: "Token-driven styling, no runaway stylesheet",
      },
      {
        name: "React",
        note: "Component model your team can extend",
      },
      {
        name: "Sanity / Payload",
        note: "Headless CMS with structured content",
      },
      {
        name: "Vercel",
        note: "Edge delivery, preview deploys, instant rollback",
      },
      {
        name: "Playwright",
        note: "End-to-end tests on the paths that matter",
      },
      {
        name: "Resend",
        note: "Transactional email that reaches the inbox",
      },
    ],
    stats: [],
    pricingTiers: undefined,
    pricingNote: undefined,
    faqs: [
      {
        question: "Can you keep our existing platform?",
        answer:
          "Yes. We review the existing code, hosting and editing workflow first. A rebuild is recommended only when its benefits justify the migration effort.",
      },
      {
        question: "What affects the cost of web development?",
        answer:
          "The scope depends on the current setup, the deliverables, integrations and review requirements. We confirm inclusions, exclusions and a delivery schedule in a written proposal before work begins.",
      },
      {
        question: "What should I send with my enquiry?",
        answer:
          "Share your website if you have one, the problem you want to solve and any important constraints. A short description is enough to start; access to accounts can be arranged later.",
      },
    ],
    relatedSlugs: [
      "web-design",
      "custom-development",
      "speed-optimization",
      "cms-development",
    ],
    caseStudySlugs: [],
    blogSlugs: [
      "nextjs-14-best-practices",
      "core-web-vitals-guide",
      "wordpress-vs-webflow-vs-nextjs",
      "how-much-does-a-website-cost",
    ],
    industrySlugs: [
      "saas-startups",
      "professional-services",
      "ecommerce-retail",
    ],
    keywords: {
      primary: "web development services",
      secondary: [
        "Next.js development agency",
        "React web development",
        "custom website development",
        "front-end development services",
      ],
      semantic: [
        "Core Web Vitals",
        "server-side rendering",
        "static site generation",
        "TypeScript",
        "Tailwind CSS",
        "headless CMS",
        "Lighthouse score",
        "structured data",
        "301 redirects",
        "continuous deployment",
        "accessibility audit",
        "page speed",
      ],
    },
    meta: {
      title: "Web Development Services | Quesiono",
      description:
        "For teams that need a dependable website they can update. We build responsive pages, connect the right CMS, and test the journeys that matter to your business.",
    },
    media: {
      imageAlt:
        "Code editor and browser showing a Next.js component alongside its rendered output",
    },
  },
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    navLabel: "UI/UX Design",
    shortDescription:
      "For products with confusing navigation, difficult onboarding, or workflows that take too many clicks. We map the experience, test the assumptions, and design interfaces around real tasks.",
    icon: "mouse-pointer",
    href: "/services/ui-ux-design",
    group: "web",
    layoutVariant: "editorial",
    hero: {
      eyebrow: "UI/UX Design",
      headline: "Make the next step obvious.",
      sub: "For products with confusing navigation, difficult onboarding, or workflows that take too many clicks. We map the experience, test the assumptions, and design interfaces around real tasks.",
    },
    overview: {
      heading: "Find the friction before polishing the interface.",
      paragraphs: [
        "Interviews, existing analytics and usability sessions help distinguish a confusing screen from a missing feature. The deliverable is a clear set of flows and interface designs your team can build and evaluate.",
      ],
    },
    outcomes: [
      "User research",
      "Information architecture",
      "User flows and journey maps",
      "Interactive prototypes",
    ],
    deliverablesHeading: "What UI/UX design covers",
    deliverables: [
      {
        icon: "users",
        title: "User research",
        description:
          "Interviews, a support-ticket read-through, and session recordings if you have them. We're looking for the friction you've stopped noticing.",
      },
      {
        icon: "signpost",
        title: "Information architecture",
        description:
          "Navigation, labels, and hierarchy. Tree testing to confirm people can find things without guessing what you call them internally.",
      },
      {
        icon: "compass",
        title: "User flows and journey maps",
        description:
          "Every path through the task, including the ones where something goes wrong. Error paths get designed, not improvised.",
      },
      {
        icon: "layout-dashboard",
        title: "Interactive prototypes",
        description:
          "Clickable Figma prototypes at enough fidelity that a test participant forgets they're looking at a mockup.",
      },
      {
        icon: "activity",
        title: "Usability testing",
        description:
          "Five to eight moderated sessions per round, recorded, with a findings document ranked by how much each issue costs you.",
      },
      {
        icon: "layers",
        title: "Design system",
        description:
          "Tokens, components, and the rules for combining them. Documented so the fifteenth screen still looks like the first.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Understand",
        description:
          "Stakeholder interviews, analytics, support tickets, and a heuristic review of what exists now.",
        detail: [
          "Stakeholder interviews",
          "Analytics review",
          "Heuristic audit",
          "Support ticket analysis",
        ],
      },
      {
        step: "02",
        title: "Define",
        description:
          "The problem written down in one page, with success criteria we can actually check later.",
        detail: ["Problem statement", "Success metrics", "Scope boundaries"],
      },
      {
        step: "03",
        title: "Design",
        description:
          "Flows, wireframes, then interface. We move fast and low-fidelity first because ideas are cheap to throw away at that stage.",
        detail: ["User flows", "Wireframes", "UI design", "Prototype"],
      },
      {
        step: "04",
        title: "Test",
        description:
          "Moderated sessions with real users. Findings ranked, then the design revised against them.",
        detail: [
          "Test plan",
          "5\u20138 sessions",
          "Findings report",
          "Revision pass",
        ],
      },
      {
        step: "05",
        title: "Systematise",
        description:
          "Everything that survived testing gets documented as reusable components with specs engineering can build against.",
        detail: [
          "Component specs",
          "Token documentation",
          "Accessibility notes",
          "Engineering walkthrough",
        ],
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Do we need an existing product?",
        answer:
          "No. We can work from a product brief or review an existing application. The research plan depends on whether users, usage data and working screens are available.",
      },
      {
        question: "What affects the cost of ui/ux design?",
        answer:
          "The scope depends on the current setup, the deliverables, integrations and review requirements. We confirm inclusions, exclusions and a delivery schedule in a written proposal before work begins.",
      },
      {
        question: "What should I send with my enquiry?",
        answer:
          "Share your website if you have one, the problem you want to solve and any important constraints. A short description is enough to start; access to accounts can be arranged later.",
      },
    ],
    relatedSlugs: [
      "web-design",
      "web-development",
      "custom-development",
      "landing-page-development",
    ],
    caseStudySlugs: [],
    blogSlugs: [
      "ux-design-principles-that-increase-conversions",
      "how-to-build-website-that-converts",
      "website-redesign-checklist",
    ],
    industrySlugs: ["saas-startups", "healthcare", "professional-services"],
    keywords: {
      primary: "UI/UX design services",
      secondary: [
        "user experience design agency",
        "usability testing services",
        "product design services",
        "interface design",
      ],
      semantic: [
        "user research",
        "information architecture",
        "user flows",
        "wireframing",
        "Figma prototype",
        "design system",
        "heuristic evaluation",
        "task success rate",
        "accessibility",
        "empty states",
        "onboarding flow",
        "tree testing",
      ],
    },
    meta: {
      title: "UI/UX Design Services | Quesiono",
      description:
        "For products with confusing navigation, difficult onboarding, or workflows that take too many clicks. We map the experience, test the assumptions, and design interfaces around real tasks.",
    },
    media: {
      imageAlt:
        "User flow diagram beside a set of interface screens showing multiple component states",
    },
    pricingTiers: undefined,
    pricingNote: undefined,
  },
  {
    slug: "ecommerce-development",
    name: "Ecommerce Development",
    shortDescription:
      "For retailers whose catalogue, checkout, or operations have outgrown their store. We connect the shopping experience with the systems behind it.",
    icon: "shopping-cart",
    href: "/services/ecommerce-development",
    group: "web",
    featured: true,
    layoutVariant: "stacked",
    hero: {
      eyebrow: "Ecommerce Development",
      headline: "Make it easier to find, choose, and buy.",
      sub: "For retailers whose catalogue, checkout, or operations have outgrown their store. We connect the shopping experience with the systems behind it.",
    },
    overview: {
      heading: "A store needs to work on both sides of the checkout.",
      paragraphs: [
        "Product structure, search, stock accuracy and fulfilment affect what customers can buy. We map those dependencies alongside the storefront so the design reflects how your business actually operates.",
      ],
    },
    outcomes: [
      "Search, filtering, and merchandising",
      "Product experience",
      "Checkout and payments",
      "Inventory and fulfilment",
    ],
    deliverablesHeading: "What an ecommerce build covers",
    deliverables: [
      {
        icon: "search",
        title: "Search, filtering, and merchandising",
        description:
          "Faceted filters from real product attributes, synonym handling in search, and sort rules you control per collection.",
      },
      {
        icon: "shopping-bag",
        title: "Product experience",
        description:
          "Variant logic, bundles and kits, size guidance, stock accuracy, reviews, and the specification depth your category needs.",
      },
      {
        icon: "credit-card",
        title: "Checkout and payments",
        description:
          "Fewest possible steps, guest checkout, wallets, address autocomplete, and local payment methods per market.",
      },
      {
        icon: "boxes",
        title: "Inventory and fulfilment",
        description:
          "ERP, 3PL, or POS sync so stock is right. Multi-location, pre-orders, and backorders handled explicitly.",
      },
      {
        icon: "globe",
        title: "Tax, shipping, and multi-region",
        description:
          "Real rates, thresholds, duties, and currency by region. Configured against your carriers, not guessed.",
      },
      {
        icon: "megaphone",
        title: "Lifecycle email and analytics",
        description:
          "Abandoned cart, post-purchase, and win-back flows, plus GA4 ecommerce events that reconcile with your order data.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Catalogue and margin review",
        description:
          "SKU count, attributes, price bands, and margin by line. This decides platform and architecture more than anything else.",
        detail: [
          "Catalogue analysis",
          "Attribute mapping",
          "Margin review",
          "Platform recommendation",
        ],
      },
      {
        step: "02",
        title: "Buying journey",
        description:
          "How customers choose, compare, and hesitate \u2014 mapped to templates and filters.",
        detail: [
          "Journey map",
          "Template list",
          "Filter and facet plan",
          "Objection inventory",
        ],
      },
      {
        step: "03",
        title: "Build the storefront",
        description:
          "Templates and components built against a real copy of your catalogue on a staging store.",
        detail: [
          "Product templates",
          "Collection pages",
          "Cart and checkout",
          "Search and filters",
        ],
      },
      {
        step: "04",
        title: "Wire the operations",
        description:
          "Inventory, tax, shipping, payments, and email. Then test orders through every combination that matters.",
        detail: [
          "Inventory sync",
          "Tax and shipping",
          "Payment gateways",
          "Full test orders",
        ],
      },
      {
        step: "05",
        title: "Launch and optimise",
        description:
          "Go live, watch the funnel daily for a fortnight, then act on what the data shows rather than what we assumed.",
        detail: [
          "Launch checklist",
          "Funnel monitoring",
          "Ranked fix list",
          "Handover training",
        ],
      },
    ],
    techStack: [
      {
        name: "Shopify",
        note: "Default for most catalogues under a few thousand SKUs",
      },
      {
        name: "WooCommerce",
        note: "When product logic is unusual or WordPress is fixed",
      },
      {
        name: "Hydrogen / Next.js",
        note: "Headless storefronts for large or multi-market stores",
      },
      {
        name: "Stripe",
        note: "Payments outside a hosted platform",
      },
      {
        name: "Algolia",
        note: "Search and faceting at scale",
      },
      {
        name: "Klaviyo",
        note: "Lifecycle email and SMS",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Can you migrate our catalogue?",
        answer:
          "Catalogue migration can be included after reviewing product data, variants, customer records and order history. Redirects and reconciliation checks are part of the migration scope.",
      },
      {
        question: "What affects the cost of ecommerce development?",
        answer:
          "The scope depends on the current setup, the deliverables, integrations and review requirements. We confirm inclusions, exclusions and a delivery schedule in a written proposal before work begins.",
      },
      {
        question: "What should I send with my enquiry?",
        answer:
          "Share your website if you have one, the problem you want to solve and any important constraints. A short description is enough to start; access to accounts can be arranged later.",
      },
    ],
    relatedSlugs: [
      "shopify-development",
      "ecommerce-seo",
      "web-development",
      "ui-ux-design",
    ],
    caseStudySlugs: [],
    blogSlugs: [
      "shopify-store-conversion-optimization",
      "how-to-build-website-that-converts",
      "how-much-does-a-website-cost",
    ],
    industrySlugs: ["ecommerce-retail", "restaurants-hospitality"],
    keywords: {
      primary: "ecommerce development services",
      secondary: [
        "ecommerce website development company",
        "online store development",
        "custom ecommerce build",
        "ecommerce platform migration",
      ],
      semantic: [
        "faceted search",
        "product variants",
        "checkout optimisation",
        "inventory sync",
        "3PL integration",
        "tax and duties",
        "abandoned cart flow",
        "GA4 ecommerce events",
        "Product schema",
        "multi-currency",
        "average order value",
        "conversion funnel",
      ],
    },
    meta: {
      title: "Ecommerce Development Services | Quesiono",
      description:
        "For retailers whose catalogue, checkout, or operations have outgrown their store. We connect the shopping experience with the systems behind it.",
    },
    media: {
      imageAlt:
        "Ecommerce collection page with filters open beside a mobile checkout screen",
    },
    pricingTiers: undefined,
    pricingNote: undefined,
  },
  {
    slug: "wordpress-development",
    name: "WordPress Development",
    shortDescription:
      "For businesses dealing with awkward editing, outdated plugins, or a theme that no longer fits. We improve the existing setup or build a maintainable replacement.",
    icon: "brush",
    href: "/services/wordpress-development",
    group: "web",
    layoutVariant: "split",
    hero: {
      eyebrow: "WordPress Development",
      headline: "WordPress your team can actually manage.",
      sub: "For businesses dealing with awkward editing, outdated plugins, or a theme that no longer fits. We improve the existing setup or build a maintainable replacement.",
    },
    overview: {
      heading: "Give editors useful controls, not a fragile page.",
      paragraphs: [
        "We review themes, plugins and hosting before deciding what needs to change. Reusable blocks and structured fields let your team update content while keeping layouts consistent.",
      ],
    },
    outcomes: [
      "Custom theme build",
      "Block patterns and ACF fields",
      "Plugin audit and cleanup",
      "Performance work",
    ],
    deliverablesHeading: "What WordPress work covers",
    deliverables: [
      {
        icon: "brush",
        title: "Custom theme build",
        description:
          "Built to your design, not a marketplace theme reskinned. Block-editor native with registered patterns for every section type.",
      },
      {
        icon: "boxes",
        title: "Block patterns and ACF fields",
        description:
          "Reusable sections your editors insert and fill. Structured fields where free-form editing would break the layout.",
      },
      {
        icon: "plug",
        title: "Plugin audit and cleanup",
        description:
          "Every plugin reviewed for necessity, performance cost, and update history. Abandoned ones replaced or removed.",
      },
      {
        icon: "gauge",
        title: "Performance work",
        description:
          "Object and page caching, image optimisation, deferred scripts, database cleanup. Measured before and after.",
      },
      {
        icon: "shield",
        title: "Security hardening",
        description:
          "Login protection, file permissions, disabled editor access, WAF rules, and automated offsite backups you can restore from.",
      },
      {
        icon: "shopping-cart",
        title: "WooCommerce setup",
        description:
          "Products, variations, tax and shipping rules, payment gateways, and a checkout that isn't the stock three-step maze.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        description:
          "For existing sites: plugin inventory, theme review, performance baseline, and a list of what's actively dangerous.",
        detail: [
          "Plugin inventory",
          "Performance baseline",
          "Security scan",
          "Update backlog",
        ],
      },
      {
        step: "02",
        title: "Plan",
        description:
          "What stays, what goes, what gets rewritten. Then a staging site so nothing changes on production first.",
        detail: ["Keep/kill list", "Staging environment", "Migration plan"],
      },
      {
        step: "03",
        title: "Build",
        description:
          "Theme, patterns, and fields built on staging. You review on a real URL with real content.",
        detail: [
          "Theme build",
          "Block patterns",
          "ACF fields",
          "Staging review",
        ],
      },
      {
        step: "04",
        title: "Optimise",
        description:
          "Caching, images, scripts, and database. Re-measured against the baseline so the gain is a number, not a claim.",
        detail: [
          "Caching layer",
          "Image pipeline",
          "Script audit",
          "Before/after metrics",
        ],
      },
      {
        step: "05",
        title: "Launch and secure",
        description:
          "Cutover, redirects, hardening, backups, and an update schedule someone is actually responsible for.",
        detail: ["Cutover", "Redirect map", "Hardening", "Backup schedule"],
      },
    ],
    techStack: [
      {
        name: "WordPress",
        note: "Latest stable, block editor native",
      },
      {
        name: "Advanced Custom Fields",
        note: "Structured content for editors",
      },
      {
        name: "WooCommerce",
        note: "When the store needs to live in WordPress",
      },
      {
        name: "WP Rocket / LiteSpeed",
        note: "Page and object caching",
      },
      {
        name: "Cloudflare",
        note: "CDN, image resizing, WAF",
      },
      {
        name: "WP-CLI",
        note: "Scripted migrations and maintenance",
      },
    ],
    stats: [],
    pricingTiers: undefined,
    faqs: [
      {
        question: "Will you keep our content and URLs?",
        answer:
          "We inventory content and URLs before making changes. Existing URLs are retained where practical, and agreed URL changes receive a redirect plan that is tested before launch.",
      },
      {
        question: "What affects the cost of wordpress development?",
        answer:
          "The scope depends on the current setup, the deliverables, integrations and review requirements. We confirm inclusions, exclusions and a delivery schedule in a written proposal before work begins.",
      },
      {
        question: "What should I send with my enquiry?",
        answer:
          "Share your website if you have one, the problem you want to solve and any important constraints. A short description is enough to start; access to accounts can be arranged later.",
      },
    ],
    relatedSlugs: [
      "cms-development",
      "web-design",
      "speed-optimization",
      "website-maintenance",
    ],
    caseStudySlugs: [],
    blogSlugs: [
      "wordpress-vs-webflow-vs-nextjs",
      "core-web-vitals-guide",
      "website-redesign-checklist",
    ],
    industrySlugs: [
      "restaurants-hospitality",
      "healthcare",
      "professional-services",
    ],
    keywords: {
      primary: "WordPress development services",
      secondary: [
        "custom WordPress theme development",
        "WordPress developer agency",
        "WooCommerce development",
        "WordPress speed optimisation",
      ],
      semantic: [
        "block editor",
        "block patterns",
        "Advanced Custom Fields",
        "plugin audit",
        "WP-CLI",
        "object caching",
        "staging environment",
        "security hardening",
        "page builder bloat",
        "headless WordPress",
        "database optimisation",
        "automated backups",
      ],
    },
    meta: {
      title: "WordPress Development Services | Quesiono",
      description:
        "For businesses dealing with awkward editing, outdated plugins, or a theme that no longer fits. We improve the existing setup or build a maintainable replacement.",
    },
    media: {
      imageAlt:
        "WordPress block editor showing custom patterns beside a performance report",
    },
    pricingNote: undefined,
  },
  {
    slug: "shopify-development",
    name: "Shopify Development",
    shortDescription:
      "For merchants who need clearer product pages, more useful collections, or a theme that supports their catalogue. We improve the storefront without adding unnecessary apps.",
    icon: "shopping-bag",
    href: "/services/shopify-development",
    group: "web",
    layoutVariant: "showcase",
    hero: {
      eyebrow: "Shopify Development",
      headline: "A better buying journey for your Shopify store.",
      sub: "For merchants who need clearer product pages, more useful collections, or a theme that supports their catalogue. We improve the storefront without adding unnecessary apps.",
    },
    overview: {
      heading: "Merchandising decisions should shape the theme.",
      paragraphs: [
        "We review how shoppers browse, compare and add products to their cart. Theme changes, app decisions and integrations are then scoped around the obstacles in that journey.",
      ],
    },
    outcomes: [
      "Custom theme (OS 2.0)",
      "Product page design",
      "Cart and checkout",
      "Metafields and metaobjects",
    ],
    deliverablesHeading: "What a Shopify build includes",
    deliverables: [
      {
        icon: "store",
        title: "Custom theme (OS 2.0)",
        description:
          "Hand-written Liquid, JSON templates, and section groups. Every page type gets sections your team can reorder.",
      },
      {
        icon: "shopping-bag",
        title: "Product page design",
        description:
          "Variant selection that makes sense for your catalogue, size and fit guidance, bundles, and stock messaging that doesn't lie.",
      },
      {
        icon: "credit-card",
        title: "Cart and checkout",
        description:
          "Slide cart, shipping-threshold nudges, and Shopify Functions or checkout extensions where Plus allows. Speed protected throughout.",
      },
      {
        icon: "database",
        title: "Metafields and metaobjects",
        description:
          "Structured product data \u2014 materials, care, specs, compatibility \u2014 modelled properly and reusable across templates.",
      },
      {
        icon: "plug",
        title: "App audit and integration",
        description:
          "Every app measured for load cost and overlap. What stays gets integrated into the theme rather than injected into the head.",
      },
      {
        icon: "search",
        title: "Ecommerce SEO foundation",
        description:
          "Collection and product templates with clean canonicals, Product schema, and faceted-navigation rules that don't spawn duplicates.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Store review",
        description:
          "Analytics, checkout funnel, app stack, and a look at where sessions die. We start from your data, not a checklist.",
        detail: [
          "Funnel analysis",
          "App load audit",
          "Theme review",
          "Speed baseline",
        ],
      },
      {
        step: "02",
        title: "Merchandising plan",
        description:
          "Collection structure, product data model, and the templates the catalogue actually needs.",
        detail: ["Collection architecture", "Metafield model", "Template list"],
      },
      {
        step: "03",
        title: "Design and build",
        description:
          "Theme built on a development store with a copy of your real catalogue. Nothing tested against dummy products.",
        detail: [
          "Section design",
          "Liquid build",
          "Metafield setup",
          "Real-catalogue QA",
        ],
      },
      {
        step: "04",
        title: "Integrate and test",
        description:
          "Apps, ERP or 3PL hooks, payment methods, and full test orders through every shipping and tax combination.",
        detail: [
          "App integration",
          "Test orders",
          "Tax and shipping checks",
          "Email templates",
        ],
      },
      {
        step: "05",
        title: "Launch and tune",
        description:
          "Publish the approved theme, verify redirects and review the agreed store journeys after release.",
        detail: [
          "Theme publish",
          "URL redirects",
          "Analytics verification",
          "Two-week tuning",
        ],
      },
    ],
    techStack: [
      {
        name: "Shopify OS 2.0",
        note: "JSON templates, sections everywhere",
      },
      {
        name: "Liquid",
        note: "Hand-written, no theme-builder layer",
      },
      {
        name: "Metaobjects",
        note: "Structured content beyond products",
      },
      {
        name: "Shopify Functions",
        note: "Custom discounts and delivery logic",
      },
      {
        name: "Hydrogen",
        note: "Headless storefront when the catalogue justifies it",
      },
      {
        name: "Klaviyo",
        note: "Email and SMS with real event data",
      },
    ],
    stats: [],
    pricingTiers: undefined,
    faqs: [
      {
        question: "Can you change our checkout?",
        answer:
          "Checkout options depend on your Shopify plan and supported extension points. We review those limits before proposing changes and avoid promising controls your plan cannot support.",
      },
      {
        question: "What affects the cost of shopify development?",
        answer:
          "The scope depends on the current setup, the deliverables, integrations and review requirements. We confirm inclusions, exclusions and a delivery schedule in a written proposal before work begins.",
      },
      {
        question: "What should I send with my enquiry?",
        answer:
          "Share your website if you have one, the problem you want to solve and any important constraints. A short description is enough to start; access to accounts can be arranged later.",
      },
    ],
    relatedSlugs: [
      "ecommerce-development",
      "ecommerce-seo",
      "web-design",
      "speed-optimization",
    ],
    caseStudySlugs: [],
    blogSlugs: [
      "shopify-store-conversion-optimization",
      "core-web-vitals-guide",
      "how-to-build-website-that-converts",
    ],
    industrySlugs: ["ecommerce-retail"],
    keywords: {
      primary: "Shopify development services",
      secondary: [
        "custom Shopify theme development",
        "Shopify Plus agency",
        "Shopify store optimisation",
        "Shopify migration services",
      ],
      semantic: [
        "Online Store 2.0",
        "Liquid templates",
        "metafields",
        "metaobjects",
        "Shopify Functions",
        "Hydrogen",
        "app audit",
        "checkout extensions",
        "product schema",
        "collection architecture",
        "conversion rate",
        "Klaviyo",
      ],
    },
    meta: {
      title: "Shopify Development Services | Quesiono",
      description:
        "For merchants who need clearer product pages, more useful collections, or a theme that supports their catalogue. We improve the storefront without adding unnecessary apps.",
    },
    media: {
      imageAlt:
        "Shopify product page shown on desktop and mobile with a slide-out cart open",
    },
    pricingNote: undefined,
  },
  {
    slug: "cms-development",
    name: "CMS Development",
    shortDescription:
      "For teams whose publishing tools slow them down. We model your content, build useful editing controls, and connect the CMS to your website.",
    icon: "layout-dashboard",
    href: "/services/cms-development",
    group: "web",
    layoutVariant: "stacked",
    hero: {
      eyebrow: "CMS Development",
      headline: "Publish without waiting for a developer.",
      sub: "For teams whose publishing tools slow them down. We model your content, build useful editing controls, and connect the CMS to your website.",
    },
    overview: {
      heading: "The editing experience is part of the product.",
      paragraphs: [
        "We start with who publishes, what they change and who approves it. Content models, previews and permissions should fit that workflow and keep routine changes away from the codebase.",
      ],
    },
    outcomes: [
      "Content modelling",
      "Block library",
      "Live preview",
      "Roles and workflow",
    ],
    deliverablesHeading: "What CMS work includes",
    deliverables: [
      {
        icon: "database",
        title: "Content modelling",
        description:
          "Schemas for every content type, with validation and sensible defaults. Modelled from your real pages, not a generic blog template.",
      },
      {
        icon: "boxes",
        title: "Block library",
        description:
          "Composable page sections editors can reorder freely. Every block has a designed empty state, so a half-filled page still looks intentional.",
      },
      {
        icon: "monitor",
        title: "Live preview",
        description:
          "Draft content rendered in the real template, on the real breakpoints, before publishing.",
      },
      {
        icon: "users",
        title: "Roles and workflow",
        description:
          "Author, editor, and admin permissions with review states where you need approval before publish.",
      },
      {
        icon: "globe",
        title: "Localisation",
        description:
          "Multi-language content with per-locale fields and fallbacks, if you're publishing in more than one market.",
      },
      {
        icon: "book-open",
        title: "Editor documentation",
        description:
          "A short guide written for your team, with screenshots, plus a recorded walkthrough. Not a link to the vendor's docs.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Content audit",
        description:
          "Every existing page catalogued, then grouped into the smallest set of types that covers them all.",
        detail: ["Page inventory", "Content type grouping", "Field mapping"],
      },
      {
        step: "02",
        title: "Model and schema",
        description:
          "Schemas written and reviewed with whoever will actually be typing into them.",
        detail: [
          "Schema definition",
          "Validation rules",
          "Editor review session",
        ],
      },
      {
        step: "03",
        title: "Build blocks",
        description:
          "Each block built as a front-end component and a CMS schema at the same time, so they can't drift.",
        detail: ["Block components", "Preview wiring", "Empty states"],
      },
      {
        step: "04",
        title: "Migrate content",
        description:
          "Existing content moved in \u2014 scripted where the source is structured, by hand where it isn't. Nothing gets lost quietly.",
        detail: [
          "Migration scripts",
          "Manual cleanup",
          "Redirect check",
          "Content QA",
        ],
      },
      {
        step: "05",
        title: "Train and hand over",
        description:
          "Walk through the editing workflow with your team and agree the handover and support arrangements.",
        detail: ["Training session", "Written guide", "Two-week support"],
      },
    ],
    techStack: [
      {
        name: "Sanity",
        note: "Structured content, strong live preview, generous free tier",
      },
      {
        name: "Payload",
        note: "Self-hosted, TypeScript-native, no per-seat cost",
      },
      {
        name: "WordPress (headless)",
        note: "Familiar admin, decoupled front end",
      },
      {
        name: "Next.js",
        note: "Incremental static regeneration on publish",
      },
      {
        name: "Cloudinary / local",
        note: "Image pipeline with automatic formats",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Which CMS should we choose?",
        answer:
          "The choice depends on content relationships, permissions, hosting, integrations and editor familiarity. We compare those requirements before recommending a platform.",
      },
      {
        question: "What affects the cost of cms development?",
        answer:
          "The scope depends on the current setup, the deliverables, integrations and review requirements. We confirm inclusions, exclusions and a delivery schedule in a written proposal before work begins.",
      },
      {
        question: "What should I send with my enquiry?",
        answer:
          "Share your website if you have one, the problem you want to solve and any important constraints. A short description is enough to start; access to accounts can be arranged later.",
      },
    ],
    relatedSlugs: [
      "web-development",
      "wordpress-development",
      "content-writing",
      "custom-development",
    ],
    caseStudySlugs: [],
    blogSlugs: [
      "wordpress-vs-webflow-vs-nextjs",
      "nextjs-14-best-practices",
      "content-strategy-that-actually-works",
    ],
    industrySlugs: ["professional-services", "saas-startups", "healthcare"],
    keywords: {
      primary: "CMS development services",
      secondary: [
        "headless CMS development",
        "Sanity CMS developer",
        "custom CMS integration",
        "content management system setup",
      ],
      semantic: [
        "content modelling",
        "structured content",
        "live preview",
        "block editor",
        "Payload CMS",
        "headless WordPress",
        "incremental static regeneration",
        "editorial workflow",
        "content migration",
        "localisation",
        "role-based permissions",
        "API-first",
      ],
    },
    meta: {
      title: "CMS Development Services | Quesiono",
      description:
        "For teams whose publishing tools slow them down. We model your content, build useful editing controls, and connect the CMS to your website.",
    },
    media: {
      imageAlt:
        "CMS editor interface with a block-based page composer and live preview panel",
    },
    pricingTiers: undefined,
    pricingNote: undefined,
  },
  {
    slug: "custom-development",
    name: "Custom Development",
    shortDescription:
      "For businesses relying on disconnected systems and repeated manual tasks. We build portals, dashboards, and integrations around a defined operational problem.",
    icon: "terminal",
    href: "/services/custom-development",
    group: "web",
    layoutVariant: "split",
    hero: {
      eyebrow: "Custom Development",
      headline: "Software for the work your tools cannot handle.",
      sub: "For businesses relying on disconnected systems and repeated manual tasks. We build portals, dashboards, and integrations around a defined operational problem.",
    },
    overview: {
      heading: "Start with a useful first release.",
      paragraphs: [
        "We map the workflow, data and access rules before writing code. A focused first release makes it possible to test the difficult assumptions with the people who will use the system.",
      ],
    },
    outcomes: [
      "Internal dashboards",
      "Client portals",
      "API and integration work",
      "Booking and scheduling",
    ],
    deliverablesHeading: "What we build",
    deliverables: [
      {
        icon: "layout-dashboard",
        title: "Internal dashboards",
        description:
          "Operational views over your real data \u2014 pipeline, capacity, margin \u2014 instead of a monthly export into a chart nobody trusts.",
      },
      {
        icon: "users",
        title: "Client portals",
        description:
          "Authenticated areas where customers see their own documents, jobs, invoices, or progress. Fewer status emails for your team.",
      },
      {
        icon: "plug",
        title: "API and integration work",
        description:
          "Connecting CRM, accounting, inventory, and email so a record entered once appears everywhere. Webhooks, queues, and retries done properly.",
      },
      {
        icon: "calendar",
        title: "Booking and scheduling",
        description:
          "Availability rules, capacity limits, reminders, rescheduling, and calendar sync \u2014 the details that make or break a booking flow.",
      },
      {
        icon: "database",
        title: "Data modelling and migration",
        description:
          "Schema design, then a careful migration from the spreadsheets and legacy tables, with reconciliation you can check.",
      },
      {
        icon: "shield",
        title: "Auth, roles, and audit",
        description:
          "SSO or email auth, granular permissions, and a log of who changed what. Access rules are defined around the people and data involved.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Workflow mapping",
        description:
          "We sit with the people doing the job and write down what actually happens \u2014 including the workarounds nobody documented.",
        detail: [
          "Process interviews",
          "Current-state map",
          "Pain ranking",
          "Data audit",
        ],
      },
      {
        step: "02",
        title: "Scope the first release",
        description:
          "The narrowest slice that's genuinely useful on its own. Everything else goes on a phase-two list, visibly.",
        detail: [
          "MVP definition",
          "Data model",
          "Integration list",
          "Phase-two backlog",
        ],
      },
      {
        step: "03",
        title: "Build in reviewable stages",
        description:
          "Review working software at agreed milestones and collect feedback before expanding the release.",
        detail: [
          "Fortnightly demos",
          "Staging environment",
          "Rolling feedback",
        ],
      },
      {
        step: "04",
        title: "Migrate and pilot",
        description:
          "Real data in, then a small group runs it in parallel with the old process for a week or two.",
        detail: [
          "Data migration",
          "Reconciliation checks",
          "Pilot group",
          "Training session",
        ],
      },
      {
        step: "05",
        title: "Roll out and hand over",
        description:
          "Full rollout, documentation, and a support window. If you have developers, we bring them in during build rather than at the end.",
        detail: [
          "Rollout plan",
          "Documentation",
          "Developer handover",
          "Support window",
        ],
      },
    ],
    techStack: [
      {
        name: "Next.js",
        note: "One codebase for UI and API routes",
      },
      {
        name: "PostgreSQL",
        note: "Relational data with real constraints",
      },
      {
        name: "Prisma",
        note: "Typed queries and versioned migrations",
      },
      {
        name: "TypeScript",
        note: "Types shared between client and server",
      },
      {
        name: "Auth.js",
        note: "SSO, email, and role-based access",
      },
      {
        name: "Stripe",
        note: "Payments, subscriptions, and invoicing",
      },
      {
        name: "Playwright",
        note: "Automated tests on critical paths",
      },
      {
        name: "Railway / Vercel",
        note: "Managed hosting without a platform team",
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Can you connect to our existing systems?",
        answer:
          "We review APIs, authentication, rate limits and data ownership during discovery. Where no API exists, we assess supported exports or another reliable integration route.",
      },
      {
        question: "What affects the cost of custom development?",
        answer:
          "The scope depends on the current setup, the deliverables, integrations and review requirements. We confirm inclusions, exclusions and a delivery schedule in a written proposal before work begins.",
      },
      {
        question: "What should I send with my enquiry?",
        answer:
          "Share your website if you have one, the problem you want to solve and any important constraints. A short description is enough to start; access to accounts can be arranged later.",
      },
    ],
    relatedSlugs: [
      "web-development",
      "ui-ux-design",
      "cms-development",
      "website-maintenance",
    ],
    caseStudySlugs: [],
    blogSlugs: [
      "nextjs-14-best-practices",
      "automating-your-workflow-tools-tips",
      "how-much-does-a-website-cost",
    ],
    industrySlugs: [
      "saas-startups",
      "professional-services",
      "healthcare",
      "real-estate",
    ],
    keywords: {
      primary: "custom web application development",
      secondary: [
        "custom software development company",
        "client portal development",
        "internal dashboard development",
        "API integration services",
      ],
      semantic: [
        "web application",
        "PostgreSQL",
        "Prisma",
        "role-based access control",
        "single sign-on",
        "data migration",
        "webhooks",
        "REST API",
        "audit log",
        "MVP scope",
        "Stripe integration",
        "staging environment",
      ],
    },
    meta: {
      title: "Custom Development Services | Quesiono",
      description:
        "For businesses relying on disconnected systems and repeated manual tasks. We build portals, dashboards, and integrations around a defined operational problem.",
    },
    media: {
      imageAlt:
        "Custom dashboard interface showing operational data tables and charts",
    },
    pricingTiers: undefined,
    pricingNote: undefined,
  },
  {
    slug: "landing-page-development",
    name: "Landing Page Development",
    navLabel: "Landing Pages",
    shortDescription:
      "For paid campaigns and launches that send visitors to a generic homepage. We build a focused message, a clear offer, and a measurable next step.",
    icon: "target",
    href: "/services/landing-page-development",
    group: "web",
    layoutVariant: "showcase",
    hero: {
      eyebrow: "Landing Page Development",
      headline: "Give each campaign a page with a purpose.",
      sub: "For paid campaigns and launches that send visitors to a generic homepage. We build a focused message, a clear offer, and a measurable next step.",
    },
    overview: {
      heading: "Match the page to the promise in the ad.",
      paragraphs: [
        "A campaign page should answer the question that brought someone there. We align copy, evidence and form design with that intent, then define the events needed to assess performance.",
      ],
    },
    outcomes: [
      "Page design and copy structure",
      "Fast static build",
      "Forms and lead routing",
      "Conversion tracking",
    ],
    deliverablesHeading: "What you get",
    deliverables: [
      {
        icon: "file-text",
        title: "Page design and copy structure",
        description:
          "Hero, proof, objection handling, offer, and close. We write the structural copy and shape yours to fit the flow.",
      },
      {
        icon: "zap",
        title: "Fast static build",
        description:
          "Statically generated, images pre-sized, critical CSS inlined, fonts self-hosted. Nothing loads that the page doesn't need.",
      },
      {
        icon: "clipboard",
        title: "Forms and lead routing",
        description:
          "Validated forms with honest error states, spam protection, CRM handoff, and an autoresponder that doesn't look like a receipt.",
      },
      {
        icon: "bar-chart",
        title: "Conversion tracking",
        description:
          "GA4 events, Google Ads and Meta conversion APIs, and a call-tracking number if you take phone leads. Tested end to end.",
      },
      {
        icon: "layers",
        title: "Variants for testing",
        description:
          "Two or three headline and offer variants set up so you can test from day one instead of guessing.",
      },
      {
        icon: "shield",
        title: "Compliance basics",
        description:
          "Cookie consent, privacy links, and \u2014 for regulated industries \u2014 the disclosure language your ad account will ask for.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Offer and audience",
        description:
          "What's being offered, to whom, arriving from which ad. Wrong answer here and nothing downstream helps.",
        detail: [
          "Offer definition",
          "Traffic source review",
          "Competitor page teardown",
        ],
      },
      {
        step: "02",
        title: "Structure and copy",
        description:
          "Section order, headline options, and the objections the page has to answer before the form.",
        detail: [
          "Wireframe",
          "Headline variants",
          "Objection list",
          "CTA placement",
        ],
      },
      {
        step: "03",
        title: "Design and build",
        description:
          "Develop the content and page layout together, then implement the approved campaign journey.",
        detail: [
          "Visual design",
          "Static build",
          "Mobile pass",
          "Form integration",
        ],
      },
      {
        step: "04",
        title: "Instrument",
        description:
          "Tracking wired and verified with real submissions. We check the CRM received them before we call it live.",
        detail: [
          "GA4 events",
          "Ads and Meta conversion APIs",
          "CRM test submissions",
          "Call tracking",
        ],
      },
      {
        step: "05",
        title: "Launch and read",
        description:
          "After launch, review the agreed events and available traffic data before proposing further changes.",
        detail: [
          "Go live",
          "14-day review",
          "Heatmap read",
          "Optimisation list",
        ],
      },
    ],
    stats: [],
    pricingTiers: undefined,
    faqs: [
      {
        question: "Can we test more than one version?",
        answer:
          "Yes. Variants can be included in the scope. A useful test needs a clear hypothesis, sufficient traffic and an agreed conversion event; a new design alone does not prove a lift.",
      },
      {
        question: "What affects the cost of landing page development?",
        answer:
          "The scope depends on the current setup, the deliverables, integrations and review requirements. We confirm inclusions, exclusions and a delivery schedule in a written proposal before work begins.",
      },
      {
        question: "What should I send with my enquiry?",
        answer:
          "Share your website if you have one, the problem you want to solve and any important constraints. A short description is enough to start; access to accounts can be arranged later.",
      },
    ],
    relatedSlugs: [
      "web-design",
      "web-development",
      "ui-ux-design",
      "speed-optimization",
    ],
    caseStudySlugs: [],
    blogSlugs: [
      "how-to-build-website-that-converts",
      "ux-design-principles-that-increase-conversions",
      "core-web-vitals-guide",
    ],
    industrySlugs: ["healthcare", "real-estate", "professional-services"],
    keywords: {
      primary: "landing page development services",
      secondary: [
        "high-converting landing page design",
        "PPC landing page builder",
        "lead generation landing pages",
        "custom landing page design",
      ],
      semantic: [
        "conversion rate optimisation",
        "message match",
        "A/B testing",
        "GA4 conversion events",
        "Google Ads conversion tracking",
        "form validation",
        "call tracking",
        "bounce rate",
        "above the fold",
        "cost per lead",
        "static site generation",
        "heatmaps",
      ],
    },
    meta: {
      title: "Landing Page Development Services | Quesiono",
      description:
        "For paid campaigns and launches that send visitors to a generic homepage. We build a focused message, a clear offer, and a measurable next step.",
    },
    media: {
      imageAlt:
        "Landing page shown on a phone alongside a conversion tracking dashboard",
    },
    pricingNote: undefined,
  },
  {
    slug: "website-maintenance",
    name: "Website Maintenance",
    navLabel: "Maintenance & Support",
    shortDescription:
      "For teams that need help with updates, backups, content changes, and recurring checks. Start with a review of the site and a support scope you can understand.",
    icon: "wrench",
    href: "/services/website-maintenance",
    group: "web",
    layoutVariant: "stacked",
    hero: {
      eyebrow: "Website Maintenance",
      headline: "Keep the website working while you run the business.",
      sub: "For teams that need help with updates, backups, content changes, and recurring checks. Start with a review of the site and a support scope you can understand.",
    },
    overview: {
      heading: "Maintenance should make responsibilities clear.",
      paragraphs: [
        "We inventory the site, hosting and dependencies, then agree what is monitored, what is updated and how incidents are handled. Support hours and response targets belong in the written plan.",
      ],
    },
    outcomes: [
      "Updates and patching",
      "Backups and restore testing",
      "Uptime and performance monitoring",
      "Link, form, and integration checks",
    ],
    deliverablesHeading: "What's covered",
    deliverables: [
      {
        icon: "shield",
        title: "Updates and patching",
        description:
          "Core, plugins, and dependencies. Staged, visually regression-checked, then deployed with a restore point ready.",
      },
      {
        icon: "database",
        title: "Backups and restore testing",
        description:
          "Agree a backup schedule, retention period and restore testing appropriate to the site and hosting arrangement.",
      },
      {
        icon: "activity",
        title: "Uptime and performance monitoring",
        description:
          "One-minute uptime checks and monthly Core Web Vitals tracking. Alerts route to us first so we're often fixing before you notice.",
      },
      {
        icon: "link2",
        title: "Link, form, and integration checks",
        description:
          "Schedule link and form checks, including the agreed downstream integrations, and document any issues found.",
      },
      {
        icon: "file-edit",
        title: "Content and tweak hours",
        description:
          "A monthly pool for copy edits, new blog posts, image swaps, and small layout changes. Unused hours roll over one month.",
      },
      {
        icon: "lifebuoy",
        title: "Priority support",
        description:
          "A named contact, a real SLA, and emergency response for anything that takes the site down or breaks checkout.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Onboarding audit",
        description:
          "We inventory hosting, dependencies, integrations, and access, then fix whatever is already urgent.",
        detail: [
          "Access inventory",
          "Dependency audit",
          "Security scan",
          "Immediate fixes",
        ],
      },
      {
        step: "02",
        title: "Set up monitoring",
        description:
          "Uptime, performance, error tracking, and backups configured and verified. Alerts routed to our on-call.",
        detail: [
          "Uptime checks",
          "Error tracking",
          "Backup schedule",
          "Alert routing",
        ],
      },
      {
        step: "03",
        title: "Monthly cycle",
        description:
          "Updates on staging, regression check, deploy, then link and form verification.",
        detail: [
          "Staged updates",
          "Visual regression",
          "Production deploy",
          "Form testing",
        ],
      },
      {
        step: "04",
        title: "Report and recommend",
        description:
          "A short written report with what changed and what we'd do next. No dashboard link you'll never open.",
        detail: ["Written report", "Metrics trend", "Recommendations"],
      },
      {
        step: "05",
        title: "Quarterly review",
        description:
          "A call to look at the quarter, test a real backup restore, and plan anything larger.",
        detail: ["Restore test", "Quarter review call", "Roadmap update"],
      },
    ],
    stats: [],
    pricingTiers: undefined,
    pricingNote: undefined,
    faqs: [
      {
        question: "Can you maintain a site another agency built?",
        answer:
          "Yes, subject to an initial review and access to the necessary accounts. Unsupported dependencies or existing faults may need a separate remediation scope.",
      },
      {
        question: "What affects the cost of website maintenance?",
        answer:
          "The scope depends on the current setup, the deliverables, integrations and review requirements. We confirm inclusions, exclusions and a delivery schedule in a written proposal before work begins.",
      },
      {
        question: "What should I send with my enquiry?",
        answer:
          "Share your website if you have one, the problem you want to solve and any important constraints. A short description is enough to start; access to accounts can be arranged later.",
      },
    ],
    relatedSlugs: [
      "speed-optimization",
      "wordpress-development",
      "web-development",
      "technical-seo",
    ],
    caseStudySlugs: [],
    blogSlugs: [
      "core-web-vitals-guide",
      "technical-seo-audit-checklist",
      "automating-your-workflow-tools-tips",
    ],
    industrySlugs: [
      "healthcare",
      "professional-services",
      "restaurants-hospitality",
    ],
    keywords: {
      primary: "website maintenance services",
      secondary: [
        "website support plans",
        "WordPress maintenance service",
        "monthly website care plan",
        "website monitoring and backups",
      ],
      semantic: [
        "security patching",
        "offsite backups",
        "restore testing",
        "uptime monitoring",
        "Core Web Vitals",
        "staging environment",
        "visual regression testing",
        "broken link check",
        "SSL renewal",
        "dependency updates",
        "SLA",
        "error tracking",
      ],
    },
    meta: {
      title: "Website Maintenance Services | Quesiono",
      description:
        "For teams that need help with updates, backups, content changes, and recurring checks. Start with a review of the site and a support scope you can understand.",
    },
    media: {
      imageAlt:
        "Monitoring dashboard showing uptime, performance trends, and recent deployments",
    },
  },
  {
    slug: "speed-optimization",
    name: "Speed Optimization",
    navLabel: "Speed & Core Web Vitals",
    shortDescription:
      "For websites that feel slow, shift as they load, or respond poorly on mobile. We measure the bottlenecks, implement targeted fixes, and compare the same journeys afterwards.",
    icon: "gauge",
    href: "/services/speed-optimization",
    group: "web",
    featured: true,
    layoutVariant: "editorial",
    hero: {
      eyebrow: "Speed Optimization",
      headline: "Find what slows your website down. Fix what matters.",
      sub: "For websites that feel slow, shift as they load, or respond poorly on mobile. We measure the bottlenecks, implement targeted fixes, and compare the same journeys afterwards.",
    },
    overview: {
      heading: "A useful performance review starts with a baseline.",
      paragraphs: [
        "Images, scripts, third-party tools and server response can affect different parts of the experience. We separate those causes and prioritize changes by user impact rather than chasing one lab score.",
      ],
    },
    outcomes: ["Real profiling", "LCP work", "CLS fixes", "INP and JavaScript"],
    deliverablesHeading: "How we make sites faster",
    deliverables: [
      {
        icon: "activity",
        title: "Real profiling",
        description:
          "DevTools traces on throttled mobile, plus your Search Console field data. We diagnose from evidence, not from a checklist.",
      },
      {
        icon: "target",
        title: "LCP work",
        description:
          "Hero image sizing and formats, preloads, font display strategy, and server response time. Usually the biggest single win.",
      },
      {
        icon: "ruler",
        title: "CLS fixes",
        description:
          "Dimension attributes on images and embeds, space reserved for ads and banners, and font metric overrides to stop the reflow.",
      },
      {
        icon: "zap",
        title: "INP and JavaScript",
        description:
          "Bundle analysis, code splitting, deferred hydration, and long-task breakup so taps respond immediately.",
      },
      {
        icon: "plug",
        title: "Third-party audit",
        description:
          "Every tag measured for what it costs. Chat widgets, heatmaps, and duplicate analytics are where most of the weight hides.",
      },
      {
        icon: "gauge",
        title: "Performance budget",
        description:
          "Lighthouse CI on pull requests with thresholds that fail the build. Keeps a fast site fast after we leave.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Baseline",
        description:
          "Lab and field measurements on your key templates, recorded so improvement is provable rather than felt.",
        detail: [
          "Lighthouse runs",
          "DevTools traces",
          "Search Console field data",
          "Real-device tests",
        ],
      },
      {
        step: "02",
        title: "Diagnose",
        description:
          "What's blocking the render, in order. Each item gets an estimated gain and an effort cost.",
        detail: [
          "Waterfall analysis",
          "Bundle analysis",
          "Third-party cost",
          "Ranked fix list",
        ],
      },
      {
        step: "03",
        title: "Fix",
        description:
          "Highest impact first, re-measured after each change so we know which fix earned which second.",
        detail: [
          "Image pipeline",
          "Font strategy",
          "Script deferral",
          "Caching and CDN",
        ],
      },
      {
        step: "04",
        title: "Verify",
        description:
          "Re-test on real devices and across templates, then confirm nothing broke visually.",
        detail: [
          "Real-device retest",
          "Cross-template check",
          "Visual regression",
        ],
      },
      {
        step: "05",
        title: "Protect",
        description:
          "A budget in CI and a short guide for your team on what tends to undo this work.",
        detail: [
          "Lighthouse CI",
          "Budget thresholds",
          "Team guidance",
          "Before/after report",
        ],
      },
    ],
    stats: [],
    pricingTiers: undefined,
    faqs: [
      {
        question: "Do you guarantee a Lighthouse score?",
        answer:
          "No. Scores vary with devices, networks, page content and third-party tools. We agree a measurement method, record a baseline and document the effect of each implemented change.",
      },
      {
        question: "What affects the cost of speed optimization?",
        answer:
          "The scope depends on the current setup, the deliverables, integrations and review requirements. We confirm inclusions, exclusions and a delivery schedule in a written proposal before work begins.",
      },
      {
        question: "What should I send with my enquiry?",
        answer:
          "Share your website if you have one, the problem you want to solve and any important constraints. A short description is enough to start; access to accounts can be arranged later.",
      },
    ],
    relatedSlugs: [
      "technical-seo",
      "web-development",
      "website-maintenance",
      "wordpress-development",
    ],
    caseStudySlugs: [],
    blogSlugs: [
      "core-web-vitals-guide",
      "technical-seo-audit-checklist",
      "nextjs-14-best-practices",
    ],
    industrySlugs: [
      "ecommerce-retail",
      "saas-startups",
      "professional-services",
    ],
    keywords: {
      primary: "website speed optimization services",
      secondary: [
        "Core Web Vitals optimisation",
        "page speed optimisation service",
        "improve Largest Contentful Paint",
        "website performance audit",
      ],
      semantic: [
        "LCP",
        "CLS",
        "INP",
        "Lighthouse",
        "Chrome DevTools",
        "field data",
        "render-blocking resources",
        "code splitting",
        "image compression",
        "WebP and AVIF",
        "CDN caching",
        "performance budget",
        "third-party scripts",
        "time to first byte",
      ],
    },
    meta: {
      title: "Speed Optimization Services | Quesiono",
      description:
        "For websites that feel slow, shift as they load, or respond poorly on mobile. We measure the bottlenecks, implement targeted fixes, and compare the same journeys afterwards.",
    },
    media: {
      imageAlt:
        "Performance waterfall chart beside before and after Core Web Vitals scores",
    },
    pricingNote: undefined,
  },
  {
    slug: "seo",
    name: "SEO Services",
    navLabel: "SEO",
    shortDescription:
      "For businesses whose website is difficult to discover in search. We connect technical fixes, search intent, and useful content to a focused organic growth plan.",
    icon: "search",
    href: "/services/seo",
    group: "seo",
    featured: true,
    layoutVariant: "split",
    hero: {
      eyebrow: "SEO Services",
      headline: "Help the right customers find the right pages.",
      sub: "For businesses whose website is difficult to discover in search. We connect technical fixes, search intent, and useful content to a focused organic growth plan.",
    },
    overview: {
      heading: "Search visibility needs a business purpose.",
      paragraphs: [
        "We identify which services and products matter commercially, examine how people search for them, and check whether your site has useful, accessible pages that answer those needs.",
      ],
    },
    outcomes: [
      "Technical audit",
      "Keyword and intent mapping",
      "On-page optimisation",
      "Content plan and briefs",
    ],
    deliverablesHeading: "What's in an SEO engagement",
    deliverables: [
      {
        icon: "file-search",
        title: "Technical audit",
        description:
          "Crawl, index coverage, site architecture, Core Web Vitals, structured data, and canonicals. Prioritised by impact on visibility.",
      },
      {
        icon: "target",
        title: "Keyword and intent mapping",
        description:
          "Every target query assigned to one page, grouped by intent. No two pages competing for the same term.",
      },
      {
        icon: "file-edit",
        title: "On-page optimisation",
        description:
          "Titles, meta descriptions, heading structure, internal links, and content depth on the pages closest to breaking through.",
      },
      {
        icon: "book-open",
        title: "Content plan and briefs",
        description:
          "A publishing calendar with a brief per piece: target query, search intent, angle, sources, and internal links.",
      },
      {
        icon: "link2",
        title: "Authority building",
        description:
          "Digital PR, resource placements, and citations. Manual outreach only \u2014 no link networks, no paid placements that carry a penalty risk.",
      },
      {
        icon: "bar-chart",
        title: "Reporting that answers questions",
        description:
          "Rankings, non-branded organic traffic, conversions, and what we did. Written in sentences, not left for you to interpret from a dashboard.",
      },
    ],
    processHeading: "How an SEO engagement runs",
    process: [
      {
        step: "01",
        title: "Audit and baseline",
        description:
          "Establish the current technical condition, relevant competitors and a baseline for the agreed search measures.",
        detail: [
          "Technical crawl",
          "Competitor gap analysis",
          "Baseline rankings",
          "Analytics review",
        ],
      },
      {
        step: "02",
        title: "Fix the foundation",
        description:
          "Crawl and index issues, speed, structure. Content published onto a broken foundation underperforms.",
        detail: [
          "Index coverage fixes",
          "Site architecture",
          "Core Web Vitals",
          "Structured data",
        ],
      },
      {
        step: "03",
        title: "Harvest the near misses",
        description:
          "Pages ranking 8\u201320 improved first. Fastest wins available, because the hard part is already done.",
        detail: [
          "Position 8\u201320 audit",
          "Content expansion",
          "Internal linking",
          "Title and meta rewrites",
        ],
      },
      {
        step: "04",
        title: "Fill the gaps",
        description:
          "New pages for the intents you don't cover yet, published on a steady cadence rather than in one burst.",
        detail: [
          "Content briefs",
          "Publishing calendar",
          "New landing pages",
          "Topic clusters",
        ],
      },
      {
        step: "05",
        title: "Build authority",
        description:
          "Outreach and digital PR, once there's something on the site genuinely worth linking to.",
        detail: [
          "Link prospecting",
          "Outreach campaigns",
          "Digital PR",
          "Citation cleanup",
        ],
      },
    ],
    techStack: [
      {
        name: "Google Search Console",
        note: "Field truth for queries and index coverage",
      },
      {
        name: "Ahrefs",
        note: "Backlinks, keyword difficulty, competitor gaps",
      },
      {
        name: "Screaming Frog",
        note: "Deep technical crawls",
      },
      {
        name: "GA4",
        note: "Organic conversions, not just sessions",
      },
      {
        name: "Looker Studio",
        note: "The dashboard behind the written report",
      },
      {
        name: "Semrush",
        note: "Rank tracking and SERP feature monitoring",
      },
    ],
    stats: [],
    pricingTiers: undefined,
    pricingNote: undefined,
    faqs: [
      {
        question: "How quickly will SEO produce results?",
        answer:
          "There is no fixed ranking timeline. Competition, site condition and search demand all matter. Early work establishes a baseline and resolves blockers; ongoing reporting tracks agreed business and search measures.",
      },
      {
        question: "What affects the cost of seo services?",
        answer:
          "The scope depends on the current setup, the deliverables, integrations and review requirements. We confirm inclusions, exclusions and a delivery schedule in a written proposal before work begins.",
      },
      {
        question: "What should I send with my enquiry?",
        answer:
          "Share your website if you have one, the problem you want to solve and any important constraints. A short description is enough to start; access to accounts can be arranged later.",
      },
    ],
    relatedSlugs: [
      "technical-seo",
      "on-page-seo",
      "keyword-research",
      "local-seo",
    ],
    caseStudySlugs: [],
    blogSlugs: [
      "seo-basics-getting-started-2025",
      "technical-seo-audit-checklist",
      "local-seo-strategy-small-business",
      "core-web-vitals-guide",
    ],
    industrySlugs: [
      "professional-services",
      "healthcare",
      "ecommerce-retail",
      "real-estate",
    ],
    keywords: {
      primary: "SEO services",
      secondary: [
        "SEO agency",
        "search engine optimisation services",
        "organic growth agency",
        "SEO consulting",
      ],
      semantic: [
        "keyword research",
        "search intent",
        "technical audit",
        "index coverage",
        "SERP features",
        "backlink profile",
        "topic clusters",
        "internal linking",
        "Google Search Console",
        "non-branded traffic",
        "domain authority",
        "content gap analysis",
      ],
    },
    meta: {
      title: "SEO Services Services | Quesiono",
      description:
        "For businesses whose website is difficult to discover in search. We connect technical fixes, search intent, and useful content to a focused organic growth plan.",
    },
    media: {
      imageAlt:
        "Search Console query report beside a rising organic traffic chart",
    },
  },
  {
    slug: "technical-seo",
    name: "Technical SEO",
    parentService: "seo",
    shortDescription:
      "For websites with indexing problems, duplicate pages, migration risks, or difficult rendering. We investigate the causes and give your team a prioritized implementation plan.",
    icon: "settings",
    href: "/services/seo/technical-seo",
    group: "seo",
    featured: true,
    layoutVariant: "split",
    hero: {
      eyebrow: "Technical SEO",
      headline: "Remove the technical barriers to being found.",
      sub: "For websites with indexing problems, duplicate pages, migration risks, or difficult rendering. We investigate the causes and give your team a prioritized implementation plan.",
    },
    overview: {
      heading: "An audit should tell you what to fix and why.",
      paragraphs: [
        "We use crawl data, Search Console and available logs to identify problems affecting important pages. Findings include evidence, affected URLs, recommended actions and a way to verify the fix.",
      ],
    },
    outcomes: [
      "Full crawl and log analysis",
      "Site architecture",
      "Canonicals and duplicates",
      "Rendering and JavaScript SEO",
    ],
    deliverablesHeading: "What a technical SEO engagement covers",
    deliverables: [
      {
        icon: "file-search",
        title: "Full crawl and log analysis",
        description:
          "Screaming Frog crawl against Search Console coverage, plus server logs where available to see what Googlebot actually requested.",
      },
      {
        icon: "signpost",
        title: "Site architecture",
        description:
          "Click depth, orphan pages, and internal link distribution. Important pages should be three clicks from home, not seven.",
      },
      {
        icon: "link2",
        title: "Canonicals and duplicates",
        description:
          "Parameter handling, filter and sort URLs, trailing slashes, protocol and www consistency, and redirect chains collapsed.",
      },
      {
        icon: "code2",
        title: "Rendering and JavaScript SEO",
        description:
          "What Google sees versus what your browser sees, checked page type by page type. Server-side rendering where it's needed.",
      },
      {
        icon: "boxes",
        title: "Structured data",
        description:
          "Schema for your page types \u2014 Organization, Service, Product, Article, FAQ, LocalBusiness \u2014 validated and monitored for errors.",
      },
      {
        icon: "gauge",
        title: "Core Web Vitals",
        description:
          "Field data by template, with the specific fixes for each. Overlaps with our speed work and often runs alongside it.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Crawl",
        description:
          "Full crawl, index coverage export, and log files if we can get them. Data before opinions.",
        detail: [
          "Site crawl",
          "Coverage export",
          "Log analysis",
          "Rendering tests",
        ],
      },
      {
        step: "02",
        title: "Diagnose",
        description:
          "Every issue documented with the affected URLs, the cause, and what it's costing you.",
        detail: [
          "Issue register",
          "Affected URL lists",
          "Impact estimate",
          "Priority order",
        ],
      },
      {
        step: "03",
        title: "Fix",
        description:
          "We implement, or write tickets specific enough that your developers can. Either works.",
        detail: ["Implementation", "Developer tickets", "Staging verification"],
      },
      {
        step: "04",
        title: "Validate",
        description:
          "Repeat the relevant crawl, rendering and structured-data checks, then monitor index coverage without assuming recovery.",
        detail: [
          "Re-crawl",
          "Schema validation",
          "Coverage monitoring",
          "URL inspection",
        ],
      },
      {
        step: "05",
        title: "Monitor",
        description:
          "Alerts on coverage drops and schema errors so the next regression surfaces in days, not next quarter.",
        detail: [
          "Coverage alerts",
          "Schema monitoring",
          "Documentation",
          "Handover",
        ],
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Is implementation included?",
        answer:
          "Audit-only and implementation engagements are scoped separately. We can make agreed fixes in your codebase or work with your developers to validate their changes.",
      },
      {
        question: "What affects the cost of technical seo?",
        answer:
          "The scope depends on the current setup, the deliverables, integrations and review requirements. We confirm inclusions, exclusions and a delivery schedule in a written proposal before work begins.",
      },
      {
        question: "What should I send with my enquiry?",
        answer:
          "Share your website if you have one, the problem you want to solve and any important constraints. A short description is enough to start; access to accounts can be arranged later.",
      },
    ],
    relatedSlugs: [
      "seo",
      "speed-optimization",
      "on-page-seo",
      "web-development",
    ],
    caseStudySlugs: [],
    blogSlugs: [
      "technical-seo-audit-checklist",
      "core-web-vitals-guide",
      "seo-basics-getting-started-2025",
    ],
    industrySlugs: ["ecommerce-retail", "saas-startups", "real-estate"],
    keywords: {
      primary: "technical SEO services",
      secondary: [
        "technical SEO audit",
        "crawlability and indexing fixes",
        "JavaScript SEO",
        "structured data implementation",
      ],
      semantic: [
        "crawl budget",
        "index coverage",
        "canonical tags",
        "robots.txt",
        "XML sitemap",
        "redirect chains",
        "hreflang",
        "faceted navigation",
        "log file analysis",
        "server-side rendering",
        "schema markup",
        "Core Web Vitals",
        "orphan pages",
        "click depth",
      ],
    },
    meta: {
      title: "Technical SEO Services | Quesiono",
      description:
        "For websites with indexing problems, duplicate pages, migration risks, or difficult rendering. We investigate the causes and give your team a prioritized implementation plan.",
    },
    media: {
      imageAlt:
        "Site crawl visualisation showing click depth and index coverage by page type",
    },
    pricingTiers: undefined,
    pricingNote: undefined,
  },
  {
    slug: "keyword-research",
    name: "Keyword Research",
    parentService: "seo",
    shortDescription:
      "For teams investing in content without a clear picture of customer demand. We map relevant queries to intent, priorities, and pages you can actually create.",
    icon: "target",
    href: "/services/seo/keyword-research",
    group: "seo",
    layoutVariant: "split",
    hero: {
      eyebrow: "Keyword Research",
      headline: "Know which searches deserve a page.",
      sub: "For teams investing in content without a clear picture of customer demand. We map relevant queries to intent, priorities, and pages you can actually create.",
    },
    overview: {
      heading: "A keyword list is only useful when it leads to decisions.",
      paragraphs: [
        "We connect search language with your offer and customer questions. The result groups topics by intent, identifies gaps and separates opportunities for existing pages from those needing new content.",
      ],
    },
    outcomes: [
      "Seed and expansion research",
      "Intent classification",
      "Realistic difficulty scoring",
      "Topic clusters",
    ],
    deliverablesHeading: "What you receive",
    deliverables: [
      {
        icon: "file-search",
        title: "Seed and expansion research",
        description:
          "Your terms, your competitors', Search Console's actual queries, autocomplete, forum and Reddit language, and support-ticket phrasing.",
      },
      {
        icon: "compass",
        title: "Intent classification",
        description:
          "Every query labelled by stage and by the page type the SERP currently rewards. Prevents building the wrong asset.",
      },
      {
        icon: "scale",
        title: "Realistic difficulty scoring",
        description:
          "Not just the tool's number \u2014 who ranks now, how strong they are, and whether a site with your profile can displace them.",
      },
      {
        icon: "layers",
        title: "Topic clusters",
        description:
          "Queries grouped into clusters, each with a pillar page and supporting pieces, and the internal links between them mapped.",
      },
      {
        icon: "signpost",
        title: "Keyword-to-page map",
        description:
          "One primary query per page plus secondaries. Existing pages assigned, gaps flagged as pages to create.",
      },
      {
        icon: "calendar",
        title: "Sequenced roadmap",
        description:
          "A prioritized roadmap connecting topic clusters to business relevance, available resources and likely effort.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Understand the offer",
        description:
          "What you sell, at what price, to whom, and what they call it \u2014 which is often not what you call it.",
        detail: [
          "Offer review",
          "Buyer language",
          "Sales call listening",
          "Support ticket scan",
        ],
      },
      {
        step: "02",
        title: "Expand",
        description:
          "Every source we can reach, deduplicated into one master list before any filtering happens.",
        detail: [
          "Tool exports",
          "Competitor gaps",
          "Search Console queries",
          "Community language",
        ],
      },
      {
        step: "03",
        title: "Classify",
        description:
          "Intent, stage, and expected page type for each query. This is the judgement-heavy part.",
        detail: [
          "Intent labelling",
          "SERP format check",
          "Commercial value estimate",
        ],
      },
      {
        step: "04",
        title: "Score and cluster",
        description:
          "Realistic difficulty against your domain, then grouped into topic clusters with pillars identified.",
        detail: [
          "Difficulty scoring",
          "Clustering",
          "Pillar selection",
          "Internal link map",
        ],
      },
      {
        step: "05",
        title: "Sequence and hand over",
        description:
          "Review the roadmap together and agree the priorities, dependencies and planning horizon.",
        detail: [
          "Roadmap",
          "Page map",
          "Walkthrough call",
          "Editable spreadsheet",
        ],
      },
    ],
    stats: [],
    pricingTiers: undefined,
    faqs: [
      {
        question: "Will you include a content plan?",
        answer:
          "The agreed deliverable can include a keyword-to-page map and a prioritized content roadmap. Full article briefs and writing can be added as separate work.",
      },
      {
        question: "What affects the cost of keyword research?",
        answer:
          "The scope depends on the current setup, the deliverables, integrations and review requirements. We confirm inclusions, exclusions and a delivery schedule in a written proposal before work begins.",
      },
      {
        question: "What should I send with my enquiry?",
        answer:
          "Share your website if you have one, the problem you want to solve and any important constraints. A short description is enough to start; access to accounts can be arranged later.",
      },
    ],
    relatedSlugs: ["seo", "on-page-seo", "content-writing", "ecommerce-seo"],
    caseStudySlugs: [],
    blogSlugs: [
      "seo-basics-getting-started-2025",
      "content-strategy-that-actually-works",
      "local-seo-strategy-small-business",
    ],
    industrySlugs: [
      "saas-startups",
      "ecommerce-retail",
      "professional-services",
    ],
    keywords: {
      primary: "keyword research services",
      secondary: [
        "search intent mapping",
        "SEO keyword strategy",
        "topic cluster research",
        "competitor keyword gap analysis",
      ],
      semantic: [
        "long-tail keywords",
        "keyword difficulty",
        "search volume",
        "SERP analysis",
        "commercial intent",
        "pillar page",
        "content cluster",
        "keyword mapping",
        "share of voice",
        "zero-click search",
        "autocomplete research",
        "buyer journey stage",
      ],
    },
    meta: {
      title: "Keyword Research Services | Quesiono",
      description:
        "For teams investing in content without a clear picture of customer demand. We map relevant queries to intent, priorities, and pages you can actually create.",
    },
    media: {
      imageAlt: "Keyword map showing topic clusters connected to pillar pages",
    },
    pricingNote: undefined,
  },
  {
    slug: "on-page-seo",
    name: "On-Page SEO",
    parentService: "seo",
    shortDescription:
      "For sites with relevant content that is poorly structured or competing with itself. We improve page intent, headings, internal links, and metadata.",
    icon: "file-edit",
    href: "/services/seo/on-page-seo",
    group: "seo",
    layoutVariant: "stacked",
    hero: {
      eyebrow: "On-Page SEO",
      headline: "Give useful pages a clearer search purpose.",
      sub: "For sites with relevant content that is poorly structured or competing with itself. We improve page intent, headings, internal links, and metadata.",
    },
    overview: {
      heading: "Help visitors and search engines understand the same page.",
      paragraphs: [
        "We review the query, the page and the next step together. Changes should make the page more useful to a reader while clarifying its relationship to the rest of your site.",
      ],
    },
    outcomes: [
      "Keyword-to-page mapping",
      "Titles and meta descriptions",
      "Heading structure and depth",
      "Internal linking",
    ],
    deliverablesHeading: "What on-page work includes",
    deliverables: [
      {
        icon: "target",
        title: "Keyword-to-page mapping",
        description:
          "Every target query assigned to exactly one page. We find and resolve the cases where two of your pages compete with each other.",
      },
      {
        icon: "file-text",
        title: "Titles and meta descriptions",
        description:
          "Rewritten for the query and for the click. Tracked in Search Console so we know whether CTR actually improved.",
      },
      {
        icon: "layers",
        title: "Heading structure and depth",
        description:
          "A logical H1\u2013H3 outline that covers what the top results cover, plus whatever they miss. Structure and substance together.",
      },
      {
        icon: "link2",
        title: "Internal linking",
        description:
          "Descriptive anchors from relevant pages, routing authority toward your commercial pages instead of scattering it.",
      },
      {
        icon: "boxes",
        title: "Schema and rich results",
        description:
          "FAQ, HowTo, Article, Product, or Breadcrumb markup where your page type genuinely qualifies for the feature.",
      },
      {
        icon: "monitor",
        title: "Media optimisation",
        description:
          "Descriptive alt text, right-sized images, transcripts for video, and captions \u2014 accessibility and search at the same time.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Find the near misses",
        description:
          "Search Console query data, filtered to positions 8\u201320 with real impressions. That's the shortlist.",
        detail: [
          "Query export",
          "Position filtering",
          "Impression weighting",
          "Opportunity ranking",
        ],
      },
      {
        step: "02",
        title: "Compare against the SERP",
        description:
          "What the pages above you cover that yours doesn't. Specific gaps, listed.",
        detail: [
          "SERP analysis",
          "Content gap list",
          "Intent check",
          "Format review",
        ],
      },
      {
        step: "03",
        title: "Rewrite and restructure",
        description:
          "Titles, headings, and the content itself. Substantive additions, not sprinkled keywords.",
        detail: [
          "Title and meta rewrite",
          "Outline restructure",
          "Content additions",
          "Schema",
        ],
      },
      {
        step: "04",
        title: "Link internally",
        description:
          "Relevant existing pages linked to the target with anchors that describe the destination.",
        detail: ["Link opportunity scan", "Anchor text plan", "Implementation"],
      },
      {
        step: "05",
        title: "Measure",
        description:
          "Track the agreed search measures over a suitable review period and use the findings to plan the next changes.",
        detail: [
          "Rank tracking",
          "CTR comparison",
          "Conversion check",
          "Next batch",
        ],
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Will you rewrite every page?",
        answer:
          "Not automatically. We identify which pages need light changes, consolidation or substantial rewriting, then agree priorities and the level of editorial work.",
      },
      {
        question: "What affects the cost of on-page seo?",
        answer:
          "The scope depends on the current setup, the deliverables, integrations and review requirements. We confirm inclusions, exclusions and a delivery schedule in a written proposal before work begins.",
      },
      {
        question: "What should I send with my enquiry?",
        answer:
          "Share your website if you have one, the problem you want to solve and any important constraints. A short description is enough to start; access to accounts can be arranged later.",
      },
    ],
    relatedSlugs: [
      "seo",
      "keyword-research",
      "content-writing",
      "technical-seo",
    ],
    caseStudySlugs: [],
    blogSlugs: [
      "seo-basics-getting-started-2025",
      "content-strategy-that-actually-works",
      "technical-seo-audit-checklist",
    ],
    industrySlugs: ["professional-services", "healthcare", "saas-startups"],
    keywords: {
      primary: "on-page SEO services",
      secondary: [
        "on-page optimisation service",
        "content optimisation for SEO",
        "meta title and description optimisation",
        "internal linking strategy",
      ],
      semantic: [
        "search intent",
        "content gap analysis",
        "heading hierarchy",
        "keyword cannibalisation",
        "click-through rate",
        "SERP analysis",
        "anchor text",
        "alt text",
        "featured snippet",
        "topical depth",
        "Search Console queries",
        "schema markup",
      ],
    },
    meta: {
      title: "On-Page SEO Services | Quesiono",
      description:
        "For sites with relevant content that is poorly structured or competing with itself. We improve page intent, headings, internal links, and metadata.",
    },
    media: {
      imageAlt:
        "Search Console position report with pages ranking between eight and twenty highlighted",
    },
    pricingTiers: undefined,
    pricingNote: undefined,
  },
  {
    slug: "off-page-seo",
    name: "Off-Page SEO",
    parentService: "seo",
    shortDescription:
      "For businesses that need consistent profiles, relevant mentions, and a clearer picture of their backlink history. We assess the current footprint before planning outreach.",
    icon: "globe",
    href: "/services/seo/off-page-seo",
    group: "seo",
    layoutVariant: "editorial",
    hero: {
      eyebrow: "Off-Page SEO",
      headline: "Build a more credible presence beyond your website.",
      sub: "For businesses that need consistent profiles, relevant mentions, and a clearer picture of their backlink history. We assess the current footprint before planning outreach.",
    },
    overview: {
      heading: "Relevance matters more than a large link count.",
      paragraphs: [
        "We review references to your business, inconsistencies in public profiles and links that deserve investigation. The plan focuses on useful relationships and accurate information rather than guaranteed placements.",
      ],
    },
    outcomes: [
      "Digital PR",
      "Expert contributions",
      "Unlinked mention recovery",
      "Citations and directories",
    ],
    deliverablesHeading: "How we build authority",
    deliverables: [
      {
        icon: "megaphone",
        title: "Digital PR",
        description:
          "Original data, surveys, or analysis pitched to journalists and industry publications. The pitch is the work; the link follows.",
      },
      {
        icon: "message",
        title: "Expert contributions",
        description:
          "Your people quoted in industry coverage, roundups, and podcasts. Positions you as a practitioner rather than an advertiser.",
      },
      {
        icon: "link2",
        title: "Unlinked mention recovery",
        description:
          "We find where you're already mentioned without a link and ask. Highest conversion rate in outreach, and nobody does it.",
      },
      {
        icon: "map-pin",
        title: "Citations and directories",
        description:
          "Consistent name, address, and phone across the directories that matter for your sector. Duplicates found and merged.",
      },
      {
        icon: "file-search",
        title: "Backlink audit and disavow",
        description:
          "If a previous agency built spam, we catalogue it, pursue removals, and disavow the rest. Necessary before new outreach starts.",
      },
      {
        icon: "handshake",
        title: "Partner and supplier links",
        description:
          "Your existing relationships \u2014 suppliers, associations, clients, sponsorships \u2014 are usually an unclaimed source of legitimate links.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit the profile",
        description:
          "What you have, what's toxic, and where competitors have links you don't.",
        detail: [
          "Backlink audit",
          "Toxicity review",
          "Competitor gap",
          "Unlinked mention scan",
        ],
      },
      {
        step: "02",
        title: "Find the low-hanging fruit",
        description:
          "Unlinked mentions, partner sites, associations, and directories. Quick, cheap, and real.",
        detail: ["Mention outreach", "Partner requests", "Citation cleanup"],
      },
      {
        step: "03",
        title: "Build something linkable",
        description:
          "Original data or analysis worth citing. Outreach without an asset is just asking for favours.",
        detail: [
          "Asset selection",
          "Data gathering",
          "Production",
          "Angle development",
        ],
      },
      {
        step: "04",
        title: "Pitch",
        description:
          "Individually written pitches to a researched list. Small volume, high relevance, follow-ups by hand.",
        detail: [
          "Prospect research",
          "Personalised pitches",
          "Follow-up",
          "Relationship notes",
        ],
      },
      {
        step: "05",
        title: "Report and repeat",
        description:
          "Every link earned, with the site's traffic and relevance, plus what didn't land and why.",
        detail: ["Link report", "Outreach metrics", "Angle iteration"],
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Can you guarantee new backlinks?",
        answer:
          "No. Independent publishers decide what they publish and link to. Outreach scope and reporting can be agreed, but placements and ranking changes cannot be guaranteed.",
      },
      {
        question: "What affects the cost of off-page seo?",
        answer:
          "The scope depends on the current setup, the deliverables, integrations and review requirements. We confirm inclusions, exclusions and a delivery schedule in a written proposal before work begins.",
      },
      {
        question: "What should I send with my enquiry?",
        answer:
          "Share your website if you have one, the problem you want to solve and any important constraints. A short description is enough to start; access to accounts can be arranged later.",
      },
    ],
    relatedSlugs: ["link-building", "seo", "technical-seo", "content-writing"],
    caseStudySlugs: [],
    blogSlugs: [
      "seo-basics-getting-started-2025",
      "content-strategy-that-actually-works",
    ],
    industrySlugs: ["professional-services", "saas-startups", "healthcare"],
    keywords: {
      primary: "off-page SEO services",
      secondary: [
        "digital PR agency",
        "backlink audit service",
        "authority building SEO",
        "citation management",
      ],
      semantic: [
        "referring domains",
        "unlinked brand mentions",
        "disavow file",
        "link spam policies",
        "editorial links",
        "outreach campaign",
        "domain rating",
        "NAP consistency",
        "anchor text distribution",
        "toxic backlinks",
        "digital PR asset",
        "industry citations",
      ],
    },
    meta: {
      title: "Off-Page SEO Services | Quesiono",
      description:
        "For businesses that need consistent profiles, relevant mentions, and a clearer picture of their backlink history. We assess the current footprint before planning outreach.",
    },
    media: {
      imageAlt:
        "Backlink profile chart showing referring domains growing over twelve months",
    },
    pricingTiers: undefined,
    pricingNote: undefined,
  },
  {
    slug: "link-building",
    name: "Link Building",
    parentService: "seo",
    shortDescription:
      "For organizations with useful expertise or resources that are not reaching relevant publishers. We develop outreach angles, research prospects, and track responses.",
    icon: "link2",
    href: "/services/seo/link-building",
    group: "seo",
    layoutVariant: "stacked",
    hero: {
      eyebrow: "Link Building",
      headline: "Earn links with something worth referencing.",
      sub: "For organizations with useful expertise or resources that are not reaching relevant publishers. We develop outreach angles, research prospects, and track responses.",
    },
    overview: {
      heading: "Outreach starts with a reason to care.",
      paragraphs: [
        "We look for material that helps a specific audience: research, tools, explainers or specialist commentary. Prospects are selected for relevance, and outreach is measured transparently.",
      ],
    },
    outcomes: [
      "Prospect research",
      "Linkable asset development",
      "Personalised outreach",
      "Broken link reclamation",
    ],
    deliverablesHeading: "What link building involves",
    deliverables: [
      {
        icon: "file-search",
        title: "Prospect research",
        description:
          "Sites with real organic traffic, topical overlap, and a history of linking out. Scored and sent to you for approval.",
      },
      {
        icon: "lightbulb",
        title: "Linkable asset development",
        description:
          "Original research, tools, or genuinely useful guides. Without something worth citing, outreach is just a favour request.",
      },
      {
        icon: "message",
        title: "Personalised outreach",
        description:
          "Written per prospect, referencing something specific on their site. Low volume, high relevance, no sequence software.",
      },
      {
        icon: "wrench",
        title: "Broken link reclamation",
        description:
          "Dead resources in your niche identified, then your equivalent page offered as the replacement. Genuinely helpful, so it converts.",
      },
      {
        icon: "trending-up",
        title: "Competitor gap targeting",
        description:
          "Sites linking to two or more competitors but not to you. Already proven willing to link in your space.",
      },
      {
        icon: "bar-chart",
        title: "Placement reporting",
        description:
          "Every link with its URL, the target page, anchor text, the site's traffic, and whether it's followed.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Set the target",
        description:
          "Which pages need authority and which queries they support. Links without a destination strategy are wasted.",
        detail: ["Target page list", "Query mapping", "Anchor text plan"],
      },
      {
        step: "02",
        title: "Research prospects",
        description:
          "Built and scored, then sent to you. Nothing goes out until you've struck what you don't want.",
        detail: [
          "Prospect list",
          "Traffic and relevance scoring",
          "Client approval",
        ],
      },
      {
        step: "03",
        title: "Prepare the asset",
        description:
          "The thing being pitched \u2014 data, tool, or guide \u2014 produced or identified from what you already have.",
        detail: ["Asset production", "Angle development", "Supporting data"],
      },
      {
        step: "04",
        title: "Outreach",
        description:
          "Individually written, sent in small batches, followed up twice. Then we stop, because a third follow-up is spam.",
        detail: [
          "Pitch writing",
          "Send in batches",
          "Two follow-ups",
          "Reply handling",
        ],
      },
      {
        step: "05",
        title: "Report",
        description:
          "Placements with full context, plus honest numbers on what was pitched and what was ignored.",
        detail: [
          "Placement report",
          "Outreach metrics",
          "Rank impact",
          "Next-cycle angles",
        ],
      },
    ],
    stats: [],
    pricingTiers: undefined,
    pricingNote: undefined,
    faqs: [
      {
        question: "Do you sell a fixed number of links?",
        answer:
          "No. We scope research, asset development and outreach activity. Editorial decisions stay with publishers, and we do not promise rankings or a fixed number of earned links.",
      },
      {
        question: "What affects the cost of link building?",
        answer:
          "The scope depends on the current setup, the deliverables, integrations and review requirements. We confirm inclusions, exclusions and a delivery schedule in a written proposal before work begins.",
      },
      {
        question: "What should I send with my enquiry?",
        answer:
          "Share your website if you have one, the problem you want to solve and any important constraints. A short description is enough to start; access to accounts can be arranged later.",
      },
    ],
    relatedSlugs: [
      "off-page-seo",
      "seo",
      "content-writing",
      "keyword-research",
    ],
    caseStudySlugs: [],
    blogSlugs: [
      "seo-basics-getting-started-2025",
      "content-strategy-that-actually-works",
    ],
    industrySlugs: [
      "saas-startups",
      "professional-services",
      "ecommerce-retail",
    ],
    keywords: {
      primary: "link building services",
      secondary: [
        "white hat link building agency",
        "manual outreach link building",
        "broken link building service",
        "editorial backlink acquisition",
      ],
      semantic: [
        "referring domains",
        "anchor text distribution",
        "linkable asset",
        "outreach personalisation",
        "competitor link gap",
        "nofollow and dofollow",
        "link reclamation",
        "topical relevance",
        "organic traffic of linking site",
        "link velocity",
        "digital PR",
        "guest contribution",
      ],
    },
    meta: {
      title: "Link Building Services | Quesiono",
      description:
        "For organizations with useful expertise or resources that are not reaching relevant publishers. We develop outreach angles, research prospects, and track responses.",
    },
    media: {
      imageAlt:
        "Outreach prospect list with traffic and relevance scores beside earned placements",
    },
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    parentService: "seo",
    shortDescription:
      "For service businesses with unclear local pages, inconsistent listings, or a neglected business profile. We align the information customers use to choose and contact you.",
    icon: "map-pin",
    href: "/services/seo/local-seo",
    group: "seo",
    layoutVariant: "showcase",
    hero: {
      eyebrow: "Local SEO",
      headline: "Be easier to find when nearby customers need you.",
      sub: "For service businesses with unclear local pages, inconsistent listings, or a neglected business profile. We align the information customers use to choose and contact you.",
    },
    overview: {
      heading: "Local search depends on accurate business information.",
      paragraphs: [
        "We review your service area, eligible locations, profile details and website pages together. The aim is a clear route from a relevant local search to a call, booking or enquiry.",
      ],
    },
    outcomes: [
      "Google Business Profile optimisation",
      "Review generation and response",
      "Location and service-area pages",
      "LocalBusiness schema",
    ],
    deliverablesHeading: "What local SEO covers",
    deliverables: [
      {
        icon: "store",
        title: "Google Business Profile optimisation",
        description:
          "Primary and secondary categories, services, attributes, hours, service areas, and a posting schedule that keeps the profile active.",
      },
      {
        icon: "award",
        title: "Review generation and response",
        description:
          "A request process built into your workflow, plus written responses to every review \u2014 including the bad ones, which matter more.",
      },
      {
        icon: "map-pin",
        title: "Location and service-area pages",
        description:
          "One per genuine service area, with local projects, coverage detail, and directions. Substance, not a template with a variable.",
      },
      {
        icon: "boxes",
        title: "LocalBusiness schema",
        description:
          "Structured data with address, hours, service area, and geo coordinates so the details are unambiguous to search engines.",
      },
      {
        icon: "clipboard",
        title: "Citation audit and cleanup",
        description:
          "Name, address, and phone made consistent across the major aggregators and your sector's directories. Duplicates merged.",
      },
      {
        icon: "bar-chart",
        title: "Local rank tracking",
        description:
          "Grid-based tracking that shows where you appear from different points in your service area \u2014 not a single city-centre position.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Local audit",
        description:
          "Profile completeness, citation consistency, review position against competitors, and a grid scan of current visibility.",
        detail: [
          "Profile audit",
          "Citation scan",
          "Competitor grid",
          "Review benchmark",
        ],
      },
      {
        step: "02",
        title: "Fix the profile",
        description:
          "Categories, services, attributes, photos, and Q&A. The highest-leverage hour in local SEO.",
        detail: [
          "Category selection",
          "Service listings",
          "Photo upload",
          "Q&A seeding",
        ],
      },
      {
        step: "03",
        title: "Clean the citations",
        description:
          "Inconsistencies and duplicates corrected at the aggregator level so they stop reappearing.",
        detail: [
          "Aggregator submissions",
          "Duplicate merges",
          "Sector directories",
        ],
      },
      {
        step: "04",
        title: "Build local pages",
        description:
          "Real pages for real service areas, with local proof and internal links from the relevant service pages.",
        detail: [
          "Location pages",
          "Local schema",
          "Internal linking",
          "Embedded coverage maps",
        ],
      },
      {
        step: "05",
        title: "Reviews and posts, ongoing",
        description:
          "A review request process your team can run, plus profile posts, tracked monthly on the grid.",
        detail: [
          "Review workflow",
          "Response templates",
          "Monthly posts",
          "Grid tracking",
        ],
      },
    ],
    stats: [],
    pricingTiers: undefined,
    faqs: [
      {
        question: "Can you help a business without a storefront?",
        answer:
          "Yes. We review your real service area and business model first. Profile eligibility and address visibility must follow the platform rules; a virtual location is not a substitute for a genuine presence.",
      },
      {
        question: "What affects the cost of local seo?",
        answer:
          "The scope depends on the current setup, the deliverables, integrations and review requirements. We confirm inclusions, exclusions and a delivery schedule in a written proposal before work begins.",
      },
      {
        question: "What should I send with my enquiry?",
        answer:
          "Share your website if you have one, the problem you want to solve and any important constraints. A short description is enough to start; access to accounts can be arranged later.",
      },
    ],
    relatedSlugs: ["seo", "on-page-seo", "content-writing", "web-design"],
    caseStudySlugs: [],
    blogSlugs: [
      "local-seo-strategy-small-business",
      "seo-basics-getting-started-2025",
      "technical-seo-audit-checklist",
    ],
    industrySlugs: [
      "restaurants-hospitality",
      "healthcare",
      "real-estate",
      "professional-services",
    ],
    keywords: {
      primary: "local SEO services",
      secondary: [
        "Google Business Profile optimisation",
        "map pack ranking service",
        "multi-location SEO",
        "local citation management",
      ],
      semantic: [
        "map pack",
        "local pack",
        "NAP consistency",
        "service area business",
        "review velocity",
        "LocalBusiness schema",
        "geo grid tracking",
        "location pages",
        "proximity signals",
        "local citations",
        "store locator",
        "Google Maps ranking",
      ],
    },
    meta: {
      title: "Local SEO Services | Quesiono",
      description:
        "For service businesses with unclear local pages, inconsistent listings, or a neglected business profile. We align the information customers use to choose and contact you.",
    },
    media: {
      imageAlt:
        "Local search results showing a three-result map pack above the organic listings",
    },
    pricingNote: undefined,
  },
  {
    slug: "ecommerce-seo",
    name: "Ecommerce SEO",
    parentService: "seo",
    shortDescription:
      "For stores where filters, variants, or thin category pages get in the way of search visibility. We connect technical catalogue decisions with how customers shop.",
    icon: "shopping-bag",
    href: "/services/seo/ecommerce-seo",
    group: "seo",
    layoutVariant: "split",
    hero: {
      eyebrow: "Ecommerce SEO",
      headline: "Make your catalogue easier to discover.",
      sub: "For stores where filters, variants, or thin category pages get in the way of search visibility. We connect technical catalogue decisions with how customers shop.",
    },
    overview: {
      heading: "Search structure should reflect the products you sell.",
      paragraphs: [
        "We review category demand, product information, internal links and crawl paths. Priorities balance valuable landing pages against the duplication that a large catalogue can create.",
      ],
    },
    outcomes: [
      "Faceted navigation control",
      "Category page optimisation",
      "Product page depth",
      "Product and Offer schema",
    ],
    deliverablesHeading: "What ecommerce SEO includes",
    deliverables: [
      {
        icon: "settings",
        title: "Faceted navigation control",
        description:
          "Rules for which filter combinations are indexable, canonical, or blocked. The single biggest technical lever in a large store.",
      },
      {
        icon: "layers",
        title: "Category page optimisation",
        description:
          "Real copy, buying guidance, subcategory links, and FAQ content. Enough to compete with the guides currently outranking you.",
      },
      {
        icon: "shopping-bag",
        title: "Product page depth",
        description:
          "Unique descriptions where volume justifies it, structured specifications, and review content that keeps the page growing.",
      },
      {
        icon: "boxes",
        title: "Product and Offer schema",
        description:
          "Price, availability, ratings where you have genuine reviews, and shipping details \u2014 so listings show more than a blue link.",
      },
      {
        icon: "signpost",
        title: "Out-of-stock URL policy",
        description:
          "Seasonal, permanently discontinued, and temporarily unavailable each handled differently. Written down so your team applies it consistently.",
      },
      {
        icon: "target",
        title: "Commercial keyword mapping",
        description:
          "Every category and subcategory assigned its query, with the gaps that need a new collection page identified.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Crawl and index review",
        description:
          "How many URLs exist versus how many should. Usually the first number is much larger.",
        detail: [
          "Full crawl",
          "Parameter inventory",
          "Index coverage",
          "Crawl budget analysis",
        ],
      },
      {
        step: "02",
        title: "Control the facets",
        description:
          "Indexable, canonicalised, or blocked \u2014 decided per parameter and implemented.",
        detail: [
          "Parameter rules",
          "Canonical strategy",
          "Robots directives",
          "Internal link audit",
        ],
      },
      {
        step: "03",
        title: "Map the catalogue",
        description:
          "Commercial queries assigned to categories and subcategories, with missing collections flagged.",
        detail: [
          "Category keyword map",
          "Gap analysis",
          "New collection list",
          "Hierarchy review",
        ],
      },
      {
        step: "04",
        title: "Build out the pages",
        description:
          "Category copy, product depth, and schema. Highest-revenue categories first.",
        detail: [
          "Category copy",
          "Product templates",
          "Schema implementation",
          "Internal linking",
        ],
      },
      {
        step: "05",
        title: "Monitor and maintain",
        description:
          "New products indexed promptly, schema errors caught, and the URL policy applied as the catalogue turns over.",
        detail: [
          "Index monitoring",
          "Schema alerts",
          "New product checks",
          "Monthly report",
        ],
      },
    ],
    stats: [],
    faqs: [
      {
        question: "Do all filtered pages need to be indexed?",
        answer:
          "No. We assess whether a filtered page has distinct demand, useful content and stable inventory. Indexing rules should follow that assessment rather than exposing every possible combination.",
      },
      {
        question: "What affects the cost of ecommerce seo?",
        answer:
          "The scope depends on the current setup, the deliverables, integrations and review requirements. We confirm inclusions, exclusions and a delivery schedule in a written proposal before work begins.",
      },
      {
        question: "What should I send with my enquiry?",
        answer:
          "Share your website if you have one, the problem you want to solve and any important constraints. A short description is enough to start; access to accounts can be arranged later.",
      },
    ],
    relatedSlugs: [
      "ecommerce-development",
      "shopify-development",
      "technical-seo",
      "keyword-research",
    ],
    caseStudySlugs: [],
    blogSlugs: [
      "shopify-store-conversion-optimization",
      "technical-seo-audit-checklist",
      "seo-basics-getting-started-2025",
    ],
    industrySlugs: ["ecommerce-retail"],
    keywords: {
      primary: "ecommerce SEO services",
      secondary: [
        "ecommerce SEO agency",
        "category page SEO",
        "product page optimisation",
        "Shopify SEO services",
      ],
      semantic: [
        "faceted navigation",
        "crawl budget",
        "canonical tags",
        "Product schema",
        "Offer schema",
        "out-of-stock URLs",
        "collection pages",
        "duplicate content",
        "parameter handling",
        "rich results",
        "internal linking",
        "commercial intent keywords",
      ],
    },
    meta: {
      title: "Ecommerce SEO Services | Quesiono",
      description:
        "For stores where filters, variants, or thin category pages get in the way of search visibility. We connect technical catalogue decisions with how customers shop.",
    },
    media: {
      imageAlt:
        "Ecommerce category page with filters beside a rich result showing price and availability",
    },
    pricingTiers: undefined,
    pricingNote: undefined,
  },
  {
    slug: "content-writing",
    name: "Content Writing",
    shortDescription:
      "For websites with vague offers, inconsistent copy, or pages that leave buying questions unanswered. We turn your expertise into useful, readable content.",
    icon: "pen-tool",
    href: "/services/content-writing",
    group: "content",
    featured: true,
    layoutVariant: "editorial",
    hero: {
      eyebrow: "Content Writing",
      headline: "Explain your business in words customers understand.",
      sub: "For websites with vague offers, inconsistent copy, or pages that leave buying questions unanswered. We turn your expertise into useful, readable content.",
    },
    overview: {
      heading: "Start with the questions your customers ask.",
      paragraphs: [
        "We gather the offer, audience, evidence and objections before drafting. Page structure and copy are developed together so the words help a visitor decide what to do next.",
      ],
    },
    outcomes: [
      "Website and service page copy",
      "Long-form articles and guides",
      "Case studies",
      "Voice and messaging guide",
    ],
    deliverablesHeading: "What we write",
    deliverables: [
      {
        icon: "home",
        title: "Website and service page copy",
        description:
          "Homepage, about, service pages, and landing pages. Structured around the decision your buyer is making, section by section.",
      },
      {
        icon: "book-open",
        title: "Long-form articles and guides",
        description:
          "1,500 to 3,000 words with real research behind them. Written for someone who has to make a decision, not for a word count.",
      },
      {
        icon: "award",
        title: "Case studies",
        description:
          "The situation, what you did, what changed, and the number. Interviewed from your client where they'll agree to it.",
      },
      {
        icon: "message",
        title: "Voice and messaging guide",
        description:
          "How you sound, what you claim, what you never say, and the words you use instead of the industry's. Usable by any writer.",
      },
      {
        icon: "file-edit",
        title: "Editing and rewriting",
        description:
          "Have copy that's nearly right? We'll edit rather than restart. Often faster and  cheaper than a fresh draft.",
      },
      {
        icon: "clipboard",
        title: "Content briefs for your team",
        description:
          "If your people write, we'll brief them: target query, intent, angle, sources, structure, internal links, and word count.",
      },
    ],
    processHeading: "How the writing works",
    process: [
      {
        step: "01",
        title: "Voice and brief",
        description:
          "We read everything you've published, listen to a sales call if you'll share one, and write a voice guide you approve.",
        detail: [
          "Existing material review",
          "Sales call listening",
          "Voice guide",
          "Brief approval",
        ],
      },
      {
        step: "02",
        title: "Research",
        description:
          "Subject-matter interviews with your team, plus primary sources. This is where a page stops being generic.",
        detail: [
          "SME interviews",
          "Primary sources",
          "Competitor claims audit",
          "Objection list",
        ],
      },
      {
        step: "03",
        title: "Outline",
        description:
          "Structure approved before drafting. Arguing about section order at outline stage costs an hour; at draft stage it costs a week.",
        detail: ["Section outline", "Key claims", "Proof points", "Approval"],
      },
      {
        step: "04",
        title: "Draft and edit",
        description:
          "Written, then edited by a second person. You see the edited version, not the first draft.",
        detail: [
          "First draft",
          "Editorial pass",
          "Fact check",
          "Internal link placement",
        ],
      },
      {
        step: "05",
        title: "Revise",
        description:
          "Two rounds. Comments in a shared doc so we can see the reasoning, not just the change.",
        detail: ["Two revision rounds", "Consolidated feedback", "Final proof"],
      },
    ],
    stats: [],
    pricingTiers: undefined,
    pricingNote: undefined,
    faqs: [
      {
        question: "Can you work from our existing copy?",
        answer:
          "Yes. We can edit, restructure or replace it. The brief identifies what is accurate, what needs subject-matter input and which claims need evidence before publication.",
      },
      {
        question: "What affects the cost of content writing?",
        answer:
          "The scope depends on the current setup, the deliverables, integrations and review requirements. We confirm inclusions, exclusions and a delivery schedule in a written proposal before work begins.",
      },
      {
        question: "What should I send with my enquiry?",
        answer:
          "Share your website if you have one, the problem you want to solve and any important constraints. A short description is enough to start; access to accounts can be arranged later.",
      },
    ],
    relatedSlugs: [
      "blog-posts",
      "article-writing",
      "on-page-seo",
      "keyword-research",
    ],
    caseStudySlugs: [],
    blogSlugs: [
      "content-strategy-that-actually-works",
      "seo-basics-getting-started-2025",
      "how-to-build-website-that-converts",
    ],
    industrySlugs: ["professional-services", "saas-startups", "healthcare"],
    keywords: {
      primary: "content writing services",
      secondary: [
        "website copywriting services",
        "SEO content writing",
        "B2B content writing agency",
        "professional copywriter for hire",
      ],
      semantic: [
        "voice guide",
        "messaging framework",
        "subject matter expert interview",
        "editorial process",
        "content brief",
        "search intent",
        "long-form content",
        "case study writing",
        "landing page copy",
        "fact checking",
        "internal linking",
        "tone of voice",
      ],
    },
    meta: {
      title: "Content Writing Services | Quesiono",
      description:
        "For websites with vague offers, inconsistent copy, or pages that leave buying questions unanswered. We turn your expertise into useful, readable content.",
    },
    media: {
      imageAlt:
        "Editorial workspace showing a content brief, draft, and marked-up editorial pass",
    },
  },
  {
    slug: "blog-posts",
    name: "Blog Post Writing",
    navLabel: "Blog Posts",
    parentService: "content-writing",
    shortDescription:
      "For businesses that need helpful articles but lack editorial time. We plan focused briefs, develop drafts, and shape each piece around a real reader question.",
    icon: "file-text",
    href: "/services/content-writing/blog-posts",
    group: "content",
    layoutVariant: "stacked",
    hero: {
      eyebrow: "Blog Post Writing",
      headline: "Publish answers your customers are looking for.",
      sub: "For businesses that need helpful articles but lack editorial time. We plan focused briefs, develop drafts, and shape each piece around a real reader question.",
    },
    overview: {
      heading: "A useful article earns the time it asks for.",
      paragraphs: [
        "We agree the audience, search intent and intended takeaway before writing. Research, subject-matter input and editing support a clear answer rather than a word-count target.",
      ],
    },
    outcomes: [
      "Keyword-mapped brief",
      "Researched draft",
      "Editorial pass",
      "Images and diagrams",
    ],
    deliverablesHeading: "What each post includes",
    deliverables: [
      {
        icon: "target",
        title: "Keyword-mapped brief",
        description:
          "Target query, search intent, the angle, sources, structure, and internal links. Approved before drafting.",
      },
      {
        icon: "pen-tool",
        title: "Researched draft",
        description:
          "1,200 to 2,000 words from primary sources and, where the topic needs it, an interview with your team.",
      },
      {
        icon: "file-edit",
        title: "Editorial pass",
        description:
          "A second reader for clarity, structure, and cuts. Padding removed rather than reworded.",
      },
      {
        icon: "brush",
        title: "Images and diagrams",
        description:
          "A header image and any diagrams the post needs, sized and compressed properly with real alt text.",
      },
      {
        icon: "search",
        title: "On-page SEO",
        description:
          "Title, meta description, heading structure, Article schema, and internal links both out and in.",
      },
      {
        icon: "rocket",
        title: "Published to your CMS",
        description:
          "Scheduled and formatted in your CMS, or handed over as clean markdown if you'd rather publish yourself.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Quarterly plan",
        description:
          "Twelve topics off the keyword roadmap, sequenced and shown to you before anything is written.",
        detail: [
          "Topic selection",
          "Query mapping",
          "Calendar",
          "Client approval",
        ],
      },
      {
        step: "02",
        title: "Brief",
        description:
          "One per post. You can redirect a piece here for the cost of an email rather than a rewrite.",
        detail: ["Intent analysis", "Angle", "Source list", "Outline"],
      },
      {
        step: "03",
        title: "Write and edit",
        description:
          "Drafted, then edited by someone else. Fact-checked where there are claims and numbers.",
        detail: ["Draft", "Editorial pass", "Fact check", "Images"],
      },
      {
        step: "04",
        title: "Review and publish",
        description:
          "One revision round, then scheduled. Turnaround is two working days on feedback.",
        detail: [
          "Client review",
          "One revision round",
          "CMS formatting",
          "Schedule",
        ],
      },
      {
        step: "05",
        title: "Monthly review",
        description:
          "What's ranking, what isn't, and which existing posts are worth updating instead of writing something new.",
        detail: [
          "Performance report",
          "Refresh candidates",
          "Next month's plan",
        ],
      },
    ],
    stats: [],
    pricingTiers: undefined,
    faqs: [
      {
        question: "Who approves the facts?",
        answer:
          "Your subject-matter reviewer confirms business-specific details. External claims should carry suitable sources, and unsupported statements are flagged before the article is published.",
      },
      {
        question: "What affects the cost of blog post writing?",
        answer:
          "The scope depends on the current setup, the deliverables, integrations and review requirements. We confirm inclusions, exclusions and a delivery schedule in a written proposal before work begins.",
      },
      {
        question: "What should I send with my enquiry?",
        answer:
          "Share your website if you have one, the problem you want to solve and any important constraints. A short description is enough to start; access to accounts can be arranged later.",
      },
    ],
    relatedSlugs: [
      "content-writing",
      "article-writing",
      "keyword-research",
      "on-page-seo",
    ],
    caseStudySlugs: [],
    blogSlugs: [
      "content-strategy-that-actually-works",
      "seo-basics-getting-started-2025",
      "local-seo-strategy-small-business",
    ],
    industrySlugs: ["saas-startups", "professional-services", "healthcare"],
    keywords: {
      primary: "blog post writing services",
      secondary: [
        "blog writing service for businesses",
        "SEO blog content agency",
        "monthly blog content package",
        "managed blog publishing",
      ],
      semantic: [
        "publishing cadence",
        "content calendar",
        "keyword mapping",
        "content brief",
        "internal linking",
        "Article schema",
        "content refresh",
        "topic clusters",
        "search intent",
        "meta description",
        "editorial review",
        "CMS publishing",
      ],
    },
    meta: {
      title: "Blog Post Writing Services | Quesiono",
      description:
        "For businesses that need helpful articles but lack editorial time. We plan focused briefs, develop drafts, and shape each piece around a real reader question.",
    },
    media: {
      imageAlt:
        "Content calendar showing planned blog posts alongside a published article",
    },
    pricingNote: undefined,
  },
  {
    slug: "article-writing",
    name: "Article Writing",
    parentService: "content-writing",
    shortDescription:
      "For teams publishing detailed guides, explainers, and specialist resources. We organize the research and develop an article with a clear argument and useful depth.",
    icon: "book-open",
    href: "/services/content-writing/article-writing",
    group: "content",
    layoutVariant: "split",
    hero: {
      eyebrow: "Article Writing",
      headline: "Give complex subjects the space they need.",
      sub: "For teams publishing detailed guides, explainers, and specialist resources. We organize the research and develop an article with a clear argument and useful depth.",
    },
    overview: {
      heading: "Depth comes from explanation, not length.",
      paragraphs: [
        "We define the central question, identify the evidence needed and build a structure that helps readers follow the subject. Interviews and specialist review can be included in the brief.",
      ],
    },
    outcomes: [
      "Pillar pages",
      "Original research and data pieces",
      "Thought leadership",
      "Guest contributions",
    ],
    deliverablesHeading: "What article writing covers",
    deliverables: [
      {
        icon: "layers",
        title: "Pillar pages",
        description:
          "Comprehensive coverage of a topic, structured with jump links and designed to sit at the centre of a content cluster.",
      },
      {
        icon: "bar-chart",
        title: "Original research and data pieces",
        description:
          "Your data or a survey we run, analysed and written up with charts. The most link-worthy content type there is.",
      },
      {
        icon: "megaphone",
        title: "Thought leadership",
        description:
          "An argument with a position, drawn from your experience. Not a summary of what the industry already agrees on.",
      },
      {
        icon: "globe",
        title: "Guest contributions",
        description:
          "Written to a publication's brief and voice, with pitch support if you don't already have the relationship.",
      },
      {
        icon: "file-text",
        title: "Whitepapers and reports",
        description:
          "Gated or ungated, designed as well as written, with an executive summary someone will actually read.",
      },
      {
        icon: "search",
        title: "Search-aware structure",
        description:
          "Built to rank where that's the goal \u2014 subtopic coverage, schema, jump links, and internal links from the cluster.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Angle and scope",
        description:
          "What the piece argues and why anyone would cite it. If we can't answer that, we don't start.",
        detail: [
          "Angle definition",
          "Audience",
          "Citation potential",
          "Length estimate",
        ],
      },
      {
        step: "02",
        title: "Research",
        description:
          "SME interviews, primary sources, and data analysis. The longest stage and the one that decides quality.",
        detail: [
          "SME interviews",
          "Source reading",
          "Data analysis",
          "Expert quotes",
        ],
      },
      {
        step: "03",
        title: "Outline",
        description:
          "A detailed section-by-section outline with the claims and evidence in place. Approved before drafting.",
        detail: [
          "Detailed outline",
          "Claims and evidence",
          "Chart list",
          "Approval",
        ],
      },
      {
        step: "04",
        title: "Draft and edit",
        description:
          "Written, edited, fact-checked, and every statistic traced to its source.",
        detail: [
          "Draft",
          "Editorial pass",
          "Fact check",
          "Source verification",
        ],
      },
      {
        step: "05",
        title: "Publish or place",
        description:
          "Onto your site with the internal links and schema, or pitched to the target publication.",
        detail: [
          "Publishing",
          "Charts and diagrams",
          "Pitch support",
          "Promotion notes",
        ],
      },
    ],
    stats: [],
    pricingTiers: undefined,
    faqs: [
      {
        question: "Can you write for a specialist audience?",
        answer:
          "Yes, with an agreed research process and access to suitable subject-matter input. We identify what requires expert review before drafting rather than presenting unfamiliar claims as established facts.",
      },
      {
        question: "What affects the cost of article writing?",
        answer:
          "The scope depends on the current setup, the deliverables, integrations and review requirements. We confirm inclusions, exclusions and a delivery schedule in a written proposal before work begins.",
      },
      {
        question: "What should I send with my enquiry?",
        answer:
          "Share your website if you have one, the problem you want to solve and any important constraints. A short description is enough to start; access to accounts can be arranged later.",
      },
    ],
    relatedSlugs: [
      "content-writing",
      "blog-posts",
      "link-building",
      "keyword-research",
    ],
    caseStudySlugs: [],
    blogSlugs: [
      "content-strategy-that-actually-works",
      "seo-basics-getting-started-2025",
      "how-to-build-website-that-converts",
    ],
    industrySlugs: ["saas-startups", "professional-services"],
    keywords: {
      primary: "article writing services",
      secondary: [
        "long-form content writing",
        "thought leadership writing service",
        "pillar page writing",
        "whitepaper writing services",
      ],
      semantic: [
        "original research",
        "primary sources",
        "subject matter expert interview",
        "pillar content",
        "topic cluster",
        "data journalism",
        "guest post",
        "editorial standards",
        "fact checking",
        "citation",
        "executive summary",
        "content depth",
      ],
    },
    meta: {
      title: "Article Writing Services | Quesiono",
      description:
        "For teams publishing detailed guides, explainers, and specialist resources. We organize the research and develop an article with a clear argument and useful depth.",
    },
    media: {
      imageAlt:
        "Long-form article layout with jump links, charts, and cited sources",
    },
    pricingNote: undefined,
  },
];
