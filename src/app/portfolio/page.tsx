import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Target, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio | Web Design & Development Projects | Quesiono",
  description: "Browse Quesiono's portfolio of web development, SEO, branding, and automation projects delivered for clients across multiple industries.",
  alternates: {
    canonical: "/portfolio",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="PORTFOLIO"
            title="Our Work Speaks for Itself"
            subtitle="A selection of websites and digital builds designed to perform. Explore projects by category and see how we approach strategy, design, and execution."
            dark={true}
            align="center"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-vanilla text-midnight font-semibold hover:bg-vanilla/95 transition-all hover:-translate-y-0.5"
            >
              Browse Work <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-vanilla/30 text-vanilla font-semibold hover:bg-vanilla/10 transition-all hover:-translate-y-0.5"
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Sparkles,
                title: "Editorial design",
                description: "Premium layouts with subtle motion and polished interactions.",
              },
              {
                icon: Target,
                title: "Conversion-first",
                description: "Clear messaging, clean hierarchy, and calls to action that feel natural.",
              },
              {
                icon: TrendingUp,
                title: "SEO foundations",
                description: "Structure and performance choices that support long-term visibility.",
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
      </section>

      <div id="work" className="scroll-mt-28">
        <PortfolioGrid />
      </div>

      <CTABanner
        title="Ready to Be Next?"
        subtitle="Let's build something great together."
      />
    </>
  );
}
