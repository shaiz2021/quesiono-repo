import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getIcon } from "@/lib/icons";

const destinations = [
  {
    href: "/services",
    icon: "layers",
    title: "Services",
    description: "Design, build, search, and words. Twenty-two pages of specifics.",
  },
  {
    href: "/portfolio",
    icon: "target",
    title: "Case studies",
    description: "Eight projects with the numbers, including what went sideways.",
  },
  {
    href: "/pricing",
    icon: "credit-card",
    title: "Pricing",
    description: "Real ranges for real briefs, and what pushes them up.",
  },
  {
    href: "/blog",
    icon: "book-open",
    title: "Journal",
    description: "Long-form notes on building, ranking, and what we got wrong.",
  },
];

export default function NotFound() {
  return (
    <div className="grain relative overflow-hidden bg-ink">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[70rem] -translate-x-1/2 rounded-full bg-indigo/25 blur-3xl"
        aria-hidden
      />

      <div className="container relative mx-auto px-6 pb-24 pt-[calc(var(--nav-h)+4rem)]">
        <div className="mx-auto max-w-2xl">
          <Eyebrow tone="dark">Error 404</Eyebrow>
          <p
            className="mt-6 font-display text-[clamp(5rem,18vw,11rem)] font-extrabold leading-[0.85] tracking-tighter text-vanilla/[0.08]"
            aria-hidden
          >
            404
          </p>
          <h1 className="-mt-6 text-step-6 font-extrabold text-vanilla md:-mt-10">
            This page isn&apos;t here
          </h1>
          <p className="mt-6 text-step-1 text-vanilla/60">
            Either it moved, or the link that sent you here was wrong. Both happen. If you followed a
            link from our own site, we&apos;d genuinely like to know — that&apos;s a bug on our side.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/" variant="accent" size="lg">
              Back to the homepage
            </Button>
            <Button href="/contact" variant="ghost" size="lg">
              Tell us what broke
            </Button>
          </div>
        </div>

        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-vanilla/10 bg-vanilla/[0.03] p-6 transition-all duration-400 ease-smooth hover:-translate-y-1 hover:border-champagne/40 hover:bg-vanilla/[0.06]"
              >
                <Icon className="h-6 w-6 text-champagne" aria-hidden />
                <div className="mt-5 flex items-center gap-2 font-display text-step-1 font-bold text-vanilla">
                  {item.title}
                  <ArrowUpRight
                    className="h-4 w-4 text-vanilla/40 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </div>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-vanilla/55">
                  {item.description}
                </p>
              </Link>
            );
          })}
        </div>

        <p className="mt-12 text-[0.9rem] text-vanilla/40">
          Looking for something specific? The{" "}
          <Link href="/sitemap" className="text-vanilla/70 underline decoration-champagne decoration-2 underline-offset-4 hover:text-vanilla">
            full sitemap
          </Link>{" "}
          lists every page on this site.
        </p>
      </div>
    </div>
  );
}
