import { studioProcess } from "@/data/studio";
import { commercialPolicy } from "@/data/commercial";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CTABanner } from "@/components/ui/CTABanner";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata({
  title: "Our Website Design & Development Process",
  description:
    "From discovery and scope to design, development, testing and handover. See what Quesiono delivers and how you participate at each stage.",
  path: "/process",
});
export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="How we work"
        title="Know what is happening. Know what comes next."
        description="A project needs clear decisions as much as good execution. Here is how the work moves forward, what we deliver, and where your input matters."
        trail={[{ name: "Process", href: "/process" }]}
        light
      />
      <Section width="wide" tone="white">
        <ol>
          {studioProcess.map((s) => (
            <li
              key={s.step}
              className="grid gap-6 border-t border-sand py-10 md:grid-cols-[5rem_1fr_1.2fr] md:gap-10"
            >
              <span className="font-display text-4xl text-indigo">
                {s.step}
              </span>
              <div>
                <h2 className="text-step-3 font-semibold">{s.title}</h2>
                <p className="mt-4 text-sm text-text-muted">{s.description}</p>
              </div>
              <ul className="space-y-4">
                {s.detail.map((d) => (
                  <li
                    key={d}
                    className="border-l-2 border-sand pl-4 text-sm leading-relaxed text-text-muted"
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Section>
      <Section width="wide" tone="ink">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow text-champagne">Planning the work</p>
            <h2 className="mt-5 text-step-4 font-bold">
              A schedule built around the actual project.
            </h2>
          </div>
          <div>
            <p className="text-vanilla/75">{commercialPolicy.timing}</p>
            <p className="mt-5 text-vanilla/75">
              Agree one decision-maker, gather business information early, and
              consolidate feedback. When a new requirement changes the scope,
              its effect on the schedule should be agreed before it is added.
            </p>
          </div>
        </div>
      </Section>
      <CTABanner
        title="Start with a goal, not a specification."
        subtitle="A short description of the problem is enough to begin the conversation."
        primaryAction={{
          label: "Discuss Your Project",
          href: "/contact?source=%2Fprocess",
        }}
        secondaryAction={{ label: "Understand pricing", href: "/pricing" }}
      />
    </>
  );
}
