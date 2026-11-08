import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { enquiryHref } from "@/lib/enquiry";
export function HeroHome() {
  return (
    <header className="bg-cream pb-12 pt-[calc(var(--nav-h)+3rem)] md:pb-16 md:pt-[calc(var(--nav-h)+5rem)]">
      <div className="site-container">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 bg-champagne" aria-hidden />
          <p className="eyebrow text-text-muted">
            Quesiono / Web design & digital agency
          </p>
        </div>
        <div className="mt-7 grid gap-10 lg:grid-cols-[1.25fr_.75fr] lg:items-end lg:gap-16">
          <h1 className="max-w-4xl font-display text-[clamp(2.7rem,6.4vw,6.4rem)] font-bold leading-[.99] tracking-[-.055em]">
            Websites built
            <br className="hidden sm:block" /> for{" "}
            <span className="relative inline-block text-indigo">
              better business.
              <span
                className="absolute -bottom-2 left-0 h-[3px] w-24 bg-champagne md:w-40"
                aria-hidden
              />
            </span>
          </h1>
          <div>
            <p className="max-w-md text-base leading-relaxed text-text-muted md:text-lg">
              Make your offer clear. Help the right people find you. Give them a
              reason to get in touch. We bring design, development, SEO, and
              content together to make that happen.
            </p>
            <div className="mt-7 flex flex-col items-start gap-3">
              <Button href={enquiryHref(undefined, "/")} variant="dark">
                Discuss Your Project
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Button>
              <Link href="/portfolio" className="text-link">
                Explore Our Work
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 grid border border-sand bg-ink md:mt-16 md:grid-cols-[.68fr_1.32fr]">
          <div className="flex flex-col justify-between p-7 text-vanilla md:p-9">
            <div>
              <p className="eyebrow text-champagne">A closer look / 01</p>
              <h2 className="mt-5 max-w-xs text-step-3 font-semibold">
                Make the right first impression.
                <br />
                Then make the next step easy.
              </h2>
            </div>
            <div className="mt-9 border-t border-vanilla/20 pt-5">
              <p className="font-semibold">Dream Floor</p>
              <p className="mt-1 text-sm text-vanilla/75">
                Landscaping & gardening website
              </p>
              <Link
                href="/portfolio/local-restaurant-website"
                className="mt-4 inline-flex min-h-11 items-center gap-3 text-sm text-champagne"
              >
                Explore the design
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
          <div className="relative aspect-[3/2]">
            <Image
              src="/images/projects/project-1.png"
              alt="Dream Floor landscaping website presentation with desktop and mobile views"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 750px"
              className="object-contain"
            />
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-text-muted">
          <p>Strategy / Design / Development / Search / Content</p>
          <a
            href="#business-problems"
            className="inline-flex min-h-11 items-center gap-2"
          >
            Find your starting point
            <ArrowDown className="h-3 w-3" aria-hidden />
          </a>
        </div>
      </div>
    </header>
  );
}
