import type { BlogPost } from "./blog";

/** Pricing, process, and internal-workflow posts. */
export const businessPosts: BlogPost[] = [
  {
    slug: "how-much-does-a-website-cost",
    title: "How Much Does a Website Cost? Real Numbers, 2026",
    excerpt:
      "Actual ranges from projects we've delivered, what moves a quote up or down, the ongoing costs nobody mentions, and where cheap turns expensive.",
    date: "2026-08-04",
    category: "Business",
    featured: true,
    author: "Hamza Iqbal",
    authorRole: "Founder",
    readTime: "10 min read",
    tags: ["Pricing", "Web design cost", "Budgeting", "Scoping"],
    relatedServiceSlugs: ["web-design", "web-development", "ecommerce-development", "website-maintenance", "seo"],
    relatedPostSlugs: ["wordpress-vs-webflow-vs-nextjs", "website-redesign-checklist"],
    relatedProjectSlugs: ["northgate-dental", "coastline-outfitters"],
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
      title: "How Much Does a Website Cost? Real Numbers, 2026 | Quesiono",
      description:
        "Honest website cost ranges by project type, what changes a quote, ongoing costs, and the three situations where the cheap option ends up costing more.",
    },
    content: `
      <p>Most agencies won't publish prices. The reason given is that every project is different, which is true, and the reason underneath is that a number scares people off before there's a chance to explain it.</p>
      <p>We'd rather you self-select. Here's what things actually cost, drawn from projects we've delivered, in pounds, with the parts that move the figure.</p>

      <h2 id="ranges">The ranges</h2>
      <p>These assume design and build, responsive across devices, basic on-page SEO, and analytics. Not content writing, not photography, not ad spend.</p>
      <table>
        <thead>
          <tr><th>Project</th><th>Range</th><th>Typical timeline</th></tr>
        </thead>
        <tbody>
          <tr><td>Single landing page</td><td>$117–$287</td><td>1–2 weeks</td></tr>
          <tr><td>Small business site, 5–8 pages</td><td>$118–$231</td><td>3–5 weeks</td></tr>
          <tr><td>Business site with CMS, 15–30 pages</td><td>$231–$437</td><td>6–10 weeks</td></tr>
          <tr><td>The same, custom-built in Next.js</td><td>$437–$875</td><td>8–12 weeks</td></tr>
          <tr><td>Ecommerce, up to ~200 products</td><td>$306–$750</td><td>8–12 weeks</td></tr>
          <tr><td>Ecommerce, large catalogue or complex logic</td><td>$750–$1,562</td><td>10–16 weeks</td></tr>
          <tr><td>Web application or custom platform</td><td>$875 upwards</td><td>3 months upwards</td></tr>
        </tbody>
      </table>
      <p>Two of those rows deserve a note. The CMS site appears twice because platform choice genuinely changes the number by a factor of two — the same brief on WordPress or Webflow versus built custom. We wrote up that trade-off properly in <a href="/blog/wordpress-vs-webflow-vs-nextjs">the platform comparison</a>, and the short version is that custom costs more to build and least to run.</p>
      <p>And "$875 upwards" is not a dodge. Application scope has no ceiling. What we can tell you is the shape of the first phase.</p>

      <h2 id="what-moves-it">What actually moves the number</h2>
      <p>Page count matters far less than people expect. Ten pages built from six repeating section types costs barely more than eight. What moves a quote:</p>
      <ul>
        <li><strong>Number of distinct page layouts.</strong> This is the real driver. Every unique layout is design plus build plus responsive work plus testing. Twelve pages, four layouts: straightforward. Twelve pages, eleven layouts: nearly triple the design time.</li>
        <li><strong>Integrations.</strong> Each system the site must talk to is a few days minimum, more if the API is poorly documented or the data needs mapping. Booking systems, CRMs, ERPs, payment providers, practice-management software. One clinic project spent two weeks on the booking integration alone because their provider's availability endpoint returned slots in a bespoke format with no timezone.</li>
        <li><strong>Content migration.</strong> Forty pages of clean content, fine. Four hundred pages of nine-year-old CMS content with inconsistent structure and broken internal links, that's weeks. It's also the item most often underestimated by everyone involved.</li>
        <li><strong>Data structure work.</strong> On a retail project, four of ten weeks went into building a specification schema for 3,400 products because the data existed only as prose in description fields. Nothing about that is visible in the design, and without it the filters couldn't exist.</li>
        <li><strong>Whether the brand is decided.</strong> If positioning, voice, and visual direction are settled, design moves fast. If three founders answer "what do you do" three different ways, that gets resolved during the project, and resolution takes meetings.</li>
        <li><strong>Approval structure.</strong> One decision-maker: quick. A committee of six with no named lead: add a third to the timeline, honestly. We now ask who signs off before quoting.</li>
      </ul>

      <h2 id="ongoing">The ongoing costs nobody puts in the proposal</h2>
      <p>A site is not a one-off purchase, and quotes that imply otherwise are setting up a nasty year two.</p>
      <table>
        <thead>
          <tr><th>Item</th><th>Cost</th><th>Notes</th></tr>
        </thead>
        <tbody>
          <tr><td>Hosting</td><td>$0–$30/mo</td><td>Static and edge hosting is often free at small scale; WordPress needs real hosting</td></tr>
          <tr><td>Domain</td><td>$10–$40/yr</td><td>Own it yourself, in your own account</td></tr>
          <tr><td>Maintenance</td><td>$2–$9/mo</td><td>Updates, backups, monitoring, small fixes</td></tr>
          <tr><td>Plugin or app licences</td><td>$0–$60/mo</td><td>Adds up quietly, especially on ecommerce</td></tr>
          <tr><td>CMS licence</td><td>$0–$60/mo</td><td>Free self-hosted options exist; hosted ones scale with editors</td></tr>
          <tr><td>Email sending</td><td>$0–$10/mo</td><td>Transactional email for forms and orders</td></tr>
          <tr><td>SEO retainer</td><td>$18–$78/mo</td><td>Optional, and the one most likely to pay for itself</td></tr>
        </tbody>
      </table>
      <p>For a small business site, budget $18–$50 a month all in. Skipping maintenance entirely is the most common false economy we see — a WordPress site left unpatched for eighteen months is a security incident with a date on it, and cleaning one up costs more than three years of maintenance.</p>
 
      <h2 id="cheap">Where cheap gets expensive</h2>
      <p>Cheap is sometimes exactly right. A new business testing whether anyone wants the thing should spend $47, not $469. We've told people that and lost the work, which is fine.</p>
      <p>Three situations where the cheap option reliably costs more:</p>
      <p><strong>When you'll outgrow it inside a year.</strong> A site built to be replaced at $63, replaced twelve months later at $281, cost $344. Building the $281 version once costs $281. If growth is genuinely predictable, build for it.</p>
      <p><strong>When speed is commercially material.</strong> On a store doing $10,000 a month, a two-second improvement in mobile load time is worth more per year than the entire build. One store we worked on went from 5.4 seconds to 1.9 on mobile and checkout completion rose 31%. A cheap build that ships at five seconds is expensive every single month.</p>
      <p><strong>When nobody owns the accounts.</strong> The most expensive rescues we do aren't technical. They're the ones where the previous developer registered the domain in their own account, holds the DNS, and has stopped answering email. Own your domain, your hosting, your analytics, and your repository. Always. Whoever builds the site gets access, not ownership.</p>

      <h2 id="how-we-quote">How we quote</h2>
      <p>Fixed price for defined scope, day rate for open-ended work. We won't quote a fixed price on a brief that isn't specific enough to price, because that ends in one of two bad places: we pad it heavily, or we absorb the overrun and cut quality.</p>
      <p>What we need before quoting:</p>
      <ol>
        <li>What the site is for, stated as an outcome — enquiries, bookings, orders, applications</li>
        <li>Roughly how many pages, and how many of them look different from each other</li>
        <li>Every system it has to connect to</li>
        <li>Who owns content, and whether it exists yet</li>
        <li>Who signs off</li>
        <li>Your budget range</li>
      </ol>
      <p>That last one gets resistance, and here's the honest reason we ask. With a range we design the best possible thing for it. Without one we guess, and a guess is either over your budget or under-ambitious. Nobody wins that.</p>
      <p>Payment is usually a third to start, a third at design sign-off, a third at launch. Larger builds run monthly against milestones.</p>

      <h2 id="signals">Signals worth reading</h2>
      <p>Whoever you end up hiring, including if it isn't us:</p>
      <ul>
        <li><strong>A quote with no questions asked is a quote for a template.</strong> Anyone who prices your project without asking about integrations and content is pricing a guess.</li>
        <li><strong>Ask what happens after launch.</strong> Who fixes a bug in month four, and what does it cost. A vague answer here predicts an expensive year two.</li>
        <li><strong>Ask to see three sites they built, live, and run them through PageSpeed Insights yourself.</strong> Takes five minutes and tells you more than a portfolio page.</li>
        <li><strong>Be wary of a build that's much cheaper than everyone else's.</strong> The difference is coming out of somewhere — usually testing, accessibility, or the parts you can't see until they matter.</li>
        <li><strong>Get the ownership question in writing.</strong> Domain, hosting, code, analytics, in your name.</li>
      </ul>
      <p>If you want a real number for a real brief, <a href="/contact">tell us what you're trying to do</a> and we'll give you a range on the first call rather than after three meetings. Our <a href="/pricing">pricing page</a> has the same figures laid out by package.</p>
    `,
    imageAlt: "Website cost breakdown table with build ranges and monthly running costs",
  },

  {
    slug: "automating-your-workflow-tools-tips",
    title: "The Automation That Earns Its Keep (And the Kind That Doesn't)",
    excerpt:
      "Six things we automated that saved real hours, two we built and deleted, and the rule we use to decide which is which.",
    date: "2025-10-21",
    category: "Development",
    featured: false,
    author: "Bilal Rehman",
    authorRole: "Lead Developer",
    readTime: "9 min read",
    tags: ["Automation", "CI/CD", "Developer tooling", "Process"],
    relatedServiceSlugs: ["custom-development", "website-maintenance", "speed-optimization"],
    relatedPostSlugs: ["nextjs-14-best-practices", "core-web-vitals-guide"],
    relatedProjectSlugs: ["saas-dashboard", "coastline-outfitters"],
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
      title: "Workflow Automation That Earns Its Keep | Quesiono",
      description:
        "Six automations that saved real hours on client work — preview deploys, Lighthouse budgets, data validation, uptime checks — and two we deleted.",
    },
    content: `
      <p>Automation has a marketing problem: the case studies are always about the automation that worked. Nobody writes up the script they maintained for eight months to save four minutes a week.</p>
      <p>So here's both halves. Six things we automated that clearly paid for themselves, two we built and later deleted, and the rule we now apply before writing any of it.</p>

      <h2 id="rule">The rule</h2>
      <p>Time saved per run, times runs per month, minus time to maintain per month. If that isn't comfortably positive within a quarter, don't build it.</p>
      <p>The maintenance term is the one everyone forgets. Every script is a small ongoing obligation: it breaks when an API changes, it needs credentials rotated, and it confuses whoever inherits it. A script that saves ten minutes a month and breaks twice a year is a net loss, and it's also a thing someone has to understand at the worst possible moment.</p>
      <p>Corollary: automate the thing that's done often and identically. Leave the thing done rarely and thoughtfully alone.</p>

      <h2 id="previews">1. A deploy preview per branch</h2>
      <p>The highest-value automation in client work, and it isn't close.</p>
      <p>Every branch gets its own URL. Feedback happens on a real, clickable page instead of in a thread about a screenshot. Clients stop asking when they can see it. Nobody argues about whether something is fixed.</p>
      <p>Before this, our review cycle was: build locally, screenshot, email, wait, receive a reply about a thing that was already fixed. Now the client opens a link. It cut a genuine week off a ten-week project, mostly by removing the ambiguity rather than the steps.</p>
      <p>Setup is close to free on Vercel or Netlify — it's on by default. Add a comment bot that posts the URL onto the pull request and it's complete.</p>

      <h2 id="checks">2. Checks that run before anyone reviews</h2>
      <p>Type check, lint, and build on every push. Nothing clever, and it removes an entire category of review comment.</p>
      <p>Our workflow runs three commands: <code>npm run lint</code>, <code>tsc --noEmit</code>, and <code>npm run build</code>. The build step is the one people skip and the one that catches most — bad static params, metadata type errors, a component importing a server-only module into a client boundary. None of those fail in dev.</p>
      <p>One rule that matters: the checks must be fast enough that people wait for them. Ours run in about ninety seconds. Past four or five minutes people stop watching, merge anyway, and the automation becomes a notification system for failures nobody reads.</p>

      <h2 id="budgets">3. Performance budgets, enforced</h2>
      <p>Performance regressions arrive one plausible commit at a time. A tracking script here, an unoptimised hero image there, and four months later the site is two seconds slower and no single change is to blame.</p>
      <p>Lighthouse CI on every pull request against a budget: LCP under 2.5 seconds, CLS under 0.1, JavaScript payload under a set number of kilobytes. Exceed it and the check goes red with the numbers attached.</p>
      <p>The argument then becomes concrete. "This adds 40KB and 300 milliseconds of LCP, is it worth it?" is a decision. "The site feels slower" is a conversation that goes nowhere.</p>
      <p>Two practical notes. Run against a deployed preview, not a local build, or the numbers are fiction. And set the threshold slightly above current performance — a budget that's already failing gets ignored within a week.</p>

      <h2 id="validation">4. Validating our own data</h2>
      <p>This one is specific to how we build, and it's saved more debugging time than anything else on the list.</p>
      <p>Our sites are heavily data-driven. Services, case studies, industries, and blog posts all live in typed files and reference each other by slug — a case study lists the services it used, a service lists related posts, an industry lists case studies. TypeScript checks that a slug is a string. It cannot check that the string names something real.</p>
      <p>So a typo produces a link to nowhere, or a related-work rail that silently renders empty. Not a crash, which is worse: it just quietly isn't there.</p>
      <p>The fix is about forty lines. A script that loads every data file, collects the valid slug sets, walks every cross-reference array, and prints the ones that don't resolve. It runs in CI and locally after any data edit. On a recent rebuild it caught six broken references, five of which were posts referenced before they were written and one of which was an actual typo that would have shipped.</p>
      <p>If your content model has references, write the checker. It's a morning's work and it converts a class of silent bug into a red build.</p>

      <h2 id="monitoring">5. Uptime and form monitoring</h2>
      <p>A client emailing to say their site is down is the wrong way to find out, and a contact form failing silently is worse — nothing looks broken and enquiries just stop.</p>
      <p>Two checks per site: an HTTP ping every five minutes, and a synthetic form submission daily that posts a test payload and confirms the email arrives. The second one has caught things the first never would. A mail provider changed a sending domain requirement once and forms failed quietly for a day. We found out at 8am from an alert rather than three weeks later from a client wondering where their enquiries went.</p>
      <p>Also worth alerting on: SSL certificate expiry at fourteen days, and a 404 rate spike, which usually means a redirect got dropped in a deploy.</p>

      <h2 id="reporting">6. Client reporting, assembled not written</h2>
      <p>Monthly reports used to take about two hours each: pull Search Console, pull analytics, pull uptime, paste into a document, write commentary.</p>
      <p>Now a scheduled job pulls the data and produces the numbers with month-on-month deltas. What it does not do is write the commentary. The interesting part of a report is why something moved, and that requires knowing what we shipped and what the client's market did. A generated paragraph of "traffic increased 12% month on month" is worth nothing to anyone.</p>
      <p>So: numbers automated, judgement not. Two hours became twenty minutes, and the twenty minutes is the part clients actually read. This is the shape most reporting automation should take, and most of it overreaches into the commentary and produces filler.</p>

      <h2 id="deleted">The two we deleted</h2>
      <p><strong>Automated dependency updates, merging on green.</strong> Sounded excellent. In practice it produced fifteen pull requests a week per project, most of them for transitive dev dependencies, and the review burden exceeded the security benefit. Twice, a minor version bump that passed all checks changed runtime behaviour subtly enough that nobody noticed for days.</p>
      <p>What we do now: security advisories get automatic pull requests and immediate attention. Everything else gets batched into a deliberate monthly session where someone reads the changelogs. Fewer updates, actually understood.</p>
      <p><strong>A Slack bot that posted every deploy, commit, and check result.</strong> Within three weeks the channel was unreadable and people muted it, which meant the genuinely important messages were muted too. Deleted, replaced with alerts only for production failures. Signal has a denominator.</p>

      <h2 id="not">What we deliberately don't automate</h2>
      <ul>
        <li><strong>Deploying to production.</strong> Automatic on merge to main sounds right and we don't do it for client sites. Someone presses the button, having decided this is a sensible moment. Fridays exist.</li>
        <li><strong>Copy and content.</strong> For fairly obvious reasons if you've read anything else on this blog.</li>
        <li><strong>Accessibility.</strong> Automated tooling catches maybe 30% of real issues — missing labels, bad contrast ratios, absent alt attributes. It cannot tell you the tab order is illogical or that a modal traps focus badly. Run the tool, then use a keyboard and a screen reader.</li>
        <li><strong>Anything done twice a year.</strong> The script would be stale by the second run.</li>
      </ul>

      <h2 id="start">If you're starting from nothing</h2>
      <p>In this order, and stop when the benefit stops being obvious:</p>
      <ol>
        <li>Deploy previews per branch. Nearly free, largest return.</li>
        <li>Lint, types, and build on every push.</li>
        <li>Uptime and form monitoring.</li>
        <li>A performance budget, once the first three are habit.</li>
      </ol>
      <p>That's a day of setup and it removes most of the recurring friction in a small team's week. Everything past it should have to justify itself against the rule at the top, including — especially — the automation that seems clever.</p>
      <p>We build this into every <a href="/services/website-maintenance">maintenance</a> arrangement, because the alternative is finding out about problems from the client.</p>
    `,
    imageAlt: "Continuous integration pipeline showing lint, type check, build, and Lighthouse budget stages",
  },
];
