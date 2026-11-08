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
          <aside>
            <p className="eyebrow text-text-muted">What happens next</p>
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
                <li key={t} className="border-t border-sand pt-5">
                  <p className="text-xs text-text-muted">0{i + 1}</p>
                  <h2 className="mt-3 text-lg font-semibold">{t}</h2>
                  <p className="mt-2 text-sm text-text-muted">{d}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 border-t border-sand pt-6">
              <h2 className="text-lg font-semibold">Prefer email?</h2>
              <a href={`mailto:${site.email}`} className="text-link mt-2">
                {site.email} ↗
              </a>
              <p className="mt-5 text-sm text-text-muted">
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
              <Link href="/pricing" className="text-link">
                Pricing & scope ↗
              </Link>
              <Link href="/process" className="text-link">
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
