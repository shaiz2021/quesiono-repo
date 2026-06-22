"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Globe, Users } from "lucide-react";

export function WhyQuesiono() {
  const points = [
    {
      icon: CheckCircle2,
      title: "Full-Stack Capability",
      description: "We handle everything in-house, from design to development to deployment.",
    },
    {
      icon: Award,
      title: "Results-First Thinking",
      description: "Every decision we make is tied to a measurable outcome for your business.",
    },
    {
      icon: Globe,
      title: "Global Reach, High Quality",
      description: "We deliver international-standard work for clients around the world.",
    },
    {
      icon: Users,
      title: "Small, Senior Team",
      description: "Direct access to the people doing the work, no layers of account managers.",
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-cream">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-libre italic text-text-dark mb-8 leading-tight">
              Why Choose Quesiono?
            </h2>
            <p className="text-text-muted text-lg mb-8 max-w-lg">
              We're not just another agency. We build strategic partnerships with our clients, focusing on long-term growth and real results.
            </p>
          </motion.div>

          <div className="space-y-6">
            {points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="p-8 bg-white rounded-xl border border-sand/20 hover:border-sand/50 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-xl bg-midnight flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-8 h-8 text-vanilla" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-3">{point.title}</h3>
                    <p className="text-text-muted">{point.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
