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
              src="/izkort_2.png"
              alt="İZKORT Logo"
              width={500}
              height={500}
              priority
              className={styles.logoImage}
            />
          </Link>
        </div>
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <Link href="/">Anasayfa</Link>
          <Link href="/egitimler">Eğitimler</Link>
          <Link href="/antrenorler">Antrenörler</Link>
          <Link href="/hakkimizda">Hakkımızda</Link>
          <Link href="/iletisim">İletişim</Link>
          
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
