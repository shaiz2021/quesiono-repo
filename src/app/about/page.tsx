import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";

import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StatBlock } from "@/components/ui/StatBlock";
import { CapabilityStrip } from "@/components/ui/CapabilityStrip";
import { CTABanner } from "@/components/ui/CTABanner";

import { GradientMesh } from "@/components/motion/GradientMesh";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { ShowreelCanvas } from "@/components/motion/ShowreelCanvas";
import { MagneticButton } from "@/components/motion/MagneticButton";

import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { getBlogPostBySlug } from "@/data/blog";
import { services } from "@/data/services";
import { milestones, openRoles, studioFacts, team } from "@/data/studio";

export const metadata: Metadata = buildMetadata({
  title: "About Quesiono — A Five-Person Web Design Studio in Houston",
  description:
    "We're a five-person web design and digital agency in Houston. Two projects at a time, fixed scope and price, and you talk to the people building your site.",
  path: "/about",
  eyebrow: "About us",
  keywords: [
    "web design agency Houston",
    "about our digital agency",
    "small web design studio",
    "web design team",
    "digital agency Texas",
    "website design company",
  ],
});

export default function AboutPage() {
  const trail = [{ name: "About", href: "/about" }];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/about",
            name: "About Quesiono — A Five-Person Web Design Studio in Houston",
            description:
              "A five-person web design and digital agency in Houston. Two projects at a time, fixed scope, fixed price.",
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }, ...trail])
        )}
      />

      <header className="grain relative overflow-hidden bg-ink">
        <GradientMesh variant="ink" drift />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-24 pt-[calc(var(--nav-h)+4rem)] sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-12 lg:pb-32">
          <div>
            <Breadcrumbs trail={trail} tone="dark" emitSchema={false} />
            <div className="mt-8">
              <Eyebrow tone="dark">About the studio</Eyebrow>
            </div>

            <RevealText
              text="Five people who'd rather do two projects properly"
              as="h1"
              accent={["two", "projects", "properly"]}
              className="mt-6 text-step-6 font-extrabold leading-[0.96] text-vanilla"
            />

            <p className="mt-7 max-w-xl text-step-1 leading-relaxed text-vanilla/65">
              Quesiono started in 2022 with two people and one WordPress rebuild. There are five of
              us now, and we still cap the studio at two active builds — which is occasionally
              annoying for people who want to start next Monday, and the main reason the work is
              good.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <MagneticButton href="/contact" variant="accent" size="lg">
                Talk to us
                <ArrowRight className="h-5 w-5" aria-hidden />
              </MagneticButton>
              <Button href="/portfolio" variant="ghost" size="lg">
                See the work
              </Button>
            </div>

            <p className="mt-10 inline-flex items-center gap-2 text-[0.9rem] text-vanilla/50">
              <MapPin className="h-4 w-4 text-champagne" aria-hidden />
              {site.address.city}, {site.address.region} — working with clients anywhere
            </p>
          </div>

          <Reveal direction="up" delay={0.12}>
            <ShowreelCanvas label="quesiono.com" caption="Houston web design studio" />
          </Reveal>
        </div>
      </header>

      <CapabilityStrip tone="midnight" />

      <Section tone="cream" spacing="lg" width="wide">
        <StatBlock stats={studioFacts} columns={4} />
      </Section>

      <Section tone="white" spacing="xl" width="wide">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading
            eyebrow="The short version"
            title="What we actually are"
            size="xl"
            className="lg:sticky lg:top-[calc(var(--nav-h)+3rem)] lg:self-start"
          />

          <div className="prose">
            <p>
              We design and build websites, write the words that go on them, and run the search work
              that gets them found. All four in-house. That combination is the whole point — a site
              designed without the copy, or built without the URL structure decided, needs fixing
              within a year, and fixing costs more than doing it right the first time.
            </p>
            <p>
              There are {services.length} services listed on this site. Every one of them is
              something one of the five of us does personally. We don&apos;t have a bench of
              contractors we go and find when someone says yes to a proposal, which is also why we
              turn work down — if it needs a skill none of us has, we&apos;ll say so and point you
              somewhere better.
            </p>
            <p>
              The trade-off is capacity. Two active builds means a project usually starts three to
              five weeks after you sign, and a six-week build takes six weeks rather than four
              calendar weeks stretched across three months. If your launch date is fixed and close,
              tell us on the first call and we&apos;ll be straight about whether it&apos;s possible.
            </p>
            <p>
              On money: fixed scope, fixed price, written down before anything starts. Payment is
              40% to book the slot, 30% at design sign-off, 30% before launch. Change requests get
              quoted separately rather than absorbed silently and then argued about in week seven.
            </p>
          </div>
        </div>
      </Section>

      <PrinciplesSection />

      <Section tone="ink" spacing="xl" width="wide" mesh id="team">
        <SectionHeading
          eyebrow="The five"
          title="Everyone here does the work"
          subtitle="No account layer, no project coordinator relaying questions. The person who designed your homepage is on the call when you ask why the hero is that tall."
          tone="dark"
          size="xl"
          className="max-w-2xl"
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => {
            const posts = (member.postSlugs ?? [])
              .map(getBlogPostBySlug)
              .filter((post): post is NonNullable<typeof post> => Boolean(post));

            return (
              <Reveal key={member.name} delay={index * 0.06}>
                <div className="flex h-full flex-col rounded-3xl border border-vanilla/12 bg-vanilla/[0.04] p-8">
                  <div className="flex items-center gap-4">
                    {member.avatar ? (
                      <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                        <Image
                          src={member.avatar}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </span>
                    ) : (
                      <span
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-champagne/20 font-display font-bold text-champagne"
                        aria-hidden
                      >
                        {member.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")}
                      </span>
                    )}
                    <div>
                      <h3 className="font-display text-step-1 font-bold text-vanilla">
                        {member.name}
                      </h3>
                      <p className="text-[0.85rem] text-champagne">{member.role}</p>
                    </div>
                  </div>

                  <p className="mt-6 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-vanilla/40">
                    {member.focus}
                  </p>

                  <p className="mt-5 flex-1 text-[0.9rem] leading-relaxed text-vanilla/55">
                    {member.bio}
                  </p>

                  {posts.length ? (
                    <div className="mt-7 border-t border-vanilla/10 pt-6">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-vanilla/40">
                        Writes about
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {posts.slice(0, 3).map((post) => (
                          <li key={post.slug}>
                            <Link
                              href={`/blog/${post.slug}`}
                              className="group inline-flex items-start gap-2 text-[0.875rem] leading-snug text-vanilla/70 transition-colors hover:text-champagne"
                            >
                              {post.title}
                              <ArrowUpRight
                                className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                                aria-hidden
                              />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              </Reveal>
            );
          })}

          {openRoles.length ? (
            <Reveal delay={team.length * 0.06}>
              <div className="flex h-full flex-col justify-center rounded-3xl border border-dashed border-champagne/40 bg-champagne/[0.06] p-8">
                <Badge label={`${openRoles.length} open`} variant="accent" />
                <h3 className="mt-6 font-display text-step-2 font-extrabold text-vanilla">
                  Could be six
                </h3>
                <p className="mt-4 text-[0.9rem] leading-relaxed text-vanilla/60">
                  We hire slowly and only when a specific kind of work keeps arriving. Right now
                  there are {openRoles.length} roles open.
                </p>
                <div className="mt-8">
                  <Button href="/careers" variant="accent" size="sm">
                    See the roles
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Button>
                </div>
              </div>
            </Reveal>
          ) : null}
        </div>
      </Section>

      <Section tone="cream" spacing="xl" width="wide" id="story">
        <SectionHeading
          eyebrow="How we got here"
          title="Four years, five decisions"
          subtitle="Including the one that flattened revenue for two quarters."
          size="xl"
          className="max-w-2xl"
        />

        <ol className="mt-16 space-y-0">
          {milestones.map((milestone, index) => (
            <Reveal key={milestone.year} delay={index * 0.05}>
              <li className="grid gap-4 border-t border-sand py-9 sm:grid-cols-[8rem_1fr] sm:gap-10">
                <span className="font-display text-step-2 font-extrabold tracking-tight text-champagne">
                  {milestone.year}
                </span>
                <div>
                  <h3 className="font-display text-step-1 font-bold text-text-dark">
                    {milestone.title}
                  </h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-text-muted">
                    {milestone.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <TestimonialsSection limit={3} tone="white" />

      <Section tone="ink" spacing="lg" width="wide" mesh>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Where we are"
              title={`${site.address.city}, and wherever you are`}
              tone="dark"
              size="lg"
            />
            <p className="mt-7 max-w-xl leading-relaxed text-vanilla/60">
              We&apos;re based in {site.address.city}, {site.address.region}. About half our clients
              are within a two-hour drive and the other half we&apos;ve never met in person, which
              works fine — the calls are the same either way, and the preview URL doesn&apos;t care
              where you open it.
            </p>
            <div className="mt-9">
              <Button href="/contact" variant="accent" size="md">
                Get in touch
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </div>

          <dl className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
            <div className="border-t border-vanilla/15 pt-4">
              <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-vanilla/40">
                Email
              </dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${site.email}`}
                  className="font-display font-bold text-vanilla underline decoration-champagne decoration-2 underline-offset-4"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="border-t border-vanilla/15 pt-4">
              <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-vanilla/40">
                Reply time
              </dt>
              <dd className="mt-2 font-display font-bold text-vanilla">{site.responseTime}</dd>
            </div>
            <div className="border-t border-vanilla/15 pt-4">
              <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-vanilla/40">
                Founded
              </dt>
              <dd className="mt-2 font-display font-bold text-vanilla">{site.founded}</dd>
            </div>
            <div className="border-t border-vanilla/15 pt-4">
              <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-vanilla/40">
                Capacity
              </dt>
              <dd className="mt-2 font-display font-bold text-vanilla">Two builds at a time</dd>
            </div>
          </dl>
        </div>
      </Section>

      <CTABanner
        eyebrow="Next step"
        title="Think we'd suit each other?"
        subtitle="Tell us what the site needs to do. If we're not the right studio for it we'll say so on the first call, and usually suggest who is."
        primaryAction={{ label: "Start a project", href: "/contact" }}
        secondaryAction={{ label: "Read the FAQ", href: "/faq" }}
        showEmail
      />
    </>
  );
}
