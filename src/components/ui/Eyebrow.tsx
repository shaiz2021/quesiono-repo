import { cn } from "@/lib/utils";

/**
 * Small uppercase label above a heading, with a champagne rule.
 * Champagne is decorative here — the text itself stays high-contrast.
 */
export function Eyebrow({
  children,
  tone = "light",
  className,
  centered = false,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
  centered?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        centered && "justify-center",
        className
      )}
    >
      <span className="h-px w-8 bg-champagne" aria-hidden />
      <span
        className={cn(
          "text-[0.7rem] font-semibold uppercase tracking-[0.24em]",
          tone === "dark" ? "text-vanilla/70" : "text-text-muted"
        )}
      >
        {children}
      </span>
    </div>
  );
}
