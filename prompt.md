# QUESIONO — Full Website Development Prompt for Trae AI IDE
**Brand Kit: Midnight Indigo**
**Framework: Next.js 14 (App Router)**

---

## PROJECT OVERVIEW

Build the official website for **Quesiono** — a full-service web design and digital agency based in Karachi, Pakistan. The brand is founded by a CS graduate who has grown it from zero to a recognized name with 55+ monthly GMB interactions. The tone is bold, trustworthy, and technically credible. Every design and copy decision should reflect a founder-led agency that competes with international studios.

---

## BRAND IDENTITY

### Color System
```
--midnight:     #212842   (primary dark background)
--indigo:       #2E3760   (secondary dark surface)
--slate-blue:   #3A4680   (tertiary surface, cards)
--vanilla:      #F0E7D5   (primary accent, headings on dark)
--sand:         #E5D9C3   (secondary accent, dividers)
--cream:        #FAF7F2   (light-mode page background)
--white:        #FFFFFF   (pure white for contrast moments)
--text-dark:    #1A1E35   (body text on light backgrounds)
--text-muted:   #6B7280   (secondary text)
```

### Typography
- **Display:** `Libre Baskerville` — italic, weight 700. Used for hero headlines, section titles, and pull quotes. Load via Google Fonts.
- **Headings:** `Inter` — weight 700/800. For subheadings, card titles, nav items.
- **Body:** `Inter` — weight 400/500. For paragraphs, descriptions, meta text.
- **Labels/Caps:** `Inter` — weight 600, letter-spacing 0.15em, text-transform uppercase. For tags, eyebrows, badge text.

### Logo
- Wordmark: `Quesiono` in Libre Baskerville italic, color `#F0E7D5` on dark, `#212842` on light.
- Icon mark: Circular border with italic Q inside. Use as favicon, og-image icon, and mobile nav.
- Tagline (small caps below wordmark): `DIGITAL AGENCY`

### Design Language
- Border radius: `4px` for buttons and cards. `50%` for circular icon mark only.
- Borders: `1px solid rgba(240, 231, 213, 0.15)` on dark surfaces. `1px solid rgba(33, 40, 66, 0.1)` on light surfaces.
- Shadows: `0 4px 24px rgba(33, 40, 66, 0.12)` for card lift effect.
- Divider lines: thin horizontal `1px` lines in `#E5D9C3` or `rgba(240,231,213,0.2)` between major sections.
- Spacing scale: `8px` base unit. Sections use `96px` top/bottom padding on desktop, `64px` on tablet, `48px` on mobile.

---

## TECH STACK

```
Framework:       Next.js 14 (App Router)
Language:        TypeScript
Styling:         Tailwind CSS v3 with custom config
Fonts:           next/font with Google Fonts (Libre Baskerville + Inter)
Icons:           Lucide React
Animations:      Framer Motion
SEO:             next-seo + native Next.js metadata API
Forms:           React Hook Form + server actions
Email:           Resend (for contact form)
Analytics:       Vercel Analytics + Google Tag Manager
Sitemap:         next-sitemap
Images:          next/image (optimized)
CMS (optional):  Contentlayer for blog MDX
Deployment:      Vercel
```

---

## GLOBAL CONFIGURATION

### `tailwind.config.ts`
Extend the default theme with the brand colors, font families, and custom spacing. Register all named colors as Tailwind utilities so classes like `bg-midnight`, `text-vanilla`, `border-sand` work throughout.

### `next.config.ts`
Enable image optimization for external domains if used. Set `trailingSlash: false`. Add security headers (X-Frame-Options, CSP, HSTS).

### `app/layout.tsx`
- Load Inter and Libre Baskerville via `next/font/google`.
- Apply `bg-cream text-dark` as base for light mode. The site is primarily dark-mode-first on hero sections, light-mode on content sections.
- Include Google Tag Manager script in `<head>`.
- Include `JsonLd` organization schema globally.

