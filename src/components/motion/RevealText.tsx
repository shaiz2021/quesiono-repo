import type { ElementType } from "react";
export function RevealText({
  text,
  as: Tag = "h2",
  className,
  accent = [],
}: {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  accent?: string[];
}) {
  const words = new Set(
    accent.map((w) => w.toLowerCase().replace(/[.,—:;!?]/g, "")),
  );
  return (
    <Tag className={className}>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className={
            words.has(word.toLowerCase().replace(/[.,—:;!?]/g, ""))
              ? "text-champagne"
              : undefined
          }
        >
          {i > 0 ? " " : ""}
          {word}
        </span>
      ))}
    </Tag>
  );
}
