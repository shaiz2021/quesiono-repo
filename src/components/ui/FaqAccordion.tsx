"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Faq {
  question: string;
  answer: string;
}

/**
 * Accordion FAQ list. Replaces the hand-rolled <details> block that was
 * duplicated across the home page and every service page.
 *
 * Uses real buttons with aria-expanded and aria-controls, so it announces
 * correctly — the old <summary> version relied on default disclosure
 * semantics and could not be styled or animated.
 *
 * Emit the matching FAQPage JSON-LD alongside this from the page, using
 * faqSchema() on the same array.
 */
export function FaqAccordion({
  faqs,
  tone = "light",
  className,
  /** Index open on first render. Pass null for all-closed. */
  defaultOpen = 0,
  columns = 1,
}: {
  faqs: Faq[];
  tone?: "light" | "dark";
  className?: string;
  defaultOpen?: number | null;
  columns?: 1 | 2;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const reduced = useReducedMotion();
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        columns === 2 ? "grid gap-4 md:grid-cols-2 md:items-start" : "space-y-3",
        className
      )}
    >
      {faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={faq.question}
            className={cn(
              "overflow-hidden rounded-2xl border transition-colors",
              dark
                ? isOpen
                  ? "border-champagne/40 bg-midnight/80"
                  : "border-vanilla/10 bg-midnight/50 hover:border-vanilla/25"
                : isOpen
                  ? "border-champagne/60 bg-white"
                  : "border-sand bg-white hover:border-midnight/20"
            )}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-trigger-${i}`}
                className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
              >
                <span
                  className={cn(
                    "font-display text-step-1 font-bold",
                    dark ? "text-vanilla" : "text-text-dark"
                  )}
                >
                  {faq.question}
                </span>
                <span
                  className={cn(
                    "grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-transform duration-300",
                    isOpen && "rotate-45",
                    dark
                      ? "border-vanilla/20 text-champagne"
                      : "border-sand text-midnight"
                  )}
                  aria-hidden
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  initial={reduced ? { height: "auto" } : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduced ? { height: "auto" } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className={cn(
                      "px-6 pb-6 leading-relaxed",
                      dark ? "text-vanilla/65" : "text-text-muted"
                    )}
                  >
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
