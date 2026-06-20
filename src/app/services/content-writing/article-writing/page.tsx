import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Article Writing Services | Quesiono",
  description: "Long-form articles, thought leadership pieces, and editorial content written by experienced writers and optimized for search.",
  alternates: {
    canonical: "/services/content-writing/article-writing",
  },
};

export default function ArticleWritingPage() {
  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="SERVICE"
            title="Article Writing."
            subtitle="Long-form articles, thought leadership pieces, and editorial content that establishes your expertise."
            dark={true}
          />
        </div>
      </section>
      <CTABanner
        title="Ready to Publish Great Articles?"
        subtitle="Let's write content that positions you as an authority."
      />
    </>
  );
}
