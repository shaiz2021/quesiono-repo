"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { products } from "@/data/products";
import { FileText } from "lucide-react";

const productIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "file-text": FileText,
};

export function ProductsStrip() {
  return (
    <section className="py-20 md:py-32 bg-text-dark">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="OUR PRODUCTS"
          title="AI-Powered Tools Built In-House"
          subtitle="Tools we've built for ourselves, now available to you too."
          dark={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, i) => {
            const Icon = productIconMap[product.icon] || FileText;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-midnight border border-vanilla/10 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded bg-indigo flex items-center justify-center">
                    <Icon className="w-6 h-6 text-vanilla" />
                  </div>
                  <Badge label={product.status} />
                </div>
                <h3 className="text-2xl font-bold text-vanilla mb-2">{product.name}</h3>
                <p className="text-vanilla/60 mb-4">{product.tagline}</p>
                <p className="text-vanilla/70 mb-6">{product.description}</p>
                <Button href={product.url} variant="ghost" className="w-full">
                  Try It Free
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
