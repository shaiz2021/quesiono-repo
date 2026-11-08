import Link from "next/link";
import { testimonials } from "@/data/testimonials";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { CTABanner } from "@/components/ui/CTABanner";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata({
  title: "Client Feedback & Project References",
  description:
    "How to evaluate Quesiono’s work, ask about relevant project experience and discuss references for your proposed scope.",
  path: "/testimonials",
});
export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Client feedback"
        title="Confidence should come from evidence."
        description="The most useful reference is relevant to the problem you are trying to solve. Ask about the scope, the decisions, and what can be shared with permission."
        trail={[{ name: "Client feedback", href: "/testimonials" }]}
        light
      />
      <Section width="wide" tone="white">
        {testimonials.length ? (
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        ) : (
          <div className="grid gap-10 md:grid-cols-2">
            <h2 className="text-step-4 font-bold">
              Review the work.
              <br />
              Ask the right questions.
            </h2>
            <div>
              <p className="text-text-muted">
                We publish client quotations only when attribution and
                permission have been confirmed. There are no approved quotations
                displayed here at present.
              </p>
              <p className="mt-5 text-text-muted">
                You can explore the portfolio presentations and discuss which
                parts of a proposed project need stronger evidence, a
                demonstration, or a reference before you decide.
              </p>
              <Link href="/portfolio" className="text-link mt-5">
                Explore the portfolio ↗
              </Link>
            </div>
          </div>
        )}
      </Section>
      <CTABanner
        title="Want to discuss relevant experience?"
        subtitle="Tell us the kind of work you are considering and the questions you need answered."
        primaryAction={{
          label: "Ask about your project",
          href: "/contact?source=%2Ftestimonials",
        }}
        secondaryAction={{ label: "How we work", href: "/process" }}
      />
    </>
  );
}
