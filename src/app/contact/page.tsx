import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/sections/ContactForm";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { CapabilityStrip } from "@/components/ui/CapabilityStrip";

import { GradientMesh } from "@/components/motion/GradientMesh";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";

import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, graph, webPageSchema } from "@/lib/schema";
import { site, socialLinks } from "@/lib/site";
import { studioFaqGroups } from "@/data/studio";

export const metadata: Metadata = buildMetadata({
  title: "Contact Quesiono — Start a Web Design or SEO Project",
  description:
    "Tell us what the site needs to do and you'll hear back within one business day. Web design, development, SEO and content from a five-person Houston studio.",
  path: "/contact",
  eyebrow: "Contact",
  keywords: [
    "contact web design agency",
    "hire a web designer Houston",
    "website quote",
    "get a website built",
    "SEO consultation",
    "web design agency near me",
  ],
});

/* The five questions people actually ask before the first call, pulled from
   the shared FAQ data so the answers here and on /faq can't diverge. */
const contactFaqs = [
  studioFaqGroups[0].faqs[0],
  studioFaqGroups[1].faqs[1],
  studioFaqGroups[1].faqs[2],
  studioFaqGroups[0].faqs[1],
  studioFaqGroups[0].faqs[4],
];

const expectations = [
  {
    step: "01",
    title: "You send the details",
    body: "The form below, or an email. Either is fine. A URL and one paragraph is enough to start.",
  },
  {
    step: "02",
    title: "We reply within a business day",
    body: "A real reply with real questions, not a calendar link and a template. Sometimes the reply is that we're not the right fit.",
  },
  {
    step: "03",
    title: "Forty-five minutes on a call",
    body: "What the site has to do, what's blocking it now, what you've already tried. We'll give you a price range on the call.",
  },
  {
    step: "04",
    title: "A written scope in three days",
    body: "Every page, every template, what's in and what isn't, with a fixed price and a start date. Nothing begins before you've read it.",
  },
];

