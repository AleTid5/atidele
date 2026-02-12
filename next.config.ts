import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/di9kdiffd/image/upload/v1707065714/**',
        search: '',
      },
    ],
    formats: ['image/webp'],
  },
};

export default nextConfig;
