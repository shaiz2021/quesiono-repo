"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getServicesByGroup } from "@/data/services";
import { usePathname } from "next/navigation";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const servicesCloseTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 20);
    });
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setIsServicesOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (!isServicesOpen) return;
      const target = event.target as Node | null;
      if (!target) return;
      if (navRef.current && !navRef.current.contains(target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [isServicesOpen]);

  const webServices = getServicesByGroup("web");
  const seoServices = getServicesByGroup("seo");
  const contentServices = getServicesByGroup("content");

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-midnight/90 backdrop-blur-md border-b border-vanilla/10" : "bg-midnight"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logos/quesiono-icon.svg"
              alt="Quesiono"
              width={40}
              height={40}
              className="w-10 h-10 md:hidden"
              priority
            />
            <div className="hidden md:block">
              <Image
                src="/images/logos/quesiono-logo-light.svg"
                alt="Quesiono Logo"
                width={160}
                height={60}
                className="h-10 w-auto"
                priority
              />
              {/* <div className="text-vanilla/40 text-[10px] uppercase tracking-widest">Digital Agency</div> */}
            </div>
            <div className="md:hidden">
              <div className="text-vanilla font-libre italic text-xl leading-none group-hover:text-vanilla/90 transition-colors">
                Quesiono
              </div>
              <div className="text-vanilla/40 text-[10px] uppercase tracking-[0.22em] mt-1">
                Digital Agency
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-vanilla/90 hover:text-vanilla font-semibold transition-colors">
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => {
                if (servicesCloseTimerRef.current) {
                  window.clearTimeout(servicesCloseTimerRef.current);
                  servicesCloseTimerRef.current = null;
                }
                setIsServicesOpen(true);
              }}
              onMouseLeave={() => {
                servicesCloseTimerRef.current = window.setTimeout(() => {
                  setIsServicesOpen(false);
                }, 120);
              }}
            >
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-vanilla/90 hover:text-vanilla font-semibold transition-colors"
                aria-expanded={isServicesOpen}
                aria-haspopup="menu"
              >
                Services{" "}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[720px] bg-midnight/85 backdrop-blur-xl border border-vanilla/10 rounded-2xl shadow-2xl overflow-hidden"
                  role="menu"
                >
                  <div className="px-6 py-5 border-b border-vanilla/10 flex items-center justify-between">
                    <div>
                      <div className="text-vanilla font-semibold">Explore Services</div>
                      <div className="text-vanilla/60 text-sm mt-1">
                        Web, SEO, and content systems designed to perform.
                      </div>
                    </div>
                    <Link
                      href="/services"
                      className="text-vanilla/80 hover:text-vanilla font-semibold text-sm transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      View all
                    </Link>
                  </div>

                  <div className="p-6 grid grid-cols-3 gap-6">
                    {[
                      { label: "Web", items: webServices },
                      { label: "SEO", items: seoServices },
                      { label: "Content", items: contentServices },
                    ].map((group) => (
                      <div key={group.label}>
                        <div className="text-vanilla/60 text-xs uppercase tracking-widest mb-3">
                          {group.label}
                        </div>
                        <div className="space-y-2">
                          {group.items.map((service) => (
                            <Link
                              key={service.slug}
                              href={service.href}
                              onClick={() => setIsServicesOpen(false)}
                              className="group block rounded-xl px-3 py-2 text-vanilla/90 hover:text-vanilla hover:bg-vanilla/10 transition-all"
                              role="menuitem"
                            >
                              <div className="font-semibold text-sm">{service.name}</div>
                              <div className="text-vanilla/60 text-xs mt-1 line-clamp-2">
                                {service.shortDescription}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            <Link href="/portfolio" className="text-vanilla/90 hover:text-vanilla font-semibold transition-colors">
              Portfolio
            </Link>
            <Link href="/products" className="text-vanilla/90 hover:text-vanilla font-semibold transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-vanilla/90 hover:text-vanilla font-semibold transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-vanilla/90 hover:text-vanilla font-semibold transition-colors">
              Blog
            </Link>
          </div>

          <div className="hidden lg:block">
            <Button href="/contact">Contact Us</Button>
          </div>

          <button
            onClick={() => {
              setIsServicesOpen(false);
              setIsOpen((v) => !v);
            }}
            className="lg:hidden text-vanilla"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden fixed inset-0 top-20 bg-midnight/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden fixed left-0 right-0 top-20 bottom-0 bg-midnight border-t border-vanilla/10 overflow-y-auto"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-vanilla text-2xl font-bold"
            >
              Home
            </Link>
            <div>
              <h3 className="text-vanilla/60 text-sm uppercase tracking-wider mb-4">Services</h3>
              <div className="space-y-3">
                {[
                  { label: "Web", items: webServices },
                  { label: "SEO", items: seoServices },
                  { label: "Content", items: contentServices },
                ].map((group) => (
                  <details
                    key={group.label}
                    className="rounded-2xl bg-indigo/20 border border-vanilla/10 overflow-hidden"
                  >
                    <summary className="cursor-pointer list-none select-none px-5 py-4 flex items-center justify-between">
                      <span className="text-vanilla font-semibold">{group.label}</span>
                      <ChevronDown className="w-5 h-5 text-vanilla/70" />
                    </summary>
                    <div className="px-4 pb-4">
                      <div className="space-y-1">
                        {group.items.map((service) => (
                          <Link
                            key={service.slug}
                            href={service.href}
                            onClick={() => setIsOpen(false)}
                            className="block rounded-xl px-3 py-3 text-vanilla/90 hover:text-vanilla hover:bg-vanilla/10 transition-all"
                          >
                            <div className="font-semibold">{service.name}</div>
                            <div className="text-vanilla/60 text-sm mt-1">
                              {service.shortDescription}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </div>
            <Link
              href="/portfolio"
              onClick={() => setIsOpen(false)}
              className="text-vanilla text-2xl font-bold"
            >
              Portfolio
            </Link>
            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
              className="text-vanilla text-2xl font-bold"
            >
              Products
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-vanilla text-2xl font-bold"
            >
              About
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="text-vanilla text-2xl font-bold"
            >
              Blog
            </Link>
            <Button href="/contact" onClick={() => setIsOpen(false)} className="w-full">
              Contact Us
            </Button>
            </div>
          </motion.div>
        </>
      )}
    </nav>
  );
}
