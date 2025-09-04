import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/sadralindsay', // Replace with your actual repo name
  assetPrefix: '/sadralindsay',
  images: {
    unoptimized: true
  }
}

export default nextConfig