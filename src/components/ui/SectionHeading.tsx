"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, align = "left", dark = false }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("mb-12", align === "center" && "text-center")}
    >
      <div className={cn("flex items-center gap-4 mb-3", align === "center" && "justify-center")}>
        <div className={cn("h-px w-6", dark ? "bg-vanilla/30" : "bg-sand")} />
        <span className={cn("text-xs font-semibold tracking-widest uppercase", dark ? "text-vanilla/60" : "text-text-muted")}>
          {eyebrow}
        </span>
      </div>
      <h2 className={cn("text-4xl md:text-5xl font-libre italic mb-4", dark ? "text-vanilla" : "text-text-dark")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("max-w-2xl", dark ? "text-vanilla/70" : "text-text-muted", align === "center" && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
