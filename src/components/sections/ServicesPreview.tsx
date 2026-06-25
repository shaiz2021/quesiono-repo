import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

export function ServicesPreview() {
  const allServices = services.filter((s) => !s.parentService);

  return (
    <section className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="WHAT WE DO"
          title="Every Service Your Business Needs Online."
          align="center"
          dark={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.slice(0, 6).map((service) => (
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

        <div className="text-center mt-12">
          <Button href="/services" variant="secondary" className="bg-midnight text-vanilla">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
