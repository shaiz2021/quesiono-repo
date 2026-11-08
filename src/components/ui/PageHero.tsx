import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { Button } from "./Button";
import { ArrowUpRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
  trail,
  action,
  children,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  trail: Crumb[];
  action?: { label: string; href: string };
  children?: ReactNode;
  light?: boolean;
}) {
  return (
    <header
      className={`page-hero ${light ? "bg-cream text-text-dark" : "bg-ink text-vanilla"}`}
    >
      <div className="site-container">
        <Breadcrumbs trail={trail} tone={light ? "light" : "dark"} />
        <div
          className={`mt-12 grid gap-10 ${children ? "lg:grid-cols-[1.15fr_.85fr] lg:items-end" : ""}`}
        >
          <div>
            <p
              className={`eyebrow ${light ? "text-text-muted" : "text-champagne"}`}
            >
              {eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl text-step-6 font-bold leading-[1.04]">
              {title}
            </h1>
            <p
              className={`mt-6 max-w-2xl text-step-1 leading-relaxed ${light ? "text-text-muted" : "text-vanilla/75"}`}
            >
              {description}
            </p>
            {action && (
              <Button href={action.href} variant="accent" className="mt-8">
                {action.label}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Button>
            )}
          </div>
          {children}
        </div>
      </div>
    </header>
  );
}
