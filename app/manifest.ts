import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'atidele',
    short_name: 'Home page',
    description: 'The only way to do great work is to love what you do',
    start_url: '/',
    display: 'standalone',
    background_color: '#3b0664',
    theme_color: '#3b0664',
    icons: [
      {
        src: 'images/favicon.svg',
        sizes: '64x64 32x32 24x24 16x16',
        type: 'image/x-icon',
      },
      {
        src: 'images/favicon.png',
        sizes: '144x144',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'images/favicon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
