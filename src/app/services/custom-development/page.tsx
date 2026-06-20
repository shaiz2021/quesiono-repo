import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Web Application Development | Quesiono",
  description: "Quesiono builds custom web applications, dashboards, tools, and internal systems tailored to your exact business needs.",
  alternates: {
    canonical: "/services/custom-development",
  },
};

export default function CustomDevPage() {
  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="SERVICE"
            title="Custom Development."
            subtitle="Bespoke web applications, dashboards, tools, and internal systems tailored to your exact needs."
            dark={true}
          />
        </div>
      </section>
      <CTABanner
        title="Need a Custom Solution?"
        subtitle="Let's build something that fits your business perfectly."
      />
    </>
  );
}
