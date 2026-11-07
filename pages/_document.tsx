import { Html, Head, Main, NextScript } from 'next/document'

const ICON_VERSION = 2

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Bump ICON_VERSION when the icons change so browsers drop their cached copies. */}
        <link rel="icon" href={`/favicon.ico?v=${ICON_VERSION}`} sizes="48x48" />
        <link rel="icon" href={`/icon.svg?v=${ICON_VERSION}`} type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href={`/apple-touch-icon.png?v=${ICON_VERSION}`} />
        <link rel="mask-icon" href={`/safari-pinned-tab.svg?v=${ICON_VERSION}`} color="#c59d5f" />
        <link rel="manifest" href={`/site.webmanifest?v=${ICON_VERSION}`} />
        <meta name="theme-color" content="#0b131c" />
        <meta name="msapplication-TileColor" content="#0b131c" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
