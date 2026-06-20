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
      className="group relative overflow-hidden rounded bg-midnight lg:py-10"
    >
      <Link href={`/portfolio/${slug}`} className="block aspect-video">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 to-transparent flex flex-col justify-end p-6">
          {/* <Badge label={category} variant="transparent" /> */}
          {/* <h3 className="text-2xl font-bold text-vanilla mt-2">{title}</h3> */}
        </div>
        <div className="absolute inset-0 bg-midnight/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-vanilla font-bold text-lg">View Project</span>
        </div>
      </Link>
    </motion.div>
  );
}
