import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { FeatureGrid } from "@/components/ui/FeatureGrid";
import { CTABanner } from "@/components/ui/CTABanner";

import { GradientMesh } from "@/components/motion/GradientMesh";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { ShowreelCanvas } from "@/components/motion/ShowreelCanvas";
import { MagneticButton } from "@/components/motion/MagneticButton";

import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, graph, itemListSchema, webPageSchema } from "@/lib/schema";
import { getIcon } from "@/lib/icons";
import { products } from "@/data/products";

export const metadata: Metadata = buildMetadata({
  title: "Our Products — AI Tools Built and Run by Quesiono",
  description:
    "Software we build and run ourselves, not just for clients. Resumeflow Ai is live, free to try, and built on the same stack we use for client work.",
  path: "/products",
  eyebrow: "Products",
  keywords: [
    "AI tools",
    "AI resume builder",
    "SaaS products",
    "AI product development agency",
    "build an AI SaaS",
    "custom web application development",
  ],
});

/* Why we ship our own software, framed as what it means for a client rather
   than as a list of studio virtues. */
const whyItMatters = [
  {
    icon: "gauge",
    title: "We run what we build",
    description:
      "Uptime, support tickets, a Stripe webhook failing at 2am. Knowing what maintenance actually costs changes how we architect your project.",
  },
  {
    icon: "code2",
    title: "The stack is the same",
    description:
      "Next.js, TypeScript, Postgres, and the Anthropic API. Nothing here is a stack we'd hand you and then not use ourselves.",
  },
  {
    icon: "users",
    title: "Real usage data",
    description:
      "Thousands of people have hit these onboarding flows. We know which step loses them, and we bring that to your funnel.",
  },
  {
    icon: "shield",
    title: "Product thinking, not just pages",
    description:
      "Auth, billing, rate limits, error states. If your project needs an app rather than a brochure, we've shipped that before.",
  },
];

