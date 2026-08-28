import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { StatBlock } from "@/components/ui/StatBlock";
import { principles, studioStats } from "@/data/studio";

/**
 * Replaces the old WhyQuesiono section, which opened with "We're not just
 * another agency" — a line every agency site on the internet uses. These are
 * six things we'll actually be held to, pulled from src/data/studio.ts so
 * /about and /process say the same thing.
 */
export function PrinciplesSection() {
  return (
    <Section tone="white" spacing="xl" width="wide" id="how-we-work">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-[calc(var(--nav-h)+3rem)] lg:self-start">
          <SectionHeading
            eyebrow="How we work"
            title="Six things we'll hold ourselves to"
            subtitle="None of this is unusual. It's just written down, which turns out to be the unusual part."
            size="xl"
          />
          <div className="mt-12">
            <StatBlock stats={studioStats.slice(0, 2)} columns={2} />
          </div>
        </div>

        <FeatureGrid features={principles} columns={2} />
      </div>
    </Section>
  );
}
