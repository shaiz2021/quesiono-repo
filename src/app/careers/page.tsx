import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata({
  title: "Careers at Quesiono",
  description:
    "Current hiring information and career enquiries for Quesiono. Introduce your skills and share examples of your work.",
  path: "/careers",
});
export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Good work deserves a thoughtful introduction."
        description="Interested in design, development, search, or content work with Quesiono? Share what you do and a few examples that show how you think."
        trail={[{ name: "Careers", href: "/careers" }]}
        light
      />
      <Section width="wide" tone="white" id="roles">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-md border border-indigo bg-indigo p-7 text-vanilla sm:p-9">
            <span aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-champagne/25" />
            <p className="eyebrow text-champagne">Current hiring status</p>
            <h2 className="mt-5 text-step-4 font-bold">
              No confirmed vacancies are published.
            </h2>
            <p className="mt-6 text-vanilla/75">
              Please confirm availability before preparing an application. An
              introduction does not create an application to an open role.
            </p>
          </div>
          <div id="hiring" className="border-t border-sand pt-6">
            <h2 className="text-step-2 font-semibold">What to include</h2>
            <ul className="mt-5 space-y-4 text-sm text-text-muted">
              <li>
                Your area of expertise and the kind of work you are looking for.
              </li>
              <li>
                Two or three relevant examples, with your contribution
                explained.
              </li>
              <li>
                Your location, availability, and preferred working arrangement.
              </li>
            </ul>
            <a
              href={`mailto:${site.email}?subject=Career%20enquiry`}
              className="text-link mt-7"
            >
              Send a career introduction ↗
            </a>
            <p className="mt-7 border-t border-sand pt-5 text-sm text-text-muted">
              Looking to hire Quesiono for a project? Use the{" "}
              <Link href="/contact" className="underline">
                project enquiry form
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
