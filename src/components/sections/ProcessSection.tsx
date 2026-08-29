import { Section } from "@/components/ui/Section";
import { StickyProcess } from "@/components/motion/StickyProcess";
import { studioProcess } from "@/data/studio";

/**
 * The six stages of a build. Driven by src/data/studio.ts, so /process is the
 * same list with the detail bullets expanded rather than a second version of
 * it that slowly drifts.
 */
export function ProcessSection() {
  return (
    <Section tone="ink" spacing="xl" width="wide" mesh id="process">
      <StickyProcess
        steps={studioProcess}
        eyebrow="How a build runs"
        title="Six weeks, six stages, no mystery weeks"
        intro="You'll know what's happening and what's expected of you at every point. The two stages people underestimate are the second and the fifth — copy takes longer than anyone plans for, and testing is not a formality."
        tone="dark"
      />
    </Section>
  );
}
