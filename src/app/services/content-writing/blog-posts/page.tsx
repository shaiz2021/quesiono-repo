import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, BookOpen, Search, Sparkles } from "lucide-react";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";

export const metadata: Metadata = {
  title: "Blog Post Writing Services | Quesiono",
  description: "We write well-researched, SEO-optimized blog posts that drive organic traffic and establish your brand as an authority in your niche.",
  alternates: {
    canonical: "/services/content-writing/blog-posts",
  },
};

export default function BlogPostsPage() {
  const parent = services.find((s) => s.slug === "content-writing");
  const related = services.filter((s) => s.parentService === "content-writing" && s.slug !== "blog-posts");

  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="SERVICE"
            title="Blog Post Writing."
            subtitle="Well-researched, SEO-optimized blog posts that drive organic traffic and establish authority."
            dark={true}
          />
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-vanilla text-midnight font-semibold hover:bg-vanilla/95 transition-all hover:-translate-y-0.5"
            >
              Start Content Program <ArrowRight className="w-4 h-4" />
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
                  Blog posts that rank, educate, and convert.
                </h2>
                <p className="text-text-muted text-lg leading-relaxed mb-6">
                  A strong blog is a long-term growth engine. We write blog posts that answer real questions,
                  match search intent, and guide readers toward your product or service without feeling salesy.
                </p>
                <p className="text-text-muted text-lg leading-relaxed">
                  You get a consistent cadence, a clear content strategy, and posts designed to earn visibility on Google and trust with your audience.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Search,
                    title: "Keyword-led topics",
                    description: "We target terms your customers actually search for, then build the best page for it.",
                  },
                  {
                    icon: BookOpen,
                    title: "Readable structure",
                    description: "Clean headings and flow so readers stay longer and understand faster.",
                  },
                  {
                    icon: BarChart3,
                    title: "Built for outcomes",
                    description: "Posts crafted to support leads, signups, demos, and product education.",
                  },
                  {
                    icon: Sparkles,
                    title: "Brand consistency",
                    description: "Your voice, your standards, and a premium editorial feel across the site.",
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
              Our Blog Writing Workflow.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  step: "01",
                  title: "Topic planning",
                  description: "We align topics with your offers, your funnel, and the questions buyers ask before they choose.",
                },
                {
                  step: "02",
                  title: "Outline and intent",
                  description: "We map headings to search intent, build internal links, and plan sections for scannability.",
                },
                {
                  step: "03",
                  title: "Write and optimize",
                  description: "We write with clarity first, then polish for SEO, tone, and conversion-friendly calls to action.",
                },
                {
                  step: "04",
                  title: "Publish and improve",
                  description: "We can help publish in your CMS and refine posts over time based on performance data.",
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
              Blog Writing FAQs.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: "How many blog posts should we publish per month?",
                  a: "Consistency wins. We can start with a manageable cadence, then scale as you see results. The right number depends on competition and resources.",
                },
                {
                  q: "Do you handle keyword research?",
                  a: "Yes. We can plan topics around your services, product use cases, and buyer questions, then recommend keywords and internal linking targets.",
                },
                {
                  q: "Can you update old blog posts too?",
                  a: "Definitely. Updating and improving existing posts is often faster than starting from scratch and can unlock quick ranking gains.",
                },
                {
                  q: "Will the posts include calls to action?",
                  a: "Yes. We weave CTAs naturally, guiding readers to the next step, whether that’s a demo, a lead form, or a related service page.",
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
        title="Ready to Grow Your Blog?"
        subtitle="Let's write blog posts that work."
      />
    </>
  );
}
