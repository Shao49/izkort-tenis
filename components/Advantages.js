import styles from './Advantages.module.css'
import { FaUsers, FaTrophy, FaDumbbell, FaClock } from 'react-icons/fa'

const items = [
  {
    icon: <FaUsers />,
    title: 'Her Yaş ve Seviye',
    desc: 'Her yaşa ve seviyeye uygun bireysel veya grup dersleri sunuyoruz.',
  },
  {
    icon: <FaTrophy />,
    title: 'Başarı Odaklı Eğitim',
    desc: 'Turnuvalara hazırlık ve başarıya giden yolda uzman koçluk.',
  },
  {
    icon: <FaDumbbell />,
    title: 'Fiziksel Gelişim',
    desc: 'Oyuncuların fiziksel dayanıklılığına özel antrenmanlar yapılır.',
  },
  {
    icon: <FaClock />,
    title: 'Esnek Zamanlama',
    desc: 'Ders saatlerini hafta içi veya hafta sonu tercihlerinize göre ayarlayın.',
  },
]

const Advantages = () => {
  return (
    <section className={styles.advantages}>
      <div className={styles.overlay}></div>
      <h2 className={styles.title}>Kulübümüzün Avantajları</h2>
      <div className={styles.grid}>
        {items.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.icon}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Advantages
