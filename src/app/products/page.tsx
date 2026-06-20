import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTABanner } from "@/components/ui/CTABanner";
import { products } from "@/data/products";
import { Metadata } from "next";
import { FileText } from "lucide-react";

const productIconMap: Record<string, React.ComponentType<any>> = {
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
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, i) => {
              const Icon = productIconMap[product.icon] || FileText;
              return (
                <div
                  key={i}
                  className="bg-white p-8 rounded shadow-sm border border-sand/20"
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

      <CTABanner
        title="Have an Idea for a Product?"
        subtitle="Let's build it together."
      />
    </>
  );
}
