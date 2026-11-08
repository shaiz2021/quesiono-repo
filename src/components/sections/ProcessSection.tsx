import Link from "next/link";
import { Section } from "@/components/ui/Section";
export function ProcessSection() {
  const steps = [
    {
      title: "Find the right starting point",
      description:
        "Understand the goal, review the current experience, and agree a useful scope.",
    },
    {
      title: "Shape it. Build it. Review it.",
      description:
        "Work through content, design, and development with clear points for your feedback.",
    },
    {
      title: "Launch with a plan to keep going",
      description:
        "Test the important journeys, hand over the site, and agree what happens after launch.",
    },
  ];
  return (
    <Section tone="ink" width="wide">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow text-champagne">A clear way forward</p>
          <h2 className="mt-5 text-step-5 font-bold">
            From the first conversation
            <br />
            to the next chapter.
          </h2>
        </div>
        <Link
          href="/process"
          className="inline-flex min-h-11 items-center text-sm text-champagne underline underline-offset-4"
        >
          See the full process ↗
        </Link>
      </div>
      <ol className="mt-12 grid gap-10 md:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.title} className="border-t border-vanilla/25 pt-6">
            <span className="font-display text-4xl text-champagne">
              0{i + 1}
            </span>
            <h3 className="mt-7 max-w-xs text-step-2 font-semibold">
              {s.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-vanilla/75">
              {s.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
