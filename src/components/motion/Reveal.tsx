"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: string;
  duration?: number;
  stagger?: number;
};

/** Content starts visible in server HTML; only offscreen content animates. */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 550,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (
      !element ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      element.getBoundingClientRect().top < window.innerHeight * 0.92
    ) {
      return;
    }

    element.dataset.reveal = "pending";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.dataset.reveal = "visible";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      element.removeAttribute("data-reveal");
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal-unit", className)}
      data-reveal-direction={direction}
      style={
        {
          "--reveal-delay": `${Math.min(Math.max(delay, 0), 0.35)}s`,
          "--reveal-duration": `${duration}ms`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

export function RevealGroup({ children, className }: Props) {
  return <div className={cn("reveal-stagger", className)}>{children}</div>;
}

export const RevealItem = Reveal;
