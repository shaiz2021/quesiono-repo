import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { getServiceBySlug, services } from "@/data/services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Web Application Development | Quesiono",
  description: "Quesiono builds custom web applications, dashboards, tools, and internal systems tailored to your exact business needs.",
  alternates: {
    canonical: "/services/custom-development",
  },
};

export default function CustomDevPage() {
  const service = getServiceBySlug("custom-development");
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
              <div key={i} className="p-6 bg-white rounded border border-sand">
                <h3 className="text-xl font-bold text-text-dark mb-2">{solution.title}</h3>
                <p className="text-text-muted">{solution.description}</p>
              </div>
            ))}
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
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-sand pb-6 last:border-0">
                <h3 className="text-xl font-bold text-text-dark mb-3">{faq.question}</h3>
                <p className="text-text-muted">{faq.answer}</p>
              </div>
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