### Global JSON-LD Schema
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Quesiono",
  "url": "https://quesiono.com",
  "logo": "https://quesiono.com/images/quesiono-logo.png",
  "description": "Quesiono is a full-service digital agency based in Karachi, Pakistan, offering web development, SEO, branding, automation, and content writing.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Karachi",
    "addressCountry": "PK"
  },
  "sameAs": [
    "https://www.linkedin.com/company/quesiono",
    "https://www.instagram.com/quesiono",
    "https://twitter.com/quesiono"
  ]
}
```

---

## COMPONENT LIBRARY (build these first, reuse everywhere)

### `<NavBar />`
- Sticky, background transitions from transparent to `#212842` with `backdrop-blur` on scroll.
- Left: circular Q icon mark + wordmark `Quesiono` in Libre Baskerville italic.
- Center (desktop): navigation links — Home, Services (dropdown), Portfolio, Products, About, Blog.
- Right: `Contact Us` button with `bg-vanilla text-midnight` fill, `rounded` style.
- Mobile: hamburger menu with full-screen dark overlay slide-in. All nav links large, stacked vertically.
- Services dropdown shows all service inner pages grouped under Web, SEO, and Content categories.

### `<Footer />`
- Background: `#1A1E35` (deeper than midnight for contrast).
- Four columns: Logo + tagline + social links | Services list | Company links | Contact info.
- Bottom bar: copyright + "Built by Quesiono" + sitemap link.
- Social icons: LinkedIn, Instagram, Twitter/X, GitHub.
- No large paragraph blocks in footer. Keep it clean and scannable.

### `<SectionHeading />`
Props: `eyebrow` (small caps label), `title` (Libre Baskerville italic), `subtitle` (Inter body), `align` (left|center).
Pattern: eyebrow in `text-vanilla/60` caps, title in `text-vanilla` italic, subtitle in `text-vanilla/70` body. Thin divider line `24px` wide below eyebrow.

### `<ServiceCard />`
- Dark card: `bg-indigo border border-vanilla/10 rounded`.
- Icon area top-left, title in Inter 700, short description in Inter 400, link arrow bottom-right.
- Hover: slight upward transform + border becomes `border-vanilla/30`.

### `<PortfolioCard />`
- Image fill top half, project name + category tag + one-line description bottom half.
- On hover: overlay with `View Project` CTA appears.
- Tag uses `bg-midnight/80 text-vanilla` pill style.

### `<TestimonialCard />`
- Quote mark in large `text-vanilla/20`, quote text in Libre Baskerville italic, client name + role in small caps below.

### `<CTABanner />`
- Full-width dark section: `bg-indigo`.
- Large italic headline + body text + two buttons (primary filled, secondary ghost).

### `<Badge />`
Props: `label`. Small pill with `bg-midnight text-vanilla border border-vanilla/20`.

---

## PAGE ARCHITECTURE

---

## PAGE 1 — HOME (`/`)

### Metadata
```ts
title: "Quesiono — Web Design & Digital Agency in Karachi"
description: "Quesiono is a Karachi-based digital agency building bold websites, SEO strategies, automation systems, and brand identities for growing businesses."
canonical: "https://quesiono.com"
og:image: "/og/home.png"
```

### Hero Section
- Background: `#212842` full viewport height.
- Left side (60%): 
  - Eyebrow badge: `DIGITAL AGENCY · KARACHI`
  - Headline (Libre Baskerville italic, large — ~72px desktop, 48px mobile, ~96px on large screens):
    `We Build Digital Brands That Get Found.`
  - Subheadline (Inter 400, ~18px): `Web development, SEO, automation, and branding for businesses that want to grow online. No templates. No guesswork.`
  - Two buttons: `Start a Project` (filled vanilla) and `See Our Work` (ghost, vanilla border).
  - Below buttons: three trust signals inline — a small circular avatar stack (placeholder) + `Trusted by 20+ businesses` text, separated by a thin pipe.
- Right side (40%): abstract geometric composition using CSS/SVG — concentric arcs and the Q circular mark, animated with a slow rotation using Framer Motion. No photography in hero.
- Bottom of hero: a horizontal scroll marquee (infinite) showing service names in all-caps Inter: `WEB DEVELOPMENT · SEO · AUTOMATION · BRANDING · CONTENT WRITING · CMS DEVELOPMENT · LANDING PAGES · SOCIAL MEDIA ·` — repeating, speed slow, text in `text-vanilla/40`.

