import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMS Development Services | Quesiono",
  description: "We build on WordPress, Webflow, Shopify, and Contentful so you can manage your content without touching code.",
  alternates: {
    canonical: "/services/cms-development",
  },
};

export default function CMSDevPage() {
  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="SERVICE"
            title="CMS Development."
            subtitle="Manage your content without touching code on WordPress, Webflow, Shopify, or Contentful."
            dark={true}
          />
        </div>
      </section>
      <CTABanner
        title="Ready to Manage Your Own Content?"
        subtitle="Let's build a CMS that works for you."
      />
    </>
  );
}
