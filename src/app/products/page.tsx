import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTABanner } from "@/components/ui/CTABanner";
import { products } from "@/data/products";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Lock, Sparkles, Wand2 } from "lucide-react";

const productIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "file-text": FileText,
};

export const metadata: Metadata = {
  title: "AI-Powered Products by Quesiono",
  description: "Explore the AI tools and SaaS products built by Quesiono, each live on its own subdomain.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <SectionHeading
            eyebrow="PRODUCTS"
            title="Tools Built In-House, Available to Everyone"
            subtitle="We build tools to solve our own problems, then make them available to you too."
            dark={true}
            align="center"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="#product-list"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-vanilla text-midnight font-semibold hover:bg-vanilla/95 transition-all hover:-translate-y-0.5"
            >
              Explore Products <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-vanilla/30 text-vanilla font-semibold hover:bg-vanilla/10 transition-all hover:-translate-y-0.5"
            >
              Build One With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-libre italic text-text-dark mb-6">
                Practical AI, designed for real workflows.
              </h2>
              <p className="text-text-muted text-lg leading-relaxed mb-6">
                Our products are built from the same principles we use for client work: speed, clarity, and outcomes.
                Each tool is lightweight, easy to use, and focused on solving one problem really well.
              </p>
              <p className="text-text-muted text-lg leading-relaxed">
                If you want an AI-powered product for your business, we can design the experience, build the system, and ship it fast.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Wand2,
                  title: "Focused features",
                  description: "Tools that stay simple, fast, and effective.",
                },
                {
                  icon: Lock,
                  title: "Privacy-aware",
                  description: "Built with sensible data handling and minimal collection.",
                },
                {
                  icon: Sparkles,
                  title: "Premium UX",
                  description: "Clean design, smooth interactions, and responsive layouts.",
                },
                {
                  icon: ArrowRight,
                  title: "Built to ship",
                  description: "We prioritize what matters so you can launch faster.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl bg-white border border-sand/30 p-6 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-cream border border-sand/30 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-midnight" />
                  </div>
                  <div className="text-text-dark font-bold text-lg">{item.title}</div>
                  <div className="text-text-muted mt-2 leading-relaxed">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cream">
        <div id="product-list" className="container mx-auto px-6 scroll-mt-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, i) => {
              const Icon = productIconMap[product.icon] || FileText;
              return (
                <div
                  key={i}
                  className="group bg-white p-8 rounded-2xl shadow-sm border border-sand/20 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded bg-midnight flex items-center justify-center">
                      <Icon className="w-7 h-7 text-vanilla" />
                    </div>
                    <Badge label={product.status} variant="light" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-dark mb-2">
                    {product.name}
                  </h3>
                  <p className="text-text-muted mb-2">{product.tagline}</p>
                  <p className="text-text-muted mb-6">{product.description}</p>
                  <Button href={product.url} variant="secondary">
                    Try It Free
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-libre italic text-text-dark mb-10 text-center">
              Product FAQs.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: "Are these products free to use?",
                  a: "Some tools may be free while others may have tiers. Each product page explains the current pricing and access model.",
                },
                {
                  q: "Can you customize a product for my business?",
                  a: "Yes. If you like the idea but need a version tailored to your workflow, we can build a custom solution.",
                },
                {
                  q: "Do you build AI-powered SaaS products for clients?",
                  a: "Yes. We can design the product UX, build the web app, and implement the AI workflow with a scalable architecture.",
                },
                {
                  q: "Can you help with branding and launch?",
                  a: "Absolutely. We can support positioning, landing pages, SEO foundations, and the marketing site experience.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-sand/40 bg-cream p-6 hover:shadow-lg transition-all"
                >
                  <summary className="cursor-pointer list-none select-none flex items-center justify-between gap-6">
                    <span className="text-text-dark font-semibold text-lg">{item.q}</span>
                    <span className="w-9 h-9 rounded-full bg-white border border-sand/30 flex items-center justify-center text-midnight transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="text-text-muted mt-4 leading-relaxed">{item.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Have an Idea for a Product?"
        subtitle="Let's build it together."
      />
    </>
  );
}
