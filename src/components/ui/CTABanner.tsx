import { Button } from "./Button";

interface CTABannerProps {
  title: string;
  subtitle?: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
}

export function CTABanner({
  title,
  subtitle,
  primaryAction = { label: "Start a Project", href: "/contact" },
  secondaryAction = { label: "View Our Work", href: "/portfolio" },
}: CTABannerProps) {
  return (
    <section className="bg-indigo py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(250,247,242,0.10),transparent_60%),radial-gradient(700px_circle_at_80%_70%,rgba(240,231,213,0.10),transparent_55%)]" />
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-libre italic text-vanilla mb-6">
            {title}
          </h2>
          {subtitle && <p className="text-vanilla/70 mb-10 text-lg">{subtitle}</p>}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={primaryAction.href} variant="primary" size="lg">
              {primaryAction.label}
            </Button>
            <Button href={secondaryAction.href} variant="ghost" size="lg">
              {secondaryAction.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
