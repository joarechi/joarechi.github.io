/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repoName = process.env.REPO_NAME || ''

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd && repoName ? `/${repoName}` : '',
  assetPrefix: isProd && repoName ? `/${repoName}/` : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
