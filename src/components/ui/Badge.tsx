import { cn } from "@/lib/utils";

/** Small pill label. Used for categories, statuses, and tags. */
export function Badge({
  label,
  variant = "light",
  className,
}: {
  label: string;
  variant?: "light" | "dark" | "accent" | "outline" | "transparent";
  className?: string;
}) {
  const variants = {
    light: "bg-sand/50 text-text-dark border-sand",
    dark: "bg-vanilla/10 text-vanilla border-vanilla/20",
    accent: "bg-champagne/20 text-champagne border-champagne/40",
    outline: "bg-transparent text-text-muted border-sand",
    // For badges sitting on imagery — frosted so it stays legible on any frame.
    transparent: "bg-ink/40 text-vanilla border-vanilla/25 backdrop-blur-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em]",
        variants[variant],
        className
      )}
    >
      {label}
    </span>
  );
}
