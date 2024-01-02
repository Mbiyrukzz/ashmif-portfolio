import Image from 'next/image'
import MainContent from './components/MainContent'
import ActionButtons from './components/ActionButtons'
import AboutUs from './components/AboutUs'

export default function Home() {
  return (
    <main className="">
      <MainContent />
      <ActionButtons />
    </main>
  )
}
