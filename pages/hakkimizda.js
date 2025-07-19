import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/hakkimizda.module.css'

const Hakkimizda = () => {
  return (
    <>
      <Header />
      <section className={styles.heroSection}>
        <video autoPlay muted loop playsInline className={styles.videoBg}>
          <source src="/izkort3.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h2>Hakkımızda</h2>
            <p>
              İztenis Akademi olarak sporu yaşam tarzı haline getirmeyi hedefleyen bir anlayışla yola çıktık.
              Kurulduğumuz ilk günden itibaren yalnızca tenis öğretmek değil, aynı zamanda spor kültürünü,
              disiplinini ve etik değerlerini genç bireylere aktarmayı ilke edindik.
            </p>
            <p>
              Akademimiz, her yaş grubuna ve her seviyeye uygun eğitim programları ile geniş bir kitleye hitap etmektedir.
              Başlangıç seviyesinden performans düzeyine kadar tüm öğrencilerimize bireysel ilgiyle yaklaşır,
              gelişimlerini yakından takip ederiz.
            </p>
            <p>
              Modern tesislerimiz, teknik antrenmanlara ek olarak kondisyon, koordinasyon ve mental gelişimi destekleyici
              unsurlarla donatılmıştır.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Hakkimizda
