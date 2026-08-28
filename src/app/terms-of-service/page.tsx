import type { Metadata } from "next";

import { LegalPageTemplate, type LegalSection } from "@/components/templates/LegalPageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service | Quesiono",
  description:
    "The terms we work under: what's in a fixed scope, how payment and revisions work, who owns the code, and what happens if either side walks away.",
  path: "/terms-of-service",
  eyebrow: "Legal",
  keywords: [
    "terms of service",
    "web design contract terms",
    "website project terms",
    "agency payment terms",
    "website ownership rights",
  ],
});

const sections: LegalSection[] = [
  {
    id: "the-agreement",
    heading: "What this document is",
    blocks: [
      {
        p: `These terms cover using quesiono.com, and they're the default terms for work we do for you. Every project also gets its own written scope and quote — where that document and this page disagree, the project document wins. It's specific to your build; this page is the general case.`,
      },
      {
        p: "Nothing starts until you've approved a scope in writing and paid the deposit. A verbal yes on a call is not a start date, which protects both of us.",
      },
    ],
  },
  {
    id: "scope",
    heading: "Scope, and what counts as a change",
    blocks: [
      {
        p: "Every quote lists the templates, the page count, the integrations, and the number of revision rounds. That list is the project. Anything outside it is a change request, and a change request gets its own quote before anyone builds it.",
      },
      {
        p: "This isn't us being difficult. Unpriced additions are how a six-week project becomes four months, and the person who ends up paying for it is usually you.",
      },
      {
        h3: "Revisions",
        p: "Two rounds of revisions per design stage are included as standard. A round means one consolidated set of feedback, not fifteen emails over a fortnight. Extra rounds are billed at our hourly rate, which is in your quote.",
      },
    ],
  },
  {
    id: "your-part",
    heading: "What we need from you",
    blocks: [
      {
        p: "Most late projects are late for the same reasons, and none of them are build speed. So, plainly:",
      },
      {
        list: [
          "One person with sign-off. Committees turn two revision rounds into six.",
          "Content, or a decision to have us write it. Rough real copy beats polished placeholder.",
          "Brand files, logos and photography, or a decision that we're sourcing them.",
          "Access to the domain registrar, host and analytics before launch week.",
          "Feedback inside five working days at each stage.",
        ],
      },
      {
        p: "If a project stalls on your side for more than 30 days we'll pause it, invoice for work completed, and restart when you're ready — subject to a slot being free, which may mean a wait.",
      },
    ],
  },
  {
    id: "payment",
    heading: "Payment",
    blocks: [
      {
        rows: [
          {
            term: "Standard split",
            detail: "40% deposit to book the slot, 30% at design sign-off, 30% before launch.",
          },
          { term: "Retainers", detail: "Monthly in advance, cancellable with 30 days' notice." },
          { term: "Terms", detail: "Invoices are due 14 days from issue." },
          {
            term: "Late payment",
            detail:
              "1.5% a month after 30 days. We'd rather talk about a payment plan than send that invoice, so tell us early if cash flow is tight.",
          },
        ],
      },
      {
        p: "Prices in a quote hold for 30 days. Rush work — a deadline that needs us to reshuffle other clients — carries a 20% premium, stated up front and never applied retroactively.",
      },
    ],
  },
  {
    id: "ownership",
    heading: "Who owns what",
    blocks: [
      {
        p: "Once the final invoice clears, you own the design files, the copy we wrote for you, and the code we wrote for you, outright. We transfer the repository and every credential at handover.",
      },
      {
        list: [
          "Third-party licences — fonts, stock images, paid plugins — stay under their own terms. We'll tell you which ones a build depends on.",
          "Open-source libraries stay under their original licences, which is how open source works.",
          "Small internal utilities we reuse across projects stay ours, and you get a perpetual licence to use them in your site.",
          "We keep the right to show the work in our portfolio and to describe what we did, unless your contract says otherwise. Ask and we'll take it out.",
        ],
      },
      {
        p: "Before the final invoice clears, the work is licensed to you for review, not assigned. Nobody has ever tested that clause and we'd rather it stayed that way.",
      },
    ],
  },
  {
    id: "warranty",
    heading: "What we guarantee, and what we don't",
    blocks: [
      {
        h3: "We do guarantee",
        list: [
          "Thirty days of fixes after launch at no cost — bugs, broken layouts, a form that stopped firing.",
          "The performance and accessibility targets written into your scope, measured the way the scope says.",
          "That the site works in the current and previous major version of Chrome, Safari, Firefox and Edge.",
        ],
      },
      {
        h3: "We don't guarantee",
        list: [
          "Specific rankings or traffic numbers. Nobody can, and anyone who does is guessing with your money.",
          "Revenue outcomes. We can build the funnel; we don't control your market or your prices.",
          "Third-party services staying up, or an API not changing under us.",
          "Sites we didn't build, or changes someone else makes after handover.",
        ],
      },
      {
        p: "Where SEO is involved, we commit to the work — audits, fixes, content, links earned honestly — and report what actually moved. We don't commit to a position on a results page we don't own.",
      },
    ],
  },
  {
    id: "liability",
    heading: "Liability",
    blocks: [
      {
        p: "Our total liability for any project is capped at the fees you paid us for it. We're not liable for lost profits, lost data you didn't have backed up, or knock-on business losses.",
      },
      {
        p: "That cap is normal for studios our size and it's the reason we can quote fixed prices at all. If your project genuinely needs a higher cap, say so before signing — sometimes we can, with different insurance and a different number.",
      },
    ],
  },
  {
    id: "cancellation",
    heading: "If either side wants out",
    blocks: [
      {
        h3: "You cancel",
        p: "The deposit is non-refundable, because it held a slot we turned other work away for. Beyond that you pay for work completed to the day you tell us, and you get everything we've produced. No termination fee.",
      },
      {
        h3: "We cancel",
        p: "Rare, but it happens — a scope that turned out to be someone else's specialism, or a working relationship that isn't working. We refund any fees for work not yet done, hand over what exists, and where we can we suggest someone better suited.",
      },
      {
        p: "Either way you keep what you paid for. We've never held a repository hostage over an invoice and we're not going to start.",
      },
    ],
  },
  {
    id: "site-use",
    heading: "Using this website",
    blocks: [
      {
        p: "The words, code and images on quesiono.com are ours. Read them, quote them with a link, learn from them. Don't republish a page wholesale as your own agency's copy — it happens more than you'd think, and we do notice.",
      },
      {
        p: "Client names, logos and case-study numbers on this site are used with permission. Prices shown are indicative ranges, not offers, and the quote you sign is the price.",
      },
    ],
  },
  {
    id: "law",
    heading: "Governing law and disputes",
    blocks: [
      {
        p: `These terms are governed by the laws of the State of ${site.address.regionName}, United States. Anything we can't resolve goes to the courts of ${site.address.city}, ${site.address.region}.`,
      },
      {
        p: `Before that, though: email ${site.email} and say what's wrong. Every disagreement we've had since ${site.founded} has been settled in a phone call, usually because one of us had missed something obvious.`,
      },
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/terms-of-service",
            name: "Terms of Service | Quesiono",
            description:
              "Quesiono's standard terms: scope, payment, ownership, warranties and cancellation.",
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Terms of service", href: "/terms-of-service" },
          ])
        )}
      />

      <LegalPageTemplate
        title="Terms of service"
        accent={["service"]}
        intro="How we work, what's included, who owns the code, and what happens if it goes wrong. Written for the person who has to sign it rather than for a court."
        updated="August 2026"
        effective="January 2022"
        facts={[
          { term: "Payment split", detail: "40 / 30 / 30" },
          { term: "Included after launch", detail: "30 days of fixes" },
        ]}
        sections={sections}
        path="/terms-of-service"
      />
    </>
  );
}
