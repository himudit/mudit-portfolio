import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Metadata } from 'next';
import { ForceDarkTheme } from './ForceDarkTheme';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap', // Better font loading performance
  preload: true,
  variable: '--font-space-grotesk',
});

// Metadata needs to be exported this way in Next.js 13+
export const metadata: Metadata = {
  title: {
    default: 'Mudit Garg Full-Stack Developer & Software Engineer',
    template: '%s | Mudit Garg',
  },
  description:
    " I'm a Full-Stack developer who transforms complex problems into simple, elegant solutions — from dynamic dashboards to AI-powered tools.",
  keywords: [
    'Full Stack Developer',
    'Software Engineer',
    'India',
    'Leaflet',
    'Python',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'PostGIS',
    'MongoDB',
    'Node.js',
    'Express.js',
    'AWS',
    'Prisma',
    'Web Development',
    'Data Visualization',
    'Maps',
  ],
  authors: [{ name: 'Mudit Garg', url: 'https://github.com/himudit' }],
  creator: 'Mudit Garg',
  publisher: 'Mudit Garg',
  metadataBase: new URL('https://github.com/himudit'),
  alternates: {
    canonical: 'https://github.com/himudit',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Mudit Garg - Full-Stack Developer & Software Engineer',
    description:
      " I'm a Full-Stack developer who transforms complex problems into simple, elegant solutions — from dynamic dashboards to AI-powered tools.",
    url: 'https://github.com/himudit',
    siteName: 'Mudit Garg Portfolio',
    images: [
      {
        url: '/muditLogo.png',
        width: 1200,
        height: 630,
        alt: 'Mudit Garg - Full-Stack Developer & Software Engineer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mudit Garg - Full-Stack Developer & Software Engineer',
    description:
      "I'm a full-stack developer who transforms complex problems into simple, elegant solutions — from dynamic dashboards to AI-powered tools.",
    images: ['/muditLogo.png'],
    creator: '@ronitjadhav', // Add your Twitter handle if you have one
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual code when available
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Portfolio Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mudit Garg',
    jobTitle: 'Full-Stack Developer & Software Engineer',
    description:
      'Full-Stack Developer and Software Engineer specializing in maps, data visualization, and web technologies.',
    url: 'https://ronitjadhav.github.io/ronit.io',
    image: '/muditLogo.png',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Germany',
    },
    knowsAbout: [
      'Full Stack Developer',
      'Software Engineer',
      'India',
      'Leaflet',
      'Python',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'PostGIS',
      'MongoDB',
      'Node.js',
      'Express.js',
      'AWS',
      'Prisma',
      'Web Development',
      'Data Visualization',
      'Maps',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    sameAs: [
      'https://github.com/himudit',
      'https://www.linkedin.com/in/mudit-garg-03m',
      // Add other social profiles as needed
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ForceDarkTheme />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
