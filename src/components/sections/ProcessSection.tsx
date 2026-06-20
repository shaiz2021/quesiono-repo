"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSection() {
  const steps = [
    { number: "01", title: "Discovery", description: "We learn about your business, goals, and challenges." },
    { number: "02", title: "Strategy", description: "We create a clear roadmap tailored to your needs." },
    { number: "03", title: "Build", description: "We bring the strategy to life with clean, performant code." },
    { number: "04", title: "Launch + Grow", description: "We launch and help you scale with ongoing support." },
  ];

  return (
    <section className="py-20 md:py-32 bg-indigo">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="HOW WE WORK"
          title="A Simple, Effective Process."
          align="center"
          dark={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-libre italic text-vanilla/20 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold text-vanilla mb-3">{step.title}</h3>
              <p className="text-vanilla/70">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 w-full h-px bg-vanilla/30 -z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
