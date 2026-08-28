"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Cheap wireframe stand-in for a real screenshot. "before" reads as a cramped,
 * ad-heavy page; "after" as a spacious one. Purely decorative.
 */
function Wireframe({ kind }: { kind: "before" | "after" }) {
  const before = kind === "before";

  return (
    <div
      className={cn(
        "absolute inset-0 p-5 sm:p-8",
        before ? "bg-[#e6e4df]" : "bg-cream"
      )}
      aria-hidden
    >
      <div
        className={cn(
          "flex h-full flex-col rounded-lg bg-white p-4 sm:p-6",
          before ? "gap-1.5 shadow-none" : "gap-4 shadow-sm"
        )}
      >
        <div className="flex items-center justify-between">
          <div
            className={cn(
              "rounded-sm bg-midnight",
              before ? "h-2 w-14" : "h-2.5 w-20"
            )}
          />
          <div className="flex gap-1.5">
            {Array.from({ length: before ? 7 : 4 }).map((_, i) => (
              <div
                key={i}
                className={cn(
                  "h-1.5 rounded-sm",
                  before ? "w-4 bg-[#c9c6c0]" : "w-6 bg-sand"
                )}
              />
            ))}
          </div>
        </div>

        <div
          className={cn(
            "rounded-sm",
            before
              ? "mt-1 h-3 w-full bg-[#d6d3cd]"
              : "mt-6 h-5 w-3/4 bg-midnight/85"
          )}
        />
        <div
          className={cn(
            "rounded-sm",
            before ? "h-3 w-11/12 bg-[#d6d3cd]" : "h-5 w-2/5 bg-midnight/85"
          )}
        />
        {before ? (
          <>
            <div className="h-2 w-full rounded-sm bg-[#e2dfd9]" />
            <div className="h-2 w-full rounded-sm bg-[#e2dfd9]" />
            <div className="h-2 w-10/12 rounded-sm bg-[#e2dfd9]" />
            <div className="mt-1 grid grid-cols-4 gap-1.5">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="h-6 rounded-sm bg-[#eceae5]" />
              ))}
            </div>
            <div className="mt-auto h-6 w-full rounded-sm border border-dashed border-[#c9c6c0] bg-[#f3f1ec]" />
          </>
        ) : (
          <>
            <div className="h-2 w-3/5 rounded-sm bg-sand" />
            <div className="mt-2 flex gap-3">
              <div className="h-8 w-28 rounded-full bg-champagne" />
              <div className="h-8 w-24 rounded-full border border-sand" />
            </div>
            <div className="mt-auto grid grid-cols-3 gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-8 w-8 rounded-md bg-cream" />
                  <div className="h-2 w-full rounded-sm bg-sand" />
                  <div className="h-2 w-2/3 rounded-sm bg-sand/70" />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/**
 * Before/after comparison with a draggable divider.
 *
 * The handle is a real range input, so it works with a mouse, a finger, and
 * arrow keys — a pointer-only drag handle would lock out keyboard users.
 * Images are optional; without them a wireframe stands in.
 */
export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
  beforeAlt,
  afterAlt,
  caption,
  className,
}: {
  beforeSrc?: string;
  afterSrc?: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeAlt?: string;
  afterAlt?: string;
  caption?: string;
  className?: string;
}) {
  const [position, setPosition] = useState(50);

  return (
    <figure className={className}>
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-vanilla/10 bg-ink">
        {/* After sits underneath, full width. */}
        {afterSrc ? (
          <Image
            src={afterSrc}
            alt={afterAlt ?? `${afterLabel} redesign`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        ) : (
          <Wireframe kind="after" />
        )}

        {/* Before is clipped to the slider position. */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          {beforeSrc ? (
            <Image
              src={beforeSrc}
              alt={beforeAlt ?? `${beforeLabel} redesign`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
            />
          ) : (
            <Wireframe kind="before" />
          )}
        </div>

        {/* Divider */}
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-champagne"
          style={{ left: `${position}%` }}
          aria-hidden
        >
          <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-champagne bg-ink text-champagne shadow-lg">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M9 6 4 12l5 6M15 6l5 6-5 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-vanilla backdrop-blur-sm">
          {beforeLabel}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-champagne px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ink">
          {afterLabel}
        </span>

        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label={`Reveal ${beforeLabel} or ${afterLabel}. Currently ${position} percent.`}
          className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none rounded-3xl bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne [&::-moz-range-thumb]:h-full [&::-moz-range-thumb]:w-11 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-transparent [&::-webkit-slider-thumb]:h-full [&::-webkit-slider-thumb]:w-11 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-transparent"
        />
      </div>

      {caption && (
        <figcaption className="mt-4 text-[0.9rem] leading-relaxed text-text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
