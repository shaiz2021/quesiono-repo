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
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-colors rounded";
  const variants = {
    primary: "bg-vanilla text-midnight hover:bg-vanilla/90",
    secondary: "bg-midnight text-vanilla hover:bg-midnight/90",
    ghost: "border border-vanilla text-vanilla hover:bg-vanilla/10",
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
