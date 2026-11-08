import { featuredTestimonials } from "@/data/testimonials";
import { Section } from "@/components/ui/Section";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
export function TestimonialsSection({
  limit = 3,
  tone = "white",
}: {
  limit?: number;
  tone?: "white" | "cream" | "ink";
}) {
  const items = featuredTestimonials().slice(0, limit);
  if (!items.length) return null;
  return (
    <Section tone={tone} width="wide">
      <h2 className="text-step-4 font-bold">In our clients’ words</h2>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {items.map((t) => (
          <TestimonialCard
            key={t.name}
            {...t}
            tone={tone === "ink" ? "dark" : "light"}
          />
        ))}
      </div>
    </Section>
  );
}
