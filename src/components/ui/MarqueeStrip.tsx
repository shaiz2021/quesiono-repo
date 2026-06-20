export function MarqueeStrip() {
  const services = [
    "WEB DEVELOPMENT",
    "SEO",
    "AUTOMATION",
    "BRANDING",
    "CONTENT WRITING",
    "CMS DEVELOPMENT",
    "LANDING PAGES",
    "SOCIAL MEDIA",
  ];

  return (
    <div className="bg-midnight py-4 overflow-hidden border-y border-vanilla/10">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...services, ...services].map((service, i) => (
          <span key={i} className="mx-8 text-vanilla/40 font-semibold tracking-wider">
            {service} ·
          </span>
        ))}
      </div>
    </div>
  );
}
