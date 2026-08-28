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
  media?: { image?: string; imageAlt?: string; videoSrc?: string; posterSrc?: string };
}

export const industries: Industry[] = [
  {
    slug: "saas-startups",
    name: "SaaS & Startups",
    icon: "rocket",
    href: "/industries/saas-startups",
    shortDescription:
      "Sites that explain a product clearly and hold up when a launch sends ten thousand people at once.",
    hero: {
      eyebrow: "SaaS & startups",
      headline: "Explain the product before you sell it",
      accent: ["Explain"],
      sub: "Most SaaS homepages describe a category instead of a product. Someone lands, reads two sentences about unified workflows, and leaves without knowing what the software does. That's a copy problem wearing a design problem's clothes.",
    },
    overview: {
      heading: "Web design and development for SaaS companies",
      paragraphs: [
        "SaaS marketing sites have a specific job: get a visitor from \"I have a problem\" to \"I understand how this solves it\" fast enough that they'll start a trial. Every extra layer of abstraction in the copy costs you signups.",
        "So we start with the product. A demo, an actual walkthrough, sometimes an hour with the person who built it. Then the page gets structured around the job the software does and the objection that stops people — usually price, migration effort, or whether it works with what they already run.",
        "The technical side matters too. Launch traffic is spiky, a docs section needs to be searchable and indexable, and pricing pages get tested constantly. We build for that instead of retrofitting it after the first Product Hunt day.",
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
          "A recommendation per tier, a plain \"best for\" line, and the two or three differences that actually decide it. Comparison tables collapse sensibly on mobile.",
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
    stats: [
      { value: 96, label: "Median Lighthouse, mobile", note: "On the SaaS sites we've launched." },
      { display: "6–10", label: "Weeks, typical build", note: "Marketing site with a CMS and docs." },
      { value: 0, label: "Downtime on launch days", note: "Static pages, edge-delivered." },
    ],
    faqs: [
      {
        question: "We're pre-launch with no customers. Is a marketing site premature?",
        answer:
          "You need one page that explains the product and captures interest, not a twelve-page site. We'll build that in two weeks for a fraction of the cost, and the copy work you do to write it is genuinely useful for your pitch too. The full site can wait until you know who's buying.",
      },
      {
        question: "Should our docs live on the same domain?",
        answer:
          "Where your docs platform allows it, yes — same domain means the organic authority accrues in one place, and docs traffic is frequently the largest source of qualified search visits for a SaaS product. If you're on a hosted docs tool that forces a subdomain, we make sure the internal linking and schema compensate.",
      },
      {
        question: "Can you integrate with our product for a live demo?",
        answer:
          "Often, and it converts well. An interactive sandbox or a scripted product tour beats a screenshot gallery. Scope depends on what your API exposes, which we work out during technical scoping.",
      },
      {
        question: "How do you handle frequent pricing changes?",
        answer:
          "Pricing lives in the CMS, so your team edits tiers, features, and copy without a deploy. Currency and regional variants are supported if you sell in multiple markets.",
      },
    ],
    serviceSlugs: ["web-design", "web-development", "ui-ux-design", "custom-development", "content-writing", "seo"],
    caseStudySlugs: ["saas-dashboard", "dazzle-website"],
    blogSlugs: ["nextjs-14-best-practices", "how-to-build-website-that-converts", "core-web-vitals-guide"],
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
        "Marketing sites that explain the product clearly, pricing pages people can self-select from, and static delivery that survives a launch spike.",
    },
    media: {
      imageAlt: "SaaS marketing site with a product screenshot and pricing tiers",
    },
  },

  {
    slug: "ecommerce-retail",
    name: "Ecommerce & Retail",
    icon: "shopping-cart",
    href: "/industries/ecommerce-retail",
    shortDescription:
      "Stores where product discovery, checkout, and stock accuracy all have to be right at once.",
    hero: {
      eyebrow: "Ecommerce & retail",
      headline: "Every extra second costs you a percentage of the cart",
      accent: ["extra second"],
      sub: "Ecommerce is the least forgiving thing we build. A slow product page, a filter that returns nothing, or stock that says available when it isn't — each one is measurable revenue, and it shows up the same week.",
    },
    overview: {
      heading: "Ecommerce web design and development",
      paragraphs: [
        "Retail sites are judged on numbers you can watch daily, which is a good discipline. It also means every decision has to be defensible: does this filter help people find things, or does it just look thorough?",
        "The work divides into discovery and completion. Discovery is search, filtering, category structure, and how much decision-making information sits on the collection page. Completion is the cart and checkout, where every field, shipping surprise, and unexpected step drops a percentage.",
        "Behind both is the operational layer nobody sees until it breaks: stock sync, tax by region, shipping rules that match your carriers, and returns. We test those with real orders through every combination before launch, because a store that oversells is worse than a store that's plain.",
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
          "Reviews, chat, upsells, loyalty, three analytics tools. We've seen eleven apps adding three seconds to every page — the single largest conversion drag in most stores.",
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
          "ERP, 3PL, or POS sync with reconciliation reporting, plus test orders through every tax and shipping combination before go-live.",
      },
      {
        title: "App audit as standard",
        description:
          "Every app measured for load cost. Anything a theme can do gets built into the theme. Typically three to five apps come out.",
      },
      {
        title: "Category pages built to rank",
        description:
          "Buying guidance, subcategory links, and FAQ content on collection pages, with faceted-navigation rules so filters don't spawn duplicate URLs.",
      },
    ],
    stats: [
      { value: 31, suffix: "%", label: "Median checkout completion lift", note: "Rebuild projects, first 90 days." },
      { value: 4, label: "Apps removed, median", note: "On stores we take over." },
      { value: 100, suffix: "%", label: "Test-order coverage", note: "Every tax and shipping path." },
    ],
    faqs: [
      {
        question: "Shopify, WooCommerce, or headless?",
        answer:
          "Shopify for most stores — the operational load it absorbs is worth the platform fee. WooCommerce if you're tied to WordPress or need unusual product logic. Headless when the catalogue is large, you sell across markets, or the storefront is content-heavy. We recommend after looking at your catalogue and order volume, not before.",
      },
      {
        question: "Will a redesign hurt our search traffic?",
        answer:
          "Not if the redirect map is complete. Product and collection URL structures differ between platforms, so every old URL needs a 301 to its closest equivalent and the titles that already rank need preserving. Expect two to four weeks of movement while Google recrawls a large catalogue, then recovery.",
      },
      {
        question: "How do you handle a messy product spreadsheet?",
        answer:
          "Cleaning it up is part of the project, and it's usually the least glamorous week. Attributes get structured properly — size, material, compatibility, lead time as real fields — because that's what makes filtering, search, and Product schema work at all.",
      },
      {
        question: "Can you work with our existing theme?",
        answer:
          "Yes. If the design is fine and the problem is speed or conversion, a tune-up engagement addresses that in two to three weeks for a fraction of a rebuild. We'll tell you honestly which one your store needs.",
      },
    ],
    serviceSlugs: ["ecommerce-development", "shopify-development", "ecommerce-seo", "speed-optimization", "ui-ux-design", "web-design"],
    caseStudySlugs: ["ecommerce-store", "coastline-outfitters"],
    blogSlugs: ["shopify-store-conversion-optimization", "core-web-vitals-guide", "how-to-build-website-that-converts"],
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
        "Product discovery matched to your catalogue, checkout measured step by step, inventory and tax integrations tested with real orders, and category pages built to rank.",
    },
    media: {
      imageAlt: "Retail collection page with filters beside a mobile checkout flow",
    },
  },

  {
    slug: "restaurants-hospitality",
    name: "Restaurants & Hospitality",
    navLabel: "Restaurants",
    icon: "utensils",
    href: "/industries/restaurants-hospitality",
    shortDescription:
      "Menus that load instantly, bookings that work on a phone, and local search that fills tables.",
    hero: {
      eyebrow: "Restaurants & hospitality",
      headline: "Someone is deciding where to eat, right now, on their phone",
      accent: ["right now"],
      sub: "They want the menu, the hours, and a table for two at seven. If your menu is a PDF that opens in a new tab and pinches to zoom, they've already opened a different tab.",
    },
    overview: {
      heading: "Restaurant and hospitality website design",
      paragraphs: [
        "Hospitality web traffic is overwhelmingly mobile, overwhelmingly local, and overwhelmingly urgent. Someone standing on a street corner at 6:40pm is not browsing your story page. They want three things and they want them in one tap.",
        "So we build for that: menus as real HTML that load instantly and read at arm's length, hours that are correct including holidays, one-tap calling and directions, and booking that doesn't bounce out to a slow third-party page mid-flow.",
        "Then local search, which is where the demand actually lives. Google Business Profile properly set up, photos posted regularly, reviews responded to, and Restaurant and Menu schema so your dishes and prices can appear directly in results.",
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
          "Around four in five hospitality visits are mobile. A site designed on a 27-inch monitor and checked on mobile afterwards gets the priority backwards.",
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
    stats: [
      { value: 79, suffix: "%", label: "Mobile share of visits", note: "Median across hospitality clients." },
      { value: 30, suffix: "%", label: "Booking lift", note: "Local Bistro, first month after launch." },
      { display: "3–5", label: "Weeks, typical build", note: "Single-location restaurant site." },
    ],
    faqs: [
      {
        question: "Can we keep our PDF menu?",
        answer:
          "You can host it as a download for people who want to print, but it shouldn't be the primary menu. HTML menus load instantly, read properly on a phone, get indexed by Google, and can be updated by your manager in two minutes when the fish changes.",
      },
      {
        question: "Which reservation system should we use?",
        answer:
          "If you already have one your staff know, keep it — we'll integrate it cleanly. If you're choosing, OpenTable brings diner traffic but charges per cover, Resy suits higher-end rooms, and a custom form with capacity rules costs nothing per booking if you don't need the marketplace.",
      },
      {
        question: "Do we need online ordering?",
        answer:
          "It depends on your margins. Third-party delivery apps take 15–30%, so a direct ordering option on your own site is worth building if a meaningful share of your volume is takeaway. For a dine-in-led restaurant it's often not worth the complexity.",
      },
      {
        question: "How do we handle reviews?",
        answer:
          "Respond to all of them, quickly, including the bad ones — a calm specific reply reassures the next reader more than a wall of five stars. We set up a request process for your service flow and write response templates your managers can adapt.",
      },
    ],
    serviceSlugs: ["web-design", "local-seo", "wordpress-development", "landing-page-development", "website-maintenance"],
    caseStudySlugs: ["local-restaurant-website"],
    blogSlugs: ["local-seo-strategy-small-business", "how-to-build-website-that-converts", "core-web-vitals-guide"],
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
        "HTML menus that load instantly and rank, booking flows that stay on the page, one-tap calls and directions, and local SEO that fills tables.",
    },
    media: {
      imageAlt: "Restaurant website on a phone showing the menu and a reservation form",
    },
  },

  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "building",
    href: "/industries/real-estate",
    shortDescription:
      "Listing sites with fast search, IDX or MLS feeds, and area pages that rank locally.",
    hero: {
      eyebrow: "Real estate",
      headline: "Listings load fast or buyers browse somewhere else",
      accent: ["load fast"],
      sub: "You're competing with portals that have engineering teams. You won't beat them on inventory, but you can beat them on speed, on local knowledge, and on being the agency people already trust in your area.",
    },
    overview: {
      heading: "Real estate website design and development",
      paragraphs: [
        "Property search is image-heavy, filter-heavy, and impatient. Twelve listings with eight photos each is a lot of bytes, and a gallery that stutters on a phone loses the browse session that would have produced an enquiry.",
        "So the technical work is mostly about weight and responsiveness: images served in modern formats at the right size, map and list views that don't reload the page, and search state that survives a back button. Then the feed — IDX, MLS, or your own CRM — synced reliably, with sold and withdrawn listings handled properly so the URL doesn't just 404.",
        "The marketing side is local search. Area and neighbourhood pages with real substance — schools, transport, price trends, your own recent sales — earn the searches portals compete for weakly, because they can't write about a neighbourhood the way someone who works it can.",
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
          "AVIF and WebP at multiple sizes, lazy loading below the fold, the hero preloaded, and blur placeholders so the layout never jumps.",
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
    stats: [
      { value: 1.6, decimals: 1, suffix: "s", label: "Median listing page LCP", note: "Mobile, full photo gallery." },
      { display: "8–12", label: "Weeks, typical build", note: "With feed integration." },
      { value: 15, label: "Minute feed sync", note: "Configurable per source." },
    ],
    faqs: [
      {
        question: "Can you integrate our MLS or IDX feed?",
        answer:
          "Usually yes. We've worked with RETS, RESO Web API, and a fair number of proprietary XML feeds. The variable is data quality — some feeds are missing fields or send duplicates, and handling that cleanly is most of the integration work. We'll review your feed during scoping and tell you what to expect.",
      },
      {
        question: "Should listings live on our site or just link to the portal?",
        answer:
          "On your site. Listings on your own domain generate organic traffic, capture enquiries you don't pay a lead fee for, and give you an audience you own. Portals are a supplement, not a substitute.",
      },
      {
        question: "How do you handle sold properties?",
        answer:
          "Keep the page with a clear sold status and links to similar available stock, or redirect to the relevant area page if the listing had links and traffic. Sold archives also make good local-search content — evidence you actually sell in that neighbourhood.",
      },
      {
        question: "Do you build agent profiles and lead routing?",
        answer:
          "Yes. Agent pages with their own listings and reviews, plus enquiry routing to the right agent by area or property type, with CRM handoff. Response time is where most property leads are lost, so we instrument that too.",
      },
    ],
    serviceSlugs: ["web-design", "custom-development", "local-seo", "landing-page-development", "speed-optimization"],
    caseStudySlugs: ["castellan-realty"],
    blogSlugs: ["local-seo-strategy-small-business", "core-web-vitals-guide", "how-to-build-website-that-converts"],
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
        "Fast listing pages with optimised galleries, reliable IDX and MLS feed sync, instant filtered search, and neighbourhood pages written with real local knowledge.",
    },
    media: {
      imageAlt: "Property search page with map and list views beside a listing gallery",
    },
  },

  {
    slug: "healthcare",
    name: "Healthcare & Clinics",
    navLabel: "Healthcare",
    icon: "heart-pulse",
    href: "/industries/healthcare",
    shortDescription:
      "Accessible, trustworthy clinic sites with booking, and privacy handled properly.",
    hero: {
      eyebrow: "Healthcare & clinics",
      headline: "People arrive worried. Don't make them work",
      accent: ["worried"],
      sub: "A patient looking for a specialist wants to know you treat their condition, that you're covered by their insurance, and how soon they can be seen. Three answers, findable in seconds, written without jargon.",
    },
    overview: {
      heading: "Healthcare and clinic website design",
      paragraphs: [
        "Healthcare sites carry a weight most don't. Someone reading yours may be anxious, in pain, or making a decision for a parent. Clever design that prioritises mood over clarity actively fails them.",
        "The things patients look for are consistent: do you treat this condition, are you covered by my insurance, who is the clinician, where are you, and when can I be seen. Those answers should be one click from anywhere, in plain language, at a text size someone reads comfortably.",
        "Accessibility isn't optional here — your patient population includes people with low vision, motor impairments, and cognitive load from illness or medication. We build to WCAG 2.1 AA as a floor. And any form touching health information gets its handling documented: where it goes, who can read it, how long it's kept.",
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
    stats: [
      { display: "AA", label: "WCAG 2.1 conformance", note: "Verified, not assumed." },
      { display: "4–7", label: "Weeks, typical build", note: "Clinic site with booking." },
      { value: 100, suffix: "%", label: "Forms with documented handling", note: "Storage, access, retention." },
    ],
    faqs: [
      {
        question: "Do you build HIPAA-compliant websites?",
        answer:
          "We build the site to handle protected health information correctly and we'll sign a BAA where our services touch it. Full HIPAA compliance covers your whole organisation — training, policies, physical safeguards — not just the website, so we'd rather be precise about our part than claim to certify yours. We'll walk through the data flow with you before writing any code.",
      },
      {
        question: "Can patients book appointments online?",
        answer:
          "If your practice management system has an API, yes — real availability, real bookings, with reminders. Many older systems don't, in which case we build a structured request form with honest expectations about response time and route it to the right team.",
      },
      {
        question: "How important is accessibility for a clinic site?",
        answer:
          "More than for almost any other sector, and in many jurisdictions it's a legal requirement for healthcare providers. Beyond that, your patient population disproportionately includes people who need it. We treat WCAG 2.1 AA as the minimum, not the goal.",
      },
      {
        question: "Should we publish patient reviews?",
        answer:
          "Google reviews, yes, with careful responses that never confirm someone was a patient. Testimonials on the site need explicit written consent and should avoid clinical specifics. We'll set up the consent process alongside the build.",
      },
    ],
    serviceSlugs: ["web-design", "ui-ux-design", "local-seo", "content-writing", "website-maintenance"],
    caseStudySlugs: ["northgate-dental"],
    blogSlugs: ["local-seo-strategy-small-business", "ux-design-principles-that-increase-conversions", "how-to-build-website-that-converts"],
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
        "Accessible clinic sites built to WCAG 2.1 AA, with documented handling for any form carrying health information, real appointment booking, and clinician profiles.",
    },
    media: {
      imageAlt: "Clinic website showing clinician profiles and an appointment booking step",
    },
  },

  {
    slug: "professional-services",
    name: "Professional Services",
    icon: "scale",
    href: "/industries/professional-services",
    shortDescription:
      "Sites for law, accounting, and consulting firms — credibility first, then the enquiry.",
    hero: {
      eyebrow: "Professional services",
      headline: "You're being vetted before anyone calls you",
      accent: ["vetted"],
      sub: "Nobody hires a law firm or an accountant on impulse. They read three sites, form an opinion about which one seems most capable, and only then pick up the phone. Your site is the reference check you don't get to attend.",
    },
    overview: {
      heading: "Web design for law, accounting, and consulting firms",
      paragraphs: [
        "Professional services buying is slow and comparative. A prospect is weighing expertise, relevance to their specific situation, and whether they'd want to sit across a table from you. That's a lot of judgement to support with a site that says \"trusted advisors since 1994\".",
        "What actually persuades is specificity. Not \"commercial litigation\" but the kinds of disputes you handle, the size of matters, the outcomes you can describe within your professional conduct rules. Named people with real backgrounds, because clients hire individuals rather than firms.",
        "Then a clear path to a conversation. Professional services enquiries are high-value and low-volume, so the site doesn't need mass conversion tactics — it needs the right visitor to feel confident enough to make contact, and enough qualification detail that the call is worth having.",
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
          "We work within your jurisdiction's advertising rules and find the substance that's still permitted — matter types, sectors, scale, process, and outcomes described appropriately.",
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
    stats: [
      { display: "5–9", label: "Weeks, typical build", note: "Firm site with practice area pages." },
      { value: 2.4, decimals: 1, suffix: "×", label: "Median enquiry quality lift", note: "Enquiries within practice scope." },
      { display: "6–8", label: "Practice area pages", note: "Median, one per real specialism." },
    ],
    faqs: [
      {
        question: "Our professional body restricts what we can say. Is that a problem?",
        answer:
          "It's a constraint we work within regularly. Bar and accountancy advertising rules generally prohibit guarantees, superlatives, and comparative claims — not describing your work. There's a lot of room between \"best litigators in the state\" and \"we handle shareholder disputes in the $2m–$20m range.\" We'll draft within your rules and your compliance team reviews before publication.",
      },
      {
        question: "Do we need individual bios for everyone?",
        answer:
          "For fee earners, yes — clients hire people. Support staff can be a group listing. Thin bios are worse than none, so if a partner won't sit for twenty minutes to give us something substantive, that page will underperform and we'll say so.",
      },
      {
        question: "Can we publish case results?",
        answer:
          "Depends on your jurisdiction and your client confidentiality obligations. Where results are restricted, anonymised matter descriptions — the situation, the approach, the type of outcome — are usually permitted and still persuasive. We'll structure them for your compliance team to review.",
      },
      {
        question: "Is a blog worth it for a professional services firm?",
        answer:
          "Substantive commentary on developments in your area works well — it demonstrates expertise, earns links, and ranks. Generic \"five tips\" posts do neither. Two well-researched pieces a quarter written by a partner beat twelve outsourced ones.",
      },
    ],
    serviceSlugs: ["web-design", "web-development", "content-writing", "seo", "local-seo", "cms-development"],
    caseStudySlugs: ["hartwell-mercer-law", "dazzle-website", "castellan-realty"],
    blogSlugs: ["content-strategy-that-actually-works", "how-to-build-website-that-converts", "local-seo-strategy-small-business"],
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
        "Positioning built from the work you actually do, practitioner profiles that carry weight, a page per practice area, and intake that qualifies before the call.",
    },
    media: {
      imageAlt: "Professional services site showing practice area pages and a practitioner profile",
    },
  },
];

export const getIndustryBySlug = (slug: string) =>
  industries.find((industry) => industry.slug === slug);

export const industryParams = () => industries.map((industry) => ({ slug: industry.slug }));
