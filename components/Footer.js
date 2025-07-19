import styles from './Footer.module.css';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.column}>
          <h3>İZTENİS Akademi</h3>
          <p>Modern yaklaşım, güçlü altyapı,<br />profesyonel eğitim.</p>
        </div>

        <div className={styles.column}>
          <h4>Bağlantılar</h4>
          <ul>
            <li><a href="#">Anasayfa</a></li>
            <li><a href="egitimler">Eğitimler</a></li>
            <li><a href="antrenorler">Antrenörler</a></li>
            <li><a href="hakkimizda">Hakkımızda</a></li>
            <li><a href="iletisim">İletişim</a></li>
            
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Bizi Takip Edin</h4>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 İZTENİS Akademi. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
