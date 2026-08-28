"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ElementType } from "react";

/**
 * Per-word mask reveal for headings. Each word sits in an overflow-hidden
 * span and slides up from below the line.
 *
 * Renders plain text when motion is reduced, so the heading is never
 * animated-in-place or left invisible.
 */
export function RevealText({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
  stagger = 0.045,
  /** Words to tint with the accent, matched case-insensitively. */
  accent = [],
}: {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  accent?: string[];
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  const accentSet = new Set(accent.map((w) => w.toLowerCase()));

  const isAccent = (word: string) =>
    accentSet.has(word.toLowerCase().replace(/[.,—:;!?]/g, ""));

  if (reduced) {
    return (
      <Tag className={className}>
        {words.map((word, i) => (
          <span key={i} className={isAccent(word) ? "text-champagne" : undefined}>
            {word}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-flex overflow-hidden pb-[0.12em] align-bottom"
        >
          <motion.span
            className={cn("inline-block", isAccent(word) && "text-champagne")}
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{
              duration: 0.75,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
