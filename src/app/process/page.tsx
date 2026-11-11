import { studioProcess } from "@/data/studio";
import { commercialPolicy } from "@/data/commercial";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CTABanner } from "@/components/ui/CTABanner";
import { StickyProcess } from "@/components/motion/StickyProcess";
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
      <Section width="wide" tone="ink">
        <StickyProcess
          steps={studioProcess}
          eyebrow="The delivery path"
          title="Six clear stages. One useful outcome."
          intro="Follow the work from the first brief through design, development, launch and handover. Each stage includes a decision or review point for your team."
        />
      </Section>
      <Section width="wide" tone="cream">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow text-indigo">What to expect in the proposal</p>
            <h2 className="mt-5 text-step-4 font-bold">Clarity before any build begins.</h2>
            <p className="mt-5 max-w-md text-text-muted">A useful proposal should make the decisions visible, even when the project starts with only a rough idea.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["01", "A defined scope", "Pages, features and integrations are named alongside the work that is not included."],
              ["02", "Review points", "Know when you will see structure, designs and working pages, and how feedback is consolidated."],
              ["03", "Dependencies", "Content, access, approvals and third-party services are identified early so they do not surprise anyone."],
              ["04", "Handover plan", "Confirm ownership of accounts and files, editing needs and any support required after launch."],
            ].map(([number, title, description]) => (
              <article key={title} className="premium-card rounded-md border border-sand bg-white p-6 hover:border-indigo hover:shadow-lg">
                <span className="text-xs font-bold text-indigo">/{number}</span>
                <h3 className="mt-5 text-step-2 font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{description}</p>
              </article>
            ))}
          </div>
        </div>
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
