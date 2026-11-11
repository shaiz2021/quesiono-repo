import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { PrinciplesSection } from "@/components/sections/PrinciplesSection";
import { CTABanner } from "@/components/ui/CTABanner";
import { buildMetadata } from "@/lib/metadata";
export const metadata = buildMetadata({
  title: "About Quesiono",
  description:
    "Get to know Quesiono’s approach to website design, development, SEO and content: clear decisions, practical delivery and a useful handover.",
  path: "/about",
});
export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Quesiono"
        title="A better website starts with understanding the business."
        description="We bring website design, development, search, and content into the same conversation. The aim is a digital experience that makes sense to your customers and the people running it."
        trail={[{ name: "About", href: "/about" }]}
        light
      >
        <div className="border-l-2 border-champagne pl-7">
          <p className="eyebrow text-text-muted">Our focus</p>
          <p className="mt-5 font-display text-step-3 font-semibold">
            Clearer offers.
            <br />
            Useful experiences.
            <br />
            Maintainable websites.
          </p>
        </div>
      </PageHero>
      <Section tone="white" width="wide">
        <div className="grid gap-12 lg:grid-cols-2">
          <h2 className="max-w-md text-step-4 font-bold">
            Think about the whole journey.
          </h2>
          <div className="space-y-5 text-text-muted">
            <p>
              A visitor does not experience design, code, content, and SEO as
              separate services. They experience a website that either helps
              them understand and act, or leaves them with more questions.
            </p>
            <p>
              That is why we start with the purpose of the site, the information
              people need, and the next step you want them to take. The platform
              and the page layouts follow those decisions.
            </p>
            <p>
              Some projects need a new foundation. Others need a more focused
              fix. We can scope an individual service or bring several
              disciplines together around one goal.
            </p>
            <Link href="/services" className="text-link">
              Explore our expertise ↗
            </Link>
          </div>
        </div>
      </Section>
      <Section tone="cream" width="wide">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-14">
          <div>
            <p className="eyebrow text-indigo">How we think about a brief</p>
            <h2 className="mt-5 max-w-md text-step-4 font-bold">The page is only one part of the job.</h2>
            <p className="mt-5 max-w-md leading-relaxed text-text-muted">
              A useful website connects the customer’s decision, the systems
              that support it and the way people discover the business. These
              questions help us choose the right work before choosing tools.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { number: "01", title: "What does the customer need to decide?", body: "We identify the questions, objections and proof a visitor needs before they can enquire or buy. That shapes the page structure and web design.", href: "/services/web-design", link: "Explore web design" },
              { number: "02", title: "What must the website connect to?", body: "Editing workflows, forms, payments and integrations change what should be built. A maintainable website works for the people running it too.", href: "/services/web-development", link: "Explore development" },
              { number: "03", title: "How will the right people find it?", body: "Search intent, technical health and useful content need space in the plan before launch. SEO works best alongside structure and copy.", href: "/services/seo", link: "Explore SEO" },
              { number: "04", title: "What happens after launch?", body: "Account ownership, editing guidance, monitoring and support should be agreed in advance so the website can keep serving the business.", href: "/services/website-maintenance", link: "Explore maintenance" },
            ].map((item) => (
              <article key={item.number} className="premium-card flex h-full flex-col rounded-md border border-sand bg-white p-6 hover:border-indigo hover:shadow-lg">
                <span className="text-xs font-semibold text-indigo">/{item.number}</span>
                <h3 className="mt-5 text-step-2 font-semibold">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">{item.body}</p>
                <Link href={item.href} className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-indigo underline decoration-champagne underline-offset-4 hover:text-midnight">{item.link} ↗</Link>
              </article>
            ))}
          </div>
        </div>
      </Section>
      <PrinciplesSection />
      <Section width="wide" tone="ink">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow text-champagne">Before choosing an agency</p>
            <h2 className="mt-5 text-step-4 font-bold">
              Ask how the work will be done.
            </h2>
          </div>
          <div className="space-y-6 text-vanilla/75">
            <p>
              What exactly is included? Who needs to review it? How will you
              assess the result? What will your team receive at handover?
            </p>
            <p>
              Those questions belong at the start of a project. Our process and
              scope guidance are here to help you have that conversation.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                href="/process"
                className="text-champagne underline underline-offset-4"
              >
                Our process ↗
              </Link>
              <Link
                href="/pricing"
                className="text-champagne underline underline-offset-4"
              >
                Pricing & scope ↗
              </Link>
            </div>
          </div>
        </div>
      </Section>
      <CTABanner
        title="Let’s talk about what your business needs next."
        primaryAction={{
          label: "Discuss Your Project",
          href: "/contact?source=%2Fabout",
        }}
      />
    </>
  );
}
