import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { Metadata } from "next";
import { Code2, Search, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About Quesiono — The Digital Agency Behind the Brand",
  description: "Quesiono is a founder-led digital agency specializing in web development, SEO, and automation for clients worldwide. We're passionate about building high-quality digital products that deliver real results.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  const stats = [
    { number: "55+", label: "Monthly Interactions" },
    { number: "20+", label: "Projects Delivered" },
    { number: "9", label: "Core Services" },
    { number: "3+", label: "Years Building" },
  ];

  const values = [
    { title: "Transparency", description: "No hidden fees, no surprise delays. You'll always know what we're working on and why." },
    { title: "Craft", description: "We care about the details. Every line of code, every pixel, every word matters." },
    { title: "Results", description: "We don't just deliver work, we deliver outcomes that move the needle for your business." },
  ];

  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="ABOUT US"
            title="We are Quesiono. A digital agency built from the ground up."
            subtitle="What started as a one-person operation has grown into a full-service agency serving businesses across industries worldwide. Every project we take on is treated as if it were our own."
            dark={true}
          />
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square bg-midnight rounded flex items-center justify-center">
                <span className="text-vanilla/20 text-9xl font-libre italic">Q</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-libre italic text-text-dark mb-6">
                Our Story.
              </h2>
              <p className="text-text-muted text-lg mb-6">
                Quesiono was founded with a simple mission: to build a digital agency that actually delivers on its promises. We believe that great work comes from a direct relationship with our clients, no layers of account managers, no hidden fees, just honest, high-quality work.
              </p>
              <p className="text-text-muted text-lg">
                Today, our work blends premium design, modern development, and search-first thinking. The goal is always the same: create a digital presence that looks great, loads fast, and helps your business grow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-libre italic text-vanilla mb-2">{stat.number}</div>
                <div className="text-vanilla/70 uppercase tracking-wider text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              eyebrow="HOW WE BUILD"
              title="Strategy, then craft."
              subtitle="A premium site is more than visuals. It’s positioning, performance, and structure working together."
              align="center"
              dark={false}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: Sparkles,
                  title: "Editorial design",
                  description: "Typography, spacing, and interaction details that feel intentional and premium.",
                },
                {
                  icon: Code2,
                  title: "Modern development",
                  description: "Clean, maintainable builds focused on speed, accessibility, and responsiveness.",
                },
                {
                  icon: Search,
                  title: "Search-first structure",
                  description: "Information architecture and on-page patterns that make ranking easier.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group bg-cream p-8 rounded-2xl shadow-sm border border-sand/20 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-sand/30 flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-midnight" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark mb-3">{item.title}</h3>
                  <p className="text-text-muted leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="OUR VALUES"
            title="What We Stand For."
            align="center"
            dark={false}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {values.map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-sand/20 hover:shadow-xl transition-all hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-text-dark mb-4">{value.title}</h3>
                <p className="text-text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-midnight">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-libre italic text-vanilla max-w-4xl mx-auto">
            We exist to help businesses grow online without the guesswork.
          </h2>
        </div>
      </section>

      <CTABanner
        title="Let's Build Something Together."
        subtitle="Get in touch and let's see how we can help your business grow online."
      />
    </>
  );
}
