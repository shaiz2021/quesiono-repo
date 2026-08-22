import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import { Metadata } from "next";
import { Gauge, Layers, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development Services | Quesiono",
  description: "Professional web development services by Quesiono. We build fast, responsive, SEO-ready websites for businesses of all sizes worldwide.",
  alternates: {
    canonical: "/services/web-development",
  },
};

export default function WebDevPage() {
  const relatedServices = services.filter(
    (s) => s.group === "web" && s.slug !== "web-development" && !s.parentService
  );

  const faqs = [
    {
      question: "What is included in a web development project?",
      answer: "Our web development projects include design, development, testing, deployment, and basic SEO setup. We also provide training so you can manage your site.",
    },
    {
      question: "How long does it take to build a website?",
      answer: "Most projects take 4-8 weeks depending on complexity. We'll give you a clear timeline during our initial consultation.",
    },
    {
      question: "Do you work with businesses outside of the US?",
      answer: "Absolutely! We work with clients all around the world.",
    },
    {
      question: "What do you need from me before we start?",
      answer: "We'll need your brand assets, content (or guidance on content), and a clear idea of your goals for the website.",
    },
  ];

  const tech = ["Next.js", "React", "WordPress", "Shopify", "Node.js", "eCommerce", "Wix", "Python"];

  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="SERVICE"
            title="Web Development."
            subtitle="Fast, responsive, SEO-ready websites that help your business grow online."
            dark={true}
          />
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-libre italic text-text-dark mb-8">
            What You Get.
          </h2>
          <div className="space-y-6 text-text-muted text-lg">
            <p>
              A custom-built website designed specifically for your business, not a template.
              We focus on performance, accessibility, and conversion optimization from day one.
            </p>
            <p>
              Every site we build is responsive, meaning it works perfectly on mobile, tablet,
              and desktop. We also set up basic SEO so your site is ready to be found by search engines.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-libre italic text-text-dark mb-10 text-center">
              Built for performance and trust.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Gauge,
                  title: "Fast load times",
                  description: "Speed-first implementation that feels premium on every device.",
                },
                {
                  icon: Layers,
                  title: "Scalable structure",
                  description: "Clean layouts and reusable sections that are easy to evolve.",
                },
                {
                  icon: ShieldCheck,
                  title: "Accessible by default",
                  description: "Solid UX fundamentals so more people can use your site comfortably.",
                },
                {
                  icon: Sparkles,
                  title: "Light interactions",
                  description: "Hover states and subtle motion that elevate the experience.",
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
          <h2 className="text-2xl font-bold text-vanilla text-center mb-12">
            Tech We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {tech.map((t, i) => (
              <div
                key={i}
                className="px-3 md:px-6 py-3 bg-midnight text-vanilla rounded-full border border-vanilla/10 font-semibold hover:border-vanilla/30 hover:bg-midnight/90 transition-all hover:-translate-y-0.5"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-libre italic text-text-dark mb-8">
            Our Process for Web Development.
          </h2>
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "We learn about your business, goals, and audience. Then we create a clear plan for your site.",
              },
              {
                step: "02",
                title: "Design",
                description: "We create wireframes and designs that match your brand and are optimized for conversions.",
              },
              {
                step: "03",
                title: "Development",
                description: "We build your site using modern technologies, focusing on performance and maintainability.",
              },
              {
                step: "04",
                title: "Testing & Launch",
                description: "We test everything thoroughly, then launch your site and help you understand how to use it.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="text-4xl font-libre italic text-sand flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-muted">{item.description}</p>
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
                  <span className="text-text-dark font-semibold text-lg">
                    {faq.question}
                  </span>
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
        title="Ready to Build Your Website?"
        subtitle="Get in touch and let's discuss your project."
      />
    </>
  );
}
