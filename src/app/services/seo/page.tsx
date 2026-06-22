import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { getServiceBySlug, services } from "@/data/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services | Search Engine Optimization | Quesiono",
  description: "Quesiono provides full SEO services including on-page optimization, off-page link building, and technical SEO audits for businesses worldwide.",
  alternates: {
    canonical: "/services/seo",
  },
};

export default function SEOPage() {
  const service = getServiceBySlug("seo");
  const relatedServices = services.filter(
    (s) => s.group === "seo" && s.slug !== "seo" && !s.parentService
  );

  const faqs = [
    {
      question: "What is SEO and why do I need it?",
      answer: "SEO, or Search Engine Optimization, is the practice of optimizing your website to rank higher on search engines like Google. Higher rankings mean more organic traffic, more leads, and more revenue for your business.",
    },
    {
      question: "How long does it take to see results?",
      answer: "SEO is a long-term strategy, but most clients start seeing meaningful improvements within 3-6 months. Results depend on your industry, competition, and current website state.",
    },
    {
      question: "Do you guarantee rankings?",
      answer: "No ethical SEO agency can guarantee specific rankings, but we guarantee transparent reporting, consistent effort, and data-driven strategies aimed at improving your visibility.",
    },
    {
      question: "What's included in your SEO packages?",
      answer: "Our SEO packages typically include technical audits, on-page optimization, content strategy, link building, and monthly reporting. We tailor each package to your business needs.",
    },
  ];

  const seoFeatures = [
    {
      title: "Technical SEO Audits",
      description: "We identify and fix technical issues that are holding your site back from ranking.",
    },
    {
      title: "On-Page Optimization",
      description: "Optimize your content, meta tags, headings, and site structure for your target keywords.",
    },
    {
      title: "Off-Page Link Building",
      description: "Build high-quality, relevant backlinks to increase your domain authority.",
    },
    {
      title: "Local SEO",
      description: "Get found by local customers in your area with Google Business Profile optimization.",
    },
    {
      title: "Content Strategy",
      description: "Create SEO-optimized content that ranks and converts.",
    },
    {
      title: "Analytics & Reporting",
      description: "Monthly reports showing your progress, rankings, and traffic growth.",
    },
  ];

  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="SERVICE"
            title="SEO."
            subtitle="Full SEO strategy and execution to get you found on Google."
            dark={true}
          />
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-libre italic text-text-dark mb-8">
            What You Get.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seoFeatures.map((feature, i) => (
              <div key={i} className="p-6 bg-white rounded border border-sand">
                <h3 className="text-xl font-bold text-text-dark mb-2">{feature.title}</h3>
                <p className="text-text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-libre italic text-vanilla text-center mb-12">
            Our SEO Process.
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              { step: "01", title: "Audit & Research", description: "We audit your site and research your competitors and keywords." },
              { step: "02", title: "Strategy", description: "We create a tailored SEO strategy based on our findings." },
              { step: "03", title: "Implementation", description: "We execute the strategy—fixing issues, optimizing content, and building links." },
              { step: "04", title: "Report & Iterate", description: "We report on progress and refine our strategy based on data." },
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        title="Ready to Get Found?"
        subtitle="Let's improve your search rankings and drive more traffic to your site."
      />
    </>
  );
}
