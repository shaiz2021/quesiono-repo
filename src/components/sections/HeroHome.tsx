import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { enquiryHref } from "@/lib/enquiry";

const showcase = [
  {
    name: "Dream Floor",
    type: "Service website",
    image: "/images/projects/project-1.png",
    href: "/portfolio/local-restaurant-website",
    alt: "Dream Floor landscaping website shown on desktop and mobile",
    className: "hero-project hero-project-main",
  },
  {
    name: "LSI-Decors",
    type: "Interior design portfolio",
    image: "/images/projects/project-2.png",
    href: "/portfolio/saas-dashboard",
    alt: "LSI-Decors interior design website shown on desktop and mobile",
    className: "hero-project hero-project-back",
  },
  {
    name: "Arizto",
    type: "Property experience",
    image: "/images/projects/project-3.png",
    href: "/portfolio/ecommerce-store",
    alt: "Arizto real estate website shown on desktop and mobile",
    className: "hero-project hero-project-phone",
  },
];

export function HeroHome() {
  return (
    <header className="relative isolate overflow-hidden bg-ink pb-12 pt-[calc(var(--nav-h)+2.5rem)] text-vanilla md:pb-16 md:pt-[calc(var(--nav-h)+4rem)]">
      <div
        aria-hidden
        className="hero-grid absolute inset-0 -z-10 opacity-35"
      />
      <div
        aria-hidden
        className="absolute -right-32 top-20 -z-10 h-[30rem] w-[30rem] rounded-full border border-champagne/20 md:right-[28%] md:top-28"
      />
      <div className="site-container">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-8">
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-champagne" aria-hidden />
              <p className="eyebrow text-vanilla/65">
                Quesiono / Digital design & development
              </p>
            </div>
            <h1 className="mt-7 max-w-[11ch] font-display text-[clamp(3rem,8.2vw,7.1rem)] font-bold leading-[.91] tracking-[-.065em]">
              Better websites.
              <br />
              <span className="relative inline-block text-champagne">
                Better business.
                <span
                  aria-hidden
                  className="hero-underline absolute -bottom-2 left-0 h-[3px] w-full origin-left bg-champagne/60"
                />
              </span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-vanilla/75 sm:text-lg">
              We bring design, development, ecommerce, search, and content
              together to make your website easier to find, use, and trust.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <Button href={enquiryHref(undefined, "/")} variant="accent">
                Discuss Your Project
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Button>
              <Link
                href="/portfolio"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-vanilla/25 px-5 text-sm font-semibold text-vanilla transition-colors hover:border-champagne hover:text-champagne focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
              >
                Explore Our Work
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 text-[0.68rem] font-semibold uppercase tracking-[.16em] text-vanilla/45">
              <span>Strategy</span><span aria-hidden>·</span><span>Design</span>
              <span aria-hidden>·</span><span>Development</span>
              <span aria-hidden>·</span><span>Growth</span>
            </div>
          </div>

          <div className="hero-showcase relative mx-auto mt-1 min-h-[19rem] w-full max-w-[42rem] sm:min-h-[27rem] lg:mt-0 lg:min-h-[35rem]">
            <div aria-hidden className="hero-orbit absolute left-[13%] top-[8%] h-[74%] w-[74%] rounded-full border border-champagne/25" />
            {showcase.map((project, index) => (
              <Link
                key={project.name}
                href={project.href}
                aria-label={`Explore ${project.name}, ${project.type}`}
                className={`${project.className} group absolute block overflow-hidden rounded-lg border border-vanilla/25 bg-midnight shadow-[0_24px_70px_-28px_rgba(0,0,0,.85)] transition duration-500 hover:z-20 hover:border-champagne/80 hover:shadow-[0_32px_90px_-30px_rgba(0,0,0,.95)] focus-visible:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne`}
              >
                <div className="flex h-7 items-center gap-1.5 border-b border-vanilla/10 bg-midnight px-2.5 sm:h-9 sm:px-3">
                  <i className="h-1.5 w-1.5 rounded-full bg-champagne/80 sm:h-2 sm:w-2" />
                  <i className="h-1.5 w-1.5 rounded-full bg-vanilla/35 sm:h-2 sm:w-2" />
                  <i className="h-1.5 w-1.5 rounded-full bg-vanilla/20 sm:h-2 sm:w-2" />
                  <span className="ml-2 truncate text-[.55rem] text-vanilla/75 sm:text-[.65rem]">
                    {project.name} / {project.type}
                  </span>
                </div>
                <div className="relative aspect-[3/2] bg-[#d3d0c9]">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 62vw, 540px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                </div>
              </Link>
            ))}
            <div className="hero-note absolute bottom-0 left-0 z-10 hidden items-center gap-3 rounded-md border border-vanilla/15 bg-ink/90 px-4 py-3 backdrop-blur sm:flex">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-champagne text-ink">
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </span>
              <span>
                <span className="block text-xs font-semibold text-vanilla">Work shaped around people</span>
                <span className="mt-1 block text-[.65rem] text-vanilla/50">Real project visuals / selected work</span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-7 flex items-center justify-between border-t border-vanilla/15 pt-4 text-xs text-vanilla/55 sm:mt-10 sm:pt-5">
          <p>Digital experiences designed to move business forward.</p>
          <a href="#business-problems" className="inline-flex min-h-11 items-center gap-2 font-medium text-champagne">
            Find your starting point <ArrowDown className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </div>
    </header>
  );
}
