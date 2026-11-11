import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
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
    <Section tone="ink" width="wide" className="border-t border-champagne/30">
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
      <ol className="relative mt-12 grid gap-5 before:absolute before:bottom-8 before:left-5 before:top-8 before:w-px before:bg-champagne/30 md:grid-cols-3 md:before:bottom-auto md:before:left-8 md:before:right-8 md:before:top-5 md:before:h-px md:before:w-auto">
        {steps.map((s, i) => (
          <li key={s.title} className="relative pl-12 md:pl-0">
            <span className="absolute left-0 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-champagne bg-ink font-display text-xs font-bold text-champagne md:relative md:top-0" aria-hidden>
              0{i + 1}
            </span>
            <Reveal delay={i * 0.06}>
              <div className="premium-card group flex min-h-[13rem] flex-col rounded-md border border-vanilla/15 bg-midnight/65 p-6 hover:border-champagne/65 hover:bg-indigo/70 md:mt-7 md:min-h-[16rem] lg:p-7">
                <p className="text-xs font-semibold uppercase tracking-[.16em] text-champagne">Stage 0{i + 1}</p>
                <h3 className="mt-5 max-w-xs text-step-2 font-semibold text-vanilla">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-vanilla/75">{s.description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
