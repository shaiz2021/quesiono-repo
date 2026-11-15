"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, ChevronDown, X } from "lucide-react";
import type { NavTree } from "@/lib/nav";

type Panel = "services" | "company" | null;

export function NavBar({ tree }: { tree: NavTree }) {
  const pathname = usePathname();
  const [panel, setPanel] = useState<Panel>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const nav = useRef<HTMLElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const panelTrigger = useRef<HTMLButtonElement | null>(null);
  const active = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const companyActive = tree.company.some((item) => active(item.href)) || active("/industries");

  const closeMobile = (restoreFocus = true) => {
    dialog.current?.close();
    setMobileOpen(false);
    if (restoreFocus) trigger.current?.focus();
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
    const media = window.matchMedia("(min-width: 1024px)");
    const onResize = () => {
      if (media.matches) {
        dialog.current?.close();
        setMobileOpen(false);
      }
    };
    media.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previous;
      media.removeEventListener("change", onResize);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onOutsideClick = (event: PointerEvent) => {
      if (!nav.current?.contains(event.target as Node)) setPanel(null);
    };
    document.addEventListener("pointerdown", onOutsideClick);
    return () => document.removeEventListener("pointerdown", onOutsideClick);
  }, []);

  const togglePanel = (next: Exclude<Panel, null>, button: HTMLButtonElement) => {
    panelTrigger.current = button;
    setPanel((current) => current === next ? null : next);
  };

  const navLink = (href: string, label: string) => (
    <Link key={href} href={href} aria-current={active(href) ? "page" : undefined}
      className="nav-top-link" data-active={active(href)} onClick={() => setPanel(null)}>
      {label}
    </Link>
  );

  return (
    <>
      <nav ref={nav} aria-label="Main navigation" className="site-nav fixed inset-x-0 top-0 z-50 text-vanilla"
        onKeyDown={(event) => {
          if (event.key === "Escape" && panel) {
            event.preventDefault();
            setPanel(null);
            panelTrigger.current?.focus();
          }
        }}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setPanel(null);
        }}>
        <div className="site-container pt-2.5">
          <div className="nav-shell">
            <Link href="/" aria-label="Quesiono home" className="nav-logo" onClick={() => setPanel(null)}>
              <Image src="/images/logos/quesiono-logo-light.svg" alt="Quesiono" width={160} height={60} priority className="h-9 w-auto" />
            </Link>
            <div className="nav-link-group hidden lg:flex">
              <button type="button" className="nav-top-link nav-top-trigger" data-active={active("/services")}
                aria-expanded={panel === "services"} aria-controls="nav-services"
                onClick={(event) => togglePanel("services", event.currentTarget)}>
                Services <ChevronDown className="nav-chevron" aria-hidden />
              </button>
              {navLink("/portfolio", "Work")}
              {navLink("/pricing", "Pricing")}
              <button type="button" className="nav-top-link nav-top-trigger" data-active={companyActive}
                aria-expanded={panel === "company"} aria-controls="nav-company"
                onClick={(event) => togglePanel("company", event.currentTarget)}>
                Company <ChevronDown className="nav-chevron" aria-hidden />
              </button>
              {navLink("/blog", "Journal")}
            </div>
            <Link href="/contact" className="nav-project-link hidden lg:inline-flex" onClick={() => setPanel(null)}>
              <span>Discuss Your Project</span><span className="nav-project-arrow"><ArrowUpRight className="h-4 w-4" aria-hidden /></span>
            </Link>
            <button ref={trigger} type="button" className="nav-menu-trigger lg:hidden" aria-label="Open menu"
              aria-haspopup="dialog" aria-expanded={mobileOpen} aria-controls="mobile-navigation"
              onClick={() => { dialog.current?.showModal(); setMobileOpen(true); }}>
              <span>Menu</span><span className="nav-menu-lines" aria-hidden><span /><span /></span>
            </button>
          </div>
        </div>

        <div id="nav-services" hidden={panel !== "services"} className="nav-popover site-container mt-3">
          <div className="nav-popover-surface">
            <div className="nav-popover-aside">
              <span className="nav-popover-kicker">Explore expertise / {tree.serviceCount} services</span>
              <p className="nav-popover-title">The right work for the next move.</p>
              <p className="nav-popover-copy">Find the practical help you need, from a better website to stronger search visibility.</p>
              <Link href="/services" className="nav-popover-aside-link" onClick={() => setPanel(null)}>
                View all services <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="nav-popover-columns">
              {tree.serviceColumns.map((column, index) => (
                <div className="nav-popover-column" key={column.label}>
                  <Link href={column.href} className="nav-popover-column-head" onClick={() => setPanel(null)}>
                    <span className="nav-popover-index">0{index + 1}</span><span>{column.label}</span><ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                  <p className="nav-popover-column-blurb">{column.blurb}</p>
                  <ul>{column.items.map((item) => (
                    <li key={item.href}><Link href={item.href} className="nav-popover-item"
                      aria-current={active(item.href) ? "page" : undefined} onClick={() => setPanel(null)}>
                      <span>{item.label}</span><ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                    </Link></li>
                  ))}</ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="nav-company" hidden={panel !== "company"} className="nav-popover site-container mt-3">
          <div className="nav-popover-surface nav-company-surface">
            <div className="nav-popover-aside">
              <span className="nav-popover-kicker">Get to know us</span>
              <p className="nav-popover-title">Good work starts with a clear conversation.</p>
              <p className="nav-popover-copy">How we work, what to expect, and the thinking behind Quesiono.</p>
              <Link href="/contact" className="nav-popover-aside-link" onClick={() => setPanel(null)}>
                Start a conversation <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <div className="nav-company-links">
              {[...tree.company, { label: "Industries", href: "/industries", blurb: "Explore work for your sector" }].map((item, index) => (
                <Link href={item.href} key={item.href} className="nav-company-item"
                  aria-current={active(item.href) ? "page" : undefined} onClick={() => setPanel(null)}>
                  <span className="nav-popover-index">0{index + 1}</span>
                  <span><strong>{item.label}</strong><small>{item.blurb}</small></span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <dialog ref={dialog} id="mobile-navigation" aria-label="Website navigation"
        onCancel={() => { setMobileOpen(false); trigger.current?.focus(); }}
        onClose={() => setMobileOpen(false)}
        className="nav-drawer fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto p-0 text-text-dark backdrop:bg-ink/70 lg:hidden">
        <div className="nav-drawer-head">
          <Link href="/" aria-label="Quesiono home" onClick={() => closeMobile(false)}>
            <Image src="/images/logos/quesiono-logo-light.svg" alt="Quesiono" width={160} height={60} className="h-9 w-auto" />
          </Link>
          <button autoFocus type="button" onClick={() => closeMobile()} aria-label="Close menu" className="nav-drawer-close">
            <span>Close</span><X className="h-5 w-5" aria-hidden />
          </button>
        </div>
        <div className="nav-drawer-content" onClick={(event) => {
          if ((event.target as HTMLElement).closest("a")) closeMobile(false);
        }}>
          <div className="nav-drawer-intro"><span className="eyebrow text-indigo">Explore / Quesiono</span><p>Find your next step.</p></div>
          <div className="nav-drawer-routes">
            <details className="nav-drawer-group">
              <summary className="nav-drawer-row"><span className="nav-drawer-number">01</span><span>Services</span><ChevronDown className="nav-drawer-chevron" aria-hidden /></summary>
              <div className="nav-drawer-submenu">
                <Link href="/services" className="nav-drawer-all">Explore all services <ArrowUpRight className="h-4 w-4" aria-hidden /></Link>
                {tree.serviceColumns.map((column) => (
                  <details key={column.label} className="nav-drawer-subgroup">
                    <summary>{column.label}<ChevronDown className="h-4 w-4" aria-hidden /></summary>
                    <ul>{column.items.map((item) => <li key={item.href}><Link href={item.href} aria-current={active(item.href) ? "page" : undefined}>{item.label}</Link></li>)}</ul>
                  </details>
                ))}
              </div>
            </details>
            <Link href="/portfolio" className="nav-drawer-row" aria-current={active("/portfolio") ? "page" : undefined}>
              <span className="nav-drawer-number">02</span><span>Work</span><ArrowUpRight className="nav-drawer-arrow" aria-hidden />
            </Link>
            <Link href="/pricing" className="nav-drawer-row" aria-current={active("/pricing") ? "page" : undefined}>
              <span className="nav-drawer-number">03</span><span>Pricing</span><ArrowUpRight className="nav-drawer-arrow" aria-hidden />
            </Link>
            <details className="nav-drawer-group">
              <summary className="nav-drawer-row"><span className="nav-drawer-number">04</span><span>Company</span><ChevronDown className="nav-drawer-chevron" aria-hidden /></summary>
              <div className="nav-drawer-submenu nav-drawer-company">
                {[...tree.company, { label: "Industries", href: "/industries" }].map((item) => (
                  <Link href={item.href} key={item.href} aria-current={active(item.href) ? "page" : undefined}>
                    {item.label}<ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Link>
                ))}
              </div>
            </details>
            <Link href="/blog" className="nav-drawer-row" aria-current={active("/blog") ? "page" : undefined}>
              <span className="nav-drawer-number">05</span><span>Journal</span><ArrowUpRight className="nav-drawer-arrow" aria-hidden />
            </Link>
          </div>
          <div className="nav-drawer-bottom">
            <div><span className="eyebrow text-champagne">Have something in mind?</span><p>Let’s talk about it.</p></div>
            <Link href="/contact" className="nav-drawer-cta">Discuss Your Project <ArrowRight className="h-5 w-5" aria-hidden /></Link>
          </div>
        </div>
      </dialog>
    </>
  );
}
