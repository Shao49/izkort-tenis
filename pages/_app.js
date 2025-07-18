import '../styles/globals.css'
import Header from '../components/Header'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Head>
        <title>İZKORT Tenis Akademi</title>
        <meta name="description" content="İzmir'in en köklü tenis akademisi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

