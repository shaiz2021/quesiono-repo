import type { BlogPost } from "./blog";

/**
 * Design and UX posts. These map to the web-design, ui-ux-design, and
 * landing-page-development service pages, which link back here.
 */
export const designPosts: BlogPost[] = [
  {
    slug: "how-to-build-website-that-converts",
    title: "How to Build a Website That Converts: A Practical Guide",
    excerpt:
      "Most sites that fail to convert aren't ugly. They're unclear. Here's the sequence we follow, and the specific things we measure at each step.",
    date: "2026-03-03",
    category: "Web Design",
    featured: true,
    author: "Rida Malik",
    authorRole: "Design Lead",
    readTime: "9 min read",
    tags: ["Conversion", "Web design", "Copywriting", "Analytics"],
    relatedServiceSlugs: ["web-design", "ui-ux-design", "landing-page-development", "content-writing"],
    relatedPostSlugs: ["ux-design-principles-that-increase-conversions", "website-redesign-checklist"],
    relatedProjectSlugs: ["ecommerce-store", "dazzle-website"],
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
      title: "How to Build a Website That Converts | Quesiono",
      description:
        "The sequence we follow on conversion-focused builds: the one job, the objection audit, page structure, proof, form design, speed, and what to measure after launch.",
    },
    content: `
      <p>We get asked to redesign sites that don't convert, and about half the time the design isn't the problem. The site looks fine. A visitor lands, reads a headline that could belong to any company in the sector, can't tell what happens next, and leaves. That's a clarity failure, and no amount of new typography fixes it.</p>
      <p>Here's the sequence we actually follow, in order, with what we measure at each step.</p>

      <h2 id="one-job">Give the page one job</h2>
      <p>A page with four calls to action has none. Ask what a visitor should do next and write down a single answer. Book a call. Start a trial. Add to cart. Request a quote.</p>
      <p>Everything else on the page is either supporting that action or competing with it. Newsletter signup boxes, chat widgets that open on their own, "follow us" icons above the fold — each one is a fork in the road at the moment you wanted a straight line.</p>
      <p>This gets harder for a homepage serving three audiences. The answer isn't to serve all three equally; it's to pick the most valuable one for the primary path and give the other two a clearly signposted route to their own page. A site that tries to convert everyone converts nobody in particular.</p>

      <h2 id="objection-audit">Audit the objections before you write anything</h2>
      <p>Sit with whoever answers the phone at your company and ask what people ask before they buy. You'll get a list of six to ten questions. That list is your page structure.</p>
      <p>For most of the businesses we work with the list looks something like this:</p>
      <ul>
        <li>What does this cost, roughly?</li>
        <li>How long does it take?</li>
        <li>Have you done this for someone like me?</li>
        <li>What happens if it goes wrong?</li>
        <li>Who exactly will I be dealing with?</li>
        <li>What do you need from me?</li>
      </ul>
      <p>Pages that answer those questions convert better than pages that describe features, because those are the questions standing between a visitor and a decision. If your pricing genuinely can't be published, publish a range and the variables that move it. "Most projects land between $4,000 and $12,500 depending on page count and integrations" is infinitely more useful than "contact us for a quote", and it filters out the enquiries you'd have declined anyway.</p>

      <h2 id="structure">Structure the page as an argument</h2>
      <p>Read a page that converts well and you'll find a sequence rather than a collection of sections. It usually runs:</p>
      <ol>
        <li>What this is, in one sentence a stranger understands</li>
        <li>Who it's for, specifically enough that the wrong person self-selects out</li>
        <li>Proof that it works — a number, a name, a case</li>
        <li>How it works, in three or four steps</li>
        <li>The two or three objections that stop people, answered directly</li>
        <li>What happens when you get in touch</li>
      </ol>
      <p>That's the argument. The design's job is to make each step legible at a glance and to keep the reader moving down it.</p>
      <p>One structural detail worth more than it sounds: put a call to action after the proof section, not only at the bottom. Some visitors are convinced by the third scroll and shouldn't have to hunt for the button.</p>

      <h2 id="headline">Write the headline last, and write it about the reader</h2>
      <p>Headlines written first tend to describe the company. Headlines written after the page exists tend to describe the outcome, because by then you know what the page is actually promising.</p>
      <p>Two versions of the same headline from a project last year:</p>
      <blockquote>
        <p>Before: "Innovative solutions for modern retail."</p>
        <p>After: "Your stock count is wrong in two places at once. We fix that."</p>
      </blockquote>
      <p>The second one loses everybody who doesn't have that problem, which is the point. Enquiries dropped about 15% and qualified enquiries roughly doubled.</p>

      <h2 id="proof">Use proof that survives scrutiny</h2>
      <p>Logo walls do very little on their own. A visitor can't tell whether you built a client's whole platform or fixed their favicon. What works is specific: a number, the context around it, and ideally a name attached.</p>
      <p>"Checkout completion up 31% in ninety days" is proof. "Trusted by industry leaders" is decoration. If you don't have numbers yet, go and get them — email three past clients and ask what changed. It's a week of chasing and it's the highest-value week in most redesigns.</p>
      <p>Where a client won't share numbers, describe the situation and the work honestly without inventing an outcome. An empty claim costs you more credibility than a missing one.</p>

      <h2 id="forms">Design the form like it costs money</h2>
      <p>Because it does. Every field is a small tax on completion, and most forms are collecting things the sales team could ask on the call.</p>
      <p>What we do:</p>
      <ul>
        <li>Cut every field that isn't needed to route or price the enquiry. Company size, job title, and "how did you hear about us" are usually the first three to go.</li>
        <li>Label fields above the input, not inside it. Placeholder-only labels disappear the moment someone starts typing and are a genuine accessibility failure.</li>
        <li>Validate on blur, not on submit, and write errors that say what to do — "Enter an email address like name@company.com", not "Invalid input".</li>
        <li>Tell people what happens next. "We reply within one working day, usually with two or three questions" sets an expectation and reduces the number of people who submit twice.</li>
      </ul>
      <p>There's one exception to the shorter-is-better rule. For high-value, low-volume services — legal work, complex builds, anything with a five-figure minimum — a longer form filters. If someone won't spend four minutes describing their matter, the call was unlikely to go anywhere. We've seen in-scope enquiry rates go from a fifth to seven in ten on the back of a longer, better-structured intake form.</p>

      <h2 id="speed">Fix speed before you fix anything visual</h2>
      <p>Conversion work on a slow site is painting over damp. On mobile, over real network conditions, the difference between a 1.5-second and a 5-second largest contentful paint is a large share of your traffic never seeing the page you optimised.</p>
      <p>The usual culprits, in the order we find them:</p>
      <ul>
        <li>Unoptimised hero images — a 2MB JPEG where a 90KB AVIF would do</li>
        <li>Third-party scripts, especially two analytics tools loading the same library</li>
        <li>Web fonts loading without <code>font-display: swap</code>, blocking text render</li>
        <li>Layout shift from images and embeds without reserved dimensions</li>
      </ul>
      <p>None of that is glamorous and all of it moves the number. On one store we removed four apps and took mobile LCP from 5.4 seconds to 1.9, which produced more conversion lift than any design change in the same project.</p>

      <h2 id="measure">Instrument it, then leave it alone for a month</h2>
      <p>Set up events for the actions that matter — form submits, calls, add-to-cart, trial starts — and verify they fire correctly before launch. Half the analytics setups we inherit are quietly broken, usually double-counting or missing the mobile path entirely.</p>
      <p>Then resist the urge to change things weekly. Traffic is noisy, and a fortnight of data on a mid-sized site tells you almost nothing. Give it four weeks, look at where people leave, and fix that one step.</p>
      <p>Two numbers worth watching beyond conversion rate:</p>
      <ul>
        <li><strong>Scroll depth on the primary page.</strong> If most people stop at 40%, your argument breaks at 40%.</li>
        <li><strong>Enquiry quality.</strong> Track how many enquiries are in scope, not just how many arrive. Volume can rise while revenue falls.</li>
      </ul>

      <h2 id="honest-part">The honest part</h2>
      <p>A conversion-focused rebuild takes six to ten weeks for a typical business site, and most of the first three weeks is research and writing rather than design. Anyone quoting two weeks is skipping the objection audit, and that's the part that does the work.</p>
      <p>You also won't get one clean before-and-after number, because you'll change several things at once. That's a reasonable trade — sequential testing on a site with 20,000 monthly sessions would take a year to reach significance on a single element. Change the whole page, measure the whole page, and be honest about the attribution.</p>
      <p>If you want a second opinion on where your current site is losing people, <a href="/contact">send us the URL</a>. We'll tell you what we'd change first, and it's frequently cheaper than a rebuild.</p>
    `,
    imageAlt: "Wireframe of a conversion-focused landing page with annotated sections",
  },

  {
    slug: "ux-design-principles-that-increase-conversions",
    title: "Nine UX Principles That Actually Move Conversion",
    excerpt:
      "Not a list of best practices. Nine specific patterns we've measured, with the numbers we saw and the two that didn't work.",
    date: "2026-05-05",
    category: "Web Design",
    featured: false,
    author: "Rida Malik",
    authorRole: "Design Lead",
    readTime: "8 min read",
    tags: ["UX", "Usability", "Accessibility", "Forms"],
    relatedServiceSlugs: ["ui-ux-design", "web-design", "ecommerce-development"],
    relatedPostSlugs: ["how-to-build-website-that-converts", "website-redesign-checklist"],
    relatedProjectSlugs: ["northgate-dental", "ecommerce-store"],
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
      title: "9 UX Principles That Increase Conversions | Quesiono",
      description:
        "Nine UX patterns we've measured on real projects — cost transparency, one-column forms, real availability, and the two changes that made no difference at all.",
    },
    content: `
      <p>UX advice tends to arrive as a list of things that are obviously true and impossible to argue with. Reduce friction. Be consistent. Respect the user. All correct, none actionable.</p>
      <p>These nine are specific. Each one is something we've shipped and measured, and two of them are included because they didn't work.</p>

      <h2 id="cost-early">1. Show cost before you ask for anything</h2>
      <p>The largest single drop-off we've measured in a checkout was at the step where shipping cost first appeared. Fifth step of five, after the address form. People had committed emotionally and then found out the total, and a lot of them left annoyed.</p>
      <p>Moving shipping cost onto the cart page, before any personal detail is requested, lifted checkout completion 31% on that store. The same principle applies to services: a price range on the page beats a price revealed on the call.</p>
      <p>People don't leave because something is expensive. They leave because they feel a number was withheld.</p>

      <h2 id="one-column">2. One column in forms, labels above fields</h2>
      <p>Two-column forms look tidier and read worse. The eye has to decide whether to go right or down at every row, and on mobile the layout collapses into an order nobody designed.</p>
      <p>Labels belong above the input. Placeholder text as the only label vanishes when typing starts, which means anyone who gets interrupted mid-form has to clear the field to remember what it wanted. It also fails screen readers outright.</p>
      <p>This is the least controversial item on the list and it's still wrong on maybe half the forms we audit.</p>

      <h2 id="real-availability">3. Real availability beats a callback promise</h2>
      <p>"Request an appointment and we'll call you within two working days" is a form pretending to be a booking. For a dental group we connected the site to their practice management system so patients see genuine slots per clinician. Online bookings went from zero to about 62% of new patients, and reception call volume dropped 34%.</p>
      <p>Where an integration genuinely isn't available, be specific instead of vague. "We'll call you before 5pm tomorrow" is a promise. "Shortly" is a shrug.</p>

      <h2 id="filters-that-match">4. Filter on the attributes people actually decide with</h2>
      <p>An outdoor retailer we worked with had 3,400 products filterable by price, brand, and size. Their customers choose technical kit on waterproof rating, fill power, and pack weight — none of which existed as data. It was all written into description paragraphs.</p>
      <p>Four of the project's ten weeks went into restructuring product attributes. Dull work. Search-to-purchase rate nearly tripled afterwards, and search users went from converting worse than non-search users to converting better.</p>
      <p>The lesson generalises: a filter is only useful if it matches the criterion the buyer already has in their head.</p>

      <h2 id="contrast">5. Compute contrast, don't eyeball it</h2>
      <p>Light grey text on white looks refined on a calibrated monitor in a dark room. It's unreadable on a phone in daylight, and it fails WCAG.</p>
      <p>We check every text-on-background pair numerically before it enters a palette. The threshold is 4.5:1 for body text at normal size, 3:1 for large text. One clinic site we took over had body copy at 2.9:1, which for a patient base skewing older was actively excluding the audience the site existed to serve.</p>
      <p>Accessibility gets framed as a compliance cost. It's mostly just legibility, and legibility converts.</p>

      <h2 id="tap-targets">6. Design the thumb path, not the cursor path</h2>
      <p>Most of our clients see 70–85% mobile traffic and most sites are still designed at desktop width first, then checked on a phone at the end.</p>
      <p>Practical version: primary actions in the lower two-thirds of the screen where a thumb reaches, tap targets at least 44px, and no important control in the top corners on a large phone. For a restaurant we put menu, hours, call, and directions within one tap from every page — those four things are 90% of what anyone wants at 6:40pm.</p>

      <h2 id="loading">7. Reserve space for anything that loads late</h2>
      <p>Layout shift is the most irritating bug on the web and it's entirely preventable. An image without dimensions, an ad slot, a cookie banner that pushes content down, a font swap that reflows a paragraph — each one moves the thing someone was about to tap.</p>
      <p>Set explicit width and height on images, reserve the banner's height, and use <code>font-display: swap</code> with a matched fallback metric. Cumulative Layout Shift under 0.1 is the target and it's achievable on any site if you care.</p>

      <h2 id="didnt-work-1">8. What didn't work: urgency timers</h2>
      <p>We tested a countdown timer on a promotional landing page — the standard "offer ends in 04:59" pattern. Conversion moved 0.4% against a control, well inside noise, and support tickets asking whether the deal was real went up.</p>
      <p>Manufactured scarcity works in specific contexts, mostly where the scarcity is true. Genuine stock levels ("3 left in your size") did help on a retail project. A timer that resets when you reload teaches people not to believe your site.</p>

      <h2 id="didnt-work-2">9. What didn't work: the exit-intent popup</h2>
      <p>We were asked to add one, said we'd measure it, and ran it for six weeks. It collected email addresses at a decent rate. It also correlated with a measurable drop in return visits, and the list it built converted at roughly a fifth the rate of the site's normal enquiry path.</p>
      <p>Net effect after ninety days was negative and we removed it. Popups that interrupt a first visit buy a cheap metric with an expensive one.</p>

      <h2 id="pattern">The pattern underneath</h2>
      <p>Seven of these work and two don't, and the split isn't random. The ones that work remove something standing between a person and a decision — a hidden cost, a missing field, an unreadable line of text. The ones that fail try to manufacture a feeling the visitor doesn't have.</p>
      <p>That's the whole test. When you're deciding between two design options, ask which one removes an obstacle and which one adds pressure. The first one wins more often than the second, and it keeps winning after the novelty wears off.</p>
      <p>If you'd like us to run this list against your own site, our <a href="/services/ui-ux-design">UX audit</a> does exactly that — usually two weeks, with a prioritised list at the end.</p>
    `,
    imageAlt: "Side-by-side comparison of a two-column and one-column form layout",
  },

  {
    slug: "website-redesign-checklist",
    title: "The Website Redesign Checklist We Actually Use",
    excerpt:
      "Redesigns lose traffic when nobody owns the boring parts. This is the checklist we run before, during, and after — including the redirect map that saves the project.",
    date: "2026-06-16",
    category: "Web Design",
    featured: false,
    author: "Rida Malik",
    authorRole: "Design Lead",
    readTime: "10 min read",
    tags: ["Redesign", "Migration", "SEO", "Project management"],
    relatedServiceSlugs: ["web-design", "web-development", "technical-seo", "cms-development"],
    relatedPostSlugs: ["how-to-build-website-that-converts", "technical-seo-audit-checklist"],
    relatedProjectSlugs: ["castellan-realty", "dazzle-website"],
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
      title: "The Website Redesign Checklist We Actually Use | Quesiono",
      description:
        "A phase-by-phase redesign checklist — baseline metrics, full URL inventory, the redirect map, launch-day verification, and the 30-day watch list.",
    },
    content: `
      <p>Redesigns go wrong in a predictable way. The new site looks better, everyone's pleased for a fortnight, and then someone notices organic traffic is down 40% and nobody can say exactly when it started.</p>
      <p>It's almost never the design. It's a URL that changed without a redirect, a staging site that got indexed, or a page that used to rank and quietly stopped existing. This checklist exists because those failures are boring, avoidable, and expensive.</p>

      <h2 id="before-baseline">Before: record the baseline</h2>
      <p>You cannot tell whether a redesign worked if you didn't write down what it replaced. Capture these before a single design file opens:</p>
      <ul>
        <li>Organic sessions, month by month, for the last 13 months — you need last year's same month for comparison</li>
        <li>Your top 50 landing pages by organic traffic, with their entry keywords</li>
        <li>Current conversion rate, per page, for whatever counts as a conversion</li>
        <li>Core Web Vitals from Search Console field data, not lab data</li>
        <li>Total indexed pages, and how many are getting impressions</li>
      </ul>
      <p>Take screenshots of the analytics views, not just the numbers. Reporting tools change and you'll want the receipt in six months.</p>

      <h2 id="before-inventory">Before: inventory every URL</h2>
      <p>This is the single most important item on the list and it's the one most often skipped.</p>
      <p>Crawl the existing site — Screaming Frog, Sitebulb, whatever you have — and export every URL. Then supplement it, because a crawl misses things:</p>
      <ul>
        <li>Search Console's page report, which knows about URLs your crawl can't reach</li>
        <li>Server logs, for pages with no internal links but real traffic</li>
        <li>Your backlink tool, for URLs other sites point at</li>
        <li>Old sitemap files, including ones nobody's regenerated in two years</li>
      </ul>
      <p>On a property client's site this exercise turned up around 300 sold-listing URLs that had been configured to return 404 on the day of sale. Four years of accumulated links, thrown away automatically. Recovering them was one of the highest-value things in that project and none of it would have surfaced from a crawl alone.</p>

      <h2 id="before-decide">Before: decide what dies</h2>
      <p>Not every page should survive. Go through the inventory and mark each URL:</p>
      <ul>
        <li><strong>Keep</strong> — has traffic, links, or a job to do</li>
        <li><strong>Merge</strong> — thin, overlapping with something better; redirect into the survivor</li>
        <li><strong>Rewrite</strong> — right topic, bad execution; keep the URL, replace the content</li>
        <li><strong>Retire</strong> — genuinely obsolete, no traffic, no links; 410 or redirect to the nearest relevant page</li>
      </ul>
      <p>Be honest in the merge column. Three thin pages about the same service compete with each other, and merging them into one substantive page usually outperforms all three combined. Just make sure the URL you keep is the one with the links.</p>

      <h2 id="during-redirects">During: build the redirect map as you go</h2>
      <p>The redirect map is a spreadsheet with two columns: old URL, new URL. Every single row from your inventory needs a destination. Not the homepage — the closest equivalent page. Mass-redirecting to the homepage is treated as a soft 404 and loses the value you were trying to keep.</p>
      <p>Rules we hold to:</p>
      <ul>
        <li>301, not 302, unless the change is genuinely temporary</li>
        <li>One hop. Redirect chains dilute and slow things down; if an old URL already redirects, point the new rule at the final destination</li>
        <li>No redirect loops — sounds obvious, happens constantly with trailing-slash and case rules</li>
        <li>Test the map on staging with a crawler before launch, not after</li>
      </ul>
      <p>If the URL structure doesn't need to change, don't change it. "Nicer URLs" is rarely worth the risk on a site with existing authority.</p>

      <h2 id="during-content">During: keep what already ranks</h2>
      <p>Designers rewrite headings. It's an instinct. But if a page ranks for a term, its title tag and H1 are part of why.</p>
      <p>Before rewriting any page in the top-50 list, check what it ranks for. Then either keep the title and H1 close to the original, or make the change deliberately and accept a few weeks of movement. What you don't want is thirty page titles changing as a side effect of a tone-of-voice pass nobody connected to search performance.</p>
      <p>Same goes for internal links. A page's rankings depend partly on how many internal links point at it and what they say. New navigation that drops a section from the menu quietly demotes everything in it.</p>

      <h2 id="during-staging">During: keep staging out of the index</h2>
      <p>Every agency has done this once. Staging site indexed, duplicate content everywhere, and a period of confusion while Google decides which version is canonical.</p>
      <p>Use HTTP authentication on staging. Not <code>robots.txt</code>, not a meta noindex — actual authentication, because those two can be misconfigured and often are. And check before launch whether any staging URLs are already indexed; if they are, remove them through Search Console rather than hoping.</p>

      <h2 id="launch-day">Launch day: the verification pass</h2>
      <p>Launch in the morning, not on Friday afternoon. Then, in this order:</p>
      <ol>
        <li>Crawl the live site and confirm zero unexpected 404s or 500s</li>
        <li>Spot-check 20 redirects from the map by hand, including the deepest URLs</li>
        <li>Confirm <code>robots.txt</code> allows crawling and doesn't still carry the staging block</li>
        <li>Check every canonical tag points at the live URL, not staging</li>
        <li>Confirm the noindex tag from staging is gone. Check the built HTML, not the CMS setting</li>
        <li>Submit the new sitemap in Search Console</li>
        <li>Verify analytics and conversion events fire on the new templates — they break on redesigns more often than not</li>
        <li>Test every form, including the failure paths. Submit an invalid payload and confirm you see a real error rather than a false success</li>
        <li>Run Lighthouse on mobile for four page types and record the numbers</li>
      </ol>
      <p>That's about two hours of work. It's the cheapest insurance in the project.</p>

      <h2 id="after">After: the 30-day watch list</h2>
      <p>Expect movement. On a small site, a week or two. On a large catalogue, three to six weeks while everything gets recrawled. A 10–20% dip in the first fortnight is normal and usually recovers.</p>
      <p>What isn't normal, and what to check weekly:</p>
      <ul>
        <li><strong>Coverage errors in Search Console.</strong> A spike in "not found" means a redirect is missing.</li>
        <li><strong>Indexed page count.</strong> If it drops sharply and stays down, something is blocking crawling.</li>
        <li><strong>Top landing pages.</strong> Compare against your baseline list. A page that vanished entirely is a specific, fixable problem.</li>
        <li><strong>Conversion rate per template.</strong> Aggregate numbers hide a single broken template.</li>
        <li><strong>404 logs.</strong> Real user traffic hitting missing pages, which is your redirect map's homework marked for you.</li>
      </ul>
      <p>If traffic hasn't recovered after six weeks, stop waiting and audit. It's a problem, not a settling period.</p>

      <h2 id="honest">What this costs in time</h2>
      <p>The checklist above adds roughly a week of work to a redesign — two days of inventory and baseline, two days of redirect mapping and testing, half a day on launch verification, and an hour a week for a month afterwards.</p>
      <p>One redesign we were asked to rescue had skipped all of it. Recovering the lost traffic took four months and cost more than the original build. A week up front is a good trade.</p>
      <p>We run this on every migration we do. If you're planning a redesign and want a second pair of eyes on the URL inventory before you commit, <a href="/contact">get in touch</a> — it's a short piece of work and it's the part that decides the outcome.</p>
    `,
    imageAlt: "Redirect map spreadsheet beside a pre-launch verification checklist",
  },
];
