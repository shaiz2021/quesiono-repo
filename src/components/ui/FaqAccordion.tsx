import { cn } from "@/lib/utils";
export interface Faq {
  question: string;
  answer: string;
}
/** Native disclosure: keyboard operable and readable before hydration, no duplicate IDs. */
export function FaqAccordion({
  faqs,
  tone = "light",
  className,
  defaultOpen = null,
  columns = 1,
}: {
  faqs: Faq[];
  tone?: "light" | "dark";
  className?: string;
  defaultOpen?: number | null;
  columns?: 1 | 2;
}) {
  return (
    <div
      className={cn(columns === 2 && "grid gap-x-10 md:grid-cols-2", className)}
    >
      {faqs.map((faq, i) => (
        <details
          key={faq.question}
          open={i === defaultOpen}
          className={cn(
            "faq-item border-b py-5",
            tone === "dark"
              ? "border-vanilla/20 text-vanilla"
              : "border-sand text-text-dark",
          )}
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-2 font-display text-step-1 font-semibold">
            <span>{faq.question}</span>
            <span className="faq-toggle shrink-0" aria-hidden>
              +
            </span>
          </summary>
          <p
            className={cn(
              "max-w-3xl pb-3 pt-4 leading-relaxed",
              tone === "dark" ? "text-vanilla/75" : "text-text-muted",
            )}
          >
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
