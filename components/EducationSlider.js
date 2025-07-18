import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './EducationSlider.module.css'

const slides = [
  {
    id: 1,
    title: 'Başlangıç Seviyesi',
    description:
      'Tenise ilk adım atan sporcular için özel olarak tasarlanmış bu program, temel duruş, raket tutuşu, forehand-backhand gibi temel vuruş tekniklerinin yanı sıra oyun kuralları ve saha içi güvenlik konularını kapsar. Katılımcılar, eğitmenlerimizin gözetiminde hem birebir hem de grup çalışmalarıyla özgüven kazanır, spor disiplini ile tanışır. Bu seviye, sağlam bir teknik altyapı oluşturmak isteyen tüm yaş grupları için uygundur.',
    image: '/baslangic.jpg',
  },
  {
    id: 2,
    title: 'Orta Seviye',
    description:
      'Temel teknikleri kazanan sporcular için hazırlanan bu seviye, vuruş istikrarı, saha içi pozisyon alma, servis ve return tekniklerinin geliştirilmesini hedefler. Aynı zamanda taktiksel düşünce yapısının gelişmesini sağlayan maç içi senaryolar ve uygulamalı çalışmalarla desteklenir. Bu seviyedeki sporcular, hem bireysel hem de takım oyununda sorumluluk almayı ve rekabeti öğrenerek bir üst seviyeye geçişe hazırlanır.',
    image: '/ortaseviye.jpg',
  },
  {
    id: 3,
    title: 'Performans Seviyesi',
    description:
      'Profesyonel kariyer hedefleyen veya turnuvalarda başarıyı amaçlayan sporcular için yapılandırılmış bu program; fiziksel kondisyon, ileri düzey teknik beceriler, mental dayanıklılık ve strateji odaklı antrenmanları kapsar. Sporcular, birebir koçluk ve performans analizi desteği ile gelişim süreçlerini takip eder. Bu yoğun programda katılımcılar, akademik yaklaşım ve bilimsel antrenman metodlarıyla üst düzey müsabaka ortamına hazırlanır.',
    image: '/performans.jpg',
  },
]

const EducationSlider = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 20000)
    return () => clearInterval(interval)
  }, [])

  const prevSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length)
  }

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length)
  }

  const currentSlide = slides[current]

  return (
    <div className={styles.slider}>
      <div className={styles.backgroundImage}>
        <Image
          src={currentSlide.image}
          alt={currentSlide.title}
          fill
          className={styles.bgImage}
          priority
        />
        <div className={styles.overlay} />
      </div>

      <button className={`${styles.navButton} ${styles.left}`} onClick={prevSlide}>‹</button>

      <div className={styles.content}>
        <h2>{currentSlide.title}</h2>
        <p>{currentSlide.description}</p>
      </div>

      <button className={`${styles.navButton} ${styles.right}`} onClick={nextSlide}>›</button>
    </div>
  )
}

export default EducationSlider
