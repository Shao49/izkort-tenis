import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Antrenorler.module.css'
import Image from 'next/image'

const antrenorler = [
  {
    ad: 'Traian Badiu',
    unvan: 'Başantrenör',
    aciklama: 'Rumen asıllı başantrenörümüz Traian Badiu, 40 yılı aşkın süredir tenis dünyasında aktif olarak yer almaktadır. Uluslararası deneyimi, oyuncu gelişimi konusundaki derin bilgisi ve özel teknik altyapısıyla hem profesyonel hem de amatör sporculara liderlik etmektedir. İztenis Akademinin vizyonunu sahaya taşıyan Badiu, sporcu disiplini, etik değerler ve teknik gelişim açısından eşsiz bir rehberdir.',
    resim: '/antrenör1.jpeg',
  },
  {
    ad: 'Ramazan Kırmızıyıldız',
    unvan: 'Antrenör',
    aciklama: '10 yıllık tenis geçmişine sahip olan Ramazan Kırmızıyıldız, özellikle çocuklar ve genç yaş gruplarında performans gelişimi üzerine uzmanlaşmıştır. Oyuncuların temel teknik becerilerini modern antrenman metodlarıyla birleştiren Kırmızıyıldız, sporcuların hem fiziksel hem de zihinsel olarak gelişimine katkı sağlamaktadır. İztenis bünyesinde genç yeteneklerin yolunu aydınlatan güvenilir bir eğitmendir.',
    resim: '/antrenör2.jpeg',
  },
]

export default function Antrenorler() {
  return (
    <>
      <Head>
        <title>Antrenörlerimiz - İztenis Akademi</title>
        <meta
          name="description"
          content="İzmir'de tenis eğitimi veren uzman antrenör kadromuzu yakından tanıyın. Traian Badiu ve Ramazan Kırmızıyıldız ile profesyonel gelişim."
        />
        <link rel="canonical" href="https://www.iztenisakademi.com/antrenorler" />
        <meta property="og:title" content="İzmir Tenis Antrenörleri - İztenis Akademi" />
        <meta property="og:description" content="İztenis Akademi'nin profesyonel tenis antrenörleriyle tanışın. Çocuklar ve yetişkinler için özel tenis eğitimleri." />
        <meta property="og:url" content="https://www.iztenisakademi.com/antrenorler" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.iztenisakademi.com/CHASE.png" />
      </Head>

      <Header />
      <section className={styles.section}>
        <h1 className={styles.baslik}>Antrenörlerimiz</h1>
        <div className={styles.kartlar}>
          {antrenorler.map((ant, i) => (
            <div key={i} className={styles.kart}>
              <div className={styles.resimKapsayici}>
                <Image src={ant.resim} alt={ant.ad} layout="fill" objectFit="cover" />
              </div>
              <div className={styles.kartIcerik}>
                <h2>{ant.ad}</h2>
                <p className={styles.unvan}>{ant.unvan}</p>
                <p>{ant.aciklama}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}
