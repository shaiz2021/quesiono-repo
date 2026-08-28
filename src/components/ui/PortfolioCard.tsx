"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  title: string;
  category: string;
  slug: string;
  /** Optional. Falls back to a generated gradient plate keyed off the title. */
  image?: string;
  imageAlt?: string;
  /** The headline result. This is what makes the card worth clicking. */
  metric?: string;
  metricLabel?: string;
  summary?: string;
  tags?: string[];
  /** `feature` doubles the card height for the lead slot in a grid. */
  size?: "default" | "feature";
  priority?: boolean;
}

/**
 * Deterministic gradient plate for records with no screenshot yet — derived
 * from the title so a given project always gets the same treatment.
 */
function Plate({ title }: { title: string }) {
  const seed = title
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const angle = seed % 90;
  const shift = seed % 40;

  return (
    <div
      className="absolute inset-0 grain"
      style={{
        background: `linear-gradient(${120 + angle}deg, #1A2038 0%, #2B3459 ${
          38 + shift
        }%, #3D4A85 100%)`,
      }}
      aria-hidden
    >
      <span
        className="absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-70 blur-2xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(201,169,97,0.45), transparent)",
        }}
      />
      <div className="absolute bottom-1/3 left-8 right-8 space-y-2.5">
        <div className="h-2.5 w-2/3 rounded-full bg-vanilla/25" />
        <div className="h-2.5 w-1/2 rounded-full bg-vanilla/15" />
        <div className="h-2.5 w-1/3 rounded-full bg-champagne/40" />
      </div>
    </div>
  );
}

export function PortfolioCard({
  title,
  category,
  slug,
  image,
  imageAlt,
  metric,
  metricLabel,
  summary,
  tags,
  size = "default",
  priority = false,
}: PortfolioCardProps) {
  const reduced = useReducedMotion();
  const feature = size === "feature";

  return (
    <motion.article
      initial={reduced ? undefined : { opacity: 0, y: 28 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <Link
        href={`/portfolio/${slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-3xl border border-vanilla/10 bg-midnight transition-all duration-400 ease-smooth hover:-translate-y-1.5 hover:border-champagne/40"
      >
        <div
          className={cn(
            "relative overflow-hidden bg-ink",
            feature ? "aspect-[16/10]" : "aspect-[4/3]"
          )}
        >
          {image ? (
            <Image
              src={image}
              alt={imageAlt ?? `${title} — ${category} project by Quesiono`}
              fill
              priority={priority}
              className="object-cover object-top transition-transform duration-700 ease-smooth group-hover:scale-[1.04]"
              sizes={feature ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 768px) 100vw, 45vw"}
            />
          ) : (
            <Plate title={title} />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/25 to-transparent" />

          <span className="absolute left-5 top-5 rounded-full border border-vanilla/25 bg-ink/50 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-vanilla backdrop-blur-sm">
            {category}
          </span>

          <span className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-vanilla/20 bg-ink/50 text-vanilla opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:border-champagne/60 group-hover:text-champagne">
            <ArrowUpRight className="h-4 w-4" />
          </span>

          {metric && (
            <div className="absolute bottom-5 left-5 right-5">
              <p className="font-display text-step-4 font-extrabold leading-none text-champagne">
                {metric}
              </p>
              {metricLabel && (
                <p className="mt-1.5 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-vanilla/70">
                  {metricLabel}
                </p>
              )}
            </div>
          )}
        </div>

        <div className={cn("flex flex-1 flex-col p-6", feature && "sm:p-8")}>
          <h3
            className={cn(
              "font-display font-extrabold leading-tight text-vanilla transition-colors duration-300 group-hover:text-champagne",
              feature ? "text-step-3" : "text-step-2"
            )}
          >
            {title}
          </h3>
          {summary && (
            <p className="mt-3 flex-1 leading-relaxed text-vanilla/60">{summary}</p>
          )}
          {tags && tags.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {tags.slice(0, 4).map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-vanilla/12 px-2.5 py-1 text-[0.72rem] text-vanilla/50"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Link>
    </motion.article>
  );
}
