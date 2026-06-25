import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import { Metadata } from "next";
import { Blocks, Gauge, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Web Application Development | Quesiono",
  description: "Quesiono builds custom web applications, dashboards, tools, and internal systems tailored to your exact business needs.",
  alternates: {
    canonical: "/services/custom-development",
  },
};

export default function CustomDevPage() {
  const relatedServices = services.filter(
    (s) => s.group === "web" && s.slug !== "custom-development" && !s.parentService
  );

  const faqs = [
    {
      question: "What kind of custom solutions do you build?",
      answer: "We build custom web applications, internal tools, dashboards, automation systems, e-commerce platforms, and more. If you can dream it, we can build it.",
    },
    {
      question: "What technologies do you use?",
      answer: "We use modern technologies like Next.js, React, Node.js, PostgreSQL, and more. We choose the right stack for your specific needs.",
    },
    {
      question: "How long does a custom project take?",
      answer: "Timelines vary based on complexity, but most custom projects take 8-24 weeks. We'll give you a detailed timeline during our discovery phase.",
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes! We offer ongoing maintenance and support packages to keep your custom application running smoothly.",
    },
  ];

  const customSolutions = [
    { title: "Internal Tools", description: "Streamline operations with custom tools for your team." },
    { title: "Dashboards & Analytics", description: "Real-time dashboards to track your business metrics." },
    { title: "Automation Systems", description: "Automate repetitive tasks to save time and money." },
    { title: "E-commerce Platforms", description: "Custom online stores tailored to your products and customers." },
  ];

  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="SERVICE"
            title="Custom Development."
            subtitle="Bespoke web applications, dashboards, tools, and internal systems tailored to your exact needs."
            dark={true}
          />
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-libre italic text-text-dark mb-8">
            What We Build.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {customSolutions.map((solution, i) => (
              <div key={i} className="p-7 bg-white rounded-2xl border border-sand/30 hover:shadow-xl transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold text-text-dark mb-2">{solution.title}</h3>
                <p className="text-text-muted">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-libre italic text-text-dark mb-10 text-center">
              Why build custom instead of forcing a template.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {[
                {
                  icon: Blocks,
                  title: "Exact fit",
                  description: "Your workflows and data model, not someone else’s assumptions.",
                },
                {
                  icon: Gauge,
                  title: "Performance",
                  description: "Fast experiences that stay responsive as you scale.",
                },
                {
                  icon: ShieldCheck,
                  title: "Reliability",
                  description: "Cleaner architecture, fewer hacks, and easier maintenance.",
                },
                {
                  icon: Zap,
                  title: "Automation",
                  description: "Reduce manual work with smart integrations and systems.",
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
              { step: "01", title: "Discovery & Planning", description: "We dig deep into your business needs and define the project scope." },
              { step: "02", title: "Design", description: "We create wireframes and designs for your custom solution." },
              { step: "03", title: "Development", description: "We build your application using modern, scalable technologies." },
              { step: "04", title: "Testing & Launch", description: "We test thoroughly, then launch and provide training." },
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
        title="Need a Custom Solution?"
        subtitle="Let's build something that fits your business perfectly."
      />
    </>
  );
}
