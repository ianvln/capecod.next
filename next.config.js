/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['nl', 'fr'],
    defaultLocale: 'nl',
  }
}

module.exports = nextConfig
