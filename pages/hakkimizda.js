import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/hakkimizda.module.css'

const About = () => {
  return (
    <>
      <Header />
      <section className={styles.aboutSection}>
      <video autoPlay muted loop playsInline className={styles.videoBg}>
  <source src="/izkort.mp4" type="video/mp4" />
</video>

        <div className={styles.overlay}>
          <div className={styles.content}>
            <h1>Hakkımızda</h1>
            <p>
              İZKORT Tenis Akademi olarak sporu yaşam tarzı haline getirmeyi hedefleyen bir anlayışla yola çıktık.
              Kurulduğumuz ilk günden itibaren yalnızca tenis öğretmek değil, aynı zamanda spor kültürünü,
              disiplinini ve etik değerlerini genç bireylere aktarmayı ilke edindik.
            </p>
            <p>
              Akademimiz, her yaş grubuna ve her seviyeye uygun eğitim programları ile geniş bir kitleye hitap etmektedir.
              Başlangıç seviyesinden performans düzeyine kadar tüm öğrencilerimize bireysel ilgiyle yaklaşır,
              gelişimlerini yakından takip ederiz. Eğitmen kadromuz, ulusal ve uluslararası deneyime sahip,
              alanında uzman, çocuk gelişimi ve spor psikolojisi bilgisiyle donatılmış antrenörlerden oluşmaktadır.
            </p>
            <p>
              Modern tesislerimiz, teknik antrenmanlara ek olarak kondisyon, koordinasyon ve mental gelişimi destekleyici
              unsurlarla donatılmıştır. Sporcularımızın hem fiziksel hem de zihinsel olarak güçlenmesini hedefleyen
              eğitim anlayışımız sayesinde pek çok başarıya imza attık.
            </p>
            <p>
              Misyonumuz; sporu seven, etik değerlerle donanmış, özgüvenli bireyler yetiştirmek ve tenis kültürünü yaygınlaştırmaktır.
              Bu yolculukta bizimle olan her sporcunun, hayatına değer kattığımıza inanıyor ve başarılarını gururla takip ediyoruz.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About
