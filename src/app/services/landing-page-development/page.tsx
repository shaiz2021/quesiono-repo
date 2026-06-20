import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing Page Development Services | Quesiono",
  description: "High-converting landing pages built for paid traffic, product launches, and lead generation campaigns.",
  alternates: {
    canonical: "/services/landing-page-development",
  },
};

export default function LandingPagePage() {
  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="SERVICE"
            title="Landing Page Development."
            subtitle="High-converting landing pages built for paid traffic, product launches, and lead generation."
            dark={true}
          />
        </div>
      </section>
      <CTABanner
        title="Ready to Launch Your Landing Page?"
        subtitle="Let's build something that converts."
      />
    </>
  );
}
