import Image from 'next/image'
import MainContent from './components/MainContent'
import ActionButtons from './components/ActionButtons'
import WeOfferBestServices from './components/WeOfferBestServices'
import HireUs from './components/HireUs'
import Testimonials from './components/Testimonials'

export default function Home() {
  return (
    <main className="">
      <MainContent />
      <ActionButtons />
      <WeOfferBestServices />
      <HireUs />
      <Testimonials />
    </main>
  )
}
