import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { Metadata } from "next";
import { ArrowRight, BookOpen, PenTool, Search, Sparkles } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";

export const metadata: Metadata = {
  title: "Article Writing Services | Quesiono",
  description: "Long-form articles, thought leadership pieces, and editorial content written by experienced writers and optimized for search.",
  alternates: {
    canonical: "/services/content-writing/article-writing",
  },
};

export default function ArticleWritingPage() {
  const parent = services.find((s) => s.slug === "content-writing");
  const related = services.filter((s) => s.parentService === "content-writing" && s.slug !== "article-writing");

  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="SERVICE"
            title="Article Writing."
            subtitle="Long-form articles, thought leadership pieces, and editorial content that establishes your expertise."
            dark={true}
          />
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-vanilla text-midnight font-semibold hover:bg-vanilla/95 transition-all hover:-translate-y-0.5"
            >
              Start Article Writing <ArrowRight className="w-4 h-4" />
            </Link>
            {parent && (
              <Link
                href={parent.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-vanilla/30 text-vanilla font-semibold hover:bg-vanilla/10 transition-all hover:-translate-y-0.5"
              >
                Explore Content Writing <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-libre italic text-text-dark mb-6">
                  Articles that build authority and attract search traffic.
                </h2>
                <p className="text-text-muted text-lg leading-relaxed mb-6">
                  Great article writing blends editorial craft with search intent. We write long-form pieces that earn trust,
                  communicate expertise, and create an evergreen asset your brand can reuse across sales, newsletters, and social.
                </p>
                <p className="text-text-muted text-lg leading-relaxed">
                  Every article is structured for clarity, scannability, and conversions, with headlines, subheadings, and internal links that
                  support your SEO strategy.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: PenTool,
                    title: "Editorial quality",
                    description: "A premium reading experience with strong framing, flow, and tone.",
                  },
                  {
                    icon: Search,
                    title: "SEO-ready structure",
                    description: "Clean hierarchy and intent-driven sections for better ranking potential.",
                  },
                  {
                    icon: BookOpen,
                    title: "Research-backed",
                    description: "We validate claims, add context, and improve credibility with details.",
                  },
                  {
                    icon: Sparkles,
                    title: "Brand voice",
                    description: "Writing that sounds like your company, not generic content.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group rounded-2xl bg-white border border-sand/30 p-6 hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cream border border-sand/30 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-midnight" />
                    </div>
                    <div className="text-text-dark font-bold text-lg">{item.title}</div>
                    <div className="text-text-muted mt-2 leading-relaxed">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-libre italic text-vanilla mb-10">
              Our Article Writing Process.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  step: "01",
                  title: "Angle & intent",
                  description: "We define the topic, target reader, and outcome. Then we map the best angle and search intent.",
                },
                {
                  step: "02",
                  title: "Research & outline",
                  description: "We build an outline that reads like an editorial piece and supports your SEO structure.",
                },
                {
                  step: "03",
                  title: "Write & refine",
                  description: "We write the full draft, polish for clarity, and align the voice with your brand style.",
                },
                {
                  step: "04",
                  title: "Optimize & deliver",
                  description: "We finalize headings, internal links, and meta suggestions so publishing is easy.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl bg-midnight border border-vanilla/10 p-8 hover:bg-midnight/90 transition-colors"
                >
                  <div className="text-6xl font-libre italic text-vanilla/15">{item.step}</div>
                  <div className="text-2xl font-bold text-vanilla mt-4">{item.title}</div>
                  <div className="text-vanilla/70 mt-3 leading-relaxed">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-libre italic text-text-dark mb-10 text-center">
              Article Writing FAQs.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: "Do you write for specific industries?",
                  a: "Yes. We adapt research depth, tone, and examples to your industry. If your niche is technical, we’ll collaborate with your subject matter experts for accuracy.",
                },
                {
                  q: "Can you match an existing brand voice?",
                  a: "Absolutely. We can work from your existing pages, style guide, and example articles to match your tone and vocabulary.",
                },
                {
                  q: "Will the articles be SEO optimized?",
                  a: "Yes. We structure the article for search intent and recommend headings, internal links, and metadata so it’s ready to rank and convert.",
                },
                {
                  q: "Can you publish the articles too?",
                  a: "If you want, we can help upload to your CMS, format the page, and add internal links to keep the site structure clean.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-sand/40 bg-cream p-6 hover:shadow-lg transition-all"
                >
                  <summary className="cursor-pointer list-none select-none flex items-center justify-between gap-6">
                    <span className="text-text-dark font-semibold text-lg">{item.q}</span>
                    <span className="w-9 h-9 rounded-full bg-white border border-sand/30 flex items-center justify-center text-midnight transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="text-text-muted mt-4 leading-relaxed">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 md:py-32 bg-cream">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-libre italic text-text-dark mb-10 text-center">
              Related Content Services.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((s) => (
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
        title="Ready to Publish Great Articles?"
        subtitle="Let's write content that positions you as an authority."
      />
    </>
  );
}
