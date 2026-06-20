"use client";

import { motion } from "framer-motion";

export function WhyQuesiono() {
  const points = [
    {
      title: "Full-Stack Capability",
      description: "We handle everything in-house, from design to development to deployment.",
    },
    {
      title: "Results-First Thinking",
      description: "Every decision we make is tied to a measurable outcome for your business.",
    },
    {
      title: "Global Reach, High Quality",
      description: "We deliver international-standard work for clients around the world.",
    },
    {
      title: "Founder-Led",
      description: "Direct access to the person doing the work, no layers of account managers.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-libre italic text-text-dark">
              Why businesses choose Quesiono over bigger agencies.
            </h2>
          </motion.div>

          <div className="space-y-0">
            {points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="py-8 border-t border-sand first:border-t-0"
              >
                <h3 className="text-xl font-bold text-text-dark mb-3">{point.title}</h3>
                <p className="text-text-muted">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
