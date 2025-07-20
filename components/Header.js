import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Header.module.css'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/iztenislogo1.png"
              alt="İZTENİS Logo"
              width={500}
              height={500}
              priority
              className={styles.logoImage}
            />
          </Link>
        </div>
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
  <Link href="/" onClick={() => setMenuOpen(false)}>Anasayfa</Link>
  <Link href="/egitimler" onClick={() => setMenuOpen(false)}>Eğitimler</Link>
  <Link href="/antrenorler" onClick={() => setMenuOpen(false)}>Antrenörler</Link>
  <Link href="/hakkimizda" onClick={() => setMenuOpen(false)}>Hakkımızda</Link>
  <Link href="/iletisim" onClick={() => setMenuOpen(false)}>İletişim</Link>
</nav>
        <div className={styles['menu-toggle']} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        {menuOpen && (
  <div className={styles.closeButton} onClick={() => setMenuOpen(false)}>
    ✕
  </div>
)}

      </div>
    </header>
  )
}

export default Header
