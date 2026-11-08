import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { discoveryGroups } from "@/data/service-groups";
import { Section } from "@/components/ui/Section";
export function ServicesPreview() {
  return (
    <Section tone="ink" width="wide" id="services">
      <div className="grid gap-8 md:grid-cols-[1fr_1fr]">
        <div>
          <p className="eyebrow text-champagne">How we can help</p>
          <h2 className="mt-5 max-w-xl text-step-5 font-bold">
            The right expertise.
            <br />
            For the problem at hand.
          </h2>
        </div>
        <p className="max-w-md self-end text-vanilla/75 md:justify-self-end">
          Start with what your business needs to achieve. Choose a focused
          service or bring design, development, and growth together.
        </p>
      </div>
      <div className="mt-12 grid md:grid-cols-2">
        {discoveryGroups.map((g) => (
          <Link
            key={g.id}
            href={`/services#${g.id}`}
            className="group border-t border-vanilla/25 py-8 md:odd:pr-12 md:even:pl-12"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-champagne">/{g.number}</span>
              <ArrowUpRight
                className="h-6 w-6 text-champagne transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                aria-hidden
              />
            </div>
            <h3 className="mt-6 text-step-3 font-semibold">{g.title}</h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-vanilla/75">
              {g.description}
            </p>
            <span className="mt-5 inline-block text-sm text-champagne">
              Explore services
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
