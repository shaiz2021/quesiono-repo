"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";

export function HeroHome() {
  const headline = "We Build Digital Brands That Get Found.";
  const words = headline.split(" ");

  return (
    <>
      <section className="bg-midnight min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 mb-6"
              >
                <span className="px-3 py-1 bg-indigo text-vanilla/80 text-xs font-semibold uppercase tracking-wider rounded border border-vanilla/20">
                  DIGITAL AGENCY
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-libre italic text-vanilla mb-6 leading-tight">
                {words.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="inline-block mr-2"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-vanilla/70 text-lg md:text-xl mb-8 max-w-2xl"
              >
                Web development, SEO, automation, and branding for businesses that want to grow online. No templates. No guesswork.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <Button href="/contact" size="lg">
                  Start a Project
                </Button>
                <Button href="/portfolio" variant="ghost" size="lg">
                  See Our Work
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex items-center gap-4"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-indigo border-2 border-midnight flex items-center justify-center text-vanilla text-sm"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="h-6 w-px bg-vanilla/20" />
                <p className="text-vanilla/60">Trusted by 20+ businesses</p>
              </motion.div>
            </div>

            <div className="hidden lg:block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-72 h-72 mx-auto relative"
              >
                <div className="absolute inset-0 rounded-full border-2 border-vanilla/10" />
                <div className="absolute inset-4 rounded-full border-2 border-vanilla/10" />
                <div className="absolute inset-8 rounded-full border-2 border-vanilla/10" />
                <div className="absolute inset-12 rounded-full border-2 border-vanilla/20 flex items-center justify-center">
                  <span className="text-vanilla font-libre italic text-6xl font-bold">Q</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <MarqueeStrip />
    </>
  );
}
