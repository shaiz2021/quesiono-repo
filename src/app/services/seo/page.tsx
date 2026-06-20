import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services | Search Engine Optimization | Quesiono",
  description: "Quesiono provides full SEO services including on-page optimization, off-page link building, and technical SEO audits for businesses worldwide.",
  alternates: {
    canonical: "/services/seo",
  },
};

export default function SEOPage() {
  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="SERVICE"
            title="SEO."
            subtitle="Full SEO strategy and execution to get you found on Google."
            dark={true}
          />
        </div>
      </section>
      <CTABanner
        title="Ready to Get Found?"
        subtitle="Let's improve your search rankings and drive more traffic to your site."
      />
    </>
  );
}
