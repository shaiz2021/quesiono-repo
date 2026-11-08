"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import type { NavTree } from "@/lib/nav";
import { Button } from "@/components/ui/Button";

export function NavBar({ tree }: { tree: NavTree }) {
  const pathname = usePathname();
  const [panel, setPanel] = useState<"services" | "company" | null>(null);
  const nav = useRef<HTMLElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const panelTrigger = useRef<HTMLButtonElement | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");
  const closeMobile = () => {
    dialog.current?.close();
    setMobileOpen(false);
    trigger.current?.focus();
  };
  useEffect(() => {
    setPanel(null);
    dialog.current?.close();
    setMobileOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);
  useEffect(() => {
    const close = (event: PointerEvent) => {
      if (!nav.current?.contains(event.target as Node)) setPanel(null);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, []);
  const navLink = (href: string, label: string) => (
    <Link
      key={href}
      href={href}
      aria-current={active(href) ? "page" : undefined}
      className={`inline-flex min-h-11 items-center px-3 text-sm font-medium ${active(href) ? "text-champagne" : "text-vanilla/80 hover:text-white"}`}
    >
      {label}
    </Link>
  );
  return (
    <>
      <nav
        ref={nav}
        aria-label="Main navigation"
        className="fixed inset-x-0 top-0 z-50 border-b border-vanilla/15 bg-ink text-vanilla"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setPanel(null);
            panelTrigger.current?.focus();
          }
        }}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setPanel(null);
        }}
      >
        <div className="site-container flex h-20 items-center justify-between gap-4">
          <Link href="/" aria-label="Quesiono home" className="shrink-0">
            <Image
              src="/images/logos/quesiono-logo-light.svg"
              alt="Quesiono"
              width={160}
              height={60}
              priority
              className="h-9 w-auto"
            />
          </Link>
          <div className="hidden items-center gap-1 lg:flex">
            <button
              className={`flex min-h-11 items-center gap-1 px-3 text-sm font-medium ${active("/services") ? "text-champagne" : ""}`}
              aria-expanded={panel === "services"}
              aria-controls="nav-services"
              onClick={(e) => {
                panelTrigger.current = e.currentTarget;
                setPanel(panel === "services" ? null : "services");
              }}
            >
              Services
              <ChevronDown className="h-3 w-3" aria-hidden />
            </button>
            {navLink("/portfolio", "Work")}
            {navLink("/pricing", "Pricing")}
            <button
              className="flex min-h-11 items-center gap-1 px-3 text-sm font-medium"
              aria-expanded={panel === "company"}
              aria-controls="nav-company"
              onClick={(e) => {
                panelTrigger.current = e.currentTarget;
                setPanel(panel === "company" ? null : "company");
              }}
            >
              Company
              <ChevronDown className="h-3 w-3" aria-hidden />
            </button>
            {navLink("/blog", "Journal")}
          </div>
          <div className="hidden lg:block">
            <Button href="/contact" variant="accent" size="sm">
              Discuss Your Project
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Button>
          </div>
          <button
            ref={trigger}
            className="grid h-12 w-12 place-items-center lg:hidden"
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => {
              dialog.current?.showModal();
              setMobileOpen(true);
            }}
          >
            <Menu aria-hidden />
          </button>
        </div>
        <div
          id="nav-services"
          hidden={panel !== "services"}
          className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-vanilla/15 bg-cream text-text-dark"
        >
          <div className="site-container grid gap-10 py-9 lg:grid-cols-[1.4fr_1fr_1fr]">
            {tree.serviceColumns.map((col) => (
              <div key={col.label}>
                <Link href={col.href} className="eyebrow text-indigo">
                  {col.label} ↗
                </Link>
                <ul
                  className={`mt-4 ${col.items.length > 6 ? "grid grid-cols-2 gap-x-5" : ""}`}
                >
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active(item.href) ? "page" : undefined}
                        className="block py-2.5 text-sm hover:underline underline-offset-4"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link href="/services" className="text-link lg:col-span-3">
              Compare all services
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
        <div
          id="nav-company"
          hidden={panel !== "company"}
          className="border-t border-vanilla/15 bg-cream text-text-dark"
        >
          <div className="site-container grid gap-x-12 gap-y-4 py-8 md:grid-cols-3">
            {[
              ...tree.company,
              {
                label: "Industries",
                href: "/industries",
                blurb: "Solutions for your business sector",
              },
            ].map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className="py-2 hover:underline underline-offset-4"
              >
                <span className="font-semibold">{item.label}</span>
                <span className="mt-1 block text-sm text-text-muted">
                  {item.blurb}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <dialog
        ref={dialog}
        id="mobile-navigation"
        aria-label="Website navigation"
        onCancel={() => {
          setMobileOpen(false);
          trigger.current?.focus();
        }}
        onClose={() => setMobileOpen(false)}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto bg-ink p-0 text-vanilla backdrop:bg-ink/60"
      >
        <div className="flex h-20 items-center justify-between border-b border-vanilla/20 px-5">
          <span className="font-display text-xl font-bold">Quesiono</span>
          <button
            autoFocus
            onClick={closeMobile}
            aria-label="Close menu"
            className="grid h-12 w-12 place-items-center"
          >
            <X aria-hidden />
          </button>
        </div>
        <div
          className="space-y-2 px-5 py-6"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("a")) closeMobile();
          }}
        >
          <Link href="/services" className="block py-3 text-xl font-semibold">
            All services
          </Link>
          {tree.serviceColumns.map((col) => (
            <details
              key={col.label}
              className="border-b border-vanilla/20 py-3"
            >
              <summary className="cursor-pointer py-2 font-medium">
                {col.label}
              </summary>
              <ul className="grid gap-1 pb-3 pt-3 sm:grid-cols-2">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-2.5 text-vanilla/80"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          ))}
          <div className="grid grid-cols-2 gap-x-5 pt-5">
            {[
              ...tree.company,
              { label: "Work", href: "/portfolio" },
              { label: "Industries", href: "/industries" },
              { label: "Journal", href: "/blog" },
            ].map((item) => (
              <Link
                href={item.href}
                key={item.href}
                aria-current={active(item.href) ? "page" : undefined}
                className="py-3 text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Button href="/contact" variant="accent" className="!mt-8 w-full">
            Discuss Your Project
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Button>
        </div>
      </dialog>
    </>
  );
}
