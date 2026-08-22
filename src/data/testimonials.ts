export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Quesiono delivered a website that actually drives real results.",
    name: "Ahmed Khan",
    role: "Owner",
    company: "Local Bistro",
  },
  {
    quote: "Their SEO work got us on the first page of Google within three months.",
    name: "Sara Ali",
    role: "Marketing Manager",
    company: "Urban Apparel",
  },
  {
    quote: "The custom dashboard they built saved us 10 hours a week.",
    name: "Omar Sheikh",
    role: "Founder",
    company: "SaaS Analytics",
  },
];
