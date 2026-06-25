import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import { Metadata } from "next";
import { LayoutDashboard, Rocket, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "CMS Development Services | Quesiono",
  description: "We build on WordPress, Webflow, Shopify, and Contentful so you can manage your content without touching code.",
  alternates: {
    canonical: "/services/cms-development",
  },
};

export default function CMSDevPage() {
  const relatedServices = services.filter(
    (s) => s.group === "web" && s.slug !== "cms-development" && !s.parentService
  );

  const faqs = [
    {
      question: "Which CMS platforms do you work with?",
      answer: "We work with WordPress, Webflow, Shopify, Contentful, and other popular CMS platforms. We’ll help you choose the right one for your needs.",
    },
    {
      question: "Can I update the content myself?",
      answer: "Absolutely! That’s the whole point of a CMS. We’ll set everything up so you can easily edit text, images, and more without writing a single line of code.",
    },
    {
      question: "Do you provide training?",
      answer: "Yes! We include training sessions so you feel comfortable using your new CMS. We're also available for ongoing support if you need help later.",
    },
    {
      question: "Can you migrate my existing site to a new CMS?",
      answer: "Yes! We handle full site migrations, including content, images, and SEO redirects to preserve your rankings.",
    },
  ];

  const cmsPlatforms = [
    {
      name: "WordPress",
      description: "The world's most popular CMS, perfect for blogs, businesses, and e-commerce.",
    },
    {
      name: "Webflow",
      description: "Visual development platform for creating beautiful, responsive websites without code.",
    },
    {
      name: "Shopify",
      description: "Leading e-commerce platform for building and scaling online stores.",
    },
    {
      name: "Contentful",
      description: "Headless CMS for enterprise-grade content management across platforms.",
    },
  ];

  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="SERVICE"
            title="CMS Development."
            subtitle="Manage your content without touching code on WordPress, Webflow, Shopify, or Contentful."
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
              A fully customized content management system that fits your business needs.
              We’ll help you choose the right platform and build a site that’s easy to update.
            </p>
            <p>
              No more waiting for developers to make simple changes—you’ll be able to update
              text, images, and products yourself, anytime.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-libre italic text-text-dark mb-10 text-center">
              A CMS build that stays easy after launch.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: LayoutDashboard,
                  title: "Easy editing",
                  description: "Update pages and content without touching code.",
                },
                {
                  icon: ShieldCheck,
                  title: "SEO-friendly",
                  description: "Clean structure and redirects to protect rankings during migration.",
                },
                {
                  icon: Sparkles,
                  title: "Premium UI",
                  description: "Modern design with subtle interactions and responsive layouts.",
                },
                {
                  icon: Rocket,
                  title: "Launch-ready",
                  description: "Performance and usability handled so you can focus on growth.",
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
            Platforms We Work With.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cmsPlatforms.map((platform, i) => (
              <div key={i} className="p-6 bg-midnight rounded-2xl border border-vanilla/10 hover:border-vanilla/25 hover:bg-midnight/90 transition-all hover:-translate-y-1">
                <h3 className="text-xl font-bold text-vanilla mb-2">{platform.name}</h3>
                <p className="text-vanilla/70">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-libre italic text-text-dark mb-8">
            Our Process.
          </h2>
          <div className="space-y-8">
            {[
              { step: "01", title: "Discovery", description: "We learn about your content needs and choose the right CMS for you." },
              { step: "02", title: "Design & Build", description: "We design and develop your site with your brand in mind." },
              { step: "03", title: "Content Migration", description: "We migrate your existing content to the new CMS (if needed)." },
              { step: "04", title: "Training & Launch", description: "We train you on the CMS and launch your new site." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="text-4xl font-libre italic text-sand flex-shrink-0">{item.step}</div>
                <div>
                  <h3 className="text-xl font-bold text-text-dark mb-2">{item.title}</h3>
                  <p className="text-text-muted">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-libre italic text-text-dark mb-8">
            Frequently Asked Questions.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-sand/40 bg-white p-6 hover:shadow-lg transition-all"
              >
                <summary className="cursor-pointer list-none select-none flex items-center justify-between gap-6">
                  <span className="text-text-dark font-semibold text-lg">{faq.question}</span>
                  <span className="w-9 h-9 rounded-full bg-cream border border-sand/30 flex items-center justify-center text-midnight transition-transform group-open:rotate-45">
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
        <section className="py-20 md:py-32 bg-white">
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
        title="Ready to Manage Your Own Content?"
        subtitle="Let's build a CMS that works for you."
      />
    </>
  );
}
