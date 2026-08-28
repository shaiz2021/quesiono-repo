"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Seamless infinite marquee. The track is duplicated and translated -50%,
 * so the loop point is invisible.
 *
 * Hovering pauses it (see .marquee-pause in globals.css) — a scrolling strip
 * you cannot stop to read is just noise.
 */
export function Marquee({
  items,
  direction = "left",
  className,
  itemClassName,
  separator = "·",
  speed = "38s",
}: {
  items: (string | ReactNode)[];
  direction?: "left" | "right";
  className?: string;
  itemClassName?: string;
  separator?: string | null;
  speed?: string;
}) {
  // Two copies of the track. The animation shifts by exactly half its width.
  const track = [...items, ...items];

  return (
    <div
      className={cn("marquee-pause mask-fade-r overflow-hidden", className)}
      aria-hidden
    >
      <div
        className={cn(
          "flex w-max whitespace-nowrap",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        )}
        style={{ animationDuration: speed }}
      >
        {track.map((item, i) => (
          <span
            key={i}
            className={cn("flex items-center gap-6 px-6", itemClassName)}
          >
            {item}
            {separator && (
              <span className="text-champagne/60" aria-hidden>
                {separator}
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
