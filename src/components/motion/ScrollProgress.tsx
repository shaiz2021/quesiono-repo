"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/** Thin champagne progress rail pinned under the nav. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 40,
    restDelta: 0.001,
  });

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left bg-gradient-to-r from-champagne via-champagne to-slate-blue"
    />
  );
}
