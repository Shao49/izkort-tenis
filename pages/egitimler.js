import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import EducationSlider from '../components/EducationSlider'

export default function Egitimler() {
  return (
    <>
      <Head>
        <title>Eğitimler - İztenis Akademi</title>
        <meta
          name="description"
          content="İztenis Akademi'de başlangıçtan performans düzeyine kadar her seviyeye uygun tenis eğitim programlarımızı keşfedin."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.iztenisakademi.com/egitimler" />

        {/* Open Graph / Sosyal Medya için */}
        <meta property="og:title" content="Eğitimler - İztenis Akademi" />
        <meta property="og:description" content="İzmir’de tenis eğitimi arayanlar için İztenis Akademi'nin her yaş grubuna uygun eğitim programları." />
        <meta property="og:url" content="https://www.iztenisakademi.com/egitimler" />
        <meta property="og:type" content="website" />
       <meta property="og:image" content="https://www.iztenisakademi.com/deneme6.jpg" />
      </Head>

      <Header />
      <EducationSlider />
      <Footer />
    </>
  )
}
