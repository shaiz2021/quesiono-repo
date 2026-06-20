import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CTABanner } from "@/components/ui/CTABanner";
import { services, getServicesByGroup } from "@/data/services";
import { Metadata } from "next";

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
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6">
          {groups.map((group, groupIndex) => (
            <div key={groupIndex} className="mb-20 last:mb-0">
              <h2 className="text-2xl font-bold text-text-dark mb-8 border-l-4 border-midnight pl-4">
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

      <CTABanner
        title="Ready to Get Started?"
        subtitle="Pick a service that fits your needs, or contact us for a custom solution."
      />
    </>
  );
}
