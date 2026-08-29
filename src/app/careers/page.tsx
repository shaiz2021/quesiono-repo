import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, MapPin } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { CTABanner } from "@/components/ui/CTABanner";

import { GradientMesh } from "@/components/motion/GradientMesh";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";

import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, graph, itemListSchema, webPageSchema } from "@/lib/schema";
import { formatPostDate } from "@/data/blog";
import { site } from "@/lib/site";
import { openRoles, team } from "@/data/studio";

export const metadata: Metadata = buildMetadata({
  title: "Careers at Quesiono — Web Design & SEO Jobs in Houston",
  description:
    "Open roles at a five-person web design studio: front-end developer, SEO strategist, contract writer. Small team, no bench, work you can put your name on.",
  path: "/careers",
  eyebrow: "Careers",
  keywords: [
    "web design jobs Houston",
    "front end developer jobs",
    "SEO strategist jobs remote",
    "content writer contract",
    "digital agency careers",
    "Next.js developer job",
  ],
});

/* What working here is actually like, including the parts that put people off. */
const reality = [
  {
    icon: "users",
    title: "Five people, no layers",
    description:
      "You talk to clients directly. Nobody relays your questions or softens your estimates. Some people find that exposing; the ones who stay find it faster.",
  },
  {
    icon: "target",
    title: "Two projects at a time",
    description:
      "You're not context-switching across nine accounts. You work on one thing properly, then the next thing.",
  },
  {
    icon: "clipboard",
    title: "Scope is written down",
    description:
      "Every project has a signed document listing what's in. When someone asks for a tenth template in week six, that's a quote, not your weekend.",
  },
  {
    icon: "book-open",
    title: "You'll write publicly",
    description:
      "Everyone here publishes under their own name. Roughly one article a quarter, on your own beat, on paid time.",
  },
  {
    icon: "gauge",
    title: "Quality bars are numbers",
    description:
      "Page weight, LCP, contrast ratios. Arguments about whether something is good enough get settled by a measurement rather than by whoever is most senior.",
  },
  {
    icon: "scale",
    title: "Small studio, honest limits",
    description:
      "No equity, no gym allowance, no ping-pong table. Salaries are mid-market for Houston and stated in the posting rather than negotiated from a low anchor.",
  },
];

const hiringSteps = [
  {
    step: "01",
    title: "You email us",
    detail:
      "A short note and something you made. A portfolio, a repo, three published articles. No cover letter theatre.",
  },
  {
    step: "02",
    title: "Thirty-minute call",
    detail:
      "Mostly you asking questions. We'll tell you the salary range in this call, not at the end of the process.",
  },
  {
    step: "03",
    title: "A paid exercise",
    detail:
      "Three to four hours of realistic work, paid at your day rate. You keep it either way, and we never ship unpaid trial work.",
  },
  {
    step: "04",
    title: "A conversation about it",
    detail:
      "You walk us through your decisions. We're listening for how you handle the trade-off you had to make, not whether you got it perfect.",
  },
  {
    step: "05",
    title: "An answer within a week",
    detail:
      "Yes or no, with a reason either way. Nobody gets ghosted — that's the one hiring rule we've never broken.",
  },
];

const benefits = [
  "Salary stated in the posting, reviewed annually",
  "Fully remote or the Houston studio, your call",
  "Four-day week in July and August",
  "Twenty days off plus US public holidays",
  "$300 a year for courses, conferences, or books",
  "Hardware you choose, replaced every three years",
  "Paid time to write and publish under your name",
  "No on-call rotation — we don't run production for clients we haven't built for",
];

