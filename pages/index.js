import Head from 'next/head'
import Hero from '../components/Hero'
import Trainings from '../components/Trainings'
import Advantages from '../components/Advantages'
import Stats from '../components/Stats'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>İztenis Akademi - İzmir Tenis Dersleri</title>
        <meta
          name="description"
          content="İztenis Akademi, İzmir'de her yaş grubuna uygun tenis eğitimleri sunar. Sporu yaşam biçimi haline getirmek isteyenler için profesyonel çözümler."
        />
        <meta
          name="keywords"
          content="İzmir tenis akademisi, tenis kursu İzmir, çocuk tenis eğitimi, yetişkin tenis dersi, İzmir tenis kulübü, Bostanlı tenis kortu, Karşıyaka tenis"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.iztenisakademi.com/" />

        {/* Open Graph (Instagram, Facebook, WhatsApp vb. için) */}
        <meta property="og:title" content="İztenis Akademi - İzmir Tenis Eğitimi" />
        <meta
          property="og:description"
          content="İzmir'de tenis eğitimi için İztenis Akademi! Başlangıçtan performansa kadar tüm seviyelerde profesyonel eğitim."
        />
        <meta property="og:url" content="https://www.iztenisakademi.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.iztenisakademi.com/CHASE.png" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:site_name" content="İztenis Akademi" />
      </Head>

      <Hero />
      <Trainings />
      <Advantages />
      <Stats />
      <Footer />
    </>
  )
}
