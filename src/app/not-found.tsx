import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Home, Mail, Search, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-midnight min-h-screen pt-20">
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-7xl md:text-9xl font-libre italic text-vanilla mb-6">404</h1>
          <h2 className="text-2xl md:text-4xl font-inter font-bold text-vanilla mb-5">
            Page Not Found
          </h2>
          <p className="text-vanilla/70 text-lg md:text-xl mb-10 leading-relaxed">
            The page you’re looking for doesn’t exist or has moved. Use the links below to get back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Button href="/">Back to Home</Button>
            <Button href="/contact" variant="ghost">Contact Us</Button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                href: "/",
                icon: Home,
                title: "Home",
                description: "Start from the top and explore Quesiono.",
              },
              {
                href: "/services",
                icon: Sparkles,
                title: "Services",
                description: "Web development, SEO, and content writing.",
              },
              {
                href: "/portfolio",
                icon: Search,
                title: "Portfolio",
                description: "See real projects and outcomes we’ve delivered.",
              },
              {
                href: "/contact",
                icon: Mail,
                title: "Contact",
                description: "Tell us what you’re building and get next steps.",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-2xl bg-indigo/30 border border-vanilla/10 p-7 hover:bg-indigo/40 hover:border-vanilla/20 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-midnight border border-vanilla/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-vanilla" />
                </div>
                <div className="text-vanilla font-bold text-xl">{item.title}</div>
                <div className="text-vanilla/70 mt-3 leading-relaxed">{item.description}</div>
                <div className="mt-6 inline-flex items-center gap-2 text-vanilla font-semibold">
                  Open <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