export default function CareersPage() {
  const trail = [{ name: "Careers", href: "/careers" }];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/careers",
            name: "Careers at Quesiono — Web Design & SEO Jobs in Houston",
            description:
              "Open roles at Quesiono, a five-person web design and digital agency in Houston.",
          }),
          itemListSchema({
            name: "Open roles at Quesiono",
            items: openRoles.map((role) => ({
              name: role.title,
              href: `/careers/${role.slug}`,
              description: role.summary,
            })),
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }, ...trail])
        )}
      />

      <header className="grain relative overflow-hidden bg-ink">
        <GradientMesh variant="ink" drift />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-[calc(var(--nav-h)+4rem)] sm:px-8 lg:px-12 lg:pb-28">
          <Breadcrumbs trail={trail} tone="dark" emitSchema={false} />
          <div className="mt-8">
            <Eyebrow tone="dark">
              Careers · No Open Roles
            </Eyebrow>
          </div>

          <RevealText
            text="We hire slowly, then leave people alone to work"
            as="h1"
            accent={["leave", "people", "alone"]}
            className="mt-6 max-w-4xl text-step-6 font-extrabold leading-[0.96] text-vanilla"
          />

          <p className="mt-7 max-w-2xl text-step-1 leading-relaxed text-vanilla/65">
            There are {team.length} of us. Every hire changes what the studio is, so we only open a
            role when a specific kind of work keeps arriving and the person doing it now is
            drowning. That means fewer postings and a much slower yes.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="#roles" variant="accent" size="lg">
              See what we&apos;re about
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Button>
            <Button href="/about" variant="ghost" size="lg">
              Meet the team
            </Button>
          </div>

          <p className="mt-10 inline-flex items-center gap-2 text-[0.9rem] text-vanilla/50">
            <MapPin className="h-4 w-4 text-champagne" aria-hidden />
            {site.address.city}, {site.address.region} — or remote on US hours
          </p>
        </div>
      </header>

      {/* ------------------------------------------------------------- roles -- */}

      <Section tone="cream" spacing="xl" width="wide" id="roles">
        <SectionHeading
          eyebrow="Currently closed"
          title="No Roles Open Currently"
          subtitle="We're not actively hiring, but we're always open to hearing from talented people. Check back later or reach out to introduce yourself."
          size="xl"
          className="max-w-2xl"
        />

        {openRoles.length ? (
          <div className="mt-16 space-y-6">
            {openRoles.map((role, index) => (
              <Reveal key={role.slug} delay={index * 0.05}>
                <article className="group rounded-3xl border border-sand bg-white p-8 transition-all duration-400 ease-smooth hover:-translate-y-1 hover:border-midnight/25 hover:shadow-xl sm:p-10">
                  <div className="flex flex-wrap items-start justify-between gap-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge label={role.type} variant="accent" />
                        <span className="text-[0.85rem] text-text-muted">
                          Posted {formatPostDate(role.posted)}
                        </span>
                      </div>
                      <h3 className="mt-5 font-display text-step-2 font-extrabold tracking-tight text-text-dark">
                        <Link href={`/careers/${role.slug}`} className="hover:text-indigo">
                          {role.title}
                        </Link>
                      </h3>
                      <p className="mt-2 inline-flex items-center gap-2 text-[0.9rem] text-text-muted">
                        <MapPin className="h-4 w-4" aria-hidden />
                        {role.location}
                      </p>
                    </div>

                    <Button href={`/careers/${role.slug}`} variant="outline" size="sm">
                      Read the role
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </Button>
                  </div>

                  <p className="mt-7 max-w-3xl leading-relaxed text-text-muted">{role.summary}</p>

                  <ul className="mt-8 grid gap-3 border-t border-sand pt-8 sm:grid-cols-2">
                    {role.requirements.slice(0, 2).map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[0.92rem] leading-relaxed text-text-muted"
                      >
                        <Check className="mt-1 h-4 w-4 shrink-0 text-indigo" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-16 flex flex-col items-center rounded-3xl border border-sand bg-white/50 p-12 text-center sm:p-16">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sand">
              <svg
                className="h-8 w-8 text-text-muted"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="mt-6 font-display text-step-3 font-extrabold tracking-tight text-text-dark">
              No Roles Open Currently
            </h3>
            <p className="mt-4 max-w-sm text-[0.95rem] leading-relaxed text-text-muted">
              We&apos;re not actively hiring right now, but we&apos;re always open to hearing from talented people.
              Check back later or reach out to introduce yourself.
            </p>
            <div className="mt-8">
              <Button
                href={`mailto:${site.email}?subject=Speculative%20application`}
                variant="primary"
                size="md"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </div>
        )}
      </Section>

      {/* ------------------------------------------------------------ reality -- */}

      <Section tone="ink" spacing="xl" width="wide" mesh>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeading
            eyebrow="What it's actually like"
            title="Six true things, including two you might not like"
            subtitle="Written for someone deciding whether to apply, not for a careers page award."
            tone="dark"
            size="xl"
            className="lg:sticky lg:top-[calc(var(--nav-h)+3rem)] lg:self-start"
          />
          <FeatureGrid features={reality} tone="dark" columns={2} />
        </div>
      </Section>

      {/* ----------------------------------------------------------- benefits -- */}

      <Section tone="white" spacing="xl" width="wide">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="The package" title="What comes with the job" size="xl" />
            <p className="mt-7 max-w-lg leading-relaxed text-text-muted">
              Short list, all of it real. We&apos;d rather name eight things we actually do than
              list twenty perks that turn out to be a discount code.
            </p>
            <div className="mt-9">
              <Button href="/about" variant="outline" size="md">
                Read about the studio
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 rounded-2xl border border-sand bg-cream p-5 text-[0.92rem] leading-relaxed text-text-muted"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo" aria-hidden />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ------------------------------------------------------------- hiring -- */}

      <Section tone="cream" spacing="xl" width="wide" id="hiring">
        <SectionHeading
          eyebrow="How hiring runs"
          title="Five steps, about two weeks"
          subtitle="The exercise is paid. The salary range comes up in the first call. Nobody gets ghosted."
          size="xl"
          className="max-w-2xl"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hiringSteps.map((item, index) => (
            <Reveal key={item.step} delay={index * 0.05}>
              <div className="flex h-full flex-col rounded-3xl border border-sand bg-white p-8">
                <span className="font-display text-step-3 font-extrabold tracking-tight text-champagne">
                  {item.step}
                </span>
                <h3 className="mt-5 font-display text-step-1 font-bold text-text-dark">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-text-muted">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTABanner
        eyebrow="Not a role, a note"
        title="Think you'd fit but nothing matches?"
        subtitle="Tell us what you do and show us something you made. We've hired twice from emails that arrived when nothing was open."
        primaryAction={{ label: `Email ${site.email}`, href: `mailto:${site.email}` }}
        secondaryAction={{ label: "See the team", href: "/about#team" }}
      />
    </>
  );
}
