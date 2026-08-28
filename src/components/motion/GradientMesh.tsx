"use client";

import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * The signature background: layered radial gradients that drift slowly, with a
 * grain overlay so the result reads as printed rather than as a CSS gradient.
 *
 * Sits behind content — always pair with a positioned parent.
 */
export function GradientMesh({
  className,
  variant = "ink",
  drift = true,
}: {
  className?: string;
  variant?: "ink" | "midnight" | "cream";
  drift?: boolean;
}) {
  const reduced = useReducedMotion();
  const animate = drift && !reduced;

  const blobs =
    variant === "cream"
      ? [
          "bg-[radial-gradient(closest-side,rgba(201,169,97,0.30),transparent)]",
          "bg-[radial-gradient(closest-side,rgba(61,74,133,0.16),transparent)]",
          "bg-[radial-gradient(closest-side,rgba(227,214,190,0.55),transparent)]",
        ]
      : [
          "bg-[radial-gradient(closest-side,rgba(61,74,133,0.55),transparent)]",
          "bg-[radial-gradient(closest-side,rgba(201,169,97,0.20),transparent)]",
          "bg-[radial-gradient(closest-side,rgba(43,52,89,0.65),transparent)]",
        ];

  const base =
    variant === "cream"
      ? "bg-cream"
      : variant === "midnight"
        ? "bg-midnight"
        : "bg-ink";

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden grain",
        base,
        className
      )}
    >
      <div
        className={cn(
          "absolute -left-[10%] -top-[20%] h-[70vmax] w-[70vmax] rounded-full blur-[40px]",
          blobs[0],
          animate && "animate-drift"
        )}
      />
      <div
        className={cn(
          "absolute -right-[15%] top-[10%] h-[55vmax] w-[55vmax] rounded-full blur-[40px]",
          blobs[1],
          animate && "animate-drift"
        )}
        style={animate ? { animationDelay: "-7s", animationDuration: "27s" } : undefined}
      />
      <div
        className={cn(
          "absolute -bottom-[25%] left-[20%] h-[60vmax] w-[60vmax] rounded-full blur-[40px]",
          blobs[2],
          animate && "animate-drift"
        )}
        style={animate ? { animationDelay: "-14s", animationDuration: "32s" } : undefined}
      />
    </div>
  );
}
