import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Google Analytics script */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-R7Y0H1T300"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-R7Y0H1T300');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