### Services Preview Section
- Background: `#FAF7F2` (cream, light).
- Section heading centered: eyebrow `WHAT WE DO`, title `Every Service Your Business Needs Online.`
- Grid: 3 columns desktop, 2 tablet, 1 mobile.
- 9 service cards (one per service). Each card: icon, name, 1-line description, `Learn More` link.
- Below grid: `View All Services` button centered, ghost style with dark border.

### Featured Work Section
- Background: `#212842`.
- Heading left-aligned: eyebrow `OUR WORK`, title `Projects Built to Perform.`
- Showcase 3 portfolio projects in a large asymmetric layout (one big left, two stacked right).
- Each project: project name, client type (e.g., Local Business, SaaS, E-commerce), primary service tag, image.
- `View Full Portfolio` link bottom right.

### Why Quesiono Section
- Background: `#FAF7F2`.
- Left: heading `Why businesses choose Quesiono over bigger agencies.`
- Right: 4 points as stacked rows. Each row: thin `1px` top border in `#E5D9C3`, title in Inter 700, description in Inter 400. No icons, no numbers. Just clean rows.
- Points: Full-stack capability (we handle everything in-house), Results-first thinking (every decision tied to a metric), Karachi-based, global quality, Founder-led (direct access to the person doing the work).

### Process Section
- Background: `#2E3760`.
- Heading centered: `How We Work`.
- Horizontal timeline on desktop (4 steps), vertical on mobile.
- Steps: Discovery, Strategy, Build, Launch + Grow. Each step has a short one-sentence description.
- The connecting line between steps is `#F0E7D5` at `30%` opacity.

### Products Strip Section
- Background: `#1A1E35`.
- Heading: `Our AI-Powered Products`. Subtext: `Built by Quesiono, live on their own subdomains.`
- Horizontal scroll of product cards on mobile. Grid on desktop (3 cols).
- Each card: product name, one-line description, subdomain URL, `Try It Free` CTA.

### Testimonials Section
- Background: `#FAF7F2`.
- 3 testimonial cards in a row. Subtle card lift shadow. Serif italic quote text.

### Final CTA Section
- Background: `#212842`.
- Large centered heading: `Ready to Build Something That Works?`
- Subtext + two buttons.

---

## PAGE 2 — ABOUT US (`/about`)

### Metadata
```ts
title: "About Quesiono — The Digital Agency Behind the Brand"
description: "Quesiono was founded by Shahzaib, a CS graduate from Karachi. We are a founder-led digital agency specializing in web development, SEO, and automation."
canonical: "https://quesiono.com/about"
```

### Hero
- Dark background. Large italic headline: `We are Quesiono. A digital agency built from the ground up in Karachi.`
- Subtext: `What started as a one-person operation has grown into a full-service agency serving businesses across industries. Every project we take on is treated as if it were our own.`

### Founder Section
- Split layout: left is image placeholder (a professional headshot — **you need a professional headshot photo of the founder for this section**), right is bio.
- Bio copy (humanized, no dashes): `My name is Shahzaib. I graduated with a CS degree in 2024 and started Quesiono because I saw a gap in the market. Most agencies either charge too much and under-deliver, or they treat every client like a ticket number. I wanted to build something different. An agency where the person you talk to is also the person doing the work. That is Quesiono.`
- Below bio: two badges showing community background — Google Developer Student Clubs, Microsoft Learn Student Ambassadors.

### Stats Row
- `#2E3760` background. 4 stats across: `55+` Monthly Interactions, `20+` Projects Delivered, `9` Core Services, `3+` Years Building.

### Values Section
- Light background. 3 value blocks: Transparency, Craft, Results.

### Mission Statement
- Full-width dark section. Single large italic quote: `We exist to help businesses grow online without the guesswork.`

---

## PAGE 3 — SERVICES INDEX (`/services`)

### Metadata
```ts
title: "Digital Agency Services — Web Dev, SEO, Branding & More | Quesiono"
description: "Quesiono offers web development, CMS development, custom development, landing pages, SEO, content writing, social media, branding, and automation services."
```

