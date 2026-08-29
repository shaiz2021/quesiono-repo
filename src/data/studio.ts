/**
 * The studio's own facts — process, people, principles, numbers, FAQs, roles.
 *
 * Home, /about, /process, /faq, /careers and /testimonials all draw from here so
 * a change to "how long a build takes" lands everywhere at once instead of in
 * four slightly different versions.
 */

import type { ServiceStat, ServiceTier } from "./services";

export interface Principle {
  icon: string;
  title: string;
  description: string;
}

export interface StudioStep {
  step: string;
  title: string;
  description: string;
  detail?: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
  bio: string;
  /** Drop a headshot in /public/images/team/ and set this. Renders a monogram until then. */
  avatar?: string;
  /** Article slugs this person wrote, for the E-E-A-T link back from /about. */
  postSlugs?: string[];
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface OpenRole {
  slug: string;
  title: string;
  type: "Full-time" | "Part-time" | "Contract";
  location: string;
  posted: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
}

export interface StudioFaqGroup {
  label: string;
  faqs: { question: string; answer: string }[];
}

/* ------------------------------------------------------------------ stats -- */

/** Home page proof row. Every number here is one we can point at a project for. */
export const studioStats: ServiceStat[] = [
  {
    value: 96,
    label: "Median mobile Lighthouse",
    note: "Across the sites we launched in the last eighteen months.",
  },
  {
    value: 40,
    suffix: "+",
    label: "Sites designed and shipped",
    note: "Marketing sites, stores, and a handful of internal tools.",
  },
  {
    display: "1.4s",
    label: "Typical mobile LCP at launch",
    note: "Measured on a throttled 4G profile, not a desktop lab run.",
  },
  {
    value: 4,
    suffix: " yrs",
    label: "Doing this together",
    note: "Same core team since 2022.",
  },
];

/** /about — slower numbers, more about the shape of the studio than performance. */
export const studioFacts: ServiceStat[] = [
  { value: 5, label: "People", note: "Everyone here does the work. No account layer." },
  { value: 2, label: "Projects at a time", note: "Which is why we sometimes say next month." },
  { display: "6–10", label: "Weeks, typical build", note: "Kick-off to launch, for a marketing site." },
  { value: 12, label: "Clients on retainer", note: "SEO, content, and maintenance." },
];

/* ------------------------------------------------------------- principles -- */

export const principles: Principle[] = [
  {
    icon: "users",
    title: "You talk to the people building it",
    description:
      "Five of us, and all five do the work. The person who designs your homepage is on the call when you ask why the hero is that tall. Nothing gets relayed through an account manager who has to check.",
  },
  {
    icon: "gauge",
    title: "Performance is a requirement, not a phase",
    description:
      "We set a performance budget in week one — a page-weight ceiling and an LCP target — and the build fails review if it breaks them. Retrofitting speed after launch costs three times as much and never gets all the way back.",
  },
  {
    icon: "search",
    title: "Search structure goes in during the build",
    description:
      "URL structure, internal links, headings, and schema are decided while the pages are being designed. A site that launches with those wrong needs a migration to fix, and migrations lose rankings.",
  },
  {
    icon: "file-text",
    title: "We write the copy, or we work from yours",
    description:
      "Design around lorem ipsum produces layouts that break the moment real sentences arrive. If the copy isn't ready, we write it. If you have a writer, they get the wireframes first.",
  },
  {
    icon: "clipboard",
    title: "Fixed scope, fixed price, written down",
    description:
      "You get a document listing every page, every template, and what's explicitly out. Change requests get quoted separately. Nobody discovers the budget moved in week five.",
  },
  {
    icon: "handshake",
    title: "You own everything at the end",
    description:
      "Repository, hosting account, domain, design files, analytics. We'll keep maintaining it if you want us to — but leaving costs you a handover call, not a rebuild.",
  },
];

/* ---------------------------------------------------------------- process -- */

export const studioProcess: StudioStep[] = [
  {
    step: "01",
    title: "Call and scope",
    description:
      "Forty-five minutes on what the site needs to do and what's currently stopping it. We come out of it with either a written scope or an honest no.",
    detail: [
      "Who buys from you, and what they need to know before they will",
      "What the current site does badly, with analytics if you have them",
      "Hard constraints: launch date, budget ceiling, systems we have to talk to",
      "Whether we're the right studio for it — sometimes we're not",
    ],
  },
  {
    step: "02",
    title: "Structure and copy",
    description:
      "Sitemap, page-by-page outline, and the first draft of the words. This is the stage that decides whether the site works, and it happens before anyone opens a design tool.",
    detail: [
      "Sitemap with URL structure locked, so nothing needs redirecting later",
      "Keyword and intent mapping per page",
      "Copy drafted in a shared doc where you can comment line by line",
      "Wireframes at two breakpoints once the copy is roughly settled",
    ],
  },
  {
    step: "03",
    title: "Design",
    description:
      "Two directions for the key page, then one gets developed out across every template. Real copy, real image ratios, mobile and desktop together.",
    detail: [
      "Type scale, colour system, and component states defined once",
      "Every template designed, not just the homepage",
      "Mobile designed alongside desktop rather than squashed afterwards",
      "One round of revisions per template is built into the price",
    ],
  },
  {
    step: "04",
    title: "Build",
    description:
      "Front end, CMS, integrations, and the performance budget enforced as we go. You get a preview URL from day one and it updates on every commit.",
    detail: [
      "Preview deploy per branch, so you review real pages not screenshots",
      "Accessibility checked as components are built — contrast, focus, keyboard order",
      "Page-weight and LCP budgets fail the build if broken",
      "CMS modelled so your team can edit without breaking layouts",
    ],
  },
  {
    step: "05",
    title: "Test and launch",
    description:
      "Cross-browser and cross-device passes, redirect map, analytics verification, then the DNS switch — usually on a Tuesday morning, never on a Friday.",
    detail: [
      "Redirect map for every old URL, tested before the switch",
      "Real-device testing on iOS and Android, not just emulators",
      "Analytics and conversion events verified firing, with the numbers to prove it",
      "Search Console, sitemap submission, and indexing checked the same week",
    ],
  },
  {
    step: "06",
    title: "Thirty days, then your call",
    description:
      "A month of included fixes and a written handover. After that you either run it yourself or we stay on maintenance — both are fine.",
    detail: [
      "Anything broken in the first thirty days is fixed free",
      "Loom walkthrough of the CMS, plus a written doc",
      "Full credential and repository handover",
      "Optional retainer for updates, monitoring, and content",
    ],
  },
];

/* ------------------------------------------------------------------- team -- */

export const team: TeamMember[] = [
  {
    name: "Hamza Iqbal",
    role: "Founder",
    focus: "Scoping, pricing, and whoever needs unblocking",
    bio: "Started the studio in 2022 after four years of watching agencies quote a number and deliver a different one. Takes every first call, writes every scope document, and still does the pricing himself so nobody has to guess what a project costs.",
    postSlugs: ["how-much-does-a-website-cost"],
  },
  {
    name: "Rida Malik",
    role: "Design Lead",
    focus: "Interface design, type systems, conversion layout",
    bio: "Designs from the copy outward — she'd rather argue about a headline for an hour than pick a shade of blue. Owns the type scale and component system that every build here starts from, and the reason our contrast ratios get checked twice.",
    postSlugs: [
      "how-to-build-website-that-converts",
      "ux-design-principles-that-increase-conversions",
      "website-redesign-checklist",
      "brand-identity-guide-2025",
    ],
  },
  {
    name: "Bilal Rehman",
    role: "Lead Developer",
    focus: "Next.js, headless CMS, Core Web Vitals",
    bio: "Writes the front end and enforces the performance budget, which mostly means telling the rest of us that the carousel isn't worth 180KB. Rebuilt our own site three times because he kept finding a faster way to render the same thing.",
    postSlugs: [
      "core-web-vitals-guide",
      "nextjs-14-best-practices",
      "wordpress-vs-webflow-vs-nextjs",
      "shopify-store-conversion-optimization",
      "automating-your-workflow-tools-tips",
    ],
  },
  {
    name: "Ayesha Nadeem",
    role: "SEO Lead",
    focus: "Technical audits, local search, internal linking",
    bio: "Runs the technical side of search: crawl budget, index bloat, the redirect maps that stop a relaunch from costing you six months of rankings. Keeps a spreadsheet of every ranking change on every client site, which has caught more than one problem before the client noticed.",
    postSlugs: [
      "technical-seo-audit-checklist",
      "seo-basics-getting-started-2025",
      "local-seo-strategy-small-business",
    ],
  },
  {
    name: "Zoya Farooq",
    role: "Content Lead",
    focus: "Site copy, long-form articles, editorial planning",
    bio: "Writes the pages and edits everything the rest of us write, which is why the site doesn't read like five different people. Interviews clients before drafting, so the copy sounds like the business rather than like an agency describing a business.",
    postSlugs: ["content-strategy-that-actually-works"],
  },
];

/* -------------------------------------------------------------- milestones -- */

export const milestones: Milestone[] = [
  {
    year: "2022",
    title: "Two people and one client",
    description:
      "Hamza and Rida took on a single WordPress rebuild for a Houston contractor, working evenings. It launched three weeks late and taught us to quote timelines with the review rounds included.",
  },
  {
    year: "2023",
    title: "Development came in-house",
    description:
      "Bilal joined and we stopped subcontracting builds. Turnaround dropped by about a third, mostly because nobody was waiting on someone else's queue any more.",
  },
  {
    year: "2024",
    title: "Search and content stopped being add-ons",
    description:
      "Ayesha and Zoya joined within four months of each other. Sites started launching with the copy written and the structure mapped instead of both arriving after the design was signed off.",
  },
  {
    year: "2025",
    title: "We started saying no",
    description:
      "Capped ourselves at two active builds. Revenue flattened for two quarters and the work got noticeably better, so we kept the cap.",
  },
  {
    year: "2026",
    title: "Our own tools",
    description:
      "Shipped Resumeflow AI, the first product we built for ourselves rather than a client. It pays for the experiments the client work can't justify.",
  },
];

/* ------------------------------------------------------------------- FAQs -- */

export const studioFaqGroups: StudioFaqGroup[] = [
  {
    label: "Working together",
    faqs: [
      {
        question: "How does a project usually start?",
        answer:
          "A forty-five minute call, then a written scope within three working days. The scope lists every page, every template, what's included, and what isn't. You sign it and pay 40% to hold a start date. Nothing begins before that document exists, because that's how projects grow sideways.",
      },
      {
        question: "How much of my time will this take?",
        answer:
          "Around six to eight hours across a typical eight-week build, in chunks: the kick-off call, a copy review, two design reviews, and content gathering. The copy review is the one that matters most — an hour spent there saves a week later.",
      },
      {
        question: "Who actually does the work?",
        answer:
          "The five people on the about page. There's no bench of contractors and nothing gets outsourced. It's also why we only run two builds at a time, and why we occasionally tell people the earliest start is next month.",
      },
      {
        question: "What if I don't like the design?",
        answer:
          "You see two directions for the key page before anything else gets built, so a mismatch surfaces in week three rather than week seven. One revision round per template is in the price. If both directions miss and we can't find a third you're happy with, you pay for the work done and keep the files.",
      },
      {
        question: "Do you work with clients outside the US?",
        answer:
          "Yes — roughly a third of our work is UK, Canada, and Australia. We hold calls between 8am and 6pm Central and get async work done in the gaps. Anything more than eight hours off tends to add a day to each review cycle, and we say so when quoting.",
      },
    ],
  },
  {
    label: "Money and timelines",
    faqs: [
      {
        question: "How do you price?",
        answer:
          "Fixed price against a fixed scope. Once the scope is signed, the number doesn't move unless you ask for something that isn't in it, and then you get a separate quote before we start on it. We don't bill hourly for project work — you shouldn't be paying for our learning curve.",
      },
      {
        question: "What does a website actually cost?",
        answer:
          "A single landing page starts around $117. A five to eight page marketing site with a CMS runs $118 to $231. Ecommerce starts near $306. Custom application work starts at $875. The pricing page breaks down what moves those numbers.",
      },
      {
        question: "How long does a build take?",
        answer:
          "Six to ten weeks for a marketing site, ten to sixteen for a store, and two to three for a single landing page. The variable is almost never our build speed — it's how fast copy, images, and review feedback come back. We flag that in the kick-off, not afterwards.",
      },
      {
        question: "Do you take payment in stages?",
        answer:
          "Three payments: 40% to start, 30% at design sign-off, 30% before launch. Retainers are billed monthly in advance and cancellable with thirty days' notice.",
      },
      {
        question: "Can you work to a hard launch date?",
        answer:
          "Usually, if it's realistic and you tell us at the start. If a date only works by cutting scope, we'll tell you which pages to drop rather than quietly shipping something half-finished on time.",
      },
    ],
  },
  {
    label: "Technical",
    faqs: [
      {
        question: "What do you build sites on?",
        answer:
          "WordPress when a team needs to publish daily and wants an editor they already know. Next.js when speed and custom functionality matter more than familiar admin. Shopify for stores. Webflow occasionally, for marketing sites a small team will maintain alone. We pick after the scope call, not before.",
      },
      {
        question: "Will it be fast?",
        answer:
          "We set an LCP target and a page-weight ceiling in week one and the build doesn't pass review if it misses them. Median mobile Lighthouse across our launches is 96, and typical mobile LCP at launch is around 1.4 seconds on throttled 4G.",
      },
      {
        question: "Can I edit the site myself?",
        answer:
          "Yes. The CMS is modelled around the content you actually publish, with fields constrained so a long headline can't break a layout. You get a Loom walkthrough and a written doc at handover.",
      },
      {
        question: "What happens to my rankings if you rebuild my site?",
        answer:
          "That's what the redirect map is for. Every existing URL gets mapped to its new equivalent, tested before the DNS switch, and monitored in Search Console for the first month. Traffic usually dips for one to two weeks, then recovers past where it was — assuming the old URLs were worth keeping, which we check first.",
      },
      {
        question: "Do you offer hosting and maintenance?",
        answer:
          "Optional, monthly, no lock-in. It covers updates, backups, uptime monitoring, security patching, and a set number of content changes. You can also take the whole thing in-house — the handover includes every credential and the repository.",
      },
      {
        question: "Is accessibility included?",
        answer:
          "The basics are non-negotiable and in every build: colour contrast, keyboard navigation, focus states, semantic headings, real alt text, and labelled form fields. Full WCAG 2.2 AA certification with an audit report is a separate piece of work, and we'll quote it if you need it.",
      },
    ],
  },
];

/** Flat list for FAQPage schema on /faq. */
export const studioFaqs = studioFaqGroups.flatMap((group) => group.faqs);

/** The six that go on the home page. */
export const homeFaqs = [
  studioFaqGroups[1].faqs[1],
  studioFaqGroups[1].faqs[2],
  studioFaqGroups[2].faqs[0],
  studioFaqGroups[0].faqs[2],
  studioFaqGroups[2].faqs[3],
  studioFaqGroups[1].faqs[0],
];

/* ------------------------------------------------------------------ roles -- */

export const openRoles: OpenRole[] = [
  {
    slug: "senior-frontend-developer",
    title: "Senior Front-End Developer",
    type: "Full-time",
    location: "Houston, TX or remote (US hours)",
    posted: "2026-07-15",
    summary:
      "Build client sites in Next.js and TypeScript, own the performance budget, and be the person who says no to the 200KB dependency.",
    responsibilities: [
      "Build marketing sites and stores in Next.js, from designed templates to launch",
      "Hold the LCP and page-weight budget on every project, and argue for it when someone wants a carousel",
      "Model headless CMS content so clients can edit without breaking layouts",
      "Review Bilal's pull requests, and have yours reviewed properly in return",
    ],
    requirements: [
      "Four or more years writing production React, at least one of them in Next.js App Router",
      "You can read a Lighthouse trace and say what to change, not just that the score is low",
      "Comfortable with semantic HTML and keyboard accessibility as a default, not a checklist",
      "You've shipped something a non-technical client edits daily and it hasn't broken",
    ],
    niceToHave: [
      "WordPress as a headless backend",
      "Shopify Hydrogen or the Storefront API",
      "You've written about your work somewhere public",
    ],
  },
  {
    slug: "seo-strategist",
    title: "SEO Strategist",
    type: "Full-time",
    location: "Remote (US hours)",
    posted: "2026-08-05",
    summary:
      "Run technical audits and content plans for a dozen retainer clients, and get to fix the problems you find instead of handing over a PDF.",
    responsibilities: [
      "Own technical audits: crawl analysis, index management, internal linking, schema",
      "Build keyword and intent maps that feed straight into page structure during builds",
      "Write and defend redirect maps for relaunches",
      "Report monthly in plain language — what moved, what didn't, what's next",
    ],
    requirements: [
      "Three or more years in SEO with hands-on Screaming Frog, GSC, and log-file work",
      "You can explain why a page isn't indexed without saying it's a Google update",
      "Comfortable reading HTML and talking to developers as peers",
      "Evidence of a ranking recovery or a relaunch you kept clean",
    ],
    niceToHave: ["Local SEO at multi-location scale", "Basic SQL or Python for log analysis"],
  },
  {
    slug: "content-writer",
    title: "Content Writer (Contract)",
    type: "Contract",
    location: "Remote",
    posted: "2026-06-30",
    summary:
      "Write site copy and long-form articles for B2B, SaaS, and trades clients. Two to four pieces a month, paid per piece.",
    responsibilities: [
      "Interview clients and write site copy that sounds like them",
      "Draft 1,200 to 2,500 word articles that hold up to someone who does the job",
      "Work from a keyword and intent brief without writing to a keyword density",
      "Take edits from Zoya without getting precious about sentences",
    ],
    requirements: [
      "A portfolio of published long-form work with your name on it",
      "You research by talking to practitioners, not by reading the top three results",
      "You can hold a voice across a whole site, not just one page",
    ],
    niceToHave: ["Technical background in software, construction, or healthcare"],
  },
];

export const getRoleBySlug = (slug: string) => openRoles.find((role) => role.slug === slug);

export const roleParams = () => openRoles.map((role) => ({ slug: role.slug }));

/* ------------------------------------------------------------ pricing bands -- */

export interface PricingBand {
  label: string;
  range: string;
  timeline: string;
  summary: string;
  includes: string[];
  serviceSlug: string;
}

/**
 * The /pricing overview. Numbers here are the same ones the individual service
 * pages quote — if you change a tier there, change the band here.
 */
export const pricingBands: PricingBand[] = [
  {
    label: "Single landing page",
    range: "$249",
    timeline: "2–3 days",
    summary:
      "One page built to convert a specific campaign. Copy, design, build, and conversion tracking.",
    includes: [
      "Copy written from a positioning call",
      "Design at three breakpoints",
      "Form or booking integration",
      "Conversion events wired and verified",
    ],
    serviceSlug: "landing-page-development",
  },
  {
    label: "Marketing site",
    range: "$399",
    timeline: "1 week",
    summary:
      "Five to twelve pages with a CMS your team can run. The most common project we take.",
    includes: [
      "Sitemap, keyword mapping, and copy for every page",
      "Design system plus every template",
      "CMS modelled to your content",
      "Technical SEO and analytics at launch",
    ],
    serviceSlug: "web-development",
  },
  {
    label: "Ecommerce",
    range: "$999",
    timeline: "2 weeks",
    summary:
      "Shopify or headless, built around your catalogue size and how people actually search it.",
    includes: [
      "Catalogue structure, facets, and search",
      "Checkout and payment configuration",
      "Product data and inventory integration",
      "Post-launch conversion review at thirty days",
    ],
    serviceSlug: "ecommerce-development",
  },
  {
    label: "Custom application",
    range: "From $1999",
    timeline: "3 weeks",
    summary:
      "Portals, dashboards, and tools where the interesting part is the logic rather than the pages.",
    includes: [
      "Technical discovery and architecture document",
      "Authentication, roles, and permissions",
      "API and third-party integrations",
      "Staged delivery with working software each sprint",
    ],
    serviceSlug: "custom-development",
  },
];

/* ---------------------------------------------------------------- retainers -- */

/**
 * Monthly work, as opposed to project work. Three tiers because two looks like
 * an upsell and five means nobody chooses.
 */
export const retainerTiers: ServiceTier[] = [
  {
    name: "Care plan",
    price: "$249",
    period: "per month",
    summary: "Keeping a site we built fast, patched, and backed up. No strategy, no new pages.",
    features: [
      "Core, plugin, and dependency updates on a fortnightly cycle",
      "Daily off-site backups with a tested restore",
      "Uptime monitoring with a real person notified",
      "Two hours of content or layout changes each month",
      "Quarterly Core Web Vitals check with a written summary",
    ],
    excludes: ["New templates or page types", "SEO or content strategy"],
    bestFor: "Sites that are done and need to stay done",
  },
  {
    name: "Search retainer",
    price: "$499",
    period: "per month",
    summary:
      "Ongoing SEO on a site that already works. Technical fixes, content briefs, and links.",
    features: [
      "Monthly technical crawl with fixes implemented, not just listed",
      "Keyword and intent mapping refreshed each quarter",
      "Two content briefs a month, written for a specific query set",
      "Internal linking and cannibalisation cleanup",
      "One reporting call a month, in plain language",
    ],
    excludes: ["Writing the articles themselves", "Paid media management"],
    bestFor: "Businesses where organic is the main channel",
    highlight: true,
  },
  {
    name: "Growth partner",
    price: "From $999",
    period: "per month",
    summary:
      "Design, build, SEO, and writing on a rolling basis. For teams shipping continuously.",
    features: [
      "Everything in the care plan and the search retainer",
      "Four to six published articles a month, written and edited here",
      "New landing pages and templates as campaigns need them",
      "Conversion review each quarter with a prioritised change list",
      "A named person on Slack during business hours",
    ],
    bestFor: "Teams treating the site as a channel, not a brochure",
  },
];

/* --------------------------------------------------------- pricing factors -- */

/** What actually moves a quote up or down. Straight answers, not hedging. */
export const pricingFactors = [
  {
    icon: "layers",
    title: "How many templates, not how many pages",
    description:
      "Forty blog posts on one template cost less than four pages that each look different. When we ask how many page types you need, that's why.",
  },
  {
    icon: "file-edit",
    title: "Who writes the copy",
    description:
      "We write it: add $13 to $30 a page. You write it: nothing extra, but the build waits on you, and that's the single most common cause of a slipped launch.",
  },
  {
    icon: "plug",
    title: "What it has to connect to",
    description:
      "A contact form is free. A CRM sync, an inventory feed, or a booking system with real availability is a day to a week of work each, quoted separately.",
  },
  {
    icon: "search",
    title: "Whether there's an old site to migrate",
    description:
      "A redirect map for 60 URLs is half a day. For 4,000, it's a week and a crawl. Rankings are the thing at risk, so we don't skip it to save the line item.",
  },
  {
    icon: "gauge",
    title: "How hard the performance target is",
    description:
      "A 96 mobile Lighthouse on a text-heavy marketing site is routine. The same score on a store with 30 product images per page takes real work.",
  },
  {
    icon: "calendar",
    title: "How fast you need it",
    description:
      "Standard timelines are in every quote. Compressing one means reordering our other project, and that carries a 20% premium — we'd rather say the number than pretend it's free.",
  },
];

