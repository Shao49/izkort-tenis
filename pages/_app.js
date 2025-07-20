import '../styles/globals.css'
import Header from '../components/Header'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Head>
        <title>İztenis Akademi</title>
        <meta name="description" content="İzmir'in en köklü tenis akademisi" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

