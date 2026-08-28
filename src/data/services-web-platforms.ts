import type { Service } from "./services";

/**
 * Platform-specific builds and post-launch work. Split from services-web-build.ts
 * purely so neither file becomes unreadable — both feed webServices.
 */
export const platformServices: Service[] = [
  {
    slug: "cms-development",
    name: "CMS Development",
    shortDescription:
      "Content systems your marketing team can run without filing a ticket.",
    icon: "layout-dashboard",
    href: "/services/cms-development",
    group: "web",
    layoutVariant: "stacked",
    hero: {
      eyebrow: "CMS development",
      headline: "A content system your team stops being afraid of",
      accent: ["afraid"],
      sub: "Most CMS projects fail on the editing experience, not the build. If publishing a blog post means remembering which of nine fields is the real one, nobody publishes. We model content around how your team writes.",
    },
    overview: {
      heading: "Headless CMS development, modelled for editors",
      paragraphs: [
        "There are two ways to build a CMS. One gives editors a single rich-text box and hopes for the best — layouts break within a month. The other gives them forty fields per page and they stop using it. Neither works.",
        "We model content in structured blocks: a testimonial block, a stats band, a two-column feature, a pricing table. Editors compose pages from those blocks and can't produce something broken, because each block only accepts the content it can render. Add a new block type and it appears everywhere it applies.",
        "We work with Sanity and Payload most often, and with headless WordPress when a team already knows that admin and doesn't want to relearn anything. The choice depends on who edits and how often, which we work out on the first call rather than deciding in advance.",
      ],
    },
    outcomes: [
      "Editors publish new pages without a developer",
      "Live preview before anything goes public — no publish-and-refresh gambling",
      "Content typed end to end, so a missing field is a build error rather than an empty div",
      "Versioning and rollback, because someone will paste over the homepage eventually",
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
        detail: ["Schema definition", "Validation rules", "Editor review session"],
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
          "Existing content moved in — scripted where the source is structured, by hand where it isn't. Nothing gets lost quietly.",
        detail: ["Migration scripts", "Manual cleanup", "Redirect check", "Content QA"],
      },
      {
        step: "05",
        title: "Train and hand over",
        description:
          "A working session with your editors, then two weeks on call while they publish their first real pages.",
        detail: ["Training session", "Written guide", "Two-week support"],
      },
    ],
    techStack: [
      { name: "Sanity", note: "Structured content, strong live preview, generous free tier" },
      { name: "Payload", note: "Self-hosted, TypeScript-native, no per-seat cost" },
      { name: "WordPress (headless)", note: "Familiar admin, decoupled front end" },
      { name: "Next.js", note: "Incremental static regeneration on publish" },
      { name: "Cloudinary / local", note: "Image pipeline with automatic formats" },
    ],
    stats: [
      { display: "3–5", label: "Weeks, typical", note: "Model, build, migrate, train." },
      { value: 12, label: "Reusable blocks", note: "Median across recent projects." },
      { value: 0, label: "Developer tickets", note: "To publish a standard page." },
    ],
    faqs: [
      {
        question: "Should we use WordPress or a headless CMS?",
        answer:
          "If your team needs to build genuinely new layouts on their own, and you'd rather not involve a developer, traditional WordPress with a good block setup is a defensible choice. If you want speed, security, and content that can feed a site and an app, headless wins. We'll ask who edits, how often, and what they need to change, then recommend one.",
      },
      {
        question: "Can we keep our current CMS and just rebuild the front end?",
        answer:
          "Often yes. WordPress, Contentful, Craft, and Drupal all expose APIs we can build a Next.js front end against. Your editors keep the admin they know and the site gets much faster. It's a good option when retraining a large content team isn't realistic.",
      },
      {
        question: "What does the CMS cost to run?",
        answer:
          "Sanity is free for small teams and typically $15–$100 a month past that. Payload is self-hosted, so you pay for hosting only — around $20 a month. WordPress hosting runs $15–$50. We size this during scoping so there are no surprises.",
      },
      {
        question: "How do you handle content migration?",
        answer:
          "Structured sources get a script with a reconciliation report you can check row by row. Unstructured pages get moved by hand — slower, but it's also when duplicate and dead content finally gets deleted. Either way we keep the old URLs and redirect them.",
      },
      {
        question: "Will the site still be fast with a CMS behind it?",
        answer:
          "Faster, usually. Pages are statically generated at publish time and served from a CDN, so a visitor never waits on a database query. Editing triggers a rebuild of just the affected pages, which takes a few seconds.",
      },
    ],
    relatedSlugs: ["web-development", "wordpress-development", "content-writing", "custom-development"],
    caseStudySlugs: ["dazzle-website", "hartwell-mercer-law", "saas-dashboard"],
    blogSlugs: ["wordpress-vs-webflow-vs-nextjs", "nextjs-14-best-practices", "content-strategy-that-actually-works"],
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
      title: "CMS Development — Headless & Editor-First | Quesiono",
      description:
        "Headless CMS development modelled around how your team writes. Composable blocks, live preview, content migration, and training your editors actually use.",
    },
    media: {
      imageAlt: "CMS editor interface with a block-based page composer and live preview panel",
    },
  },

  {
    slug: "wordpress-development",
    name: "WordPress Development",
    shortDescription:
      "Custom WordPress themes and plugin work — no bloated builder, no 40-plugin stack.",
    icon: "brush",
    href: "/services/wordpress-development",
    group: "web",
    layoutVariant: "split",
    hero: {
      eyebrow: "WordPress development",
      headline: "WordPress done properly, for once",
      accent: ["properly"],
      sub: "Custom themes, real block patterns, and a plugin list you can count on one hand. If your current site runs Elementor plus thirty-eight plugins and takes six seconds to load, this is the fix.",
    },
    overview: {
      heading: "Custom WordPress development without the bloat",
      paragraphs: [
        "WordPress powers something like two in five websites, and it deserves better than the reputation it's earned. The reputation comes from stacked page builders, themes shipping every feature imaginable, and plugin sprawl nobody audited.",
        "We build custom themes against the block editor with registered patterns, so your team composes pages from sections we designed rather than dragging widgets into a grid. Every plugin has to justify itself — if it exists to do something forty lines of theme code can do, we write the forty lines.",
        "Where WordPress is genuinely the right call: teams already trained on it, sites needing WooCommerce, and organisations with a content workflow built around WordPress roles. Where it isn't, we'll say so.",
      ],
    },
    outcomes: [
      "A custom theme with no page builder in the render path",
      "Plugin count usually under eight, each one justified in writing",
      "Load times in the 1–2 second range instead of 5–8",
      "Updates, backups, and security hardening set up rather than assumed",
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
        detail: ["Plugin inventory", "Performance baseline", "Security scan", "Update backlog"],
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
        detail: ["Theme build", "Block patterns", "ACF fields", "Staging review"],
      },
      {
        step: "04",
        title: "Optimise",
        description:
          "Caching, images, scripts, and database. Re-measured against the baseline so the gain is a number, not a claim.",
        detail: ["Caching layer", "Image pipeline", "Script audit", "Before/after metrics"],
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
      { name: "WordPress", note: "Latest stable, block editor native" },
      { name: "Advanced Custom Fields", note: "Structured content for editors" },
      { name: "WooCommerce", note: "When the store needs to live in WordPress" },
      { name: "WP Rocket / LiteSpeed", note: "Page and object caching" },
      { name: "Cloudflare", note: "CDN, image resizing, WAF" },
      { name: "WP-CLI", note: "Scripted migrations and maintenance" },
    ],
    stats: [
      { value: 8, prefix: "<", label: "Plugins, typical", note: "Down from 30+ on sites we inherit." },
      { value: 68, suffix: "%", label: "Median load-time cut", note: "On rebuild projects, measured on mobile." },
      { display: "4–7", label: "Weeks, typical", note: "Custom theme, content migrated." },
    ],
    pricingTiers: [
      {
        name: "Rescue",
        price: "$150",
        summary: "Keep your current design, fix what's broken underneath.",
        features: [
          "Plugin audit and cleanup",
          "Performance optimisation",
          "Security hardening and backups",
          "Before/after performance report",
        ],
        excludes: ["New design", "Custom theme"],
        timeline: "2 weeks",
        bestFor: "Slow, plugin-heavy sites",
      },
      {
        name: "Custom theme",
        price: "From $225",
        summary: "New design, custom theme, content migrated.",
        features: [
          "Custom block-editor theme",
          "Block patterns for every section",
          "ACF field groups",
          "Content migration",
          "Performance and security setup",
          "Editor training",
        ],
        timeline: "5 weeks",
        bestFor: "Most WordPress rebuilds",
        highlight: true,
      },
      {
        name: "WooCommerce",
        price: "From $781",
        summary: "Store build on top of a custom theme.",
        features: [
          "Everything in Custom theme",
          "WooCommerce configuration",
          "Custom checkout flow",
          "Payment and shipping setup",
          "Product import",
          "Order and inventory integrations",
        ],
        timeline: "8 weeks",
        bestFor: "Retailers staying on WordPress",
      },
    ],
    faqs: [
      {
        question: "Do you use Elementor, Divi, or WPBakery?",
        answer:
          "No. Those builders are why so many WordPress sites are slow — they ship a large runtime and generate deeply nested markup for a layout that could be twenty lines of HTML. We build against the native block editor instead, which gives editors similar flexibility with a fraction of the weight.",
      },
      {
        question: "Can you fix our existing WordPress site instead of rebuilding it?",
        answer:
          "Often, and it's cheaper. If the design is fine and the problem is speed, security, or plugin chaos, our Rescue engagement addresses that in about two weeks. If the theme itself is a builder-generated mess, rebuilding costs less than fighting it.",
      },
      {
        question: "Is WordPress secure enough?",
        answer:
          "WordPress core is well maintained. Almost every compromise we're called about traces to an abandoned plugin, a weak admin password, or a site three major versions behind. Hardened, updated, and backed up, it's fine. Neglected, it's a liability — and that's true of any platform.",
      },
      {
        question: "Who handles updates after launch?",
        answer:
          "Your call. We can hand you a documented update process, or take it on under a maintenance plan — monthly core and plugin updates on staging first, visual regression check, then production, with a restore point before each round.",
      },
      {
        question: "Can you move us off WordPress later?",
        answer:
          "Yes, and content structured in ACF migrates cleanly to a headless CMS because the fields are already defined. We've done that move a few times. It's much easier than exporting from a page builder, where the content and the layout are tangled together.",
      },
    ],
    relatedSlugs: ["cms-development", "web-design", "speed-optimization", "website-maintenance"],
    caseStudySlugs: ["local-restaurant-website", "northgate-dental", "hartwell-mercer-law"],
    blogSlugs: ["wordpress-vs-webflow-vs-nextjs", "core-web-vitals-guide", "website-redesign-checklist"],
    industrySlugs: ["restaurants-hospitality", "healthcare", "professional-services"],
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
      title: "WordPress Development — Custom Themes, No Bloat | Quesiono",
      description:
        "Custom WordPress themes built on the block editor, not a page builder. Plugin cleanup, performance work, security hardening, and WooCommerce done right.",
    },
    media: {
      imageAlt: "WordPress block editor showing custom patterns beside a performance report",
    },
  },

  {
    slug: "shopify-development",
    name: "Shopify Development",
    shortDescription:
      "Custom Shopify themes and app work for stores that have outgrown Dawn.",
    icon: "shopping-bag",
    href: "/services/shopify-development",
    group: "web",
    layoutVariant: "showcase",
    hero: {
      eyebrow: "Shopify development",
      headline: "A Shopify store that looks nothing like a Shopify store",
      accent: ["nothing"],
      sub: "Custom themes built on Online Store 2.0, Liquid written by hand, and a checkout flow tuned around where your customers actually drop off. Plus the app cleanup that usually pays for itself.",
    },
    overview: {
      heading: "Custom Shopify theme development",
      paragraphs: [
        "Shopify handles the hard parts — payments, tax, inventory, PCI compliance — better than almost anything you'd build. What it doesn't handle is making your store distinctive, and a lightly edited Dawn theme with six apps bolted on won't do it either.",
        "We build custom themes on Online Store 2.0 with real sections and blocks, so your team rearranges the homepage and builds landing pages without touching Liquid. Metafields carry the product detail your category needs — fit notes, ingredient lists, compatibility tables — instead of everything getting jammed into the description field.",
        "The app audit is where most stores find quick money. We've seen storefronts loading eleven apps, four of them abandoned, together adding three seconds to every page. Cutting that is often the single biggest conversion win available.",
      ],
    },
    outcomes: [
      "Custom sections your merchandising team can rearrange themselves",
      "Product pages built for your category, not a generic template",
      "App stack audited — usually 3 to 5 removed, with the load time to show it",
      "Checkout extensions and upsells that don't slow the last step down",
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
          "Structured product data — materials, care, specs, compatibility — modelled properly and reusable across templates.",
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
        detail: ["Funnel analysis", "App load audit", "Theme review", "Speed baseline"],
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
        detail: ["Section design", "Liquid build", "Metafield setup", "Real-catalogue QA"],
      },
      {
        step: "04",
        title: "Integrate and test",
        description:
          "Apps, ERP or 3PL hooks, payment methods, and full test orders through every shipping and tax combination.",
        detail: ["App integration", "Test orders", "Tax and shipping checks", "Email templates"],
      },
      {
        step: "05",
        title: "Launch and tune",
        description:
          "Theme published, redirects in place, then two weeks reading real session data and fixing what it exposes.",
        detail: ["Theme publish", "URL redirects", "Analytics verification", "Two-week tuning"],
      },
    ],
    techStack: [
      { name: "Shopify OS 2.0", note: "JSON templates, sections everywhere" },
      { name: "Liquid", note: "Hand-written, no theme-builder layer" },
      { name: "Metaobjects", note: "Structured content beyond products" },
      { name: "Shopify Functions", note: "Custom discounts and delivery logic" },
      { name: "Hydrogen", note: "Headless storefront when the catalogue justifies it" },
      { name: "Klaviyo", note: "Email and SMS with real event data" },
    ],
    stats: [
      { value: 4, label: "Apps removed, median", note: "On stores we take over." },
      { value: 2.3, decimals: 1, suffix: "s", label: "Median speed gain", note: "Product page, mobile." },
      { display: "5–8", label: "Weeks, typical", note: "Custom theme with catalogue migration." },
    ],
    pricingTiers: [
      {
        name: "Theme tune-up",
        price: "$200",
        summary: "Keep the theme, fix speed and conversion leaks.",
        features: [
          "App audit and cleanup",
          "Speed optimisation",
          "Product and cart page improvements",
          "Conversion report with a ranked fix list",
        ],
        excludes: ["Custom theme", "New design"],
        timeline: "2–3 weeks",
        bestFor: "Stores on a stock theme",
      },
      {
        name: "Custom theme",
        price: "From $306",
        summary: "A theme built for your catalogue and brand.",
        features: [
          "Custom OS 2.0 theme",
          "Sections for every page type",
          "Metafield and metaobject model",
          "App integration",
          "Ecommerce SEO foundation",
          "Team training",
        ],
        timeline: "6 weeks",
        bestFor: "Growing DTC brands",
        highlight: true,
      },
      {
        name: "Headless (Hydrogen)",
        price: "From $1,500",
        summary: "For large catalogues or storefronts needing more than Liquid allows.",
        features: [
          "Hydrogen storefront",
          "Custom search and filtering",
          "Content from a headless CMS",
          "B2B or wholesale flows",
          "Performance budget enforced in CI",
        ],
        timeline: "10–14 weeks",
        bestFor: "High-volume and multi-market stores",
      },
    ],
    faqs: [
      {
        question: "Shopify or WooCommerce?",
        answer:
          "Shopify if selling is your core business and you'd rather not think about PCI compliance, tax tables, or server capacity on a launch day. WooCommerce if you need unusual product logic, already run WordPress, and have someone to maintain it. Most stores under a few hundred SKUs are better off on Shopify.",
      },
      {
        question: "Will a custom theme survive Shopify updates?",
        answer:
          "Yes. Custom OS 2.0 themes aren't tied to Shopify's release cycle the way an old vintage theme was. Platform features arrive through the admin and the API. We do check compatibility whenever Shopify ships a major change, and that's part of a maintenance plan if you take one.",
      },
      {
        question: "Can you migrate us from another platform?",
        answer:
          "We've moved stores from WooCommerce, Magento, BigCommerce, and Squarespace. Products, variants, customers, and order history transfer; the careful part is the URL redirect map, since collection and product URL structures differ between platforms and getting it wrong costs traffic.",
      },
      {
        question: "How many apps do we really need?",
        answer:
          "Fewer than you have. Reviews, email, and a loyalty programme are usually worth their weight. Anything doing something a theme can do — badges, countdowns, upsell blocks, sticky bars — we build into the theme instead, and the store gets faster.",
      },
      {
        question: "Do you handle product photography?",
        answer:
          "We don't shoot, but we'll spec it: shot list, aspect ratios, background treatment, and the file sizes to export. Then we set up the image pipeline so your team can upload without thinking about compression.",
      },
    ],
    relatedSlugs: ["ecommerce-development", "ecommerce-seo", "web-design", "speed-optimization"],
    caseStudySlugs: ["ecommerce-store", "coastline-outfitters"],
    blogSlugs: ["shopify-store-conversion-optimization", "core-web-vitals-guide", "how-to-build-website-that-converts"],
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
      title: "Shopify Development — Custom Themes & Speed | Quesiono",
      description:
        "Custom Shopify themes on Online Store 2.0, hand-written Liquid, metafield modelling, and an app audit that usually cuts seconds off every page.",
    },
    media: {
      imageAlt: "Shopify product page shown on desktop and mobile with a slide-out cart open",
    },
  },

  {
    slug: "ecommerce-development",
    name: "Ecommerce Development",
    shortDescription:
      "Online stores built around your catalogue, your margins, and your fulfilment reality.",
    icon: "shopping-cart",
    href: "/services/ecommerce-development",
    group: "web",
    featured: true,
    layoutVariant: "stacked",
    hero: {
      eyebrow: "Ecommerce development",
      headline: "Stores built for the way your customers actually buy",
      accent: ["actually"],
      sub: "Product discovery that fits your catalogue, a checkout with fewer places to give up, and inventory that matches what's on the shelf. On Shopify, WooCommerce, or a headless build — whichever your numbers point to.",
    },
    overview: {
      heading: "Ecommerce website development, end to end",
      paragraphs: [
        "Two stores can sell the same number of products and need completely different sites. Forty considered-purchase SKUs need comparison and specification depth. Four thousand SKUs need search, filtering, and merchandising rules. Building the second when you need the first wastes months.",
        "So we start with the catalogue and the customer's decision. What do they compare? What makes them hesitate? What do they ask before they'll commit? Those answers determine the product template, the filter set, and how much of the story goes on the collection page instead of behind a click.",
        "Then the operational half, which is where ecommerce projects quietly fail: inventory sync, tax by region, shipping rules that reflect your real carriers, returns, and transactional email. If those are wrong, a beautiful store creates support tickets instead of revenue.",
      ],
    },
    outcomes: [
      "Product discovery tuned to your catalogue size, not a template default",
      "Checkout drop-off measured step by step, then reduced",
      "Inventory, tax, and shipping accurate at launch — not a phase two",
      "Product and collection pages that earn organic traffic on their own",
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
        detail: ["Catalogue analysis", "Attribute mapping", "Margin review", "Platform recommendation"],
      },
      {
        step: "02",
        title: "Buying journey",
        description:
          "How customers choose, compare, and hesitate — mapped to templates and filters.",
        detail: ["Journey map", "Template list", "Filter and facet plan", "Objection inventory"],
      },
      {
        step: "03",
        title: "Build the storefront",
        description:
          "Templates and components built against a real copy of your catalogue on a staging store.",
        detail: ["Product templates", "Collection pages", "Cart and checkout", "Search and filters"],
      },
      {
        step: "04",
        title: "Wire the operations",
        description:
          "Inventory, tax, shipping, payments, and email. Then test orders through every combination that matters.",
        detail: ["Inventory sync", "Tax and shipping", "Payment gateways", "Full test orders"],
      },
      {
        step: "05",
        title: "Launch and optimise",
        description:
          "Go live, watch the funnel daily for a fortnight, then act on what the data shows rather than what we assumed.",
        detail: ["Launch checklist", "Funnel monitoring", "Ranked fix list", "Handover training"],
      },
    ],
    techStack: [
      { name: "Shopify", note: "Default for most catalogues under a few thousand SKUs" },
      { name: "WooCommerce", note: "When product logic is unusual or WordPress is fixed" },
      { name: "Hydrogen / Next.js", note: "Headless storefronts for large or multi-market stores" },
      { name: "Stripe", note: "Payments outside a hosted platform" },
      { name: "Algolia", note: "Search and faceting at scale" },
      { name: "Klaviyo", note: "Lifecycle email and SMS" },
    ],
    stats: [
      { value: 31, suffix: "%", label: "Median lift, checkout completion", note: "Rebuild projects, first 90 days." },
      { display: "6–12", label: "Weeks, typical", note: "Scales with catalogue and integrations." },
      { value: 100, suffix: "%", label: "Test-order coverage", note: "Every tax and shipping combination." },
    ],
    faqs: [
      {
        question: "Which platform should we be on?",
        answer:
          "Shopify for most stores — the operational load it absorbs is worth the fee. WooCommerce when you're committed to WordPress or need product logic Shopify won't bend to. Headless when you have a large catalogue, several markets, or a content-heavy storefront. We'll make a recommendation with reasoning after looking at your catalogue and order volume.",
      },
      {
        question: "How do you handle product data?",
        answer:
          "We model attributes properly rather than dumping them into descriptions — size, material, compatibility, lead time all become structured fields. That's what makes filtering, search, and Product schema work. If your data lives in a messy spreadsheet, cleaning it up is part of the project and usually the least glamorous week.",
      },
      {
        question: "Can you migrate our existing store without losing rankings?",
        answer:
          "Yes, with a complete redirect map. Product and collection URLs change shape between platforms, so every old URL gets a 301 to its closest equivalent, and we keep the titles and descriptions that already rank. Expect two to four weeks of movement while Google recrawls a large catalogue.",
      },
      {
        question: "Do you integrate with our warehouse or ERP?",
        answer:
          "Regularly. If it has an API, we integrate directly. If it only does scheduled CSV exports, we build against that with reconciliation reporting so mismatches surface early rather than as an oversold order.",
      },
      {
        question: "What ongoing work does a store need?",
        answer:
          "More than a brochure site. Monthly: platform and app updates, funnel review, and a look at what search terms returned nothing. Quarterly: a proper conversion review. We offer that as a retainer, but plenty of clients do it in-house with the documentation we leave.",
      },
    ],
    relatedSlugs: ["shopify-development", "ecommerce-seo", "web-development", "ui-ux-design"],
    caseStudySlugs: ["ecommerce-store", "coastline-outfitters"],
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
        "Online stores built around your catalogue and margins. Product discovery, checkout optimisation, inventory sync, and tax and shipping correct at launch.",
    },
    media: {
      imageAlt: "Ecommerce collection page with filters open beside a mobile checkout screen",
    },
  },

  {
    slug: "website-maintenance",
    name: "Website Maintenance",
    navLabel: "Maintenance & Support",
    shortDescription:
      "Updates, monitoring, backups, and a person who answers when something breaks.",
    icon: "wrench",
    href: "/services/website-maintenance",
    group: "web",
    layoutVariant: "stacked",
    hero: {
      eyebrow: "Maintenance & support",
      headline: "Someone is watching your site. It should be us",
      accent: ["watching"],
      sub: "Uptime monitoring, updates tested on staging before production, offsite backups you can actually restore from, and a monthly report with the small fixes already done. Not an invoice for hours nobody can account for.",
    },
    overview: {
      heading: "Website maintenance and support plans",
      paragraphs: [
        "Websites decay. Dependencies get security advisories, plugins get abandoned, SSL certificates lapse, a form integration silently stops delivering, and a form that stopped delivering three weeks ago is a very expensive thing to discover late.",
        "Our plans cover the unglamorous work: patching, backups with a tested restore, uptime and Core Web Vitals monitoring, broken-link and form checks, and a small pool of hours for the content and layout tweaks that come up. Updates land on staging first, get a visual regression check, then go to production with a restore point in place.",
        "Every month you get a plain-language report: what was updated, what we fixed, what's trending in the wrong direction, and what we recommend next. If nothing happened, it says so.",
      ],
    },
    outcomes: [
      "Security patches applied within days rather than whenever someone remembers",
      "Backups verified by actually restoring one, quarterly",
      "Uptime and speed monitored with alerts to us, not just to you",
      "A monthly report you can read in three minutes",
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
          "Daily offsite backups with 30-day retention. We test a real restore every quarter, because an untested backup is a guess.",
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
          "Automated broken-link scans plus monthly live test submissions through every form and CRM path.",
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
        detail: ["Access inventory", "Dependency audit", "Security scan", "Immediate fixes"],
      },
      {
        step: "02",
        title: "Set up monitoring",
        description:
          "Uptime, performance, error tracking, and backups configured and verified. Alerts routed to our on-call.",
        detail: ["Uptime checks", "Error tracking", "Backup schedule", "Alert routing"],
      },
      {
        step: "03",
        title: "Monthly cycle",
        description:
          "Updates on staging, regression check, deploy, then link and form verification.",
        detail: ["Staged updates", "Visual regression", "Production deploy", "Form testing"],
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
    stats: [
      { value: 99.9, decimals: 1, suffix: "%", label: "Uptime across managed sites", note: "Rolling 12 months." },
      { value: 4, label: "Hour emergency response", note: "Business hours, priority plans." },
      { value: 30, label: "Day backup retention", note: "Offsite, restore tested quarterly." },
    ],
    pricingTiers: [
      {
        name: "Essential",
        price: "$11",
        period: "/ month",
        summary: "Keep it patched, backed up, and monitored.",
        features: [
          "Monthly updates on staging",
          "Daily offsite backups",
          "Uptime monitoring",
          "Quarterly restore test",
          "Monthly report",
        ],
        excludes: ["Content hours", "Emergency SLA"],
        bestFor: "Brochure and small business sites",
      },
      {
        name: "Growth",
        price: "$14",
        period: "/ month",
        summary: "Maintenance plus hands for the small stuff.",
        features: [
          "Everything in Essential",
          "3 hours of content and tweak work",
          "Core Web Vitals tracking",
          "Form and integration testing",
          "48-hour response SLA",
        ],
        bestFor: "Marketing sites publishing regularly",
        highlight: true,
      },
      {
        name: "Priority",
        price: "$30",
        period: "/ month",
        summary: "For sites where downtime costs real money.",
        features: [
          "Everything in Growth",
          "8 hours of development work",
          "4-hour emergency response",
          "Weekly update cycle",
          "Quarterly strategy call",
          "Named account contact",
        ],
        bestFor: "Ecommerce and lead-critical sites",
      },
    ],
    pricingNote:
      "No setup fee, monthly rolling after the first three months. We'll tell you if a cheaper tier covers what you need.",
    faqs: [
      {
        question: "We didn't build the site with you. Can you still maintain it?",
        answer:
          "Usually. We take on WordPress, Shopify, Webflow, and most Next.js or React codebases. There's a one-off onboarding audit — typically $37 to $75 — because we need to understand what we're responsible for before we accept responsibility for it. Occasionally the audit finds a site we'd rather rebuild than prop up, and we'll say so plainly.",
      },
      {
        question: "What counts as an emergency?",
        answer:
          "Site down, checkout broken, forms not delivering, or a security compromise. A typo in a heading isn't an emergency, though it'll get fixed inside your normal hours.",
      },
      {
        question: "Do unused content hours roll over?",
        answer:
          "One month. So three hours unused in March gives you six in April, but not nine in May. Hoarding hours for a year turns a retainer into a savings account, which isn't what it's for.",
      },
      {
        question: "Is hosting included?",
        answer:
          "No, and we'd rather you own it. Hosting stays in your name and on your card so you're never locked in. We'll manage it, and if you're on something slow we'll recommend the move and handle it.",
      },
      {
        question: "Can we cancel?",
        answer:
          "After the initial three months, with 30 days' notice. On the way out you get your backups, your documentation, and a written handover. No hostage-taking.",
      },
    ],
    relatedSlugs: ["speed-optimization", "wordpress-development", "web-development", "technical-seo"],
    caseStudySlugs: ["local-restaurant-website", "northgate-dental", "hartwell-mercer-law"],
    blogSlugs: ["core-web-vitals-guide", "technical-seo-audit-checklist", "automating-your-workflow-tools-tips"],
    industrySlugs: ["healthcare", "professional-services", "restaurants-hospitality"],
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
      title: "Website Maintenance & Support Plans | Quesiono",
      description:
        "Staged updates, verified offsite backups, uptime and Core Web Vitals monitoring, form testing, and monthly hours for the small changes. From $11 a month.",
    },
    media: {
      imageAlt: "Monitoring dashboard showing uptime, performance trends, and recent deployments",
    },
  },

  {
    slug: "speed-optimization",
    name: "Speed Optimization",
    navLabel: "Speed & Core Web Vitals",
    shortDescription:
      "Core Web Vitals work with a measured before and after, not a plugin and a promise.",
    icon: "gauge",
    href: "/services/speed-optimization",
    group: "web",
    featured: true,
    layoutVariant: "editorial",
    hero: {
      eyebrow: "Speed & Core Web Vitals",
      headline: "Find out why your site is slow, then fix that",
      accent: ["why"],
      sub: "Not a caching plugin and a hopeful re-test. We profile the page, identify what's actually blocking the render, fix those specific things, and show you the before and after on real mobile hardware.",
    },
    overview: {
      heading: "Core Web Vitals and page speed optimisation",
      paragraphs: [
        "Speed advice online is mostly generic because the causes are specific. Your slow LCP might be a hero image nobody compressed, a font blocking the first paint, a render-blocking script from a chat widget, or a server taking 900ms to respond. The fix for each is different, and applying all four when you needed one wastes a week.",
        "We start with a real profile: Chrome DevTools traces on throttled mobile, Lighthouse for the summary, and your own field data from Search Console — because lab scores and what your visitors experience regularly disagree. Then we work down the list in order of impact.",
        "Every engagement ends with a report showing the numbers before, the numbers after, and exactly what changed. If we can't move a metric, we say why — sometimes the answer is a platform limitation and no amount of tuning fixes it.",
      ],
    },
    outcomes: [
      "LCP, CLS, and INP all in Google's \"good\" band on mobile where the platform allows it",
      "A ranked fix list with effort and expected impact, so you can decide what's worth doing",
      "Third-party scripts audited — the usual culprit, and the usual argument",
      "A performance budget in CI so the gains don't quietly erode",
    ],
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
        detail: ["Lighthouse runs", "DevTools traces", "Search Console field data", "Real-device tests"],
      },
      {
        step: "02",
        title: "Diagnose",
        description:
          "What's blocking the render, in order. Each item gets an estimated gain and an effort cost.",
        detail: ["Waterfall analysis", "Bundle analysis", "Third-party cost", "Ranked fix list"],
      },
      {
        step: "03",
        title: "Fix",
        description:
          "Highest impact first, re-measured after each change so we know which fix earned which second.",
        detail: ["Image pipeline", "Font strategy", "Script deferral", "Caching and CDN"],
      },
      {
        step: "04",
        title: "Verify",
        description:
          "Re-test on real devices and across templates, then confirm nothing broke visually.",
        detail: ["Real-device retest", "Cross-template check", "Visual regression"],
      },
      {
        step: "05",
        title: "Protect",
        description:
          "A budget in CI and a short guide for your team on what tends to undo this work.",
        detail: ["Lighthouse CI", "Budget thresholds", "Team guidance", "Before/after report"],
      },
    ],
    stats: [
      { value: 2.8, decimals: 1, suffix: "s", label: "Median LCP improvement", note: "Mobile, throttled 4G." },
      { value: 41, label: "Median Lighthouse gain", note: "Points, mobile performance." },
      { display: "1–3", label: "Weeks per engagement", note: "Depends on template count." },
    ],
    pricingTiers: [
      {
        name: "Audit",
        price: "$56",
        summary: "Diagnosis and a ranked plan. You or your team implement.",
        features: [
          "Profiling across up to 4 templates",
          "Ranked fix list with effort and impact",
          "Third-party script cost breakdown",
          "60-minute walkthrough call",
        ],
        excludes: ["Implementation"],
        timeline: "1 week",
        bestFor: "Teams with developers in-house",
      },
      {
        name: "Audit and fix",
        price: "From $106",
        summary: "We diagnose and implement, then prove the gain.",
        features: [
          "Everything in Audit",
          "Implementation of the fix list",
          "Image and font pipeline rebuild",
          "Caching and CDN configuration",
          "Before/after report",
        ],
        timeline: "2–3 weeks",
        bestFor: "Most sites",
        highlight: true,
      },
      {
        name: "Fix and protect",
        price: "From $350",
        summary: "Plus the guardrails that stop regression.",
        features: [
          "Everything in Audit and fix",
          "Lighthouse CI with failing thresholds",
          "Real-user monitoring setup",
          "Team training session",
          "90-day re-check",
        ],
        timeline: "3–4 weeks",
        bestFor: "Sites where several people ship changes",
      },
    ],
    faqs: [
      {
        question: "Will this improve our search rankings?",
        answer:
          "Core Web Vitals are a ranking signal, but a modest one — relevance and links matter more. Where speed reliably pays is conversion. Sites that drop a second or two off mobile load usually see fewer bounces and more completed forms, and that shows up in revenue before it shows up in rankings.",
      },
      {
        question: "Can you fix a slow page builder site?",
        answer:
          "We can improve it substantially — often halving load time — but there's a ceiling. If Elementor or Divi is generating the markup and shipping its runtime on every page, some of the weight is structural. We'll tell you what the realistic floor is before you spend anything, so you can choose between optimising and rebuilding.",
      },
      {
        question: "What if you can't hit the targets?",
        answer:
          "We'll have flagged it during the audit — that's what the audit is for. If the constraint is your platform, hosting, or a tag your marketing team won't remove, we say so early and you can decide. We don't take on a fix engagement we've told you can't hit its goal.",
      },
      {
        question: "How long do the improvements last?",
        answer:
          "Until someone adds a large uncompressed image or a new marketing tag. That's why the Protect tier exists — a performance budget in CI makes the regression visible in a pull request rather than in next quarter's field data.",
      },
      {
        question: "Do you need access to our codebase?",
        answer:
          "For the fix work, yes — repository access and a staging environment. For an audit alone we only need the live URLs and read access to Search Console analytics.",
      },
    ],
    relatedSlugs: ["technical-seo", "web-development", "website-maintenance", "wordpress-development"],
    caseStudySlugs: ["dazzle-website", "coastline-outfitters", "ecommerce-store"],
    blogSlugs: ["core-web-vitals-guide", "technical-seo-audit-checklist", "nextjs-14-best-practices"],
    industrySlugs: ["ecommerce-retail", "saas-startups", "professional-services"],
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
      title: "Website Speed & Core Web Vitals Optimization | Quesiono",
      description:
        "Real profiling on throttled mobile, a ranked fix list, then implementation with a measured before and after. LCP, CLS, and INP into Google's good band.",
    },
    media: {
      imageAlt: "Performance waterfall chart beside before and after Core Web Vitals scores",
    },
  },
];
