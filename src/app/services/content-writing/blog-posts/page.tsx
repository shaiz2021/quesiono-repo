import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Post Writing Services | Quesiono",
  description: "We write well-researched, SEO-optimized blog posts that drive organic traffic and establish your brand as an authority in your niche.",
  alternates: {
    canonical: "/services/content-writing/blog-posts",
  },
};

export default function BlogPostsPage() {
  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="SERVICE"
            title="Blog Post Writing."
            subtitle="Well-researched, SEO-optimized blog posts that drive organic traffic and establish authority."
            dark={true}
          />
        </div>
      </section>
      <CTABanner
        title="Ready to Grow Your Blog?"
        subtitle="Let's write blog posts that work."
      />
    </>
  );
}
