import { LegalPageTemplate } from "@/components/templates/LegalPageTemplate";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata({
  title: "Accessibility statement",
  description:
    "Our approach to making this website usable across devices and ways of navigating.",
  path: "/accessibility",
});
const sections = [
  {
    id: "approach",
    heading: "How the interface is built",
    blocks: [
      {
        p: "The site uses semantic headings, labelled form controls, keyboard-operable navigation, visible focus states and native FAQ disclosures. The mobile navigation opens as a modal dialog and supports Escape to close.",
      },
      {
        p: "Core page content is visible without scroll-triggered animation. Motion is limited and reduced-motion preferences are respected. Layouts adapt to narrow screens, and long-form content uses a readable text measure.",
      },
    ],
  },
  {
    id: "feedback",
    heading: "Reporting a barrier",
    blocks: [
      {
        p: "If you cannot use part of the site, email quesionowebdesign@gmail.com with the page address, what you were trying to do and the browser or assistive technology involved, if you are comfortable sharing it.",
      },
      {
        p: "We can discuss another way to provide the information or handle your enquiry while the issue is investigated.",
      },
    ],
  },
  {
    id: "limits",
    heading: "Testing and limitations",
    blocks: [
      {
        p: "Automated checks and keyboard review help identify issues but do not establish complete accessibility conformance. This statement does not claim a formal certification or independent audit.",
      },
      {
        p: "External product sites and services have their own interfaces. If a third-party destination prevents you from completing an enquiry, contact us by email.",
      },
    ],
  },
];
export default function PolicyPage() {
  return (
    <LegalPageTemplate
      title="Accessibility statement"
      intro="Our approach to making this website usable across devices and ways of navigating."
      updated="8 November 2026"
      path="/accessibility"
      sections={sections}
    />
  );
}
