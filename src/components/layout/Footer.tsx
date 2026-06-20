import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, Twitter, Github } from "lucide-react";
import { getServicesByGroup } from "@/data/services";

export function Footer() {
  const webServices = getServicesByGroup("web");
  const seoServices = getServicesByGroup("seo");
  const contentServices = getServicesByGroup("content");

  return (
    <footer className="bg-text-dark pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              {/* <Image
                src="/images/logos/quesiono-icon.svg"
                alt="Quesiono Icon"
                width={40}
                height={40}
                className="w-10 h-10"
              /> */}
              <div>
                <Image
                  src="/images/logos/quesiono-logo-light.svg"
                  alt="Quesiono Logo"
                  width={140}
                  height={40}
                  className="h-10 w-auto"
                />
                {/* <div className="text-vanilla/40 text-[10px] uppercase tracking-widest">Digital Agency</div> */}
              </div>
            </div>
            <p className="text-vanilla/60 mb-6">
              Building digital brands that get found. Serving clients worldwide.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/quesiono" className="text-vanilla/60 hover:text-vanilla">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/quesiono" className="text-vanilla/60 hover:text-vanilla">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/quesiono" className="text-vanilla/60 hover:text-vanilla">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/quesiono" className="text-vanilla/60 hover:text-vanilla">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-vanilla font-bold mb-6">Services</h4>
            <div className="space-y-3">
              {[...webServices, ...seoServices, ...contentServices].map((service) => (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="block text-vanilla/60 hover:text-vanilla"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-vanilla font-bold mb-6">Company</h4>
            <div className="space-y-3">
              <Link href="/about" className="block text-vanilla/60 hover:text-vanilla">
                About Us
              </Link>
              <Link href="/portfolio" className="block text-vanilla/60 hover:text-vanilla">
                Portfolio
              </Link>
              <Link href="/blog" className="block text-vanilla/60 hover:text-vanilla">
                Blog
              </Link>
              <Link href="/contact" className="block text-vanilla/60 hover:text-vanilla">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-vanilla font-bold mb-6">Contact</h4>
            <div className="space-y-3 text-vanilla/60">
              <p>4201 Main St, Ste 200</p>
              <p>Houston, TX 77002</p>
              <a href="mailto:hello@quesiono.com" className="hover:text-vanilla">
                hello@quesiono.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-vanilla/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-vanilla/40 text-sm">
            © {new Date().getFullYear()} Quesiono. All rights reserved.
          </p>
          <p className="text-vanilla/40 text-sm">
            Built by Quesiono
          </p>
        </div>
      </div>
    </footer>
  );
}
