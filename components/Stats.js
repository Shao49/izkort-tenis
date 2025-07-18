import styles from './Stats.module.css'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const stats = [
  { number: 10, label: 'Yıllık Tecrübe' },
  { number: 100, label: 'Mutlu Öğrenci' },
  { number: 3, label: 'Uzman Antrenör' },
  { number: 5, label: 'Yaş Grubu' },
]

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3, // %30'u görünce başlasın
  })

  return (
    <section className={styles.stats} ref={ref}>
      <div className={styles.container}>
      {stats.map((item, index) => (
  <div key={index} className={styles.statItem}>
    {inView ? (
      <CountUp
        key={`count-${inView}-${index}`} // 🔁 her girişte reset olur
        end={item.number}
        duration={2}
        suffix="+"
        className={styles.number}
      />
    ) : (
      <span className={styles.number}>0</span>
    )}
    <p className={styles.label}>{item.label}</p>
  </div>
))}

      </div>
    </section>
  )
}

export default Stats
