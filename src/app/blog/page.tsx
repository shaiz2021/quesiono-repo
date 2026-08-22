import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Code2, Search, Sparkles, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing & Web Development Blog | Quesiono",
  description: "Insights, tutorials, and strategies from the Quesiono team on web development, SEO, automation, and growing your business online.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="BLOG"
            title="Insights & Strategies for Growing Online"
            subtitle="Tips, tutorials, and lessons from our work with clients across industries."
            dark={true}
            align="center"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="#articles"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-vanilla text-midnight font-semibold hover:bg-vanilla/95 transition-all hover:-translate-y-0.5"
            >
              Browse Articles <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-vanilla/30 text-vanilla font-semibold hover:bg-vanilla/10 transition-all hover:-translate-y-0.5"
            >
              Ask a Question <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-libre italic text-text-dark mb-8 text-center">
              Topics we write about.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Code2,
                  title: "Web development",
                  description: "Performance, structure, and best practices for modern sites.",
                },
                {
                  icon: Search,
                  title: "SEO strategy",
                  description: "On-page foundations, content planning, and ranking improvements.",
                },
                {
                  icon: Zap,
                  title: "Automation",
                  description: "Workflows, tools, and systems that save time and scale operations.",
                },
                {
                  icon: Sparkles,
                  title: "Brand and UX",
                  description: "Premium design, messaging, and conversion-friendly experiences.",
                },
                {
                  icon: BookOpen,
                  title: "Content systems",
                  description: "Editorial structure, publishing cadence, and authority building.",
                },
                {
                  icon: ArrowRight,
                  title: "Practical growth",
                  description: "Clear steps you can apply, without fluff or buzzwords.",
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

      <div id="articles" className="scroll-mt-28">
        <BlogGrid />
      </div>

      <CTABanner
        title="Want More Tips?"
        subtitle="Get in touch and let's discuss how we can help you grow online."
      />
    </>
  );
}
