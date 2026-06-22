import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { getServiceBySlug, services } from "@/data/services";
import { Metadata } from "next";
import { Search, TrendingUp, Link2, Layers } from "lucide-react";

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
      answer: "SEO, or Search Engine Optimization, is the practice of optimizing your website to rank higher in search engine results pages (SERPs). Higher rankings mean more organic traffic, which leads to more leads and sales for your business. SEO is one of the most cost-effective digital marketing strategies, providing long-term returns on investment.",
    },
    {
      question: "How long does it take to see results?",
      answer: "SEO is a long-term strategy. Most clients start seeing meaningful improvements in rankings and traffic within 3-6 months. However, it can take 6-12 months to see the full impact, depending on your industry, competition, and the current state of your website.",
    },
    {
      question: "Do you guarantee rankings?",
      answer: "No ethical SEO agency can guarantee specific rankings. Search engines control their algorithms, and there are no guarantees in SEO. What we do guarantee is transparent reporting, consistent effort, and data-driven strategies aimed at improving your visibility and growing your business.",
    },
    {
      question: "What's included in your SEO packages?",
      answer: "Our SEO packages typically include comprehensive technical audits, keyword research, on-page optimization, content strategy and creation, off-page link building, local SEO (if applicable), and monthly performance reports. We tailor each package to your specific business goals.",
    },
    {
      question: "Do you work with businesses in all industries?",
      answer: "Yes! We have experience working with businesses in a wide range of industries, from local service providers to e-commerce stores to B2B companies. We adapt our strategies to your specific industry and audience.",
    },
  ];

  const seoFeatures = [
    {
      icon: Layers,
      title: "Technical SEO Audits",
      description: "We identify and fix technical issues that are holding your site back from ranking, including site speed, mobile-friendliness, crawl errors, and more.",
    },
    {
      icon: Search,
      title: "On-Page Optimization",
      description: "Optimize your content, meta tags, headings, images, and site structure for your target keywords to maximize your visibility in search results.",
    },
    {
      icon: Link2,
      title: "Off-Page Link Building",
      description: "Build high-quality, relevant backlinks from authoritative websites to increase your domain authority and improve your rankings.",
    },
    {
      icon: TrendingUp,
      title: "Local SEO",
      description: "Get found by local customers in your area with Google Business Profile optimization, local citations, and location-based keyword targeting.",
    },
    {
      icon: Search,
      title: "Content Strategy",
      description: "Create SEO-optimized content that ranks in search engines and converts visitors into customers.",
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reporting",
      description: "Monthly reports showing your progress, rankings, traffic growth, and key business metrics.",
    },
  ];

  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="SERVICE"
            title="SEO That Gets Results"
            subtitle="Full SEO strategy and execution to get you found on Google and grow your business."
            dark={true}
          />
        </div>
      </section>

      <section className="py-24 md:py-32 bg-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-libre italic text-text-dark mb-12 text-center">
              What You Get
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {seoFeatures.map((feature, i) => (
                <div key={i} className="p-10 bg-white rounded-2xl border border-sand/20 hover:shadow-xl transition-all duration-300">
                  <div className="w-16 h-16 rounded-xl bg-midnight flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-vanilla" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-dark mb-4">{feature.title}</h3>
                  <p className="text-text-muted text-lg leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-indigo">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-libre italic text-vanilla text-center mb-16">
            Our SEO Process
          </h2>
          <div className="max-w-4xl mx-auto space-y-10">
            {[
              { 
                step: "01", 
                title: "Audit & Research", 
                description: "We start with a comprehensive audit of your website and research your competitors, target audience, and industry to identify opportunities." 
              },
              { 
                step: "02", 
                title: "Strategy Development", 
                description: "We create a tailored SEO strategy based on our findings, including keyword research, content plans, and technical improvements." 
              },
              { 
                step: "03", 
                title: "Implementation", 
                description: "We execute the strategy—fixing technical issues, optimizing content, building links, and setting up tracking and analytics." 
              },
              { 
                step: "04", 
                title: "Report & Iterate", 
                description: "We provide monthly reports showing your progress and refine our strategy based on data and results to continuously improve performance." 
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-8 items-start p-8 bg-midnight rounded-2xl border border-vanilla/10">
                <div className="text-6xl font-libre italic text-vanilla/20 flex-shrink-0">{item.step}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-vanilla mb-3">{item.title}</h3>
                  <p className="text-vanilla/70 text-lg leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-libre italic text-text-dark mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-sand pb-8 last:border-0">
                <h3 className="text-2xl font-bold text-text-dark mb-4">{faq.question}</h3>
                <p className="text-text-muted text-lg leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="py-24 md:py-32 bg-cream">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-libre italic text-text-dark mb-12 text-center">
              Related Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
