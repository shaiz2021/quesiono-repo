import type { Service } from "./services";

/**
 * The SEO parent plus the on-site disciplines. Off-site and vertical SEO work
 * lives in services-seo-growth.ts.
 */
export const seoCoreServices: Service[] = [
  {
    slug: "seo",
    name: "SEO Services",
    navLabel: "SEO",
    shortDescription:
      "Search work built on what people type, not on a monthly report full of vanity charts.",
    icon: "search",
    href: "/services/seo",
    group: "seo",
    featured: true,
    layoutVariant: "split",
    hero: {
      eyebrow: "SEO",
      headline: "Rank for the searches that end in a sale",
      accent: ["end in a sale"],
      sub: "Position three for a keyword nobody buys from is a nice screenshot and nothing else. We go after the queries with intent behind them, fix the technical problems holding your site back, and report on pipeline instead of impressions.",
    },
    overview: {
      heading: "What our SEO services actually involve",
      paragraphs: [
        "SEO has a credibility problem, and it's earned. Too many retainers produce a monthly PDF showing traffic up and revenue flat, because the traffic came from informational queries that were never going to convert.",
        "We work backwards from money. Which searches does someone type when they're ready to buy what you sell? Usually those are lower volume and higher competition, so we build toward them: fix the crawl and indexing problems first, then the pages that already almost rank, then the content gaps, then authority.",
        "Three things we'll tell you up front. SEO takes three to six months to show real movement in a competitive market. Some keywords aren't worth chasing, and we'll name them. And if your site is fundamentally slow or your product pages are thin, content volume won't save it — the foundation comes first.",
      ],
    },
    outcomes: [
      "A keyword map tied to revenue, not to search volume alone",
      "Technical blockers found and fixed before content spend starts",
      "Monthly reporting on rankings, qualified traffic, and conversions from organic",
      "Every recommendation logged with the reasoning, so you can audit our thinking",
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
          "Digital PR, resource placements, and citations. Manual outreach only — no link networks, no paid placements that carry a penalty risk.",
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
          "Four weeks in: full technical audit, competitor analysis, and a record of exactly where you stand today.",
        detail: ["Technical crawl", "Competitor gap analysis", "Baseline rankings", "Analytics review"],
      },
      {
        step: "02",
        title: "Fix the foundation",
        description:
          "Crawl and index issues, speed, structure. Content published onto a broken foundation underperforms.",
        detail: ["Index coverage fixes", "Site architecture", "Core Web Vitals", "Structured data"],
      },
      {
        step: "03",
        title: "Harvest the near misses",
        description:
          "Pages ranking 8–20 improved first. Fastest wins available, because the hard part is already done.",
        detail: ["Position 8–20 audit", "Content expansion", "Internal linking", "Title and meta rewrites"],
      },
      {
        step: "04",
        title: "Fill the gaps",
        description:
          "New pages for the intents you don't cover yet, published on a steady cadence rather than in one burst.",
        detail: ["Content briefs", "Publishing calendar", "New landing pages", "Topic clusters"],
      },
      {
        step: "05",
        title: "Build authority",
        description:
          "Outreach and digital PR, once there's something on the site genuinely worth linking to.",
        detail: ["Link prospecting", "Outreach campaigns", "Digital PR", "Citation cleanup"],
      },
    ],
    techStack: [
      { name: "Google Search Console", note: "Field truth for queries and index coverage" },
      { name: "Ahrefs", note: "Backlinks, keyword difficulty, competitor gaps" },
      { name: "Screaming Frog", note: "Deep technical crawls" },
      { name: "GA4", note: "Organic conversions, not just sessions" },
      { name: "Looker Studio", note: "The dashboard behind the written report" },
      { name: "Semrush", note: "Rank tracking and SERP feature monitoring" },
    ],
    stats: [
      { display: "3–6", label: "Months to real movement", note: "Competitive markets. Sooner in quiet ones." },
      { value: 147, suffix: "%", label: "Median organic growth", note: "12 months, non-branded traffic." },
      { value: 0, label: "Link networks used", note: "Manual outreach only." },
    ],
    pricingTiers: [
      {
        name: "Audit only",
        price: "$99",
        summary: "Find out what's wrong and what to do about it.",
        features: [
          "Full technical audit",
          "Keyword and intent map",
          "Competitor gap analysis",
          "Prioritised 12-month roadmap",
          "90-minute walkthrough",
        ],
        excludes: ["Implementation", "Content", "Link building"],
        timeline: "2-3 days",
        bestFor: "Teams who'll execute in-house",
      },
      {
        name: "Growth retainer",
        price: "$499",
        period: "/ month",
        summary: "Ongoing technical, on-page, and content work.",
        features: [
          "Technical fixes implemented",
          "On-page optimisation",
          "4 content briefs monthly",
          "Internal linking programme",
          "Monthly written report",
          "Quarterly strategy call",
        ],
        excludes: ["Content writing", "Link outreach"],
        timeline: "3-month minimum",
        bestFor: "Most businesses",
        highlight: true,
      },
      {
        name: "Full programme",
        price: "$999",
        period: "/ month",
        summary: "Everything, including the writing and the outreach.",
        features: [
          "Everything in Growth",
          "6 pages written and published monthly",
          "Link building and digital PR",
          "Conversion rate work on landing pages",
          "Bi-weekly calls",
        ],
        timeline: "6-month minimum",
        bestFor: "Competitive markets",
      },
    ],
    pricingNote:
      "Six-month minimum on retainers because anything shorter can't show a fair result, and we'd rather not take money for a programme that gets cancelled before it works.",
    faqs: [
      {
        question: "How long until we see results?",
        answer:
          "Technical fixes can move things in weeks. New content targeting competitive terms takes three to six months to settle. Anyone promising page one in thirty days is either targeting keywords nobody searches or doing something that'll cost you later.",
      },
      {
        question: "Do you guarantee rankings?",
        answer:
          "No, and neither can anyone else honestly — Google's ranking systems aren't under our control or theirs. What we do guarantee is the work: the audit gets done, the fixes get implemented, the content gets published, and you see exactly what happened each month.",
      },
      {
        question: "What's a realistic budget for SEO?",
        answer:
          "Below roughly $94 a month you can't do enough to compete in most markets, so an audit plus in-house execution is better value than a thin retainer. Between $156 and $375 covers a proper programme for most businesses. Above that you're usually buying content volume and link outreach at scale.",
      },
      {
        question: "Can you work with our existing content team?",
        answer:
          "Happily, and it's often the best arrangement. We provide briefs — target query, intent, angle, sources, internal links, word count — and your team writes in your voice. We review before publish and handle the technical side.",
      },
      {
        question: "What if you find our site needs rebuilding first?",
        answer:
          "We'll say so and quantify it. Sometimes the honest answer is that six months of content on a site with a broken architecture and a 6-second mobile load will underperform a rebuild plus three months of content. We build sites too, so we can do either — but we'll tell you which one we'd choose.",
      },
      {
        question: "How do you report?",
        answer:
          "A written monthly report: what we did, what moved, what didn't and why, and what's next. There's a live dashboard behind it if you want the numbers, but the report is written so you don't have to interpret charts yourself.",
      },
    ],
    relatedSlugs: ["technical-seo", "on-page-seo", "keyword-research", "local-seo"],
    caseStudySlugs: ["local-restaurant-website", "northgate-dental", "coastline-outfitters"],
    blogSlugs: [
      "seo-basics-getting-started-2025",
      "technical-seo-audit-checklist",
      "local-seo-strategy-small-business",
      "core-web-vitals-guide",
    ],
    industrySlugs: ["professional-services", "healthcare", "ecommerce-retail", "real-estate"],
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
      title: "SEO Services — Rankings That Turn Into Revenue | Quesiono",
      description:
        "Technical audits, intent-mapped keywords, content briefs, and manual link outreach. Monthly reporting on qualified organic traffic and conversions, written in plain English.",
    },
    media: {
      imageAlt: "Search Console query report beside a rising organic traffic chart",
    },
  },

  {
    slug: "technical-seo",
    name: "Technical SEO",
    parentService: "seo",
    shortDescription:
      "Crawlability, indexing, structured data, and speed — the layer everything else depends on.",
    icon: "settings",
    href: "/services/seo/technical-seo",
    group: "seo",
    featured: true,
    layoutVariant: "split",
    hero: {
      eyebrow: "Technical SEO",
      headline: "If Google can't crawl it, nothing else matters",
      accent: ["can't crawl it"],
      sub: "Blocked resources, duplicate URLs from filter parameters, an orphaned quarter of your site, JavaScript that renders content Google never sees. Unglamorous problems with a large effect on what ranks.",
    },
    overview: {
      heading: "Technical SEO audits and implementation",
      paragraphs: [
        "Technical SEO is the part that either works or silently doesn't. A site can have good content and strong links while a third of its pages sit outside the index because faceted navigation generated forty thousand near-duplicate URLs and burned the crawl budget.",
        "We crawl your site the way a search engine does, compare it against what's actually indexed, and find the gap. Then we go through the list: canonicals, redirect chains, pagination, hreflang if you're multi-region, structured data, and rendering — because a client-side-rendered page can be perfect for users and invisible in search.",
        "Most of this work is one-off. Fix it well and it stays fixed until the site changes structurally, which is why we hand over documentation and a monitoring setup rather than selling a permanent retainer for it.",
      ],
    },
    outcomes: [
      "Index coverage explained line by line — every excluded URL accounted for",
      "Crawl budget spent on pages you want ranked instead of parameter noise",
      "Structured data valid and eligible for the rich results your category supports",
      "Rendering verified so Google sees the same content your visitors do",
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
          "Schema for your page types — Organization, Service, Product, Article, FAQ, LocalBusiness — validated and monitored for errors.",
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
        detail: ["Site crawl", "Coverage export", "Log analysis", "Rendering tests"],
      },
      {
        step: "02",
        title: "Diagnose",
        description:
          "Every issue documented with the affected URLs, the cause, and what it's costing you.",
        detail: ["Issue register", "Affected URL lists", "Impact estimate", "Priority order"],
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
          "Re-crawl, re-render, re-test structured data, and watch index coverage recover over the following weeks.",
        detail: ["Re-crawl", "Schema validation", "Coverage monitoring", "URL inspection"],
      },
      {
        step: "05",
        title: "Monitor",
        description:
          "Alerts on coverage drops and schema errors so the next regression surfaces in days, not next quarter.",
        detail: ["Coverage alerts", "Schema monitoring", "Documentation", "Handover"],
      },
    ],
    stats: [
      { value: 34, suffix: "%", label: "Median index coverage gain", note: "Pages indexed after fixes." },
      { display: "2–4", label: "Weeks per audit", note: "Scales with site size." },
      { value: 100, suffix: "%", label: "Issues with URL lists", note: "No vague 'improve site structure'." },
    ],
    faqs: [
      {
        question: "How is this different from your general SEO service?",
        answer:
          "This is the foundation layer only — crawling, indexing, structure, rendering, schema, speed. No keyword strategy, no content, no links. Plenty of clients start here because it's a one-off cost with a clear deliverable, then decide about ongoing work afterwards.",
      },
      {
        question: "Our site is on Shopify or Wix. Can technical SEO even be done?",
        answer:
          "Partly. Hosted platforms control robots.txt, URL structure, and some canonical behaviour, so a few fixes aren't available. We'll be explicit about what's achievable on your platform before you commit, rather than billing for work the platform won't allow.",
      },
      {
        question: "Do we need log file analysis?",
        answer:
          "It's the most direct evidence of how Googlebot spends its crawl budget, and it's genuinely useful above roughly 10,000 URLs. Below that, Search Console coverage plus a crawl tells us nearly everything. If logs are hard to get, we don't hold up the audit for them.",
      },
      {
        question: "Will you implement the fixes or just report them?",
        answer:
          "Either. If you have developers, we write tickets with the exact change, the affected URLs, and how to verify it. If not, we implement on staging and you approve before it goes live.",
      },
      {
        question: "How often should a technical audit be repeated?",
        answer:
          "Annually for a stable site, or after any migration, redesign, or platform change. In between, monitoring catches regressions — a full re-audit every quarter is usually selling you a report you don't need.",
      },
    ],
    relatedSlugs: ["seo", "speed-optimization", "on-page-seo", "web-development"],
    caseStudySlugs: ["dazzle-website", "coastline-outfitters", "saas-dashboard"],
    blogSlugs: ["technical-seo-audit-checklist", "core-web-vitals-guide", "seo-basics-getting-started-2025"],
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
      title: "Technical SEO Audits & Fixes | Quesiono",
      description:
        "Crawl and log analysis, index coverage, canonicals, rendering, and structured data. Every issue documented with affected URLs and a fix we can implement.",
    },
    media: {
      imageAlt: "Site crawl visualisation showing click depth and index coverage by page type",
    },
  },

  {
    slug: "on-page-seo",
    name: "On-Page SEO",
    parentService: "seo",
    shortDescription:
      "Titles, headings, content depth, and internal links on the pages closest to ranking.",
    icon: "file-edit",
    href: "/services/seo/on-page-seo",
    group: "seo",
    layoutVariant: "stacked",
    hero: {
      eyebrow: "On-page SEO",
      headline: "Your best pages are one honest rewrite from page one",
      accent: ["one honest rewrite"],
      sub: "Most sites have a dozen pages sitting at position 9 through 20. Google already thinks they're relevant. Closing that gap is the cheapest traffic available to you, and it's mostly editing.",
    },
    overview: {
      heading: "On-page SEO optimisation",
      paragraphs: [
        "On-page SEO got a bad name from the keyword-density era, when it meant repeating a phrase until the copy read like a ransom note. What it means now is more useful: does this page answer the question someone typed, better than the pages currently above it?",
        "We start with the near misses — pages ranking 8 to 20 — because Google has already decided they're relevant and small improvements move them a long way. Then the title and meta description, which are the ad for your page in the results and are often left as whatever the CMS generated.",
        "The larger part is content depth. If the top three results all cover pricing, timelines, and comparisons and your page covers none of them, you don't have a keyword problem. You have a completeness problem, and no amount of tag tweaking fixes it.",
      ],
    },
    outcomes: [
      "One page per target query — no more cannibalisation between two similar posts",
      "Titles and descriptions written to be clicked, then measured against actual CTR",
      "Content gaps closed against what's already ranking",
      "Internal links pointing authority at the pages you want to rank",
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
          "A logical H1–H3 outline that covers what the top results cover, plus whatever they miss. Structure and substance together.",
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
          "Descriptive alt text, right-sized images, transcripts for video, and captions — accessibility and search at the same time.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Find the near misses",
        description:
          "Search Console query data, filtered to positions 8–20 with real impressions. That's the shortlist.",
        detail: ["Query export", "Position filtering", "Impression weighting", "Opportunity ranking"],
      },
      {
        step: "02",
        title: "Compare against the SERP",
        description:
          "What the pages above you cover that yours doesn't. Specific gaps, listed.",
        detail: ["SERP analysis", "Content gap list", "Intent check", "Format review"],
      },
      {
        step: "03",
        title: "Rewrite and restructure",
        description:
          "Titles, headings, and the content itself. Substantive additions, not sprinkled keywords.",
        detail: ["Title and meta rewrite", "Outline restructure", "Content additions", "Schema"],
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
          "Position and CTR tracked for six to eight weeks. What worked informs the next batch.",
        detail: ["Rank tracking", "CTR comparison", "Conversion check", "Next batch"],
      },
    ],
    stats: [
      { value: 6, prefix: "+", label: "Median position gain", note: "Pages starting at 8–20, within 8 weeks." },
      { value: 8, label: "Pages per cycle", note: "Batched so results are attributable." },
      { display: "4–6", label: "Weeks to see movement", note: "Faster than new content." },
    ],
    faqs: [
      {
        question: "Isn't on-page SEO just keyword stuffing with better manners?",
        answer:
          "No. Keyword density stopped mattering years ago. What matters is whether the page covers the topic as completely as the ones ranking above it, and whether the structure makes that coverage obvious. Most of our on-page work is adding substance, not adjusting phrasing.",
      },
      {
        question: "Which pages should we optimise first?",
        answer:
          "Whatever ranks 8 to 20 for a query with commercial intent and real impressions. Those are close enough that editing moves them, and valuable enough to be worth the effort. Pages ranking 60th need a different conversation.",
      },
      {
        question: "Will you rewrite our copy entirely?",
        answer:
          "Sometimes. If a page is thin against a competitive query, adding two paragraphs won't do it. We'll tell you when a page needs a rewrite versus an edit, and rewrites are priced as content work rather than absorbed into an on-page pass.",
      },
      {
        question: "How do you avoid keyword cannibalisation?",
        answer:
          "One page per query, enforced by the keyword map. When two pages already compete, we either merge them and redirect, or differentiate their intent clearly. Two half-strength pages ranking 14th and 19th consistently lose to one strong page.",
      },
      {
        question: "Does on-page work help if our site is technically broken?",
        answer:
          "Less than it should. If pages aren't indexed or take six seconds to load, on-page work is fighting the foundation. We check that first and will redirect you to technical work if that's the real constraint.",
      },
    ],
    relatedSlugs: ["seo", "keyword-research", "content-writing", "technical-seo"],
    caseStudySlugs: ["local-restaurant-website", "hartwell-mercer-law", "dazzle-website"],
    blogSlugs: ["seo-basics-getting-started-2025", "content-strategy-that-actually-works", "technical-seo-audit-checklist"],
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
      title: "On-Page SEO Optimisation Services | Quesiono",
      description:
        "We start with pages ranking 8–20, close the content gaps against what outranks them, rewrite titles for the click, and route internal links properly.",
    },
    media: {
      imageAlt: "Search Console position report with pages ranking between eight and twenty highlighted",
    },
  },

  {
    slug: "keyword-research",
    name: "Keyword Research",
    parentService: "seo",
    shortDescription:
      "A keyword map built around buying intent and what you can realistically win.",
    icon: "target",
    href: "/services/seo/keyword-research",
    group: "seo",
    layoutVariant: "split",
    hero: {
      eyebrow: "Keyword research",
      headline: "Stop chasing volume. Chase intent",
      accent: ["intent"],
      sub: "A 20,000-a-month head term you'll never rank for is worth less than eleven long-tail queries you can own by Christmas. We build the map that tells you which is which, and in what order.",
    },
    overview: {
      heading: "Keyword research and search intent mapping",
      paragraphs: [
        "Keyword research done badly is an export from a tool sorted by volume. Done properly it's a strategic document: which queries your buyers use, what stage of the decision each represents, how hard each is for a site with your authority, and what page type Google currently rewards for it.",
        "That last point gets skipped constantly. If every result for a query is a comparison article, a product page won't rank there no matter how good it is. The SERP tells you what format is expected, and arguing with it is expensive.",
        "You end up with a spreadsheet and a plan: primary and secondary keywords assigned per page, gaps where you need something new, clusters grouped into topics, and a sequence that starts with what's winnable so there's momentum before the hard terms.",
      ],
    },
    outcomes: [
      "Every query classified by intent — informational, commercial, transactional, navigational",
      "Difficulty assessed against your domain rather than in the abstract",
      "Topic clusters with a clear pillar page and supporting content",
      "A sequenced roadmap: quick wins first, competitive terms once authority supports them",
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
          "Not just the tool's number — who ranks now, how strong they are, and whether a site with your profile can displace them.",
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
          "A twelve-month order of work, starting with what's winnable now, with estimated traffic value per cluster.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Understand the offer",
        description:
          "What you sell, at what price, to whom, and what they call it — which is often not what you call it.",
        detail: ["Offer review", "Buyer language", "Sales call listening", "Support ticket scan"],
      },
      {
        step: "02",
        title: "Expand",
        description:
          "Every source we can reach, deduplicated into one master list before any filtering happens.",
        detail: ["Tool exports", "Competitor gaps", "Search Console queries", "Community language"],
      },
      {
        step: "03",
        title: "Classify",
        description:
          "Intent, stage, and expected page type for each query. This is the judgement-heavy part.",
        detail: ["Intent labelling", "SERP format check", "Commercial value estimate"],
      },
      {
        step: "04",
        title: "Score and cluster",
        description:
          "Realistic difficulty against your domain, then grouped into topic clusters with pillars identified.",
        detail: ["Difficulty scoring", "Clustering", "Pillar selection", "Internal link map"],
      },
      {
        step: "05",
        title: "Sequence and hand over",
        description:
          "A twelve-month roadmap, delivered live on a call so you can push back on priorities.",
        detail: ["Roadmap", "Page map", "Walkthrough call", "Editable spreadsheet"],
      },
    ],
    stats: [
      { display: "300+", label: "Queries per project", note: "Median, after deduplication." },
      { value: 12, label: "Month roadmap", note: "Sequenced by winnability." },
      { display: "2–3", label: "Weeks turnaround", note: "From kickoff to walkthrough." },
    ],
    pricingTiers: [
      {
        name: "Focused",
        price: "$37",
        summary: "One service line or product category.",
        features: [
          "Up to 150 mapped queries",
          "Intent classification",
          "Difficulty scoring",
          "Keyword-to-page map",
          "Walkthrough call",
        ],
        timeline: "2 weeks",
        bestFor: "Single-service businesses",
      },
      {
        name: "Full catalogue",
        price: "$90",
        summary: "Every service line, clustered and sequenced.",
        features: [
          "300+ mapped queries",
          "Topic clusters with pillars",
          "Competitor gap analysis",
          "12-month roadmap",
          "Content briefs for the first 5 pages",
        ],
        timeline: "3 weeks",
        bestFor: "Multi-service and ecommerce",
        highlight: true,
      },
    ],
    faqs: [
      {
        question: "Can't we just use a keyword tool ourselves?",
        answer:
          "You can get the list from a tool in an afternoon. What tools don't give you is intent classification, an honest read on whether you can win a term, or the clustering that turns a list into a plan. If you have someone who'll do that thinking, do it in-house — the tool subscription is cheaper than we are.",
      },
      {
        question: "How do you judge keyword difficulty?",
        answer:
          "Tool scores are a starting point and often misleading. We look at who actually ranks in the top five, their referring domains, their content depth, and whether the SERP is dominated by brands you won't outrank. A difficulty-30 keyword with three Wikipedia-tier results is not a difficulty-30 keyword.",
      },
      {
        question: "Do you cover long-tail keywords?",
        answer:
          "That's usually where the plan starts. Long-tail queries convert better because the intent is explicit, and they're winnable within months rather than years. Head terms go on the roadmap for later, once there's authority to support a run at them.",
      },
      {
        question: "What about AI search and zero-click results?",
        answer:
          "It's changing which queries are worth targeting. Purely informational questions increasingly get answered on the results page, so we weight toward commercial and transactional queries where someone still needs to reach a site to act. We flag which of your target queries look at risk.",
      },
      {
        question: "Do we get the raw data?",
        answer:
          "Yes — an editable spreadsheet with every query, its metrics, its classification, and its assigned page. It's yours to hand to any writer or agency, including one that isn't us.",
      },
    ],
    relatedSlugs: ["seo", "on-page-seo", "content-writing", "ecommerce-seo"],
    caseStudySlugs: ["saas-dashboard", "coastline-outfitters", "northgate-dental"],
    blogSlugs: ["seo-basics-getting-started-2025", "content-strategy-that-actually-works", "local-seo-strategy-small-business"],
    industrySlugs: ["saas-startups", "ecommerce-retail", "professional-services"],
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
      title: "Keyword Research & Search Intent Mapping | Quesiono",
      description:
        "300+ queries classified by intent, scored against your actual domain strength, clustered into topics, and sequenced into a twelve-month roadmap you can act on.",
    },
    media: {
      imageAlt: "Keyword map showing topic clusters connected to pillar pages",
    },
  },
];
