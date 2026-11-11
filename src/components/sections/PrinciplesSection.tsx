import { principles } from "@/data/studio";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { getIcon } from "@/lib/icons";
export function PrinciplesSection() {
  return (
    <Section tone="white" width="wide">
      <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow text-indigo">Why Quesiono / 04 principles</p>
          <h2 className="mt-5 max-w-md text-step-5 font-bold">
            The details behind the <span className="text-indigo">deliverable.</span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-text-muted">
            A good website needs good decisions around it: what to build, how
            to review it, what to measure and who owns it after launch.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map((principle, i) => {
            const Icon = getIcon(principle.icon);
            return (
              <Reveal key={principle.title} delay={(i % 2) * 0.07} className="h-full">
                <article className={`premium-card group relative flex h-full min-h-[16rem] flex-col overflow-hidden rounded-md border p-6 sm:p-7 ${i === 0 ? "border-indigo bg-indigo text-vanilla" : "border-sand bg-cream text-text-dark hover:border-indigo hover:bg-white hover:shadow-lg"}`}>
                  <div className="flex items-center justify-between gap-3">
                    <span className={`grid h-12 w-12 place-items-center rounded-full ${i === 0 ? "bg-champagne text-ink" : "bg-sand/65 text-indigo group-hover:bg-indigo group-hover:text-vanilla"}`}>
                      <Icon className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" aria-hidden />
                    </span>
                    <span className={`text-xs font-semibold ${i === 0 ? "text-vanilla/75" : "text-text-muted"}`}>0{i + 1}</span>
                  </div>
                  <h3 className="mt-8 text-step-2 font-bold">{principle.title}</h3>
                  <p className={`mt-4 text-sm leading-relaxed ${i === 0 ? "text-vanilla/80" : "text-text-muted"}`}>{principle.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