### Hero
- Dark. Heading: `Everything Your Business Needs to Win Online.`
- Subtext: `From the first line of code to the last published blog post, Quesiono handles it.`

### Services Grid
- Full listing of all 9 service categories with cards. Each card links to its inner page.
- Group visually: Web Services group (3), SEO group (3), Content group (3).

---

## PAGE 4 — WEB DEVELOPMENT (`/services/web-development`)

### Metadata
```ts
title: "Web Development Services in Karachi | Quesiono"
description: "Professional web development services by Quesiono. We build fast, responsive, SEO-ready websites for businesses of all sizes."
```

### Schema
```json
{
  "@type": "Service",
  "name": "Web Development",
  "provider": { "@type": "Organization", "name": "Quesiono" },
  "areaServed": "PK",
  "description": "Custom web development services including frontend, backend, and full-stack builds."
}
```

### Content Sections
1. Hero: headline + what this service covers.
2. What is included: bullet-free prose blocks describing the deliverables.
3. Tech stack we use: logos row (Next.js, React, WordPress, Webflow, Node.js, Tailwind).
4. Process specific to web development.
5. Related services cross-links.
6. FAQ section with schema markup (FAQPage).
7. CTA.

### FAQ (add FAQPage schema for this page)
- What is included in a web development project?
- How long does it take to build a website?
- Do you work with businesses outside Karachi?
- What do I need to provide before we start?

---

## PAGE 5 — CMS DEVELOPMENT (`/services/cms-development`)

Title: `CMS Development Services | Quesiono`
Description: `We build on WordPress, Webflow, Shopify, and Contentful so you can manage your content without touching code.`

Content: Same structure as web development page. Highlight: content ownership, non-technical editing, plugin/extension setup.

---

## PAGE 6 — CUSTOM DEVELOPMENT (`/services/custom-development`)

Title: `Custom Web Application Development | Quesiono`
Description: `Quesiono builds custom web applications, dashboards, tools, and internal systems tailored to your exact business needs.`

Content: Emphasize bespoke builds, API integrations, automation-first development, SaaS MVPs.

---

## PAGE 7 — LANDING PAGE DEVELOPMENT (`/services/landing-page-development`)

Title: `Landing Page Development Services | Quesiono`
Description: `High-converting landing pages built for paid traffic, product launches, and lead generation campaigns.`

Content: Emphasize conversion rate, speed, A/B testing readiness, no CMS bloat.

---

## PAGE 8 — SEO (`/services/seo`)

Title: `SEO Services in Karachi | Search Engine Optimization | Quesiono`
Description: `Quesiono provides full SEO services including on-page optimization, off-page link building, and technical SEO audits for businesses across Pakistan and beyond.`

Schema: Use `Service` schema with sub-services.

Content: What is SEO, why it matters, our process, what we audit and fix, what results look like.

---

## PAGE 9 — ON PAGE SEO (`/services/seo/on-page-seo`)

Title: `On Page SEO Services | Quesiono`
Description: `We optimize your website's title tags, meta descriptions, headings, content structure, internal links, and Core Web Vitals for better Google rankings.`

Content: Cover technical on-page elements, content optimization, schema markup, canonical management.

---

## PAGE 10 — OFF PAGE SEO (`/services/seo/off-page-seo`)

Title: `Off Page SEO and Link Building | Quesiono`
Description: `Build domain authority through strategic link acquisition, guest posting, digital PR, and citation building with Quesiono's off-page SEO services.`

Content: What off-page SEO includes, what types of links we build, how we avoid penalties.

---

## PAGE 11 — CONTENT WRITING (`/services/content-writing`)

Title: `Content Writing Services | Quesiono`
Description: `Professional content writing for websites, blogs, and articles. SEO-optimized, human-written content that ranks and converts.`

Content: Cover all three sub-services below, then each gets its own page.

---

## PAGE 12 — BLOG POST WRITING (`/services/content-writing/blog-posts`)

Title: `Blog Post Writing Services | Quesiono`
Description: `We write well-researched, SEO-optimized blog posts that drive organic traffic and establish your brand as an authority in your niche.`

---

