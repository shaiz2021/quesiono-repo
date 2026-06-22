import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { getServiceBySlug, services } from "@/data/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing Page Development Services | Quesiono",
  description: "High-converting landing pages built for paid traffic, product launches, and lead generation campaigns.",
  alternates: {
    canonical: "/services/landing-page-development",
  },
};

export default function LandingPagePage() {
  const service = getServiceBySlug("landing-page-development");
  const relatedServices = services.filter(
    (s) => s.group === "web" && s.slug !== "landing-page-development" && !s.parentService
  );

  const faqs = [
    {
      question: "What is a landing page?",
      answer: "A landing page is a single web page designed specifically for a marketing or advertising campaign. Its goal is to convert visitors into leads or customers.",
    },
    {
      question: "How long does it take to build a landing page?",
      answer: "Most landing pages take 1-2 weeks, depending on complexity and whether we're writing the copy for you.",
    },
    {
      question: "Do you provide copywriting?",
      answer: "Yes! We offer copywriting services to ensure your landing page has compelling, conversion-focused content.",
    },
    {
      question: "Can you A/B test landing pages?",
      answer: "Yes! We can set up A/B tests to optimize your landing page for better conversion rates over time.",
    },
  ];

  const landingPageTypes = [
    { title: "Lead Generation", description: "Capture leads with forms, free downloads, and email sign-ups." },
    { title: "Product Launches", description: "Build hype and pre-sell your new product or service." },
    { title: "Paid Traffic", description: "Optimize for Google Ads, Facebook Ads, and other paid campaigns." },
    { title: "Event Registration", description: "Sign up attendees for webinars, workshops, and events." },
  ];

  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="SERVICE"
            title="Landing Page Development."
            subtitle="High-converting landing pages built for paid traffic, product launches, and lead generation."
            dark={true}
          />
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-libre italic text-text-dark mb-8">
            Types of Landing Pages.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {landingPageTypes.map((type, i) => (
              <div key={i} className="p-6 bg-white rounded border border-sand">
                <h3 className="text-xl font-bold text-text-dark mb-2">{type.title}</h3>
                <p className="text-text-muted">{type.description}</p>
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
              { step: "01", title: "Strategy", description: "We define your goal, audience, and key performance indicators." },
              { step: "02", title: "Copy & Design", description: "We write compelling copy and design a high-converting layout." },
              { step: "03", title: "Development", description: "We build your landing page with performance and conversions in mind." },
              { step: "04", title: "Launch & Optimize", description: "We launch and help you optimize for better results." },
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
        title="Ready to Launch Your Landing Page?"
        subtitle="Let's build something that converts."
      />
    </>
  );
}
