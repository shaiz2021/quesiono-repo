/**
 * Products we build and run ourselves, as opposed to client work.
 *
 * Media fields are drop-in slots: leave `image` / `videoSrc` undefined and the
 * page draws its own SVG artwork instead. Put a file in /public, set the field,
 * and the real asset renders with no other change.
 */

export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface Product {
  name: string;
  tagline: string;
  description: string;
  url: string;
  status: "Live" | "Beta" | "Coming Soon";
  icon: string;

  /** Longer positioning paragraph for the products page. */
  summary?: string;
  /** Who it's for, in one line. */
  audience?: string;
  category?: string;
  launched?: string;
  /** Rough scale, stated only where we can back it up. */
  scale?: string;
  freeTier?: string;
  features?: ProductFeature[];
  stack?: string[];
  faqs?: ProductFaq[];

  /* Drop-in media. */
  image?: string;
  imageAlt?: string;
  gallery?: { src: string; alt: string }[];
  videoSrc?: string;
  posterSrc?: string;
}

export const products: Product[] = [
  {
    name: "Resumeflow Ai",
    tagline: "Build a job-ready resume in minutes.",
    description:
      "An AI-powered resume builder that helps job seekers create clean, ATS-optimized resumes fast.",
    summary:
      "Resumeflow started as an internal tool. We kept getting sent CVs from people applying to work here, and the good candidates with badly formatted resumes were losing out to worse candidates with tidier ones. So we built something that fixes the format and tightens the writing without inventing experience nobody has.",
    audience: "Job seekers who have the experience and lose interviews on formatting.",
    category: "AI tools",
    url: "https://resumeflowai.xyz",
    status: "Live",
    icon: "file-text",
    launched: "2024",
    freeTier: "One resume, no card",
    features: [
      {
        title: "Parses what you already have",
        description:
          "Upload an existing PDF or DOCX and it pulls out roles, dates, and bullets rather than making you retype eight years of history into a form.",
      },
      {
        title: "Rewrites bullets, doesn't invent them",
        description:
          "It tightens what you wrote and cuts the filler. It won't add a certification you don't hold, which is the failure mode most of these tools have.",
      },
      {
        title: "Templates that survive an ATS",
        description:
          "Single column, real text, no tables or text boxes. The layouts look plain on purpose — parsers choke on the pretty ones.",
      },
      {
        title: "Tailors to a job description",
        description:
          "Paste the posting and it flags which of your bullets match, which don't, and which required skills you haven't mentioned anywhere.",
      },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Postgres", "Anthropic API"],
    faqs: [
      {
        question: "Is Resumeflow free?",
        answer:
          "The first resume is free and doesn't need a card. Paid plans unlock multiple versions, job-description tailoring, and cover letters. Pricing is on the product site — it changes more often than this page does.",
      },
      {
        question: "Does it store my resume?",
        answer:
          "Your document is stored against your account so you can come back and edit it. You can delete it, and deleting the account removes the files. We don't sell data and there's no recruiter marketplace behind it.",
      },
      {
        question: "Will a recruiter know it was AI-assisted?",
        answer:
          "The output reads like a resume, not like a chatbot — no em-dash-heavy prose, no invented enthusiasm. It also refuses to fabricate, so nothing is in there that you can't defend in the interview.",
      },
    ],
  },
];

export const getProductByName = (name: string) =>
  products.find((product) => product.name.toLowerCase() === name.toLowerCase());
