import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { companyLinks, legalLinks } from "@/lib/nav";
import { site, socialLinks } from "@/lib/site";
export function Footer() {
  const columns = [
    {
      label: "Expertise",
      links: [
        { label: "Websites & ecommerce", href: "/services#websites" },
        { label: "Development & UI/UX", href: "/services#development" },
        { label: "SEO & performance", href: "/services#growth" },
        { label: "Content & support", href: "/services#support" },
        { label: "All services", href: "/services" },
      ],
    },
    {
      label: "Explore",
      links: [
        { label: "Our work", href: "/portfolio" },
        { label: "Industries", href: "/industries" },
        { label: "Journal", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    { label: "Company", links: companyLinks },
  ];
  return (
    <footer className="bg-ink text-vanilla">
      <div className="site-container">
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="Quesiono home">
              <Image
                src="/images/logos/quesiono-logo-light.svg"
                alt="Quesiono"
                width={160}
                height={60}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-vanilla/75">
              Thoughtful websites. Useful software.
              <br />A clearer path from first visit to enquiry.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-champagne"
            >
              {site.email}
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
            <div className="mt-4 flex flex-wrap gap-5">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-xs text-vanilla/75 hover:text-white"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>
          {columns.map((c) => (
            <div key={c.label}>
              <h2 className="eyebrow text-champagne">{c.label}</h2>
              <ul className="mt-5 space-y-1">
                {c.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="inline-flex min-h-9 items-center text-sm text-vanilla/75 hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-between gap-5 border-t border-vanilla/20 py-7 text-xs text-vanilla/75">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-3">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
