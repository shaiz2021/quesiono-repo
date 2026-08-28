import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { formatPostDate, type BlogPost } from "@/data/blog";

/**
 * One article card. Shared by the journal index, the home rail, and the
 * related-reading blocks on service, industry, case study and post pages —
 * those were five near-identical copies of the same markup.
 */
export function PostCard({
  post,
  tone = "light",
  showImage = false,
  showDate = false,
}: {
  post: BlogPost;
  /** `light` sits on cream/white, `frosted` on ink/midnight/indigo. */
  tone?: "light" | "frosted";
  showImage?: boolean;
  showDate?: boolean;
}) {
  const dark = tone === "frosted";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={[
        "group flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-400 ease-smooth hover:-translate-y-1",
        dark
          ? "border-vanilla/12 bg-vanilla/[0.04] hover:border-champagne/40"
          : "border-sand bg-white hover:border-midnight/25 hover:shadow-xl",
      ].join(" ")}
    >
      {showImage && post.image ? (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt ?? post.title}
            fill
            className="object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-7">
        <div className="flex flex-wrap items-center gap-3">
          <Badge label={post.category} variant={dark ? "transparent" : "outline"} />
          <span className={dark ? "text-[0.8rem] text-vanilla/45" : "text-[0.8rem] text-text-muted"}>
            {post.readTime}
          </span>
          {showDate ? (
            <span
              className={[
                "inline-flex items-center gap-1.5 text-[0.8rem]",
                dark ? "text-vanilla/45" : "text-text-muted",
              ].join(" ")}
            >
              <CalendarDays className="h-3.5 w-3.5" aria-hidden />
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            </span>
          ) : null}
        </div>

        <h3
          className={[
            "mt-5 font-display text-step-1 font-bold leading-snug",
            dark ? "text-vanilla" : "text-text-dark",
          ].join(" ")}
        >
          {post.title}
        </h3>

        <p
          className={[
            "mt-3 flex-1 text-[0.9rem] leading-relaxed",
            dark ? "text-vanilla/55" : "text-text-muted",
          ].join(" ")}
        >
          {post.excerpt}
        </p>

        <span
          className={[
            "mt-6 inline-flex items-center gap-2 text-[0.9rem] font-semibold",
            dark ? "text-champagne" : "text-indigo",
          ].join(" ")}
        >
          Read it
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}
