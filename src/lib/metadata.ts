/**
 * One place to build page metadata, so canonical URLs, OG cards and Twitter
 * cards can never be half-filled on a new route.
 */

import type { Metadata } from "next";
import { site, absoluteUrl, ogImage } from "./site";

export function buildMetadata(params: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  /** Short label rendered above the title on the OG card. */
  eyebrow?: string;
  ogType?: "website" | "article";
  cardType?: "default" | "service" | "article" | "work";
  publishedTime?: string;
  modifiedTime?: string;
  /** Set true for thin pages that should stay out of the index. */
  noIndex?: boolean;
}): Metadata {
  const {
    title,
    description,
    path,
    keywords,
    eyebrow,
    ogType = "website",
    cardType = "default",
    publishedTime,
    modifiedTime,
    noIndex,
  } = params;

  const url = absoluteUrl(path);
  const image = ogImage({ title, eyebrow, type: cardType });

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: ogType,
      url,
      siteName: site.name,
      title,
      description,
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
