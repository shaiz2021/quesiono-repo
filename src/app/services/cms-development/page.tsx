import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { getServiceBySlug, services } from "@/data/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CMS Development Services | Quesiono",
  description: "We build on WordPress, Webflow, Shopify, and Contentful so you can manage your content without touching code.",
  alternates: {
    canonical: "/services/cms-development",
  },
};

export default function CMSDevPage() {
  const service = getServiceBySlug("cms-development");
  const relatedServices = services.filter(
    (s) => s.group === "web" && s.slug !== "cms-development" && !s.parentService
  );

  const faqs = [
    {
      question: "Which CMS platforms do you work with?",
      answer: "We work with WordPress, Webflow, Shopify, Contentful, and other popular CMS platforms. We'll help you choose the right one for your needs.",
    },
    {
      question: "Can I update the content myself?",
      answer: "Absolutely! That's the whole point of a CMS. We'll set everything up so you can easily edit text, images, and more without writing a single line of code.",
    },
    {
      question: "Do you provide training?",
      answer: "Yes! We include training sessions so you feel comfortable using your new CMS. We're also available for ongoing support if you need help later.",
    },
    {
      question: "Can you migrate my existing site to a new CMS?",
      answer: "Yes! We handle full site migrations, including content, images, and SEO redirects to preserve your rankings.",
    },
  ];

  const cmsPlatforms = [
    {
      name: "WordPress",
      description: "The world's most popular CMS, perfect for blogs, businesses, and e-commerce.",
    },
    {
      name: "Webflow",
      description: "Visual development platform for creating beautiful, responsive websites without code.",
    },
    {
      name: "Shopify",
      description: "Leading e-commerce platform for building and scaling online stores.",
    },
    {
      name: "Contentful",
      description: "Headless CMS for enterprise-grade content management across platforms.",
    },
  ];

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

      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-libre italic text-text-dark mb-8">
            What You Get.
          </h2>
          <div className="space-y-6 text-text-muted text-lg">
            <p>
              A fully customized content management system that fits your business needs.
              We'll help you choose the right platform and build a site that's easy to update.
            </p>
            <p>
              No more waiting for developers to make simple changes—you'll be able to update
              text, images, and products yourself, anytime.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-libre italic text-vanilla text-center mb-12">
            Platforms We Work With.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cmsPlatforms.map((platform, i) => (
              <div key={i} className="p-6 bg-midnight rounded border border-vanilla/10">
                <h3 className="text-xl font-bold text-vanilla mb-2">{platform.name}</h3>
                <p className="text-vanilla/70">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-libre italic text-text-dark mb-8">
            Our Process.
          </h2>
          <div className="space-y-8">
            {[
              { step: "01", title: "Discovery", description: "We learn about your content needs and choose the right CMS for you." },
              { step: "02", title: "Design & Build", description: "We design and develop your site with your brand in mind." },
              { step: "03", title: "Content Migration", description: "We migrate your existing content to the new CMS (if needed)." },
              { step: "04", title: "Training & Launch", description: "We train you on the CMS and launch your new site." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="text-4xl font-libre italic text-sand flex-shrink-0">{item.step}</div>
                <div>
                  <h3 className="text-xl font-bold text-text-dark mb-2">{item.title}</h3>
                  <p className="text-text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-libre italic text-text-dark mb-8">
            Frequently Asked Questions.
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-sand pb-6 last:border-0">
                <h3 className="text-xl font-bold text-text-dark mb-3">{faq.question}</h3>
                <p className="text-text-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-libre italic text-text-dark mb-8 text-center">
              Related Services.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((s) => (
                <ServiceCard
                  key={s.slug}
                  icon={s.icon}
                  title={s.name}
                  description={s.shortDescription}
                  href={s.href}
                  dark={false}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title="Ready to Manage Your Own Content?"
        subtitle="Let's build a CMS that works for you."
      />
    </>
  );
}
