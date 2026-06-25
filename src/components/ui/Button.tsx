import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-midnight/30 focus-visible:ring-offset-2 focus-visible:ring-offset-cream transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0";
  const variants = {
    primary:
      "bg-vanilla text-midnight hover:bg-vanilla/95 shadow-sm hover:shadow-md",
    secondary:
      "bg-midnight text-vanilla hover:bg-midnight/95 shadow-sm hover:shadow-md",
    ghost:
      "border border-vanilla/60 text-vanilla hover:bg-vanilla/10 hover:border-vanilla",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, variants[variant], sizes[size], className)}>
        {props.children}
      </Link>
    );
  }

  return (
    <button className={cn(baseStyles, variants[variant], sizes[size], className)} {...props} />
  );
}
