/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['nl-BE', 'fr-BE'],
    defaultLocale: 'nl-BE',
  }
}

module.exports = nextConfig
