import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export function PortfolioCard({
  title,
  category,
  slug,
  image,
  imageAlt,
  summary,
  tags,
  priority = false,
}: {
  title: string;
  category: string;
  slug: string;
  image?: string;
  imageAlt?: string;
  metric?: string;
  metricLabel?: string;
  summary?: string;
  tags?: string[];
  size?: "default" | "feature";
  priority?: boolean;
}) {
  return (
    <article className="group h-full">
      <Link href={`/portfolio/${slug}`} className="block h-full">
        {image && (
          <div className="relative aspect-[3/2] overflow-hidden border border-sand bg-sand">
            <Image
              src={image}
              alt={imageAlt ?? `${title} website presentation`}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 580px"
              className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
        )}
        <div className="border-b border-sand py-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="eyebrow text-text-muted">{category}</p>
              <h3 className="mt-2 font-display text-step-3 font-bold text-text-dark">
                {title}
              </h3>
            </div>
            <ArrowUpRight
              className="mt-5 h-6 w-6 text-indigo transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              aria-hidden
            />
          </div>
          {summary && (
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-text-muted">
              {summary}
            </p>
          )}
          {tags && (
            <p className="mt-4 text-xs text-text-muted">
              {tags.slice(0, 3).join(" / ")}
            </p>
          )}
        </div>
      </Link>
    </article>
  );
}
