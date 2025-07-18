'use client'
import styles from './Hero.module.css'
import Link from 'next/link'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>
          <Typewriter
            words={['İZKORT Tenis Akademi']}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={200}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>
        <p>Profesyonel antrenmanlar ve deneyimli eğitmenlerle geleceğin tenisçilerini yetiştiriyoruz.</p>
        <Link href="/iletisim" className={styles.button}>Antrenmanlara Katıl</Link>
      </div>
    </section>
  )
}

export default Hero
