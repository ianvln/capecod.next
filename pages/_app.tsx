import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { SITE_URL } from '../api/contact'
import heroImage from '../assets/background.jpg'
import { DEFAULT_LOCALE, LOCALES } from '../i18n'
import { useTranslation } from '../i18n/useTranslation'

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const sans = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const urlFor = (locale: string) => `${SITE_URL}${locale === DEFAULT_LOCALE ? '' : `/${locale}`}`

function MyApp({ Component, pageProps }: AppProps) {
  const { t, locale } = useTranslation()

  return (
    <>
      <Head>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="canonical" href={urlFor(locale)} />
        {LOCALES.map(l => (
          <link key={l} rel="alternate" hrefLang={l} href={urlFor(l)} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={urlFor(DEFAULT_LOCALE)} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Cape Cod" />
        <meta property="og:title" content={t.meta.title} />
        <meta property="og:description" content={t.meta.description} />
        <meta property="og:url" content={urlFor(locale)} />
        <meta property="og:image" content={`${SITE_URL}${heroImage.src}`} />
        <meta property="og:locale" content={t.meta.ogLocale} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <style jsx global>{`
        :root {
          --font-serif: ${serif.style.fontFamily};
          --font-sans: ${sans.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
