"use client";

import { motion } from "framer-motion";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export function TestimonialCard({ quote, name, role, company }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white p-8 rounded shadow-sm"
    >
      <div className="text-5xl text-sand/30 font-libre italic mb-4">"</div>
      <p className="text-xl font-libre italic text-text-dark mb-6">{quote}</p>
      <div>
        <p className="font-bold text-midnight">{name}</p>
        <p className="text-sm text-text-muted uppercase tracking-wider">
          {role}, {company}
        </p>
      </div>
    </motion.div>
  );
}
