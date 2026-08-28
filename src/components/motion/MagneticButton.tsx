"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Button that drifts a few pixels toward the cursor while hovered.
 *
 * Renders a Link when `href` is set and a real <button> otherwise, so
 * keyboard and screen-reader semantics stay correct either way.
 */
export function MagneticButton({
  children,
  href,
  onClick,
  className,
  variant = "primary",
  size = "md",
  pull = 5,
  type = "button",
  disabled,
  ariaLabel,
  fullWidth = false,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "accent" | "dark" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  pull?: number;
  type?: "button" | "submit";
  disabled?: boolean;
  ariaLabel?: string;
  /** Stretches the wrapper too — the outer span is inline-block by default,
   *  so w-full on the inner element alone has nothing to fill. */
  fullWidth?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  const x = useSpring(useMotionValue(0), { stiffness: 300, damping: 20 });
  const y = useSpring(useMotionValue(0), { stiffness: 300, damping: 20 });

  const onMove = (event: React.MouseEvent) => {
    if (reduced) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    x.set(dx * pull);
    y.set(dy * pull);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60";

  const variants = {
    primary: "bg-vanilla text-ink hover:bg-white",
    accent: "bg-champagne text-ink hover:bg-champagne/90",
    dark: "bg-ink text-vanilla hover:bg-midnight",
    ghost: "border border-vanilla/30 text-vanilla hover:border-vanilla/70 hover:bg-vanilla/10",
    outline:
      "border border-midnight/25 text-text-dark hover:border-midnight/60 hover:bg-midnight/[0.04]",
  };

  const sizes = {
    sm: "px-4 py-2 text-[0.9rem]",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-step-1",
  };

  const inner = (
    <span className="relative z-10 flex items-center gap-2">{children}</span>
  );
  const classes = cn(base, variants[variant], sizes[size], fullWidth && "w-full", className);

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x, y }}
      className={fullWidth ? "block w-full" : "inline-block"}
    >
      {href ? (
        <Link href={href} className={classes} aria-label={ariaLabel}>
          {inner}
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={classes}
          aria-label={ariaLabel}
        >
          {inner}
        </button>
      )}
    </motion.span>
  );
}
