import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Iletisim.module.css'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Iletisim() {
  return (
    <>
      <Header />
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <h1 className={styles.baslik}>İletişim</h1>

          <div className={styles.infoGroup}>
            <div className={styles.infoBox}>
              <FaPhoneAlt className={styles.icon} />
              <h2>Telefon</h2>
              <p>+90 551 944 94 49</p>
            </div>
            <div className={styles.infoBox}>
              <FaEnvelope className={styles.icon} />
              <h2>E-posta</h2>
              <p>info@izkorttenis.com</p>
            </div>
            <div className={styles.infoBox}>
              <FaMapMarkerAlt className={styles.icon} />
              <h2>Adres</h2>
              <p>Zübeyde Hanım Tenis Tesisleri, Karşıyaka / İZMİR</p>
            </div>
          </div>

          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3122.743303495109!2d27.11326957534609!3d38.493564771813034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd772a3618ed9%3A0x930ac0436142fa42!2zxLB6bWlyIC0gS2FyxZ_EsXlha2EgWsO8YmV5ZGUgSGFuxLFtIFRlbmlzIEXEn2l0aW0gTWVya2V6aQ!5e0!3m2!1str!2str!4v1752855790160!5m2!1str!2str"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <a
  href="https://wa.me/905519449449"
  className={styles.whatsappButton}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp ile iletişime geçin"
>
  <img
    src="/whatsapp-icon.svg"
    alt="WhatsApp"
    className={styles.whatsappIcon}
  />
  <span className={styles.whatsappText}>WhatsApp ile bizimle iletişime geçin</span>
</a>


      <Footer />
    </>
  )
}
