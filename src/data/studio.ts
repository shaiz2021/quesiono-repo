import type { ServiceStat, ServiceTier } from "./services";
export interface OpenRole {
  slug: string;
  title: string;
  type: string;
  location: string;
  posted: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
}
export const principles = [
  {
    icon: "message",
    title: "Clarity before commitment",
    description:
      "Start with the business goal. Agree the pages, deliverables, responsibilities and decision points before the build begins.",
  },
  {
    icon: "layers",
    title: "Design and content together",
    description:
      "The layout should make your real message easier to understand. Content and design are reviewed together, using the material your customers will actually see.",
  },
  {
    icon: "gauge",
    title: "Quality you can inspect",
    description:
      "Review working pages, test the important journeys and compare performance against a baseline. Keep the evidence alongside the decisions.",
  },
  {
    icon: "key",
    title: "A practical handover",
    description:
      "Plan the accounts, files, editing guidance and support arrangements your team will need after launch. Put ownership and third-party licences in the agreement.",
  },
];
export const studioProcess = [
  {
    step: "01",
    title: "Understand & scope",
    description:
      "Define what the site needs to do and what is getting in the way.",
    detail: [
      "You share the goals, existing website, constraints and available content.",
      "We review requirements and outline deliverables, exclusions and dependencies.",
      "Together we agree the budget, schedule, review rounds and success measures.",
    ],
  },
  {
    step: "02",
    title: "Structure & content",
    description: "Make the important information easy to find.",
    detail: [
      "We map pages, navigation, customer questions and key user journeys.",
      "You confirm business details and provide or review copy and assets.",
      "We agree page structure and any migration or redirect requirements.",
    ],
  },
  {
    step: "03",
    title: "Design & review",
    description: "Review the experience before the full build.",
    detail: [
      "We design key templates for desktop and mobile using real content.",
      "You collect feedback from the agreed decision-makers.",
      "We document approved design decisions and any changes to scope.",
    ],
  },
  {
    step: "04",
    title: "Build & connect",
    description: "Turn the approved designs into working pages.",
    detail: [
      "We develop the website and configure the agreed CMS and integrations.",
      "You review the preview and test the editing workflow.",
      "Progress updates identify completed work, decisions needed and upcoming milestones.",
    ],
  },
  {
    step: "05",
    title: "Test & launch",
    description: "Check the paths that customers depend on.",
    detail: [
      "We check responsive layouts, keyboard use, links, forms and metadata.",
      "You approve business content and confirm access to the production accounts.",
      "We agree the launch checklist, redirects and rollback arrangements.",
    ],
  },
  {
    step: "06",
    title: "Handover & support",
    description: "Make the next update easier.",
    detail: [
      "We hand over the agreed files, account access and editing guidance.",
      "You confirm who will own ongoing updates and monitoring.",
      "Any support period, response targets and maintenance are defined in the agreement.",
    ],
  },
];
export const studioFaqGroups = [
  {
    label: "Budget & scope",
    faqs: [
      {
        question: "What will my project cost?",
        answer:
          "The price depends on the deliverables, content, integrations and condition of the existing site. A written quote confirms the scope, exclusions, third-party costs and payment milestones. See the pricing page for the factors to consider.",
      },
      {
        question: "Do I need a full redesign?",
        answer:
          "Not always. A clearer service page, a faster template or a repaired enquiry flow may solve the problem. Share the goal and current URL so we can assess the smallest useful scope.",
      },
      {
        question: "Can we start with one part of the website?",
        answer:
          "Yes. A focused first phase can address the most pressing problem, with later work planned around what you learn.",
      },
      {
        question: "Are hosting and software included?",
        answer:
          "Only when they are listed in the proposal. Domains, hosting, paid apps, licences and ongoing support should be visible as separate costs.",
      },
      {
        question: "What if the scope changes?",
        answer:
          "New requirements are reviewed for cost and timing before they are added. The agreed review process and revision rounds are recorded in the proposal.",
      },
    ],
  },
  {
    label: "Process & communication",
    faqs: [
      {
        question: "How long will it take?",
        answer:
          "The schedule depends on scope, content readiness, integrations and review availability. We agree milestones after assessing those dependencies instead of promising the same timeline for every project.",
      },
      {
        question: "What should I prepare before contacting you?",
        answer:
          "A short description of your goal and your existing website, if you have one. Budget or deadline information helps, but a finished brief is not required.",
      },
      {
        question: "How will I review the work?",
        answer:
          "Review points are agreed at the start. Designs and working pages give you something concrete to assess; one consolidated set of feedback helps keep decisions clear.",
      },
      {
        question: "Can you work with our existing team?",
        answer:
          "Yes. Design, development, content or technical review can be scoped alongside your team. We agree responsibilities and handover requirements before starting.",
      },
    ],
  },
  {
    label: "Technology, ownership & support",
    faqs: [
      {
        question: "Which platform should we use?",
        answer:
          "The choice follows your editing workflow, functionality, integrations and running costs. We work across WordPress, Shopify and custom development, and can review your current setup first.",
      },
      {
        question: "Who owns the website?",
        answer:
          "The agreement specifies ownership of custom work, account access and handover. Third-party software, fonts, images and services remain subject to their own licences.",
      },
      {
        question: "Can you help after launch?",
        answer:
          "Maintenance and ongoing improvements can be scoped separately. The support plan should specify what is covered, available hours and response targets.",
      },
      {
        question: "Will you preserve our existing URLs?",
        answer:
          "We inventory existing URLs before a migration and retain them where practical. Necessary changes receive redirects, internal-link updates and checks before launch.",
      },
      {
        question: "Can you guarantee search rankings or sales?",
        answer:
          "No. Search visibility and sales depend on competition, demand, your offer and factors outside the website. We agree relevant measures and use the evidence to guide improvements.",
      },
    ],
  },
];
export const studioFaqs = studioFaqGroups.flatMap((g) => g.faqs);
export const homeFaqs = [
  studioFaqs[0],
  studioFaqs[1],
  studioFaqs[5],
  studioFaqs[9],
  studioFaqs[10],
  studioFaqs[11],
];
export const team: {
  name: string;
  role: string;
  focus: string;
  bio: string;
  avatar?: string;
  postSlugs?: string[];
}[] = [];
export const milestones: {
  year: string;
  title: string;
  description: string;
}[] = [];
export const studioStats: ServiceStat[] = [];
export const studioFacts: ServiceStat[] = [];
export const roleArchive: OpenRole[] = [
  {
    slug: "senior-frontend-developer",
    title: "Senior Front-End Developer",
    type: "Full-time",
    location: "Houston, TX or remote (US hours)",
    posted: "2026-07-15",
    summary:
      "Build client sites in Next.js and TypeScript, own the performance budget, and be the person who says no to the 200KB dependency.",
    responsibilities: [
      "Build marketing sites and stores in Next.js, from designed templates to launch",
      "Hold the LCP and page-weight budget on every project, and argue for it when someone wants a carousel",
      "Model headless CMS content so clients can edit without breaking layouts",
      "Review Bilal's pull requests, and have yours reviewed properly in return",
    ],
    requirements: [
      "Four or more years writing production React, at least one of them in Next.js App Router",
      "You can read a Lighthouse trace and say what to change, not just that the score is low",
      "Comfortable with semantic HTML and keyboard accessibility as a default, not a checklist",
      "You've shipped something a non-technical client edits daily and it hasn't broken",
    ],
    niceToHave: [
      "WordPress as a headless backend",
      "Shopify Hydrogen or the Storefront API",
      "You've written about your work somewhere public",
    ],
  },
  {
    slug: "seo-strategist",
    title: "SEO Strategist",
    type: "Full-time",
    location: "Remote (US hours)",
    posted: "2026-08-05",
    summary:
      "Run technical audits and content plans for a dozen retainer clients, and get to fix the problems you find instead of handing over a PDF.",
    responsibilities: [
      "Own technical audits: crawl analysis, index management, internal linking, schema",
      "Build keyword and intent maps that feed straight into page structure during builds",
      "Write and defend redirect maps for relaunches",
      "Report monthly in plain language \u2014 what moved, what didn't, what's next",
    ],
    requirements: [
      "Three or more years in SEO with hands-on Screaming Frog, GSC, and log-file work",
      "You can explain why a page isn't indexed without saying it's a Google update",
      "Comfortable reading HTML and talking to developers as peers",
      "Evidence of a ranking recovery or a relaunch you kept clean",
    ],
    niceToHave: [
      "Local SEO at multi-location scale",
      "Basic SQL or Python for log analysis",
    ],
  },
  {
    slug: "content-writer",
    title: "Content Writer (Contract)",
    type: "Contract",
    location: "Remote",
    posted: "2026-06-30",
    summary:
      "Write site copy and long-form articles for B2B, SaaS, and trades clients. Two to four pieces a month, paid per piece.",
    responsibilities: [
      "Interview clients and write site copy that sounds like them",
      "Draft 1,200 to 2,500 word articles that hold up to someone who does the job",
      "Work from a keyword and intent brief without writing to a keyword density",
      "Take edits from Zoya without getting precious about sentences",
    ],
    requirements: [
      "A portfolio of published long-form work with your name on it",
      "You research by talking to practitioners, not by reading the top three results",
      "You can hold a voice across a whole site, not just one page",
    ],
    niceToHave: [
      "Technical background in software, construction, or healthcare",
    ],
  },
];
export const openRoles: OpenRole[] = [];
export const getRoleBySlug = (slug: string) =>
  roleArchive.find((r) => r.slug === slug);
export const roleParams = () => roleArchive.map((r) => ({ slug: r.slug }));
export const pricingBands: {
  label: string;
  range: string;
  timeline: string;
  summary: string;
  includes: string[];
  serviceSlug: string;
}[] = [];
export const retainerTiers: ServiceTier[] = [];
export const pricingFactors = [
  {
    icon: "layers",
    title: "Pages and functionality",
    description:
      "Distinct templates, product catalogues, account areas and interactive features determine the work involved.",
  },
  {
    icon: "file-edit",
    title: "Content and assets",
    description:
      "Copywriting, photography, product data and migrations need a clear owner and an agreed scope.",
  },
  {
    icon: "plug",
    title: "Integrations",
    description:
      "Bookings, payments, CRM, stock and other systems need implementation and testing time.",
  },
  {
    icon: "calendar",
    title: "Timing and support",
    description:
      "Content readiness, review availability and post-launch requirements affect delivery and ongoing costs.",
  },
];
