import { LegalPageTemplate } from "@/components/templates/LegalPageTemplate";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata({
  title: "Privacy policy",
  description:
    "How this website handles project enquiries and optional analytics.",
  path: "/privacy-policy",
});
const sections = [
  {
    id: "enquiries",
    heading: "Information you provide",
    blocks: [
      {
        p: "The project form asks for your name, email and project description. You can optionally provide a website, service interest, company, phone number, budget and timeline. Please do not include passwords, payment details, sensitive personal information or confidential documents.",
      },
      {
        p: "We use the submitted details to review and respond to your enquiry. Submitting the form does not subscribe you to marketing emails. The permission checkbox records your agreement to that use.",
      },
    ],
  },
  {
    id: "delivery",
    heading: "How the enquiry reaches us",
    blocks: [
      {
        p: "The form sends your details to the website server, which validates the submission and passes the message to Resend for email delivery. The message is addressed to the configured Quesiono enquiry inbox. The application does not maintain a separate lead database.",
      },
      {
        p: "Our hosting and email providers process the request and message as part of delivery. The interface reports success only when the provider accepts the email; that is not a guarantee that it has reached the inbox. If delivery cannot be confirmed, your entered details remain available and you can open an email draft instead.",
      },
    ],
  },
  {
    id: "sources",
    heading: "Enquiry source information",
    blocks: [
      {
        p: "During your browser session, the site can keep the first page you visited, campaign labels from UTM parameters, and the origin of the referring site. These details are included with an enquiry to help us understand its context. Referrer paths and unrelated query parameters are not retained by this feature.",
      },
      {
        p: "This context is stored in sessionStorage for the current tab session. It is separate from optional analytics and does not use an advertising identifier. The website still works if browser storage is unavailable.",
      },
    ],
  },
  {
    id: "analytics",
    heading: "Optional analytics",
    blocks: [
      {
        p: "Where an analytics container is configured, it is loaded only after you allow analytics. Do Not Track and Global Privacy Control take precedence over a saved preference. Form analytics events use page paths, service identifiers and status categories; they do not include your name, email or project description.",
      },
      {
        p: "The cookie policy describes the browser storage used by the site and how to change your preference. Third-party analytics behaviour depends on the tags configured in the deployment.",
      },
    ],
  },
  {
    id: "requests",
    heading: "Questions and data requests",
    blocks: [
      {
        p: "Email quesionowebdesign@gmail.com to ask about information connected with your enquiry or request correction or deletion. Information already delivered by email is managed in the receiving mailbox and its backups. Retention and any project-specific handling should be confirmed with Quesiono.",
      },
      {
        p: "If a project involves access to your systems or customer data, the handling arrangements should be agreed separately before that access is provided.",
      },
    ],
  },
];
export default function PolicyPage() {
  return (
    <LegalPageTemplate
      title="Privacy policy"
      intro="How this website handles project enquiries and optional analytics."
      updated="8 November 2026"
      path="/privacy-policy"
      sections={sections}
    />
  );
}
