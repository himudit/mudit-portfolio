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
  title = 'Ronit Jadhav - Geospatial Developer & Software Engineer',
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
    'Geospatial Developer',
    'Software Engineer',
    'Germany',
    'ArcGIS',
    'QGIS',
    'OpenLayers',
    'Leaflet',
    'Python',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'PostGIS',
    'GIS',
    'Web Development',
    'Data Visualization',
    'Maps',
    'Cartography',
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
      siteName: 'Ronit Jadhav Portfolio',
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
      creator: '@ronitjadhav', // Update with actual Twitter handle
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
  author = 'Ronit Jadhav',
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
      name: 'Ronit Jadhav',
    },
    dateCreated,
    keywords: technologies.join(', '),
  };
}
