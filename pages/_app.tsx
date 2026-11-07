import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { LOCALES, DEFAULT_LOCALE, toLocale, MESSAGES } from '../i18n'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.capecod.be'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const locale = toLocale(router.locale)
  const { meta } = MESSAGES[locale]
  const urlFor = (l: string) => `${SITE_URL}${l === DEFAULT_LOCALE ? '' : `/${l}`}`

  return (
    <>
      <Head>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          {LOCALES.map(l => (
            <link key={l} rel="alternate" hrefLang={l} href={urlFor(l)} />
          ))}
          <link rel="alternate" hrefLang="x-default" href={urlFor(DEFAULT_LOCALE)} />
      </Head>
      <Component {...pageProps} />
    </>
    
  )
}

export default MyApp
