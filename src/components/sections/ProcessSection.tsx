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
    <section className="py-24 md:py-36 bg-indigo">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="HOW WE WORK"
          title="A Simple, Effective Process."
          align="center"
          dark={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="relative"
            >
              <div className="text-7xl md:text-8xl font-libre italic text-vanilla/10 mb-6">{step.number}</div>
              <div className="p-8 bg-midnight rounded-xl border border-vanilla/10">
                <h3 className="text-2xl font-bold text-vanilla mb-4">{step.title}</h3>
                <p className="text-vanilla/70 text-lg">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
