import type { BlogPost } from "./blog";

/** Search posts. These carry the SEO service cluster's supporting content. */
export const seoPosts: BlogPost[] = [
  {
    slug: "technical-seo-audit-checklist",
    title: "The Technical SEO Audit Checklist We Run Before Anything Else",
    excerpt:
      "Crawling, indexing, duplication, structured data, and speed — in the order that matters, with the specific problems we find most often.",
    date: "2026-07-07",
    category: "SEO",
    featured: true,
    author: "Ayesha Nadeem",
    authorRole: "SEO Lead",
    readTime: "11 min read",
    tags: ["Technical SEO", "Crawling", "Indexing", "Structured data"],
    relatedServiceSlugs: ["technical-seo", "seo", "speed-optimization", "ecommerce-seo"],
    relatedPostSlugs: ["core-web-vitals-guide", "seo-basics-getting-started-2025"],
    relatedProjectSlugs: ["castellan-realty", "coastline-outfitters"],
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
      title: "Technical SEO Audit Checklist | Quesiono",
      description:
        "The technical SEO audit we run first — crawlability, indexing, duplication, internal linking, structured data, and speed, ordered by what actually blocks rankings.",
    },
    content: `
      <p>Content and links do nothing on a site Google can't crawl properly. That's why technical work goes first, and why an audit that opens with a keyword gap analysis is starting in the wrong place.</p>
      <p>This is our actual running order. Each section has the problems we find most often, because after a few dozen audits the same handful accounts for most of the damage.</p>

      <h2 id="crawl">1. Can search engines reach your pages?</h2>
      <p>Start with a full crawl and compare it against what Search Console reports. Where the two disagree, there's a story.</p>
      <h3>The usual problems</h3>
      <ul>
        <li><strong>A robots.txt rule blocking something important.</strong> Most commonly a <code>Disallow</code> left over from a staging environment, or a broad rule blocking a directory that now holds real pages.</li>
        <li><strong>Orphan pages.</strong> Pages with no internal links pointing at them. They exist, they're sometimes in the sitemap, and they get crawled rarely and ranked poorly. Compare the crawl against the CMS's full page list to find them.</li>
        <li><strong>Crawl waste.</strong> On one retail site, faceted navigation was generating tens of thousands of filter combinations as crawlable URLs. Google spent its crawl budget on <code>?colour=blue&amp;size=m&amp;sort=price</code> permutations and visited the actual product pages weekly instead of daily.</li>
        <li><strong>Redirect chains.</strong> Three hops to reach a destination wastes crawl budget and loses a little value at each step. Point every rule at the final URL.</li>
        <li><strong>Broken internal links.</strong> A 404 with internal links pointing at it is a dead end you built yourself.</li>
      </ul>
      <p>Check server logs if you can get them. They tell you what Googlebot actually requested, which is more useful than any inference from a crawl.</p>

      <h2 id="index">2. Are the right pages indexed, and only those?</h2>
      <p>Search Console's page indexing report is the single most useful screen in SEO and most people never open it beyond the summary.</p>
      <p>What to look at, category by category:</p>
      <ul>
        <li><strong>"Crawled — currently not indexed"</strong> usually means quality or duplication. Google saw the page and decided it wasn't worth storing. Thin pages, near-duplicates, and auto-generated location pages live here.</li>
        <li><strong>"Discovered — currently not indexed"</strong> means Google knows about the URL and hasn't crawled it. Often a crawl budget symptom on large sites.</li>
        <li><strong>"Duplicate, Google chose a different canonical"</strong> means your canonical hint was overruled. Worth understanding rather than ignoring — Google is telling you two pages look the same to it.</li>
        <li><strong>"Excluded by noindex"</strong> — verify every one of these is deliberate. A noindex left on after launch is the most expensive two-word bug in web development.</li>
      </ul>
      <p>Also check the indexed count against your expected page count. Wildly higher means duplication. Much lower means a crawling or quality problem.</p>

      <h2 id="duplication">3. Duplication and canonicals</h2>
      <p>Most duplication isn't plagiarism — it's the same page reachable at several URLs.</p>
      <p>Test each of these and confirm they resolve to one canonical version:</p>
      <ul>
        <li><code>http</code> and <code>https</code></li>
        <li><code>www</code> and non-<code>www</code></li>
        <li>Trailing slash and no trailing slash</li>
        <li>Uppercase and lowercase paths</li>
        <li>Index filenames — <code>/about</code> versus <code>/about/index.html</code></li>
        <li>URLs with tracking parameters appended</li>
        <li>Pagination, and whether page two carries a self-referencing canonical (it should)</li>
      </ul>
      <p>For faceted navigation, decide deliberately which filter combinations deserve to be indexed. A category plus one filter is often a real search term worth a page. Three stacked filters almost never is. Canonical the rest back to the base category and keep them out of the sitemap.</p>

      <h2 id="architecture">4. Site architecture and internal linking</h2>
      <p>Internal links tell Google what matters and what a page is about. They're also the lever you fully control, which makes them the most under-used asset in most SEO programmes.</p>
      <p>Check:</p>
      <ul>
        <li><strong>Click depth.</strong> Important pages should be within three clicks of the homepage. Deeper than that and they get crawled less.</li>
        <li><strong>Links per page.</strong> A page with 300 links distributes very little through each. Mega-menus are the usual culprit.</li>
        <li><strong>Anchor text.</strong> "Click here" tells Google nothing. Descriptive anchors are a ranking signal you're allowed to write yourself.</li>
        <li><strong>Orphaned money pages.</strong> We've found service pages with exactly one internal link, from the sitemap. Those pages had no chance.</li>
        <li><strong>Whether the navigation matches the priorities.</strong> If a section isn't in the menu, everything in it is demoted.</li>
      </ul>
      <p>On a law firm project, adding proper cross-links between practice area pages and the related commentary posts moved five of seven pages onto page one within four months, with no new content and no link building.</p>

      <h2 id="structured-data">5. Structured data</h2>
      <p>Structured data doesn't improve rankings directly. It makes you eligible for rich results, which improves click-through, which is worth having.</p>
      <p>What to check:</p>
      <ul>
        <li><strong>Does it validate?</strong> Use the Rich Results Test, not just a JSON-LD linter. Valid JSON that Google can't use is wasted effort.</li>
        <li><strong>Does it match the visible page?</strong> Marking up a price that isn't on the page, or an FAQ that doesn't exist in the content, risks a manual action.</li>
        <li><strong>Are the types right for the page?</strong> Organization and WebSite site-wide. Product on product pages. Article on posts. LocalBusiness with real opening hours if you have premises. BreadcrumbList wherever there's a hierarchy.</li>
        <li><strong>Are entities connected?</strong> Using <code>@id</code> references so your Organization node is one entity referenced everywhere, rather than a fresh unrelated block on every page.</li>
      </ul>
      <p>One thing we won't do: <code>AggregateRating</code> without verifiable reviews on the page. It's explicitly against Google's structured data policies and it's a common cause of manual actions on small business sites. Plenty of agencies add it anyway.</p>

      <h2 id="speed">6. Speed and Core Web Vitals</h2>
      <p>Field data from Search Console, not a Lighthouse run on your laptop. Check per-template — aggregate numbers hide a single failing template that happens to be your most valuable one.</p>
      <p>If a metric fails, the causes are well-mapped and we've written them up in detail in our <a href="/blog/core-web-vitals-guide">Core Web Vitals guide</a>. The short version: LCP is usually images or server response, CLS is usually missing dimensions, INP is almost always third-party JavaScript.</p>

      <h2 id="mobile">7. Mobile and rendering</h2>
      <p>Indexing is mobile-first, so the mobile version of your page is the version that counts.</p>
      <ul>
        <li>Confirm mobile and desktop serve the same content. Content hidden on mobile is content Google may not see.</li>
        <li>Check that JavaScript-rendered content appears in the rendered HTML. Use the URL Inspection tool's rendered output rather than trusting that it works.</li>
        <li>Look for viewport issues, tap targets under 44px, and horizontal scroll at 375px.</li>
        <li>Verify structured data is present in the mobile rendering, not injected only on desktop.</li>
      </ul>

      <h2 id="international">8. Multi-region and multi-language, if applicable</h2>
      <p>Skip this if you serve one market. If you don't:</p>
      <ul>
        <li><code>hreflang</code> tags must be reciprocal — if A points to B, B must point back to A. Non-reciprocal hreflang is ignored.</li>
        <li>Include a self-referencing hreflang on every page in the set.</li>
        <li>Use <code>x-default</code> for the fallback.</li>
        <li>Don't rely on IP redirection alone. It stops Googlebot seeing the other versions.</li>
      </ul>

      <h2 id="priority">Fixing in the right order</h2>
      <p>An audit that returns 140 issues is not useful. What matters is sequence:</p>
      <ol>
        <li><strong>Anything blocking indexing of a valuable page.</strong> A stray noindex or robots rule. Fix today.</li>
        <li><strong>Duplication sending signals to the wrong URL.</strong> Fix this week.</li>
        <li><strong>Crawl waste on a large site.</strong> Fix before adding content.</li>
        <li><strong>Internal linking to money pages.</strong> Cheap, high-return, usually a day's work.</li>
        <li><strong>Core Web Vitals failures.</strong> Real but slower to show results.</li>
        <li><strong>Structured data coverage.</strong> Worth doing, rarely urgent.</li>
      </ol>
      <p>We deliver audits as a prioritised list with an effort estimate against each item, because a client with two developer days needs to know which three things to do rather than all 140.</p>
      <p>Our <a href="/services/seo/technical-seo">technical SEO</a> engagements start with this audit, and we'll tell you honestly when the answer is "your technical setup is fine, spend the money on content instead."</p>
    `,
    imageAlt: "Search Console page indexing report beside a crawl diagram",
  },

  {
    slug: "seo-basics-getting-started-2025",
    title: "SEO Basics: A Realistic Start for a Small Business",
    excerpt:
      "What to do in your first ninety days, in order, with honest timelines. No tool subscriptions required for the first month.",
    date: "2025-12-09",
    category: "SEO",
    featured: false,
    author: "Ayesha Nadeem",
    authorRole: "SEO Lead",
    readTime: "9 min read",
    tags: ["SEO", "Keyword research", "Beginners", "Search Console"],
    relatedServiceSlugs: ["seo", "keyword-research", "on-page-seo", "local-seo"],
    relatedPostSlugs: ["technical-seo-audit-checklist", "local-seo-strategy-small-business"],
    relatedProjectSlugs: ["hartwell-mercer-law", "local-restaurant-website"],
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
      title: "SEO Basics: A Realistic Start for Small Business | Quesiono",
      description:
        "A ninety-day SEO plan for a small business — what to set up, how to find keywords worth targeting, what to write first, and how long results actually take.",
    },
    content: `
      <p>Most SEO advice for beginners is written for people who already do SEO. This is for a business owner with a website, limited time, and a reasonable suspicion that the whole field is oversold.</p>
      <p>Some of that suspicion is warranted. SEO is slower than any agency's pitch deck implies, and a meaningful share of what gets sold as SEO is busywork. What follows is what actually matters in the first three months.</p>

      <h2 id="expectations">First, the timeline</h2>
      <p>You will not see results in a month. On a new site, expect four to six months before organic traffic becomes a meaningful channel, and eight to twelve months for competitive terms. On an established site with existing authority, three to four months for noticeable movement.</p>
      <p>Anyone promising page one in thirty days is either targeting a term nobody searches or planning to do something that gets you penalised. Both happen regularly.</p>
      <p>The upside is durability. A page that ranks well keeps delivering for years without further spend, which is the opposite of paid advertising. That's the actual case for SEO — not speed.</p>

      <h2 id="setup">Weeks one and two: set up the measurement</h2>
      <p>You can't manage what you can't see, and both of these are free.</p>
      <h3>Google Search Console</h3>
      <p>Verify your site and leave it running. After a few weeks it shows you which queries you appear for, your average position, your click-through rate, and which pages Google has indexed. This is the only source of true keyword data for your site — everything else is estimated.</p>
      <p>The Performance report is where to spend your time. Look for queries where you rank between positions 5 and 15. Those are pages Google already considers relevant, and a modest improvement moves them into the range where people actually click.</p>
      <h3>Analytics</h3>
      <p>GA4 or a lighter alternative. What matters is that conversions are tracked — form submissions, calls, purchases. Traffic without conversion data tells you nothing about whether SEO is working commercially.</p>
      <p>Verify the events fire. Roughly half the analytics setups we inherit are quietly broken, usually missing the mobile path.</p>

      <h2 id="keywords">Weeks two and three: find terms worth targeting</h2>
      <p>Keyword research gets overcomplicated. Here's the version that works without a paid tool.</p>
      <ol>
        <li><strong>Write down what you sell, in customer words.</strong> Not your internal terminology. A dental client had a page titled "Restorative Indirect Restorations" and their patients search "cracked tooth". One of those ranks.</li>
        <li><strong>Add the modifiers people actually type.</strong> Location ("in Manchester"), intent ("cost", "near me", "vs"), and qualifiers ("for small business", "emergency").</li>
        <li><strong>Check what Google suggests.</strong> Type your term and read the autocomplete, the "People also ask" box, and the related searches at the bottom. That's free keyword data straight from the source.</li>
        <li><strong>Look at who ranks.</strong> If page one is Wikipedia, Amazon, and three national publications, pick a different term. If it's businesses your size, you have a chance.</li>
        <li><strong>Read the results to understand intent.</strong> If the top results are all buying guides, Google has decided that query wants a guide. A product page will not rank there no matter how well optimised.</li>
      </ol>
      <p>Aim for five to ten terms to start. Specific beats broad — "commercial lease dispute solicitor Manchester" has less volume than "solicitor" and you might actually rank for it, and the people searching it are ready to hire.</p>

      <h2 id="onpage">Weeks three and four: fix your existing pages</h2>
      <p>Before writing anything new, improve what exists. It's faster and it usually produces the first results.</p>
      <p>For each of your five most important pages:</p>
      <ul>
        <li><strong>Title tag.</strong> Around 55–60 characters, primary term near the front, written for a human. This is the headline in search results and it drives click-through.</li>
        <li><strong>Meta description.</strong> 140–155 characters. Doesn't affect rankings; does affect whether anyone clicks. Write it like ad copy.</li>
        <li><strong>One H1 per page,</strong> containing the primary term naturally.</li>
        <li><strong>Subheadings that cover the sub-questions.</strong> If people ask about cost, have a heading about cost.</li>
        <li><strong>Enough substance to answer the query.</strong> Not a word count target — a completeness test. Read the page and ask whether someone with that question leaves satisfied.</li>
        <li><strong>Internal links in, with descriptive anchors.</strong> Link from your homepage and related pages using the actual term rather than "read more".</li>
        <li><strong>Image alt text</strong> that describes the image. Accessibility first, search second.</li>
      </ul>
      <p>What not to do: repeat your keyword fifteen times. Google has handled that since roughly 2012, and it reads badly to the human you're trying to convince.</p>

      <h2 id="local">Week four, if you serve a local area</h2>
      <p>For a business with premises or a service area, your Google Business Profile will out-perform your website in the early months. It's free and most businesses set it up badly.</p>
      <ul>
        <li>Pick the most specific primary category available, then add secondary ones</li>
        <li>Complete every field — hours, services, attributes, description</li>
        <li>Add real photos, not stock, and keep adding them monthly</li>
        <li>Ask satisfied customers for reviews, consistently, as part of your normal process</li>
        <li>Respond to every review including the critical ones. A calm, specific reply reassures the next reader more than a wall of five stars</li>
      </ul>
      <p>We cover this in depth in our <a href="/blog/local-seo-strategy-small-business">local SEO guide</a>.</p>

      <h2 id="content">Months two and three: write the pages you're missing</h2>
      <p>Now create. Two kinds of page, in this order:</p>
      <p><strong>Service or product pages</strong> for anything you sell that doesn't have its own page. One page listing eight services competes for nothing. Each real service needs its own page built around what prospects search and the questions they ask before buying.</p>
      <p><strong>Answers to the questions you get asked.</strong> Every question a prospect asks on the phone is a question someone is typing into Google. "How much does X cost", "how long does X take", "X vs Y". These convert well because the person asking is already in the market.</p>
      <p>Two good pages a month beats eight thin ones. We've watched sites publish three posts a week for a year and rank for nothing, because none of the posts was better than what already ranked.</p>

      <h2 id="skip">What to ignore for now</h2>
      <ul>
        <li><strong>Link building.</strong> It matters, and it's the hardest thing to do well and the easiest to do harmfully. Get the fundamentals right first. Links come partly on their own once you have something worth linking to.</li>
        <li><strong>Paid tools.</strong> Search Console and Google's own suggestions are enough for your first three months. Buy a tool when you have a reason, not before.</li>
        <li><strong>Domain authority scores.</strong> A third-party metric, not a Google signal. Useful for rough comparison, meaningless as a target.</li>
        <li><strong>Publishing frequency for its own sake.</strong> Nobody ranks for trying hard.</li>
        <li><strong>Anyone offering to submit your site to 500 directories.</strong> That's 2006 spam and it can hurt you.</li>
      </ul>

      <h2 id="ninety-days">What ninety days should look like</h2>
      <p>Realistic outcomes for a small business site starting from a reasonable technical base:</p>
      <ul>
        <li>Measurement in place and trustworthy</li>
        <li>Your top five pages properly optimised, with a few terms moving from position 12ish to position 6ish</li>
        <li>Three to six new pages published, starting to gather impressions</li>
        <li>A local profile that's working, if applicable — often the first real lead source</li>
        <li>A clear list of what to do next, based on your own Search Console data rather than a template</li>
      </ul>
      <p>That's a foundation, not a finished job. The compounding starts around month four, and it's worth waiting for.</p>
      <p>If you'd rather not run this yourself, that's what our <a href="/services/seo">SEO service</a> does — and we'll tell you honestly if your site isn't ready for it yet.</p>
    `,
    imageAlt: "Search Console performance report highlighting queries in positions five to fifteen",
  },

  {
    slug: "local-seo-strategy-small-business",
    title: "Local SEO: How to Show Up When Someone Nearby Is Searching",
    excerpt:
      "The map pack is where local demand lives. Here's how it's ranked, what to fix first, and the review process that quietly does most of the work.",
    date: "2026-02-10",
    category: "SEO",
    featured: false,
    author: "Ayesha Nadeem",
    authorRole: "SEO Lead",
    readTime: "9 min read",
    tags: ["Local SEO", "Google Business Profile", "Reviews", "Citations"],
    relatedServiceSlugs: ["local-seo", "seo", "on-page-seo", "web-design"],
    relatedPostSlugs: ["seo-basics-getting-started-2025", "technical-seo-audit-checklist"],
    relatedProjectSlugs: ["local-restaurant-website", "northgate-dental"],
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
      title: "Local SEO Strategy for Small Business | Quesiono",
      description:
        "How the map pack is ranked, what to fix on your Google Business Profile, the review process that compounds, and how to build location pages that don't read as templates.",
    },
    content: `
      <p>If you serve a specific area, most of your search demand never reaches page one of blue links. It gets answered in the map pack — the three local results with a map above them — and in Google Maps directly.</p>
      <p>Which changes the priority order completely. For a restaurant, a dentist, or a plumber, the Google Business Profile is more valuable than the website in the first six months. Here's how to treat it that way.</p>

      <h2 id="how-ranked">How local results are ranked</h2>
      <p>Google names three factors, and they behave differently from organic ranking:</p>
      <ul>
        <li><strong>Relevance</strong> — how well your profile matches the query. Driven by categories, services, and the content on your site.</li>
        <li><strong>Distance</strong> — how far you are from the searcher, or from the area they specified. You can't change this, and it's why the same business ranks first from one street and fifth from another.</li>
        <li><strong>Prominence</strong> — how well known you are. Reviews, citations, links, and general online presence.</li>
      </ul>
      <p>Distance is the one people don't account for. Two competitors can both "rank first" for the same term, from different postcodes, and both be telling the truth. Any agency reporting a single map-pack position without saying where it was measured from is showing you a number that doesn't mean much.</p>

      <h2 id="profile">The Google Business Profile, done properly</h2>
      <p>Free, ten minutes to claim, and most businesses leave half of it blank.</p>
      <h3>Categories</h3>
      <p>The most important single field. Pick the most specific primary category that describes your main business, then add secondary categories for genuine additional services. A dental practice offering implants should have implant-related secondary categories, because those are distinct searches.</p>
      <p>Look at what competitors ranking above you have selected — the categories are visible in the page source of their profile. It's a legitimate and underused check.</p>
      <h3>Everything else, completed</h3>
      <ul>
        <li><strong>Name</strong> exactly as it appears on your signage. Adding keywords ("Bistro Lahore Best Italian Restaurant") violates the guidelines and gets profiles suspended.</li>
        <li><strong>Hours,</strong> including special hours for holidays. Wrong holiday hours produce a one-star review from someone who drove over. It's a five-minute fix nobody owns.</li>
        <li><strong>Services and products,</strong> each with a real description. This is indexed content and most profiles skip it.</li>
        <li><strong>Attributes</strong> — accessibility, payment methods, outdoor seating, whatever applies. These feed filtered searches.</li>
        <li><strong>Photos.</strong> Real ones, added monthly. Profiles with recent photos get more engagement, and stock photography is obvious to everyone.</li>
        <li><strong>Q&amp;A.</strong> You can ask and answer your own questions. Seed the five things customers actually ask.</li>
      </ul>
      <h3>Posts</h3>
      <p>Weekly if you can, monthly at minimum. Offers, events, news. The effect on ranking is modest; the effect on click-through from an active-looking profile is real.</p>

      <h2 id="reviews">Reviews: the part that compounds</h2>
      <p>Reviews influence ranking and they influence the decision after the ranking. Both matter and the second one matters more.</p>
      <h3>Getting them</h3>
      <p>Build the ask into your normal process rather than running occasional campaigns. A dental practice sends a text after an appointment. A restaurant puts a short link on the receipt. A tradesperson asks when the job is signed off and the customer is pleased.</p>
      <p>Two things not to do: don't offer incentives (against the guidelines and it distorts what you learn), and don't filter — asking only happy customers for reviews is a policy violation and it's obvious in the pattern.</p>
      <h3>Responding to them</h3>
      <p>Respond to all of them, within a few days. Positive reviews get a short specific thank-you. Critical reviews get the response that actually matters, because the audience isn't the reviewer — it's the next twenty people reading.</p>
      <p>A calm, specific, non-defensive reply to a two-star review builds more trust than a wall of five stars. Acknowledge the specific thing, say what you've changed, offer to sort it offline. Never argue, never imply the customer is lying, and for healthcare never confirm that someone was a patient.</p>
      <h3>Velocity beats total</h3>
      <p>Forty reviews spread over two years reads better than forty in one month, which reads as a campaign. Steady is the goal.</p>

      <h2 id="citations">Citations and consistency</h2>
      <p>A citation is any mention of your name, address, and phone number online. Consistency is what matters — Google uses it to confirm the business is real.</p>
      <p>Get the major ones right and stop: Google, Apple Maps, Bing Places, Facebook, and the two or three directories that genuinely matter in your industry and country. For UK trades that might be Checkatrade; for restaurants, TripAdvisor.</p>
      <p>Then audit for inconsistency. An old suite number, a disconnected phone number, a former address. Those actively confuse the signal. Fixing five inconsistent citations is worth more than adding fifty new ones.</p>
      <p>Ignore anyone selling a submission to 500 directories. It's spam, it's ineffective, and the cleanup costs more than the service did.</p>

      <h2 id="website">What your website needs to do</h2>
      <p>The profile does the heavy lifting, and the site supports it.</p>
      <ul>
        <li><strong>Name, address, and phone in the footer of every page,</strong> matching your profile exactly, marked up with LocalBusiness schema.</li>
        <li><strong>A page per location</strong> if you have several. Real content per location — the team, the parking, the local context — not a template with the town name swapped. Google discounts those, and so do readers.</li>
        <li><strong>Embedded map and clear directions.</strong> Sounds trivial; it's what a large share of mobile visitors came for.</li>
        <li><strong>Tappable phone number.</strong> Still missing on a surprising number of sites.</li>
        <li><strong>Location in your title tags</strong> where it's natural. "Emergency Plumber in Bristol" beats "Emergency Plumbing Services".</li>
        <li><strong>Fast on mobile.</strong> Local search is overwhelmingly mobile and often on a poor connection.</li>
      </ul>

      <h2 id="multi-location">Multiple locations</h2>
      <p>A separate profile per physical location, each with its own address, phone number, and hours. A separate page on your site per location, and each profile links to its own page rather than all to the homepage.</p>
      <p>Where it gets tempting to cheat: creating profiles for areas you serve but don't have premises in. That's a guidelines violation and profiles get removed. Service-area businesses can specify a service radius without a public address, which is the legitimate route.</p>

      <h2 id="measure">Measuring it honestly</h2>
      <p>Profile insights give you searches, views, calls, direction requests, and website clicks. Those are your real local metrics.</p>
      <p>For ranking, use a grid-based local rank tracker that measures from multiple points around your area rather than a single position. It's the only way to see the distance factor, and it's the difference between "we rank third" and "we rank first within a mile and eighth beyond three miles" — which tells you something actionable.</p>
      <p>Reasonable expectations: profile optimisation shows movement within two to four weeks, which is fast by SEO standards. Review accumulation and citation cleanup work over three to six months. Competitive urban markets take longer than everything above suggests.</p>
      <p>For a restaurant client, the profile work plus a properly built site moved them to first position for their own brand name — above two aggregators taking a cut of their orders — within three weeks, and lifted bookings 30% in the first month. Local SEO is the one part of search where a small business can beat a much larger one, because distance can't be bought.</p>
      <p>Our <a href="/services/seo/local-seo">local SEO service</a> runs exactly this sequence, starting with the profile because that's where the fastest return is.</p>
    `,
    imageAlt: "Map pack search result with a local business profile and review summary",
  },
];
