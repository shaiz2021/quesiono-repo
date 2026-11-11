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
      className={`page-hero relative isolate overflow-hidden ${light ? "bg-gradient-to-br from-cream via-cream to-vanilla text-text-dark" : "bg-gradient-to-br from-ink via-midnight to-ink text-vanilla"}`}
    >
      <span aria-hidden className={`pointer-events-none absolute -right-32 top-2 -z-10 h-[26rem] w-[26rem] rounded-full border sm:-right-12 lg:right-[3%] ${light ? "border-indigo/10" : "border-champagne/15"}`} />
      <span aria-hidden className={`pointer-events-none absolute -right-12 top-24 -z-10 h-[18rem] w-[18rem] rounded-full border lg:right-[9%] ${light ? "border-indigo/10" : "border-champagne/10"}`} />
      <div className={`pointer-events-none absolute bottom-0 left-0 h-1 w-28 bg-champagne ${light ? "opacity-80" : "opacity-60"}`} aria-hidden />
      <div className="site-container relative">
        <Breadcrumbs trail={trail} tone={light ? "light" : "dark"} />
        <div
          className={`mt-12 grid min-w-0 gap-10 ${children ? "lg:grid-cols-[minmax(0,1.15fr)_minmax(0,.85fr)] lg:items-end" : ""}`}
        >
          <div className="min-w-0">
            <p
              className={`eyebrow ${light ? "text-text-muted" : "text-champagne"}`}
            >
              {eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl break-words text-step-6 font-bold leading-[1.04]">
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
          {children ? <div className="min-w-0">{children}</div> : null}
        </div>
      </div>
    </header>
  );
}
