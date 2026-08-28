import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, Clock, MapPin, Plus } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTABanner } from "@/components/ui/CTABanner";

import { GradientMesh } from "@/components/motion/GradientMesh";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { MagneticButton } from "@/components/motion/MagneticButton";

import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, graph, jobPostingSchema, webPageSchema } from "@/lib/schema";
import { formatPostDate } from "@/data/blog";
import { site } from "@/lib/site";
import { getRoleBySlug, openRoles, roleParams, team } from "@/data/studio";

export const dynamicParams = false;

export function generateStaticParams() {
  return roleParams();
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const role = getRoleBySlug(params.slug);
  if (!role) return {};

  return buildMetadata({
    title: `${role.title} — ${role.type} at Quesiono`,
    description: role.summary,
    path: `/careers/${role.slug}`,
    eyebrow: "Careers",
    cardType: "service",
    keywords: [
      `${role.title} job`,
      `${role.title} ${role.type}`,
      "web design agency job",
      "Houston web design careers",
      "remote web agency role",
    ],
  });
}

/* Applying is one email. This builds it so nobody has to guess a subject line. */
const applyHref = (title: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(`Application: ${title}`)}`;

export default function RolePage({ params }: { params: { slug: string } }) {
  const role = getRoleBySlug(params.slug);
  if (!role) notFound();

  const others = openRoles.filter((item) => item.slug !== role.slug);

  const trail = [
    { name: "Careers", href: "/careers" },
    { name: role.title, href: `/careers/${role.slug}` },
  ];

  const facts = [
    { term: "Contract", detail: role.type, icon: Clock },
    { term: "Where", detail: role.location, icon: MapPin },
    { term: "Posted", detail: formatPostDate(role.posted), icon: Clock },
  ];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: `/careers/${role.slug}`,
            name: `${role.title} — ${role.type} at Quesiono`,
            description: role.summary,
          }),
          jobPostingSchema({
            title: role.title,
            description: [role.summary, ...role.responsibilities].join(" "),
            employmentType:
              role.type === "Full-time"
                ? "FULL_TIME"
                : role.type === "Part-time"
                  ? "PART_TIME"
                  : "CONTRACTOR",
            path: `/careers/${role.slug}`,
            datePosted: role.posted,
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }, ...trail])
        )}
      />

      <header className="grain relative overflow-hidden bg-ink">
        <GradientMesh variant="ink" drift />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-[calc(var(--nav-h)+4rem)] sm:px-8 lg:px-12 lg:pb-28">
          <Breadcrumbs trail={trail} tone="dark" emitSchema={false} />
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Eyebrow tone="dark">Open role</Eyebrow>
            <Badge label={role.type} variant="accent" />
          </div>

          <RevealText
            text={role.title}
            as="h1"
            className="mt-6 max-w-4xl text-step-6 font-extrabold leading-[0.96] text-vanilla"
          />

          <p className="mt-7 max-w-2xl text-step-1 leading-relaxed text-vanilla/65">
            {role.summary}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <MagneticButton href={applyHref(role.title)} variant="accent" size="lg">
              Apply by email
              <ArrowRight className="h-5 w-5" aria-hidden />
            </MagneticButton>
            <Button href="/careers#hiring" variant="ghost" size="lg">
              How hiring runs
            </Button>
          </div>

          <dl className="mt-14 grid gap-6 border-t border-vanilla/12 pt-10 sm:grid-cols-3">
            {facts.map((fact) => (
              <div key={fact.term}>
                <dt className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-champagne">
                  <fact.icon className="h-3.5 w-3.5" aria-hidden />
                  {fact.term}
                </dt>
                <dd className="mt-2.5 leading-relaxed text-vanilla/70">{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* --------------------------------------------------------- the detail -- */}

      <Section tone="cream" spacing="xl" width="wide">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="space-y-16">
            <div>
              <SectionHeading eyebrow="The work" title="What you'd be doing" size="lg" />
              <ul className="mt-10 space-y-0">
                {role.responsibilities.map((item, index) => (
                  <Reveal key={item} delay={index * 0.05}>
                    <li className="flex gap-5 border-t border-sand py-6 first:border-t-0 first:pt-0">
                      <span className="font-display text-step-0 font-extrabold text-champagne">
                        0{index + 1}
                      </span>
                      <p className="leading-relaxed text-text-muted">{item}</p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

            <div>
              <SectionHeading
                eyebrow="The bar"
                title="What we need you to already have"
                subtitle="Written as things you've done, not years in a list of technologies. If you clear most of these and not all, apply anyway and say which one you don't."
                size="lg"
              />
              <ul className="mt-10 grid gap-4">
                {role.requirements.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-sand bg-white p-6 leading-relaxed text-text-muted"
                  >
                    <Check className="mt-1 h-4 w-4 shrink-0 text-indigo" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {role.niceToHave?.length ? (
              <div>
                <SectionHeading
                  eyebrow="Bonus, not required"
                  title="Things that would help"
                  size="lg"
                />
                <ul className="mt-10 flex flex-wrap gap-3">
                  {role.niceToHave.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-sand bg-white px-5 py-2.5 text-[0.9rem] text-text-muted"
                    >
                      <Plus className="h-3.5 w-3.5 text-indigo" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 max-w-2xl leading-relaxed text-text-muted">
                  Nobody has arrived here with all of it. The last two people we hired each had one
                  of these and learned the rest on paid time.
                </p>
              </div>
            ) : null}
          </div>

          {/* ------------------------------------------------------- apply rail -- */}

          <Reveal direction="up" delay={0.1}>
            <div className="lg:sticky lg:top-[calc(var(--nav-h)+2rem)]">
              <div className="rounded-3xl border border-sand bg-white p-8 sm:p-10">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-text-muted">
                  How to apply
                </p>
                <h2 className="mt-5 font-display text-step-2 font-extrabold tracking-tight text-text-dark">
                  Send two things
                </h2>
                <ol className="mt-8 space-y-6">
                  {[
                    "A few paragraphs on why this role and not a bigger agency. Written by you, in whatever voice you actually have.",
                    "Something you made that you're willing to talk through for twenty minutes — a site, a repo, three articles.",
                  ].map((item, index) => (
                    <li key={item} className="flex gap-4">
                      <span className="font-display text-step-1 font-extrabold text-champagne">
                        0{index + 1}
                      </span>
                      <p className="pt-1 text-[0.92rem] leading-relaxed text-text-muted">{item}</p>
                    </li>
                  ))}
                </ol>

                <div className="mt-9 space-y-3">
                  <Button href={applyHref(role.title)} variant="primary" size="md" className="w-full">
                    Email your application
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Button>
                  <p className="text-center text-[0.85rem] text-text-muted">
                    Goes straight to {site.email}
                  </p>
                </div>

                <p className="mt-8 border-t border-sand pt-6 text-[0.875rem] leading-relaxed text-text-muted">
                  No portal, no fifteen-field form, no CV parser. One of the {team.length} of us reads
                  it and replies either way — usually inside a week.
                </p>
              </div>

              <div className="mt-6 rounded-3xl bg-midnight p-8">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-champagne">
                  Salary
                </p>
                <p className="mt-4 leading-relaxed text-vanilla/70">
                  We give you the range on the first call, before you spend time on an exercise. It
                  doesn&apos;t move based on what you earn now, and we don&apos;t ask.
                </p>
                <Link
                  href="/careers#hiring"
                  className="group mt-6 inline-flex items-center gap-2 text-[0.875rem] font-semibold text-champagne"
                >
                  See the five hiring steps
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ------------------------------------------------------------- others -- */}

      {others.length ? (
        <Section tone="ink" spacing="lg" width="wide" mesh>
          <SectionHeading
            eyebrow="Also open"
            title={others.length === 1 ? "One other role" : `${others.length} other roles`}
            tone="dark"
            size="lg"
            className="max-w-2xl"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {others.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.06}>
                <Link
                  href={`/careers/${item.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-vanilla/12 bg-vanilla/[0.04] p-8 transition-all duration-400 ease-smooth hover:-translate-y-1 hover:border-champagne/40 hover:bg-vanilla/[0.07]"
                >
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-champagne">
                    {item.type} · {item.location}
                  </span>
                  <h3 className="mt-4 font-display text-step-2 font-extrabold tracking-tight text-vanilla">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-vanilla/55">{item.summary}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-[0.875rem] font-semibold text-champagne">
                    Read the role
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      <CTABanner
        eyebrow="Not sure you're a fit?"
        title="Apply anyway and say why you're unsure"
        subtitle="It's the most useful thing you can put in the email, and it's never once counted against anybody."
        primaryAction={{ label: "Apply for this role", href: applyHref(role.title) }}
        secondaryAction={{ label: "All open roles", href: "/careers" }}
      />
    </>
  );
}
