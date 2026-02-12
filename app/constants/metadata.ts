import type { Metadata, Viewport } from 'next';

const title = 'Home';
const description = "Come and see what I've been up to!";
const url = 'https://atidele.dev';

const images = [
  {
    url: '/images/og-image.webp',
    width: 1200,
    height: 630,
    type: 'image/webp',
  },
  {
    url: '/images/favicon.svg',
    width: 64,
    height: 64,
    type: 'image/svg+xml',
  },
];

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url,
    images,
  },
  twitter: {
    site: url,
    creator: 'Alejandro Tidele',
    creatorId: '@AleTidele5',
    title,
    description,
    images,
  },
};

export const viewport: Viewport = {
  themeColor: '#3b0664',
};
