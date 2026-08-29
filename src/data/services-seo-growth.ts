import type { Service } from "./services";

/**
 * Off-site authority work and the two vertical SEO specialisms. The parent
 * service and on-site disciplines live in services-seo-core.ts.
 */
export const seoGrowthServices: Service[] = [
  {
    slug: "off-page-seo",
    name: "Off-Page SEO",
    parentService: "seo",
    shortDescription:
      "Authority built through digital PR, citations, and outreach that a human replies to.",
    icon: "globe",
    href: "/services/seo/off-page-seo",
    group: "seo",
    layoutVariant: "editorial",
    hero: {
      eyebrow: "Off-page SEO",
      headline: "Authority you can't buy, built the slow way",
      accent: ["slow way"],
      sub: "Digital PR, expert contributions, industry citations, and unlinked-mention recovery. No private blog networks, no $40 guest posts on sites that exist only to sell links.",
    },
    overview: {
      heading: "Off-page SEO and authority building",
      paragraphs: [
        "Off-page SEO is where the industry's worst practices live. Link marketplaces, PBNs, and mass-outreach templates all produce links quickly and put your domain at risk in exchange. We've cleaned up after that approach for enough clients to have no interest in selling it.",
        "What works is slower and duller. Find publications and resources your buyers actually read. Give their editors something genuinely worth publishing — original data, a considered argument, a practitioner's answer to a question their audience asks. Then follow up like a person rather than a sequence.",
        "There's also a quiet source of value most sites ignore: brand mentions with no link. If someone has already written about you favourably, asking for the link is a short email with a high hit rate. We find those first because they're the cheapest wins available.",
      ],
    },
    outcomes: [
      "Links from sites with real traffic and real editorial standards",
      "Unlinked brand mentions converted, usually within the first month",
      "Citation and directory profiles consistent across the web",
      "A backlink profile that reads naturally to a spam algorithm",
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
          "Your existing relationships — suppliers, associations, clients, sponsorships — are usually an unclaimed source of legitimate links.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Audit the profile",
        description:
          "What you have, what's toxic, and where competitors have links you don't.",
        detail: ["Backlink audit", "Toxicity review", "Competitor gap", "Unlinked mention scan"],
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
        detail: ["Asset selection", "Data gathering", "Production", "Angle development"],
      },
      {
        step: "04",
        title: "Pitch",
        description:
          "Individually written pitches to a researched list. Small volume, high relevance, follow-ups by hand.",
        detail: ["Prospect research", "Personalised pitches", "Follow-up", "Relationship notes"],
      },
      {
        step: "05",
        title: "Report and repeat",
        description:
          "Every link earned, with the site's traffic and relevance, plus what didn't land and why.",
        detail: ["Link report", "Outreach metrics", "Angle iteration"],
      },
    ],
    stats: [
      { display: "6–14", label: "Links per quarter", note: "Editorially earned, varies by sector." },
      { value: 0, label: "Paid placements", note: "We don't buy links." },
      { value: 38, suffix: "%", label: "Reply rate", note: "Unlinked mention outreach." },
    ],
    faqs: [
      {
        question: "How many links will we get per month?",
        answer:
          "Six to fourteen a quarter is typical, and we'd rather quote a range than a number we'd have to buy links to hit. Anyone promising twenty a month at a fixed price is buying them somewhere, and you inherit that risk, not them.",
      },
      {
        question: "Do you buy links or use guest post networks?",
        answer:
          "No. Both violate Google's link spam policies, and the algorithmic updates that target them have wiped out sites we've been called in to rescue. Everything we build is editorially earned, which is slower and holds up.",
      },
      {
        question: "What if a previous agency built spammy links for us?",
        answer:
          "Then that's the first job. We audit the profile, pursue removals where the site will respond, and disavow the rest. It's unglamorous and sometimes takes a couple of months, but new outreach onto a poisoned profile is wasted money.",
      },
      {
        question: "Does guest posting still work?",
        answer:
          "On real publications with real editors and real readers, yes — that's just contributing to your industry. On sites that exist to host guest posts, no, and Google is good at telling the difference. If a site's 'write for us' page mentions a fee, we're not interested.",
      },
      {
        question: "How do you measure whether it's working?",
        answer:
          "Referring domains from sites with organic traffic, movement on the target keywords those pages support, and referral traffic. Domain Rating on its own is a vendor metric — we report it because clients ask, not because it's the goal.",
      },
    ],
    relatedSlugs: ["link-building", "seo", "technical-seo", "content-writing"],
    caseStudySlugs: ["hartwell-mercer-law", "coastline-outfitters", "northgate-dental"],
    blogSlugs: ["seo-basics-getting-started-2025", "content-strategy-that-actually-works"],
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
      title: "Off-Page SEO & Digital PR Services | Quesiono",
      description:
        "Authority built through digital PR, expert contributions, unlinked-mention recovery, and citation cleanup. No link buying, no PBNs, no guest post networks.",
    },
    media: {
      imageAlt: "Backlink profile chart showing referring domains growing over twelve months",
    },
  },

  {
    slug: "link-building",
    name: "Link Building",
    parentService: "seo",
    shortDescription:
      "Manual outreach for editorial links, with the target list shown to you before we send anything.",
    icon: "link2",
    href: "/services/seo/link-building",
    group: "seo",
    layoutVariant: "stacked",
    hero: {
      eyebrow: "Link building",
      headline: "Every link earned, every prospect shown to you first",
      accent: ["shown to you first"],
      sub: "You approve the target list before a single email goes out. You see every placement with its traffic, relevance, and the exact page it points at. If a link is one we wouldn't want on our own site, we don't pursue it.",
    },
    overview: {
      heading: "White-hat link building services",
      paragraphs: [
        "Links are still among the strongest ranking signals, which is why the market for them is so grubby. Search for a link building service and you'll find price-per-link menus, guaranteed placement counts, and DR-50-for-$120 offers. All of it carries risk you keep and the vendor doesn't.",
        "Our version is transparent by design. We research prospects, score them on traffic and topical relevance, and send you the list. You strike anything you don't want — competitors, sites you'd rather not associate with. Then we write individual pitches and follow up by hand.",
        "It's slower and the volume is lower. What you get instead is a backlink profile that survives an algorithm update and a set of relationships that keep producing coverage after the engagement ends.",
      ],
    },
    outcomes: [
      "Prospect list approved by you before outreach begins",
      "Placements reported with organic traffic and topical relevance, not just DR",
      "Anchor text varied naturally instead of exact-match on every link",
      "Links pointed at pages that can convert, not only at the homepage",
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
        detail: ["Prospect list", "Traffic and relevance scoring", "Client approval"],
      },
      {
        step: "03",
        title: "Prepare the asset",
        description:
          "The thing being pitched — data, tool, or guide — produced or identified from what you already have.",
        detail: ["Asset production", "Angle development", "Supporting data"],
      },
      {
        step: "04",
        title: "Outreach",
        description:
          "Individually written, sent in small batches, followed up twice. Then we stop, because a third follow-up is spam.",
        detail: ["Pitch writing", "Send in batches", "Two follow-ups", "Reply handling"],
      },
      {
        step: "05",
        title: "Report",
        description:
          "Placements with full context, plus honest numbers on what was pitched and what was ignored.",
        detail: ["Placement report", "Outreach metrics", "Rank impact", "Next-cycle angles"],
      },
    ],
    stats: [
      { display: "4–9", label: "Links per month", note: "Varies with sector and asset quality." },
      { value: 100, suffix: "%", label: "Prospects pre-approved", note: "By you, before outreach." },
      { value: 2, label: "Follow-ups maximum", note: "Then we move on." },
    ],
    pricingTiers: [
      {
        name: "Starter",
        price: "$299",
        period: "/ month",
        summary: "Reclamation and low-hanging opportunities.",
        features: [
          "Unlinked mention recovery",
          "Broken link reclamation",
          "Partner and association outreach",
          "Monthly placement report",
        ],
        excludes: ["Asset production", "Digital PR"],
        timeline: "3-month minimum",
        bestFor: "Sites with existing brand presence",
      },
      {
        name: "Growth",
        price: "$599",
        period: "/ month",
        summary: "Full outreach programme with an asset behind it.",
        features: [
          "Everything in Starter",
          "One linkable asset per quarter",
          "Competitor gap outreach",
          "Expert contribution placements",
          "Approved prospect lists",
        ],
        timeline: "6-month minimum",
        bestFor: "Most competitive markets",
        highlight: true,
      },
    ],
    pricingNote:
      "Priced by the work, not per link. Per-link pricing pushes any vendor toward cheap links, and you'd be the one carrying that risk.",
    faqs: [
      {
        question: "Why not just pay per link?",
        answer:
          "Because per-link pricing changes what a vendor optimises for. If we're paid per placement, the incentive is to find the cheapest site that'll say yes, and that's how link farms get into your profile. Paid by the work, we can spend three days on one placement that's worth it.",
      },
      {
        question: "How is this different from your off-page SEO service?",
        answer:
          "Off-page is broader — citations, brand mentions, profile cleanup, digital PR. Link building is the focused outreach programme within it. Clients with a clean profile and a specific set of pages to push usually want this one on its own.",
      },
      {
        question: "What's a good link?",
        answer:
          "Real organic traffic, topical overlap with your business, an editorial process, and a link that makes sense in context to a reader. A DR-70 site with two hundred monthly visitors and a page of unrelated outbound links is not a good link, whatever the metric says.",
      },
      {
        question: "Will you link to our homepage or inner pages?",
        answer:
          "Mostly inner pages — service pages and the content that supports them, since that's where ranking matters. Some homepage links happen naturally through brand coverage, and a profile pointing only at the homepage looks engineered.",
      },
      {
        question: "How long before links affect rankings?",
        answer:
          "Google has to crawl and evaluate them, then the effect compounds. Four to twelve weeks per link, longer in competitive markets. Link building isn't a lever you pull for next month's numbers.",
      },
    ],
    relatedSlugs: ["off-page-seo", "seo", "content-writing", "keyword-research"],
    caseStudySlugs: ["hartwell-mercer-law", "saas-dashboard", "coastline-outfitters"],
    blogSlugs: ["seo-basics-getting-started-2025", "content-strategy-that-actually-works"],
    industrySlugs: ["saas-startups", "professional-services", "ecommerce-retail"],
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
      title: "White-Hat Link Building Services | Quesiono",
      description:
        "Manual outreach for editorial links. You approve every prospect before we send. Placements reported with real traffic and relevance — no link buying, no PBNs.",
    },
    media: {
      imageAlt: "Outreach prospect list with traffic and relevance scores beside earned placements",
    },
  },

  {
    slug: "local-seo",
    name: "Local SEO",
    parentService: "seo",
    shortDescription:
      "Map pack visibility, review velocity, and location pages that rank in the towns you serve.",
    icon: "map-pin",
    href: "/services/seo/local-seo",
    group: "seo",
    layoutVariant: "showcase",
    hero: {
      eyebrow: "Local SEO",
      headline: "Win the map pack in every area you serve",
      accent: ["map pack"],
      sub: "Three results sit above the organic listings on a local search, and they take most of the clicks. Getting into that box is a different job from ranking a website, and it's mostly proximity, prominence, and reviews.",
    },
    overview: {
      heading: "Local SEO services for multi-location and service-area businesses",
      paragraphs: [
        "Local search runs on its own logic. Google weighs relevance, distance, and prominence — and distance is the one you can't change, which is why a single office trying to rank across five towns is a harder problem than most guides admit.",
        "The work splits in two. Your Google Business Profile: categories, services, attributes, photos posted regularly, questions answered, and a steady flow of reviews with genuine responses. And your website: location pages with real substance, local schema, embedded service areas, and citations consistent everywhere.",
        "One thing we won't do is spin up thirty near-identical city pages with the town name swapped. Google has been discounting that for years, and it's also just a bad page for the person reading it. Location pages need local proof — projects, team, actual service coverage.",
      ],
    },
    outcomes: [
      "Google Business Profile fully optimised and posted to consistently",
      "Review volume and velocity improved through a process, not nagging",
      "Location pages with genuine local substance rather than a swapped town name",
      "Citations consistent across the directories that feed local results",
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
          "A request process built into your workflow, plus written responses to every review — including the bad ones, which matter more.",
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
          "Grid-based tracking that shows where you appear from different points in your service area — not a single city-centre position.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Local audit",
        description:
          "Profile completeness, citation consistency, review position against competitors, and a grid scan of current visibility.",
        detail: ["Profile audit", "Citation scan", "Competitor grid", "Review benchmark"],
      },
      {
        step: "02",
        title: "Fix the profile",
        description:
          "Categories, services, attributes, photos, and Q&A. The highest-leverage hour in local SEO.",
        detail: ["Category selection", "Service listings", "Photo upload", "Q&A seeding"],
      },
      {
        step: "03",
        title: "Clean the citations",
        description:
          "Inconsistencies and duplicates corrected at the aggregator level so they stop reappearing.",
        detail: ["Aggregator submissions", "Duplicate merges", "Sector directories"],
      },
      {
        step: "04",
        title: "Build local pages",
        description:
          "Real pages for real service areas, with local proof and internal links from the relevant service pages.",
        detail: ["Location pages", "Local schema", "Internal linking", "Embedded coverage maps"],
      },
      {
        step: "05",
        title: "Reviews and posts, ongoing",
        description:
          "A review request process your team can run, plus profile posts, tracked monthly on the grid.",
        detail: ["Review workflow", "Response templates", "Monthly posts", "Grid tracking"],
      },
    ],
    stats: [
      { value: 3, label: "Map pack slots", note: "What every local search competes for." },
      { value: 62, suffix: "%", label: "Median map pack impression lift", note: "First six months." },
      { display: "4–8", label: "Weeks to first movement", note: "Faster than most organic work." },
    ],
    pricingTiers: [
      {
        name: "Single location",
        price: "$199",
        period: "/ month",
        summary: "One profile, one primary service area.",
        features: [
          "GBP optimisation and monthly posts",
          "Citation cleanup",
          "Review workflow and responses",
          "Local schema",
          "Monthly grid report",
        ],
        timeline: "3-month minimum",
        bestFor: "Single-site businesses",
      },
      {
        name: "Multi-area",
        price: "$499",
        period: "/ month",
        summary: "Several service areas from one or two locations.",
        features: [
          "Everything in Single location",
          "Up to 8 location pages",
          "Per-area grid tracking",
          "Local content plan",
          "Competitor monitoring",
        ],
        timeline: "3 to 4-month minimum",
        bestFor: "Service-area businesses",
        highlight: true,
      },
      {
        name: "Multi-location",
        price: "From $999",
        period: "/ month",
        summary: "Multiple physical locations, each with its own profile.",
        features: [
          "Everything in Multi-area",
          "Per-location profile management",
          "Store locator implementation",
          "Bulk citation management",
          "Location-level reporting",
        ],
        timeline: "6-month minimum",
        bestFor: "Franchises and clinics",
      },
    ],
    faqs: [
      {
        question: "Can we rank in a city where we don't have an address?",
        answer:
          "It's hard, because proximity is a real factor in the map pack. A strong location page can rank organically for \"[service] in [city]\" without an address there, but appearing in the three-pack from the city centre when your office is twenty miles away is unlikely. We'll tell you which of your target areas are realistic before you spend.",
      },
      {
        question: "How many reviews do we need?",
        answer:
          "Enough to be competitive with whoever's in the three-pack now, which we check in the audit. Recency matters as much as count — forty reviews from two years ago look worse than fifteen from the last six months. Steady is the goal.",
      },
      {
        question: "Should we respond to negative reviews?",
        answer:
          "Always, and quickly. A calm, specific reply to a bad review reassures the next reader more than a wall of five stars does. We write responses for approval so nothing goes out in a bad mood.",
      },
      {
        question: "Do we need a page for every town we serve?",
        answer:
          "Only for areas where you do real work and can say something specific — projects, coverage details, travel time. Thirty templated city pages with the name swapped get discounted by Google and read badly. Eight substantive pages beat thirty thin ones.",
      },
      {
        question: "What about service-area businesses with no storefront?",
        answer:
          "Google supports service-area profiles with a hidden address. It's a slightly harder ranking position but entirely workable, and we set up the service area boundaries and page structure around it.",
      },
    ],
    relatedSlugs: ["seo", "on-page-seo", "content-writing", "web-design"],
    caseStudySlugs: ["local-restaurant-website", "northgate-dental", "castellan-realty"],
    blogSlugs: ["local-seo-strategy-small-business", "seo-basics-getting-started-2025", "technical-seo-audit-checklist"],
    industrySlugs: ["restaurants-hospitality", "healthcare", "real-estate", "professional-services"],
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
      title: "Local SEO Services — Map Pack & Location Pages | Quesiono",
      description:
        "Google Business Profile optimisation, review workflows, citation cleanup, and location pages with real local substance. Grid tracking so you see actual coverage.",
    },
    media: {
      imageAlt: "Local search results showing a three-result map pack above the organic listings",
    },
  },

  {
    slug: "ecommerce-seo",
    name: "Ecommerce SEO",
    parentService: "seo",
    shortDescription:
      "Category and product page visibility, faceted navigation control, and Product schema.",
    icon: "shopping-bag",
    href: "/services/seo/ecommerce-seo",
    group: "seo",
    layoutVariant: "split",
    hero: {
      eyebrow: "Ecommerce SEO",
      headline: "Your category pages should be your best salespeople",
      accent: ["category pages"],
      sub: "Most stores put their SEO effort into a blog and leave collection pages as a grid with a one-line description. Those category pages are where commercial searches land, and they're usually the biggest untapped opportunity in the store.",
    },
    overview: {
      heading: "Ecommerce SEO for stores with real catalogues",
      paragraphs: [
        "Ecommerce SEO has problems no other site type has. Faceted navigation can generate tens of thousands of crawlable URL combinations. Products go out of stock or get discontinued, and you have to decide what happens to the URL. Manufacturer descriptions mean your product pages are word-for-word identical to forty competitors'.",
        "We start with crawl control, because a store wasting its crawl budget on colour-and-size permutations won't get its new products indexed promptly. Then category pages: proper copy, buying guidance, internal links to the subcategories that matter, and filters that only become indexable when they map to a real search.",
        "Product pages come next. Unique copy on the SKUs that earn it, complete Product and Offer schema so rich results show price and availability, and a review setup that adds content to the page as it accumulates.",
      ],
    },
    outcomes: [
      "Crawl budget aimed at products and categories, not filter permutations",
      "Category pages that rank for commercial head terms on their own",
      "Product and Offer schema valid, with price and availability in the results",
      "A documented policy for out-of-stock and discontinued URLs",
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
          "Price, availability, ratings where you have genuine reviews, and shipping details — so listings show more than a blue link.",
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
        detail: ["Full crawl", "Parameter inventory", "Index coverage", "Crawl budget analysis"],
      },
      {
        step: "02",
        title: "Control the facets",
        description:
          "Indexable, canonicalised, or blocked — decided per parameter and implemented.",
        detail: ["Parameter rules", "Canonical strategy", "Robots directives", "Internal link audit"],
      },
      {
        step: "03",
        title: "Map the catalogue",
        description:
          "Commercial queries assigned to categories and subcategories, with missing collections flagged.",
        detail: ["Category keyword map", "Gap analysis", "New collection list", "Hierarchy review"],
      },
      {
        step: "04",
        title: "Build out the pages",
        description:
          "Category copy, product depth, and schema. Highest-revenue categories first.",
        detail: ["Category copy", "Product templates", "Schema implementation", "Internal linking"],
      },
      {
        step: "05",
        title: "Monitor and maintain",
        description:
          "New products indexed promptly, schema errors caught, and the URL policy applied as the catalogue turns over.",
        detail: ["Index monitoring", "Schema alerts", "New product checks", "Monthly report"],
      },
    ],
    stats: [
      { value: 71, suffix: "%", label: "Median crawl waste cut", note: "URLs excluded from crawl after facet rules." },
      { value: 44, suffix: "%", label: "Median category page traffic lift", note: "Six months, non-branded." },
      { display: "3–5", label: "Weeks for the audit", note: "Longer for catalogues over 10k SKUs." },
    ],
    faqs: [
      {
        question: "Should filtered pages be indexable?",
        answer:
          "Some. If people search \"waterproof hiking boots size 11\" in volume, that combination deserves an indexable page with its own title and copy. Colour-and-price-and-brand combinations that nobody searches should be canonicalised or blocked. It's a judgement per parameter, driven by search data.",
      },
      {
        question: "Do we need unique copy on every product?",
        answer:
          "No, and on a 5,000-SKU catalogue that's not a sensible use of budget. Write unique copy for the products with search volume and margin — usually the top 10 to 20 percent. For the rest, structured specifications and review content give the page enough uniqueness to work with.",
      },
      {
        question: "What should happen when a product is discontinued?",
        answer:
          "If there's a close replacement, 301 to it. If the category is the nearest match and the product had links or traffic, redirect there. If it's coming back next season, keep the page with clear availability messaging. Deleting to a 404 throws away whatever authority the URL had.",
      },
      {
        question: "Is a blog worth it for an ecommerce store?",
        answer:
          "After the category and product pages are right. Buying guides and comparisons genuinely earn traffic and links. But a store publishing three posts a week while its collection pages have a single sentence of copy has its priorities backwards.",
      },
      {
        question: "How does this work with Shopify's URL structure?",
        answer:
          "Shopify's `/collections/x/products/y` duplication and its handling of tag-based filters both need attention, and some of it is theme-level work. We've done it repeatedly. Where the platform genuinely won't allow a fix, we say so rather than billing for the attempt.",
      },
    ],
    relatedSlugs: ["ecommerce-development", "shopify-development", "technical-seo", "keyword-research"],
    caseStudySlugs: ["ecommerce-store", "coastline-outfitters"],
    blogSlugs: ["shopify-store-conversion-optimization", "technical-seo-audit-checklist", "seo-basics-getting-started-2025"],
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
      title: "Ecommerce SEO Services — Category & Product Pages | Quesiono",
      description:
        "Faceted navigation control, category pages built to rank for commercial terms, Product and Offer schema, and a written out-of-stock URL policy.",
    },
    media: {
      imageAlt: "Ecommerce category page with filters beside a rich result showing price and availability",
    },
  },
];
