import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CTABanner } from "@/components/ui/CTABanner";
import { getServicesByGroup } from "@/data/services";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, PenTool, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Agency Services — Web Dev, SEO, Branding & More | Quesiono",
  description: "Quesiono offers web development, CMS development, custom development, landing pages, SEO, content writing, social media, branding, and automation services.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const webServices = getServicesByGroup("web");
  const seoServices = getServicesByGroup("seo");
  const contentServices = getServicesByGroup("content");

  const groups = [
    { name: "Web Services", services: webServices },
    { name: "SEO Services", services: seoServices },
    { name: "Content Services", services: contentServices },
  ];

  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="SERVICES"
            title="Everything Your Business Needs to Win Online."
            subtitle="From the first line of code to the last published blog post, Quesiono handles it all."
            dark={true}
            align="center"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4">
            <Link
              href="#web-services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-vanilla text-midnight font-semibold hover:bg-vanilla/95 transition-all hover:-translate-y-0.5"
            >
              Web <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#seo-services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-vanilla/30 text-vanilla font-semibold hover:bg-vanilla/10 transition-all hover:-translate-y-0.5"
            >
              SEO <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#content-services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-vanilla/30 text-vanilla font-semibold hover:bg-vanilla/10 transition-all hover:-translate-y-0.5"
            >
              Content <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-libre italic text-text-dark mb-6">
                  Choose a service based on the outcome you want.
                </h2>
                <p className="text-text-muted text-lg leading-relaxed mb-6">
                  The best digital work is a system, not a one-off deliverable. We combine strategy, design,
                  performance, and SEO so your website becomes a growth asset that improves over time.
                </p>
                <p className="text-text-muted text-lg leading-relaxed">
                  If you’re not sure where to start, pick the outcome that matches your goal and we’ll recommend the right service mix.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Layers,
                    title: "Launch a premium site",
                    description: "Design and development that feels editorial and converts.",
                    href: "/services/web-development",
                  },
                  {
                    icon: Search,
                    title: "Rank higher on Google",
                    description: "Technical SEO, content strategy, and authority building.",
                    href: "/services/seo",
                  },
                  {
                    icon: PenTool,
                    title: "Publish content consistently",
                    description: "SEO writing that establishes expertise and drives traffic.",
                    href: "/services/content-writing",
                  },
                  {
                    icon: Layers,
                    title: "Build custom systems",
                    description: "Dashboards, portals, and tools tailored to your workflows.",
                    href: "/services/custom-development",
                  },
                ].map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group rounded-2xl bg-white border border-sand/30 p-6 hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cream border border-sand/30 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-midnight" />
                    </div>
                    <div className="text-text-dark font-bold text-lg">{item.title}</div>
                    <div className="text-text-muted mt-2 leading-relaxed">{item.description}</div>
                    <div className="mt-5 inline-flex items-center gap-2 text-midnight font-semibold group-hover:text-indigo transition-colors">
                      Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6">
          {groups.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-20 last:mb-0">
              <h2
                id={
                  group.name === "Web Services"
                    ? "web-services"
                    : group.name === "SEO Services"
                    ? "seo-services"
                    : "content-services"
                }
                className="text-2xl font-bold text-text-dark mb-8 border-l-4 border-midnight pl-4 scroll-mt-28"
              >
                {group.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.services.map((service) => (
                  <ServiceCard
                    key={service.slug}
                    icon={service.icon}
                    title={service.name}
                    description={service.shortDescription}
                    href={service.href}
                    dark={false}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-libre italic text-text-dark mb-10 text-center">
              Services FAQs.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: "Do you offer combined packages?",
                  a: "Yes. Many projects include a website build plus SEO foundations and a content plan so the site launches ready to grow.",
                },
                {
                  q: "Can I start with a single service and expand later?",
                  a: "Absolutely. We can begin with the highest-impact service, then expand as you see results and refine priorities.",
                },
                {
                  q: "Do you work with clients worldwide?",
                  a: "Yes. We work remotely and deliver projects for businesses across different time zones and industries.",
                },
                {
                  q: "What makes Quesiono different?",
                  a: "We combine strategy, premium design, performance, and SEO with clear deliverables so every project drives measurable outcomes.",
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
        title="Ready to Get Started?"
        subtitle="Pick a service that fits your needs, or contact us for a custom solution."
      />
    </>
  );
}
