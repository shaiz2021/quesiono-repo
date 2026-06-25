export interface Product {
  name: string;
  tagline: string;
  description: string;
  url: string;
  status: "Live" | "Beta" | "Coming Soon";
  icon: string;
}

export const products: Product[] = [
  {
    name: "Resumeflow Ai",
    tagline: "Build a job-ready resume in minutes.",
    description: "An AI-powered resume builder that helps job seekers create clean, ATS-optimized resumes fast.",
    url: "https://resumeflowai.xyz",
    status: "Live",
    icon: "file-text",
  },
];
