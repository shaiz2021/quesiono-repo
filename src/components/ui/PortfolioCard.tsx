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
      <Link href={`/portfolio/${slug}`} className="block h-full rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne">
        {image && (
          <div className="overflow-hidden rounded-t-lg border border-sand bg-ink p-3 transition-colors duration-300 group-hover:border-champagne/60 sm:p-4">
            <div className="mb-3 flex items-center gap-1.5 px-1">
              <span className="h-2 w-2 rounded-full bg-champagne/80" />
              <span className="h-2 w-2 rounded-full bg-vanilla/35" />
              <span className="h-2 w-2 rounded-full bg-vanilla/20" />
              <span className="ml-2 text-[.65rem] text-vanilla/70">quesiono / selected work</span>
              <ArrowUpRight className="ml-auto h-4 w-4 text-vanilla/45 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-champagne" aria-hidden />
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-[#d1cec8]">
              <Image
                src={image}
                alt={imageAlt ?? `${title} website presentation`}
                fill
                priority={priority}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 580px"
                className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.025]"
              />
            </div>
          </div>
        )}
        <div className="rounded-b-lg border-x border-b border-sand bg-white px-5 py-5 transition-colors group-hover:bg-cream sm:px-6 sm:py-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[.68rem] font-semibold uppercase tracking-[.16em] text-indigo">{category}</p>
              <h3 className="mt-2 font-display text-step-3 font-bold text-text-dark transition-colors group-hover:text-indigo">
                {title}
              </h3>
            </div>
          </div>
          {summary && (
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-text-muted">
              {summary}
            </p>
          )}
          {tags && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {tags.slice(0, 3).map((tag) => <li key={tag} className="rounded-full border border-sand px-3 py-1.5 text-[.68rem] text-text-muted">{tag}</li>)}
            </ul>
          )}
          <span className="mt-5 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-indigo underline-offset-4 group-hover:underline">View project <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden /></span>
        </div>
      </Link>
    </article>
  );
}