export default function ContactPage() {
  const trail = [{ name: "Contact", href: "/contact" }];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/contact",
            name: "Contact Quesiono — Start a Web Design or SEO Project",
            description:
              "Get in touch with Quesiono about a web design, development, SEO or content project. Replies within one business day.",
          }),
          breadcrumbSchema([{ name: "Home", href: "/" }, ...trail]),
          faqSchema(contactFaqs)
        )}
      />

      <header className="grain relative overflow-hidden bg-ink">
        <GradientMesh variant="ink" drift />
        <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 pb-24 pt-[calc(var(--nav-h)+4rem)] sm:px-8 lg:grid-cols-[1fr_0.85fr] lg:gap-20 lg:px-12 lg:pb-28">
          <div>
            <Breadcrumbs trail={trail} tone="dark" emitSchema={false} />
            <div className="mt-8">
              <Eyebrow tone="dark">Start a project</Eyebrow>
            </div>

            <RevealText
              text="Tell us what the site has to do"
              as="h1"
              accent={["has", "to", "do"]}
              className="mt-6 text-step-6 font-extrabold leading-[0.96] text-vanilla"
            />

            <p className="mt-7 max-w-xl text-step-1 leading-relaxed text-vanilla/65">
              Not what it should look like — that comes later. What it needs to do: sell a product,
              book calls, rank for eleven terms, stop losing people on mobile. Start there and the
              first call is worth having.
            </p>

            <dl className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              <div>
                <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-vanilla/40">
                  Email
                </dt>
                <dd className="mt-2.5">
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2 font-display text-step-0 font-bold text-vanilla underline decoration-champagne decoration-2 underline-offset-4 transition-colors hover:text-champagne"
                  >
                    <Mail className="h-4 w-4 text-champagne" aria-hidden />
                    {site.email}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-vanilla/40">
                  Phone
                </dt>
                <dd className="mt-2.5">
                  <a
                    href={`tel:${site.phone}`}
                    className="inline-flex items-center gap-2 font-display text-step-0 font-bold text-vanilla transition-colors hover:text-champagne"
                  >
                    <Phone className="h-4 w-4 text-champagne" aria-hidden />
                    {site.phone}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-vanilla/40">
                  Studio
                </dt>
                <dd className="mt-2.5 inline-flex items-start gap-2 text-[0.95rem] leading-relaxed text-vanilla/70">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-champagne" aria-hidden />
                  <span>
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.region} {site.address.postalCode}
                  </span>
                </dd>
              </div>

              <div>
                <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-vanilla/40">
                  Hours
                </dt>
                <dd className="mt-2.5 inline-flex items-start gap-2 text-[0.95rem] leading-relaxed text-vanilla/70">
                  <Clock className="mt-1 h-4 w-4 shrink-0 text-champagne" aria-hidden />
                  <span>
                    Mon–Fri, {site.hours.opens}–{site.hours.closes} Central
                    <br />
                    Replies inside {site.responseTime}
                  </span>
                </dd>
              </div>
            </dl>

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-vanilla/12 pt-8">
              <span className="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-vanilla/40">
                Elsewhere
              </span>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[0.9rem] font-semibold text-vanilla/70 transition-colors hover:text-champagne"
                >
                  {social.label}
                  <ArrowUpRight
                    className="h-3.5 w-3.5 opacity-50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    aria-hidden
                  />
                </a>
              ))}
            </div>
          </div>

          <Reveal direction="up" delay={0.12}>
            <div className="rounded-3xl border border-vanilla/12 bg-vanilla/[0.04] p-8 lg:sticky lg:top-[calc(var(--nav-h)+2rem)]">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-champagne">
                Before you write
              </p>
              <h2 className="mt-4 font-display text-step-2 font-extrabold leading-tight text-vanilla">
                Three things that make the reply useful
              </h2>
              <ul className="mt-7 space-y-6">
                {[
                  {
                    title: "The URL",
                    body: "Even if you hate it. Most of our first answer comes from looking at what exists.",
                  },
                  {
                    title: "The deadline, if there is one",
                    body: "A fixed launch date changes the whole shape of a quote. Tell us early rather than in week four.",
                  },
                  {
                    title: "A budget range",
                    body: "Not to charge you the maximum. To tell you honestly whether what you want is a $500 job or a $3.75k one.",
                  },
                ].map((item) => (
                  <li key={item.title} className="border-t border-vanilla/10 pt-5 first:border-0 first:pt-0">
                    <p className="font-display font-bold text-vanilla">{item.title}</p>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-vanilla/55">{item.body}</p>
                  </li>
                ))}
              </ul>

              <p className="mt-8 rounded-2xl bg-champagne/10 p-5 text-[0.875rem] leading-relaxed text-vanilla/70">
                We take on two builds at a time, so the earliest start is usually three to five weeks
                out. Worth knowing before you plan around it.
              </p>
            </div>
          </Reveal>
        </div>
      </header>

      <CapabilityStrip tone="midnight" />

      <Section tone="cream" spacing="xl" width="wide" id="form">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <ContactForm />

          <div className="lg:pt-4">
            <SectionHeading
              eyebrow="What happens next"
              title="Four steps, no mystery"
              size="lg"
            />

            <ol className="mt-12 space-y-0">
              {expectations.map((item, index) => (
                <Reveal key={item.step} delay={index * 0.06}>
                  <li className="grid gap-4 border-t border-sand py-7 sm:grid-cols-[3rem_1fr] sm:gap-6">
                    <span className="font-display text-step-1 font-extrabold tracking-tight text-champagne">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-display text-step-0 font-bold text-text-dark">
                        {item.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-text-muted">{item.body}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>

            <div className="mt-10 rounded-2xl border border-sand bg-white p-7">
              <p className="font-display font-bold text-text-dark">
                Looking for something specific?
              </p>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-text-muted">
                The pricing page has real numbers, the process page has the week-by-week, and the
                portfolio has eight builds with the metrics attached.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="/pricing" variant="outline" size="sm">
                  Pricing
                </Button>
                <Button href="/process" variant="outline" size="sm">
                  Process
                </Button>
                <Button href="/portfolio" variant="outline" size="sm">
                  Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white" spacing="xl" width="default">
        <SectionHeading
          eyebrow="Asked before every project"
          title="The five questions we answer most"
          subtitle="If yours isn't here, the full FAQ has sixteen more."
          size="xl"
          className="max-w-2xl"
        />
        <div className="mt-14">
          <FaqAccordion faqs={contactFaqs} />
        </div>
        <p className="mt-10 text-[0.95rem] text-text-muted">
          Still unanswered?{" "}
          <Link
            href="/faq"
            className="font-semibold text-indigo underline decoration-champagne decoration-2 underline-offset-4 hover:text-midnight"
          >
            Read the full FAQ
          </Link>{" "}
          or just ask in the form above.
        </p>
      </Section>
    </>
  );
}
