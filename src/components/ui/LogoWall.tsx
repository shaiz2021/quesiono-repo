"use client";

import Image from "next/image";
import { Marquee } from "@/components/motion/Marquee";
import { cn } from "@/lib/utils";

export interface Logo {
  name: string;
  /** Drop an SVG or PNG in /public/images/logos/ and set this to swap in the
   *  real mark. Until then the wordmark below renders in display type. */
  src?: string;
  width?: number;
  height?: number;
}

function Wordmark({ logo, dark }: { logo: Logo; dark: boolean }) {
  if (logo.src) {
    return (
      <Image
        src={logo.src}
        alt={`${logo.name} logo`}
        width={logo.width ?? 148}
        height={logo.height ?? 40}
        className={cn(
          "h-8 w-auto object-contain opacity-60 transition-opacity duration-300 group-hover:opacity-100",
          dark && "brightness-0 invert"
        )}
      />
    );
  }

  return (
    <span
      className={cn(
        "font-display text-[1.05rem] font-bold uppercase tracking-[0.18em] transition-colors duration-300",
        dark
          ? "text-vanilla/45 group-hover:text-vanilla"
          : "text-text-muted group-hover:text-text-dark"
      )}
    >
      {logo.name}
    </span>
  );
}

/**
 * Client logo row. Grid by default; `marquee` for a continuous strip when the
 * list is long enough that a static grid would wrap awkwardly.
 */
export function LogoWall({
  logos,
  tone = "dark",
  variant = "grid",
  className,
}: {
  logos: Logo[];
  tone?: "light" | "dark";
  variant?: "grid" | "marquee";
  className?: string;
}) {
  const dark = tone === "dark";

  if (variant === "marquee") {
    return (
      <div className={className}>
        <Marquee
          separator={null}
          speed="46s"
          items={logos.map((logo) => (
            <span key={logo.name} className="group px-4">
              <Wordmark logo={logo} dark={dark} />
            </span>
          ))}
        />
        {/* The marquee is aria-hidden, so the names still need to reach AT. */}
        <span className="sr-only">
          Selected clients: {logos.map((l) => l.name).join(", ")}.
        </span>
      </div>
    );
  }

  return (
    <ul
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-2xl border sm:grid-cols-3 lg:grid-cols-5",
        dark ? "border-vanilla/10 bg-vanilla/10" : "border-sand bg-sand",
        className
      )}
    >
      {logos.map((logo) => (
        <li
          key={logo.name}
          className={cn(
            "group grid h-24 place-items-center px-4",
            dark ? "bg-ink" : "bg-white"
          )}
        >
          <Wordmark logo={logo} dark={dark} />
        </li>
      ))}
    </ul>
  );
}
