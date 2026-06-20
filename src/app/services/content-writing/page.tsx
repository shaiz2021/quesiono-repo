import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Writing Services | Quesiono",
  description: "Professional content writing for websites, blogs, and articles. SEO-optimized, human-written content that ranks and converts.",
  alternates: {
    canonical: "/services/content-writing",
  },
};

export default function ContentWritingPage() {
  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="SERVICE"
            title="Content Writing."
            subtitle="SEO-optimized, human-written content that ranks on Google and converts visitors into customers."
            dark={true}
          />
        </div>
      </section>
      <CTABanner
        title="Ready to Create Great Content?"
        subtitle="Let's write content that works for your business."
      />
    </>
  );
}
