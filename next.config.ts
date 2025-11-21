import type { NextConfig } from 'next';

/* eslint-disable @typescript-eslint/no-require-imports */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  transpilePackages: ['framer-motion', 'motion'],

  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  reactStrictMode: true,
  poweredByHeader: false,

  // Experimental features (opsional, untuk optimasi lebih lanjut)
  experimental: {
    esmExternals: true, // use ES modules for faster load

    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default withBundleAnalyzer(nextConfig);
