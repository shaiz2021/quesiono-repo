import { Button } from "@/components/ui/Button";
import Link from "next/link";
export default function NotFound() {
  return (
    <section className="page-hero bg-cream">
      <div className="site-container py-12">
        <p className="eyebrow text-text-muted">404 / Page not found</p>
        <h1 className="mt-6 max-w-3xl text-step-6 font-bold">
          Let’s get you back on the right path.
        </h1>
        <p className="mt-6 max-w-xl text-text-muted">
          This address does not match a page on the site. You can explore our
          services, browse the portfolio, or start again from the homepage.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/" variant="dark">
            Back to home
          </Button>
          <Button href="/services" variant="outline">
            Explore services
          </Button>
        </div>
        <div className="mt-10 flex flex-wrap gap-6">
          <Link href="/portfolio" className="text-link">
            Portfolio ↗
          </Link>
          <Link href="/sitemap" className="text-link">
            Full sitemap ↗
          </Link>
          <Link href="/contact" className="text-link">
            Contact us ↗
          </Link>
        </div>
      </div>
    </section>
  );
}
