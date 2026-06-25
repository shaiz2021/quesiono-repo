import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import { Metadata } from "next";
import { Gauge, LayoutTemplate, MousePointerClick, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Landing Page Development Services | Quesiono",
  description: "High-converting landing pages built for paid traffic, product launches, and lead generation campaigns.",
  alternates: {
    canonical: "/services/landing-page-development",
  },
};

export default function LandingPagePage() {
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
              <div key={i} className="p-7 bg-white rounded-2xl border border-sand/30 hover:shadow-xl transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold text-text-dark mb-2">{type.title}</h3>
                <p className="text-text-muted">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-libre italic text-text-dark mb-10 text-center">
              Conversion elements, designed with restraint.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {[
                {
                  icon: LayoutTemplate,
                  title: "Clear hierarchy",
                  description: "Messaging and layout that guide the eye toward the next step.",
                },
                {
                  icon: MousePointerClick,
                  title: "Strong CTA paths",
                  description: "Buttons and forms that feel natural, not aggressive.",
                },
                {
                  icon: Gauge,
                  title: "Fast performance",
                  description: "Optimized loading so paid clicks don’t get wasted.",
                },
                {
                  icon: Sparkles,
                  title: "Light motion",
                  description: "Subtle hover and scroll effects that elevate the experience.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl bg-cream border border-sand/30 p-8 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-sand/30 flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-midnight" />
                  </div>
                  <div className="text-text-dark font-bold text-xl">{item.title}</div>
                  <div className="text-text-muted mt-3 leading-relaxed">{item.description}</div>
                </div>
              ))}
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-sand/40 bg-cream p-6 hover:shadow-lg transition-all"
              >
                <summary className="cursor-pointer list-none select-none flex items-center justify-between gap-6">
                  <span className="text-text-dark font-semibold text-lg">{faq.question}</span>
                  <span className="w-9 h-9 rounded-full bg-white border border-sand/30 flex items-center justify-center text-midnight transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="text-text-muted mt-4 leading-relaxed">{faq.answer}</div>
              </details>
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
