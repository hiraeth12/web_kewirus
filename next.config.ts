import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['via.placeholder.com'],
    unoptimized: process.env.NODE_ENV === 'development' ? false : true,
  },
};

export default nextConfig;
