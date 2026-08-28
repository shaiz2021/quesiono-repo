/**
 * Typed JSON-LD builders.
 *
 * Every builder returns a plain object; render it with the <JsonLd> component
 * in src/components/seo/JsonLd.tsx. Keeping the shapes here means a schema fix
 * lands in one place instead of across 49 route files.
 *
 * Deliberately absent: AggregateRating. Emitting a star rating without
 * verifiable, user-submitted reviews violates Google's structured-data
 * policy and risks a manual action. Individual Review objects for named,
 * attributable testimonials are fine and are built below.
 */

import { site, absoluteUrl } from "./site";

type Json = Record<string, unknown>;

const ORG_ID = `${site.url}/#organization`;
const SITE_ID = `${site.url}/#website`;

/** The agency itself. Referenced by @id from every other node. */
export function organizationSchema(): Json {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    description: site.description,
    foundingDate: site.founded,
    email: site.email,
    telephone: site.phone,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/images/logos/quesiono-logo-dark.svg"),
      width: 320,
      height: 72,
    },
    image: absoluteUrl("/images/logos/quesiono-icon.svg"),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    sameAs: [site.social.linkedin, site.social.instagram, site.social.x],
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    knowsAbout: [
      "Web design",
      "Web development",
      "Search engine optimization",
      "E-commerce development",
      "Content strategy",
      "Conversion rate optimization",
    ],
  };
}

/** Physical presence. Separate node so opening hours and geo stay scoped. */
export function localBusinessSchema(): Json {
  return {
    "@type": "LocalBusiness",
    "@id": `${site.url}/#localbusiness`,
    name: site.name,
    url: site.url,
    parentOrganization: { "@id": ORG_ID },
    email: site.email,
    telephone: site.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: site.hours.days,
        opens: site.hours.opens,
        closes: site.hours.closes,
      },
    ],
  };
}

/** The website, with the sitewide search action. */
export function webSiteSchema(): Json {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: site.url,
    name: site.name,
    description: site.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${site.url}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function webPageSchema(params: {
  path: string;
  name: string;
  description: string;
}): Json {
  return {
    "@type": "WebPage",
    "@id": `${absoluteUrl(params.path)}#webpage`,
    url: absoluteUrl(params.path),
    name: params.name,
    description: params.description,
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID },
    inLanguage: "en-US",
  };
}

export function serviceSchema(params: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  offers?: { name: string; price: string; description?: string }[];
}): Json {
  const schema: Json = {
    "@type": "Service",
    "@id": `${absoluteUrl(params.path)}#service`,
    name: params.name,
    description: params.description,
    url: absoluteUrl(params.path),
    serviceType: params.serviceType,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Place", name: "Worldwide" },
  };

  if (params.offers?.length) {
    schema.hasOfferCatalog = {
      "@type": "OfferCatalog",
      name: `${params.name} packages`,
      itemListElement: params.offers.map((offer) => ({
        "@type": "Offer",
        name: offer.name,
        price: offer.price.replace(/[^0-9]/g, "") || undefined,
        priceCurrency: "USD",
        description: offer.description,
      })),
    };
  }

  return schema;
}

export function breadcrumbSchema(
  trail: { name: string; href: string }[]
): Json {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.href),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]): Json {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(params: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  image?: string;
  wordCount?: number;
  section?: string;
  keywords?: string[];
}): Json {
  return {
    "@type": "BlogPosting",
    "@id": `${absoluteUrl(params.path)}#article`,
    headline: params.title,
    description: params.description,
    url: absoluteUrl(params.path),
    mainEntityOfPage: { "@id": `${absoluteUrl(params.path)}#webpage` },
    datePublished: params.datePublished,
    dateModified: params.dateModified ?? params.datePublished,
    author: {
      "@type": "Person",
      name: params.author,
      url: absoluteUrl("/about"),
    },
    publisher: { "@id": ORG_ID },
    image: params.image ? absoluteUrl(params.image) : undefined,
    wordCount: params.wordCount,
    articleSection: params.section,
    keywords: params.keywords?.join(", "),
    inLanguage: "en-US",
  };
}

export function caseStudySchema(params: {
  name: string;
  description: string;
  path: string;
  image?: string;
  client: string;
  datePublished?: string;
  keywords?: string[];
}): Json {
  return {
    "@type": "CreativeWork",
    "@id": `${absoluteUrl(params.path)}#casestudy`,
    name: params.name,
    description: params.description,
    url: absoluteUrl(params.path),
    creator: { "@id": ORG_ID },
    about: params.client,
    image: params.image ? absoluteUrl(params.image) : undefined,
    datePublished: params.datePublished,
    keywords: params.keywords?.join(", "),
    inLanguage: "en-US",
  };
}

export function itemListSchema(params: {
  name: string;
  items: { name: string; href: string; description?: string }[];
}): Json {
  return {
    "@type": "ItemList",
    name: params.name,
    numberOfItems: params.items.length,
    itemListElement: params.items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: absoluteUrl(item.href),
      description: item.description,
    })),
  };
}

/**
 * Individual attributable reviews. Note there is no aggregate rating and no
 * numeric star value — these are named client quotes, so they are represented
 * honestly as Review nodes with a reviewBody and no invented score.
 */
export function reviewSchema(
  reviews: { quote: string; name: string; role: string; company: string }[]
): Json {
  return {
    "@type": "ItemList",
    name: `Client reviews of ${site.name}`,
    itemListElement: reviews.map((review, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Review",
        reviewBody: review.quote,
        author: {
          "@type": "Person",
          name: review.name,
          jobTitle: review.role,
          worksFor: { "@type": "Organization", name: review.company },
        },
        itemReviewed: { "@id": ORG_ID },
      },
    })),
  };
}

export function jobPostingSchema(params: {
  title: string;
  description: string;
  employmentType: string;
  path: string;
  datePosted: string;
}): Json {
  return {
    "@type": "JobPosting",
    title: params.title,
    description: params.description,
    employmentType: params.employmentType,
    url: absoluteUrl(params.path),
    datePosted: params.datePosted,
    hiringOrganization: { "@id": ORG_ID },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: {
      "@type": "Country",
      name: "Worldwide",
    },
    directApply: true,
  };
}

/**
 * Wraps nodes in a single @graph. One script tag per page beats several,
 * and @id cross-references resolve inside the graph.
 */
export function graph(...nodes: Json[]): Json {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean),
  };
}
