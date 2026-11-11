import Link from "next/link";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { services } from "@/data/services";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata({
  title: "Discuss Your Project",
  description:
    "Tell Quesiono about your website, ecommerce, software, or SEO project. Share your goal and get a clear next step. No finished brief needed.",
  path: "/contact",
});
export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let’s talk"
        title="A useful conversation starts here."
        description="A new website, a stubborn problem, or a plan that needs shaping. Tell us where you are and where you want to get to."
        trail={[{ name: "Contact", href: "/contact" }]}
        light
      />
      <Section width="wide" tone="cream" spacing="sm">
        <div className="grid items-start gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <aside className="relative overflow-hidden rounded-md border border-indigo bg-indigo p-6 text-vanilla shadow-[0_22px_50px_-36px_rgba(11,15,28,.55)] sm:p-8 lg:sticky lg:top-28">
            <span aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-champagne/25" />
            <p className="eyebrow text-champagne">What happens next</p>
            <ol className="mt-6 space-y-7">
              {[
                [
                  "We read your brief",
                  "We review the goal, existing site and any constraints you share.",
                ],
                [
                  "We clarify the fit",
                  "We may ask a few questions or arrange a conversation to understand the scope.",
                ],
                [
                  "You get a clear next step",
                  "If the project is a fit, we outline the proposed work, timing and costs before you commit.",
                ],
              ].map(([t, d], i) => (
                <li key={t} className="border-t border-vanilla/20 pt-5">
                  <p className="text-xs font-semibold text-champagne">0{i + 1}</p>
                  <h2 className="mt-3 text-lg font-semibold text-vanilla">{t}</h2>
                  <p className="mt-2 text-sm text-vanilla/75">{d}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 border-t border-vanilla/20 pt-6">
              <h2 className="text-lg font-semibold">Prefer email?</h2>
              <a href={`mailto:${site.email}`} className="mt-2 inline-flex min-h-11 items-center break-all text-sm font-semibold text-champagne underline underline-offset-4">
                {site.email} ↗
              </a>
              <p className="mt-5 text-sm text-vanilla/75">
                Looking for a role? Visit{" "}
                <Link href="/careers" className="underline">
                  Careers
                </Link>
                . For product questions, use the support options on the{" "}
                <Link href="/products" className="underline">
                  product website
                </Link>
                .
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-5 text-sm">
              <Link href="/pricing" className="inline-flex min-h-11 items-center text-champagne underline underline-offset-4">
                Pricing & scope ↗
              </Link>
              <Link href="/process" className="inline-flex min-h-11 items-center text-champagne underline underline-offset-4">
                Our process ↗
              </Link>
            </div>
          </aside>
          <ContactForm
            services={services.map((s) => ({ slug: s.slug, name: s.name }))}
          />
        </div>
      </Section>
    </>
  );
}