## PAGE 13 — ARTICLE WRITING (`/services/content-writing/article-writing`)

Title: `Article Writing Services | Quesiono`
Description: `Long-form articles, thought leadership pieces, and editorial content written by experienced writers and optimized for search.`

---

## PAGE 14 — PORTFOLIO (`/portfolio`)

### Metadata
```ts
title: "Portfolio | Web Design & Development Projects | Quesiono"
description: "Browse Quesiono's portfolio of web development, SEO, branding, and automation projects delivered for clients across multiple industries."
```

### Structure
- Hero: `Our Work Speaks for Itself.`
- Filter bar: All | Web Development | SEO | Branding | Automation (client-side filtering, no page reload).
- Masonry or grid layout of project cards.
- Each project links to a detail page `/portfolio/[slug]`.

### Project Detail Page `/portfolio/[slug]`
Sections: Project overview, challenge, solution, results (metrics), tech/tools used, related projects, CTA.

**Images needed for portfolio:** You need to supply 3 to 6 actual project screenshot images. Format: 1200x800px or 16:9 ratio. These should be real browser screenshots of websites you have built, or mockup-style images placing your site designs in a browser frame. If you have none yet, use placeholder images from `https://placehold.co/1200x800/212842/F0E7D5?text=Project+Name` for development and replace before launch.

---

## PAGE 15 — PRODUCTS (`/products`)

### Metadata
```ts
title: "AI-Powered Products by Quesiono"
description: "Explore the AI tools and SaaS products built by Quesiono, each live on its own subdomain."
```

### Structure
- Hero: `Tools Built In-House, Available to Everyone.`
- Product cards grid. Each card: product name, tagline, what it does in 2 sentences, subdomain URL, status badge (Live / Beta / Coming Soon).
- **Note for Trae:** The products list will be managed as a static JSON/TS file at `src/data/products.ts` so new products can be added without touching component code.

### Current Product Listed
```ts
{
  name: "ResumeFlow AI",
  tagline: "Build a job-ready resume in minutes.",
  description: "An AI-powered resume builder that helps job seekers create clean, ATS-optimized resumes fast.",
  url: "https://resumeflowai.quesiono.com",
  status: "Live"
}
```

---

## PAGE 16 — CONTACT (`/contact`)

### Metadata
```ts
title: "Contact Quesiono | Start a Project"
description: "Get in touch with Quesiono to discuss your project. We respond within 24 hours."
```

### Structure
- Left column: heading `Let's Build Something Together.`, subtext, contact details (email, LinkedIn), availability note, GMB link.
- Right column: contact form with fields: Name, Email, Company (optional), Service Interested In (select dropdown with all 9 services), Budget Range (select), Message, Submit.
- Form submission: React Hook Form + Next.js server action + Resend email API.
- Success state: inline success message, no redirect.
- Add `LocalBusiness` schema on this page with address.

---

## PAGE 17 — BLOG INDEX (`/blog`)

### Metadata
```ts
title: "Digital Marketing & Web Development Blog | Quesiono"
description: "Insights, tutorials, and strategies from the Quesiono team on web development, SEO, automation, and growing your business online."
```

### Structure
- Hero: heading + search bar (client-side filter).
- Featured post (large card top).
- Post grid below: 3 columns desktop, 2 tablet, 1 mobile.
- Category filter pills: All, SEO, Web Dev, Automation, Branding, Content.

### Blog Post Page `/blog/[slug]`
- Author block (name, role, date, read time).
- Table of contents (sticky sidebar on desktop).
- Prose content from MDX using Contentlayer.
- Related posts at bottom.
- Share buttons (Twitter, LinkedIn, copy link).
- `Article` schema on every post.

---

## SEO ARCHITECTURE

### URL Structure
```
/                                    Home
/about                               About Us
/services                            Services Index
/services/web-development            Web Dev
/services/cms-development            CMS Dev
/services/custom-development         Custom Dev
/services/landing-page-development   Landing Pages
/services/seo                        SEO Overview
/services/seo/on-page-seo            On Page SEO
/services/seo/off-page-seo           Off Page SEO
/services/content-writing            Content Writing
/services/content-writing/blog-posts Blog Post Writing
/services/content-writing/articles   Article Writing
/portfolio                           Portfolio Index
/portfolio/[slug]                    Project Detail
/products                            Products Index
/contact                             Contact
/blog                                Blog Index
/blog/[slug]                         Blog Post
/sitemap.xml                         Auto-generated
/robots.txt                          Configured
```

