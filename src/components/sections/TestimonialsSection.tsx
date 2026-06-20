import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="TESTIMONIALS"
          title="What Our Clients Say."
          align="center"
          dark={false}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
