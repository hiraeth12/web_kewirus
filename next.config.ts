import type { NextConfig } from "next";
const isGithubPages = process.env.GITHUB_PAGES === 'true'
const repo = 'web_kewirus'

module.exports = {
  output: 'export',          
  basePath: isGithubPages ? `/${repo}` : '',
  assetPrefix: isGithubPages ? `/${repo}/` : '',
  images: {
    unoptimized: true,
  },
}

const nextConfig: NextConfig = {
  images: {
    domains: ['via.placeholder.com'],
    unoptimized: process.env.NODE_ENV === 'development' ? false : true,
  },
};

export default nextConfig;
