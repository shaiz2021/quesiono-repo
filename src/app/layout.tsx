import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "@/styles/globals.css";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { JsonLd } from "@/components/seo/JsonLd";
import { Analytics } from "@vercel/analytics/react";
import { site } from "@/lib/site";
import { buildNavTree } from "@/lib/nav";
import {
  graph,
  organizationSchema,
  localBusinessSchema,
  webSiteSchema,
} from "@/lib/schema";

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

/* Only inject GTM when a real container ID is configured. The previous
   fallback loaded "GTM-XXXXXX", which is a wasted request against a
   container that cannot exist. */
const GTM_ID = process.env.GTM_ID;

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
        <JsonLd
          data={graph(
            organizationSchema(),
            localBusinessSchema(),
            webSiteSchema()
          )}
        />
        {GTM_ID && (
          <script
            dangerouslySetInnerHTML={{
              /* Gated on Do Not Track and Global Privacy Control. GTM is the only
                 thing on the site that can set a cookie, so honouring the signal
                 here is what makes the cookie policy's claim true. */
              __html: `(function(w,d,s,l,i){
if(w.doNotTrack==='1'||navigator.doNotTrack==='1'||navigator.msDoNotTrack==='1'||navigator.globalPrivacyControl===true){return;}
w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
        )}
      </head>
      <body className="font-body bg-cream text-text-dark antialiased">
        {GTM_ID && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        )}

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-champagne focus:px-5 focus:py-3 focus:font-semibold focus:text-ink"
        >
          Skip to content
        </a>

        <ScrollProgress />
        <NavBar tree={navTree} />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
