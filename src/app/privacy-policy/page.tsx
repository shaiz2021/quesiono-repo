import type { Metadata } from "next";

import { LegalPageTemplate, type LegalSection } from "@/components/templates/LegalPageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Quesiono",
  description:
    "What data we collect when you use quesiono.com or hire us, why we hold it, how long we keep it, and how to get it deleted. Written to be read, not skimmed.",
  path: "/privacy-policy",
  eyebrow: "Legal",
  keywords: ["privacy policy", "data protection", "GDPR", "CCPA", "web agency privacy"],
});

const sections: LegalSection[] = [
  {
    id: "what-this-covers",
    heading: "What this covers",
    blocks: [
      {
        p: `This policy applies to quesiono.com and to the work we do for clients. ${site.legalName} is the data controller for anything collected through this site. If you're a client, the projects we build for you may collect data from your customers — that's covered by your own privacy policy, not this one, though we'll help you write it.`,
      },
      {
        p: "We've written it in plain sentences instead of defined terms in capital letters. Where a legal right has a specific name, we've used the name and then explained what it means.",
      },
    ],
  },
  {
    id: "what-we-collect",
    heading: "What we collect, and when",
    blocks: [
      {
        p: "Three situations, and nothing outside them.",
      },
      {
        rows: [
          {
            term: "You fill in a form",
            detail:
              "Name, email, company, phone if you give it, plus the service, budget band, timeline and message. All of it optional except name, email and message.",
          },
          {
            term: "You visit a page",
            detail:
              "Aggregate page views and referrers via Vercel Analytics, which doesn't set cookies or build a profile of you. If Google Tag Manager is enabled we may also load Google Analytics — see the cookie policy for what that adds.",
          },
          {
            term: "You become a client",
            detail:
              "Contract details, billing information, and whatever credentials the build needs. Credentials live in a shared vault, never in email or a spreadsheet.",
          },
        ],
      },
      {
        p: "We don't buy contact lists, we don't scrape LinkedIn, and we don't run tracking pixels for advertising networks on this site.",
      },
    ],
  },
  {
    id: "why-we-hold-it",
    heading: "Why we hold it",
    blocks: [
      {
        p: "Each thing we collect has one reason, and the reason is the limit on what we do with it.",
      },
      {
        list: [
          "Form submissions — so we can reply to you. That's a legitimate interest: you asked us a question and expect an answer.",
          "Project files and credentials — so we can do the work you contracted us for.",
          "Invoices and contracts — because tax law in the US requires us to keep them.",
          "Aggregate analytics — so we know which pages are worth improving. We can't identify you from it.",
        ],
      },
      {
        p: "We only email you about something other than your enquiry if you asked us to. There's no newsletter you get added to for filling in a contact form.",
      },
    ],
  },
  {
    id: "how-long",
    heading: "How long we keep it",
    blocks: [
      {
        rows: [
          {
            term: "Enquiries that go nowhere",
            detail: "Deleted after 24 months. If you'd rather it went sooner, ask and it goes.",
          },
          { term: "Client project files", detail: "Kept for three years after the last invoice, then deleted." },
          { term: "Credentials", detail: "Removed from our vault within 14 days of a project closing." },
          { term: "Invoices and contracts", detail: "Seven years, because we have to." },
          { term: "Analytics", detail: "Aggregate only, retained by the provider on their own schedule." },
        ],
      },
    ],
  },
  {
    id: "who-sees-it",
    heading: "Who else sees it",
    blocks: [
      {
        p: "A short list of vendors, each doing one job. We don't sell data to anyone, and none of these are advertising networks.",
      },
      {
        rows: [
          { term: "Vercel", detail: "Hosting and analytics for this site. US-based." },
          { term: "Resend", detail: "Delivers the email your contact form generates." },
          {
            term: "Google",
            detail:
              "Search Console for indexing data, and Analytics via Tag Manager where enabled. Search Console shows us queries, never who searched.",
          },
          { term: "Our accountant", detail: "Sees invoices. Nothing else." },
        ],
      },
      {
        p: "The five people who work here can see client data relevant to their own projects. Nobody outside the studio gets access, and we don't use client data to train anything.",
      },
    ],
  },
  {
    id: "your-rights",
    heading: "Your rights, and how to actually use them",
    blocks: [
      {
        p: "Depending on where you live, GDPR or the CCPA gives you a set of rights over your data. We apply all of them to everybody, because running two standards is how mistakes happen.",
      },
      {
        list: [
          "Ask what we hold about you, and get a copy.",
          "Correct anything wrong.",
          "Have it deleted, unless tax law makes us keep it.",
          "Object to us processing it, or ask us to restrict how we do.",
          "Take it elsewhere in a portable format.",
          "Complain to a regulator without asking us first.",
        ],
      },
      {
        p: `To use any of them, email ${site.email} with what you want. No form, no ID upload unless we genuinely can't tell it's you. We'll act within 30 days and usually inside a week.`,
      },
    ],
  },
  {
    id: "security",
    heading: "How we protect it",
    blocks: [
      {
        list: [
          "HTTPS everywhere on this site, with HSTS.",
          "Two-factor authentication on every account that offers it.",
          "Credentials in a password manager with per-project sharing, never in email.",
          "Laptops with full-disk encryption and automatic locking.",
          "Access removed the day someone stops working on a project.",
        ],
      },
      {
        p: "No system is perfect. If we ever have a breach that puts your data at risk, we'll tell you and the relevant regulator within 72 hours of finding out, with what happened and what we're doing about it.",
      },
    ],
  },
  {
    id: "children",
    heading: "Children",
    blocks: [
      {
        p: "This site isn't aimed at anyone under 16 and we don't knowingly collect their data. If you think we have some, email us and it'll be deleted the same day.",
      },
    ],
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    blocks: [
      {
        p: "When we change something that affects what we collect or who sees it, we update the date at the top of this page. If the change is significant and we hold your email because you're a client, we'll tell you directly rather than hoping you re-read the page.",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/privacy-policy",
            name: "Privacy Policy | Quesiono",
            description:
              "What data Quesiono collects, why, how long it's kept, and how to have it deleted.",
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Privacy policy", href: "/privacy-policy" },
          ])
        )}
      />

      <LegalPageTemplate
        title="Privacy policy"
        accent={["policy"]}
        intro="What we collect, why we have it, how long we keep it, and how to make us delete it. Nine sections, about four minutes, no defined terms in capital letters."
        updated="August 2026"
        effective="January 2022"
        facts={[
          { term: "Applies to", detail: "quesiono.com and our client work" },
          { term: "Data we sell", detail: "None, ever" },
        ]}
        sections={sections}
        path="/privacy-policy"
      />
    </>
  );
}
