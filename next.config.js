/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['nl', 'fr'],
    defaultLocale: 'nl',
  },
  async redirects() {
    return [
      // The French page used to live at /fr/fr because of a misconfigured locale link.
      { source: '/fr/fr', destination: '/fr', permanent: true, locale: false },
    ]
  }
}

module.exports = nextConfig
