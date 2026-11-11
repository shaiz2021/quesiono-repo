import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getIcon } from "@/lib/icons";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  tone?: "light" | "dark";
  /** Rendered as a champagne index in the corner. */
  index?: number;
  /** Short deliverable names — the concrete proof under the pitch. */
  tags?: string[];
  cta?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  href,
  tone = "dark",
  index,
  tags,
  cta = "See what's included",
}: ServiceCardProps) {
  const Icon = getIcon(icon);
  const dark = tone === "dark";

  return (
      <Link
        href={href}
        className={cn(
          "premium-card group relative flex h-full min-h-[19rem] flex-col overflow-hidden rounded-2xl border p-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne sm:p-8",
          dark
            ? "border-vanilla/10 bg-indigo/60 hover:border-champagne/50 hover:bg-indigo focus-visible:border-champagne"
            : "border-sand bg-white hover:border-champagne hover:bg-midnight hover:shadow-[0_24px_46px_-28px_rgba(11,15,28,.8)] focus-visible:border-champagne focus-visible:bg-midnight"
        )}
      >
        {/* Champagne wash that wipes in on hover. */}
        <span
          className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-champagne transition-transform duration-500 ease-smooth group-hover:scale-x-100 group-focus-visible:scale-x-100"
          aria-hidden
        />

        <div className="flex items-start justify-between gap-4">
          <span
            className={cn(
              "grid h-12 w-12 shrink-0 place-items-center rounded-xl transition-colors duration-300",
              dark
                ? "bg-ink/70 text-champagne group-hover:bg-ink"
                : "bg-cream text-midnight group-hover:bg-champagne group-hover:text-ink group-focus-visible:bg-champagne group-focus-visible:text-ink"
            )}
          >
            <Icon className="h-6 w-6 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 group-focus-visible:scale-110" />
          </span>
          {index !== undefined && (
            <span
              className={cn(
                "font-display text-[0.8rem] font-bold tracking-[0.14em]",
                dark ? "text-vanilla/70" : "text-text-muted group-hover:text-champagne group-focus-visible:text-champagne"
              )}
            >
              {String(index).padStart(2, "0")}
            </span>
          )}
        </div>

        <h3
          className={cn(
            "mt-6 font-display text-step-2 font-bold leading-tight",
            dark ? "text-vanilla" : "text-text-dark group-hover:text-vanilla group-focus-visible:text-vanilla"
          )}
        >
          {title}
        </h3>

        <p
          className={cn(
            "mt-4 flex-1 leading-relaxed",
            dark ? "text-vanilla/75" : "text-text-muted group-hover:text-vanilla/80 group-focus-visible:text-vanilla/80"
          )}
        >
          {description}
        </p>

        {tags && tags.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li
                key={tag}
                className={cn(
                  "rounded-full border px-2.5 py-1 text-[0.72rem] font-medium",
                  dark
                    ? "border-vanilla/25 text-vanilla/75"
                    : "border-sand text-text-muted group-hover:border-vanilla/30 group-hover:text-vanilla/80 group-focus-visible:border-vanilla/30 group-focus-visible:text-vanilla/80"
                )}
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <span
          className={cn(
            "mt-8 inline-flex items-center gap-2 text-[0.9rem] font-semibold",
            dark ? "text-vanilla" : "text-midnight group-hover:text-champagne group-focus-visible:text-champagne"
          )}
        >
          <span className="bg-gradient-to-r from-champagne to-champagne bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-400 ease-smooth group-hover:bg-[length:100%_1px] group-focus-visible:bg-[length:100%_1px]">
            {cta}
          </span>
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5" />
        </span>
      </Link>
  );
}
