import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react";

import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CapabilityStrip } from "@/components/ui/CapabilityStrip";
import { CTABanner } from "@/components/ui/CTABanner";

import { GradientMesh } from "@/components/motion/GradientMesh";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { StickyProcess } from "@/components/motion/StickyProcess";
import { MagneticButton } from "@/components/motion/MagneticButton";

import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, graph, webPageSchema } from "@/lib/schema";
import { studioFaqGroups, studioProcess } from "@/data/studio";

export const metadata: Metadata = buildMetadata({
  title: "Our Process — How a Website Build Actually Runs | Quesiono",
  description:
    "Six stages from first call to handover: scope, copy, design, build, launch, thirty days of fixes. What we need from you at each one, and how long each takes.",
  path: "/process",
  eyebrow: "Process",
  keywords: [
    "web design process",
    "website development process",
    "web design project timeline",
    "how long does a website take",
    "website discovery process",
    "website launch checklist",
  ],
});

const processFaqs = [
  studioFaqGroups[0].faqs[0],
  studioFaqGroups[0].faqs[1],
  studioFaqGroups[0].faqs[3],
  studioFaqGroups[1].faqs[2],
  studioFaqGroups[1].faqs[4],
  studioFaqGroups[2].faqs[3],
];

/* The honest version of a timeline: what happens, and what stalls it. */
const weekByWeek = [
  { window: "Week 0", stage: "Call, scope, deposit", yours: "Read the scope properly. Ask about anything vague." },
  { window: "Weeks 1–2", stage: "Sitemap, keyword map, copy draft", yours: "Comment on the copy doc. This is the big one." },
  { window: "Weeks 2–4", stage: "Two design directions, then every template", yours: "Pick a direction. Send logos, photos, brand files." },
  { window: "Weeks 4–7", stage: "Build, CMS, integrations", yours: "Click through the preview weekly. Flag things early." },
  { window: "Week 8", stage: "Testing, redirects, analytics, DNS", yours: "Sign off. Give us registrar and host access." },
  { window: "Weeks 9–12", stage: "Thirty days of included fixes", yours: "Use the site. Tell us what's annoying." },
];

const whatSlowsIt = [
  {
    ok: false,
    label: "Copy feedback sitting for two weeks",
    detail: "The most common cause of a late launch, by a wide margin. Nothing after stage two can start without it.",
  },
  {
    ok: false,
    label: "Photography that doesn't exist yet",
    detail: "A shoot takes three weeks to organise. If you need one, we say so in week one so it runs in parallel.",
  },
  {
    ok: false,
    label: "Five people with sign-off",
    detail: "Two rounds of revisions turn into six. Name one decision-maker before we start and the whole thing moves faster.",
  },
  {
    ok: true,
    label: "Content ready on day one",
    detail: "Even rough. A messy Google Doc of real copy beats a tidy placeholder every time.",
  },
  {
    ok: true,
    label: "Analytics access early",
    detail: "Knowing which pages already earn traffic changes what we build and what we quietly retire.",
  },
];

const tools = [
  { name: "Figma", use: "Design, prototypes, and the handoff spec" },
  { name: "Next.js", use: "Most custom builds, App Router" },
  { name: "WordPress", use: "When your team publishes daily" },
  { name: "Shopify", use: "Stores, unless the catalogue demands headless" },
  { name: "Vercel", use: "Preview deploys per branch" },
  { name: "Screaming Frog", use: "Crawls, audits, redirect maps" },
  { name: "Search Console", use: "Indexing checks in launch week" },
  { name: "Loom", use: "Walkthroughs at handover" },
];

