import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
         <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link rel="preconnect" href="https://fonts.gstatic.com"  />
         <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
         ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js"
          strategy="beforeInteractive" defer
        ></Script>
        <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
       />
      </body>
    </Html>
  )
}
