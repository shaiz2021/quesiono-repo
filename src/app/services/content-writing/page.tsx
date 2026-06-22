import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { getServiceBySlug, services } from "@/data/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Writing Services | Quesiono",
  description: "Professional content writing for websites, blogs, and articles. SEO-optimized, human-written content that ranks and converts.",
  alternates: {
    canonical: "/services/content-writing",
  },
};

export default function ContentWritingPage() {
  const service = getServiceBySlug("content-writing");
  const relatedServices = services.filter(
    (s) => (s.group === "content" || s.group === "seo") && s.slug !== "content-writing" && !s.parentService
  );

  const faqs = [
    {
      question: "What types of content do you write?",
      answer: "We write blog posts, articles, website copy, landing pages, product descriptions, email newsletters, and more.",
    },
    {
      question: "Is your content SEO-optimized?",
      answer: "Yes! All our content is optimized for search engines with proper keyword research and on-page SEO best practices.",
    },
    {
      question: "Do you do keyword research?",
      answer: "Yes! We include keyword research as part of our content writing process to target the right terms for your business.",
    },
    {
      question: "How long does it take to write content?",
      answer: "Timelines vary by project, but most blog posts take 1-2 weeks. We'll give you a clear timeline before we start.",
    },
  ];

  const contentServices = [
    { title: "Blog Posts", description: "Regular blog content to keep your audience engaged and improve SEO." },
    { title: "Articles", description: "In-depth thought leadership articles to build authority in your industry." },
    { title: "Website Copy", description: "Compelling copy for your homepage, about page, and service pages." },
    { title: "Email Newsletters", description: "Engaging email content to nurture leads and keep customers coming back." },
  ];

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

      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-libre italic text-text-dark mb-8">
            Content Services.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contentServices.map((service, i) => (
              <div key={i} className="p-6 bg-white rounded border border-sand">
                <h3 className="text-xl font-bold text-text-dark mb-2">{service.title}</h3>
                <p className="text-text-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-libre italic text-vanilla text-center mb-12">
            Our Process.
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { step: "01", title: "Research", description: "We research your industry, audience, and competitors." },
              { step: "02", title: "Strategy", description: "We plan your content strategy and create a content calendar." },
              { step: "03", title: "Writing", description: "We write SEO-optimized, engaging content for your audience." },
              { step: "04", title: "Review & Publish", description: "We revise based on your feedback and help you publish." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="text-4xl font-libre italic text-vanilla/50 flex-shrink-0">{item.step}</div>
                <div>
                  <h3 className="text-xl font-bold text-vanilla mb-2">{item.title}</h3>
                  <p className="text-vanilla/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
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
        <section className="py-20 md:py-32 bg-cream">
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
        title="Ready to Create Great Content?"
        subtitle="Let's write content that works for your business."
      />
    </>
  );
}
