import styles from './Trainings.module.css'
import Image from 'next/image'

const trainings = [
  {
    title: 'Başlangıç Seviye',
    description: 'Temel teknikler ve koordinasyon.',
    image: '/baslangic.jpg',
  },
  {
    title: 'Orta Seviye',
    description: 'Oyun pratiği ve taktik gelişim.',
    image: '/ortaseviye.jpg',
  },
  {
    title: 'Performans Seviye',
    description: 'Turnuva düzeyinde yoğun antrenman.',
    image: '/performans.jpg',
  },
]

const Trainings = () => {
  return (
    <section className={styles.trainings}>
      <h2 className={styles.title}>Eğitimlerimiz</h2>
      <div className={styles.cards}>
        {trainings.map((training, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image src={training.image} alt={training.title} fill className={styles.image} />
            </div>
            <div className={styles.info}>
              <h3>{training.title}</h3>
              <p>{training.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Trainings
