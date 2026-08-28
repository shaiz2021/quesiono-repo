"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import type { NavItem, NavTree } from "@/lib/nav";

type MenuKey = "services" | "company" | null;

const isCurrent = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export function NavBar({ tree }: { tree: NavTree }) {
  const [openMenu, setOpenMenu] = useState<MenuKey>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>("Design & Build");

  const { scrollY } = useScroll();
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    setIsScrolled(scrollY.get() > 20);
    const unsubscribe = scrollY.on("change", (latest) => setIsScrolled(latest > 20));
    return () => unsubscribe();
  }, [scrollY]);

  // Close everything on navigation.
  useEffect(() => {
    setDrawerOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  // Lock the page behind the mobile drawer.
  useEffect(() => {
    if (!drawerOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [drawerOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setDrawerOpen(false);
      setOpenMenu(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (!openMenu) return;
      const target = event.target as Node | null;
      if (!target) return;
      if (navRef.current && !navRef.current.contains(target)) setOpenMenu(null);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [openMenu]);

  useEffect(() => () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  }, []);

  const hoverOpen = (key: Exclude<MenuKey, null>) => () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenMenu(key);
  };

  // Short grace period so the pointer can cross the gap to the panel.
  const hoverClose = () => {
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 140);
  };

  const linkTone = (href: string) =>
    isCurrent(pathname, href) ? "text-vanilla" : "text-vanilla/70 hover:text-vanilla";

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-400 ease-smooth ${
          isScrolled || openMenu || drawerOpen
            ? "border-b border-vanilla/10 bg-ink/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label="Quesiono home">
            <Image
              src="/images/logos/quesiono-icon.svg"
              alt=""
              width={40}
              height={40}
              className="h-9 w-9 md:hidden"
              priority
            />
            <Image
              src="/images/logos/quesiono-logo-light.svg"
              alt="Quesiono"
              width={160}
              height={60}
              className="hidden h-9 w-auto md:block"
              priority
            />
            <span className="text-step-1 font-display font-extrabold tracking-tight text-vanilla md:hidden">
              Quesiono
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            <div onMouseEnter={hoverOpen("services")} onMouseLeave={hoverClose} className="relative">
              <button
                type="button"
                onClick={() => setOpenMenu(openMenu === "services" ? null : "services")}
                aria-expanded={openMenu === "services"}
                aria-controls="services-menu"
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.95rem] font-semibold transition-colors ${linkTone(
                  "/services"
                )}`}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    openMenu === "services" ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>
            </div>

            <Link
              href="/portfolio"
              className={`rounded-full px-4 py-2 text-[0.95rem] font-semibold transition-colors ${linkTone(
                "/portfolio"
              )}`}
            >
              Work
            </Link>

            <Link
              href="/pricing"
              className={`rounded-full px-4 py-2 text-[0.95rem] font-semibold transition-colors ${linkTone(
                "/pricing"
              )}`}
            >
              Pricing
            </Link>

            <div onMouseEnter={hoverOpen("company")} onMouseLeave={hoverClose} className="relative">
              <button
                type="button"
                onClick={() => setOpenMenu(openMenu === "company" ? null : "company")}
                aria-expanded={openMenu === "company"}
                aria-controls="company-menu"
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.95rem] font-semibold transition-colors ${linkTone(
                  "/about"
                )}`}
              >
                Studio
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    openMenu === "company" ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>
            </div>

            <Link
              href="/blog"
              className={`rounded-full px-4 py-2 text-[0.95rem] font-semibold transition-colors ${linkTone(
                "/blog"
              )}`}
            >
              Journal
            </Link>
          </div>

          <div className="hidden shrink-0 lg:block">
            <Button href="/contact" variant="accent" size="sm">
              Start a project
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>

          {/* Mobile trigger */}
          <button
            type="button"
            onClick={() => {
              setOpenMenu(null);
              setDrawerOpen((open) => !open);
            }}
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-vanilla transition-colors hover:bg-vanilla/10 lg:hidden"
            aria-expanded={drawerOpen}
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
          >
            {drawerOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* ---------- Services mega panel ---------- */}
      <AnimatePresence>
        {openMenu === "services" && (
          <motion.div
            id="services-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={hoverOpen("services")}
            onMouseLeave={hoverClose}
            className="absolute inset-x-0 top-full hidden lg:block"
          >
            <div className="container mx-auto px-6 pb-6">
              <div className="grain relative overflow-hidden rounded-3xl border border-vanilla/10 bg-ink/95 shadow-2xl backdrop-blur-2xl">
                <div className="grid grid-cols-12 gap-8 p-8">
                  {tree.serviceColumns.map((column) => (
                    <div key={column.label} className="col-span-2">
                      <Link
                        href={column.href}
                        className="group mb-4 block"
                        onClick={() => setOpenMenu(null)}
                      >
                        <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                          {column.label}
                        </span>
                        <span className="mt-1 block text-[0.8rem] leading-snug text-vanilla/45">
                          {column.blurb}
                        </span>
                      </Link>
                      <ul className="space-y-0.5">
                        {column.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => setOpenMenu(null)}
                              className={`block rounded-lg px-2.5 py-1.5 text-[0.9rem] font-medium transition-colors hover:bg-vanilla/[0.07] ${
                                isCurrent(pathname, item.href)
                                  ? "bg-vanilla/[0.07] text-champagne"
                                  : "text-vanilla/80 hover:text-vanilla"
                              }`}
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className="col-span-2">
                    <Link href="/industries" className="group mb-4 block" onClick={() => setOpenMenu(null)}>
                      <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                        By industry
                      </span>
                      <span className="mt-1 block text-[0.8rem] leading-snug text-vanilla/45">
                        Sectors where we already know the pitfalls.
                      </span>
                    </Link>
                    <ul className="space-y-0.5">
                      {tree.industries.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setOpenMenu(null)}
                            className={`block rounded-lg px-2.5 py-1.5 text-[0.9rem] font-medium transition-colors hover:bg-vanilla/[0.07] ${
                              isCurrent(pathname, item.href)
                                ? "bg-vanilla/[0.07] text-champagne"
                                : "text-vanilla/80 hover:text-vanilla"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Featured panel */}
                  <div className="col-span-4">
                    <Link
                      href={tree.feature.href}
                      onClick={() => setOpenMenu(null)}
                      className="group flex h-full flex-col justify-between rounded-2xl border border-vanilla/10 bg-gradient-to-br from-indigo/60 via-midnight/60 to-ink p-6 transition-colors hover:border-champagne/40"
                    >
                      <div>
                        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-champagne">
                          {tree.feature.eyebrow}
                        </span>
                        <h3 className="mt-3 text-step-2 font-extrabold text-vanilla">
                          {tree.feature.title}
                        </h3>
                        <p className="mt-3 text-[0.9rem] leading-relaxed text-vanilla/60">
                          {tree.feature.blurb}
                        </p>
                      </div>
                      <span className="mt-6 inline-flex items-center gap-2 text-[0.9rem] font-semibold text-champagne">
                        {tree.feature.cta}
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-6 border-t border-vanilla/10 bg-vanilla/[0.03] px-8 py-4">
                  <p className="text-[0.85rem] text-vanilla/50">
                    {tree.serviceCount} service pages, and one honest conversation about which you
                    actually need.
                  </p>
                  <div className="flex items-center gap-6">
                    <Link
                      href="/services"
                      onClick={() => setOpenMenu(null)}
                      className="text-[0.85rem] font-semibold text-vanilla/80 transition-colors hover:text-vanilla"
                    >
                      All services
                    </Link>
                    <Link
                      href="/process"
                      onClick={() => setOpenMenu(null)}
                      className="text-[0.85rem] font-semibold text-vanilla/80 transition-colors hover:text-vanilla"
                    >
                      How we work
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setOpenMenu(null)}
                      className="inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-champagne"
                    >
                      Tell us the goal
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------- Studio panel ---------- */}
      <AnimatePresence>
        {openMenu === "company" && (
          <motion.div
            id="company-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={hoverOpen("company")}
            onMouseLeave={hoverClose}
            className="absolute inset-x-0 top-full hidden lg:block"
          >
            <div className="container mx-auto flex justify-center px-6 pb-6">
              <div className="grain relative w-full max-w-2xl overflow-hidden rounded-3xl border border-vanilla/10 bg-ink/95 p-4 shadow-2xl backdrop-blur-2xl">
                <div className="grid grid-cols-2 gap-1">
                  {tree.company.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpenMenu(null)}
                      className={`rounded-xl px-4 py-3 transition-colors hover:bg-vanilla/[0.07] ${
                        isCurrent(pathname, item.href) ? "bg-vanilla/[0.07]" : ""
                      }`}
                    >
                      <span
                        className={`block text-[0.95rem] font-semibold ${
                          isCurrent(pathname, item.href) ? "text-champagne" : "text-vanilla"
                        }`}
                      >
                        {item.label}
                      </span>
                      {item.blurb && (
                        <span className="mt-0.5 block text-[0.8rem] leading-snug text-vanilla/50">
                          {item.blurb}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>

    {/* ---------- Mobile drawer ---------- */}
    <AnimatePresence>
      {drawerOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto overscroll-contain bg-ink lg:hidden"
        >
          <div className="container mx-auto px-6 pb-16 pt-6">
            <MobileSection
              label="Work"
              href="/portfolio"
              pathname={pathname}
              onNavigate={() => setDrawerOpen(false)}
            />

            {tree.serviceColumns.map((column) => (
              <MobileAccordion
                key={column.label}
                label={column.label}
                items={column.items}
                open={openSection === column.label}
                onToggle={() => setOpenSection(openSection === column.label ? null : column.label)}
                pathname={pathname}
                onNavigate={() => setDrawerOpen(false)}
                footerHref={column.href}
                footerLabel="Overview"
              />
            ))}

            <MobileAccordion
              label="By industry"
              items={tree.industries}
              open={openSection === "By industry"}
              onToggle={() => setOpenSection(openSection === "By industry" ? null : "By industry")}
              pathname={pathname}
              onNavigate={() => setDrawerOpen(false)}
              footerHref="/industries"
              footerLabel="All industries"
            />

            <MobileAccordion
              label="Studio"
              items={tree.company}
              open={openSection === "Studio"}
              onToggle={() => setOpenSection(openSection === "Studio" ? null : "Studio")}
              pathname={pathname}
              onNavigate={() => setDrawerOpen(false)}
            />

            <MobileSection
              label="Journal"
              href="/blog"
              pathname={pathname}
              onNavigate={() => setDrawerOpen(false)}
            />

            <div className="mt-8">
              <Button
                href="/contact"
                variant="accent"
                size="lg"
                className="w-full"
              >
                Start a project
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Button>
              <p className="mt-4 text-center text-[0.85rem] text-vanilla/45">
                Or email hello@quesiono.com — we reply within one business day.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
);
}

function MobileSection({
  label,
  href,
  pathname,
  onNavigate,
}: {
  label: string;
  href: string;
  pathname: string;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`flex items-center justify-between border-b border-vanilla/10 py-5 text-step-2 font-display font-extrabold tracking-tight ${
        isCurrent(pathname, href) ? "text-champagne" : "text-vanilla"
      }`}
    >
      {label}
      <ArrowUpRight className="h-5 w-5 text-vanilla/40" aria-hidden />
    </Link>
  );
}

function MobileAccordion({
  label,
  items,
  open,
  onToggle,
  pathname,
  onNavigate,
  footerHref,
  footerLabel,
}: {
  label: string;
  items: NavItem[];
  open: boolean;
  onToggle: () => void;
  pathname: string;
  onNavigate: () => void;
  footerHref?: string;
  footerLabel?: string;
}) {
  const panelId = `drawer-${label.toLowerCase().replace(/[^a-z]+/g, "-")}`;

  return (
    <div className="border-b border-vanilla/10">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex w-full items-center justify-between py-5 text-left text-step-2 font-display font-extrabold tracking-tight text-vanilla"
      >
        {label}
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-vanilla/50 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="pb-4">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className={`block rounded-xl px-3 py-3 transition-colors hover:bg-vanilla/[0.06] ${
                      isCurrent(pathname, item.href) ? "bg-vanilla/[0.06]" : ""
                    }`}
                  >
                    <span
                      className={`block font-semibold ${
                        isCurrent(pathname, item.href) ? "text-champagne" : "text-vanilla/90"
                      }`}
                    >
                      {item.label}
                    </span>
                    {item.blurb && (
                      <span className="mt-0.5 block text-[0.85rem] leading-snug text-vanilla/45">
                        {item.blurb}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
              {footerHref && footerLabel && (
                <li>
                  <Link
                    href={footerHref}
                    onClick={onNavigate}
                    className="inline-flex items-center gap-2 px-3 py-3 text-[0.9rem] font-semibold text-champagne"
                  >
                    {footerLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
