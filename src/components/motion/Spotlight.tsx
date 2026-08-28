"use client";

import { useRef, useState, useCallback } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Cursor-following radial light for dark sections.
 *
 * Pointer-only: it hides itself until a real mouse moves over it, so touch
 * devices never render a stuck highlight in the corner.
 */
export function Spotlight({
  children,
  className,
  size = 520,
  color = "rgba(201,169,97,0.13)",
}: {
  children: ReactNode;
  className?: string;
  size?: number;
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const reduced = useReducedMotion();

  const onMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={reduced ? undefined : onMove}
      onMouseLeave={() => setPos(null)}
      className={cn("relative", className)}
    >
      {pos && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(${size}px circle at ${pos.x}px ${pos.y}px, ${color}, transparent 70%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
