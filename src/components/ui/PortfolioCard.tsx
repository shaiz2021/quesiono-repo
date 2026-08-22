"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "./Badge";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  slug: string;
}

export function PortfolioCard({ image, title, category, slug }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl bg-midnight border border-vanilla/10 shadow-sm hover:shadow-xl transition-shadow lg:py-10"
    >
      <Link href={`/portfolio/${slug}`} className="block aspect-video relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/95 via-midnight/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between gap-6">
          <div className="min-w-0">
            <Badge label={category} variant="transparent" />
            <h3 className="text-2xl md:text-3xl font-bold text-vanilla mt-3 leading-tight truncate">
              {title}
            </h3>
            <p className="text-vanilla/60 mt-2 max-w-xl hidden md:block">
              Explore the strategy, build details, and outcomes.
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center px-5 py-3 rounded-full bg-vanilla/10 text-vanilla border border-vanilla/20 backdrop-blur-sm transition-all duration-300 group-hover:bg-vanilla/15 group-hover:border-vanilla/40">
            View Project
          </div>
        </div>
        <div className="absolute inset-0 bg-midnight/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute right-6 top-6 w-10 h-10 rounded-full bg-vanilla/10 border border-vanilla/20 text-vanilla flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-0.5">
          <span className="text-lg font-bold">↗</span>
        </div>
      </Link>
    </motion.div>
  );
}
