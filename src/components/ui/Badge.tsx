import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  variant?: "default" | "light" | "transparent";
}

export function Badge({ label, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block px-1 py-1 text-xs font-semibold tracking-wider uppercase rounded-full",
        variant === "default"
          ? "bg-midnight text-vanilla border border-vanilla/20"
          : variant === "light"
          ? "bg-cream text-midnight border border-sand"
          : "bg-transparent text-vanilla"
      )}
    >
      {label}
    </span>
  );
}
