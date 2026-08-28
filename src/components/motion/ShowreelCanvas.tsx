"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * The motion centrepiece, and the drop-in slot for real video.
 *
 * With no `videoSrc` it renders an animated browser mockup — a site building
 * itself, metrics filling, a chart drawing in. With `videoSrc` set it renders
 * a real muted looping <video> instead, so dropping an MP4 into /public/videos
 * and setting one field is the entire swap.
 */
export function ShowreelCanvas({
  videoSrc,
  posterSrc,
  className,
  label = "quesiono.com",
  caption,
}: {
  videoSrc?: string | null;
  posterSrc?: string | null;
  className?: string;
  label?: string;
  caption?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <figure className={cn("relative", className)}>
      <div className="relative overflow-hidden rounded-2xl border border-vanilla/15 bg-midnight shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
        {/* Browser chrome */}
        <div className="flex items-center gap-3 border-b border-vanilla/10 bg-ink/80 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-vanilla/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-vanilla/25" />
            <span className="h-2.5 w-2.5 rounded-full bg-vanilla/25" />
          </div>
          <div className="ml-2 flex-1 truncate rounded-full bg-vanilla/[0.07] px-3 py-1 text-[0.7rem] text-vanilla/50">
            {label}
          </div>
        </div>

        {videoSrc ? (
          <video
            className="aspect-[16/10] w-full object-cover"
            src={videoSrc}
            poster={posterSrc ?? undefined}
            autoPlay
            muted
            loop
            playsInline
            // Decorative: the surrounding copy carries the meaning.
            aria-hidden
          />
        ) : (
          <MockViewport reduced={!!reduced} />
        )}
      </div>

      {caption && (
        <figcaption className="mt-4 text-center text-[0.85rem] text-vanilla/50">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/** The generated stand-in for a screen recording. */
function MockViewport({ reduced }: { reduced: boolean }) {
  const bars = [
    { label: "Performance", value: 98 },
    { label: "Accessibility", value: 100 },
    { label: "SEO", value: 100 },
  ];

  // Sparkline that trends up, drawn once then held.
  const points = "0,58 26,52 52,55 78,40 104,44 130,28 156,30 182,14 208,6";

  return (
    <div
      className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-midnight via-midnight to-indigo p-5 sm:p-7"
      aria-hidden
    >
      {/* Faint grid, gives the surface some depth */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(242,234,218,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(242,234,218,0.045)_1px,transparent_1px)] bg-[size:34px_34px]" />

      <div className="relative flex h-full flex-col gap-4">
        {/* Headline skeleton, wiping in like text being typed */}
        <div className="space-y-2">
          <motion.div
            className="h-3 rounded-full bg-champagne/70"
            initial={{ width: reduced ? "42%" : 0 }}
            animate={reduced ? undefined : { width: ["0%", "42%", "42%"] }}
            transition={{ duration: 5, times: [0, 0.28, 1], repeat: Infinity, repeatDelay: 0.4 }}
          />
          <motion.div
            className="h-5 rounded-full bg-vanilla/85 sm:h-6"
            initial={{ width: reduced ? "78%" : 0 }}
            animate={reduced ? undefined : { width: ["0%", "78%", "78%"] }}
            transition={{ duration: 5, times: [0, 0.45, 1], delay: 0.25, repeat: Infinity, repeatDelay: 0.4 }}
          />
          <motion.div
            className="h-5 rounded-full bg-vanilla/45 sm:h-6"
            initial={{ width: reduced ? "56%" : 0 }}
            animate={reduced ? undefined : { width: ["0%", "56%", "56%"] }}
            transition={{ duration: 5, times: [0, 0.55, 1], delay: 0.4, repeat: Infinity, repeatDelay: 0.4 }}
          />
        </div>

        <div className="grid flex-1 grid-cols-5 gap-3">
          {/* Lighthouse-style scores filling up */}
          <div className="col-span-2 flex flex-col justify-center gap-3 rounded-xl border border-vanilla/10 bg-ink/40 p-3">
            {bars.map((bar, i) => (
              <div key={bar.label} className="space-y-1.5">
                <div className="flex justify-between text-[0.55rem] uppercase tracking-wider text-vanilla/45 sm:text-[0.6rem]">
                  <span>{bar.label}</span>
                  <span className="text-champagne">{bar.value}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-vanilla/10">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-champagne to-vanilla"
                    initial={{ width: reduced ? `${bar.value}%` : "0%" }}
                    animate={reduced ? undefined : { width: ["0%", `${bar.value}%`, `${bar.value}%`] }}
                    transition={{
                      duration: 5,
                      times: [0, 0.5, 1],
                      delay: 0.5 + i * 0.18,
                      repeat: Infinity,
                      repeatDelay: 0.4,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Traffic chart drawing itself */}
          <div className="col-span-3 rounded-xl border border-vanilla/10 bg-ink/40 p-3">
            <div className="mb-1 text-[0.55rem] uppercase tracking-wider text-vanilla/45 sm:text-[0.6rem]">
              Organic sessions
            </div>
            <svg viewBox="0 0 208 64" className="h-[calc(100%-1rem)] w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="showreel-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#C9A961" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#C9A961" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.polygon
                points={`${points} 208,64 0,64`}
                fill="url(#showreel-fill)"
                initial={{ opacity: reduced ? 1 : 0 }}
                animate={reduced ? undefined : { opacity: [0, 1, 1] }}
                transition={{ duration: 5, times: [0, 0.7, 1], repeat: Infinity, repeatDelay: 0.4 }}
              />
              <motion.polyline
                points={points}
                fill="none"
                stroke="#C9A961"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: reduced ? 1 : 0 }}
                animate={reduced ? undefined : { pathLength: [0, 1, 1] }}
                transition={{
                  duration: 5,
                  times: [0, 0.62, 1],
                  delay: 0.6,
                  repeat: Infinity,
                  repeatDelay: 0.4,
                  ease: "easeInOut",
                }}
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Cursor drifting across, then clicking */}
      {!reduced && (
        <motion.svg
          className="absolute h-4 w-4 drop-shadow"
          viewBox="0 0 24 24"
          fill="#F2EADA"
          initial={{ left: "22%", top: "72%" }}
          animate={{
            left: ["22%", "62%", "68%", "34%", "22%"],
            top: ["72%", "40%", "76%", "58%", "72%"],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute" }}
        >
          <path d="M5 2l14 9-6.5 1.2L15 20l-2.6 1-2.8-7L5 18z" />
        </motion.svg>
      )}
    </div>
  );
}
