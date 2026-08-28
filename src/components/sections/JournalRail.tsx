import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PostCard } from "@/components/ui/PostCard";
import { Reveal } from "@/components/motion/Reveal";
import { blogPosts, getRecentPosts } from "@/data/blog";

/** Three latest articles, newest first. */
export function JournalRail() {
  const recent = getRecentPosts(3);

  if (!recent.length) return null;

  return (
    <Section tone="white" spacing="xl" width="wide" id="journal">
      <div className="flex flex-wrap items-end justify-between gap-8">
        <SectionHeading
          eyebrow="Journal"
          title="Notes from inside the work"
          subtitle="Long, specific, and written by whoever actually did the thing. No listicles."
          size="xl"
          className="max-w-2xl"
        />
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 font-semibold text-indigo transition-colors hover:text-midnight"
        >
          All {blogPosts.length} articles
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden
          />
        </Link>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {recent.map((post, index) => (
          <Reveal key={post.slug} delay={index * 0.08}>
            <PostCard post={post} showDate />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
