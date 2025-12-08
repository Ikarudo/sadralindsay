import type { NextConfig } from 'next';

const isGithubPages = process.env.GITHUB_PAGES === 'true';

// For GitHub Pages: your repo name (change only if you rename the repo)
const repoName = 'sadralindsay';

const nextConfig: NextConfig = {
  output: 'export',                    // This replaces `next export` → you're good!
  trailingSlash: true,                 // Ensures clean URLs on GitHub Pages
  images: {
    unoptimized: true,                 // Required for static export (Next Image → regular <img>)
  },

  // Only apply basePath & assetPrefix when deploying to GitHub Pages
  ...(isGithubPages && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,      // Note the trailing slash!
  }),
};

export default nextConfig;