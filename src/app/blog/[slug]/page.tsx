import { notFound } from "next/navigation";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/ui/CTABanner";
import { Badge } from "@/components/ui/Badge";

const posts = [
  {
    slug: "first-post",
    title: "How to Build a Website That Converts",
    content: `
      <p>Building a website that converts requires a combination of good design, clear copy, and a focus on the user journey.</p>
      <h2>1. Understand Your Audience</h2>
      <p>Before you start building, you need to understand who you're building for. What are their goals? What problems are they trying to solve?</p>
      <h2>2. Keep It Simple</h2>
      <p>Don't overcomplicate things. A clean, simple design will always perform better than a cluttered one.</p>
      <h2>3. Focus on the User Journey</h2>
      <p>Map out the path you want users to take on your site and make it as easy as possible for them to follow it.</p>
    `,
    date: "Jan 15, 2025",
    category: "Web Dev",
    author: "Quesiono Team",
  },
  {
    slug: "seo-basics",
    title: "SEO Basics: Getting Started in 2025",
    content: `
      <p>SEO can seem overwhelming, but it doesn't have to be. Here are the basics you need to know.</p>
      <h2>1. On-Page SEO</h2>
      <p>Optimize your title tags, meta descriptions, headings, and content for your target keywords.</p>
      <h2>2. Technical SEO</h2>
      <p>Make sure your site is fast, mobile-friendly, and easy for search engines to crawl.</p>
      <h2>3. Content</h2>
      <p>Create high-quality content that answers your audience's questions.</p>
    `,
    date: "Jan 10, 2025",
    category: "SEO",
    author: "Quesiono Team",
  },
  {
    slug: "content-strategy",
    title: "Content Strategy That Actually Works",
    content: `
      <p>A good content strategy is about more than just publishing blog posts. It's about creating content that helps your audience and drives results for your business.</p>
    `,
    date: "Jan 5, 2025",
    category: "Content",
    author: "Quesiono Team",
  },
];

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const relatedPosts = posts.filter(
    (p) => p.slug !== params.slug && p.category === post.category
  );

  return (
    <>
      <section className="bg-midnight min-h-[40vh] flex items-center pt-20">
        <div className="container mx-auto px-6">
          <Badge label={post.category} />
          <h1 className="text-4xl md:text-5xl font-libre italic text-vanilla mt-4 mb-3">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-vanilla/70">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-cream">
        <div className="container mx-auto px-6 max-w-3xl">
          <article
            className="prose prose-lg prose-headings:font-libre prose-headings:italic prose-headings:text-text-dark prose-p:text-text-muted"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-libre italic text-text-dark mb-12 text-center">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.slice(0, 3).map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block bg-cream rounded shadow-sm border border-sand/20 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="bg-midnight aspect-video flex items-center justify-center">
                    <span className="text-vanilla/20 text-4xl font-libre italic">Q</span>
                  </div>
                  <div className="p-6">
                    <Badge label={p.category} variant="light" />
                    <h3 className="text-xl font-bold text-text-dark mt-3 mb-2">
                      {p.title}
                    </h3>
                    <p className="text-text-muted text-sm">{p.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title="Want More Content Like This?"
        subtitle="Get in touch and let's discuss how we can help you grow online."
      />
    </>
  );
}
