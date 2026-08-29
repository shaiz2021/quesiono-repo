import type { Service } from "./services";

/**
 * The words group. Small on purpose — we write, edit, and plan content; we don't
 * sell social media management or ad copy, and the site shouldn't imply we do.
 */
export const contentServices: Service[] = [
  {
    slug: "content-writing",
    name: "Content Writing",
    shortDescription:
      "Website copy, service pages, and long-form content written by people who read the brief.",
    icon: "pen-tool",
    href: "/services/content-writing",
    group: "content",
    featured: true,
    layoutVariant: "editorial",
    hero: {
      eyebrow: "Content writing",
      headline: "Copy that sounds like your best salesperson on a good day",
      accent: ["good day"],
      sub: "Website copy, service pages, case studies, and long-form articles. Researched properly, written in your voice, and edited by a second person before it reaches you.",
    },
    overview: {
      heading: "Content writing services, written not generated",
      paragraphs: [
        "You can get a thousand words for eleven dollars now, and it will read exactly like a thousand words for eleven dollars. Confident, structured, and hollow — the sort of copy that mentions your commitment to excellence without ever telling anyone what you actually do differently.",
        "We write from research. Before drafting a service page we'll ask what objections come up in sales calls, what clients say in the first meeting, and what your competitors claim so we can avoid claiming it too. For an article, we read the primary sources rather than the top three results.",
        "Then somebody else edits it. That second pass is where the padding goes, where a hedge becomes a claim, and where a paragraph gets cut because it was there for rhythm rather than for the reader. Copy that hasn't been edited by a second person is a first draft.",
      ],
    },
    outcomes: [
      "A voice guide from your existing material, so the writing sounds like you and not like us",
      "Specifics over adjectives — real numbers, real timeframes, real constraints",
      "Keywords worked in where they fit naturally and left out where they don't",
      "Two rounds of revision, with an editor's pass before you ever see it",
    ],
    deliverablesHeading: "What we write",
    deliverables: [
      {
        icon: "home",
        title: "Website and service page copy",
        description:
          "Homepage, about, service pages, and landing pages. Structured around the decision your buyer is making, section by section.",
      },
      {
        icon: "book-open",
        title: "Long-form articles and guides",
        description:
          "1,500 to 3,000 words with real research behind them. Written for someone who has to make a decision, not for a word count.",
      },
      {
        icon: "award",
        title: "Case studies",
        description:
          "The situation, what you did, what changed, and the number. Interviewed from your client where they'll agree to it.",
      },
      {
        icon: "message",
        title: "Voice and messaging guide",
        description:
          "How you sound, what you claim, what you never say, and the words you use instead of the industry's. Usable by any writer.",
      },
      {
        icon: "file-edit",
        title: "Editing and rewriting",
        description:
          "Have copy that's nearly right? We'll edit rather than restart. Often faster and always cheaper than a fresh draft.",
      },
      {
        icon: "clipboard",
        title: "Content briefs for your team",
        description:
          "If your people write, we'll brief them: target query, intent, angle, sources, structure, internal links, and word count.",
      },
    ],
    processHeading: "How the writing works",
    process: [
      {
        step: "01",
        title: "Voice and brief",
        description:
          "We read everything you've published, listen to a sales call if you'll share one, and write a voice guide you approve.",
        detail: ["Existing material review", "Sales call listening", "Voice guide", "Brief approval"],
      },
      {
        step: "02",
        title: "Research",
        description:
          "Subject-matter interviews with your team, plus primary sources. This is where a page stops being generic.",
        detail: ["SME interviews", "Primary sources", "Competitor claims audit", "Objection list"],
      },
      {
        step: "03",
        title: "Outline",
        description:
          "Structure approved before drafting. Arguing about section order at outline stage costs an hour; at draft stage it costs a week.",
        detail: ["Section outline", "Key claims", "Proof points", "Approval"],
      },
      {
        step: "04",
        title: "Draft and edit",
        description:
          "Written, then edited by a second person. You see the edited version, not the first draft.",
        detail: ["First draft", "Editorial pass", "Fact check", "Internal link placement"],
      },
      {
        step: "05",
        title: "Revise",
        description:
          "Two rounds. Comments in a shared doc so we can see the reasoning, not just the change.",
        detail: ["Two revision rounds", "Consolidated feedback", "Final proof"],
      },
    ],
    stats: [
      { value: 2, label: "Editors per piece", note: "Writer plus a separate editorial pass." },
      { display: "5–10", label: "Working days", note: "Per long-form piece, including revisions." },
      { value: 0, label: "AI-generated drafts", note: "We use it for research, never for prose." },
    ],
    pricingTiers: [
      {
        name: "Per page",
        price: "$99",
        summary: "Individual pages, priced per piece.",
        features: [
          "Service or landing page copy",
          "SME interview included",
          "Two revision rounds",
          "Editorial pass",
        ],
        timeline: "1-2 working days",
        bestFor: "Filling specific gaps",
      },
      {
        name: "Full site copy",
        price: "From $299",
        summary: "Every page of a site, with a voice guide first.",
        features: [
          "Up to 10 pages",
          "Voice and messaging guide",
          "SEO keyword integration",
          "Two revision rounds per page",
          "Internal linking plan",
        ],
        timeline: "1-2 weeks",
        bestFor: "New sites and rebrands",
        highlight: true,
      },
      {
        name: "Monthly retainer",
        price: "$120",
        period: "/ month",
        summary: "Four long-form pieces a month, published.",
        features: [
          "4 pieces (1,500–2,500 words each)",
          "Keyword-mapped to your roadmap",
          "Published to your CMS",
          "Internal links added to existing pages",
          "Monthly performance review",
        ],
        timeline: "3-month minimum",
        bestFor: "Ongoing content programmes",
      },
    ],
    pricingNote:
      "Priced per piece rather than per word. Per-word pricing rewards padding, and padding is exactly what we're trying to avoid.",
    faqs: [
      {
        question: "Do you use AI to write?",
        answer:
          "Not for prose. We use it the way you'd use a search engine — finding sources, checking a definition, pulling a list of competitor claims. The writing itself is done by a person, because the value is in the specifics that come out of an interview, and a model doesn't have access to those.",
      },
      {
        question: "How do you get our voice right?",
        answer:
          "We read what you've already published, listen to how you talk to prospects, and write a short voice guide — sentence length, formality, words you use, words you'd never use. You approve that before drafting starts, which is what stops the first draft coming back sounding like a different company.",
      },
      {
        question: "Do you write for SEO?",
        answer:
          "We write for readers and account for search. If you give us a target query, we'll work it in where it fits and cover the subtopics that competing pages cover. What we won't do is repeat a phrase eleven times or add a 400-word intro before the answer.",
      },
      {
        question: "Can you write about technical subjects?",
        answer:
          "Yes, with access to someone who knows it. We'll interview your engineer, architect, or clinician for 45 minutes and write from that. What we can't do is write credibly about a specialist field with no subject-matter access — and we'd rather decline than produce something your peers would spot as thin.",
      },
      {
        question: "What if we don't like the draft?",
        answer:
          "Two revision rounds are included, and the outline approval step exists specifically to catch structural disagreement early. If a draft misses badly, that's usually a brief we got wrong, and we'll rewrite it at our cost.",
      },
      {
        question: "Who owns the copy?",
        answer:
          "You do, on payment. Full rights, no attribution needed, no restriction on editing or reusing it anywhere.",
      },
    ],
    relatedSlugs: ["blog-posts", "article-writing", "on-page-seo", "keyword-research"],
    caseStudySlugs: ["hartwell-mercer-law", "northgate-dental", "saas-dashboard"],
    blogSlugs: [
      "content-strategy-that-actually-works",
      "seo-basics-getting-started-2025",
      "how-to-build-website-that-converts",
    ],
    industrySlugs: ["professional-services", "saas-startups", "healthcare"],
    keywords: {
      primary: "content writing services",
      secondary: [
        "website copywriting services",
        "SEO content writing",
        "B2B content writing agency",
        "professional copywriter for hire",
      ],
      semantic: [
        "voice guide",
        "messaging framework",
        "subject matter expert interview",
        "editorial process",
        "content brief",
        "search intent",
        "long-form content",
        "case study writing",
        "landing page copy",
        "fact checking",
        "internal linking",
        "tone of voice",
      ],
    },
    meta: {
      title: "Content Writing & Copywriting Services | Quesiono",
      description:
        "Website copy, service pages, case studies, and long-form articles. Researched through interviews, written by a person, edited by a second one before you see it.",
    },
    media: {
      imageAlt: "Editorial workspace showing a content brief, draft, and marked-up editorial pass",
    },
  },

  {
    slug: "blog-posts",
    name: "Blog Post Writing",
    navLabel: "Blog Posts",
    parentService: "content-writing",
    shortDescription:
      "A consistent publishing programme mapped to your keyword roadmap, published for you.",
    icon: "file-text",
    href: "/services/content-writing/blog-posts",
    group: "content",
    layoutVariant: "stacked",
    hero: {
      eyebrow: "Blog post writing",
      headline: "Four posts a month, every month, actually published",
      accent: ["actually published"],
      sub: "The reason most company blogs fail isn't quality. It's that the third post never got written because everyone got busy. We take the whole thing — brief, draft, edit, images, publish — off your desk.",
    },
    overview: {
      heading: "Blog writing services with a publishing cadence",
      paragraphs: [
        "Look at the average company blog and you'll see the same pattern: six posts in one month, then eleven months of silence. Somebody was enthusiastic in February. Search engines reward consistency, and so do readers — a blog that publishes twice a month for a year beats one that publishes twenty posts in March.",
        "So the offer here is cadence rather than volume. Each post comes off the keyword roadmap, gets a brief before it gets written, and lands in your CMS ready to publish with images, internal links, meta description, and schema in place. You approve, we publish.",
        "Each piece also links back into your service pages with descriptive anchors, which is the part that makes a blog earn its keep. A blog that never links to anything commercial generates traffic and nothing else.",
      ],
    },
    outcomes: [
      "A publishing calendar you can see three months ahead",
      "Every post mapped to a target query with its intent identified",
      "Internal links from each post into the service pages it supports",
      "Posts arriving in your CMS complete — images, meta, schema, links",
    ],
    deliverablesHeading: "What each post includes",
    deliverables: [
      {
        icon: "target",
        title: "Keyword-mapped brief",
        description:
          "Target query, search intent, the angle, sources, structure, and internal links. Approved before drafting.",
      },
      {
        icon: "pen-tool",
        title: "Researched draft",
        description:
          "1,200 to 2,000 words from primary sources and, where the topic needs it, an interview with your team.",
      },
      {
        icon: "file-edit",
        title: "Editorial pass",
        description:
          "A second reader for clarity, structure, and cuts. Padding removed rather than reworded.",
      },
      {
        icon: "brush",
        title: "Images and diagrams",
        description:
          "A header image and any diagrams the post needs, sized and compressed properly with real alt text.",
      },
      {
        icon: "search",
        title: "On-page SEO",
        description:
          "Title, meta description, heading structure, Article schema, and internal links both out and in.",
      },
      {
        icon: "rocket",
        title: "Published to your CMS",
        description:
          "Scheduled and formatted in your CMS, or handed over as clean markdown if you'd rather publish yourself.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Quarterly plan",
        description:
          "Twelve topics off the keyword roadmap, sequenced and shown to you before anything is written.",
        detail: ["Topic selection", "Query mapping", "Calendar", "Client approval"],
      },
      {
        step: "02",
        title: "Brief",
        description:
          "One per post. You can redirect a piece here for the cost of an email rather than a rewrite.",
        detail: ["Intent analysis", "Angle", "Source list", "Outline"],
      },
      {
        step: "03",
        title: "Write and edit",
        description:
          "Drafted, then edited by someone else. Fact-checked where there are claims and numbers.",
        detail: ["Draft", "Editorial pass", "Fact check", "Images"],
      },
      {
        step: "04",
        title: "Review and publish",
        description:
          "One revision round, then scheduled. Turnaround is two working days on feedback.",
        detail: ["Client review", "One revision round", "CMS formatting", "Schedule"],
      },
      {
        step: "05",
        title: "Monthly review",
        description:
          "What's ranking, what isn't, and which existing posts are worth updating instead of writing something new.",
        detail: ["Performance report", "Refresh candidates", "Next month's plan"],
      },
    ],
    stats: [
      { value: 4, label: "Posts per month", note: "Standard cadence. 2 or 8 also available." },
      { display: "1,200–2,000", label: "Words per post", note: "Set by the topic, not by a quota." },
      { value: 1, label: "Revision round", note: "Two working days turnaround." },
    ],
    pricingTiers: [
      {
        name: "Two a month",
        price: "$36",
        period: "/ month",
        summary: "A sustainable cadence for a small team.",
        features: [
          "2 posts monthly",
          "Briefs and keyword mapping",
          "Images and on-page SEO",
          "Published to your CMS",
        ],
        timeline: "3-month minimum",
        bestFor: "Getting started properly",
      },
      {
        name: "Four a month",
        price: "$68",
        period: "/ month",
        summary: "Weekly publishing, the usual choice.",
        features: [
          "4 posts monthly",
          "Quarterly content calendar",
          "Internal linking programme",
          "Monthly performance review",
          "One refresh of an older post",
        ],
        timeline: "3-month minimum",
        bestFor: "Most content programmes",
        highlight: true,
      },
      {
        name: "Eight a month",
        price: "$127",
        period: "/ month",
        summary: "For competitive markets or a broad topic set.",
        features: [
          "8 posts monthly",
          "Two writers assigned",
          "Topic cluster coverage",
          "Two refreshes monthly",
          "Bi-weekly editorial call",
        ],
        timeline: "6-month minimum",
        bestFor: "Aggressive content strategies",
      },
    ],
    faqs: [
      {
        question: "How many blog posts do we need per month?",
        answer:
          "Two, consistently, beats eight for a quarter and then nothing. Four a month is the sweet spot for most businesses — enough to build topical coverage without the quality slipping. Eight makes sense if you're in a competitive market with a large topic set and a real budget for it.",
      },
      {
        question: "Should we write new posts or update old ones?",
        answer:
          "Both, and updates are underrated. A post that ranks 12th and hasn't been touched in two years often outperforms a brand new piece for a fraction of the effort. Our four-a-month plan includes one refresh precisely because of this.",
      },
      {
        question: "Who picks the topics?",
        answer:
          "We propose from the keyword roadmap, you approve or redirect. You know things about your market and your customers' questions that no keyword tool surfaces, so if you want a topic that has no search volume but answers a question every prospect asks, we'll write it.",
      },
      {
        question: "Do the posts get published or just delivered?",
        answer:
          "Published, in your CMS, formatted with images and internal links, scheduled for whenever you want it live. If you'd rather review in a doc and publish yourself, we can do that too — most clients stop wanting to after a month.",
      },
      {
        question: "How soon will blog posts bring traffic?",
        answer:
          "Individual posts targeting low-competition queries can rank in four to eight weeks. Competitive topics take months. The realistic picture is that a content programme starts showing compounding traffic around month four or five, and anyone telling you month two is selling something.",
      },
    ],
    relatedSlugs: ["content-writing", "article-writing", "keyword-research", "on-page-seo"],
    caseStudySlugs: ["saas-dashboard", "northgate-dental", "hartwell-mercer-law"],
    blogSlugs: [
      "content-strategy-that-actually-works",
      "seo-basics-getting-started-2025",
      "local-seo-strategy-small-business",
    ],
    industrySlugs: ["saas-startups", "professional-services", "healthcare"],
    keywords: {
      primary: "blog post writing services",
      secondary: [
        "blog writing service for businesses",
        "SEO blog content agency",
        "monthly blog content package",
        "managed blog publishing",
      ],
      semantic: [
        "publishing cadence",
        "content calendar",
        "keyword mapping",
        "content brief",
        "internal linking",
        "Article schema",
        "content refresh",
        "topic clusters",
        "search intent",
        "meta description",
        "editorial review",
        "CMS publishing",
      ],
    },
    meta: {
      title: "Blog Post Writing Services — Published Monthly | Quesiono",
      description:
        "Two, four, or eight researched posts a month, mapped to your keyword roadmap and published in your CMS with images, internal links, meta, and schema in place.",
    },
    media: {
      imageAlt: "Content calendar showing planned blog posts alongside a published article",
    },
  },

  {
    slug: "article-writing",
    name: "Article Writing",
    parentService: "content-writing",
    shortDescription:
      "Long-form, research-heavy pieces for publications, thought leadership, and pillar pages.",
    icon: "book-open",
    href: "/services/content-writing/article-writing",
    group: "content",
    layoutVariant: "split",
    hero: {
      eyebrow: "Article writing",
      headline: "The long piece that becomes the reference",
      accent: ["the reference"],
      sub: "Pillar pages, industry analysis, guest contributions, and whitepapers. Two to five thousand words with primary research behind them, written to be the piece other people cite.",
    },
    overview: {
      heading: "Long-form article and thought leadership writing",
      paragraphs: [
        "There's a category of content that does a different job from a blog post. A definitive guide that ranks for a head term for three years. An analysis of your own data that journalists pick up. A guest piece in a publication your buyers read. These pieces earn links and credibility rather than incremental traffic.",
        "They take longer because the research is real. We interview your subject-matter experts, read the primary sources, and — where you have the data — analyse your own numbers, which is the single most reliable way to produce something nobody else can publish.",
        "Length follows the subject. A pillar page covering a topic comprehensively might need four thousand words. A sharp argument might land in twelve hundred. We'll tell you which the piece wants to be after the outline, not before.",
      ],
    },
    outcomes: [
      "Original research or first-hand expertise, not a synthesis of the top ten results",
      "Structured to be scanned and to be read straight through",
      "Written to earn citations, which is what makes a pillar page worth the investment",
      "Placed with publications where you want a guest contribution",
    ],
    deliverablesHeading: "What article writing covers",
    deliverables: [
      {
        icon: "layers",
        title: "Pillar pages",
        description:
          "Comprehensive coverage of a topic, structured with jump links and designed to sit at the centre of a content cluster.",
      },
      {
        icon: "bar-chart",
        title: "Original research and data pieces",
        description:
          "Your data or a survey we run, analysed and written up with charts. The most link-worthy content type there is.",
      },
      {
        icon: "megaphone",
        title: "Thought leadership",
        description:
          "An argument with a position, drawn from your experience. Not a summary of what the industry already agrees on.",
      },
      {
        icon: "globe",
        title: "Guest contributions",
        description:
          "Written to a publication's brief and voice, with pitch support if you don't already have the relationship.",
      },
      {
        icon: "file-text",
        title: "Whitepapers and reports",
        description:
          "Gated or ungated, designed as well as written, with an executive summary someone will actually read.",
      },
      {
        icon: "search",
        title: "Search-aware structure",
        description:
          "Built to rank where that's the goal — subtopic coverage, schema, jump links, and internal links from the cluster.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Angle and scope",
        description:
          "What the piece argues and why anyone would cite it. If we can't answer that, we don't start.",
        detail: ["Angle definition", "Audience", "Citation potential", "Length estimate"],
      },
      {
        step: "02",
        title: "Research",
        description:
          "SME interviews, primary sources, and data analysis. The longest stage and the one that decides quality.",
        detail: ["SME interviews", "Source reading", "Data analysis", "Expert quotes"],
      },
      {
        step: "03",
        title: "Outline",
        description:
          "A detailed section-by-section outline with the claims and evidence in place. Approved before drafting.",
        detail: ["Detailed outline", "Claims and evidence", "Chart list", "Approval"],
      },
      {
        step: "04",
        title: "Draft and edit",
        description:
          "Written, edited, fact-checked, and every statistic traced to its source.",
        detail: ["Draft", "Editorial pass", "Fact check", "Source verification"],
      },
      {
        step: "05",
        title: "Publish or place",
        description:
          "Onto your site with the internal links and schema, or pitched to the target publication.",
        detail: ["Publishing", "Charts and diagrams", "Pitch support", "Promotion notes"],
      },
    ],
    stats: [
      { display: "2,000–5,000", label: "Words, typical", note: "Set by the subject." },
      { display: "2–4", label: "Weeks per piece", note: "Research is most of it." },
      { value: 100, suffix: "%", label: "Statistics sourced", note: "Every number traceable." },
    ],
    pricingTiers: [
      {
        name: "Pillar page",
        price: "$91",
        summary: "A comprehensive guide built to rank and hold.",
        features: [
          "2,000–3,500 words",
          "SME interview",
          "Jump links and structure",
          "Schema and internal linking",
          "Two revision rounds",
        ],
        timeline: "2–3 weeks",
        bestFor: "Cluster centrepieces",
        highlight: true,
      },
      {
        name: "Research piece",
        price: "From $200",
        summary: "Original data, analysed and written up.",
        features: [
          "Survey design or data analysis",
          "Charts and visualisations",
          "Full write-up",
          "Press-ready summary",
          "Outreach angles for PR",
        ],
        timeline: "4–6 weeks",
        bestFor: "Link acquisition and PR",
      },
      {
        name: "Guest contribution",
        price: "$61",
        summary: "Written to a publication's brief and voice.",
        features: [
          "1,200–2,000 words",
          "Written to the outlet's style",
          "Author bio and byline",
          "Pitch support",
        ],
        timeline: "2 weeks",
        bestFor: "Authority and referral traffic",
      },
    ],
    faqs: [
      {
        question: "How is this different from your blog post writing?",
        answer:
          "Blog posts are a cadence — steady coverage of your topic set at a sustainable rate. Articles are individual investments in a piece meant to rank for years or earn citations. Different research depth, different price, different purpose. Most clients want both.",
      },
      {
        question: "Do we need original research?",
        answer:
          "It's the most reliable way to earn links, because nobody else can publish your data. If you have order data, survey capability, or industry numbers nobody has aggregated, that's a strong asset. If not, a genuinely better guide than what currently ranks is the next best thing.",
      },
      {
        question: "How long should a pillar page be?",
        answer:
          "As long as the subject needs and no longer. We'll look at what ranks, what subtopics it covers, and where the gaps are, then estimate at outline stage. Usually two to four thousand words. Word count targets produce padding, which is the opposite of what a reference piece needs.",
      },
      {
        question: "Can you get us placed in a specific publication?",
        answer:
          "We can write to their brief and help with the pitch, but no writer can guarantee an editor says yes. If you already have the relationship, that's straightforward. If not, we'll be honest about how likely a given outlet is before you commit to the piece.",
      },
      {
        question: "Do you provide the charts and diagrams?",
        answer:
          "Yes, on research pieces and whitepapers — designed to match your brand and exported at the right sizes for both web and social. For pillar pages, diagrams are included where the explanation genuinely needs one.",
      },
    ],
    relatedSlugs: ["content-writing", "blog-posts", "link-building", "keyword-research"],
    caseStudySlugs: ["saas-dashboard", "hartwell-mercer-law", "coastline-outfitters"],
    blogSlugs: [
      "content-strategy-that-actually-works",
      "seo-basics-getting-started-2025",
      "how-to-build-website-that-converts",
    ],
    industrySlugs: ["saas-startups", "professional-services"],
    keywords: {
      primary: "article writing services",
      secondary: [
        "long-form content writing",
        "thought leadership writing service",
        "pillar page writing",
        "whitepaper writing services",
      ],
      semantic: [
        "original research",
        "primary sources",
        "subject matter expert interview",
        "pillar content",
        "topic cluster",
        "data journalism",
        "guest post",
        "editorial standards",
        "fact checking",
        "citation",
        "executive summary",
        "content depth",
      ],
    },
    meta: {
      title: "Long-Form Article & Thought Leadership Writing | Quesiono",
      description:
        "Pillar pages, original research, whitepapers, and guest contributions. Two to five thousand words with SME interviews and every statistic traceable to its source.",
    },
    media: {
      imageAlt: "Long-form article layout with jump links, charts, and cited sources",
    },
  },
];