export default function ProductsPage() {
  const trail = [{ name: "Products", href: "/products" }];
  const productFaqs = products.flatMap((product) => product.faqs ?? []);

  /* One product today, so the lead gets a full feature layout. The grid below
     only renders once there's a second, rather than showing a lonely card in a
     three-column row. */
  const [lead, ...rest] = products;
  if (!lead) return null;

  const LeadIcon = getIcon(lead.icon);

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/products",
            name: "Our Products — AI Tools Built and Run by Quesiono",
            description:
              "Software Quesiono builds and operates, including the Resumeflow Ai resume builder.",
          }),
          itemListSchema({
            name: "Quesiono products",
            items: products.map((product) => ({
              name: product.name,
              href: product.url,
              description: product.tagline,
            })),
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }, ...trail]),
          ...(productFaqs.length ? [faqSchema(productFaqs)] : [])
        )}
      />

      <header className="grain relative overflow-hidden bg-ink">
        <GradientMesh variant="ink" drift />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-[calc(var(--nav-h)+4rem)] sm:px-8 lg:px-12 lg:pb-28">
          <Breadcrumbs trail={trail} tone="dark" emitSchema={false} />
          <div className="mt-8">
            <Eyebrow tone="dark">
              Our own software · {products.length} {products.length === 1 ? "product" : "products"}
            </Eyebrow>
          </div>

          <RevealText
            text="We build software, not just websites for people who do"
            as="h1"
            accent={["not", "just", "websites"]}
            className="mt-6 max-w-4xl text-step-6 font-extrabold leading-[0.96] text-vanilla"
          />

          <p className="mt-7 max-w-2xl text-step-1 leading-relaxed text-vanilla/65">
            Client work pays the bills. These are the things we made because we wanted them to
            exist. They&apos;re live, they have paying users, and they run on the same stack we&apos;d
            put your project on.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <MagneticButton href={lead.url} variant="accent" size="lg">
              Try {lead.name}
              <ArrowUpRight className="h-5 w-5" aria-hidden />
            </MagneticButton>
            <Button href="/contact" variant="ghost" size="lg">
              Build one with us
            </Button>
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------------- lead -- */}

      <Section tone="cream" spacing="xl" width="wide" id="product-list">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-sand bg-white">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="p-8 sm:p-12 lg:p-14">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-midnight text-vanilla">
                    <LeadIcon className="h-6 w-6" aria-hidden />
                  </span>
                  <Badge label={lead.status} variant="accent" />
                  {lead.category ? <Badge label={lead.category} variant="outline" /> : null}
                </div>

                <h2 className="mt-8 font-display text-step-4 font-extrabold leading-[1.02] tracking-tight text-text-dark">
                  {lead.name}
                </h2>
                <p className="mt-3 text-step-1 font-semibold text-indigo">{lead.tagline}</p>

                <p className="mt-7 text-step-0 leading-relaxed text-text-muted">
                  {lead.summary ?? lead.description}
                </p>

                {lead.audience ? (
                  <p className="mt-6 border-l-2 border-champagne pl-5 text-[0.95rem] leading-relaxed text-text-muted">
                    <span className="font-semibold text-text-dark">Who it&apos;s for: </span>
                    {lead.audience}
                  </p>
                ) : null}

                <dl className="mt-10 grid gap-x-8 gap-y-6 border-t border-sand pt-8 sm:grid-cols-3">
                  <div>
                    <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-text-muted">
                      Live since
                    </dt>
                    <dd className="mt-2 font-display font-bold text-text-dark">
                      {lead.launched ?? "—"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-text-muted">
                      Free tier
                    </dt>
                    <dd className="mt-2 font-display font-bold text-text-dark">
                      {lead.freeTier ?? "—"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-text-muted">
                      Built by
                    </dt>
                    <dd className="mt-2 font-display font-bold text-text-dark">Us, in-house</dd>
                  </div>
                </dl>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Button href={lead.url} variant="primary" size="md">
                    Open {lead.name}
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Button>
                  <Button href="/services/custom-development" variant="outline" size="md">
                    Want one like this?
                  </Button>
                </div>
              </div>

              <div className="relative bg-ink p-8 lg:p-12">
                {lead.videoSrc ? (
                  <video
                    className="h-full w-full rounded-2xl object-cover"
                    src={lead.videoSrc}
                    poster={lead.posterSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : lead.image ? (
                  <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl">
                    <Image
                      src={lead.image}
                      alt={lead.imageAlt ?? `${lead.name} interface`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </div>
                ) : (
                  <ShowreelCanvas label={lead.name} caption={lead.tagline} />
                )}
              </div>
            </div>

            {lead.features?.length ? (
              <div className="grid gap-px border-t border-sand bg-sand sm:grid-cols-2">
                {lead.features.map((feature) => (
                  <div key={feature.title} className="bg-white p-8 sm:p-10">
                    <h3 className="flex items-start gap-3 font-display text-step-0 font-bold text-text-dark">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-indigo" aria-hidden />
                      {feature.title}
                    </h3>
                    <p className="mt-3 pl-7 leading-relaxed text-text-muted">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </Reveal>

        {lead.stack?.length ? (
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <span className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-text-muted">
              Built with
            </span>
            {lead.stack.map((item) => (
              <span key={item} className="font-display font-bold text-text-dark">
                {item}
              </span>
            ))}
          </div>
        ) : null}
      </Section>

      {/* ------------------------------------------------------- other tools -- */}

      {rest.length ? (
        <Section tone="white" spacing="xl" width="wide">
          <SectionHeading
            eyebrow="Also ours"
            title="The rest of the shelf"
            size="xl"
            className="max-w-2xl"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((product, index) => {
              const Icon = getIcon(product.icon);

              return (
                <Reveal key={product.name} delay={index * 0.06}>
                  <div className="flex h-full flex-col rounded-3xl border border-sand bg-cream p-8 transition-all duration-400 ease-smooth hover:-translate-y-1 hover:border-midnight/25 hover:shadow-xl">
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-midnight text-vanilla">
                        <Icon className="h-6 w-6" aria-hidden />
                      </span>
                      <Badge label={product.status} variant="outline" />
                    </div>
                    <h3 className="mt-7 font-display text-step-2 font-extrabold text-text-dark">
                      {product.name}
                    </h3>
                    <p className="mt-2 font-semibold text-indigo">{product.tagline}</p>
                    <p className="mt-4 flex-1 leading-relaxed text-text-muted">
                      {product.description}
                    </p>
                    <div className="mt-8">
                      <Button href={product.url} variant="outline" size="sm">
                        Open it
                        <ArrowUpRight className="h-4 w-4" aria-hidden />
                      </Button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Section>
      ) : null}

      {/* -------------------------------------------------------------- why -- */}

      <Section tone="ink" spacing="xl" width="wide" mesh>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeading
            eyebrow="Why this is on our site"
            title="Running software teaches things client work doesn't"
            subtitle="Anyone can build a launch. Keeping something up for two years with real users on it is a different job, and it's the one that shapes how we build for you."
            tone="dark"
            size="xl"
            className="lg:sticky lg:top-[calc(var(--nav-h)+3rem)] lg:self-start"
          />
          <FeatureGrid features={whyItMatters} tone="dark" columns={2} />
        </div>
      </Section>

      {/* ------------------------------------------------------------- build -- */}

      <Section tone="cream" spacing="xl" width="wide">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Want your own"
              title="We build products for other people too"
              size="xl"
            />
            <div className="prose mt-8">
              <p>
                About a third of our work is application rather than website — internal tools,
                client portals, booking systems, one marketplace. It&apos;s a different engagement
                from a marketing site: longer, phased, and it starts with a two-week discovery
                rather than a scope document.
              </p>
              <p>
                A realistic first version of something like Resumeflow runs eight to fourteen weeks
                and starts around $3,500. If a number that size is a surprise, say so early and
                we&apos;ll talk about what a smaller first slice looks like — usually one workflow,
                done properly, instead of five done thinly.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" variant="primary" size="md">
                Talk about a build
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button href="/services/custom-development" variant="outline" size="md">
                Custom development
              </Button>
            </div>
          </div>

          <Reveal direction="up" delay={0.1}>
            <div className="rounded-3xl border border-sand bg-white p-8 sm:p-10">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-text-muted">
                What an app project includes
              </p>
              <ul className="mt-7 space-y-5">
                {[
                  "Two weeks of discovery: user flows, data model, and the parts we say no to",
                  "Design system and prototype before any production code",
                  "Auth, billing, and permissions built in rather than bolted on later",
                  "Staging environment you can click through weekly",
                  "Handover with the repository, every credential, and a written runbook",
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

      {/* -------------------------------------------------------------- faq -- */}

      {productFaqs.length ? (
        <Section tone="white" spacing="xl" width="default">
          <SectionHeading
            eyebrow="Product questions"
            title="What people ask about our tools"
            size="xl"
            className="max-w-2xl"
          />
          <div className="mt-14">
            <FaqAccordion faqs={productFaqs} />
          </div>
        </Section>
      ) : null}

      <CTABanner
        eyebrow="Got an idea"
        title="Have something you wish existed?"
        subtitle="Describe it in a paragraph. We'll tell you whether it's a six-week build or a two-year one, and which parts you could ship first."
        primaryAction={{ label: "Start a conversation", href: "/contact" }}
        secondaryAction={{ label: "See how we work", href: "/process" }}
        showEmail
      />
    </>
  );
}
