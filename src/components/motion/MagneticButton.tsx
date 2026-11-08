import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
export function MagneticButton({
  children,
  href,
  onClick,
  className,
  variant = "primary",
  size = "md",
  type = "button",
  disabled,
  ariaLabel,
  fullWidth,
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
  fullWidth?: boolean;
}) {
  return (
    <Button
      href={href}
      onClick={onClick}
      className={cn(fullWidth && "w-full", className)}
      variant={variant}
      size={size}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </Button>
  );
}
