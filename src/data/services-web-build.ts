import type { Service } from "./services";

/**
 * Design and build services — the work that produces a site from scratch.
 * Platform-specific and post-launch work lives in services-web-platforms.ts.
 */
export const buildServices: Service[] = [
  {
    slug: "web-design",
    name: "Web Design",
    shortDescription:
      "Custom website design that looks like your business and reads like a person wrote it.",
    icon: "paintbrush",
    href: "/services/web-design",
    group: "web",
    featured: true,
    layoutVariant: "showcase",
    hero: {
      eyebrow: "Web design",
      headline: "Custom web design that earns the second click",
      accent: ["design"],
      sub: "We design websites for companies that are tired of looking like their competitors. Every layout starts from your actual content and your actual buyers — not from a theme demo with placeholder text about synergy.",
    },
    overview: {
      heading: "What custom website design actually buys you",
      paragraphs: [
        "A template gets you online. It doesn't get you remembered. When four companies in your market run the same $59 theme, the only thing left to compete on is price — and that's a race nobody enjoys winning.",
        "Our web design process starts with the boring part: reading. Your sales objections, your support tickets, the three questions every prospect asks on the first call. That research decides the page order, the section hierarchy, and which proof goes above the fold. Then we design in the browser at real breakpoints, because a beautiful desktop mockup that collapses on a 375px screen isn't a design — it's a picture of one.",
        "You'll see a full clickable design before a line of production code gets written. Nothing goes to build until you've clicked through it and said yes.",
      ],
    },
    outcomes: [
      "A design system, not a one-off page — colours, type, spacing, and components documented so future pages match",
      "Real content in every mockup, so you're approving a website and not a mood board",
      "Mobile designed alongside desktop, not squeezed in afterwards",
      "Accessible colour contrast and focus states built into the palette from day one",
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
          "Low-fidelity layouts for every unique template. Cheap to change at this stage, expensive to change after visual design — so this is where we argue about section order.",
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
          "Buttons, cards, forms, tables, navigation, and every state each one needs — hover, focus, disabled, error, loading, empty.",
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
        detail: ["Stakeholder interview", "Competitor teardown", "Analytics review", "Content inventory"],
      },
      {
        step: "02",
        title: "Structure",
        description:
          "Sitemap and wireframes. We agree on what each page has to do before we decide how it looks.",
        detail: ["Sitemap", "Wireframes per template", "Copy outline", "Conversion path mapping"],
      },
      {
        step: "03",
        title: "Design",
        description:
          "Two art directions, then one carried through to every template and breakpoint.",
        detail: ["Moodboard", "Two concepts", "Full template set", "Component states"],
      },
      {
        step: "04",
        title: "Review",
        description:
          "Two structured rounds of revisions. Comments go in Figma so nothing gets lost in an email thread.",
        detail: ["Clickable prototype", "Two revision rounds", "Accessibility contrast check"],
      },
      {
        step: "05",
        title: "Handoff",
        description:
          "Annotated file, tokens, and a walkthrough call — either to our build team or to yours.",
        detail: ["Design tokens", "Annotated specs", "Asset export", "Walkthrough recording"],
      },
    ],
    stats: [
      { display: "4–6", label: "Weeks, typical", note: "Design only, for a 6–10 page site." },
      { value: 2, label: "Revision rounds", note: "Structured, not open-ended." },
      { value: 4, label: "Breakpoints designed", note: "375 / 768 / 1024 / 1440." },
    ],
    pricingTiers: [
      {
        name: "Essential",
        price: "$59",
        summary: "A focused site for a business with a clear, single offer.",
        features: [
          "Up to 5 unique page designs",
          "One art direction, one revision round",
          "Mobile and desktop layouts",
          "Component library basics",
        ],
        excludes: ["Custom illustration", "Photography direction"],
        timeline: "3 weeks",
        bestFor: "Consultancies, local services",
      },
      {
        name: "Standard",
        price: "$231",
        summary: "The usual shape of a company site with several service lines.",
        features: [
          "Up to 12 unique page designs",
          "Two art directions, two revision rounds",
          "Four designed breakpoints",
          "Full component library with states",
          "Annotated developer handoff",
        ],
        timeline: "5 weeks",
        bestFor: "SaaS, multi-service firms",
        highlight: true,
      },
      {
        name: "Extended",
        price: "From $437",
        summary: "Larger sites, or a design system several teams will build against.",
        features: [
          "Unlimited templates within scope",
          "Design system documentation",
          "Illustration and iconography set",
          "Content modelling for the CMS",
          "Two months of design support post-handoff",
        ],
        timeline: "8–12 weeks",
        bestFor: "Multi-brand, ecommerce, platforms",
      },
    ],
    pricingNote:
      "These are the numbers our last dozen design projects actually landed on. Yours moves with page count and how much content still needs writing.",
    faqs: [
      {
        question: "Do you use templates?",
        answer:
          "No. We build a design system for your site specifically. We do reuse our own patterns — a card is a card — but the type, colour, spacing, and layout logic are made for you.",
      },
      {
        question: "Can you work with our existing brand guidelines?",
        answer:
          "Yes, and it usually speeds things up. Send the guidelines and any asset library at kickoff. If the guidelines only cover print, we'll extend them to the web — screen needs type sizes, focus states, and contrast rules that a print manual never had to define.",
      },
      {
        question: "What if we don't like either direction?",
        answer:
          "It's happened twice in four years. Both times it meant we'd misread discovery, so we went back to the brief, redid the moodboard stage, and presented again at no extra cost. If it happens a third time, the same applies.",
      },
      {
        question: "Do you write the copy too?",
        answer:
          "We write the structural copy — headlines, section intros, calls to action — as part of design, because layout and language are the same decision. Full page copy is a separate line item; see our content writing service.",
      },
      {
        question: "How many revision rounds do we get?",
        answer:
          "Two on the Standard package, one on Essential. A round means you collect all feedback and send it at once. Extra rounds are billed hourly, but most projects don't need them if discovery was done properly.",
      },
      {
        question: "Who owns the design files?",
        answer:
          "You do, on final payment. We hand over the Figma file with edit access and the exported assets. No licence, no ongoing fee to keep using your own website design.",
      },
    ],
    relatedSlugs: ["ui-ux-design", "web-development", "landing-page-development", "wordpress-development"],
    caseStudySlugs: ["dazzle-website", "castellan-realty", "local-restaurant-website"],
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
      title: "Custom Web Design Services | Quesiono",
      description:
        "Custom web design built from your content and your buyers — not a template. Wireframes, two art directions, four designed breakpoints, and a component library you can build on.",
    },
    media: {
      imageAlt: "Responsive web design layouts shown at mobile, tablet, and desktop widths",
    },
  },

  {
    slug: "web-development",
    name: "Web Development",
    shortDescription:
      "Fast, accessible websites built in Next.js and hand-written code — no page builder bloat.",
    icon: "code2",
    href: "/services/web-development",
    group: "web",
    featured: true,
    layoutVariant: "split",
    hero: {
      eyebrow: "Web development",
      headline: "Websites built to load fast and stay fast",
      accent: ["fast", "fast"],
      sub: "We write the front end by hand in Next.js and React. No drag-and-drop builder stacking twelve nested divs and 400KB of JavaScript to render a heading. The result loads in under two seconds on a mid-range phone and keeps doing it two years later.",
    },
    overview: {
      heading: "Web development that a search engine and a human both like",
      paragraphs: [
        "Most slow websites aren't slow because of hosting. They're slow because a page builder shipped every layout option the plugin author could imagine, and your homepage now downloads a carousel library it never uses.",
        "We build with Next.js, TypeScript, and Tailwind. Pages are statically generated where they can be and server-rendered where they need to be, which means Google gets fully-formed HTML on the first request instead of an empty shell waiting for JavaScript. Images go through the optimiser. Fonts self-host. Third-party scripts get audited before they're allowed in.",
        "The part clients notice most is what happens after launch: you can edit content without breaking the layout, and a new page takes an afternoon rather than a rebuild. That's what a component-based build buys you.",
      ],
    },
    outcomes: [
      "Lighthouse performance in the 90s on mobile, measured on throttled 4G rather than your office wifi",
      "Semantic HTML with a real heading order — the foundation everything else in SEO sits on",
      "Keyboard-navigable, screen-reader-tested, WCAG 2.1 AA contrast",
      "Type-safe codebase another developer can pick up without an archaeology dig",
    ],
    deliverablesHeading: "What we build",
    deliverables: [
      {
        icon: "code2",
        title: "Hand-coded front end",
        description:
          "Next.js App Router, React, TypeScript, Tailwind. Every component typed, every prop documented. No builder plugins in the render path.",
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
          "Preview URL for every branch, production deploys on merge, automatic rollback. You get a staging link to review before anything goes live.",
      },
    ],
    processHeading: "How a build runs",
    process: [
      {
        step: "01",
        title: "Technical scope",
        description:
          "We turn the design into a component inventory and a data model, then flag anything that'll be harder than it looks.",
        detail: ["Component inventory", "Content model", "Integration list", "Risk flags"],
      },
      {
        step: "02",
        title: "Foundation",
        description:
          "Repo, design tokens, layout shell, CMS schema, and CI pipeline. Unglamorous week, but it's what keeps weeks three through six quick.",
        detail: ["Repo and CI", "Design tokens", "CMS schema", "Base components"],
      },
      {
        step: "03",
        title: "Build",
        description:
          "Templates and pages, shipped to a preview URL as they finish. You review continuously instead of waiting for one big reveal.",
        detail: ["Templates", "Page assembly", "Forms and integrations", "Rolling preview builds"],
      },
      {
        step: "04",
        title: "Hardening",
        description:
          "Performance budget, accessibility audit, cross-browser checks, and a real-device pass on iOS and Android.",
        detail: ["Lighthouse budget", "Keyboard audit", "Safari and Firefox", "Real-device testing"],
      },
      {
        step: "05",
        title: "Launch",
        description:
          "DNS, redirect map from the old URLs, analytics, Search Console, and a monitored first week.",
        detail: ["301 redirect map", "DNS cutover", "Analytics and Search Console", "Week-one monitoring"],
      },
    ],
    techStack: [
      { name: "Next.js", note: "App Router, static and server rendering per route" },
      { name: "TypeScript", note: "Typed end to end, including CMS content" },
      { name: "Tailwind CSS", note: "Token-driven styling, no runaway stylesheet" },
      { name: "React", note: "Component model your team can extend" },
      { name: "Sanity / Payload", note: "Headless CMS with structured content" },
      { name: "Vercel", note: "Edge delivery, preview deploys, instant rollback" },
      { name: "Playwright", note: "End-to-end tests on the paths that matter" },
      { name: "Resend", note: "Transactional email that reaches the inbox" },
    ],
    stats: [
      { value: 1.4, decimals: 1, suffix: "s", label: "Median LCP", note: "Across sites we launched last year." },
      { value: 96, label: "Lighthouse, mobile", note: "Median performance score at handover." },
      { display: "6–10", label: "Weeks, typical", note: "Design-complete to live." },
    ],
    pricingTiers: [
      {
        name: "Marketing site",
        price: "From $202",
        summary: "A content site with a CMS, forms, and blog.",
        features: [
          "Up to 10 templates",
          "Headless CMS setup",
          "Contact and lead forms",
          "Technical SEO foundation",
          "Analytics and Search Console",
        ],
        excludes: ["Ecommerce", "User accounts"],
        timeline: "6 weeks",
        bestFor: "Service businesses, agencies",
      },
      {
        name: "Growth site",
        price: "From $406",
        summary: "More templates, more integrations, more moving parts.",
        features: [
          "Unlimited templates in scope",
          "CRM and marketing automation hooks",
          "Multi-language or multi-region",
          "Search, filtering, and gated content",
          "Playwright test suite",
          "90 days of post-launch support",
        ],
        timeline: "10 weeks",
        bestFor: "SaaS, funded startups",
        highlight: true,
      },
      {
        name: "Application",
        price: "From $875",
        summary: "Authenticated product work rather than a brochure.",
        features: [
          "User accounts and permissions",
          "Custom API and database design",
          "Third-party system integration",
          "Staging and QA environments",
          "Documented handover to your team",
        ],
        timeline: "12+ weeks",
        bestFor: "Platforms, internal tools",
      },
    ],
    pricingNote:
      "Fixed price against a fixed scope. If scope changes mid-build we quote the change before doing it — no surprise line items at the end.",
    faqs: [
      {
        question: "Why Next.js instead of WordPress?",
        answer:
          "For content-heavy marketing sites where speed and search visibility matter, Next.js wins on both. But it's not automatic — if your team needs to build new page layouts themselves without a developer, WordPress or Shopify is often the better call. We'll tell you which one fits on the first call rather than selling you the stack we prefer.",
      },
      {
        question: "Will we be able to edit the site ourselves?",
        answer:
          "Yes. Text, images, blog posts, team members, testimonials, service pages — all editable in the CMS. What you can't do is drag a new section into an arbitrary spot, because that freedom is exactly what wrecks performance and layout consistency. New section types take us a couple of hours.",
      },
      {
        question: "How long does a website build take?",
        answer:
          "Six to ten weeks from design-complete for a typical marketing site. The variable is almost never the code — it's how fast content and approvals come back. Projects that stall, stall on copy.",
      },
      {
        question: "What happens to our existing search rankings?",
        answer:
          "We map every old URL to its new equivalent and serve 301 redirects on day one, keep the page titles and H1s that already rank, and submit the new sitemap immediately. Expect a small dip for two to three weeks while Google recrawls, then recovery. Losing rankings in a redesign is a preventable mistake, not an inevitability.",
      },
      {
        question: "Do you host the site?",
        answer:
          "We deploy to Vercel under your account, so you own the infrastructure and the bill. Most sites run $10–$20 a month. If you'd rather we manage it, that's part of our maintenance plan.",
      },
      {
        question: "What if we want to bring development in-house later?",
        answer:
          "That's a fine outcome and we build for it. Standard tooling, conventional structure, typed components, and a README that explains the decisions. We'll do a handover call with your developer and stay reachable for a month afterwards.",
      },
    ],
    relatedSlugs: ["web-design", "custom-development", "speed-optimization", "cms-development"],
    caseStudySlugs: ["dazzle-website", "saas-dashboard", "hartwell-mercer-law"],
    blogSlugs: [
      "nextjs-14-best-practices",
      "core-web-vitals-guide",
      "wordpress-vs-webflow-vs-nextjs",
      "how-much-does-a-website-cost",
    ],
    industrySlugs: ["saas-startups", "professional-services", "ecommerce-retail"],
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
      title: "Web Development Services — Next.js & React | Quesiono",
      description:
        "Hand-coded Next.js and React websites that score in the 90s on mobile Lighthouse. Technical SEO, accessibility, and a CMS your team can actually use.",
    },
    media: {
      imageAlt: "Code editor and browser showing a Next.js component alongside its rendered output",
    },
  },

  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    navLabel: "UI/UX Design",
    shortDescription:
      "Research, user flows, and interface design for products where the details decide retention.",
    icon: "mouse-pointer",
    href: "/services/ui-ux-design",
    group: "web",
    layoutVariant: "editorial",
    hero: {
      eyebrow: "UI/UX design",
      headline: "Interface design that removes the reason people leave",
      accent: ["removes"],
      sub: "Most products don't lose users to a missing feature. They lose them to a confusing onboarding step, a form that eats input on error, and an empty state that explains nothing. That's the work we do.",
    },
    overview: {
      heading: "UX design grounded in what users actually do",
      paragraphs: [
        "There's a version of UX that's all workshops and sticky notes and no shipped screens. We're not that. We watch five or six real users attempt the tasks that matter to your business, write down where they hesitate, and redesign those specific moments.",
        "Usability testing with five people finds most of what's wrong. It's not statistically elegant, but it's fast and it's cheap, and it beats an internal debate about which button colour converts better. When something genuinely needs numbers, we set up the test and wait for them.",
        "Our UI design work covers the parts teams skip because they're tedious: loading, empty, error, and success states; what happens on a 320px screen; what a screen reader announces. Those states are where products feel either solid or unfinished.",
      ],
    },
    outcomes: [
      "Task flows mapped end to end, including the failure paths",
      "A tested prototype before engineering commits a sprint",
      "Every component specified in all its states, not just the happy one",
      "Accessibility folded into design rather than retrofitted in QA",
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
        detail: ["Stakeholder interviews", "Analytics review", "Heuristic audit", "Support ticket analysis"],
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
        detail: ["Test plan", "5–8 sessions", "Findings report", "Revision pass"],
      },
      {
        step: "05",
        title: "Systematise",
        description:
          "Everything that survived testing gets documented as reusable components with specs engineering can build against.",
        detail: ["Component specs", "Token documentation", "Accessibility notes", "Engineering walkthrough"],
      },
    ],
    stats: [
      { value: 5, label: "Users per test round", note: "Enough to surface most usability issues." },
      { display: "3–8", label: "Weeks per engagement", note: "Depends on how many flows are in scope." },
      { value: 100, suffix: "%", label: "States specified", note: "Loading, empty, error, success." },
    ],
    faqs: [
      {
        question: "What's the difference between UI and UX design?",
        answer:
          "UX is the decision about what the screens are and what order they come in. UI is how those screens look and behave. Splitting them across two vendors is where products go wrong, so we do both.",
      },
      {
        question: "Can you work with our engineering team's existing components?",
        answer:
          "Yes, and it's usually the faster path. We'll audit what you have, design within it, and only propose new components where the existing set genuinely can't do the job.",
      },
      {
        question: "Do we need user research if we already know our users?",
        answer:
          "You know your users better than we ever will. What you can't easily see is where your own product confuses them, because you already know where everything is. That blind spot is what testing is for — and it's usually five sessions, not five weeks.",
      },
      {
        question: "How do you handle accessibility?",
        answer:
          "Contrast ratios checked in the palette before any screen is designed. Focus order defined in the flows. Every interactive component specified with its keyboard behaviour and its accessible name. Retrofitting accessibility after a build costs several times more than designing for it.",
      },
      {
        question: "Will you design in our design tool or yours?",
        answer:
          "Figma, and we'll work in your file if you have one. You get edit access from day one — no locked files, no waiting on us to export something.",
      },
    ],
    relatedSlugs: ["web-design", "web-development", "custom-development", "landing-page-development"],
    caseStudySlugs: ["saas-dashboard", "dazzle-website"],
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
      title: "UI/UX Design Services — Research to Interface | Quesiono",
      description:
        "User research, flows, prototypes, and usability testing with real people. Interface design where loading, empty, and error states get designed too.",
    },
    media: {
      imageAlt: "User flow diagram beside a set of interface screens showing multiple component states",
    },
  },

  {
    slug: "landing-page-development",
    name: "Landing Page Development",
    navLabel: "Landing Pages",
    shortDescription:
      "Single-purpose pages built for paid traffic, with the tracking wired up properly.",
    icon: "target",
    href: "/services/landing-page-development",
    group: "web",
    layoutVariant: "showcase",
    hero: {
      eyebrow: "Landing pages",
      headline: "Landing pages that don't waste your ad budget",
      accent: ["waste"],
      sub: "You're paying $4 a click. If the page takes five seconds to load on a phone, roughly a third of those clicks are gone before they read your headline. We build landing pages that load fast, say one thing, and report accurately on what happened.",
    },
    overview: {
      heading: "High-converting landing page design and build",
      paragraphs: [
        "A landing page has one job. Every element either moves someone toward that job or gets cut — which is why our landing pages usually have no site navigation, one call to action repeated, and no link out to your blog.",
        "We build them as static pages that load in around a second, because paid traffic arrives on mobile connections and bounces fast. Message match comes first: the headline echoes the ad the visitor just clicked, so there's no moment of wondering whether they're in the right place.",
        "Then the part most people get wrong — measurement. Conversion events, form submissions, scroll depth, and the ad platform's conversion API, all tested with real submissions before launch. A page you can't measure is a page you can't improve.",
      ],
    },
    outcomes: [
      "Sub-1.5s load on throttled mobile, so you keep the clicks you paid for",
      "Message match between ad and page, per campaign",
      "Conversion tracking verified with live test submissions, not assumed",
      "A/B variants ready to run from launch rather than bolted on in month three",
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
          "Cookie consent, privacy links, and — for regulated industries — the disclosure language your ad account will ask for.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Offer and audience",
        description:
          "What's being offered, to whom, arriving from which ad. Wrong answer here and nothing downstream helps.",
        detail: ["Offer definition", "Traffic source review", "Competitor page teardown"],
      },
      {
        step: "02",
        title: "Structure and copy",
        description:
          "Section order, headline options, and the objections the page has to answer before the form.",
        detail: ["Wireframe", "Headline variants", "Objection list", "CTA placement"],
      },
      {
        step: "03",
        title: "Design and build",
        description:
          "Designed and built together, since a landing page is one screen and splitting the work adds a week for nothing.",
        detail: ["Visual design", "Static build", "Mobile pass", "Form integration"],
      },
      {
        step: "04",
        title: "Instrument",
        description:
          "Tracking wired and verified with real submissions. We check the CRM received them before we call it live.",
        detail: ["GA4 events", "Ads and Meta conversion APIs", "CRM test submissions", "Call tracking"],
      },
      {
        step: "05",
        title: "Launch and read",
        description:
          "Live, then a check-in two weeks later once traffic has accumulated, with the first optimisation list.",
        detail: ["Go live", "14-day review", "Heatmap read", "Optimisation list"],
      },
    ],
    stats: [
      { value: 1.1, decimals: 1, suffix: "s", label: "Typical load time", note: "Throttled 4G, mid-range Android." },
      { display: "7–10", label: "Days to launch", note: "Single page, copy provided." },
      { value: 3, label: "Test variants", note: "Ready at launch, not later." },
    ],
    pricingTiers: [
      {
        name: "Single page",
        price: "$117",
        summary: "One offer, one audience, tracking included.",
        features: [
          "One landing page, mobile and desktop",
          "Form with CRM integration",
          "GA4 and ad platform conversion tracking",
          "Two headline variants",
        ],
        timeline: "7–10 days",
        bestFor: "A single campaign",
      },
      {
        name: "Campaign set",
        price: "$287",
        summary: "Three pages sharing a system, one per audience segment.",
        features: [
          "Three landing pages",
          "Shared component system",
          "Per-segment message match",
          "A/B testing setup",
          "Thank-you and nurture pages",
        ],
        timeline: "3 weeks",
        bestFor: "Multi-segment paid campaigns",
        highlight: true,
      },
      {
        name: "Ongoing programme",
        price: "$175",
        period: "/ month",
        summary: "A page a fortnight plus continuous testing.",
        features: [
          "Two new pages monthly",
          "Continuous A/B testing",
          "Monthly conversion report",
          "Copy iteration on losing variants",
        ],
        timeline: "Rolling, 3-month minimum",
        bestFor: "Teams spending $7.5k+/month on ads",
      },
    ],
    faqs: [
      {
        question: "Can you build the landing page on our existing site?",
        answer:
          "Usually yes, and it's often best for domain authority and shared tracking. If your current site is on a slow builder, we'll host the page separately on a subdomain instead — an extra second of load time costs more than the tidiness of one domain.",
      },
      {
        question: "Do you write the landing page copy?",
        answer:
          "We write headlines, subheads, and calls to action as part of the build, and edit your body copy for flow. Full copywriting from a blank page is a separate line item and adds about a week.",
      },
      {
        question: "How many conversions should we expect?",
        answer:
          "Anyone quoting you a number without seeing your offer, your traffic, and your price point is guessing. Across our work, well-matched pages tend to land between 4% and 12% for lead gen. Your offer and your traffic quality matter far more than the page.",
      },
      {
        question: "Can we edit the page ourselves afterwards?",
        answer:
          "Headlines, body copy, images, and testimonials are all editable in the CMS. Structural changes — adding a new section type — come to us, or we can train someone on your team over a couple of sessions.",
      },
      {
        question: "Do you run the ads too?",
        answer:
          "No. We build the page and wire the tracking; we don't manage ad accounts. We work alongside your media buyer and will happily join a call with them to align on message match and conversion events.",
      },
    ],
    relatedSlugs: ["web-design", "web-development", "ui-ux-design", "speed-optimization"],
    caseStudySlugs: ["local-restaurant-website", "northgate-dental", "castellan-realty"],
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
      title: "Landing Page Development for Paid Traffic | Quesiono",
      description:
        "Single-purpose landing pages that load in about a second, match your ad copy, and report conversions accurately. Built, instrumented, and tested before launch.",
    },
    media: {
      imageAlt: "Landing page shown on a phone alongside a conversion tracking dashboard",
    },
  },

  {
    slug: "custom-development",
    name: "Custom Development",
    shortDescription:
      "Web applications, dashboards, portals, and the integrations that hold your tools together.",
    icon: "terminal",
    href: "/services/custom-development",
    group: "web",
    layoutVariant: "split",
    hero: {
      eyebrow: "Custom development",
      headline: "Software for the parts of your business a spreadsheet outgrew",
      accent: ["outgrew"],
      sub: "Client portals, internal dashboards, booking systems, quoting tools, and the API work that stops your team copying data between four tabs. Built to be handed over, not to keep you dependent on us.",
    },
    overview: {
      heading: "Custom web application development",
      paragraphs: [
        "There's a moment in most growing businesses where the shared spreadsheet stops being clever and starts being a liability. Two people edit the same row. Someone's on an old copy. The one person who understands the formulas goes on holiday.",
        "We build the replacement: a real application with roles and permissions, an audit trail, validation that catches bad data at entry, and a database that can be queried. Usually Next.js and Postgres, sometimes alongside whatever you already run.",
        "We're deliberate about scope. The first release covers the workflow that hurts most, ships in six to ten weeks, and gets used before we build phase two. Long specification documents describing a perfect system tend to produce software nobody wanted by the time it arrives.",
      ],
    },
    outcomes: [
      "One source of truth instead of four spreadsheet copies",
      "Role-based access, so people see what they should and nothing else",
      "Integrations with the tools you already pay for rather than replacements for them",
      "Documented code and a handover plan — you're not locked in",
    ],
    deliverablesHeading: "What we build",
    deliverables: [
      {
        icon: "layout-dashboard",
        title: "Internal dashboards",
        description:
          "Operational views over your real data — pipeline, capacity, margin — instead of a monthly export into a chart nobody trusts.",
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
          "Availability rules, capacity limits, reminders, rescheduling, and calendar sync — the details that make or break a booking flow.",
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
          "SSO or email auth, granular permissions, and a log of who changed what. Necessary the moment more than five people touch the system.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Workflow mapping",
        description:
          "We sit with the people doing the job and write down what actually happens — including the workarounds nobody documented.",
        detail: ["Process interviews", "Current-state map", "Pain ranking", "Data audit"],
      },
      {
        step: "02",
        title: "Scope the first release",
        description:
          "The narrowest slice that's genuinely useful on its own. Everything else goes on a phase-two list, visibly.",
        detail: ["MVP definition", "Data model", "Integration list", "Phase-two backlog"],
      },
      {
        step: "03",
        title: "Build in two-week cycles",
        description:
          "Working software on a staging URL every fortnight. You use it and tell us what's wrong while it's still cheap to change.",
        detail: ["Fortnightly demos", "Staging environment", "Rolling feedback"],
      },
      {
        step: "04",
        title: "Migrate and pilot",
        description:
          "Real data in, then a small group runs it in parallel with the old process for a week or two.",
        detail: ["Data migration", "Reconciliation checks", "Pilot group", "Training session"],
      },
      {
        step: "05",
        title: "Roll out and hand over",
        description:
          "Full rollout, documentation, and a support window. If you have developers, we bring them in during build rather than at the end.",
        detail: ["Rollout plan", "Documentation", "Developer handover", "Support window"],
      },
    ],
    techStack: [
      { name: "Next.js", note: "One codebase for UI and API routes" },
      { name: "PostgreSQL", note: "Relational data with real constraints" },
      { name: "Prisma", note: "Typed queries and versioned migrations" },
      { name: "TypeScript", note: "Types shared between client and server" },
      { name: "Auth.js", note: "SSO, email, and role-based access" },
      { name: "Stripe", note: "Payments, subscriptions, and invoicing" },
      { name: "Playwright", note: "Automated tests on critical paths" },
      { name: "Railway / Vercel", note: "Managed hosting without a platform team" },
    ],
    stats: [
      { display: "6–10", label: "Weeks to first release", note: "Working software, not a prototype." },
      { value: 2, label: "Week sprint cycle", note: "You see progress every fortnight." },
      { display: "100%", label: "Code ownership", note: "Your repo, your licence, from day one." },
    ],
    faqs: [
      {
        question: "Wouldn't off-the-shelf software be cheaper?",
        answer:
          "Often, yes — and we'll say so. If Airtable, HubSpot, or a vertical SaaS product covers 80% of what you need, buy it. Custom development earns its keep when your process is genuinely a competitive advantage, or when licence costs across a large team have overtaken the cost of building.",
      },
      {
        question: "What happens if we stop working with you?",
        answer:
          "You keep everything. The repository is in your organisation from the first commit, the hosting is under your account, and the documentation is written for a developer who has never met us. We've handed projects to in-house teams and to other agencies without drama.",
      },
      {
        question: "How do you handle ongoing costs?",
        answer:
          "Infrastructure is usually $15–$75 a month depending on traffic and data. Beyond that you can take a maintenance retainer, buy hours as needed, or run it yourself. We don't charge a licence fee for software you paid us to build.",
      },
      {
        question: "Can you work with our existing systems?",
        answer:
          "That's most of what this work is. We integrate with CRMs, accounting packages, ERPs, and internal APIs. Where a system has no API, we look at database access, scheduled exports, or — occasionally, and reluctantly — screen automation.",
      },
      {
        question: "Do you sign NDAs and DPAs?",
        answer:
          "Yes to both. For anything touching health, financial, or personal data we'll also walk through where data lives, who can reach it, and how long it's retained before we write any code.",
      },
    ],
    relatedSlugs: ["web-development", "ui-ux-design", "cms-development", "website-maintenance"],
    caseStudySlugs: ["saas-dashboard", "castellan-realty", "hartwell-mercer-law"],
    blogSlugs: ["nextjs-14-best-practices", "automating-your-workflow-tools-tips", "how-much-does-a-website-cost"],
    industrySlugs: ["saas-startups", "professional-services", "healthcare", "real-estate"],
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
      title: "Custom Web Application Development | Quesiono",
      description:
        "Client portals, internal dashboards, booking systems, and API integrations. First release in six to ten weeks, your repo from day one, documented for handover.",
    },
    media: {
      imageAlt: "Custom dashboard interface showing operational data tables and charts",
    },
  },
];
