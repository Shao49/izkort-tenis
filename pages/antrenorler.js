import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Antrenorler.module.css'
import Image from 'next/image'

const antrenorler = [
  {
    ad: 'Traian Badiu',
    unvan: 'Başantrenör',
    aciklama: 'Rumen asıllı başantrenörümüz Traian Badiu, 40 yılı aşkın süredir tenis dünyasında aktif olarak yer almaktadır. Uluslararası deneyimi, oyuncu gelişimi konusundaki derin bilgisi ve özel teknik altyapısıyla hem profesyonel hem de amatör sporculara liderlik etmektedir. İZKORT Tenis Akademinin vizyonunu sahaya taşıyan Badiu, sporcu disiplini, etik değerler ve teknik gelişim açısından eşsiz bir rehberdir.',
    resim: '/antrenör1.jpeg',
  },
  {
    ad: 'Ramazan Kırmızıyıldız',
    unvan: 'Antrenör',
    aciklama: '10 yıllık tenis geçmişine sahip olan Ramazan Kırmızıyıldız, özellikle çocuklar ve genç yaş gruplarında performans gelişimi üzerine uzmanlaşmıştır. Oyuncuların temel teknik becerilerini modern antrenman metodlarıyla birleştiren Kırmızıyıldız, sporcuların hem fiziksel hem de zihinsel olarak gelişimine katkı sağlamaktadır. İZKORT bünyesinde genç yeteneklerin yolunu aydınlatan güvenilir bir eğitmendir.',
    resim: '/antrenör2.jpeg',
  },
]

export default function Antrenorler() {
  return (
    <>
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
