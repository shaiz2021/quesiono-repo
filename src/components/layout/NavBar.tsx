"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { services, getServicesByGroup } from "@/data/services";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 20);
    });
    return () => unsubscribe();
  }, [scrollY]);

  const webServices = getServicesByGroup("web");
  const seoServices = getServicesByGroup("seo");
  const contentServices = getServicesByGroup("content");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-midnight/95 backdrop-blur-md" : "bg-midnight"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            {/* <Image
              src="/images/logos/quesiono-icon.svg"
              alt="Quesiono Icon"
              width={40}
              height={40}
              className="w-10 h-10"
            /> */}
            <div className="hidden md:block">
              <Image
                src="/images/logos/quesiono-logo-light.svg"
                alt="Quesiono Logo"
                width={160}
                height={60}
                className="h-10 w-auto"
              />
              {/* <div className="text-vanilla/40 text-[10px] uppercase tracking-widest">Digital Agency</div> */}
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-vanilla hover:text-vanilla/80 font-semibold">
              Home
            </Link>

            <div className="relative group">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-vanilla hover:text-vanilla/80 font-semibold"
              >
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-indigo border border-vanilla/10 rounded shadow-lg p-6 grid grid-cols-3 gap-4">
                  <div>
                    <h4 className="text-vanilla/60 text-xs uppercase tracking-wider mb-3">Web</h4>
                    <div className="space-y-2">
                      {webServices.map((service) => (
                        <Link
                          key={service.slug}
                          href={service.href}
                          className="block text-vanilla hover:text-vanilla/80 text-sm"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-vanilla/60 text-xs uppercase tracking-wider mb-3">SEO</h4>
                    <div className="space-y-2">
                      {seoServices.map((service) => (
                        <Link
                          key={service.slug}
                          href={service.href}
                          className="block text-vanilla hover:text-vanilla/80 text-sm"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-vanilla/60 text-xs uppercase tracking-wider mb-3">Content</h4>
                    <div className="space-y-2">
                      {contentServices.map((service) => (
                        <Link
                          key={service.slug}
                          href={service.href}
                          className="block text-vanilla hover:text-vanilla/80 text-sm"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/portfolio" className="text-vanilla hover:text-vanilla/80 font-semibold">
              Portfolio
            </Link>
            <Link href="/products" className="text-vanilla hover:text-vanilla/80 font-semibold">
              Products
            </Link>
            <Link href="/about" className="text-vanilla hover:text-vanilla/80 font-semibold">
              About
            </Link>
            <Link href="/blog" className="text-vanilla hover:text-vanilla/80 font-semibold">
              Blog
            </Link>
          </div>

          <div className="hidden lg:block">
            <Button href="/contact">Contact Us</Button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-vanilla">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-midnight border-t border-vanilla/10"
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
              <div className="flex flex-col gap-3">
                {services.filter((s) => !s.parentService).map((service) => (
                  <Link
                    key={service.slug}
                    href={service.href}
                    onClick={() => setIsOpen(false)}
                    className="text-vanilla text-lg"
                  >
                    {service.name}
                  </Link>
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
      )}
    </nav>
  );
}
