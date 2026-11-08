import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { CTABanner } from "@/components/ui/CTABanner";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";
import { products } from "@/data/products";
export const metadata = buildMetadata({
  title: "Quesiono Products",
  description:
    "Explore the Resumeflow Ai resume tool listed by Quesiono, or discuss a custom software project for your own business.",
  path: "/products",
});
export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Beyond the agency website"
        title="Tools built around a specific task."
        description="Explore the product separately from our agency services. For product features, availability, account help and pricing, the product website is the source to check."
        trail={[{ name: "Products", href: "/products" }]}
        light
      />
      <Section width="wide" tone="white">
        {products.map((p) => (
          <article
            key={p.name}
            className="grid gap-10 border-y border-sand py-10 md:grid-cols-2"
          >
            <div>
              <p className="eyebrow text-text-muted">Resume software</p>
              <h2 className="mt-5 text-step-5 font-bold">{p.name}</h2>
              <p className="mt-6 max-w-md text-step-1 text-text-muted">
                A resume-building tool for people organizing their experience
                and preparing job applications.
              </p>
            </div>
            <div className="self-center">
              <h3 className="text-step-2 font-semibold">
                Looking for the product?
              </h3>
              <p className="mt-4 text-text-muted">
                Open the product website to review its current offering. Product
                accounts, subscriptions and support are separate from agency
                project enquiries.
              </p>
              <Button href={p.url} external variant="dark" className="mt-7">
                Visit {p.name} ↗
              </Button>
            </div>
          </article>
        ))}
      </Section>
      <Section width="wide">
        <h2 className="max-w-xl text-step-4 font-bold">
          Have a repetitive task that needs better software?
        </h2>
        <p className="mt-5 max-w-2xl text-text-muted">
          A useful product starts with a clear workflow. We can help scope a
          focused first release, including data, permissions, integrations and
          the interface people use.
        </p>
        <Link href="/services/custom-development" className="text-link mt-6">
          Explore custom development ↗
        </Link>
      </Section>
      <CTABanner
        title="Let’s talk about your own software project."
        primaryAction={{
          label: "Discuss a software project",
          href: "/contact?service=custom-development&source=%2Fproducts",
        }}
        secondaryAction={{ label: "Our development process", href: "/process" }}
      />
    </>
  );
}
