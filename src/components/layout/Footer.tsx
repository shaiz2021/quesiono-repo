import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Twitter, Github, ArrowRight } from "lucide-react";
import { getServicesByGroup } from "@/data/services";

export function Footer() {
  const webServices = getServicesByGroup("web");
  const seoServices = getServicesByGroup("seo");
  const contentServices = getServicesByGroup("content");

  return (
    <footer className="bg-midnight pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-indigo flex items-center justify-center">
                <span className="text-vanilla font-libre italic text-2xl font-bold">Q</span>
              </div>
              <div>
                <h3 className="text-vanilla font-bold text-xl">Quesiono</h3>
                <div className="text-vanilla/40 text-xs uppercase tracking-widest">Digital Agency</div>
              </div>
            </div>
            <p className="text-vanilla/70 mb-8 text-lg max-w-md">
              Building digital brands that get found. Serving clients worldwide with strategy-driven design and development.
            </p>
            <div className="flex gap-5">
              <a href="https://www.linkedin.com/company/quesiono" className="w-11 h-11 rounded-full bg-indigo/20 flex items-center justify-center text-vanilla hover:bg-indigo hover:text-vanilla transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/quesiono" className="w-11 h-11 rounded-full bg-indigo/20 flex items-center justify-center text-vanilla hover:bg-indigo hover:text-vanilla transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/quesiono" className="w-11 h-11 rounded-full bg-indigo/20 flex items-center justify-center text-vanilla hover:bg-indigo hover:text-vanilla transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/quesiono" className="w-11 h-11 rounded-full bg-indigo/20 flex items-center justify-center text-vanilla hover:bg-indigo hover:text-vanilla transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-vanilla font-bold mb-6 text-lg">Services</h4>
            <div className="space-y-4">
              {[...webServices, ...seoServices, ...contentServices].map((service) => (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="flex items-center gap-2 text-vanilla/60 hover:text-vanilla transition-colors"
                >
                  <ArrowRight className="w-3 h-3" />
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-vanilla font-bold mb-6 text-lg">Company</h4>
            <div className="space-y-4">
              <Link href="/about" className="flex items-center gap-2 text-vanilla/60 hover:text-vanilla transition-colors">
                <ArrowRight className="w-3 h-3" />
                About Us
              </Link>
              <Link href="/portfolio" className="flex items-center gap-2 text-vanilla/60 hover:text-vanilla transition-colors">
                <ArrowRight className="w-3 h-3" />
                Portfolio
              </Link>
              <Link href="/blog" className="flex items-center gap-2 text-vanilla/60 hover:text-vanilla transition-colors">
                <ArrowRight className="w-3 h-3" />
                Blog
              </Link>
              <Link href="/contact" className="flex items-center gap-2 text-vanilla/60 hover:text-vanilla transition-colors">
                <ArrowRight className="w-3 h-3" />
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-vanilla font-bold mb-6 text-lg">Contact</h4>
            <div className="space-y-4 text-vanilla/70">
              <div>
                <p>4201 Main St, Ste 200</p>
                <p>Houston, TX 77002</p>
              </div>
              <a href="mailto:hello@quesiono.com" className="block hover:text-vanilla transition-colors">
                hello@quesiono.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-vanilla/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-vanilla/40 text-sm">
            © {new Date().getFullYear()} Quesiono. All rights reserved.
          </p>
          <p className="text-vanilla/40 text-sm">
            Built with passion by Quesiono
          </p>
        </div>
      </div>
    </footer>
  );
}
