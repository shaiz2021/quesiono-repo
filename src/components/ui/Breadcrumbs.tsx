import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, graph } from "@/lib/schema";
import { cn } from "@/lib/utils";

export interface Crumb {
  name: string;
  href: string;
}

/**
 * Visible breadcrumb trail plus the matching BreadcrumbList JSON-LD, built from
 * the same array so the two can never disagree.
 *
 * Pass `emitSchema={false}` when the page already folds breadcrumbSchema() into
 * a larger @graph — otherwise you'd ship the node twice.
 */
export function Breadcrumbs({
  trail,
  tone = "light",
  emitSchema = true,
  className,
}: {
  /** Ordered, excluding Home — that gets prepended automatically. */
  trail: Crumb[];
  tone?: "light" | "dark";
  emitSchema?: boolean;
  className?: string;
}) {
  const full: Crumb[] = [{ name: "Home", href: "/" }, ...trail];
  const dark = tone === "dark";

  return (
    <>
      {emitSchema && <JsonLd data={graph(breadcrumbSchema(full))} />}
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[0.82rem]">
          {full.map((crumb, i) => {
            const last = i === full.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 && (
                  <ChevronRight
                    className={cn(
                      "h-3.5 w-3.5 shrink-0",
                      dark ? "text-vanilla/30" : "text-text-muted/50"
                    )}
                    aria-hidden
                  />
                )}
                {last ? (
                  <span
                    aria-current="page"
                    className={cn(dark ? "text-champagne" : "text-text-dark font-medium")}
                  >
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className={cn(
                      "underline-offset-4 transition-colors hover:underline",
                      dark
                        ? "text-vanilla/55 hover:text-vanilla"
                        : "text-text-muted hover:text-text-dark"
                    )}
                  >
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
