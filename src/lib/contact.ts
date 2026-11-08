export const contactLimits = {
  name: 120,
  email: 254,
  message: 5000,
  websiteUrl: 500,
  company: 160,
  phone: 40,
  service: 80,
  budget: 60,
  timeline: 80,
  source: 250,
  intent: 60,
  utm_source: 150,
  utm_medium: 150,
  utm_campaign: 150,
  utm_content: 150,
  utm_term: 150,
  landing: 250,
  referrer: 250,
} as const;
export type ContactField = keyof typeof contactLimits;
export type ContactValues = Record<ContactField, string> & {
  website: string;
  consent: boolean;
};
export const budgetOptions = [
  "Under $500",
  "$500–$1,500",
  "$1,500–$5,000",
  "$5,000–$10,000",
  "$10,000+",
  "Not sure yet",
];
export const timelineOptions = [
  "As soon as practical",
  "Within 1–2 months",
  "Within 3–6 months",
  "A fixed launch date",
  "Just exploring",
];
export function validWebsite(value: string) {
  try {
    const url = new URL(value);
    return (
      ["http:", "https:"].includes(url.protocol) &&
      url.hostname.includes(".") &&
      !url.username &&
      !url.password
    );
  } catch {
    return false;
  }
}
