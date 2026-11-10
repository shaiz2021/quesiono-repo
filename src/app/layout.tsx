import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "@/styles/globals.css";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { AnalyticsConsent } from "@/components/sections/AnalyticsConsent";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { Attribution } from "@/components/sections/Attribution";
import { JsonLd } from "@/components/seo/JsonLd";

import { site } from "@/lib/site";
import { buildNavTree } from "@/lib/nav";
import { graph, organizationSchema, webSiteSchema } from "@/lib/schema";

/* Bricolage Grotesque has no italic — it carries weight and width instead.
   Variable across 200–800, so no weight array is needed. */
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    locale: "en_US",
    images: [{ url: `${site.url}/api/og`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [`${site.url}/api/og`],
  },
  icons: {
    icon: [
      { url: "/images/logos/quesiono-icon.svg", type: "image/svg+xml" },
      { url: "/images/logos/quesiono-favicon.png", type: "image/png" },
    ],
    apple: "/images/logos/quesiono-favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0F1C",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const GTM_ID =
  /^GTM-[A-Z0-9]+$/.test(process.env.GTM_ID ?? "") &&
  process.env.GTM_ID !== "GTM-XXXXXX"
    ? process.env.GTM_ID
    : undefined;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  /* Built here rather than inside NavBar: the nav is a client component, and
     importing the service data there would ship every service page's body copy
     to the browser. */
  const navTree = buildNavTree();

  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <JsonLd data={graph(organizationSchema(), webSiteSchema())} />
      </head>
      <body className="font-body bg-cream text-text-dark antialiased">
        <ScrollProgress />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-champagne focus:px-5 focus:py-3 focus:font-semibold focus:text-ink"
        >
          Skip to content
        </a>

        <Attribution />
        <NavBar tree={navTree} />
        <main id="main">{children}</main>
        <Footer />
        <AnalyticsConsent containerId={GTM_ID} />
      </body>
    </html>
  );
}
