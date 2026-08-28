import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Reveal } from "@/components/motion/Reveal";
import { featuredTestimonials, testimonials } from "@/data/testimonials";
import { getProjectBySlug } from "@/data/projects";

/**
 * Client quotes. `limit` lets /about and the home page show a short rail while
 * /testimonials renders the lot from the same component.
 */
export function TestimonialsSection({
  limit = 3,
  showAllLink = true,
  tone = "cream",
}: {
  limit?: number;
  showAllLink?: boolean;
  tone?: "cream" | "white";
}) {
  const pool = featuredTestimonials();
  const shown = (pool.length >= limit ? pool : testimonials).slice(0, limit);

  if (!shown.length) return null;

  const [lead, ...rest] = shown;

  return (
    <Section tone={tone} spacing="xl" width="wide" id="testimonials">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading
          eyebrow="In their words"
          title="What clients said after launch"
          subtitle="Every one of these is tied to a case study you can open and check the numbers on."
          size="xl"
          className="max-w-2xl"
        />
        {showAllLink ? (
          <Link
            href="/testimonials"
            className="group inline-flex items-center gap-2 font-semibold text-indigo transition-colors hover:text-midnight"
          >
            All {testimonials.length} references
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        ) : null}
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <TestimonialCard
            quote={lead.quote}
            name={lead.name}
            role={lead.role}
            company={lead.company}
            projectSlug={lead.projectSlug}
            projectTitle={
              lead.projectSlug ? getProjectBySlug(lead.projectSlug)?.name : undefined
            }
            size="feature"
          />
        </Reveal>

        <div className="grid gap-8">
          {rest.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={(index + 1) * 0.08}>
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                projectSlug={testimonial.projectSlug}
                projectTitle={
                  testimonial.projectSlug
                    ? getProjectBySlug(testimonial.projectSlug)?.name
                    : undefined
                }
              />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
