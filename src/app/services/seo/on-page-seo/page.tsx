import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "On Page SEO Services | Quesiono",
  description: "We optimize your website's title tags, meta descriptions, headings, content structure, internal links, and Core Web Vitals for better Google rankings.",
  alternates: {
    canonical: "/services/seo/on-page-seo",
  },
};

export default function OnPageSEOPage() {
  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="SERVICE"
            title="On-Page SEO."
            subtitle="Technical optimization for your site structure and content to rank better on Google."
            dark={true}
          />
        </div>
      </section>
      <CTABanner
        title="Ready to Optimize Your Site?"
        subtitle="Let's improve your on-page SEO."
      />
    </>
  );
}
