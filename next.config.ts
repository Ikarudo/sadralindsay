import type { NextConfig } from 'next'

// Check if we're building for GitHub Pages or local development
const isGithubPages = process.env.GITHUB_PAGES === 'true'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  // Only use basePath and assetPrefix for GitHub Pages deployment
  ...(isGithubPages ? {
    basePath: '/sadralindsay',
  assetPrefix: '/sadralindsay',
  } : {}),
  images: {
    unoptimized: true
  }
}

export default nextConfig