import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "@/styles/globals.css";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const libre = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-libre",
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3001"),
  title: {
    default: "Quesiono - Web Design & Digital Agency",
    template: "%s | Quesiono",
  },
  description: "Quesiono is a digital agency building bold websites, SEO strategies, automation systems, and brand identities for growing businesses worldwide.",
  openGraph: {
    type: "website",
    url: "http://localhost:3001",
    siteName: "Quesiono",
    title: "Quesiono - Web Design & Digital Agency",
    description: "Quesiono is a digital agency building bold websites, SEO strategies, automation systems, and brand identities for growing businesses worldwide.",
    images: [
      {
        url: "http://localhost:3001/api/og",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quesiono — Web Design & Digital Agency",
    description: "Quesiono is a digital agency building bold websites, SEO strategies, automation systems, and brand identities for growing businesses worldwide.",
    images: ["http://localhost:3001/api/og"],
  },
};

const GTM_ID = process.env.GTM_ID || "GTM-XXXXXX";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/logos/quesiono-favicon.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Quesiono",
              "url": "http://localhost:3001",
              "logo": "http://localhost:3001/images/quesiono-logo.png",
              "description": "Quesiono is a full-service digital agency offering web development, SEO, branding, automation, and content writing for businesses worldwide.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4201 Main St, Ste 200",
                "addressLocality": "Houston",
                "addressRegion": "TX",
                "postalCode": "77002",
                "addressCountry": "US",
              },
              "sameAs": [
                "https://www.linkedin.com/company/quesiono",
                "https://www.instagram.com/quesiono",
                "https://twitter.com/quesiono",
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${libre.variable} font-inter bg-cream text-text-dark`}>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <NavBar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
