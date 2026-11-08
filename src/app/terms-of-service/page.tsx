import { LegalPageTemplate } from "@/components/templates/LegalPageTemplate";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata({
  title: "Terms of service",
  description:
    "Website information, project enquiries and the agreements that govern commissioned work.",
  path: "/terms-of-service",
});
const sections = [
  {
    id: "website",
    heading: "Using this website",
    blocks: [
      {
        p: "The website describes Quesiono services and provides educational material. Service descriptions explain possible scope; they are not a commitment to deliver every listed item in every project.",
      },
      {
        p: "Portfolio presentations describe the supplied visuals. Business results, client statements and project attribution are published only with appropriate supporting information. Educational articles do not guarantee a business or search outcome.",
      },
    ],
  },
  {
    id: "proposal",
    heading: "Project scope and agreement",
    blocks: [
      {
        p: "Submitting an enquiry does not create a booking or a project contract. Commissioned work requires a written agreement identifying the parties, deliverables, exclusions, fees, payment milestones and delivery arrangements.",
      },
      {
        p: "The project agreement should also specify client responsibilities, review rounds, acceptance, changes, cancellation, support and any relevant third-party costs. A page on this website should not be used as a substitute for those agreed terms.",
      },
    ],
  },
  {
    id: "ownership",
    heading: "Ownership and third-party materials",
    blocks: [
      {
        p: "Ownership and handover of custom work are defined in the project agreement. Third-party software, fonts, images and services remain subject to their own licences and terms.",
      },
      {
        p: "You should provide only material and account access that you are authorized to share. Requirements involving confidential information or personal data should be discussed before that information is transferred.",
      },
    ],
  },
  {
    id: "changes",
    heading: "Changes and ongoing support",
    blocks: [
      {
        p: "New requirements should be assessed for cost and timing before they are added to the agreed scope. Ongoing maintenance and support are included only where the agreement specifies them.",
      },
      {
        p: "Platform limits, external services and changes outside the project can affect behaviour. The agreed support and acceptance process should define how those issues are handled.",
      },
    ],
  },
  {
    id: "contact",
    heading: "Questions",
    blocks: [
      {
        p: "For questions about the website or a proposed engagement, contact hello@quesiono.com. Existing signed project agreements continue to govern the work they cover.",
      },
    ],
  },
];
export default function PolicyPage() {
  return (
    <LegalPageTemplate
      title="Terms of service"
      intro="Website information, project enquiries and the agreements that govern commissioned work."
      updated="8 November 2026"
      path="/terms-of-service"
      sections={sections}
    />
  );
}
