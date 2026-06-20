import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing & Web Development Blog | Quesiono",
  description: "Insights, tutorials, and strategies from the Quesiono team on web development, SEO, automation, and growing your business online.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="BLOG"
            title="Insights & Strategies for Growing Online"
            subtitle="Tips, tutorials, and lessons from our work with clients across industries."
            dark={true}
            align="center"
          />
        </div>
      </section>
      <BlogGrid />
      <CTABanner
        title="Want More Tips?"
        subtitle="Get in touch and let's discuss how we can help you grow online."
      />
    </>
  );
}
