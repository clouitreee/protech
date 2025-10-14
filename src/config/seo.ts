/**
 * SEO Configuration and JSON-LD Helpers for Tech Hilfe Pro NRW
 * Provides defaults, metadata templates, and Schema.org structured data generators
 */

import { companyInfo } from './navigation';

/**
 * Default SEO Configuration
 */
export const seoDefaults = {
  titleTemplate: '%s | Tech Hilfe Pro NRW',
  defaultTitle: 'Tech Hilfe Pro NRW - IT-Dienstleister & Managed Services für KMU in NRW',
  description:
    'Professionelle IT-Betreuung für kleine und mittelständische Unternehmen in NRW. Managed Services, IT-Support, Remote- und Vor-Ort-Service aus Köln.',
  keywords: [
    'IT-Dienstleister NRW',
    'Managed Services Köln',
    'IT-Support KMU',
    'MSP Nordrhein-Westfalen',
    'IT-Betreuung',
    'Remote IT-Support',
    'Vor-Ort IT-Service',
  ],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://techhilfepro.de',
    siteName: 'Tech Hilfe Pro NRW',
    images: [
      {
        url: 'https://techhilfepro.de/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tech Hilfe Pro NRW - IT-Dienstleister für KMU',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    site: '@techhilfepro', // TODO: Update with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/**
 * Generate page-specific metadata
 */
export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: Array<{ url: string; width: number; height: number; alt: string }>;
  };
  noindex?: boolean;
}

export function generateMetadata(page: PageMetadata) {
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords?.join(', '),
    openGraph: {
      ...seoDefaults.openGraph,
      title: page.openGraph?.title || page.title,
      description: page.openGraph?.description || page.description,
      images: page.openGraph?.images || seoDefaults.openGraph.images,
    },
    twitter: {
      ...seoDefaults.twitter,
      title: page.openGraph?.title || page.title,
      description: page.openGraph?.description || page.description,
      images: page.openGraph?.images?.[0]?.url || seoDefaults.openGraph.images[0].url,
    },
    robots: page.noindex
      ? {
          index: false,
          follow: false,
        }
      : seoDefaults.robots,
    alternates: {
      canonical: page.canonical,
    },
  };
}

/**
 * JSON-LD Structured Data Generators
 */

/**
 * LocalBusiness Schema
 * Use on homepage and contact page
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://techhilfepro.de/#organization',
    name: companyInfo.name,
    legalName: companyInfo.legalName,
    url: 'https://techhilfepro.de',
    logo: 'https://techhilfepro.de/logo.png',
    image: 'https://techhilfepro.de/og-image.jpg',
    description: seoDefaults.description,
    telephone: companyInfo.contact.phone,
    email: companyInfo.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.city,
      postalCode: companyInfo.address.postalCode,
      addressRegion: companyInfo.address.region,
      addressCountry: companyInfo.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '50.9467', // Cologne coordinates - TODO: Update with exact location
      longitude: '6.9333',
    },
    areaServed: {
      '@type': 'State',
      name: 'Nordrhein-Westfalen',
    },
    priceRange: '€€',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      // TODO: Add social media profiles when available
      // 'https://www.linkedin.com/company/tech-hilfe-pro-nrw',
      // 'https://www.facebook.com/techhilfepro',
    ],
  };
}

/**
 * Organization Schema
 * Use on about page
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://techhilfepro.de/#organization',
    name: companyInfo.name,
    legalName: companyInfo.legalName,
    url: 'https://techhilfepro.de',
    logo: 'https://techhilfepro.de/logo.png',
    description: seoDefaults.description,
    foundingDate: '2020', // TODO: Update with actual founding date
    founders: [
      {
        '@type': 'Person',
        name: 'TODO: Founder Name', // TODO: Update with actual founder info
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.address.street,
      addressLocality: companyInfo.address.city,
      postalCode: companyInfo.address.postalCode,
      addressRegion: companyInfo.address.region,
      addressCountry: companyInfo.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: companyInfo.contact.phone,
      email: companyInfo.contact.email,
      contactType: 'customer service',
      areaServed: 'DE',
      availableLanguage: ['German', 'Spanish'],
    },
  };
}

/**
 * BreadcrumbList Schema
 * Use on all pages except homepage
 */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * FAQPage Schema
 * Use on FAQ page and pages with FAQ sections
 */
export interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Service Schema
 * Use on service detail pages
 */
export interface ServiceInfo {
  name: string;
  description: string;
  url: string;
  image?: string;
  provider?: {
    name: string;
    url: string;
  };
  areaServed?: string;
  serviceType?: string;
}

export function generateServiceSchema(service: ServiceInfo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    image: service.image || 'https://techhilfepro.de/og-image.jpg',
    provider: {
      '@type': 'Organization',
      name: service.provider?.name || companyInfo.name,
      url: service.provider?.url || 'https://techhilfepro.de',
    },
    areaServed: {
      '@type': 'State',
      name: service.areaServed || 'Nordrhein-Westfalen',
    },
    serviceType: service.serviceType || 'IT Support',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceRange: '€€',
    },
  };
}

/**
 * BlogPosting Schema
 * Use on blog post pages
 */
export interface BlogPostInfo {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
    url?: string;
  };
  url: string;
  keywords?: string[];
}

export function generateBlogPostSchema(post: BlogPostInfo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.headline,
    description: post.description,
    image: post.image,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: post.author.url,
    },
    publisher: {
      '@type': 'Organization',
      name: companyInfo.name,
      logo: {
        '@type': 'ImageObject',
        url: 'https://techhilfepro.de/logo.png',
      },
    },
    url: post.url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.url,
    },
    keywords: post.keywords?.join(', '),
  };
}

/**
 * Review/AggregateRating Schema
 * Use on testimonials/references page
 */
export interface ReviewInfo {
  author: string;
  reviewBody: string;
  reviewRating: number; // 1-5
  datePublished: string;
}

export function generateReviewSchema(review: ReviewInfo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: companyInfo.name,
    },
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewBody: review.reviewBody,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.reviewRating,
      bestRating: 5,
      worstRating: 1,
    },
    datePublished: review.datePublished,
  };
}

export function generateAggregateRatingSchema(reviews: ReviewInfo[]) {
  const totalRating = reviews.reduce((sum, review) => sum + review.reviewRating, 0);
  const averageRating = totalRating / reviews.length;

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://techhilfepro.de/#organization',
    name: companyInfo.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating.toFixed(1),
      reviewCount: reviews.length,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

/**
 * WebSite Schema with SearchAction
 * Use on homepage
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://techhilfepro.de/#website',
    url: 'https://techhilfepro.de',
    name: 'Tech Hilfe Pro NRW',
    description: seoDefaults.description,
    publisher: {
      '@id': 'https://techhilfepro.de/#organization',
    },
    inLanguage: 'de-DE',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://techhilfepro.de/suche?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Helper to inject JSON-LD into page
 * Use in Next.js pages/layouts
 */
export function injectJsonLd(schema: object | object[]) {
  const schemaArray = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {schemaArray.map((s, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}

