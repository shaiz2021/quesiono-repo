import type { BlogPost } from "./blog";
export const journalContent: BlogPost[] = [
  {
    slug: "how-much-does-a-website-cost",
    title: "How Much Does a Website Cost? A Guide to Scope and Quotes",
    excerpt:
      "Compare website quotes by what is included, what your team must supply, and what it will cost to keep the site running.",
    date: "2026-08-04",
    category: "Business",
    featured: true,
    author: "Quesiono",
    authorRole: "Editorial",
    readTime: "1 min read",
    tags: ["Pricing", "Web design cost", "Budgeting", "Scoping"],
    relatedServiceSlugs: [
      "web-design",
      "web-development",
      "ecommerce-development",
      "website-maintenance",
      "seo",
    ],
    relatedPostSlugs: [
      "wordpress-vs-webflow-vs-nextjs",
      "website-redesign-checklist",
    ],
    relatedProjectSlugs: [],
    keywords: {
      primary: "how much does a website cost",
      secondary: [
        "website design cost UK",
        "website development pricing",
        "ecommerce website cost",
        "website maintenance cost",
      ],
    },
    meta: {
      title:
        "How Much Does a Website Cost? A Guide to Scope and Quotes | Quesiono",
      description:
        "Compare website quotes by what is included, what your team must supply, and what it will cost to keep the site running.",
    },
    content:
      '<p>Compare website quotes by what is included, what your team must supply, and what it will cost to keep the site running.</p><h2 id="start-with-the-work-not-a-headline-price">Start with the work, not a headline price</h2><p>Two quotes for a \u201cten-page website\u201d can describe very different projects. One may adapt an existing theme using copy you supply. Another may include research, new content, bespoke templates, integrations and a migration. Compare the work before comparing the total.</p><p>List the pages and distinct templates you need. Add any forms, booking systems, catalogue features, accounts or integrations. Note what already exists and what must be created. This gives each supplier the same basis for a proposal.</p><h2 id="separate-delivery-from-running-costs">Separate delivery from running costs</h2><p>Ask which costs are one-off and which recur. Hosting, domain registration, software subscriptions, paid plugins, content production and maintenance may be separate from the build. A quote should identify who pays those bills and owns the accounts.</p><p>Check the exclusions as carefully as the inclusions. Photography, product data entry, content migration and extra review rounds can materially change the effort. Delivery dates also depend on when your team can provide information and approve work.</p><h2 id="make-the-proposal-easy-to-evaluate">Make the proposal easy to evaluate</h2><p>A useful proposal names the deliverables, acceptance criteria, payment milestones, dependencies, change process and handover. Ask what happens if an integration is more difficult than expected and how a change in scope is priced.</p><p>There is no universal price that fits every website. Use the <a href="/pricing">pricing and scope guide</a> to prepare your requirements, then compare written proposals against the same brief. Choosing a smaller first phase can be more practical than compressing every feature into a limited budget.</p>',
    imageAlt:
      "Website cost breakdown table with build ranges and monthly running costs",
    updated: "2026-11-08",
  },
  {
    slug: "core-web-vitals-guide",
    title: "Core Web Vitals: Find the Cause Before Choosing the Fix",
    excerpt:
      "A practical way to investigate loading, responsiveness and layout stability without treating a single lab score as the whole experience.",
    date: "2026-07-21",
    category: "Development",
    featured: true,
    author: "Quesiono",
    authorRole: "Editorial",
    readTime: "1 min read",
    tags: ["Performance", "Core Web Vitals", "LCP", "INP"],
    relatedServiceSlugs: [
      "speed-optimization",
      "technical-seo",
      "web-development",
    ],
    relatedPostSlugs: [
      "nextjs-14-best-practices",
      "technical-seo-audit-checklist",
    ],
    relatedProjectSlugs: [],
    keywords: {
      primary: "Core Web Vitals guide",
      secondary: [
        "how to improve LCP",
        "fix cumulative layout shift",
        "Interaction to Next Paint optimisation",
        "page speed optimisation",
      ],
    },
    meta: {
      title:
        "Core Web Vitals: Find the Cause Before Choosing the Fix | Quesiono",
      description:
        "A practical way to investigate loading, responsiveness and layout stability without treating a single lab score as the whole experience.",
    },
    content:
      '<p>A practical way to investigate loading, responsiveness and layout stability without treating a single lab score as the whole experience.</p><h2 id="understand-the-three-measures">Understand the three measures</h2><p>Core Web Vitals cover loading with Largest Contentful Paint, responsiveness with Interaction to Next Paint, and visual stability with Cumulative Layout Shift. Each describes a different part of the visit. A fast first image does not mean a menu will respond quickly.</p><p>Use field data to understand real visits and lab tools to reproduce and investigate problems. Record the page, device conditions and test method. Comparing an unthrottled desktop run with a mobile field measurement does not isolate the effect of a change.</p><h2 id="investigate-the-affected-journey">Investigate the affected journey</h2><p>For loading, identify the actual LCP element and examine the network requests and rendering work before it appears. For interaction, inspect long tasks and the work triggered by a click or tap. For layout shifts, find the elements moving and what arrives late.</p><p>Possible fixes include better image delivery, reserving space for media, reducing unnecessary JavaScript and improving server response. The right fix follows the trace. Removing an important feature solely to improve a score can make the experience less useful.</p><h2 id="verify-and-keep-a-record">Verify and keep a record</h2><p>Retest the same pages under comparable conditions after each meaningful change. Record what changed and which measure it was intended to improve. Field data can take time to reflect a deployment, so keep immediate lab checks separate from longer-term monitoring.</p><p>Use the official <a href="https://web.dev/articles/vitals">Web Vitals guide</a> for definitions and measurement guidance. For a scoped investigation, see <a href="/services/speed-optimization">website performance optimization</a>. A score is evidence about a test, not a guarantee of sales or rankings.</p>',
    imageAlt:
      "Core Web Vitals field data report showing LCP, CLS, and INP thresholds",
    updated: "2026-11-08",
  },
  {
    slug: "technical-seo-audit-checklist",
    title: "A Technical SEO Audit Checklist",
    excerpt:
      "Find technical obstacles, connect each finding to affected pages, and prioritize fixes your team can verify.",
    date: "2026-07-07",
    category: "SEO",
    featured: true,
    author: "Quesiono",
    authorRole: "Editorial",
    readTime: "1 min read",
    tags: ["Technical SEO", "Crawling", "Indexing", "Structured data"],
    relatedServiceSlugs: [
      "technical-seo",
      "seo",
      "speed-optimization",
      "ecommerce-seo",
    ],
    relatedPostSlugs: [
      "core-web-vitals-guide",
      "seo-basics-getting-started-2025",
    ],
    relatedProjectSlugs: [],
    keywords: {
      primary: "technical SEO audit checklist",
      secondary: [
        "technical SEO audit",
        "crawl budget optimisation",
        "indexing issues",
        "duplicate content fixes",
      ],
    },
    meta: {
      title: "A Technical SEO Audit Checklist | Quesiono",
      description:
        "Find technical obstacles, connect each finding to affected pages, and prioritize fixes your team can verify.",
    },
    content:
      '<p>Find technical obstacles, connect each finding to affected pages, and prioritize fixes your team can verify.</p><h2 id="check-discovery-and-indexing">Check discovery and indexing</h2><p>Start with the pages that matter commercially. Confirm that they return an appropriate status, can be reached through internal links and are not unintentionally blocked. Compare the intended indexable pages with available crawl and Search Console information.</p><p>Review canonical signals, redirects and duplicated URLs together. A list of crawler warnings needs interpretation: some URLs are intentionally excluded, and some patterns matter much more than individual low-value pages. Record evidence before recommending a change.</p><h2 id="review-rendering-and-page-structure">Review rendering and page structure</h2><p>Inspect what the browser and crawler can access. Important content and links should be available without requiring an interaction that hides them from discovery. Review titles, headings and page relationships, and verify that structured data describes visible, supported facts.</p><p>Check representative templates rather than assuming a single page describes the whole site. Product variants, filtered listings, articles and account areas may have different requirements. Include performance findings where they affect the experience, with a clear measurement method.</p><h2 id="make-the-audit-actionable">Make the audit actionable</h2><p>Each finding should name the affected URLs or template, explain the problem, propose a fix and describe how to check it afterwards. Prioritize by the importance of the pages, the confidence in the diagnosis and the effort needed to implement the change.</p><p>Keep implementation and verification explicit in the scope. An audit document alone does not change the website. Use the <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide">Google SEO Starter Guide</a> for foundational guidance and explore <a href="/services/seo/technical-seo">technical SEO services</a> for audit and implementation options.</p>',
    imageAlt: "Search Console page indexing report beside a crawl diagram",
    updated: "2026-11-08",
  },
  {
    slug: "website-redesign-checklist",
    title: "A Website Redesign Checklist That Starts Before Design",
    excerpt:
      "Inventory what works, define the decisions the new site must support, and make a launch plan that protects existing journeys.",
    date: "2026-06-16",
    category: "Web Design",
    featured: false,
    author: "Quesiono",
    authorRole: "Editorial",
    readTime: "1 min read",
    tags: ["Redesign", "Migration", "SEO", "Project management"],
    relatedServiceSlugs: [
      "web-design",
      "web-development",
      "technical-seo",
      "cms-development",
    ],
    relatedPostSlugs: [
      "how-to-build-website-that-converts",
      "technical-seo-audit-checklist",
    ],
    relatedProjectSlugs: [],
    keywords: {
      primary: "website redesign checklist",
      secondary: [
        "website migration checklist",
        "redesign without losing SEO",
        "301 redirect map",
        "pre-launch website checklist",
      ],
    },
    meta: {
      title:
        "A Website Redesign Checklist That Starts Before Design | Quesiono",
      description:
        "Inventory what works, define the decisions the new site must support, and make a launch plan that protects existing journeys.",
    },
    content:
      '<p>Inventory what works, define the decisions the new site must support, and make a launch plan that protects existing journeys.</p><h2 id="audit-before-changing-the-structure">Audit before changing the structure</h2><p>List the existing URLs, page types, forms, downloads and integrations. Identify pages that attract useful traffic or support important customer questions. Speak to the people handling enquiries: they can often tell you what visitors fail to understand.</p><p>Write down the business problem in observable terms. \u201cThe design feels old\u201d is a starting point, but \u201cvisitors cannot tell which service applies to them\u201d gives the project a clearer direction. Decide how you will assess that problem after launch.</p><h2 id="design-with-real-information">Design with real information</h2><p>Agree the sitemap, page purpose and content responsibilities before polishing layouts. Gather approved claims, photography, product information and practical details. A design built around short placeholder sentences may fail once the actual content is added.</p><p>Review desktop and mobile layouts together. Check how a visitor reaches the main action, what evidence supports it and whether a research-stage visitor has a useful alternative. Keep existing URLs where practical and map necessary redirects explicitly.</p><h2 id="treat-launch-as-a-checked-change">Treat launch as a checked change</h2><p>Test links, forms, error states, keyboard navigation, images and page metadata. Confirm analytics permissions and the exact event that represents a successful enquiry. Make sure a failed email delivery does not look like a submitted lead.</p><p>Agree who approves the release, who controls hosting and DNS, and how to roll back if a critical issue appears. After launch, check important URLs and integrations again. A handover should explain editing, account ownership and ongoing responsibilities. See <a href="/process">the project process</a> for those decision points.</p>',
    imageAlt:
      "Redirect map spreadsheet beside a pre-launch verification checklist",
    updated: "2026-11-08",
  },
  {
    slug: "shopify-store-conversion-optimization",
    title: "Shopify Conversion: Review the Buying Journey",
    excerpt:
      "Use customer questions and store behaviour to identify friction in discovery, product decisions, cart and checkout.",
    date: "2026-05-26",
    category: "Ecommerce",
    featured: true,
    author: "Quesiono",
    authorRole: "Editorial",
    readTime: "1 min read",
    tags: ["Shopify", "Ecommerce", "Conversion", "Checkout"],
    relatedServiceSlugs: [
      "shopify-development",
      "ecommerce-development",
      "ecommerce-seo",
      "speed-optimization",
    ],
    relatedPostSlugs: [
      "core-web-vitals-guide",
      "how-to-build-website-that-converts",
    ],
    relatedProjectSlugs: [],
    keywords: {
      primary: "Shopify conversion rate optimisation",
      secondary: [
        "Shopify store optimisation",
        "Shopify checkout optimisation",
        "Shopify app bloat",
        "Shopify collection page SEO",
      ],
    },
    meta: {
      title: "Shopify Conversion: Review the Buying Journey | Quesiono",
      description:
        "Use customer questions and store behaviour to identify friction in discovery, product decisions, cart and checkout.",
    },
    content:
      '<p>Use customer questions and store behaviour to identify friction in discovery, product decisions, cart and checkout.</p><h2 id="look-before-adding-an-app">Look before adding an app</h2><p>Walk through the store on a phone as a new customer. Can you find a suitable product, understand variants, see delivery information and correct a cart mistake? Review search terms and support questions alongside analytics to identify where people are getting stuck.</p><p>Audit the apps already installed and the jobs they perform. Overlapping widgets can compete for attention and introduce extra loading or maintenance work. Keep a feature because it helps the customer or the operation, and measure changes under comparable conditions.</p><h2 id="improve-the-product-decision">Improve the product decision</h2><p>Product pages should explain what the customer receives, how options differ and what happens after purchase. Useful photography, specifications, availability and delivery information support that decision. Promotions should not obscure the controls needed to buy.</p><p>Check error states as well as the happy path: unavailable variants, failed discount codes, address problems and payment failures. Checkout customization depends on the plan and supported extension points; review the <a href="https://shopify.dev/docs/api/checkout-ui-extensions">Shopify checkout documentation</a> before promising a change.</p><h2 id="use-a-testable-hypothesis">Use a testable hypothesis</h2><p>Name the obstacle, the proposed change and the measure you expect to move. For example, clearer delivery information might reduce uncertainty before checkout. Compare appropriate traffic and time periods, and avoid attributing every change in revenue to the latest design update.</p><p>A store review may lead to content work, theme changes, performance fixes or an integration repair. Those are different scopes. Explore <a href="/services/shopify-development">Shopify development</a> when you need help turning findings into a practical implementation plan.</p>',
    imageAlt: "Shopify checkout funnel with per-step drop-off percentages",
    updated: "2026-11-08",
  },
  {
    slug: "ux-design-principles-that-increase-conversions",
    title: "UX Principles for a Clearer Path to Conversion",
    excerpt:
      "Help visitors understand the choice, find the relevant evidence, and complete the next step with less uncertainty.",
    date: "2026-05-05",
    category: "Web Design",
    featured: false,
    author: "Quesiono",
    authorRole: "Editorial",
    readTime: "1 min read",
    tags: ["UX", "Usability", "Accessibility", "Forms"],
    relatedServiceSlugs: [
      "ui-ux-design",
      "web-design",
      "ecommerce-development",
    ],
    relatedPostSlugs: [
      "how-to-build-website-that-converts",
      "website-redesign-checklist",
    ],
    relatedProjectSlugs: [],
    keywords: {
      primary: "UX design principles that increase conversions",
      secondary: [
        "UX best practices for conversion",
        "usability and conversion rate",
        "form design UX",
        "accessible UX design",
      ],
    },
    meta: {
      title: "UX Principles for a Clearer Path to Conversion | Quesiono",
      description:
        "Help visitors understand the choice, find the relevant evidence, and complete the next step with less uncertainty.",
    },
    content:
      '<p>Help visitors understand the choice, find the relevant evidence, and complete the next step with less uncertainty.</p><h2 id="make-the-decision-clear">Make the decision clear</h2><p>Start with what the visitor is trying to decide. A service page should explain who the offer is for, what is included and what happens next. Navigation labels should use language customers recognize rather than internal department names.</p><p>Place related information together. An enquiry button is more useful when the visitor has just seen the scope, supporting evidence or answer to an important objection. Give research-stage visitors a path to examples or guidance instead of repeating the same sales prompt.</p><h2 id="make-interaction-predictable">Make interaction predictable</h2><p>Use recognizable controls, explicit field labels and visible focus states. Explain errors beside the relevant input and preserve what the person has already typed. A status message should describe what actually happened, including when a submission failed.</p><p>Check contrast, reading order and touch targets across screen sizes. Do not rely on colour alone to communicate a state. Motion should support comprehension and respect reduced-motion preferences. Test with a keyboard, zoomed text and a narrow viewport.</p><h2 id="evaluate-the-complete-journey">Evaluate the complete journey</h2><p>A tidy screen does not prove that the journey works. Observe representative users attempting a realistic task and note where they hesitate, misinterpret information or take a wrong turn. Combine that observation with analytics instead of guessing from one metric.</p><p>Use findings to prioritize changes and test a specific hypothesis. Keep a record of what changed and the measurement conditions. <a href="/services/ui-ux-design">UI/UX work</a> can include research, flows, prototypes and implementation guidance; choose the activities that answer your current uncertainty.</p>',
    imageAlt:
      "Side-by-side comparison of a two-column and one-column form layout",
    updated: "2026-11-08",
  },
  {
    slug: "wordpress-vs-webflow-vs-nextjs",
    title: "WordPress, Webflow or Next.js? Start with the Requirements",
    excerpt:
      "A platform decision should reflect who edits the website, what it must do and who will maintain it.",
    date: "2026-04-14",
    category: "Development",
    featured: false,
    author: "Quesiono",
    authorRole: "Editorial",
    readTime: "1 min read",
    tags: ["WordPress", "Webflow", "Next.js", "CMS"],
    relatedServiceSlugs: [
      "cms-development",
      "wordpress-development",
      "web-development",
      "custom-development",
    ],
    relatedPostSlugs: [
      "nextjs-14-best-practices",
      "how-much-does-a-website-cost",
    ],
    relatedProjectSlugs: [],
    keywords: {
      primary: "WordPress vs Webflow vs Next.js",
      secondary: [
        "best CMS for business website",
        "headless CMS vs WordPress",
        "Webflow limitations",
        "choosing a website platform",
      ],
    },
    meta: {
      title:
        "WordPress, Webflow or Next.js? Start with the Requirements | Quesiono",
      description:
        "A platform decision should reflect who edits the website, what it must do and who will maintain it.",
    },
    content:
      '<p>A platform decision should reflect who edits the website, what it must do and who will maintain it.</p><h2 id="map-the-editing-workflow">Map the editing workflow</h2><p>Identify the people who will publish, the content they need to change and any approval steps. Ask them to try representative editing tasks before choosing a platform. A familiar interface can be valuable, but familiarity alone does not resolve complex content relationships.</p><p>WordPress and Webflow offer different publishing and design workflows. Next.js is an application framework, so content editing usually requires a separate CMS or a custom interface. Compare complete solutions rather than assuming every option includes the same tools.</p><h2 id="test-the-difficult-requirements">Test the difficult requirements</h2><p>Write down integrations, account features, search, catalogue complexity and data ownership. Validate the requirements most likely to constrain the platform. A small proof of concept can expose a limitation before the main design and build begin.</p><p>Include operational constraints: who can deploy changes, where the site will run, how backups work and what happens when a dependency changes. Existing content and URLs also affect the migration effort. The current platform may remain suitable with targeted improvements.</p><h2 id="compare-total-responsibility">Compare total responsibility</h2><p>Compare build scope, licences, hosting, maintenance, editor training and future development. A lower initial quote may shift more work to your team. A highly custom solution may provide flexibility while requiring a more capable maintenance arrangement.</p><p>There is no single winner for every website. Ask each proposal to explain the trade-off and demonstrate the editing workflow. Explore <a href="/services/cms-development">CMS development</a> or <a href="/services/web-development">web development</a> when the decision needs a technical review.</p>',
    imageAlt: "Comparison table of WordPress, Webflow, and Next.js trade-offs",
    updated: "2026-11-08",
  },
  {
    slug: "nextjs-14-best-practices",
    title: "Next.js App Router: A Practical Production Review",
    excerpt:
      "Review rendering, data access, interaction and deployment against the application you are actually building.",
    date: "2026-03-24",
    category: "Development",
    featured: true,
    author: "Quesiono",
    authorRole: "Editorial",
    readTime: "1 min read",
    tags: ["Next.js", "React", "App Router", "Architecture"],
    relatedServiceSlugs: [
      "web-development",
      "custom-development",
      "speed-optimization",
    ],
    relatedPostSlugs: [
      "core-web-vitals-guide",
      "wordpress-vs-webflow-vs-nextjs",
    ],
    relatedProjectSlugs: [],
    keywords: {
      primary: "Next.js best practices",
      secondary: [
        "Next.js App Router guide",
        "React server components in production",
        "Next.js caching strategy",
        "Next.js performance optimisation",
      ],
    },
    meta: {
      title: "Next.js App Router: A Practical Production Review | Quesiono",
      description:
        "Review rendering, data access, interaction and deployment against the application you are actually building.",
    },
    content:
      '<p>Review rendering, data access, interaction and deployment against the application you are actually building.</p><h2 id="start-with-the-installed-version">Start with the installed version</h2><p>Framework behaviour changes between releases. Record the installed Next.js version and consult documentation for that version before applying examples about caching, routing or rendering. A pattern copied from a newer tutorial may rely on different defaults.</p><p>Map which pages require request-specific information and which can be generated or cached. Keep sensitive data handling on the server and expose only the information a client interface needs. Avoid turning an entire page into client-side code for one interactive control.</p><h2 id="make-failures-part-of-the-design">Make failures part of the design</h2><p>Loading, empty, unauthorized and failed states deserve explicit handling. Validate mutations on the server even when the browser checks the same fields. Keep secrets out of client bundles and make error messages useful without exposing internal details.</p><p>Review image sizes, fonts and third-party scripts alongside JavaScript. Confirm that navigation works on narrow screens and with a keyboard. The server-rendered content should remain useful before optional animation or analytics code loads.</p><h2 id="verify-the-production-output">Verify the production output</h2><p>Run a production build and test the resulting server, not only the development preview. Exercise representative dynamic routes, unknown URLs, metadata and real user journeys. Check the boundaries between application behaviour and hosting configuration.</p><p>Review the official <a href="https://nextjs.org/docs">Next.js documentation</a> for the version and APIs in use. Preserve a deployment checklist and rollback plan. For implementation support, see <a href="/services/web-development">web development</a>. A successful build is one check, not evidence that every integration works.</p>',
    imageAlt:
      "Next.js build output showing static and dynamic route classification",
    updated: "2026-11-08",
  },
  {
    slug: "how-to-build-website-that-converts",
    title: "How to Build a Website That Supports Better Enquiries",
    excerpt:
      "Connect a clear offer, relevant evidence and an easy next step without treating every visitor as ready to buy.",
    date: "2026-03-03",
    category: "Web Design",
    featured: true,
    author: "Quesiono",
    authorRole: "Editorial",
    readTime: "1 min read",
    tags: ["Conversion", "Web design", "Copywriting", "Analytics"],
    relatedServiceSlugs: [
      "web-design",
      "ui-ux-design",
      "landing-page-development",
      "content-writing",
    ],
    relatedPostSlugs: [
      "ux-design-principles-that-increase-conversions",
      "website-redesign-checklist",
    ],
    relatedProjectSlugs: [],
    keywords: {
      primary: "how to build a website that converts",
      secondary: [
        "website conversion rate optimisation",
        "high converting website design",
        "conversion focused web design",
        "website copy that converts",
      ],
    },
    meta: {
      title: "How to Build a Website That Supports Better Enquiries | Quesiono",
      description:
        "Connect a clear offer, relevant evidence and an easy next step without treating every visitor as ready to buy.",
    },
    content:
      '<p>Connect a clear offer, relevant evidence and an easy next step without treating every visitor as ready to buy.</p><h2 id="answer-the-buying-questions">Answer the buying questions</h2><p>Explain the problem you solve, who the service is for, what the customer receives and what makes the approach suitable. Use concrete language and verified examples. A broad claim about quality is less useful than an explanation of how the work is scoped and reviewed.</p><p>Separate the main action from supporting exploration. A visitor who already knows the service can enquire immediately. Someone comparing options should be able to inspect the process, relevant work, FAQs and scope guidance without losing their place.</p><h2 id="reduce-uncertainty-around-the-form">Reduce uncertainty around the form</h2><p>Ask for the information needed to start a useful conversation. Name, email and a project goal are often enough for an initial enquiry. Budget, timing and website details can be optional unless they are necessary to qualify a specific offer.</p><p>Carry the service context into the form, label fields clearly and preserve values after an error. Explain what happens next. A success message must reflect confirmed acceptance by the delivery system, rather than simply the click of the submit button.</p><h2 id="measure-quality-as-well-as-volume">Measure quality as well as volume</h2><p>Define what a useful enquiry means for your business before changing the page. More submissions may not help if they are irrelevant or impossible to serve. Review enquiry quality with the people responding, alongside the journey data you collect with appropriate permission.</p><p>Use a specific hypothesis for each important change. Compare similar traffic sources and account for seasonality or campaign changes. Start with the <a href="/blog/website-redesign-checklist">redesign checklist</a> if the problems span the entire site.</p>',
    imageAlt:
      "Wireframe of a conversion-focused landing page with annotated sections",
    updated: "2026-11-08",
  },
  {
    slug: "local-seo-strategy-small-business",
    title: "Local SEO: Make Your Business Easier to Find Nearby",
    excerpt:
      "Align your website, business information and contact pathways with the areas and services you actually cover.",
    date: "2026-02-10",
    category: "SEO",
    featured: false,
    author: "Quesiono",
    authorRole: "Editorial",
    readTime: "1 min read",
    tags: ["Local SEO", "Google Business Profile", "Reviews", "Citations"],
    relatedServiceSlugs: ["local-seo", "seo", "on-page-seo", "web-design"],
    relatedPostSlugs: [
      "seo-basics-getting-started-2025",
      "technical-seo-audit-checklist",
    ],
    relatedProjectSlugs: [],
    keywords: {
      primary: "local SEO strategy for small business",
      secondary: [
        "Google Business Profile optimisation",
        "how to rank in the map pack",
        "local citations",
        "review generation strategy",
      ],
    },
    meta: {
      title: "Local SEO: Make Your Business Easier to Find Nearby | Quesiono",
      description:
        "Align your website, business information and contact pathways with the areas and services you actually cover.",
    },
    content:
      '<p>Align your website, business information and contact pathways with the areas and services you actually cover.</p><h2 id="get-the-business-information-right">Get the business information right</h2><p>Review the name, contact information, service area, opening hours and website link wherever your business is listed. Inconsistencies can leave a potential customer unsure which details to trust. Keep a record of who can update important profiles.</p><p>A location should represent a genuine eligible presence. Avoid creating pages or profiles that imply an office where there is none. Check the platform\u2019s current eligibility requirements before changing location or service-area details.</p><h2 id="build-useful-local-pages">Build useful local pages</h2><p>A useful location or service-area page explains what is available, who it serves and how to make contact. Include accurate practical information and relevant evidence you have permission to publish. Repeating the same paragraph with a different town name adds little value.</p><p>Make the next step work on a phone. Test directions, contact links and booking paths. If you use a form, do not ask customers to repeat information that can be carried from the service or location page.</p><h2 id="review-the-enquiries-behind-the-traffic">Review the enquiries behind the traffic</h2><p>Search visibility is only part of the picture. Check whether enquiries concern the right service area and the work you actually provide. A rise in irrelevant visits may need a content or targeting change rather than more pages.</p><p>Keep profile access, website updates and review handling assigned to a responsible person. For a practical review of the website and listings together, see <a href="/services/seo/local-seo">local SEO services</a>. No profile setup can guarantee a particular ranking.</p>',
    imageAlt:
      "Map pack search result with a local business profile and review summary",
    updated: "2026-11-08",
  },
  {
    slug: "content-strategy-that-actually-works",
    title: "Content Strategy: Start with the Questions Worth Answering",
    excerpt:
      "Build a useful publishing plan around customer needs, existing content and the decisions your business wants to support.",
    date: "2026-01-20",
    category: "Content",
    featured: false,
    author: "Quesiono",
    authorRole: "Editorial",
    readTime: "1 min read",
    tags: ["Content strategy", "SEO content", "Editorial", "Topic clusters"],
    relatedServiceSlugs: [
      "content-writing",
      "blog-posts",
      "article-writing",
      "keyword-research",
      "seo",
    ],
    relatedPostSlugs: [
      "seo-basics-getting-started-2025",
      "how-much-does-a-website-cost",
    ],
    relatedProjectSlugs: [],
    keywords: {
      primary: "content strategy that works",
      secondary: [
        "SEO content strategy",
        "topic cluster strategy",
        "B2B content marketing plan",
        "content strategy for small business",
      ],
    },
    meta: {
      title:
        "Content Strategy: Start with the Questions Worth Answering | Quesiono",
      description:
        "Build a useful publishing plan around customer needs, existing content and the decisions your business wants to support.",
    },
    content:
      '<p>Build a useful publishing plan around customer needs, existing content and the decisions your business wants to support.</p><h2 id="find-the-questions-with-a-purpose">Find the questions with a purpose</h2><p>Gather questions from sales conversations, support requests, search data and subject-matter specialists. Group them by the decision the reader is trying to make. Some belong on a service page, some need a guide, and others should be answered in a product interface.</p><p>An editorial calendar is a schedule, not a strategy. Before filling it, decide which audience you want to help and what a useful answer would allow them to do. That keeps the plan from becoming a list of loosely related keywords.</p><h2 id="use-what-already-exists">Use what already exists</h2><p>Inventory existing pages and identify overlaps, outdated information and missing explanations. Improving a useful page may be more valuable than publishing a second page on the same subject. Record the page\u2019s purpose and the evidence needed to support its claims.</p><p>A brief should include the reader, the question, the intended takeaway, necessary sources, specialist input and relevant internal links. Assign factual review as well as copy editing, particularly where business-specific or technical claims appear.</p><h2 id="publish-maintain-and-learn">Publish, maintain and learn</h2><p>Define an owner and a review trigger for each important page. Product changes, new services and outdated examples can make a previously helpful article misleading. Maintenance belongs in the plan alongside new writing.</p><p>Evaluate content by its purpose. A guide may support research rather than generate an immediate enquiry. Use qualified visits, useful onward journeys and feedback together. Explore <a href="/services/content-writing">content writing</a> for support turning a clear plan into publishable pages.</p>',
    imageAlt:
      "Topic cluster diagram showing a parent page linked to sub-topic pages",
    updated: "2026-11-08",
  },
  {
    slug: "seo-basics-getting-started-2025",
    title: "SEO Basics: A Practical Start for a Small Business",
    excerpt:
      "Begin with useful pages, clear structure and a way to understand whether the right people are finding your website.",
    date: "2025-12-09",
    category: "SEO",
    featured: false,
    author: "Quesiono",
    authorRole: "Editorial",
    readTime: "1 min read",
    tags: ["SEO", "Keyword research", "Beginners", "Search Console"],
    relatedServiceSlugs: [
      "seo",
      "keyword-research",
      "on-page-seo",
      "local-seo",
    ],
    relatedPostSlugs: [
      "technical-seo-audit-checklist",
      "local-seo-strategy-small-business",
    ],
    relatedProjectSlugs: [],
    keywords: {
      primary: "SEO basics for small business",
      secondary: [
        "how to start SEO",
        "SEO for beginners",
        "keyword research basics",
        "first 90 days of SEO",
      ],
    },
    meta: {
      title: "SEO Basics: A Practical Start for a Small Business | Quesiono",
      description:
        "Begin with useful pages, clear structure and a way to understand whether the right people are finding your website.",
    },
    content:
      '<p>Begin with useful pages, clear structure and a way to understand whether the right people are finding your website.</p><h2 id="make-the-important-pages-useful">Make the important pages useful</h2><p>Identify the services or products customers need to understand. Each important page should explain the offer clearly, answer relevant questions and provide a practical next step. Write for the person making a decision rather than repeating a keyword for its own sake.</p><p>Use descriptive titles, headings and links. A visitor should be able to understand how a page relates to the rest of the site. Check that important information is available as readable content rather than only inside images or inaccessible interactions.</p><h2 id="check-that-the-site-can-be-discovered">Check that the site can be discovered</h2><p>Review crawl and indexing information in Search Console where access is available. Confirm that important pages are reachable through links and are not unintentionally blocked or marked noindex. A sitemap helps describe your URLs but does not guarantee indexing.</p><p>Keep URL changes deliberate. When replacing a page, consider whether the URL can remain the same and whether a redirect is needed. Use the <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide">Google SEO Starter Guide</a> as a reference for the fundamentals.</p><h2 id="build-a-manageable-routine">Build a manageable routine</h2><p>Record a baseline and choose a small set of meaningful pages to improve first. Check queries, relevant traffic and enquiries over time. Avoid treating a short-term ranking movement as proof that one change worked or failed.</p><p>Set realistic expectations and assign responsibility for updates. Search outcomes depend on competition, demand and the usefulness of the site. The next step may be <a href="/services/seo/technical-seo">technical SEO</a>, better content, or clearer service pages rather than a broad monthly programme.</p>',
    imageAlt:
      "Search Console performance report highlighting queries in positions five to fifteen",
    updated: "2026-11-08",
  },
  {
    slug: "brand-identity-guide-2025",
    title: "Brand Identity for the Web: The Decisions That Matter",
    excerpt:
      "Translate an existing identity into readable pages, consistent interactions and a recognizable online experience.",
    date: "2025-11-18",
    category: "Web Design",
    featured: false,
    author: "Quesiono",
    authorRole: "Editorial",
    readTime: "1 min read",
    tags: ["Brand", "Design systems", "Typography", "Colour"],
    relatedServiceSlugs: ["web-design", "ui-ux-design", "content-writing"],
    relatedPostSlugs: [
      "ux-design-principles-that-increase-conversions",
      "how-to-build-website-that-converts",
    ],
    relatedProjectSlugs: [],
    keywords: {
      primary: "brand identity for websites",
      secondary: [
        "brand identity guide",
        "web design brand system",
        "brand voice guidelines",
        "colour and typography system",
      ],
    },
    meta: {
      title: "Brand Identity for the Web: The Decisions That Matter | Quesiono",
      description:
        "Translate an existing identity into readable pages, consistent interactions and a recognizable online experience.",
    },
    content:
      '<p>Translate an existing identity into readable pages, consistent interactions and a recognizable online experience.</p><h2 id="agree-the-message-before-the-decoration">Agree the message before the decoration</h2><p>Write down what the business offers, who it is for and which claims can be supported. Agree the terms and tone the website should use. A visitor should understand the proposition even when the page is viewed without its decorative elements.</p><p>Gather approved logos, colours, fonts and imagery before designing. If the brand already has recognition, identify what must remain consistent and where the application can improve. A redesign does not automatically require a new palette.</p><h2 id="give-colours-and-typography-clear-jobs">Give colours and typography clear jobs</h2><p>Assign roles to existing colours: primary surfaces, body text, links, action buttons and supporting detail. Check each actual text-and-background combination. A brand accent can remain recognizable as a border or highlight when it is unsuitable for small text.</p><p>Choose a manageable type scale and consistent spacing. Test real headings, long labels and error messages, not only short sample copy. The system should survive narrower screens and zoomed text while preserving a clear reading order.</p><h2 id="document-the-repeated-decisions">Document the repeated decisions</h2><p>Define buttons, navigation, form fields, cards and focus states once. Include rules for imagery, captions and content length where they help editors. Reusable components reduce inconsistency without requiring every page to have the same composition.</p><p>Review the identity in complete journeys: a visitor arrives, finds a service, reads evidence and makes contact. Consistency should make that journey easier. Explore <a href="/services/web-design">web design</a> when the existing brand needs a more coherent digital application.</p>',
    imageAlt:
      "Brand system sheet showing type scale, palette, and contrast ratios",
    updated: "2026-11-08",
  },
  {
    slug: "automating-your-workflow-tools-tips",
    title: "Workflow Automation: Choose the Tasks Worth Improving",
    excerpt:
      "Start with a repeatable operational problem, then plan the data, failure handling and ownership around it.",
    date: "2025-10-21",
    category: "Development",
    featured: false,
    author: "Quesiono",
    authorRole: "Editorial",
    readTime: "1 min read",
    tags: ["Automation", "CI/CD", "Developer tooling", "Process"],
    relatedServiceSlugs: [
      "custom-development",
      "website-maintenance",
      "speed-optimization",
    ],
    relatedPostSlugs: ["nextjs-14-best-practices", "core-web-vitals-guide"],
    relatedProjectSlugs: [],
    keywords: {
      primary: "workflow automation for developers",
      secondary: [
        "CI/CD for web agencies",
        "automated deployment previews",
        "Lighthouse CI setup",
        "automating client reporting",
      ],
    },
    meta: {
      title: "Workflow Automation: Choose the Tasks Worth Improving | Quesiono",
      description:
        "Start with a repeatable operational problem, then plan the data, failure handling and ownership around it.",
    },
    content:
      '<p>Start with a repeatable operational problem, then plan the data, failure handling and ownership around it.</p><h2 id="describe-the-workflow-before-the-tool">Describe the workflow before the tool</h2><p>Write down the trigger, inputs, decision rules, outputs and people involved. Measure the effort and identify where errors occur. A process that changes every week may need clarification before it needs automation.</p><p>Look for repeated work with clear rules and accessible data. Keep judgement-heavy steps visible to the person responsible. Automating the transfer of information may be useful even when the final decision remains manual.</p><h2 id="plan-for-exceptions-and-recovery">Plan for exceptions and recovery</h2><p>An integration can fail because access expires, data changes or a third-party service is unavailable. Decide how failures are detected, who is notified and how work resumes. Consider duplicate events and partial completion before connecting production systems.</p><p>Use the minimum permissions needed and avoid putting sensitive credentials into shared documents or logs. Define which system owns each piece of data and how conflicts are resolved. A useful audit trail records actions without exposing unnecessary personal information.</p><h2 id="start-with-a-bounded-release">Start with a bounded release</h2><p>Pilot the workflow with a limited scope and compare the result with the original process. Track saved effort, error rates and the maintenance burden. A successful demonstration does not prove the system is ready for every exception.</p><p>Name an owner, write a short operating guide and keep a manual fallback where the business needs one. If the workflow calls for a portal, dashboard or custom integration, see <a href="/services/custom-development">custom development</a> for the scope decisions to address first.</p>',
    imageAlt:
      "Continuous integration pipeline showing lint, type check, build, and Lighthouse budget stages",
    updated: "2026-11-08",
  },
];
