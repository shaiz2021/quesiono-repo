import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Globe, Link as LinkIcon, Newspaper, Sparkles } from "lucide-react";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";

export const metadata: Metadata = {
  title: "Off Page SEO and Link Building | Quesiono",
  description: "Build domain authority through strategic link acquisition, guest posting, digital PR, and citation building with Quesiono's off-page SEO services.",
  alternates: {
    canonical: "/services/seo/off-page-seo",
  },
};

export default function OffPageSEOPage() {
  const parent = services.find((s) => s.slug === "seo");
  const related = services.filter((s) => s.parentService === "seo" && s.slug !== "off-page-seo");

  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="SERVICE"
            title="Off-Page SEO."
            subtitle="Build domain authority with strategic links and digital PR to improve your search rankings."
            dark={true}
          />
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-vanilla text-midnight font-semibold hover:bg-vanilla/95 transition-all hover:-translate-y-0.5"
            >
              Start Off-Page SEO <ArrowRight className="w-4 h-4" />
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
                  Earn trust signals that increase rankings over time.
                </h2>
                <p className="text-text-muted text-lg leading-relaxed mb-6">
                  Off-page SEO is about authority. When reputable websites mention and link to your business, search engines
                  see a stronger signal of trust and relevance. We focus on quality-first link building and digital PR,
                  aligned with your brand and your market.
                </p>
                <p className="text-text-muted text-lg leading-relaxed">
                  Our approach is editorial, intentional, and sustainable, built to support long-term visibility instead of short-term hacks.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: LinkIcon,
                    title: "Quality backlinks",
                    description: "Links that make sense for your industry and improve your authority.",
                  },
                  {
                    icon: Newspaper,
                    title: "Digital PR angles",
                    description: "Earn mentions with story-led outreach and relevant publications.",
                  },
                  {
                    icon: Globe,
                    title: "Citations and listings",
                    description: "Clean brand presence across directories and location signals where needed.",
                  },
                  {
                    icon: Sparkles,
                    title: "Safer growth",
                    description: "A strategy designed to reduce risk and avoid spam signals.",
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
              Our Off-Page SEO Workflow.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  step: "01",
                  title: "Baseline and opportunities",
                  description: "We review your current backlink profile, competitors, and content assets to find realistic wins.",
                },
                {
                  step: "02",
                  title: "Target list and positioning",
                  description: "We build an outreach target list and define angles that fit your brand and audience.",
                },
                {
                  step: "03",
                  title: "Outreach and placements",
                  description: "We execute outreach with quality filters and focus on placements that create trust signals.",
                },
                {
                  step: "04",
                  title: "Report and iterate",
                  description: "We track links earned, anchor patterns, and progress, then refine based on what works.",
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
              Off-Page SEO FAQs.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: "Do you guarantee a specific number of links?",
                  a: "We focus on quality and relevance. We can set expectations based on scope, but the primary goal is sustainable authority growth that supports rankings.",
                },
                {
                  q: "Is link building risky?",
                  a: "It can be when it’s spammy. Our approach is editorial and selective, aiming for safer, brand-aligned placements rather than volume.",
                },
                {
                  q: "Do you handle local citations?",
                  a: "Yes. If local SEO matters for your business, we can improve listings consistency to strengthen location signals.",
                },
                {
                  q: "What do you need from us to start?",
                  a: "A clear offer, target market, and access to existing content or brand assets. We can also help plan new assets that make outreach easier.",
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

            <div className="mt-10 rounded-2xl border border-sand/40 bg-cream p-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white border border-sand/30 flex items-center justify-center">
                  <BadgeCheck className="w-6 h-6 text-midnight" />
                </div>
                <div>
                  <div className="text-text-dark font-semibold">Quality-first commitment</div>
                  <div className="text-text-muted">
                    We prioritize relevant sites, natural anchor text, and brand safety.
                  </div>
                </div>
              </div>
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
        title="Ready to Build Your Authority?"
        subtitle="Let's improve your off-page SEO."
      />
    </>
  );
}
