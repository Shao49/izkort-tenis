import Hero from '../components/Hero'
import Trainings from '../components/Trainings'
import Advantages from '../components/Advantages'
import Stats from '../components/Stats'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      {/* Devamına diğer bölümler gelecek */}
      <Trainings />
      <Advantages />
      <Stats />
      <Footer />
    </>
  )
}
