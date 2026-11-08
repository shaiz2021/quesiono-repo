import { principles } from "@/data/studio";
import { Section } from "@/components/ui/Section";
export function PrinciplesSection() {
  return (
    <Section tone="white" width="wide">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="eyebrow text-text-muted">Why work with Quesiono</p>
          <h2 className="mt-5 text-step-5 font-bold">
            Good work starts
            <br />
            with clear decisions.
          </h2>
          <p className="mt-6 max-w-sm text-text-muted">
            The website is the deliverable. A clear scope, useful reviews, and a
            practical handover are how we get there.
          </p>
        </div>
        <div>
          {principles.map((p, i) => (
            <div
              key={p.title}
              className="grid grid-cols-[2rem_1fr] gap-4 border-t border-sand py-6"
            >
              <span className="text-sm text-text-muted">0{i + 1}</span>
              <div>
                <h3 className="text-step-2 font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
