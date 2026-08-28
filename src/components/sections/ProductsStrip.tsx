import { ArrowUpRight } from "lucide-react";

import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Spotlight } from "@/components/motion/Spotlight";
import { getIcon } from "@/lib/icons";
import { products } from "@/data/products";

/**
 * Our own products. There's one of them, so this is a feature layout rather
 * than a grid — a single card in a three-column grid looks like two failed to
 * load. It reflows into a grid on its own the moment a second product lands.
 */
export function ProductsStrip() {
  if (!products.length) return null;

  const multiple = products.length > 1;

  return (
    <Section tone="ink" spacing="lg" width="wide" id="products">
      <SectionHeading
        eyebrow="Built in-house"
        title="We ship our own software too"
        subtitle="Not a side project for the portfolio. Real users, real support inbox — which is a useful thing for the people building your site to have experienced."
        tone="dark"
        size="lg"
        className="max-w-2xl"
      />

      <div className={multiple ? "mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3" : "mt-14"}>
        {products.map((product, index) => {
          const Icon = getIcon(product.icon);

          const card = (
            <div
              className={
                multiple
                  ? "flex h-full flex-col rounded-3xl border border-vanilla/12 bg-vanilla/[0.04] p-8"
                  : "grid items-center gap-10 rounded-3xl border border-vanilla/12 bg-vanilla/[0.04] p-8 md:grid-cols-[1.15fr_0.85fr] md:gap-14 md:p-12"
              }
            >
              <div>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-champagne/15 text-champagne">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <Badge label={product.status} variant="accent" />
                </div>

                <h3 className="mt-7 font-display text-step-3 font-extrabold tracking-tight text-vanilla">
                  {product.name}
                </h3>
                <p className="mt-2 text-step-0 font-semibold text-champagne">{product.tagline}</p>
                <p className="mt-5 max-w-xl leading-relaxed text-vanilla/60">
                  {product.description}
                </p>

                <div className="mt-9">
                  <Button href={product.url} variant="accent" size="md">
                    Open {product.name}
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </Button>
                </div>
              </div>

              {multiple ? null : (
                <dl className="grid gap-x-8 gap-y-6 border-t border-vanilla/10 pt-8 sm:grid-cols-2 md:border-l md:border-t-0 md:pl-14 md:pt-0">
                  <div>
                    <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-vanilla/40">
                      Stack
                    </dt>
                    <dd className="mt-2 font-display font-bold text-vanilla">Next.js 14</dd>
                  </div>
                  <div>
                    <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-vanilla/40">
                      Built by
                    </dt>
                    <dd className="mt-2 font-display font-bold text-vanilla">Two of us</dd>
                  </div>
                  <div>
                    <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-vanilla/40">
                      Free tier
                    </dt>
                    <dd className="mt-2 font-display font-bold text-vanilla">Yes</dd>
                  </div>
                  <div>
                    <dt className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-vanilla/40">
                      Status
                    </dt>
                    <dd className="mt-2 font-display font-bold text-vanilla">{product.status}</dd>
                  </div>
                </dl>
              )}
            </div>
          );

          return (
            <Reveal key={product.name} delay={index * 0.08}>
              {multiple ? card : <Spotlight>{card}</Spotlight>}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
