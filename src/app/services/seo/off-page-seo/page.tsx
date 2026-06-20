import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Off Page SEO and Link Building | Quesiono",
  description: "Build domain authority through strategic link acquisition, guest posting, digital PR, and citation building with Quesiono's off-page SEO services.",
  alternates: {
    canonical: "/services/seo/off-page-seo",
  },
};

export default function OffPageSEOPage() {
  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="SERVICE"
            title="Off-Page SEO."
            subtitle="Build domain authority with strategic links and digital PR to improve your search rankings."
            dark={true}
          />
        </div>
      </section>
      <CTABanner
        title="Ready to Build Your Authority?"
        subtitle="Let's improve your off-page SEO."
      />
    </>
  );
}
