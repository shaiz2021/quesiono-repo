import Image from "next/image";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { CTABanner } from "@/components/ui/CTABanner";
import { PortfolioCard } from "@/components/ui/PortfolioCard";
import { getProjectBySlug, projects } from "@/data/projects";

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const relatedProjects = projects.filter(
    (p) => p.slug !== params.slug && p.category === project.category
  );

  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-end pt-20 pb-16">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <Badge label={project.category} />
          </div>
          <h1 className="text-4xl md:text-6xl font-libre italic text-vanilla mb-4">
            {project.name}
          </h1>
          <p className="text-vanilla/70 text-xl">{project.client}</p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="relative aspect-video bg-midnight rounded overflow-hidden">
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-text-dark mb-4">
                Overview
              </h2>
              <p className="text-text-muted text-lg">{project.summary}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-dark mb-4">
                The Challenge
              </h2>
              <p className="text-text-muted text-lg">{project.challenge}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-dark mb-4">
                Our Solution
              </h2>
              <p className="text-text-muted text-lg">{project.solution}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-dark mb-4">
                Results
              </h2>
              <p className="text-text-muted text-lg">{project.results}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-text-dark mb-4">
                Services Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.services.map((service, i) => (
                  <Badge key={i} label={service} variant="light" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-libre italic text-text-dark mb-12 text-center">
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
