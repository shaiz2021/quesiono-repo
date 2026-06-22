import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "@/data/blog";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { Metadata } from "next";

interface BlogPostPageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: "Blog Post Not Found" };

  return {
    title: `${post.title} | Quesiono Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <section className="bg-midnight min-h-[60vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-2 text-vanilla/70 hover:text-vanilla transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <SectionHeading
              eyebrow={post.category}
              title={post.title}
              subtitle={`By ${post.author} • ${post.readTime}`}
              dark={true}
            />
            <div className="flex items-center gap-6 mt-8 text-vanilla/70">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white p-10 md:p-16 rounded-2xl shadow-lg border border-sand/20">
              <div 
                className="prose prose-lg md:prose-xl max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="mt-16 pt-10 border-t border-sand">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-text-muted text-sm mb-2">Share this article</p>
                    <button className="flex items-center gap-2 text-midnight font-semibold hover:text-indigo transition-colors">
                      <Share2 className="w-5 h-5" />
                      Share
                    </button>
                  </div>
                  <div className="flex gap-3">
                    {/* Social buttons placeholder */}
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CTABanner
        title="Liked this article?"
        subtitle="Get in touch and let's discuss how we can help you grow online."
      />
    </>
  );
}
