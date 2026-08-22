"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedWork() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="py-24 md:py-36 bg-midnight">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <SectionHeading
            eyebrow="OUR WORK"
            title="Projects Built to Perform."
            dark={true}
          />
          <Link
            href="/portfolio"
            className="hidden md:flex items-center gap-3 text-vanilla font-semibold hover:text-vanilla/80 transition-colors mt-6 md:mt-0"
          >
            View All Projects <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Large Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 lg:row-span-2"
          >
            {featuredProjects[0] && (
              <Link href={`/portfolio/${featuredProjects[0].slug}`} className="group block relative overflow-hidden rounded-xl h-full min-h-[550px]">
                <Image
                  src={featuredProjects[0].image}
                  alt={featuredProjects[0].name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent flex flex-col justify-end p-10">
                  <Badge label={featuredProjects[0].category} variant="transparent" />
                  <h3 className="text-3xl md:text-4xl font-bold text-vanilla mt-4">{featuredProjects[0].name}</h3>
                  <p className="text-vanilla/70 mt-2 text-lg">{featuredProjects[0].client}</p>
                </div>
                <div className="absolute inset-0 bg-midnight/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-vanilla font-bold text-xl border-b border-vanilla/50 pb-1">View Project</span>
                </div>
              </Link>
            )}
          </motion.div>

          {/* Smaller Projects */}
          {featuredProjects.slice(1, 3).map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (index + 1) * 0.15 }}
            >
              <Link
                href={`/portfolio/${project.slug}`}
                className="group block relative overflow-hidden rounded-xl h-96"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/30 to-transparent flex flex-col justify-end p-8">
                  <Badge label={project.category} variant="transparent" />
                  <h3 className="text-2xl font-bold text-vanilla mt-3">{project.name}</h3>
                  <p className="text-vanilla/70 mt-2">{project.client}</p>
                </div>
                <div className="absolute inset-0 bg-midnight/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-vanilla font-bold border-b border-vanilla/50 pb-1">View Project</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden text-center mt-16">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 text-vanilla font-semibold"
          >
            View All Projects <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}