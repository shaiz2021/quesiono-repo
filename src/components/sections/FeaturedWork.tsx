import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedWork() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="py-20 md:py-32 bg-midnight">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <SectionHeading
            eyebrow="OUR CREATIVES"
            title="Projects Built to Perform."
            dark={true}
          />
          <Link
            href="/portfolio"
            className="hidden md:flex items-center gap-2 text-vanilla font-semibold hover:text-vanilla/80"
          >
            View Full Portfolio <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 lg:row-span-2">
            {featuredProjects[0] && (
              <Link href={`/portfolio/${featuredProjects[0].slug}`} className="group block relative overflow-hidden rounded h-full min-h-[500px]">
                <Image
                  src={featuredProjects[0].image}
                  alt={featuredProjects[0].name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 to-transparent flex flex-col justify-end p-8">
                  {/* <Badge label={featuredProjects[0].category} variant="transparent" /> */}
                  {/* <h3 className="text-3xl font-bold text-vanilla mt-3">{featuredProjects[0].name}</h3> */}
                  <p className="text-vanilla/70 mt-2">{featuredProjects[0].client}</p>
                </div>
              </Link>
            )}
          </div>
          {featuredProjects.slice(1, 3).map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group block relative overflow-hidden rounded h-80"
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 to-transparent flex flex-col justify-end p-6">
                {/* <Badge label={project.category} variant="transparent" /> */}
                {/* <h3 className="text-xl font-bold text-vanilla mt-2">{project.name}</h3> */}
                <p className="text-vanilla/70 mt-1">{project.client}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="md:hidden text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-vanilla font-semibold"
          >
            View Full Portfolio <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
