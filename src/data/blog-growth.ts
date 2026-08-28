import type { BlogPost } from "./blog";

/** Ecommerce, content, and brand posts. */
export const growthPosts: BlogPost[] = [
  {
    slug: "shopify-store-conversion-optimization",
    title: "Shopify Conversion: The Seven Things We Fix First",
    excerpt:
      "App bloat, checkout steps, collection pages, and product data. What we change on a Shopify store before touching the design, with the numbers.",
    date: "2026-05-26",
    category: "Ecommerce",
    featured: true,
    author: "Bilal Rehman",
    authorRole: "Lead Developer",
    readTime: "10 min read",
    tags: ["Shopify", "Ecommerce", "Conversion", "Checkout"],
    relatedServiceSlugs: ["shopify-development", "ecommerce-development", "ecommerce-seo", "speed-optimization"],
    relatedPostSlugs: ["core-web-vitals-guide", "how-to-build-website-that-converts"],
    relatedProjectSlugs: ["ecommerce-store", "coastline-outfitters"],
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
      title: "Shopify Conversion: The Seven Things We Fix First | Quesiono",
      description:
        "The Shopify conversion work that pays before a redesign — app audit, checkout steps, shipping transparency, collection page content, and product data structure.",
    },
    content: `
      <p>When a store owner asks for a redesign, we look at the numbers first. About half the time the design is fine and the store is losing money to four things that have nothing to do with how it looks.</p>
      <p>Here's the order we work in, and roughly what each one has been worth on real stores.</p>

      <h2 id="app-audit">1. Audit the apps, individually</h2>
      <p>This is the cheapest large win on almost every Shopify store we see.</p>
      <p>One store we took on had eleven apps: reviews, chat, three separate upsell tools, loyalty, a currency switcher, and two analytics apps that both loaded the same tracking library. Together they added 3.2 seconds to first contentful paint on a mid-range Android. Two of the upsell apps fired on the same trigger and occasionally rendered on top of each other.</p>
      <p>How to do it properly: measure each app's load cost on its own. Disable one, measure, re-enable, repeat. Tedious and unambiguous. Then ask three questions per app:</p>
      <ul>
        <li>Is anyone using the data or feature it provides? Check, don't assume.</li>
        <li>Could a theme change do the same thing? Reviews, currency switching, and simple upsells usually can.</li>
        <li>Is it worth its load cost against measured revenue?</li>
      </ul>
      <p>On that store, four apps came out and their functions were rebuilt into the theme. Mobile LCP dropped from 5.4 seconds to 1.9. Nothing about the design changed.</p>

      <h2 id="shipping">2. Show shipping cost before the address form</h2>
      <p>The largest single drop-off we've measured in a Shopify checkout was the step where shipping cost first appeared — step three of five, after personal details.</p>
      <p>People had already committed and then found out the total. Moving shipping onto the cart page, with a threshold indicator ("$6 more for free delivery"), lifted checkout completion 31%.</p>
      <p>If your rates are complex, show a "from" price with the calculation available. Any number is better than a surprise.</p>

      <h2 id="checkout">3. Take steps out of checkout</h2>
      <p>Shopify's checkout is good and there's still room. What we change:</p>
      <ul>
        <li><strong>Surface wallet payments first.</strong> Shop Pay, Apple Pay, and Google Pay above the card form, not below it. On mobile these convert dramatically better because they skip typing entirely.</li>
        <li><strong>Never force account creation.</strong> Guest checkout, with an optional account offer on the confirmation page.</li>
        <li><strong>Turn on one-page checkout</strong> if you're on a plan that supports it and your rate logic allows.</li>
        <li><strong>Cut the fields that don't route or price the order.</strong> Company name and second address line are optional for most stores and rarely used.</li>
        <li><strong>Instrument every step.</strong> Without per-step funnel events you're guessing about where people leave. With them, you fix the actual step.</li>
      </ul>

      <h2 id="product-data">4. Structure the product data properly</h2>
      <p>This is the least interesting item and frequently the highest-value one.</p>
      <p>An outdoor retailer we worked with had 3,400 SKUs where buyers decide on specifications — waterproof rating, fill power, pack weight, temperature rating. None of it existed as data. It was written into description paragraphs, differently by whoever added the product, over nine years.</p>
      <p>So the only filters available were price, brand, and size. Someone looking for a jacket rated above 20,000mm had to open products one at a time and read.</p>
      <p>Four of the project's ten weeks went into building a per-category attribute schema in metafields, extracting what we could from descriptions, and having their product team fill the rest. Afterwards, faceted filtering on real specifications became straightforward, and search-to-purchase rate nearly tripled.</p>
      <p>The same data powers Product schema, which makes you eligible for rich results with price and availability. Two returns from one piece of dull work.</p>

      <h2 id="collections">5. Put content on collection pages</h2>
      <p>Collection pages catch the highest-intent searches — "waterproof walking jackets", "men's chelsea boots" — and on most stores they contain a product grid and one sentence.</p>
      <p>Which is why a guide on a competitor's blog outranks your own category page for your own category.</p>
      <p>What we add:</p>
      <ul>
        <li>A short buying-guidance section above the grid — the two or three things that decide the choice</li>
        <li>Subcategory links, which help both shoppers and crawlers</li>
        <li>Sizing, materials, or compatibility detail below the grid</li>
        <li>An FAQ block answering what people ask before buying in that category</li>
        <li>Breadcrumbs with BreadcrumbList markup</li>
      </ul>
      <p>Don't dump 800 words above the products. Shoppers came for products. A tight section above and the substance below works for both audiences.</p>

      <h2 id="facets">6. Get faceted navigation under control</h2>
      <p>Filters generate URLs. Left alone, three filters across a decent catalogue produce tens of thousands of crawlable near-duplicate pages, and Google spends its crawl budget on parameter permutations instead of your products.</p>
      <p>Decide deliberately which combinations deserve indexing. Category plus one meaningful filter is often a real search term worth its own indexable page. Three stacked filters almost never is — canonical those back to the base category and keep them out of the sitemap.</p>
      <p>On one store this alone took Googlebot from crawling product pages weekly to daily, which showed up as faster indexing of new stock.</p>

      <h2 id="product-page">7. Fix the product page decision layer</h2>
      <p>Once someone is on a product page they have a specific set of doubts. Answer them there rather than in a policy page they won't visit.</p>
      <ul>
        <li><strong>Delivery date, not delivery method.</strong> "Arrives Tuesday 3 March" beats "standard delivery 2–4 days".</li>
        <li><strong>Returns, stated plainly, near the button.</strong> One line, no link required.</li>
        <li><strong>Stock reality.</strong> Genuine low-stock indicators help. Fake urgency doesn't — we tested a countdown timer and it moved conversion 0.4%, inside noise, while support questions about whether the offer was real went up.</li>
        <li><strong>Reviews on the page,</strong> including the critical ones. A product with only five-star reviews reads as filtered.</li>
        <li><strong>Sizing help</strong> for anything worn. A size guide reduces returns as well as hesitation.</li>
        <li><strong>Images that answer the question the description can't.</strong> Scale, texture, and what it looks like in use.</li>
      </ul>

      <h2 id="inventory">The operational thing that isn't conversion but costs more</h2>
      <p>If your site and warehouse disagree on stock, you're either overselling or hiding inventory. One retailer with two warehouses running separate counts, reconciled overnight, was overselling roughly 40 orders a month. Each one a refund, an apology, and often a lost customer.</p>
      <p>Unifying that into one source of truth with same-hour discrepancy reporting brought it under two a month. It doesn't show up in a conversion report and it was worth more than most things that do.</p>

      <h2 id="order">The order, and what to expect</h2>
      <ol>
        <li>App audit — days, and usually the biggest speed win</li>
        <li>Shipping transparency and checkout steps — a week, and the biggest conversion win</li>
        <li>Product data structure — weeks, and it unblocks everything else</li>
        <li>Collection page content and facet rules — weeks, results over months</li>
        <li>Product page decision layer — ongoing</li>
      </ol>
      <p>Conversion changes show in two to four weeks on reasonable traffic. Organic changes take three to six months, and on a large catalogue add time for recrawling.</p>
      <p>A tune-up engagement covering the first three items runs two to three weeks and costs a fraction of a rebuild. If the design genuinely is the problem we'll say so — but we'd rather check the numbers first, and we'll tell you when the cheaper answer is the right one.</p>
      <p>Our <a href="/services/shopify-development">Shopify development</a> work starts with this audit.</p>
    `,
    imageAlt: "Shopify checkout funnel with per-step drop-off percentages",
  },

  {
    slug: "content-strategy-that-actually-works",
    title: "Content Strategy Without the Content Calendar Theatre",
    excerpt:
      "Publishing three posts a week for a year and ranking for nothing is a common outcome. Here's what we do instead, and why fewer pages usually wins.",
    date: "2026-01-20",
    category: "Content",
    featured: false,
    author: "Zoya Farooq",
    authorRole: "Content Lead",
    readTime: "9 min read",
    tags: ["Content strategy", "SEO content", "Editorial", "Topic clusters"],
    relatedServiceSlugs: ["content-writing", "blog-posts", "article-writing", "keyword-research", "seo"],
    relatedPostSlugs: ["seo-basics-getting-started-2025", "how-much-does-a-website-cost"],
    relatedProjectSlugs: ["hartwell-mercer-law", "coastline-outfitters"],
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
      title: "Content Strategy Without the Calendar Theatre | Quesiono",
      description:
        "Why publishing volume fails, how to pick topics from your own sales calls, the cluster model that works, and how to update rather than republish.",
    },
    content: `
      <p>We've watched clients publish three posts a week for a year and rank for nothing. Not because the posts were bad exactly — because none of them was better than what already ranked, and volume doesn't substitute for that.</p>
      <p>Here's what we do instead. It produces fewer pages, and it works.</p>

      <h2 id="why-volume-fails">Why the volume approach fails</h2>
      <p>Google's job is to return the best available answer. If twelve pages already answer a question well, a thirteenth adequate page has no reason to rank. There's no credit for effort or frequency.</p>
      <p>So the question for every piece isn't "is this good?" It's "is this better than the current page one for this query, in some specific way?" If you can't name the way, don't write it yet.</p>
      <p>Ways to be better, in rough order of how achievable they are:</p>
      <ul>
        <li><strong>First-hand data or experience.</strong> Your own numbers, your own projects. Nobody can copy this.</li>
        <li><strong>Actually current.</strong> Half the top results for most technical queries reference deprecated tools or superseded rules.</li>
        <li><strong>More complete.</strong> Answering the follow-up questions the ranking pages leave hanging.</li>
        <li><strong>More specific to a segment.</strong> "SEO for law firms" beats competing with generic SEO guides.</li>
        <li><strong>Clearer.</strong> Underrated. Plenty of top-ranking pages are badly organised.</li>
      </ul>

      <h2 id="topics">Get topics from sales calls, not tools</h2>
      <p>Keyword tools give you volume and difficulty. They don't tell you which questions block a purchase.</p>
      <p>So we start by sitting in on sales calls or reading through enquiry threads. Every question a prospect asks before buying is a question people type into Google, and those queries convert because the person asking is already in the market.</p>
      <p>For a law firm this produced: what does a shareholder dispute cost, how long does it take, what happens if there's an arbitration clause, can I force a buyout. Four pages, all of them commercially valuable, none of which would have surfaced from a keyword tool as a priority.</p>
      <p>Then use the tools to check volume and see how the query is phrased. That order matters — sales insight first, validation second.</p>

      <h2 id="intent">Read the results before you write</h2>
      <p>Search your target term and look at what's ranking. Google has already decided what kind of page that query wants.</p>
      <p>If the top ten are buying guides, a product page won't rank there regardless of quality. If they're all listicles, a long essay is fighting the format. If they're forum threads and Reddit posts, the query wants a discussion and probably isn't worth a page.</p>
      <p>This five-minute check saves the most common wasted effort in content marketing: writing the wrong kind of page for the right term.</p>

      <h2 id="clusters">Build clusters, not calendars</h2>
      <p>Individual posts scattered across unrelated topics don't accumulate anything. Clusters do.</p>
      <p>A cluster is one substantial page on a broad topic plus five to ten pages on specific sub-questions, all linking to each other and to the parent. It works for two reasons: internal links concentrate authority on the parent page, and covering a subject thoroughly is itself a relevance signal.</p>
      <p>A practical example. Parent page: technical SEO. Children: crawl budget, indexing problems, duplicate content, structured data, Core Web Vitals, log file analysis. Each child links up to the parent and sideways to two or three siblings. The parent links down to all of them.</p>
      <p>Pick two clusters and finish them before starting a third. A half-built cluster performs like scattered posts.</p>

      <h2 id="format">Write it so it can be scanned and read</h2>
      <p>People arrive with a specific question and skim for the answer. Then, if you've earned it, they read.</p>
      <p>What that means practically:</p>
      <ul>
        <li><strong>Answer the title question in the first two paragraphs.</strong> Don't warm up. If someone asks what something costs, the number goes near the top.</li>
        <li><strong>Descriptive subheadings.</strong> Someone should get the argument from the H2s alone.</li>
        <li><strong>Short paragraphs.</strong> Two to four sentences. Walls of text get abandoned on phones.</li>
        <li><strong>Specifics over adjectives.</strong> "Three weeks" beats "quickly". "$4,000 to $12,500" beats "affordable".</li>
        <li><strong>Vary sentence length.</strong> A long sentence carrying a full argument, then a short one. It reads like a person.</li>
      </ul>
      <p>And a note on tone: content written to fill a slot reads like content written to fill a slot. Readers can tell, and increasingly so can search engines. If you have nothing specific to say about a topic, the right decision is not to publish about it.</p>

      <h2 id="update">Update before you publish something new</h2>
      <p>The highest-return content work is usually improving what exists.</p>
      <p>Open Search Console, filter to queries where you rank between positions 5 and 15, and list the pages. Google already considers those pages relevant. A modest improvement moves them into the range where people click, and it's far cheaper than earning a new page's authority from zero.</p>
      <p>What to do to each one:</p>
      <ul>
        <li>Add the sub-questions the page doesn't cover — check "People also ask" for the query</li>
        <li>Refresh anything factually stale, and update the modified date honestly</li>
        <li>Improve the title tag for click-through, since you now know the exact query</li>
        <li>Add internal links from related pages with descriptive anchors</li>
        <li>Cut anything that pads without answering</li>
      </ul>
      <p>We've seen a single afternoon of this move a page from position 11 to 4. No new content, no links.</p>
      <p>Also: prune. Pages with no traffic, no links, and no purpose dilute the site. Merge them into something better or remove them. Fewer, stronger pages outperform more, weaker ones.</p>

      <h2 id="cadence">A cadence that's actually sustainable</h2>
      <p>For most businesses: two substantial pieces a month, plus one update to an existing page. That's it.</p>
      <p>Two pieces a month is 24 a year. If each is genuinely better than what ranks, that's a serious content asset in eighteen months. Eight thin pieces a month is 96 a year of nothing.</p>
      <p>For a professional services firm, the ratio is even steeper. Two well-researched pieces a quarter written by a partner beat twelve outsourced ones, because the expertise is the product and it can't be subcontracted convincingly.</p>

      <h2 id="measure">Measure the right things</h2>
      <p>Not pageviews. Not time on page, which mostly measures how long people spend hunting for what they came for.</p>
      <p>Per page: which queries it gets impressions for, average position on the queries you targeted, click-through rate, and whether it produces enquiries or assisted ones. Set up conversion attribution before you start, not six months in when someone asks whether the content is working.</p>
      <p>Realistic timeline: a new page takes three to six months to reach a stable position. An updated existing page can move in two to four weeks. That difference is the whole argument for updating first.</p>

      <h2 id="honest">The part nobody puts in a proposal</h2>
      <p>Good content is slow and it doesn't scale the way content marketing decks imply. A genuinely useful 1,500-word piece with original insight takes a day or two, including the research and the interview with whoever knows the subject.</p>
      <p>Anyone offering twelve posts a month at a low per-post rate is producing something assembled from what's already ranking. That was viable for a while and it isn't now.</p>
      <p>Our <a href="/services/content-writing">content writing</a> work runs at the slower cadence deliberately, and we'd rather write six pieces that rank than thirty that fill a calendar.</p>
    `,
    imageAlt: "Topic cluster diagram showing a parent page linked to sub-topic pages",
  },

  {
    slug: "brand-identity-guide-2025",
    title: "Brand Identity for the Web: What Actually Has to Be Decided",
    excerpt:
      "Not a brand book with fourteen logo variations. The eight decisions a website needs made, and the two that matter most.",
    date: "2025-11-18",
    category: "Web Design",
    featured: false,
    author: "Rida Malik",
    authorRole: "Design Lead",
    readTime: "8 min read",
    tags: ["Brand", "Design systems", "Typography", "Colour"],
    relatedServiceSlugs: ["web-design", "ui-ux-design", "content-writing"],
    relatedPostSlugs: ["ux-design-principles-that-increase-conversions", "how-to-build-website-that-converts"],
    relatedProjectSlugs: ["dazzle-website", "northgate-dental"],
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
      title: "Brand Identity for the Web: What Has to Be Decided | Quesiono",
      description:
        "The eight brand decisions a website actually needs — positioning, voice, type, colour with verified contrast, imagery, motion, and the two that matter most.",
    },
    content: `
      <p>Brand identity projects often produce a 60-page document with fourteen logo lock-ups, a mood board, and a page about brand values that nobody reads twice. Then the website gets built and half the questions it needed answered aren't in there.</p>
      <p>These are the eight decisions a website genuinely needs made, roughly in the order they have to be made, with a note on which two carry the most weight.</p>

      <h2 id="positioning">1. Positioning: who this is for and what it's for</h2>
      <p>The first and most important decision, and the one most often skipped because it's uncomfortable.</p>
      <p>On a studio rebrand last year, three founders gave us three different answers to "what should someone hire you for?" That's normal at their size and fatal on a website, because a site can't hedge the way a person in a room can. We ran the interviews separately, wrote down where the answers diverged, and made them choose. Uncomfortable meeting. Right decision.</p>
      <p>The output is one sentence: who you're for, what you do, and what makes the choice obvious for that person. If it takes a paragraph, it isn't decided yet.</p>
      <p>Note what this excludes. Good positioning loses people deliberately. A headline that speaks precisely to one audience will lose everyone else, and that's the mechanism, not a side effect.</p>

      <h2 id="voice">2. Voice: how it sounds in a sentence</h2>
      <p>The second decision that carries real weight, and the one most brand books handle worst. "Professional yet approachable" tells a writer nothing.</p>
      <p>What works is examples. Three sentences you would write and three you wouldn't, side by side, with a line on why. Then some concrete rules:</p>
      <ul>
        <li>Do we use contractions? (Usually yes. "We'll" not "we will".)</li>
        <li>First person plural or third person? ("We build" not "Quesiono builds".)</li>
        <li>Words we don't use. A banned list is more useful than an aspirational one.</li>
        <li>How we handle bad news, prices, and constraints. This is where voice actually gets tested.</li>
      </ul>
      <p>Our own list bans about twenty words — delve, elevate, unlock, seamless, and the rest of the vocabulary that signals generated text. It's the single most-referenced page in our internal documentation.</p>

      <h2 id="type">3. Typography: two families, a real scale</h2>
      <p>Two typefaces is enough. One for display, one for body. Three is a system nobody maintains.</p>
      <p>What has to be decided:</p>
      <ul>
        <li><strong>The display face,</strong> which carries most of the personality. Check it has the weights you need and the styles you'll want — plenty of otherwise excellent variable fonts have no italic, which changes how you handle emphasis.</li>
        <li><strong>The body face,</strong> chosen for reading at 16–18px on a phone. Test it there, not at 48px in a specimen.</li>
        <li><strong>A scale.</strong> Six or seven steps, defined once. We use fluid steps with <code>clamp()</code> so sizes scale continuously instead of jumping at breakpoints.</li>
        <li><strong>Line length and line height.</strong> 60–75 characters per line for body text, around 1.6 line height. Wider than that and the eye loses the return.</li>
      </ul>
      <p>Practical note: self-host your fonts and load only the weights you use. Each additional weight is a real download, and a variable font in one file usually beats four static ones.</p>

      <h2 id="colour">4. Colour, with the contrast computed</h2>
      <p>A palette is not a mood board. It's a set of decisions about which colour goes where, with the accessibility maths done.</p>
      <p>What a usable palette needs:</p>
      <ul>
        <li>One or two dark surface colours, and one or two light</li>
        <li>A text colour for each surface, contrast-checked at 4.5:1 minimum for body text</li>
        <li>One accent, used sparingly, with a documented rule about where it can and can't go</li>
        <li>Border and divider values for both light and dark contexts</li>
        <li>Semantic colours for error, warning, and success — usually forgotten until the first form is built</li>
      </ul>
      <p>The accent rule matters more than it sounds. Our own accent is a champagne gold. It's 8.5:1 against our darkest surface and 2.1:1 against cream, which means it's readable on dark and decorative on light. That's written into the config as a comment so nobody uses it for body text on a pale background six months from now.</p>
      <p>One clinic site we inherited had body text at 2.9:1. It looked refined on the designer's monitor and was unreadable on a phone in daylight, and for a patient base skewing older it was excluding the exact audience the site existed for. Compute the numbers.</p>

      <h2 id="imagery">5. Imagery: a rule, not a folder</h2>
      <p>Decide what pictures this brand uses and, more usefully, what it doesn't.</p>
      <p>"Real photography of our own team and work, never stock people in an office" is a rule. "Authentic and human" is not. Write down the treatment too — full colour or duotone, cropped tight or wide, people looking at camera or not.</p>
      <p>If there's no photography budget yet, decide what fills the gap. Illustrated systems, generated pattern work, product screenshots, or typographic layouts are all defensible. Placeholder stock that stays for three years is not.</p>

      <h2 id="motion">6. Motion: how things move, and when they don't</h2>
      <p>Usually undefined, which is why sites end up with six different easing curves.</p>
      <p>Decide three things: the default duration (200–300ms for interface feedback, 600–800ms for entrances), the easing curve, and what animates on scroll. Then one hard rule: everything respects <code>prefers-reduced-motion</code>, and respecting it means stopping the animation, not speeding it up.</p>
      <p>A useful test for whether motion is earning its place: turn it all off and see whether the page is worse. Often it isn't.</p>

      <h2 id="logo">7. The logo, and how little it does</h2>
      <p>Logos get most of the attention in brand projects and do the least work on a website. It sits at 32px in a corner, and nobody has ever chosen a supplier because of one.</p>
      <p>What actually matters: it's legible at 24px, it works in one colour, it works on both dark and light surfaces, and there's a square version for favicons and social avatars. Fourteen lock-up variations is a document, not a decision.</p>

      <h2 id="system">8. Turn it into components, or it won't survive</h2>
      <p>The gap between a brand document and a consistent website is a component library. Without one, every new page is a fresh interpretation.</p>
      <p>Define the primitives — button variants, card, section heading, form field, badge — as actual code with the brand decisions baked in. Then a new page is assembled from decided parts rather than re-deciding colour and spacing each time.</p>
      <p>This is where most brand work quietly fails. The PDF is beautiful and the site drifts within a year, because nothing enforced the decisions.</p>

      <h2 id="which-matter">The two that matter most</h2>
      <p>If you only do two of these, do positioning and voice.</p>
      <p>A site with a sharp positioning statement and a distinct voice, set in system fonts with two colours, will outperform a beautifully designed site that says nothing specific. We've watched it happen. The studio rebrand mentioned earlier tripled its qualified enquiries, and the design work was the smaller half of the reason — the larger half was finally saying who they were for.</p>
      <p>Type, colour, and motion make it feel like something. Positioning and voice make it worth reading. Both matter, and one of them is load-bearing.</p>
      <p>Our <a href="/services/web-design">web design</a> projects start with the first two before anything visual gets drawn.</p>
    `,
    imageAlt: "Brand system sheet showing type scale, palette, and contrast ratios",
  },
];
