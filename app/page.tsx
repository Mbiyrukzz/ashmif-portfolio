import Image from 'next/image'
import MainContent from './components/MainContent'
import ActionButtons from './components/ActionButtons'
import WeOfferBestServices from './components/WeOfferBestServices'

export default function Home() {
  return (
    <main className="">
      <MainContent />
      <ActionButtons />
      <WeOfferBestServices />
    </main>
  )
}
