import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { getServicesByGroup, groupLabels } from "@/data/services";
import { industries } from "@/data/industries";
import { companyLinks, legalLinks } from "@/lib/nav";
import { site, socialLinks } from "@/lib/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Footer() {
  const year = new Date().getFullYear();

  const columns = [
    { label: groupLabels.web, href: "/services", items: getServicesByGroup("web") },
    { label: groupLabels.seo, href: "/services/seo", items: getServicesByGroup("seo") },
    {
      label: groupLabels.content,
      href: "/services/content-writing",
      items: getServicesByGroup("content"),
    },
  ];

  return (
    <footer className="grain relative overflow-hidden bg-ink">
      {/* Soft light behind the top edge, so the footer reads as a surface rather than a block. */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[70rem] -translate-x-1/2 rounded-full bg-indigo/25 blur-3xl"
        aria-hidden
      />

      <div className="container relative mx-auto px-6">
        {/* Closing pitch */}
        <div className="grid gap-10 border-b border-vanilla/10 py-16 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:py-20">
          <div>
            <Eyebrow tone="dark">Next step</Eyebrow>
            <h2 className="mt-5 max-w-xl text-step-5 font-extrabold text-vanilla">
              Tell us what the site needs to do. We&apos;ll tell you what it takes.
            </h2>
            <p className="mt-5 max-w-lg text-vanilla/60">
              No pitch deck, no discovery retainer before anyone looks at your site. One call, a
              straight answer on scope and budget, and a written plan if it&apos;s a fit.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-champagne px-7 py-4 font-semibold text-ink transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:bg-champagne/90"
            >
              Start a project
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-vanilla/25 px-7 py-4 font-semibold text-vanilla transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-vanilla/60 hover:bg-vanilla/[0.06]"
            >
              See pricing
            </Link>
          </div>
        </div>

        {/* Link grid */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Quesiono home">
              <Image
                src="/images/logos/quesiono-logo-light.svg"
                alt="Quesiono"
                width={160}
                height={60}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-sm text-vanilla/55">
              A web design and digital agency. We build fast sites, earn rankings the slow way, and
              write pages people actually finish reading.
            </p>

            <div className="mt-8 space-y-3 text-[0.95rem]">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-vanilla/70 transition-colors hover:text-vanilla"
              >
                <Mail className="h-4 w-4 text-champagne" aria-hidden />
                {site.email}
              </a>
              <p className="flex items-start gap-3 text-vanilla/55">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-champagne" aria-hidden />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region} {site.address.postalCode}
                </span>
              </p>
            </div>

            <div className="mt-8 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-vanilla/15 text-vanilla/70 transition-all duration-300 hover:border-champagne/50 hover:text-vanilla"
                >
                  <SocialIcon name={social.icon} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((column) => (
            <FooterColumn key={column.label} label={column.label} href={column.href}>
              {column.items.map((service) => (
                <FooterLink key={service.slug} href={service.href}>
                  {service.navLabel ?? service.name}
                </FooterLink>
              ))}
            </FooterColumn>
          ))}

          <div>
            <FooterColumn label="Studio">
              {companyLinks.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
              <FooterLink href="/portfolio">Case studies</FooterLink>
              <FooterLink href="/blog">Journal</FooterLink>
            </FooterColumn>

            <div className="mt-10">
              <FooterColumn label="Industries" href="/industries">
                {industries.map((industry) => (
                  <FooterLink key={industry.slug} href={industry.href}>
                    {industry.navLabel ?? industry.name}
                  </FooterLink>
                ))}
              </FooterColumn>
            </div>
          </div>
        </div>

        {/* Legal strip */}
        <div className="flex flex-col gap-6 border-t border-vanilla/10 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[0.85rem] text-vanilla/40">
            © {year} {site.legalName}. Registered in {site.address.regionName},{" "}
            {site.address.countryName}.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[0.85rem] text-vanilla/40 transition-colors hover:text-vanilla/80"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  label,
  href,
  children,
}: {
  label: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      {href ? (
        <Link
          href={href}
          className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-champagne transition-colors hover:text-champagne/80"
        >
          {label}
        </Link>
      ) : (
        <h3 className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-champagne">
          {label}
        </h3>
      )}
      <ul className="mt-5 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-[0.9rem] text-vanilla/55 transition-colors hover:text-vanilla"
      >
        {children}
      </Link>
    </li>
  );
}
