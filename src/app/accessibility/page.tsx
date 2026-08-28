import type { Metadata } from "next";

import { LegalPageTemplate, type LegalSection } from "@/components/templates/LegalPageTemplate";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Accessibility Statement | Quesiono",
  description:
    "How we build for keyboards, screen readers and reduced motion, what standard we hold this site to, what we know still falls short, and how to report a barrier.",
  path: "/accessibility",
  eyebrow: "Legal",
  keywords: [
    "accessibility statement",
    "WCAG 2.2 AA",
    "accessible web design",
    "screen reader friendly website",
    "ADA website compliance",
  ],
});

const sections: LegalSection[] = [
  {
    id: "our-commitment",
    heading: "What we're aiming at",
    blocks: [
      {
        p: "This site targets WCAG 2.2 Level AA. That's the standard the ADA is generally read against in the US, and it's the one we build client sites to as a default rather than as an upgrade.",
      },
      {
        p: "We're claiming a target, not a certification. No automated tool can confirm AA compliance, and any agency telling you their site is fully accessible has stopped testing. What we can tell you is what we've done, what we've tested, and what we know is still wrong.",
      },
    ],
  },
  {
    id: "what-we-built-in",
    heading: "What's built into this site",
    blocks: [
      {
        list: [
          "Every interactive element reaches by keyboard, in the order it appears, with a visible focus ring that isn't the browser default hidden under a border.",
          "A skip link to the main content as the first tab stop.",
          "Semantic landmarks — one h1 per page, headings that descend without skipping levels, real button and nav elements instead of divs with click handlers.",
          "Text contrast of at least 4.5:1 against its background, checked on every colour pair in the palette rather than assumed from the brand guide.",
          "Motion that stops. Every animation on the site respects prefers-reduced-motion and falls back to a plain fade or nothing at all.",
          "Alt text written for the sentence it sits in, and empty alt on decorative artwork so screen readers skip it instead of reading a filename.",
          "Form fields with real labels, errors announced next to the field they belong to, and no error state that relies on colour alone.",
          "Video with controls, no autoplay with sound, and captions where there's speech.",
        ],
      },
      {
        p: "Text scales to 200% without content overlapping or being cut off, and the layout reflows to a 320px viewport without a horizontal scrollbar.",
      },
    ],
  },
  {
    id: "how-we-test",
    heading: "How we test it",
    blocks: [
      {
        p: "Automated tools catch roughly a third of real barriers. The rest needs someone to actually use the page.",
      },
      {
        rows: [
          { term: "Automated", detail: "axe DevTools and Lighthouse on every template before launch." },
          {
            term: "Keyboard only",
            detail:
              "The whole site, mouse unplugged. If a menu, accordion or form can't be operated and escaped by keyboard, it isn't finished.",
          },
          {
            term: "Screen readers",
            detail: "VoiceOver on macOS and Safari, NVDA on Windows and Firefox.",
          },
          {
            term: "Zoom and reflow",
            detail: "200% text zoom, and a 320px viewport for reflow.",
          },
          {
            term: "Reduced motion",
            detail: "Every page re-checked with the OS setting on.",
          },
        ],
      },
    ],
  },
  {
    id: "known-gaps",
    heading: "What we know still falls short",
    blocks: [
      {
        p: "Publishing this list is the part most accessibility statements skip. It's also the only part that tells you whether anyone actually tested the site.",
      },
      {
        list: [
          "Some case-study charts carry a text summary rather than a full data table. A sighted user gets the shape of the trend faster than a screen-reader user does.",
          "A few older blog posts have alt text that describes the image without explaining why it's in the article.",
          "The animated hero artwork is decorative and hidden from assistive technology. Someone using a screen reader gets the heading and the copy, but not the visual metaphor.",
          "Colour contrast on a small number of muted captions sits at AA but not AAA.",
        ],
      },
      {
        p: "Each of these is on the list to fix, and the list moves. If something here is blocking you today, tell us and it jumps the queue.",
      },
    ],
  },
  {
    id: "client-work",
    heading: "Accessibility in client projects",
    blocks: [
      {
        p: "AA is the default on every build, in the scope document, at no extra cost. It's not a line item you can decline, because retrofitting it later costs three times as much and never gets done properly.",
      },
      {
        list: [
          "Contrast and focus states designed in Figma, before anyone writes CSS.",
          "Keyboard and screen-reader passes on each template during the build, not in a QA week at the end.",
          "A written accessibility note at handover covering what we tested and what your team needs to keep doing when they add content.",
          "Training on alt text and heading structure for whoever edits the site, because most accessibility regressions arrive through the CMS.",
        ],
      },
      {
        p: "Where a client needs a formal audit or a VPAT, we say plainly that it needs a specialist and we'll work alongside one. We're good at building accessibly; we're not a certification body.",
      },
    ],
  },
  {
    id: "report-a-barrier",
    heading: "Found a barrier? Tell us",
    blocks: [
      {
        p: `Email ${site.email} with the page URL, what you were trying to do, and what happened instead. Your browser and assistive technology help, but don't let a missing detail stop you sending it.`,
      },
      {
        p: `You'll get a reply inside ${site.responseTime} from a person, not an autoresponder. Blocking issues are fixed within five working days where we can; where we can't, we'll tell you what we're doing and when it'll land.`,
      },
      {
        p: "If a page defeats us, we'll get you the information another way — on a call, in an email, or in a format you can use. That's not a workaround for fixing the page. Both happen.",
      },
    ],
  },
  {
    id: "standard",
    heading: "The formal bit",
    blocks: [
      {
        rows: [
          { term: "Standard", detail: "WCAG 2.2 Level AA" },
          { term: "Status", detail: "Partially conformant — the gaps are listed above" },
          { term: "Assessment", detail: "Self-assessed by the studio, not third-party audited" },
          { term: "Applies to", detail: "quesiono.com and its subdomains" },
        ],
      },
      {
        p: "Partially conformant means most of the site meets AA and some of it doesn't yet. We'd rather write that than tick a box, and we update this page whenever a gap closes or a new one appears.",
      },
    ],
  },
];

export default function AccessibilityPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            path: "/accessibility",
            name: "Accessibility Statement | Quesiono",
            description:
              "Quesiono's accessibility statement: our WCAG 2.2 AA target, how we test, and the gaps we know about.",
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Accessibility", href: "/accessibility" },
          ])
        )}
      />

      <LegalPageTemplate
        title="Accessibility statement"
        accent={["statement"]}
        intro="What we've done, how we tested it, and the four things we know are still wrong. That last list is the part worth reading."
        updated="August 2026"
        facts={[
          { term: "Target", detail: "WCAG 2.2 Level AA" },
          { term: "Status", detail: "Partially conformant" },
        ]}
        sections={sections}
        path="/accessibility"
      />
    </>
  );
}
