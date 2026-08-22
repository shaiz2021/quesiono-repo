import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileEdit, Link as LinkIcon, Sparkles, Target } from "lucide-react";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";

export const metadata: Metadata = {
  title: "On Page SEO Services | Quesiono",
  description: "We optimize your website's title tags, meta descriptions, headings, content structure, internal links, and Core Web Vitals for better Google rankings.",
  alternates: {
    canonical: "/services/seo/on-page-seo",
  },
};

export default function OnPageSEOPage() {
  const parent = services.find((s) => s.slug === "seo");
  const related = services.filter((s) => s.parentService === "seo" && s.slug !== "on-page-seo");

  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="SERVICE"
            title="On-Page SEO."
            subtitle="Technical optimization for your site structure and content to rank better on Google."
            dark={true}
          />
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-vanilla text-midnight font-semibold hover:bg-vanilla/95 transition-all hover:-translate-y-0.5"
            >
              Start On-Page SEO <ArrowRight className="w-4 h-4" />
            </Link>
            {parent && (
              <Link
                href={parent.href}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-vanilla/30 text-vanilla font-semibold hover:bg-vanilla/10 transition-all hover:-translate-y-0.5"
              >
                Explore SEO Services <ArrowRight className="w-4 h-4" />
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
                  Make every page easier to understand for Google and humans.
                </h2>
                <p className="text-text-muted text-lg leading-relaxed mb-6">
                  On-page SEO is how you turn a good website into a searchable, structured, and high-performing website.
                  We optimize titles, headings, internal links, and content structure so your pages are clearer,
                  faster, and more relevant for your target keywords.
                </p>
                <p className="text-text-muted text-lg leading-relaxed">
                  The result is a site that communicates value instantly, loads smoothly on mobile, and gives search engines the signals they need to rank you.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: FileEdit,
                    title: "Metadata refresh",
                    description: "Titles and descriptions designed to improve clicks from search results.",
                  },
                  {
                    icon: Target,
                    title: "Intent alignment",
                    description: "Content tuned to match what the searcher is actually trying to do.",
                  },
                  {
                    icon: LinkIcon,
                    title: "Internal linking",
                    description: "A cleaner structure that distributes authority and helps pages rank.",
                  },
                  {
                    icon: Sparkles,
                    title: "Better UX signals",
                    description: "Layout and readability improvements that keep users engaged longer.",
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
              Our On-Page SEO Workflow.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  step: "01",
                  title: "Audit and priorities",
                  description: "We review top pages, discover gaps, and define what to fix first for maximum impact.",
                },
                {
                  step: "02",
                  title: "Keyword mapping",
                  description: "We map pages to keywords and intent so each page has a clear ranking target.",
                },
                {
                  step: "03",
                  title: "Content and structure",
                  description: "We refine headings, sections, and internal links so content becomes easier to scan and rank.",
                },
                {
                  step: "04",
                  title: "Performance polish",
                  description: "We improve page speed and Core Web Vitals where needed to support better visibility.",
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
              On-Page SEO FAQs.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: "How long does on-page SEO take to show results?",
                  a: "Some improvements can help quickly, especially when fixing metadata and internal links. Ranking movements usually take weeks, depending on competition and crawl frequency.",
                },
                {
                  q: "Is on-page SEO enough by itself?",
                  a: "It’s the foundation. Strong on-page SEO often pairs best with content strategy and off-page authority building for competitive terms.",
                },
                {
                  q: "Do you optimize existing pages or create new ones?",
                  a: "Both. We can improve current pages and also recommend new pages to cover missing topics and search intent.",
                },
                {
                  q: "Do you handle technical performance too?",
                  a: "Yes. We review key speed and UX signals, then prioritize fixes that support better rankings and conversions.",
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
              Related SEO Services.
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
        title="Ready to Optimize Your Site?"
        subtitle="Let's improve your on-page SEO."
      />
    </>
  );
}
