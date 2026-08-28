import type { BlogPost } from "./blog";

/**
 * Engineering posts. Deliberately specific — these are the pages that get read
 * by the technical person on the client side, and vagueness reads badly there.
 */
export const developmentPosts: BlogPost[] = [
  {
    slug: "core-web-vitals-guide",
    title: "Core Web Vitals: What Actually Fixes Each Metric",
    excerpt:
      "LCP, CLS, and INP explained by cause rather than definition — and the specific fixes that moved each one on real sites, in the order we try them.",
    date: "2026-07-21",
    category: "Development",
    featured: true,
    author: "Bilal Rehman",
    authorRole: "Lead Developer",
    readTime: "11 min read",
    tags: ["Performance", "Core Web Vitals", "LCP", "INP"],
    relatedServiceSlugs: ["speed-optimization", "technical-seo", "web-development"],
    relatedPostSlugs: ["nextjs-14-best-practices", "technical-seo-audit-checklist"],
    relatedProjectSlugs: ["castellan-realty", "ecommerce-store"],
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
      title: "Core Web Vitals: What Actually Fixes Each Metric | Quesiono",
      description:
        "A practical guide to LCP, CLS, and INP — the real causes behind each metric, the fixes in the order we try them, and the numbers we saw on live sites.",
    },
    content: `
      <p>Most Core Web Vitals articles define the metrics and then tell you to optimise your images. Here's the version that assumes you already know what LCP stands for and want to know what to change.</p>
      <p>One thing before the detail: use field data, not lab data. Lighthouse on your laptop over office wifi tells you very little. The Core Web Vitals report in Search Console shows what real users on real devices experienced over the last 28 days, and that's the number Google uses. We've seen sites score 98 in Lighthouse and fail LCP in the field, every time because of mobile network conditions the lab test doesn't simulate.</p>

      <h2 id="lcp">LCP: the biggest thing above the fold, and when it appears</h2>
      <p>Largest Contentful Paint measures when the largest visible element finishes rendering. Target is 2.5 seconds at the 75th percentile. Almost always it's a hero image, a headline, or a background.</p>
      <p>First, find out what the element actually is. Chrome DevTools' Performance panel labels it directly. People guess wrong about this constantly — we've had projects where everyone assumed the hero photo was the LCP element and it was a large block of heading text waiting on a web font.</p>
      <p>Then, in the order we work through them:</p>
      <h3>1. Serve the right image format at the right size</h3>
      <p>This is the single biggest lever on most sites. A 2.4MB hero JPEG becomes a 90KB AVIF at the same visual quality. Generate multiple widths, serve them with <code>srcset</code>, and let the browser pick.</p>
      <p>On a property site with eight to fourteen full-resolution photos per listing, moving to AVIF with WebP fallback at five widths took listing-page LCP from 9.2 seconds to 1.5. Same photography. Roughly an eighth of the bytes.</p>
      <h3>2. Preload the LCP image, lazy-load everything else</h3>
      <p>Lazy-loading the hero image is a common and costly mistake — it delays the exact element being measured. Set <code>loading="eager"</code> and <code>fetchpriority="high"</code> on it, add a preload hint in the head, and lazy-load everything below the fold.</p>
      <h3>3. Stop web fonts blocking text</h3>
      <p>If your LCP element is text, the font is in the critical path. Use <code>font-display: swap</code>, self-host rather than pulling from a third-party origin, preload the one weight that renders above the fold, and subset to the characters you need. A variable font in one file usually beats four static weights.</p>
      <h3>4. Cut server response time</h3>
      <p>If time to first byte is over 800ms, no amount of image work saves you. Static generation and edge delivery reduce this to near zero for content that doesn't change per request. For a database-driven page, cache the query — a fifteen-panel dashboard we built fires one API request instead of fifteen because of a Redis layer in front.</p>
      <h3>5. Get render-blocking resources out of the head</h3>
      <p>Every synchronous stylesheet and script in the head delays first paint. Inline the critical CSS, defer the rest, and load third-party scripts after interaction wherever the vendor allows it.</p>

      <h2 id="cls">CLS: things moving after you've started reading</h2>
      <p>Cumulative Layout Shift measures unexpected movement. Target is under 0.1. It's the most preventable of the three and the most annoying to experience, because the thing that moves is usually the thing you were about to tap.</p>
      <p>Causes, in rough order of frequency:</p>
      <ul>
        <li><strong>Images without dimensions.</strong> Set width and height, or an aspect ratio, so the browser reserves the space before the file arrives. Next.js does this for you if you pass both dimensions to the Image component.</li>
        <li><strong>Ads and embeds.</strong> Reserve a fixed slot. If the height varies, reserve the largest plausible height rather than letting the page jump.</li>
        <li><strong>Cookie banners injected at the top.</strong> Overlay them instead of inserting them into the document flow.</li>
        <li><strong>Font swap reflow.</strong> Match the fallback font's metrics to the web font using <code>size-adjust</code> and <code>ascent-override</code>, or use the automatic fallback adjustment Next's font loader generates.</li>
        <li><strong>Content injected above existing content.</strong> A promo bar that loads late, a "you might also like" strip inserted client-side. Reserve the space or render it server-side.</li>
      </ul>
      <p>One detail people miss: CLS is measured across the whole session, not just page load. A layout shift when someone expands an accordion halfway down the page counts. Animate height with <code>transform</code> where you can, since transforms don't trigger layout.</p>

      <h2 id="inp">INP: how long the page takes to respond to a tap</h2>
      <p>Interaction to Next Paint replaced First Input Delay in March 2024, and it's stricter. FID measured only the delay before processing started. INP measures the whole interaction — input delay, processing, and the next paint. Target is 200ms.</p>
      <p>This is the metric most sites now fail, and the cause is almost always JavaScript occupying the main thread.</p>
      <h3>Find the long tasks first</h3>
      <p>DevTools Performance panel, record an interaction, look for tasks over 50ms. On a typical marketing site with a tag manager, two analytics tools, a chat widget, and a consent platform, you'll find plenty.</p>
      <h3>Then, in order</h3>
      <ul>
        <li><strong>Remove third-party scripts you can't justify.</strong> On one store we found two analytics tools loading the same tracking library. Removing the duplicate cost nothing and gave back 340ms of main-thread time.</li>
        <li><strong>Load non-essential scripts after interaction.</strong> Chat widgets, review platforms, and heatmap tools rarely need to be present at first paint. Next's Script component with <code>strategy="lazyOnload"</code> handles most cases.</li>
        <li><strong>Break up your own long tasks.</strong> If a click handler does 300ms of work, yield to the main thread between chunks. <code>scheduler.yield()</code> where supported, <code>setTimeout</code> with zero delay as a fallback.</li>
        <li><strong>Ship less JavaScript.</strong> Server components, dynamic imports for below-the-fold interactivity, and a hard look at any library over 40KB. We benchmarked a charting library on one project and swapped it for a lighter one because the bundle cost outweighed what it added.</li>
        <li><strong>Debounce expensive input handlers.</strong> A search field re-filtering 3,400 products on every keystroke is a guaranteed INP failure. Debounce at 150ms and move the filtering off the main thread if the dataset is large.</li>
      </ul>

      <h2 id="order">The order that actually works</h2>
      <p>When we take on a speed project, this is the sequence, and it's deliberately front-loaded with the cheap wins:</p>
      <ol>
        <li>Pull 28 days of field data and identify which metric fails, on which templates</li>
        <li>Audit third-party scripts and remove or defer everything unjustified</li>
        <li>Fix the image pipeline — format, sizing, priority</li>
        <li>Fix font loading</li>
        <li>Reserve space for everything that loads late</li>
        <li>Reduce first-party JavaScript on the failing templates</li>
        <li>Address server response time, caching, and delivery</li>
        <li>Re-measure in the field after 28 days, not the same afternoon</li>
      </ol>
      <p>Steps two and three usually account for most of the improvement. We've had projects where the third-party audit alone moved a site from failing to passing, which is a slightly deflating result after scoping a fortnight of engineering.</p>

      <h2 id="expectations">What to expect, honestly</h2>
      <p>Field data updates on a rolling 28-day window, so you won't see the improvement immediately no matter how good the fix is. Plan for a month before the Search Console report reflects reality.</p>
      <p>Also: passing Core Web Vitals is not a ranking cheat code. It's a tie-breaker between comparable results and a genuine conversion factor. The commercial argument is the second one. On the store where we took mobile LCP from 5.4 seconds to 1.9, the conversion lift was worth considerably more than any ranking movement.</p>
      <p>And some platforms cap what's achievable. A Shopify store carrying necessary apps, or a WordPress site on shared hosting with a page builder, has a floor you can't engineer past. We'll tell you where that floor is before quoting rather than after.</p>
      <p>If you want to know which metric your site fails and what it would take to fix, our <a href="/services/speed-optimization">speed optimisation</a> work starts with exactly that assessment.</p>
    `,
    imageAlt: "Core Web Vitals field data report showing LCP, CLS, and INP thresholds",
  },

  {
    slug: "nextjs-14-best-practices",
    title: "Next.js App Router: Practices That Hold Up in Production",
    excerpt:
      "Server components, caching, data fetching, and the four mistakes we've made on real App Router projects so you don't have to repeat them.",
    date: "2026-03-24",
    category: "Development",
    featured: true,
    author: "Bilal Rehman",
    authorRole: "Lead Developer",
    readTime: "10 min read",
    tags: ["Next.js", "React", "App Router", "Architecture"],
    relatedServiceSlugs: ["web-development", "custom-development", "speed-optimization"],
    relatedPostSlugs: ["core-web-vitals-guide", "wordpress-vs-webflow-vs-nextjs"],
    relatedProjectSlugs: ["saas-dashboard", "castellan-realty"],
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
      title: "Next.js App Router: Production Practices | Quesiono",
      description:
        "Server components, the caching layers, data fetching patterns, and four App Router mistakes we made on production projects — with what we do instead.",
    },
    content: `
      <p>We've shipped a dozen App Router projects now, from marketing sites to a reporting dashboard serving 500 daily users. This is what we've settled on, including the parts we got wrong first.</p>

      <h2 id="server-default">Keep components on the server until something forces otherwise</h2>
      <p>The default should be a server component. Add <code>"use client"</code> when you need state, an effect, a browser API, or an event handler — not before.</p>
      <p>The mistake we made early was putting <code>"use client"</code> at the top of a page because one child needed interactivity. That pulls the whole subtree into the client bundle. The fix is to push the boundary as far down as it goes: keep the page and its layout on the server, and make the interactive leaf its own client component.</p>
      <p>A concrete example. A listing page with 40 property cards and a filter bar. Wrong version: the page is a client component, so all 40 cards ship as client JavaScript. Right version: the page and cards are server components, and the filter bar is one client component that receives the dataset as a prop. Same behaviour, a fraction of the bundle.</p>

      <h2 id="caching">Understand the four caches before you fight them</h2>
      <p>App Router caching confuses people because there are four distinct layers and the error messages don't tell you which one you're hitting:</p>
      <ul>
        <li><strong>Request memoization</strong> — identical fetches within one render pass are deduplicated automatically. This is why you can call the same data function in a layout and a page without doubling requests.</li>
        <li><strong>Data cache</strong> — persists fetch results across requests and deployments. Controlled per fetch with <code>next: { revalidate }</code> or <code>cache</code>.</li>
        <li><strong>Full route cache</strong> — the rendered HTML and payload for static routes, built at build time.</li>
        <li><strong>Router cache</strong> — client-side, in memory, holds visited route payloads for the session.</li>
      </ul>
      <p>The practical rule: be explicit. Set revalidation on every fetch rather than relying on defaults, because the defaults have changed between versions and will change again. When something serves stale data, work out which layer is holding it before reaching for <code>revalidatePath</code> everywhere.</p>
      <p>For content-driven pages we use time-based revalidation with a webhook-triggered <code>revalidateTag</code> from the CMS. Editors publish, the tag invalidates, the next request rebuilds. No full deploy.</p>

      <h2 id="data-fetching">Fetch where you render, not at the top</h2>
      <p>Coming from the Pages Router the instinct is to gather all data at the page level and pass it down. In App Router that's usually worse.</p>
      <p>Fetch inside the component that needs the data. Request memoization prevents duplicate work, components become self-contained, and you can wrap each one in its own Suspense boundary so a slow section doesn't hold up the fast ones.</p>
      <p>The counter-case: when two sibling components need related data and you want a single query rather than two, hoist it. Don't be dogmatic about it.</p>
      <p>Do watch for the sequential waterfall. Awaiting one fetch and then another in the same component serialises them. If they're independent, <code>Promise.all</code> them.</p>

      <h2 id="streaming">Use Suspense boundaries where the wait is real</h2>
      <p>Streaming is the App Router's best feature and it's easy to under-use. Wrap slow sections in Suspense with a skeleton that matches the final layout's dimensions — matching the dimensions matters, because a skeleton that's the wrong height causes the layout shift you were trying to avoid.</p>
      <p>On the dashboard we built, the shell and navigation render immediately while fifteen chart panels stream in. Time to first paint is under a second even when the slowest query takes three.</p>
      <p>Don't wrap everything. A Suspense boundary around something that resolves in 20ms adds a flash of skeleton for no reason.</p>

      <h2 id="mistake-1">Mistake one: server actions for everything</h2>
      <p>Server actions are excellent for mutations tied to a form. We started using them for data fetching too, because it felt tidy to have one mechanism.</p>
      <p>They're not designed for that. Server actions run sequentially, they don't benefit from the data cache, and debugging a failed action is worse than debugging a route handler. We now use them for mutations and Route Handlers or direct server-component fetches for reads.</p>

      <h2 id="mistake-2">Mistake two: assuming dynamic APIs are free</h2>
      <p>Reading <code>cookies()</code>, <code>headers()</code>, or <code>searchParams</code> opts the entire route into dynamic rendering. We had a marketing page drop out of static generation because a shared analytics helper read a header, and nobody noticed until build output showed it as a lambda.</p>
      <p>Check the build output. Next prints a symbol next to each route showing static, dynamic, or ISR. If a page you expected to be static is dynamic, something is reading a request-time API — trace it before shipping.</p>

      <h2 id="mistake-3">Mistake three: parallel routes for a modal</h2>
      <p>Parallel and intercepting routes are genuinely clever and we reached for them to build a photo lightbox with a shareable URL. It worked. It also took two days, produced a route structure nobody else on the team could follow, and broke in a way that took another half-day to diagnose after a minor version bump.</p>
      <p>We replaced it with a query parameter and a client component in about an hour. The lesson isn't that the feature is bad — it's that a clever routing solution needs to earn its complexity against something simpler.</p>

      <h2 id="mistake-4">Mistake four: not typing the data layer</h2>
      <p>Our first App Router project fetched from a CMS and typed responses as <code>any</code> at the boundary, planning to tighten it later. Later arrived as a runtime error in production when a field was renamed.</p>
      <p>Now every external response goes through a Zod schema at the boundary. It costs an hour per integration and catches the class of bug where the API changed and TypeScript happily compiled anyway.</p>

      <h2 id="images-fonts">Images and fonts: use the built-ins properly</h2>
      <p>The Image component handles format negotiation, sizing, and lazy loading, but only if you feed it correctly. Always pass width and height (or <code>fill</code> with a sized parent), always set <code>sizes</code> when using <code>fill</code>, and set <code>priority</code> on the LCP image.</p>
      <p>On <code>next.config</code>: if you don't serve remote images, don't configure remote patterns. A wildcard hostname combined with <code>dangerouslyAllowSVG</code> lets any origin push a script-bearing SVG through your optimiser. We found exactly that configuration on a site we inherited — including our own, in an early version of this one.</p>
      <p>For fonts, <code>next/font</code> self-hosts and generates a metric-matched fallback, which removes both the third-party request and most of the font-swap layout shift. Load the weights you use and no more.</p>

      <h2 id="build">Read the build output every time</h2>
      <p>Two minutes after every build:</p>
      <ul>
        <li>Which routes are static, dynamic, or ISR — and is that what you intended?</li>
        <li>First-load JS per route. Above 200KB on a content page means something heavy got pulled in.</li>
        <li>New warnings. They're usually the deprecation you'll trip over in three months.</li>
      </ul>
      <p>Most of the performance problems we've caught before launch came from reading that output rather than from profiling.</p>
      <p>If you're planning a Next.js build and want a sanity check on the architecture before committing, our <a href="/services/web-development">web development</a> engagements start with exactly that conversation.</p>
    `,
    imageAlt: "Next.js build output showing static and dynamic route classification",
  },

  {
    slug: "wordpress-vs-webflow-vs-nextjs",
    title: "WordPress vs Webflow vs Next.js: How We Actually Choose",
    excerpt:
      "No winner. Three honest profiles, the cost of each over three years, and the specific questions that decide it.",
    date: "2026-04-14",
    category: "Development",
    featured: false,
    author: "Bilal Rehman",
    authorRole: "Lead Developer",
    readTime: "10 min read",
    tags: ["WordPress", "Webflow", "Next.js", "CMS"],
    relatedServiceSlugs: ["cms-development", "wordpress-development", "web-development", "custom-development"],
    relatedPostSlugs: ["nextjs-14-best-practices", "how-much-does-a-website-cost"],
    relatedProjectSlugs: ["local-restaurant-website", "hartwell-mercer-law"],
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
      title: "WordPress vs Webflow vs Next.js: How We Choose | Quesiono",
      description:
        "Three platform profiles with honest trade-offs, three-year cost comparisons, and the questions that decide which one fits your project.",
    },
    content: `
      <p>We build on all three, which means we have no stake in the answer. What follows is how we actually decide, including the cases where we've talked clients out of the platform they arrived asking for.</p>
      <p>Short version: WordPress if editors publish constantly and you need a plugin ecosystem. Webflow if the site is mostly marketing pages and a designer will own it. Next.js if performance, integrations, or custom logic matter more than editor convenience. Most of the nuance is in what "constantly" and "custom" mean for you.</p>

      <h2 id="wordpress">WordPress</h2>
      <p>Still runs a large share of the web, and for good reason. The editor is familiar, hiring for it is easy, and there's a plugin for nearly everything.</p>
      <h3>Where it's the right answer</h3>
      <ul>
        <li>Multiple editors publishing several times a week</li>
        <li>A content team that already knows the interface and doesn't want retraining</li>
        <li>You need a specific integration — a membership system, an events calendar, a directory — that exists as a mature plugin</li>
        <li>Multilingual content with a translation workflow</li>
      </ul>
      <h3>The honest costs</h3>
      <p>Maintenance is real and continuous. Core, theme, and plugin updates; PHP version upgrades; security patching. A site we took over had 22 plugins, four of them abandoned by their authors, on a PHP version two releases behind. That's not unusual and it's not free to fix.</p>
      <p>Performance takes work. It's achievable — we've hit sub-1.5-second LCP on WordPress — but it means a custom block theme rather than a page builder, aggressive caching, and discipline about plugins. A page builder plus fifteen plugins has a performance ceiling you can't engineer past.</p>
      <p>Budget for maintenance from day one: $20–$75 a month depending on complexity, or the equivalent in someone's internal time. Sites that skip this are the ones that get compromised.</p>
 
      <h2 id="webflow">Webflow</h2>
      <p>A visual builder that produces genuinely decent output, with hosting and a CMS included. Best-in-class for a specific shape of project.</p>
      <h3>Where it's the right answer</h3>
      <ul>
        <li>A marketing site of 10–60 pages with a modest CMS collection</li>
        <li>A designer on your team who'll own ongoing changes without a developer</li>
        <li>Fast turnaround with a small budget and no unusual integrations</li>
        <li>Frequent visual iteration — landing pages, campaign pages, quick tests</li>
      </ul>
      <h3>The honest costs</h3>
      <p>The ceiling arrives suddenly. Complex conditional logic, unusual data relationships, or anything requiring server-side processing means workarounds, third-party services, or a rebuild. We've migrated two projects off Webflow, both because a requirement appeared that the platform couldn't reach.</p>
      <p>Collection limits matter. Webflow caps CMS items per site, and the caps are generous for a blog and restrictive for a catalogue. A 3,400-SKU retailer isn't a Webflow project.</p>
      <p>You're renting. Hosting is bundled and non-negotiable, pricing is per site and scales with traffic and collaborators, and exporting produces static HTML without the CMS. Portability is limited in practice even though it's technically available.</p>

      <h2 id="nextjs">Next.js</h2>
      <p>A React framework, usually paired with a headless CMS. Where we build most of our client work, though not because it's universally better.</p>
      <h3>Where it's the right answer</h3>
      <ul>
        <li>Performance is a commercial requirement, not a preference — ecommerce, property listings, anything where load time maps to revenue</li>
        <li>You need real integrations: an ERP, a practice management system, an MLS feed, a payment flow with custom logic</li>
        <li>Application-like functionality alongside marketing pages — dashboards, portals, calculators</li>
        <li>Large catalogues where static generation and incremental revalidation genuinely help</li>
        <li>You want the content layer decoupled so the front end can be replaced without re-migrating content</li>
      </ul>
      <h3>The honest costs</h3>
      <p>Higher initial build cost. You're paying for development where WordPress and Webflow give you a head start. Expect 1.5–2.5× a comparable WordPress build for the same page count.</p>
      <p>Editing is less immediate. A headless CMS gives editors structured fields, not a visual canvas. Good for consistency, occasionally frustrating for someone who wants to nudge a heading's spacing. We mitigate this with live preview, and it's still a real difference in feel.</p>
      <p>You need a developer for structural changes. Adding a new section type is a code change, not a drag-and-drop. For a business with no technical resource and no agency retainer, that's a genuine dependency worth thinking about honestly.</p>

      <h2 id="cost">Three-year cost, roughly</h2>
      <p>Real numbers from projects we've delivered, for a comparable 25-page business site with a blog. Your figures will differ, but the shape holds.</p>
      <table>
        <thead>
          <tr><th>&nbsp;</th><th>WordPress</th><th>Webflow</th><th>Next.js</th></tr>
        </thead>
        <tbody>
          <tr><td>Initial build</td><td>$2.25k–$4k</td><td>$1.5k–$3k</td><td>$4k–$7.5k</td></tr>
          <tr><td>Hosting, 3 years</td><td>$175–$625</td><td>$275–$725</td><td>$0–$350</td></tr>
          <tr><td>CMS licence, 3 years</td><td>$0–$275</td><td>included</td><td>$0–$1,075</td></tr>
          <tr><td>Maintenance, 3 years</td><td>$875–$2,750</td><td>$0–$725</td><td>$350–$1,450</td></tr>
          <tr><td>Rough total</td><td>$3.25k–$7.75k</td><td>$1.75k–$4.5k</td><td>$4.25k–$10.25k</td></tr>
        </tbody>
      </table>
      <p>Webflow is cheapest over three years for the projects it fits. Next.js costs most up front and least to run. WordPress sits in between with the widest variance, because the maintenance figure depends entirely on how disciplined the build was.</p>

      <h2 id="questions">The questions that actually decide it</h2>
      <p>We ask these on every scoping call:</p>
      <ol>
        <li><strong>How often does content change, and who changes it?</strong> Daily by three people points to WordPress. Monthly by a designer points to Webflow.</li>
        <li><strong>What has to connect to what?</strong> List every system the site must talk to. Two mature-plugin integrations favour WordPress. A bespoke API favours Next.js.</li>
        <li><strong>Is load time commercially material?</strong> For a retailer or a listings site, yes, measurably. For a five-page consultancy site, not really.</li>
        <li><strong>How many content items, realistically, in three years?</strong> Under 200 is fine anywhere. Several thousand rules out some options.</li>
        <li><strong>Who maintains this in eighteen months?</strong> The most-skipped question and often the most important. An internal marketer with no developer access should not inherit a headless build without a support arrangement.</li>
      </ol>

      <h2 id="wrong-reasons">Bad reasons to choose a platform</h2>
      <ul>
        <li><strong>"It's what we've always used."</strong> Fine if the requirements haven't changed. Frequently they have.</li>
        <li><strong>"Our developer prefers it."</strong> Understandable, and not a reason on its own. Ask them to justify it against your requirements.</li>
        <li><strong>"It's the modern option."</strong> Modern is not a requirement. A restaurant needing a fast menu and working bookings does not need React.</li>
        <li><strong>"A blog post said it's faster."</strong> Any of the three can be fast or slow. Implementation quality outweighs platform choice more often than platform advocates admit.</li>
      </ul>
      <p>We've built a restaurant site on WordPress because the manager already knew the editor and edits the menu twelve times a quarter. We've built a property platform on Next.js because a 9.2-second listing page was costing them buyers. Same agency, opposite answers, both correct.</p>
      <p>If you'd like a recommendation for your specific case, <a href="/contact">tell us what the site needs to do</a>. It's a twenty-minute conversation and we'll give you a straight answer, including when the answer is the cheaper platform.</p>
    `,
    imageAlt: "Comparison table of WordPress, Webflow, and Next.js trade-offs",
  },
];
