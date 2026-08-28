import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "dark" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

const variants = {
  primary: "bg-vanilla text-ink hover:bg-white shadow-sm hover:shadow-md",
  accent: "bg-champagne text-ink hover:bg-champagne/90 shadow-sm hover:shadow-md",
  dark: "bg-ink text-vanilla hover:bg-midnight shadow-sm hover:shadow-md",
  ghost: "border border-vanilla/30 text-vanilla hover:border-vanilla/70 hover:bg-vanilla/10",
  outline:
    "border border-midnight/25 text-text-dark hover:border-midnight/60 hover:bg-midnight/[0.04]",
};

const sizes = {
  sm: "px-4 py-2 text-[0.9rem]",
  md: "px-6 py-3",
  lg: "px-8 py-4 text-step-1",
};

/**
 * Server-safe button. Use MagneticButton where the extra motion is wanted;
 * this one stays a plain element so it can render inside server components.
 */
export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-smooth hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {props.children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {props.children}
      </Link>
    );
  }

  return <button className={classes} {...props} />;
}
