import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "@/data/blog";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock, Linkedin, Link2, Share2, Twitter } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { Metadata } from "next";
import { blogPosts } from "@/data/blog";
import { Badge } from "@/components/ui/Badge";

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

  const canonicalUrl = `https://quesiono.com/blog/${post.slug}`;
  const shareText = `${post.title} — Quesiono`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(canonicalUrl)}`;
  const linkedinShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}`;

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

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
              <div className="hidden md:flex items-center gap-3 ml-auto">
                <a
                  href={twitterShareUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-vanilla/20 hover:border-vanilla/40 hover:bg-vanilla/10 transition-all"
                  aria-label="Share on X"
                >
                  <Twitter className="w-4 h-4" />
                  Share
                </a>
                <a
                  href={linkedinShareUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-vanilla/20 hover:border-vanilla/40 hover:bg-vanilla/10 transition-all"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                  Share
                </a>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  <div className="rounded-2xl bg-cream border border-sand/30 p-6">
                    <p className="text-text-muted text-xs uppercase tracking-widest mb-2">Share this article</p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={twitterShareUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-midnight text-vanilla font-semibold hover:bg-indigo transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                        Share on X
                      </a>
                      <a
                        href={linkedinShareUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-sand bg-white text-midnight font-semibold hover:border-midnight/30 hover:shadow-md transition-all"
                      >
                        <Linkedin className="w-5 h-5" />
                        Share on LinkedIn
                      </a>
                      <a
                        href={canonicalUrl}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-sand bg-white text-midnight font-semibold hover:border-midnight/30 hover:shadow-md transition-all"
                      >
                        <Link2 className="w-5 h-5" />
                        Open link
                      </a>
                    </div>
                    <div className="text-text-muted text-sm mt-4 leading-relaxed">
                      Sharing helps more founders and teams discover practical strategies for web development and SEO.
                    </div>
                  </div>

                  <div className="rounded-2xl bg-midnight border border-vanilla/10 p-6">
                    <div className="flex items-center justify-between gap-6">
                      <div>
                        <div className="text-vanilla/60 text-xs uppercase tracking-widest">Written by</div>
                        <div className="text-vanilla font-semibold mt-2">{post.author}</div>
                        <div className="text-vanilla/70 mt-2">
                          Practical insights from the team building premium websites, SEO systems, and content engines.
                        </div>
                      </div>
                      <div className="w-12 h-12 rounded-2xl bg-indigo/40 border border-vanilla/10 flex items-center justify-center text-vanilla font-libre italic text-2xl">
                        Q
                      </div>
                    </div>
                    <div className="mt-6">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-vanilla font-semibold hover:text-vanilla/80 transition-colors"
                      >
                        Work with Quesiono <Share2 className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-libre italic text-text-dark mb-10 text-center">
                Related Articles.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group rounded-2xl bg-cream border border-sand/30 p-8 hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <Badge label={p.category} variant="light" />
                    <h3 className="text-xl font-bold text-text-dark mt-5 leading-snug group-hover:text-indigo transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-text-muted mt-3 leading-relaxed">{p.excerpt}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-midnight font-semibold group-hover:text-indigo transition-colors">
                      Read <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title="Liked this article?"
        subtitle="Get in touch and let's discuss how we can help you grow online."
      />
    </>
  );
}
