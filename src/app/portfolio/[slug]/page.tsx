import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Gauge, Sparkles, Target } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { CTABanner } from "@/components/ui/CTABanner";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { getProjectBySlug, projects } from "@/data/projects";
import { Metadata } from "next";

interface ProjectPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} | Quesiono Portfolio`,
    description: project.summary,
    alternates: { canonical: `/portfolio/${project.slug}` },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const relatedProjects = projects.filter(
    (p) => p.slug !== params.slug && p.category === project.category
  );

  return (
    <>
      <section className="bg-midnight min-h-[70vh] flex items-end pt-20 pb-20">
        <div className="container mx-auto px-6">
          <div className="mb-10">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-vanilla/70 hover:text-vanilla transition-colors mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
            <Badge label={project.category} />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-libre italic text-vanilla mb-5 leading-tight">
            {project.name}
          </h1>
          <p className="text-vanilla/70 text-2xl">{project.client}</p>
        </div>
      </section>

      <section className="py-12 bg-cream">
        <div className="container mx-auto px-6">
          <div className="relative aspect-video bg-midnight rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 90vw"
            />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              <div className="p-10 bg-cream rounded-2xl border border-sand/20">
                <h2 className="text-3xl font-libre italic text-text-dark mb-6">
                  Overview
                </h2>
                <p className="text-text-muted text-xl leading-relaxed">{project.summary}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Target,
                    title: "Clear objective",
                    description: "A focused build aligned with business goals and customer intent.",
                  },
                  {
                    icon: Sparkles,
                    title: "Premium experience",
                    description: "Editorial design details with light interactions and smooth flow.",
                  },
                  {
                    icon: Gauge,
                    title: "Performance mindset",
                    description: "Structure and polish aimed at speed, clarity, and usability across devices.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="group rounded-2xl bg-cream border border-sand/30 p-8 hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white border border-sand/30 flex items-center justify-center mb-5">
                      <item.icon className="w-6 h-6 text-midnight" />
                    </div>
                    <div className="text-text-dark font-bold text-xl">{item.title}</div>
                    <div className="text-text-muted mt-3 leading-relaxed">{item.description}</div>
                  </div>
                ))}
              </div>

              <div className="p-10 bg-cream rounded-2xl border border-sand/20">
                <h2 className="text-3xl font-libre italic text-text-dark mb-6">
                  The Challenge
                </h2>
                <p className="text-text-muted text-xl leading-relaxed">{project.challenge}</p>
              </div>

              <div className="p-10 bg-cream rounded-2xl border border-sand/20">
                <h2 className="text-3xl font-libre italic text-text-dark mb-6">
                  Our Solution
                </h2>
                <p className="text-text-muted text-xl leading-relaxed">{project.solution}</p>
              </div>

              <div className="p-10 bg-indigo rounded-2xl border border-vanilla/10">
                <h2 className="text-3xl font-libre italic text-vanilla mb-6">
                  Results
                </h2>
                <p className="text-vanilla/80 text-xl leading-relaxed">{project.results}</p>
              </div>

              <div>
                <h2 className="text-3xl font-libre italic text-text-dark mb-8">
                  Services Used
                </h2>
                <div className="flex flex-wrap gap-4">
                  {project.services.map((service, i) => (
                    <Badge key={i} label={service} variant="light" />
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-midnight font-semibold hover:text-indigo transition-colors"
                  >
                    Explore services behind this project <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="py-24 md:py-32 bg-cream">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-libre italic text-text-dark mb-16 text-center">
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {relatedProjects.slice(0, 3).map((p) => (
                <PortfolioCard
                  key={p.slug}
                  image={p.image}
                  title={p.name}
                  category={p.category}
                  slug={p.slug}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title="Ready to Start Your Project?"
        subtitle="Let's build something that gets results."
      />
    </>
  );
}
