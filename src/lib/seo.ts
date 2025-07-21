import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export function generateSEO({
  title = 'Mudit Garg - Full Stack Developer & Software Engineer',
  description = "Based in Germany, I'm a Geospatial Developer and Software Engineer specializing in maps, data visualization, and web technologies.",
  keywords = [],
  image = 'https://ronitjadhav.github.io/ronit.io/ronit.png',
  url = 'https://ronitjadhav.github.io/ronit.io',
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
}: SEOProps = {}): Metadata {
  const baseKeywords = [
    'Software Engineer',
    'Leaflet',
    'Python',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'NodeJS',
    'ExpressJS',
    'MongoDB',
    'PostgreSQL',
    'Web Development',
    'Data Visualization',
  ];

  const allKeywords = [...baseKeywords, ...keywords, ...tags];

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      title,
      description,
      url,
      siteName: 'Mudit Garg Portfolio',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateArticleSchema({
  headline,
  description,
  author = 'Mudit Garg',
  datePublished,
  dateModified,
  image,
  url,
}: {
  headline: string;
  description: string;
  author?: string;
  datePublished: string;
  dateModified?: string;
  image: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author: {
      '@type': 'Person',
      name: author,
    },
    datePublished,
    dateModified: dateModified || datePublished,
    image,
    url,
    publisher: {
      '@type': 'Person',
      name: author,
    },
  };
}

export function generateProjectSchema({
  name,
  description,
  url,
  image,
  technologies,
  dateCreated,
}: {
  name: string;
  description: string;
  url: string;
  image: string;
  technologies: string[];
  dateCreated: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    image,
    applicationCategory: 'WebApplication',
    operatingSystem: 'Any',
    author: {
      '@type': 'Person',
      name: 'Mudit Garg',
    },
    dateCreated,
    keywords: technologies.join(', '),
  };
}
