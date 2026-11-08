import { notFound } from "next/navigation";
import Link from "next/link";
import { getRoleBySlug, roleParams } from "@/data/studio";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
export const dynamicParams = false;
export const generateStaticParams = roleParams;
export function generateMetadata({ params }: { params: { slug: string } }) {
  const r = getRoleBySlug(params.slug);
  return r
    ? buildMetadata({
        title: `${r.title} — Role Archive`,
        description:
          "Archived role information. This page is not a current vacancy; confirm hiring availability with Quesiono.",
        path: `/careers/${r.slug}`,
        noIndex: true,
      })
    : {};
}
export default function RolePage({ params }: { params: { slug: string } }) {
  const r = getRoleBySlug(params.slug);
  if (!r) notFound();
  return (
    <>
      <PageHero
        eyebrow="Role archive / Not an active vacancy"
        title={r.title}
        description="This role page is retained for existing links. It does not indicate a current opening. Contact us to ask about availability before preparing an application."
        trail={[
          { name: "Careers", href: "/careers" },
          { name: r.title, href: `/careers/${r.slug}` },
        ]}
        light
      />
      <Section width="prose" tone="white">
        <h2 className="text-step-3 font-semibold">
          Interested in this area of work?
        </h2>
        <p className="mt-5 text-text-muted">
          Share your experience, portfolio, and availability in a career
          enquiry. Any future role would have its own confirmed scope, terms,
          and application process.
        </p>
        <a
          href={`mailto:${site.email}?subject=${encodeURIComponent("Career enquiry: " + r.title)}`}
          className="text-link mt-6"
        >
          Ask about opportunities ↗
        </a>
        <br />
        <Link href="/careers" className="text-link mt-5">
          Current hiring information ↗
        </Link>
      </Section>
    </>
  );
}
