/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repoName = process.env.REPO_NAME || ''
const isSpecialRepo = repoName.endsWith('.github.io')

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd && repoName && !isSpecialRepo ? `/${repoName}` : '',
  assetPrefix: isProd && repoName && !isSpecialRepo ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
