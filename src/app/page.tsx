import { HeroHome } from "@/components/sections/HeroHome";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { WhyQuesiono } from "@/components/sections/WhyQuesiono";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProductsStrip } from "@/components/sections/ProductsStrip";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTABanner } from "@/components/ui/CTABanner";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase, Building2, ShoppingBag, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Quesiono - Web Design & Digital Agency",
  description: "Quesiono is a full-service digital agency offering web development, SEO, branding, automation, and content writing for growing businesses worldwide.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <HeroHome />
      <ServicesPreview />
      <FeaturedWork />
      <WhyQuesiono />
      <ProcessSection />
      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-7 mb-12">
              <div>
                <div className="text-text-muted text-xs font-semibold tracking-widest uppercase">
                  Industries
                </div>
                <h2 className="text-4xl md:text-5xl font-libre italic text-text-dark mt-3">
                  Built for businesses that need results.
                </h2>
                <p className="text-text-muted text-lg leading-relaxed mt-5 max-w-2xl">
                  We help teams launch premium websites, improve search visibility, and publish content that converts. The common thread is clarity, performance, and measurable outcomes.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-midnight text-vanilla font-semibold hover:bg-indigo transition-colors w-fit"
              >
                Explore Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Briefcase,
                  title: "Service businesses",
                  description: "Pages designed to capture leads and explain value fast.",
                },
                {
                  icon: ShoppingBag,
                  title: "E-commerce brands",
                  description: "Performance-first builds that support SEO and conversion.",
                },
                {
                  icon: Building2,
                  title: "B2B teams",
                  description: "Positioning, authority content, and polished brand presence.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl bg-white border border-sand/30 p-8 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-cream border border-sand/30 flex items-center justify-center mb-5">
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
      <ProductsStrip />
      <TestimonialsSection />
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream border border-sand/30 text-text-dark font-semibold">
                <Sparkles className="w-4 h-4" />
                Quick FAQs
              </div>
              <h2 className="text-4xl md:text-5xl font-libre italic text-text-dark mt-6">
                Clear answers, no fluff.
              </h2>
              <p className="text-text-muted text-lg leading-relaxed mt-5 max-w-2xl mx-auto">
                Get a sense of how Quesiono works, what you get, and how we approach performance, SEO, and design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: "Do you handle both design and development?",
                  a: "Yes. We design the experience, build the site, and ship it with performance and SEO foundations baked in.",
                },
                {
                  q: "Can you work with existing brand guidelines?",
                  a: "Absolutely. We can match your current brand system and elevate the UI with subtle motion and premium details.",
                },
                {
                  q: "Do you offer SEO alongside a website build?",
                  a: "Yes. We can include technical SEO, on-page structure, and a content plan so the site launches ready to rank.",
                },
                {
                  q: "What makes the experience feel premium?",
                  a: "Typography, spacing, interaction details, and a clean hierarchy. Small touches add up without feeling heavy.",
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
      <CTABanner
        title="Ready to Build Something That Works?"
        subtitle="Let's discuss your project and see how we can help you grow online."
      />
    </>
  );
}