### `robots.txt`
```
User-agent: *
Allow: /
Disallow: /api/
Sitemap: https://quesiono.com/sitemap.xml
```

### `next-sitemap.config.js`
- Include all static pages.
- Exclude `/api/` routes.
- Set `changefreq: weekly` for service pages, `daily` for blog.
- `priority: 1.0` for home, `0.9` for service pages, `0.8` for portfolio and blog.

### Canonical Tags
- Every page must have its canonical URL set explicitly in the metadata export. No page without a canonical.

### Open Graph Images
- Create `/app/api/og/route.tsx` using `@vercel/og` to dynamically generate OG images for each page. Dark background `#212842`, title in Libre Baskerville, Quesiono logo mark.

### Core Web Vitals
- Use `next/image` for all images. Never `<img>` tags.
- Use `next/font` for all fonts. No external font stylesheet links.
- Lazy load below-fold components with `dynamic(() => import(...), { ssr: false })`.
- No layout shift: set explicit `width` and `height` on all images.

---

## PERFORMANCE REQUIREMENTS

- Lighthouse score target: 90+ on all four metrics.
- First Contentful Paint under 1.5s on 4G.
- No Google Fonts loaded via `<link>`. Use `next/font/google` only.
- Images: WebP format, responsive `sizes` attribute on all `<Image>` components.
- Bundle: no large client-side libraries. Framer Motion only where animation is visible.

---

## ANIMATION GUIDELINES

- Hero headline: fade in upward, staggered by word, on page load. Use Framer Motion `motion.span` per word.
- Section headings: fade in on scroll using Framer Motion `whileInView` with `once: true`.
- Cards: subtle upward translate + fade on scroll into view.
- Nav background: transition `background-color` and `backdrop-filter` on scroll using `useScroll`.
- Marquee strip: pure CSS `animation: marquee linear infinite`. No JS.
- Respect `prefers-reduced-motion`: wrap all Framer Motion animations in a check and disable if user has set this preference.

---

## CONTENT STRATEGY

### Voice and Tone
- Confident and direct. Short sentences. Active voice always.
- No filler phrases like `we are passionate about`, `we are dedicated to`, or `we strive to`.
- No em-dashes anywhere in content.
- No lists of bullet points for marketing copy. Use prose paragraphs for body content.
- Technical pages (services) can use structured lists for features/inclusions.
- Speak to the reader's outcome, not your process. Bad: `We use a rigorous QA process`. Good: `Your site ships without broken links, missing images, or slow pages.`

### Keyword Strategy per Page
```
Home:            digital agency karachi, web design agency pakistan
Web Dev:         web development services karachi, website development pakistan
CMS Dev:         wordpress development karachi, cms website development
Custom Dev:      custom web application development pakistan
Landing Pages:   landing page design karachi, high converting landing pages
SEO:             seo services karachi, seo agency pakistan
On Page SEO:     on page seo services, on page optimization pakistan
Off Page SEO:    link building services pakistan, off page seo karachi
Content Writing: content writing services pakistan, seo content writing
Blog Posts:      blog writing services, seo blog posts pakistan
Article Writing: article writing services, long form content writing
Portfolio:       web design portfolio karachi, agency portfolio pakistan
Products:        ai tools for business, quesiono products
Contact:         hire digital agency karachi, contact quesiono
```

### Internal Linking Rules
- Every service inner page links back to `/services` and to 2 related service pages.
- Portfolio project pages link to the relevant service page used.
- Blog posts link to at least one service page and one portfolio project where relevant.
- No orphan pages. Every page reachable within 3 clicks from home.

---

## IMAGES YOU NEED TO PROVIDE TO TRAE

Prepare and name these exactly as listed before starting development:

