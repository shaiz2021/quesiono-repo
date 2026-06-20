import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Web Design & Development Projects | Quesiono",
  description: "Browse Quesiono's portfolio of web development, SEO, branding, and automation projects delivered for clients across multiple industries.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="PORTFOLIO"
            title="Our Work Speaks for Itself"
            dark={true}
            align="center"
          />
        </div>
      </section>
      <PortfolioGrid />
      <CTABanner
        title="Ready to Be Next?"
        subtitle="Let's build something great together."
      />
    </>
  );
}
