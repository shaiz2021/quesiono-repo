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
    name: "Local Bistro",
    client: "Local Bistro",
    category: "Restaurant",
    industrySlug: "restaurants-hospitality",
    location: "Lahore, Pakistan",
    year: "2024",
    duration: "4 weeks",
    services: ["web-design", "wordpress-development", "local-seo"],
    tags: ["HTML menu", "Reservations", "Local SEO"],
    summary:
      "A menu that loads instantly, bookings that work on a phone, and a Google profile that finally shows up at dinner time.",
    intro:
      "Local Bistro had a good room and a bad website. The menu was a 4MB PDF, the booking link went to a dead widget, and searching the restaurant by name returned a food aggregator before it returned them.",
    challenge:
      "The menu was a PDF nobody could read on a phone, the booking link was broken, and aggregators outranked the restaurant's own site for its own name.",
    solution:
      "A mobile-first rebuild with the menu as editable HTML, OpenTable embedded on-page, and a full local SEO setup around the Google Business Profile.",
    results: "30% increase in online bookings in the first month.",
    situation: {
      heading: "Where they started",
      paragraphs: [
        "Local Bistro's owner, Ahmed, told us the site had been built by a cousin's friend in 2019 and hadn't been touched since. That's a more common story than you'd think.",
        "The specifics were rough. The menu was a scanned PDF, 4.1MB, which opened in a new tab and needed pinch-zoom to read a starter. Hours were wrong for two public holidays. The reservation button pointed at a widget from a service they'd stopped paying for eight months earlier, so it loaded a blank iframe. On mobile — 81% of their traffic — the phone number wasn't tappable.",
        "The commercial problem was sharper than the technical one. A search for the restaurant's own name returned two delivery aggregators above their site, both taking a cut of every order they generated.",
      ],
    },
    work: {
      heading: "What we built",
      paragraphs: [
        "We designed at 375px first and only widened the layout afterwards, which sounds obvious and almost never happens. From any page on the site you're one tap from the menu, the hours, a phone call, or directions.",
        "The menu became real HTML — sections, dishes, prices, dietary tags, all structured content Ahmed's manager edits from her phone when the fish changes. It also became indexable, and we marked it up with Menu and Restaurant schema so individual dishes became eligible to appear in search results.",
        "Reservations went back to OpenTable, but embedded properly so the flow stays on the page instead of redirecting to a slow third-party screen mid-decision. Then the part that actually moved the number: rebuilding the Google Business Profile with correct categories, real photography, a weekly posting cadence, and a review-response process the front-of-house team runs themselves.",
      ],
    },
    outcome: {
      heading: "What happened",
      paragraphs: [
        "Online bookings were up 30% in the first full month against the same month the previous year. The site's own name search settled on position one within three weeks of the profile work, above both aggregators.",
        "The quieter win: the menu gets updated now. Twelve times in the first quarter, none of them involving us. That's the difference between a site that ages well and one that's stale by August.",
      ],
    },
    approach: [
      {
        title: "Mobile-first, genuinely",
        description:
          "Designed and reviewed at 375px before anything was drawn at desktop width. Menu, hours, call, and directions reachable in one tap from every page.",
      },
      {
        title: "Menu as structured content",
        description:
          "Sections, dishes, prices, and dietary tags as real CMS fields. Editable from a phone in under two minutes, and marked up with Menu schema.",
      },
      {
        title: "Booking that stays put",
        description:
          "OpenTable embedded inline rather than redirecting, so nobody drops out between choosing a time and confirming it.",
      },
      {
        title: "Local search from the ground up",
        description:
          "Profile categories, service attributes, photo cadence, review workflow, plus LocalBusiness and Restaurant schema on the site.",
      },
    ],
    stack: [
      { name: "WordPress", note: "Custom block theme — their manager already knew the editor." },
      { name: "OpenTable", note: "Embedded reservation flow, no redirect." },
      { name: "Cloudflare", note: "Full-page caching, image resizing at the edge." },
    ],
    metrics: [
      { value: 30, suffix: "%", label: "More online bookings", note: "First full month, year over year." },
      { value: 1.2, decimals: 1, suffix: "s", label: "Mobile LCP", note: "Down from 6.8s." },
      { value: 1, prefix: "#", label: "Brand search position", note: "Above both aggregators." },
      { value: 12, label: "Menu edits, first quarter", note: "All by their own team." },
    ],
    metric: "+30%",
    metricLabel: "online bookings",
    relatedBlogSlugs: ["local-seo-strategy-small-business", "core-web-vitals-guide"],
    featured: true,
    image: "/images/projects/project-1.png",
    imageAlt: "Local Bistro restaurant website homepage with menu navigation",
    keywords: {
      primary: "restaurant website case study",
      secondary: ["restaurant local SEO results", "HTML menu design", "reservation system integration"],
    },
    meta: {
      title: "Local Bistro Restaurant Website Case Study | Quesiono",
      description:
        "How an editable HTML menu, an inline reservation flow, and a rebuilt Google Business Profile lifted Local Bistro's online bookings 30% in one month.",
    },
  },

  {
    slug: "saas-dashboard",
    name: "SaaS Analytics",
    client: "SaaS Analytics",
    category: "SaaS",
    industrySlug: "saas-startups",
    location: "Remote — UK",
    year: "2024",
    duration: "9 weeks",
    services: ["custom-development", "ui-ux-design", "web-development"],
    tags: ["Custom dashboard", "Data viz", "Next.js"],
    summary:
      "A reporting dashboard that replaced a fortnightly spreadsheet ritual nobody enjoyed and everybody depended on.",
    intro:
      "Their analytics product had the data. Getting it in front of a client meant an analyst spending most of a Thursday in Excel, twice a month, for every account.",
    challenge:
      "Client reporting ran on hand-built spreadsheets — roughly ten analyst hours a week, and a different layout every time depending on who assembled it.",
    solution:
      "A custom Next.js dashboard on top of their existing API, with saved views, scheduled exports, and a client-facing read-only mode.",
    results: "Used by 500+ active users daily.",
    situation: {
      heading: "Where they started",
      paragraphs: [
        "SaaS Analytics collected plenty of data and had no good way to show it. Their product exposed a solid API; the customer-facing layer was an analyst, a spreadsheet template, and a fortnightly deadline.",
        "Omar, their founder, put the cost at about ten hours a week across the team. The bigger issue was consistency. Three analysts meant three interpretations of the same chart, and clients noticed when a metric they'd been tracking quietly changed shape between reports.",
        "They'd looked at off-the-shelf BI tools and stalled on the same thing every time: the seat pricing made client access unaffordable, and the branding was someone else's.",
      ],
    },
    work: {
      heading: "What we built",
      paragraphs: [
        "We spent the first week with the analysts rather than the founder, watching them assemble a real report. That's where the requirements were. Half the manual work turned out to be reconciling two data sources that disagreed on timezone handling — a bug, not a feature request.",
        "The dashboard is a Next.js app talking to their existing API, with a caching layer so a fifteen-panel view doesn't fire fifteen cold queries. Charts are Recharts with a custom theme; we tried a heavier viz library first and dropped it when the bundle cost outweighed what it added.",
        "Saved views were the feature that made it stick. An analyst configures a view once per client, and the client gets a read-only link with their own logo on it. Scheduled exports go out as PDF and CSV on whatever cadence each account wants, which retired the fortnightly ritual entirely.",
      ],
    },
    outcome: {
      heading: "What happened",
      paragraphs: [
        "Around 500 people use it daily now, most of them end clients rather than internal staff — which wasn't the original brief but became the point. The reporting time didn't drop to zero; it dropped to roughly an hour a week of exception handling.",
        "One thing worth saying plainly: the first version of the permissions model was wrong. We'd built role-based access and their accounts genuinely needed per-view sharing. We rebuilt it in week seven, which is why the project ran nine weeks instead of eight.",
      ],
    },
    approach: [
      {
        title: "Requirements from the analysts",
        description:
          "A week shadowing the people doing the manual work, not just the founder describing it. Surfaced a timezone bug that accounted for half the effort.",
      },
      {
        title: "Saved views per account",
        description:
          "Configure once, share as a read-only link with the client's own branding. No per-seat cost for viewers.",
      },
      {
        title: "A deliberately light chart layer",
        description:
          "Recharts with a custom theme after benchmarking a heavier library and rejecting it on bundle size.",
      },
      {
        title: "Scheduled exports",
        description:
          "PDF and CSV on a per-account cadence, queued server-side so a large export never blocks the UI.",
      },
    ],
    stack: [
      { name: "Next.js 14", note: "App Router, server components for the initial data pass." },
      { name: "Recharts", note: "Themed to their brand, tree-shaken." },
      { name: "Redis", note: "Query cache — a 15-panel view hits the API once." },
      { name: "Resend", note: "Scheduled export delivery." },
    ],
    metrics: [
      { value: 500, suffix: "+", label: "Daily active users", note: "Mostly end clients." },
      { value: 9, label: "Analyst hours saved weekly", note: "From roughly ten to about one." },
      { value: 0.9, decimals: 1, suffix: "s", label: "Dashboard time to interactive", note: "Median, 15-panel view." },
      { display: "9", label: "Weeks to launch", note: "Including a permissions rebuild." },
    ],
    metric: "500+",
    metricLabel: "daily active users",
    relatedBlogSlugs: ["nextjs-14-best-practices", "automating-your-workflow-tools-tips"],
    featured: true,
    image: "/images/projects/project-2.png",
    imageAlt: "SaaS Analytics custom dashboard showing charts and saved report views",
    keywords: {
      primary: "SaaS dashboard development case study",
      secondary: ["custom analytics dashboard", "Next.js dashboard build", "client reporting automation"],
    },
    meta: {
      title: "SaaS Analytics Custom Dashboard Case Study | Quesiono",
      description:
        "A custom Next.js reporting dashboard with saved views and scheduled exports that replaced ten analyst hours a week and now serves 500+ daily users.",
    },
  },

  {
    slug: "ecommerce-store",
    name: "Urban Apparel",
    client: "Urban Apparel",
    category: "Ecommerce",
    industrySlug: "ecommerce-retail",
    location: "Karachi, Pakistan",
    year: "2024",
    duration: "7 weeks",
    services: ["shopify-development", "ecommerce-development", "ecommerce-seo", "speed-optimization"],
    tags: ["Shopify", "Checkout", "App audit"],
    summary:
      "A Shopify rebuild that stripped four apps, three seconds of load time, and two steps out of checkout.",
    intro:
      "Urban Apparel were doing decent traffic and converting badly. The store wasn't ugly — it was slow, and slow looks exactly like ugly to someone on a phone on mobile data.",
    challenge:
      "Eleven Shopify apps adding 3.2 seconds to every page, a five-step checkout with shipping revealed at step three, and collection pages that ranked for nothing.",
    solution:
      "An app audit that removed four apps and moved their function into the theme, a rebuilt three-step checkout, and collection pages written to rank.",
    results: "25% increase in conversion rate.",
    situation: {
      heading: "Where they started",
      paragraphs: [
        "The numbers told the story before we opened the site. Around 40,000 sessions a month, 1.1% conversion, and a cart abandonment rate north of 80%.",
        "The store had eleven apps installed. Reviews, chat, three separate upsell tools, loyalty, a currency switcher, and two analytics scripts that both loaded the same tracking library. Combined, they added 3.2 seconds to first contentful paint on a mid-range Android. Two of the upsell apps were configured to fire on the same trigger and occasionally rendered on top of each other.",
        "Checkout was five steps, with shipping cost appearing at step three. Their own analytics showed the largest single drop-off happened right there — people finding out the shipping price after they'd already committed emotionally.",
        "Collection pages were a product grid and one sentence each. A buying guide on a competitor's blog outranked their own \"men's jackets\" page for that exact term.",
      ],
    },
    work: {
      heading: "What we built",
      paragraphs: [
        "The app audit came first because it was the cheapest large win. We measured each app's load cost individually, then rebuilt reviews, the currency switcher, and one upsell mechanic directly into the theme. Four apps came out. The two duplicate analytics scripts became one properly configured GTM container.",
        "Checkout went from five steps to three, with shipping shown on the cart page before anyone enters an address, and Apple Pay and Google Pay surfaced at the top rather than buried under the card form. We instrumented every step so the funnel is now visible rather than inferred.",
        "Collection pages got actual content: buying guidance above the grid, subcategory links, sizing and materials information, and an FAQ block. We also set faceted-navigation rules so filter combinations stopped generating thousands of near-duplicate URLs.",
      ],
    },
    outcome: {
      heading: "What happened",
      paragraphs: [
        "Conversion moved from 1.1% to 1.38% over ninety days, a 25% relative lift on the same traffic. Mobile LCP came down from 5.4 seconds to 1.9. Checkout completion rose 31%, which is where most of the conversion gain actually came from.",
        "Organic traffic to collection pages roughly doubled over five months. That took longer than the conversion work and was less dramatic week to week, which is normally how it goes.",
      ],
    },
    approach: [
      {
        title: "App audit with real numbers",
        description:
          "Every app measured individually for load cost. Four removed, their function rebuilt in the theme where it was worth keeping.",
      },
      {
        title: "Checkout cut to three steps",
        description:
          "Shipping cost shown on the cart page, wallet payments surfaced first, and every step instrumented so the funnel is visible.",
      },
      {
        title: "Collection pages with substance",
        description:
          "Buying guidance, subcategory links, sizing detail, and FAQ content above and below the grid, plus Product and Breadcrumb schema.",
      },
      {
        title: "Faceted navigation under control",
        description:
          "Canonical and robots rules so filter permutations stopped producing thousands of thin duplicate URLs.",
      },
    ],
    stack: [
      { name: "Shopify", note: "Custom Dawn-based theme, Liquid sections." },
      { name: "Shopify Functions", note: "Replaced one upsell app entirely." },
      { name: "GTM", note: "One container, one analytics library, per-step funnel events." },
    ],
    metrics: [
      { value: 25, suffix: "%", label: "Conversion rate lift", note: "1.1% to 1.38% over 90 days." },
      { value: 31, suffix: "%", label: "Checkout completion lift", note: "Where most of the gain came from." },
      { value: 1.9, decimals: 1, suffix: "s", label: "Mobile LCP", note: "Down from 5.4s." },
      { value: 4, label: "Apps removed", note: "Function rebuilt into the theme." },
    ],
    metric: "+25%",
    metricLabel: "conversion rate",
    relatedBlogSlugs: ["shopify-store-conversion-optimization", "core-web-vitals-guide"],
    featured: true,
    image: "/images/projects/project-3.png",
    imageAlt: "Urban Apparel Shopify store collection page and mobile checkout",
    keywords: {
      primary: "Shopify conversion optimisation case study",
      secondary: ["ecommerce redesign results", "Shopify app audit", "checkout optimisation"],
    },
    meta: {
      title: "Urban Apparel Shopify Conversion Case Study | Quesiono",
      description:
        "Removing four apps, three seconds of load time, and two checkout steps lifted Urban Apparel's conversion rate 25% and checkout completion 31%.",
    },
  },

  {
    slug: "dazzle-website",
    name: "Dazzle",
    client: "Dazzle Studio",
    category: "Creative Agency",
    industrySlug: "professional-services",
    location: "Dubai, UAE",
    year: "2025",
    duration: "5 weeks",
    services: ["web-design", "landing-page-development", "web-development", "content-writing"],
    tags: ["Portfolio site", "Motion design", "Positioning"],
    summary:
      "A creative studio whose own site undersold them. New positioning, six case studies with real numbers, and motion that doesn't fight the work.",
    intro:
      "Dazzle produce genuinely good brand work and were losing pitches to studios producing worse work with better websites. Their portfolio showed pretty pictures and said nothing about outcomes.",
    challenge:
      "A portfolio of unlabelled images, no positioning, and no evidence of results — so prospects couldn't tell what Dazzle was for or whether the work had worked.",
    solution:
      "Interviews with three founders to find the actual positioning, six case studies rewritten around outcomes, and a motion system that frames the work instead of competing with it.",
    results: "Inbound qualified enquiries up 3.1× in four months; average project value up 40%.",
    situation: {
      heading: "Where they started",
      paragraphs: [
        "Dazzle's site was a grid of forty images with client names underneath. Beautiful images. No context, no brief, no outcome, no indication of what any of it cost or achieved.",
        "The pitch problem followed from that. Prospects arrived, admired the work, and then asked for a call to understand what Dazzle actually did — brand identity? campaign? packaging? All three, as it turned out, but the site didn't say so. Roughly half their discovery calls were spent explaining their own service offering.",
        "They also had a positioning problem they hadn't named. Three founders gave us three different answers to \"what should someone hire you for?\" That's not unusual at their size, and it's fatal on a website, because a site can't hedge the way a person in a room can.",
      ],
    },
    work: {
      heading: "What we built",
      paragraphs: [
        "We started with three separate ninety-minute founder interviews and wrote up where the answers diverged. The overlap was clear once it was on paper: brand identity for consumer businesses at the point they're about to scale. Everything else was work they'd accepted, not work they wanted. The site got built around the overlap.",
        "Six projects became real case studies — the brief, the constraint, what they made, and what happened afterwards. Getting the outcome numbers took three weeks of chasing former clients, and it was the highest-value part of the project. Two clients declined, so those two projects stayed in a visual gallery instead of being padded with vague claims.",
        "The motion design is deliberately restrained. Their work is loud, so the site is quiet: slow reveals, a cursor-following light on dark sections, and image transitions that hold still once they land. We built and threw away a much busier version in week two because it made the portfolio images harder to look at.",
      ],
    },
    outcome: {
      heading: "What happened",
      paragraphs: [
        "Inbound qualified enquiries — their definition, meaning budget stated and in scope — went up 3.1× over four months. Average project value rose about 40%, which they attribute to the case studies setting an expectation before the first call.",
        "The discovery-call change was the one they mentioned unprompted: calls now start with the prospect describing their problem instead of asking what Dazzle does.",
      ],
    },
    approach: [
      {
        title: "Positioning from founder interviews",
        description:
          "Three separate ninety-minute sessions, then a written map of where the answers agreed. The site was built on the overlap, not the union.",
      },
      {
        title: "Case studies with real outcomes",
        description:
          "Brief, constraint, work, result. Three weeks of chasing former clients for numbers. Two declined, so those projects stayed in the gallery rather than getting vague claims.",
      },
      {
        title: "Motion that yields to the work",
        description:
          "Slow reveals and a cursor light on dark sections. A busier first version was scrapped for making the portfolio images harder to read.",
      },
      {
        title: "One page per service line",
        description:
          "Identity, campaign, and packaging each got their own page so prospects self-qualify before the call.",
      },
    ],
    stack: [
      { name: "Next.js 14", note: "Static export, edge-delivered." },
      { name: "Sanity", note: "Case study CMS — their producer publishes without us." },
      { name: "Framer Motion", note: "Reveals and transitions, reduced-motion respected." },
    ],
    metrics: [
      { value: 3.1, decimals: 1, suffix: "×", label: "Qualified enquiries", note: "Four months, their definition of qualified." },
      { value: 40, suffix: "%", label: "Average project value", note: "Attributed to case study framing." },
      { value: 6, label: "Case studies published", note: "With verified outcome numbers." },
      { display: "5", label: "Weeks to launch", note: "Three of them spent chasing numbers." },
    ],
    metric: "3.1×",
    metricLabel: "qualified enquiries",
    relatedBlogSlugs: ["brand-identity-guide-2025", "website-redesign-checklist"],
    featured: true,
    image: "/images/projects/project-4.png",
    imageAlt: "Dazzle Studio portfolio website with case study layout and dark hero",
    keywords: {
      primary: "creative agency website case study",
      secondary: ["portfolio website redesign", "agency positioning", "case study copywriting"],
    },
    meta: {
      title: "Dazzle Studio Portfolio Website Case Study | Quesiono",
      description:
        "New positioning from founder interviews, six case studies with verified outcomes, and restrained motion design — inbound qualified enquiries up 3.1×.",
    },
  },

  {
    slug: "northgate-dental",
    name: "Northgate Dental",
    client: "Northgate Dental Group",
    category: "Healthcare",
    industrySlug: "healthcare",
    location: "Manchester, UK",
    year: "2025",
    duration: "6 weeks",
    services: ["web-design", "ui-ux-design", "local-seo", "content-writing"],
    tags: ["WCAG 2.1 AA", "Online booking", "Plain language"],
    summary:
      "A three-site dental group with an inaccessible website and a phone line that rang out. Now bookable online, at AA.",
    intro:
      "Northgate's reception team was fielding around 190 calls a week, most of them asking the same four questions the website should have answered.",
    challenge:
      "An inaccessible site — 2.9:1 contrast, unlabelled form fields, keyboard traps — with clinical language, no clinician profiles, and no way to book anything.",
    solution:
      "A rebuild to WCAG 2.1 AA with plain-language treatment pages, clinician profiles, and real availability pulled from their practice management system.",
    results: "Around 62% of new-patient bookings now happen online; reception call volume down 34%.",
    situation: {
      heading: "Where they started",
      paragraphs: [
        "Northgate run three practices and had one website that served none of them properly. The accessibility audit we ran in week one found body text at 2.9:1 contrast, six unlabelled form fields, a cookie banner that couldn't be dismissed with a keyboard, and a treatment menu that trapped focus once opened.",
        "For a healthcare provider that's a legal exposure as well as a usability failure. It's also self-defeating: a dental patient base skews older and includes people with low vision and motor impairments, which is precisely the audience the site was excluding.",
        "The copy was written in clinical language. Their page for what patients call \"a cracked tooth\" was titled \"Restorative Indirect Restorations\" and ranked for nothing, because nobody searches that.",
        "And there was no booking. A form promised a callback within two working days. Reception logged roughly 190 calls a week, and the practice manager estimated three quarters were hours, pricing, insurance coverage, or appointment requests.",
      ],
    },
    work: {
      heading: "What we built",
      paragraphs: [
        "Accessibility was the constraint we designed inside rather than a checklist at the end. Every colour pair was computed before it went in the palette, every interactive element got a keyboard and screen-reader pass, and forms use real labels with error messages that say what to do rather than what went wrong.",
        "The content got rewritten in the words patients use, with the clinical term alongside for accuracy. \"Cracked or chipped tooth\" as the page title, \"indirect restoration\" in the body where it belongs. That single change is why those pages now rank — patient language and search language are the same language.",
        "Booking connects to their practice management system, so patients see real slots per practice and per clinician instead of requesting a callback. Clinician profiles carry credentials, specialisms, languages spoken, and their own booking link, because patients pick a person.",
        "One thing we documented before writing any code: what happens to a form submission that mentions a symptom. That's health information. Storage location, who can read it, retention period, and encryption all written down and signed off, with a BAA covering our part.",
      ],
    },
    outcome: {
      heading: "What happened",
      paragraphs: [
        "About 62% of new-patient bookings come through the site now. Reception call volume dropped 34%, and the practice manager reallocated most of that time to recall calls, which are worth considerably more.",
        "The accessibility audit came back clean at WCAG 2.1 AA across all templates. We're explicit that AA is a floor rather than a finish line — a few AAA criteria are met and several aren't, and we've listed which on their accessibility statement rather than implying more than is true.",
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
      { name: "Next.js 14", note: "Static pages, server actions for the booking handoff." },
      { name: "Payload CMS", note: "Self-hosted — data residency was a requirement." },
      { name: "Dentally API", note: "Live availability and appointment creation." },
    ],
    metrics: [
      { value: 62, suffix: "%", label: "New bookings made online", note: "Previously zero." },
      { value: 34, suffix: "%", label: "Reception calls reduced", note: "Time moved to recall calls." },
      { display: "AA", label: "WCAG 2.1 conformance", note: "Audited across all templates." },
      { value: 4.7, decimals: 1, suffix: ":1", label: "Minimum text contrast", note: "Up from 2.9:1." },
    ],
    metric: "62%",
    metricLabel: "of bookings now online",
    relatedBlogSlugs: ["ux-design-principles-that-increase-conversions", "local-seo-strategy-small-business"],
    featured: true,
    imageAlt: "Northgate Dental website showing clinician profiles and an accessible booking form",
    keywords: {
      primary: "dental website design case study",
      secondary: ["accessible healthcare website", "WCAG 2.1 AA rebuild", "online appointment booking integration"],
    },
    meta: {
      title: "Northgate Dental Accessible Website Case Study | Quesiono",
      description:
        "A WCAG 2.1 AA rebuild with plain-language treatment pages and live practice-management booking. 62% of new bookings now online, reception calls down 34%.",
    },
  },

  {
    slug: "castellan-realty",
    name: "Castellan Realty",
    client: "Castellan Realty",
    category: "Real Estate",
    industrySlug: "real-estate",
    location: "Valencia, Spain",
    year: "2025",
    duration: "11 weeks",
    services: ["custom-development", "web-design", "speed-optimization", "local-seo"],
    tags: ["MLS feed", "Instant search", "Image pipeline"],
    summary:
      "480 listings, eight photos each, and a search that has to feel instant on a phone in a car park.",
    intro:
      "Castellan were sending their own buyers to a portal because their site couldn't hold a browse session. Listing pages took nine seconds on mobile.",
    challenge:
      "A 9.2-second listing page from unoptimised galleries, a search that reloaded the page on every filter change, and 300 sold listings turned into 404s.",
    solution:
      "A rebuilt image pipeline, client-side filtering over an indexed dataset, resilient RESO feed sync, and a written URL policy for delisted stock.",
    results: "Listing LCP down to 1.5s; organic enquiries up 2.4×; pages per session up from 2.1 to 6.8.",
    situation: {
      heading: "Where they started",
      paragraphs: [
        "Castellan's problem was measurable in a single number: 9.2 seconds to largest contentful paint on a listing page over 4G. Property photography is the point of a property site and it was also the payload — eight to fourteen full-resolution JPEGs per listing, served at original size and scaled down in the browser.",
        "Search made it worse. Every filter change — price, beds, type — triggered a full page reload, so refining a search meant waiting nine seconds again. Their analytics showed 2.1 pages per session, which for a property site means people were looking at one listing and leaving.",
        "Then the URL problem. Their previous developer had configured delisted properties to return 404. Around 300 sold listings had accumulated links and search authority over four years, and all of it was being discarded on the day of sale.",
        "Their agents had quietly adapted by sending buyers links to the portal instead of their own site. Every one of those visits was a lead they paid a fee on.",
      ],
    },
    work: {
      heading: "What we built",
      paragraphs: [
        "The image pipeline was the first fix and the biggest. AVIF with WebP fallback, generated at five widths, the hero preloaded and everything below the fold lazy-loaded, with blurred placeholders so the layout never shifts as photos arrive. Same photography, roughly an eighth of the bytes.",
        "Search became client-side over a pre-built index. Filters apply instantly, map and list views share state, and the URL updates so a filtered search can be bookmarked or sent to a client — which is what the agents were using the portal for.",
        "The feed was the unglamorous half of the project. Their RESO Web API source sends duplicate records and occasionally omits required fields, so ingestion runs every fifteen minutes with validation and a reconciliation report. Bad records raise an alert instead of quietly publishing a listing with no price.",
        "For sold stock we wrote an actual policy rather than picking a default. Sold listings stay live with clear status and links to similar available properties; the handful that were genuinely worthless get a 301 to their area page. Nothing that had earned links gets thrown away.",
      ],
    },
    outcome: {
      heading: "What happened",
      paragraphs: [
        "Listing LCP came down from 9.2 seconds to 1.5. Pages per session went from 2.1 to 6.8 — people browse now, which was the whole objective. Organic enquiries were up 2.4× over five months.",
        "The sold archive turned out to be a genuine asset. Those 300 pages are evidence Castellan actually sell in each neighbourhood, and they now bring in a steady trickle of \"how much did X sell for\" searches that convert into valuation requests.",
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
          "Pre-built search index, map and list sharing state, and shareable filtered URLs — the thing agents had been using the portal for.",
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
      { name: "Next.js 14", note: "ISR for listings, static for area pages." },
      { name: "RESO Web API", note: "Scheduled ingestion with validation and reconciliation." },
      { name: "Sharp", note: "AVIF and WebP generation at build and on ingest." },
      { name: "MapLibre", note: "Self-hosted tiles — no per-view mapping bill." },
    ],
    metrics: [
      { value: 1.5, decimals: 1, suffix: "s", label: "Listing page LCP", note: "Mobile 4G, down from 9.2s." },
      { value: 2.4, decimals: 1, suffix: "×", label: "Organic enquiries", note: "Over five months." },
      { value: 6.8, decimals: 1, label: "Pages per session", note: "Up from 2.1." },
      { value: 300, label: "Sold listings recovered", note: "Previously returning 404." },
    ],
    metric: "2.4×",
    metricLabel: "organic enquiries",
    relatedBlogSlugs: ["core-web-vitals-guide", "technical-seo-audit-checklist"],
    featured: false,
    imageAlt: "Castellan Realty property search with map view and a listing photo gallery",
    keywords: {
      primary: "real estate website case study",
      secondary: ["MLS feed integration", "property search performance", "IDX website build"],
    },
    meta: {
      title: "Castellan Realty Property Website Case Study | Quesiono",
      description:
        "Listing LCP from 9.2s to 1.5s, instant client-side filtering, resilient RESO feed sync, and 300 recovered sold listings. Organic enquiries up 2.4×.",
    },
  },

  {
    slug: "hartwell-mercer-law",
    name: "Hartwell & Mercer",
    client: "Hartwell & Mercer LLP",
    category: "Professional Services",
    industrySlug: "professional-services",
    location: "Chicago, USA",
    year: "2025",
    duration: "8 weeks",
    services: ["web-design", "web-development", "content-writing", "seo", "cms-development"],
    tags: ["Practice areas", "Intake", "Compliance review"],
    summary:
      "A litigation firm whose site said nothing specific. Seven practice area pages later, the enquiries are in scope.",
    intro:
      "Hartwell & Mercer were getting enquiries about divorce and traffic tickets. They handle commercial disputes between $2m and $20m.",
    challenge:
      "One page listing eight service lines, partner bios of two sentences each, and a bare contact form producing enquiries far outside their practice and their minimum engagement.",
    solution:
      "Positioning built from partner interviews, seven substantive practice area pages, real practitioner profiles, and structured intake — all drafted inside Illinois advertising rules.",
    results: "Organic enquiries up 88%, and 71% of them now within practice scope, up from 22%.",
    situation: {
      heading: "Where they started",
      paragraphs: [
        "The site had one services page listing eight practice areas as bullet points. Nothing on it distinguished Hartwell & Mercer from any other mid-sized litigation firm in Chicago, and their homepage headline was \"Trusted advisors since 1994\".",
        "Partner bios ran two sentences. Law school, admission year, done. For a firm where the individual practitioner is the product, that's the most expensive omission on the site.",
        "The intake problem was concrete and quantified. Their office manager tracked enquiries for a quarter before we started: 22% fell within their practice areas and above their minimum engagement. The rest were family law, personal injury, and traffic matters, each one costing somebody fifteen minutes to redirect.",
        "The managing partner's stated reason for the vagueness was compliance — Illinois advertising rules restrict what a firm may claim. That's true, and it had been read far more broadly than it says.",
      ],
    },
    work: {
      heading: "What we built",
      paragraphs: [
        "Positioning came out of interviews with five partners about the matters they handle best and want more of. The answer was consistent and much narrower than the site: shareholder and partnership disputes in closely held companies, matters in the $2m–$20m range. Three of the eight listed practice areas were work they'd stopped seeking years earlier and hadn't removed.",
        "Each real practice area got its own page, built around what prospects search and the questions they ask on a first call. What does a shareholder dispute cost. How long does it take. What happens if there's an arbitration clause. Answering those before the call is the whole mechanism.",
        "On compliance, we drafted specific and let their reviewer cut. Illinois rules prohibit guarantees, superlatives, and comparative claims — they don't prohibit describing your work. \"We handle shareholder disputes in closely held companies, typically $2m to $20m in dispute\" clears review comfortably. Their compliance partner changed nine phrases across roughly 9,000 words.",
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
          "Matter type, jurisdiction, opposing party for conflicts, and timing — routed to the right partner. Length as a filter, not a cost.",
      },
    ],
    stack: [
      { name: "Next.js 14", note: "Static pages, server-side intake handling." },
      { name: "Sanity", note: "Practice areas and bios editable by their marketing coordinator." },
      { name: "Clio", note: "Intake handoff into their existing matter workflow." },
    ],
    metrics: [
      { value: 88, suffix: "%", label: "More organic enquiries", note: "Six months post-launch." },
      { value: 71, suffix: "%", label: "Enquiries in scope", note: "Up from 22%." },
      { value: 7, label: "Practice area pages", note: "Down from eight listed, up from one page." },
      { value: 5, label: "Pages ranking page one", note: "Primary term, Chicago market." },
    ],
    metric: "+88%",
    metricLabel: "organic enquiries",
    relatedBlogSlugs: ["content-strategy-that-actually-works", "seo-basics-getting-started-2025"],
    featured: false,
    imageAlt: "Hartwell & Mercer law firm website showing a practice area page and partner profile",
    keywords: {
      primary: "law firm website case study",
      secondary: ["legal SEO results", "practice area pages", "law firm client intake"],
    },
    meta: {
      title: "Hartwell & Mercer Law Firm Website Case Study | Quesiono",
      description:
        "Positioning from partner interviews, seven substantive practice area pages, and structured intake. Organic enquiries up 88%, in-scope enquiries from 22% to 71%.",
    },
  },

  {
    slug: "coastline-outfitters",
    name: "Coastline Outfitters",
    client: "Coastline Outfitters",
    category: "Ecommerce",
    industrySlug: "ecommerce-retail",
    location: "Cornwall, UK",
    year: "2025",
    duration: "10 weeks",
    services: ["ecommerce-development", "shopify-development", "ecommerce-seo", "keyword-research", "content-writing"],
    tags: ["3,400 SKUs", "Faceted search", "Inventory sync"],
    summary:
      "3,400 outdoor SKUs, two warehouses, and a search that couldn't find a waterproof jacket by waterproof rating.",
    intro:
      "Coastline sell technical outdoor kit, where the buying decision hinges on specifications their site didn't store as data. Everything was in the description paragraph.",
    challenge:
      "3,400 SKUs with specifications buried in prose, so filtering by the attributes people actually buy on was impossible. Two warehouses oversold roughly 40 orders a month.",
    solution:
      "A structured product data rebuild across the full catalogue, faceted search on real attributes, and inventory sync unified across both warehouses.",
    results: "Search-to-purchase rate up 2.9×; oversells down to under two a month; organic revenue up 61%.",
    situation: {
      heading: "Where they started",
      paragraphs: [
        "Coastline's catalogue was the problem and also the opportunity. 3,400 SKUs of technical outdoor equipment — jackets, boots, packs, sleeping systems — where buyers choose on specifications. Hydrostatic head, fill power, pack weight, temperature rating.",
        "None of it existed as structured data. Every specification was written into the description paragraph, differently by whoever added the product, over nine years. So the only filters available were price, brand, and size. Someone looking for a jacket rated above 20,000mm had to open products one at a time and read.",
        "Their internal search was worse. Searching \"waterproof jacket\" returned 340 results in no useful order, and their analytics showed people who used search converted worse than people who didn't — which is close to diagnostic.",
        "Operationally, two warehouses ran separate stock counts that reconciled overnight. Roughly 40 orders a month were oversold, each one a refund, an apology, and often a lost customer.",
      ],
    },
    work: {
      heading: "What we built",
      paragraphs: [
        "Ten weeks, and about four of them were spent on product data. We built an attribute schema per category — different fields for a sleeping bag than for a boot — then extracted what we could from existing descriptions and had Coastline's product team fill the rest. It's the least interesting work in the project and nothing else would have functioned without it.",
        "With real attributes in place, faceted search became straightforward. Filter jackets by hydrostatic head, sleeping bags by comfort rating, packs by capacity and load. Facets are generated from the schema, so adding a category doesn't need a developer. Search runs on a typo-tolerant index with results ranked by relevance and availability rather than by date added.",
        "Inventory sync now runs through a single source of truth that both warehouses write to, with a reconciliation report that flags a discrepancy the same hour rather than the next morning.",
        "The content side followed the data. Buying guides per category — how to read a waterproof rating, what fill power means — which target the informational searches that precede a purchase and internally link into the relevant faceted views.",
      ],
    },
    outcome: {
      heading: "What happened",
      paragraphs: [
        "Search-to-purchase rate rose 2.9×, and search users now convert better than non-search users rather than worse. Oversells dropped from around 40 a month to under two. Organic revenue was up 61% over seven months, with roughly a third of that traceable to the buying guides.",
        "One honest note on scope: we quoted eight weeks and it took ten. The product data extraction was harder than our sample suggested — nine years of inconsistent description writing does not extract cleanly, and we absorbed the overrun.",
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
      { name: "Shopify Plus", note: "Metafield-driven attributes, custom storefront sections." },
      { name: "Algolia", note: "Typo-tolerant search, facet generation from the schema." },
      { name: "Cin7", note: "Unified inventory across both warehouses." },
      { name: "Sanity", note: "Buying guides, separate from the product catalogue." },
    ],
    metrics: [
      { value: 2.9, decimals: 1, suffix: "×", label: "Search-to-purchase rate", note: "Search users now outperform non-search." },
      { value: 61, suffix: "%", label: "Organic revenue growth", note: "Seven months. A third from buying guides." },
      { value: 2, prefix: "<", label: "Oversells per month", note: "Down from around 40." },
      { value: 3400, label: "SKUs restructured", note: "Per-category attribute schema." },
    ],
    metric: "2.9×",
    metricLabel: "search-to-purchase rate",
    relatedBlogSlugs: ["shopify-store-conversion-optimization", "content-strategy-that-actually-works"],
    featured: false,
    imageAlt: "Coastline Outfitters faceted product search filtering technical outdoor gear",
    keywords: {
      primary: "ecommerce faceted search case study",
      secondary: ["product data structuring", "Shopify Plus catalogue", "inventory sync integration"],
    },
    meta: {
      title: "Coastline Outfitters Ecommerce Search Case Study | Quesiono",
      description:
        "Restructuring 3,400 SKUs into real attributes made faceted search possible. Search-to-purchase up 2.9×, oversells down from 40 a month to under two.",
    },
  },
];

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);

export const getFeaturedProjects = () => projects.filter((p) => p.featured);

export const getProjectsByIndustry = (industrySlug: string) =>
  projects.filter((p) => p.industrySlug === industrySlug);

/** Case studies that used a given service. Drives the rail on service pages. */
export const getProjectsByService = (serviceSlug: string) =>
  projects.filter((p) => p.services.includes(serviceSlug));

export const projectCategories = () =>
  Array.from(new Set(projects.map((p) => p.category))).sort();

export const projectParams = () => projects.map((p) => ({ slug: p.slug }));
