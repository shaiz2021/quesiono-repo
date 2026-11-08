import { LegalPageTemplate } from "@/components/templates/LegalPageTemplate";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata({
  title: "Cookie & storage policy",
  description:
    "What the website stores in your browser and how optional analytics are controlled.",
  path: "/cookie-policy",
});
const sections = [
  {
    id: "storage",
    heading: "Browser storage used by the site",
    blocks: [
      {
        p: "The site uses sessionStorage under quesiono-attribution for the landing page, permitted UTM campaign labels and referrer origin. This supplies context when you submit an enquiry and is limited to the current tab session.",
      },
      {
        p: "The localStorage key quesiono-analytics-consent remembers whether you allowed or declined optional analytics. It remains until you change the preference or clear site data. The core website and enquiry form work without browser storage.",
      },
    ],
  },
  {
    id: "optional",
    heading: "Optional analytics",
    blocks: [
      {
        p: "When a valid Google Tag Manager container is configured, the site asks before loading it. Declining analytics leaves the container unloaded. Do Not Track and Global Privacy Control also prevent it from loading, even if a preference was previously saved.",
      },
      {
        p: "Configured tags can introduce third-party requests or cookies. Their exact names and retention depend on the published container; contact Quesiono if you need the current tag inventory. No advertising identifier is collected by the built-in enquiry attribution feature.",
      },
    ],
  },
  {
    id: "control",
    heading: "Changing your choice",
    blocks: [
      {
        p: "If optional analytics are configured, use Privacy preferences at the bottom of the page to allow or decline them. Declining after previously allowing analytics reloads the page so the container is not loaded again.",
      },
      {
        p: "You can also clear site data through your browser settings. Withdrawing permission stops future loading but does not automatically remove cookies previously created by third-party tags; those can be removed in the browser.",
      },
    ],
  },
  {
    id: "external",
    heading: "External links",
    blocks: [
      {
        p: "Links to products, social profiles and reference material open websites with their own privacy and storage practices. This policy describes quesiono.com.",
      },
    ],
  },
];
export default function PolicyPage() {
  return (
    <LegalPageTemplate
      title="Cookie & storage policy"
      intro="What the website stores in your browser and how optional analytics are controlled."
      updated="8 November 2026"
      path="/cookie-policy"
      sections={sections}
    />
  );
}