export default function ProcessPage() {
  const trail = [{ name: "Process", href: "/process" }];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/process",
            name: "Our Process — How a Website Build Actually Runs | Quesiono",
            description:
              "The six stages of a Quesiono build, what happens in each, and what we need from you.",
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }, ...trail]),
          faqSchema(processFaqs)
        )}
      />

      <header className="grain relative overflow-hidden bg-ink">
        <GradientMesh variant="ink" drift />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-[calc(var(--nav-h)+4rem)] sm:px-8 lg:px-12 lg:pb-28">
          <Breadcrumbs trail={trail} tone="dark" emitSchema={false} />
          <div className="mt-8">
            <Eyebrow tone="dark">How we work · {studioProcess.length} stages</Eyebrow>
          </div>

          <RevealText
            text="No mystery weeks, no radio silence"
            as="h1"
            accent={["No", "mystery", "weeks"]}
            className="mt-6 max-w-4xl text-step-6 font-extrabold leading-[0.96] text-vanilla"
          />

          <p className="mt-7 max-w-2xl text-step-1 leading-relaxed text-vanilla/65">
            The worst part of hiring an agency is the middle — you sign, you pay, and then nothing
            visible happens for a month. Our fix is boring and it works: a preview URL from day one,
            and a named stage you can always point at.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <MagneticButton href="/contact" variant="accent" size="lg">
              Start with a call
              <ArrowRight className="h-5 w-5" aria-hidden />
            </MagneticButton>
            <Button href="/pricing" variant="ghost" size="lg">
              See pricing
            </Button>
          </div>

          <div className="mt-14 grid gap-6 border-t border-vanilla/12 pt-10 sm:grid-cols-3">
            {[
              { term: "Typical build", detail: "Six to ten weeks, start to launch" },
              { term: "Your time", detail: "Six to eight hours across the whole project" },
              { term: "After launch", detail: "Thirty days of fixes, included" },
            ].map((item) => (
              <div key={item.term}>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-champagne">
                  {item.term}
                </p>
                <p className="mt-2.5 leading-relaxed text-vanilla/70">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <CapabilityStrip tone="midnight" />

      {/* ------------------------------------------------------------ stages -- */}

      <Section tone="ink" spacing="xl" width="wide" mesh id="stages">
        <StickyProcess
          steps={studioProcess}
          eyebrow="Stage by stage"
          title="What happens, in order"
          intro="Each stage ends with something you can look at and sign off. Nothing moves forward on a verbal maybe."
          tone="dark"
        />
      </Section>

      {/* ---------------------------------------------------------- timeline -- */}

      <Section tone="cream" spacing="xl" width="wide" id="timeline">
        <SectionHeading
          eyebrow="A real eight-week build"
          title="Week by week, and what we need from you"
          subtitle="This is the marketing-site shape. A landing page compresses to three weeks; a store stretches to sixteen. The rhythm stays the same."
          size="xl"
          className="max-w-2xl"
        />

        <div className="mt-16 overflow-hidden rounded-3xl border border-sand bg-white">
          <div className="hidden grid-cols-[8rem_1fr_1fr] gap-6 border-b border-sand bg-cream px-8 py-5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-text-muted md:grid">
            <span>When</span>
            <span>What we&apos;re doing</span>
            <span>What you&apos;re doing</span>
          </div>

          {weekByWeek.map((row, index) => (
            <Reveal key={row.window} delay={index * 0.05}>
              <div className="grid gap-3 border-b border-sand px-8 py-7 last:border-b-0 md:grid-cols-[8rem_1fr_1fr] md:gap-6">
                <span className="font-display font-extrabold text-champagne">{row.window}</span>
                <span className="font-semibold text-text-dark">{row.stage}</span>
                <span className="leading-relaxed text-text-muted">{row.yours}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 max-w-3xl leading-relaxed text-text-muted">
          Add three to five weeks at the front for us to have a slot free. We run two builds at a
          time and don&apos;t take a deposit for a start date we can&apos;t hold.{" "}
          <Link
            href="/contact"
            className="font-semibold text-indigo underline decoration-champagne decoration-2 underline-offset-4 hover:text-midnight"
          >
            Ask what&apos;s free
          </Link>
          .
        </p>
      </Section>

      {/* ------------------------------------------------------------- speed -- */}

      <Section tone="white" spacing="xl" width="wide">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeading
            eyebrow="Being honest about it"
            title="What makes a project late, and what makes it early"
            subtitle="Almost none of it is build speed. It's decisions and assets."
            size="xl"
            className="lg:sticky lg:top-[calc(var(--nav-h)+3rem)] lg:self-start"
          />

          <ul className="space-y-0">
            {whatSlowsIt.map((item, index) => (
              <Reveal key={item.label} delay={index * 0.05}>
                <li className="border-t border-sand py-7 first:border-t-0 first:pt-0">
                  <p className="flex items-start gap-3 font-display text-step-0 font-bold text-text-dark">
                    <span
                      className={[
                        "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
                        item.ok ? "bg-indigo/10 text-indigo" : "bg-red-50 text-red-600",
                      ].join(" ")}
                      aria-hidden
                    >
                      {item.ok ? <Check className="h-3.5 w-3.5" /> : <X className="h-3.5 w-3.5" />}
                    </span>
                    {item.label}
                  </p>
                  <p className="mt-2.5 pl-9 leading-relaxed text-text-muted">{item.detail}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* ------------------------------------------------------------- tools -- */}

      <Section tone="midnight" spacing="lg" width="wide">
        <SectionHeading
          eyebrow="What we build with"
          title="The stack, and when each one earns its place"
          subtitle="We don't have a house platform we push onto everyone. The choice happens after the scope call, based on who's editing the site next year."
          tone="dark"
          size="lg"
          className="max-w-2xl"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-vanilla/12 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <div key={tool.name} className="bg-midnight p-7">
              <p className="font-display text-step-0 font-bold text-vanilla">{tool.name}</p>
              <p className="mt-2.5 text-[0.9rem] leading-relaxed text-vanilla/55">{tool.use}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* --------------------------------------------------------- after that -- */}

      <Section tone="cream" spacing="xl" width="wide">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="After launch" title="The part most agencies skip" size="xl" />
            <div className="prose mt-8">
              <p>
                Thirty days of included fixes starts the day the DNS switches, not the day we said
                we&apos;d be finished. Anything broken in that window gets fixed at no cost — bugs,
                layout breaks on a device we missed, a form that stopped firing.
              </p>
              <p>
                Handover is a Loom walkthrough of the CMS, a written doc, every credential, and the
                repository. It&apos;s deliberately complete enough that you could hire someone else
                tomorrow. Clients who can leave easily tend not to, which is the point.
              </p>
              <p>
                After the thirty days, a maintenance retainer is optional and monthly. Roughly half
                our clients take one. The other half run it themselves and email us when they want
                something built.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/services/website-maintenance" variant="primary" size="md">
                Maintenance plans
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button href="/pricing#retainers" variant="outline" size="md">
                Retainer pricing
              </Button>
            </div>
          </div>

          <Reveal direction="up" delay={0.1}>
            <div className="rounded-3xl border border-sand bg-white p-8 sm:p-10">
              <Badge label="Included in every handover" variant="accent" />
              <ul className="mt-8 space-y-5">
                {[
                  "Loom video walkthrough of your CMS, recorded on your actual site",
                  "Written doc covering the edits you'll make most",
                  "Every credential, in a shared vault you own",
                  "The repository, with commit history intact",
                  "Redirect map and the launch-day checklist we ran",
                  "Analytics and Search Console access under your account",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 leading-relaxed text-text-muted">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-indigo" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <TestimonialsSection limit={3} tone="white" />

      <Section tone="cream" spacing="xl" width="default">
        <SectionHeading
          eyebrow="Process questions"
          title="What people ask before signing"
          size="xl"
          className="max-w-2xl"
        />
        <div className="mt-14">
          <FaqAccordion faqs={processFaqs} />
        </div>
      </Section>

      <CTABanner
        eyebrow="Stage one"
        title="Ready for the forty-five minute version?"
        subtitle="No deck, no discovery fee. We ask what the site has to do, you ask whatever you want, and you get a written scope three days later."
        primaryAction={{ label: "Book the call", href: "/contact" }}
        secondaryAction={{ label: "See the work", href: "/portfolio" }}
        showEmail
      />
    </>
  );
}
