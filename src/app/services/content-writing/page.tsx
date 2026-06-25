import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import { Metadata } from "next";
import { BookOpen, Search, Sparkles, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Content Writing Services | Quesiono",
  description: "Professional content writing for websites, blogs, and articles. SEO-optimized, human-written content that ranks and converts.",
  alternates: {
    canonical: "/services/content-writing",
  },
};

export default function ContentWritingPage() {
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
              <div key={i} className="p-7 bg-white rounded-2xl border border-sand/30 hover:shadow-xl transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold text-text-dark mb-2">{service.title}</h3>
                <p className="text-text-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-libre italic text-text-dark mb-10 text-center">
              Content that supports SEO and sales.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Search,
                  title: "Search intent",
                  description: "Topics aligned with what customers actually look for.",
                },
                {
                  icon: BookOpen,
                  title: "Editorial craft",
                  description: "Readable structure, strong flow, and consistent tone.",
                },
                {
                  icon: TrendingUp,
                  title: "Growth engine",
                  description: "Evergreen posts that compound visibility over time.",
                },
                {
                  icon: Sparkles,
                  title: "Premium finish",
                  description: "Clean formatting and details that elevate the page experience.",
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
        title="Ready to Create Great Content?"
        subtitle="Let's write content that works for your business."
      />
    </>
  );
}
