"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MarqueeStrip } from "@/components/ui/MarqueeStrip";

export function HeroHome() {
  const headline = "We Build Digital Brands That Get Found.";
  const words = headline.split(" ");
  const stats = [
    { number: "20+", label: "Projects Completed" },
    { number: "100%", label: "On-Time Delivery" },
    { number: "5+", label: "Years of Experience" },
  ];

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
                <span className="px-4 py-1.5 bg-indigo text-vanilla text-xs font-semibold uppercase tracking-widest rounded border border-vanilla/20">
                  QUESIONO — DIGITAL AGENCY
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
                className="text-vanilla/70 text-lg md:text-xl mb-10 max-w-2xl"
              >
                Web development, SEO, automation, and content for businesses worldwide. Strategy-driven design, built to perform.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
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
                transition={{ duration: 0.8, delay: 1 }}
                className="grid grid-cols-3 gap-6 max-w-lg"
              >
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl font-libre italic text-vanilla mb-1">
                      {stat.number}
                    </div>
                    <p className="text-vanilla/60 text-sm">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="hidden lg:block">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-80 h-80 mx-auto relative"
              >
                <div className="absolute inset-0 rounded-full border border-vanilla/10" />
                <div className="absolute inset-6 rounded-full border border-vanilla/10" />
                <div className="absolute inset-12 rounded-full border border-vanilla/15" />
                <div className="absolute inset-20 rounded-full border border-vanilla/20 flex items-center justify-center bg-midnight">
                  <span className="text-vanilla font-libre italic text-7xl font-bold">Q</span>
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
