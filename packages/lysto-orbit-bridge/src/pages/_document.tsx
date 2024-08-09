import { Html, Head, Main, NextScript } from 'next/document'

export const siteTitle = 'Lysto Bridge'
const siteDomain = ''
const siteDescription = 'LystoBridge'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/images/ArbitrumLogo.svg" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        </style>

        <meta name="theme-color" content="#001321" />
        <meta name="description" content={siteDescription} />
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content={siteDomain} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={`/images/preview.png`} />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="" />
        <meta property="twitter:url" content={siteDomain} />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={`/images/preview.png`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
