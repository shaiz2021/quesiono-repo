import type { Metadata } from "next";

import { LegalPageTemplate, type LegalSection } from "@/components/templates/LegalPageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy | Quesiono",
  description:
    "Which cookies quesiono.com sets, what each one does, how long it lasts, and how to turn them off in every major browser. Short list — we don't run ad trackers.",
  path: "/cookie-policy",
  eyebrow: "Legal",
  keywords: ["cookie policy", "website cookies", "analytics cookies", "cookie consent", "tracking"],
});

const sections: LegalSection[] = [
  {
    id: "the-short-version",
    heading: "The short version",
    blocks: [
      {
        p: "This site sets no cookies of its own. Page-view numbers come from Vercel Analytics, which counts visits without storing anything in your browser. So on a normal visit, nothing is written to your device and there's no banner to dismiss.",
      },
      {
        p: "There's one exception, and it's below.",
      },
    ],
  },
  {
    id: "what-a-cookie-is",
    heading: "What a cookie actually is",
    blocks: [
      {
        p: "A small text file a site asks your browser to keep, and hand back on your next visit. Some are genuinely useful — they're how a store remembers your basket, or how a site stays logged in. Others exist to follow you between sites and build an advertising profile.",
      },
      {
        p: "The distinction matters more than the technology. It's why this page groups by what a cookie is for rather than by whether it's first- or third-party.",
      },
    ],
  },
  {
    id: "what-we-set",
    heading: "What this site sets",
    blocks: [
      {
        rows: [
          {
            term: "Strictly necessary",
            detail:
              "None. This site has no login, no basket and no personalisation, so there's nothing to remember between pages.",
          },
          {
            term: "Analytics — Vercel",
            detail:
              "No cookies. Vercel Analytics counts page views and referrers in aggregate, without a device identifier or a profile.",
          },
          {
            term: "Analytics — Google (conditional)",
            detail:
              "If Google Tag Manager is enabled on a deployment, Google Analytics sets _ga and _ga_* to tell a returning visit from a new one. They last up to two years and hold a random ID, not your name.",
          },
          {
            term: "Advertising",
            detail:
              "None. No Meta pixel, no LinkedIn Insight tag, no remarketing lists. We don't retarget people who read a blog post.",
          },
        ],
      },
      {
        p: "Where Google Analytics is running, IP anonymisation is on and we've turned off data sharing with other Google products and ad personalisation. We use it to see which articles earn their place, nothing more.",
      },
    ],
  },
  {
    id: "embeds",
    heading: "Embedded content",
    blocks: [
      {
        p: "Third-party embeds can set their own cookies, which is why we mostly avoid them. Case-study visuals on this site are drawn in code rather than pulled from an image host, and videos are served from our own domain.",
      },
      {
        p: "If we ever embed something external — a booking widget, a map — this page gets updated with what it sets before it goes live.",
      },
    ],
  },
  {
    id: "how-to-turn-them-off",
    heading: "How to turn cookies off",
    blocks: [
      {
        p: "You don't need our permission or a preference centre. Every browser lets you block or clear cookies directly:",
      },
      {
        list: [
          "Chrome — Settings, then Privacy and security, then Third-party cookies.",
          "Safari — Settings, then Privacy, then Manage Website Data.",
          "Firefox — Settings, then Privacy & Security, then Cookies and Site Data.",
          "Edge — Settings, then Cookies and site permissions.",
        ],
      },
      {
        p: "Blocking everything on this site costs you nothing — no feature here depends on a cookie. On other sites it may log you out or empty a basket, which is worth knowing before you block globally.",
      },
      {
        p: "Global Privacy Control and Do Not Track are honoured in code, not just in a promise: if your browser sends either signal, the Tag Manager script never loads, so Google Analytics never runs and no cookie is written.",
      },
    ],
  },
  {
    id: "clients",
    heading: "Cookies on sites we build for clients",
    blocks: [
      {
        p: "This policy covers quesiono.com only. Sites we build for clients are theirs, with their own analytics, their own tools and their own cookie policy.",
      },
      {
        p: "What we do on every build: keep the tag list to what someone can name a reason for, load consent tooling where the audience needs it, and write the client's own cookie policy from what's actually installed rather than from a generator template.",
      },
    ],
  },
  {
    id: "changes",
    heading: "Changes",
    blocks: [
      {
        p: `If we add a tool that sets a cookie, this page changes before the tool ships, and the date at the top moves. Spotted something in your browser's storage inspector that isn't listed here? Email ${site.email} — that's a bug on our side and we'd want to know.`,
      },
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/cookie-policy",
            name: "Cookie Policy | Quesiono",
            description:
              "The cookies quesiono.com sets, what they do, and how to switch them off.",
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Cookie policy", href: "/cookie-policy" },
          ])
        )}
      />

      <LegalPageTemplate
        title="Cookie policy"
        accent={["policy"]}
        intro="A short page, because there isn't much to declare. No advertising trackers, no consent wall, and nothing written to your browser on a normal visit."
        updated="August 2026"
        facts={[
          { term: "Cookies we set", detail: "None by default" },
          { term: "Ad trackers", detail: "Zero" },
        ]}
        sections={sections}
        path="/cookie-policy"
      />
    </>
  );
}