```
/public/images/
  hero-geometric.svg          (abstract Q mark composition, or leave empty for CSS version)
  founder-headshot.jpg        (professional photo of Shahzaib, 600x600px, square crop)
  og-default.png              (1200x630px, brand OG image)

/public/images/projects/
  project-1.jpg               (screenshot of a real or mockup project, 1200x800px)
  project-2.jpg
  project-3.jpg

/public/images/logos/
  quesiono-logo-light.svg     (wordmark, vanilla color, for dark backgrounds)
  quesiono-logo-dark.svg      (wordmark, midnight color, for light backgrounds)
  quesiono-icon.svg           (circular Q icon mark only)
  quesiono-favicon.ico        (32x32, 64x64 multi-size)
```

If you do not have the founder headshot yet, use a dark placeholder div for development and drop the image in later. Never use a stock photo of a stranger as the founder photo.

---

## FOLDER STRUCTURE

```
quesiono-web/
  src/
    app/
      layout.tsx
      page.tsx                          (Home)
      about/page.tsx
      services/
        page.tsx                        (Services Index)
        web-development/page.tsx
        cms-development/page.tsx
        custom-development/page.tsx
        landing-page-development/page.tsx
        seo/
          page.tsx
          on-page-seo/page.tsx
          off-page-seo/page.tsx
        content-writing/
          page.tsx
          blog-posts/page.tsx
          article-writing/page.tsx
      portfolio/
        page.tsx
        [slug]/page.tsx
      products/page.tsx
      contact/page.tsx
      blog/
        page.tsx
        [slug]/page.tsx
      api/
        contact/route.ts
        og/route.tsx
    components/
      layout/
        NavBar.tsx
        Footer.tsx
      ui/
        SectionHeading.tsx
        ServiceCard.tsx
        PortfolioCard.tsx
        TestimonialCard.tsx
        CTABanner.tsx
        Badge.tsx
        Button.tsx
        MarqueeStrip.tsx
      sections/
        HeroHome.tsx
        ServicesPreview.tsx
        FeaturedWork.tsx
        WhyQuesiono.tsx
        ProcessSection.tsx
        ProductsStrip.tsx
        TestimonialsSection.tsx
    data/
      services.ts
      projects.ts
      products.ts
      testimonials.ts
    lib/
      utils.ts
      seo.ts
    styles/
      globals.css
  public/
    images/
    fonts/                              (empty, fonts loaded via next/font)
  content/
    blog/                              (MDX files for blog posts)
  next.config.ts
  tailwind.config.ts
  next-sitemap.config.js
  tsconfig.json
```

---

## DATA FILES

### `src/data/services.ts`
Export a typed array of all 9 services with: `slug`, `name`, `shortDescription`, `icon`, `href`, `parentService` (for grouped sub-pages).

### `src/data/projects.ts`
Export portfolio projects with: `slug`, `name`, `client`, `category`, `services[]`, `summary`, `challenge`, `solution`, `results`, `image`, `url` (optional), `featured` (boolean).

### `src/data/products.ts`
Export product listings with: `name`, `tagline`, `description`, `url`, `status` (Live/Beta/Coming Soon), `icon`.

### `src/data/testimonials.ts`
Export testimonials with: `quote`, `name`, `role`, `company`. Keep real if you have them, use placeholder names during development.

---

## LAUNCH CHECKLIST

Before going live, verify every item:

- All pages have unique `title`, `description`, and `canonical` metadata.
- `sitemap.xml` generates correctly at `/sitemap.xml`.
- `robots.txt` is accessible at `/robots.txt`.
- JSON-LD schema validates at schema.org validator for home, service pages, contact, and blog posts.
- OG images generate correctly when URLs are pasted into social media debuggers.
- Contact form sends email via Resend and shows success state.
- All images have `alt` attributes. No decorative images without `alt=""`.
- Google Analytics / GTM fires on all pages.
- Lighthouse audit: 90+ on Performance, Accessibility, Best Practices, SEO.
- Google Search Console property verified and sitemap submitted.
- No broken internal links (run `next build` and check output).
- Favicon shows correctly on all browsers and devices.
- Mobile navigation works with keyboard and touch.
- All fonts render correctly without flash of unstyled text.
- GMB profile links to the correct URL (`https://quesiono.com`).

