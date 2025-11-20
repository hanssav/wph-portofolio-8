import type { NextConfig } from 'next';

/* eslint-disable @typescript-eslint/no-require-imports */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default withBundleAnalyzer(nextConfig);
