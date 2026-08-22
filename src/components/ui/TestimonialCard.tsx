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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white p-10 rounded-xl border border-sand/20 hover:shadow-xl transition-all"
    >
      <div className="text-6xl text-indigo/30 font-libre italic mb-6">&ldquo;</div>
      <p className="text-xl md:text-2xl font-libre italic text-text-dark mb-8 leading-relaxed">{quote}</p>
      <div className="flex items-center gap-4 pt-6 border-t border-sand/20">
        <div className="w-12 h-12 rounded-full bg-indigo flex items-center justify-center text-vanilla font-bold text-xl">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-midnight text-lg">{name}</p>
          <p className="text-sm text-text-muted uppercase tracking-wider">
            {role}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
