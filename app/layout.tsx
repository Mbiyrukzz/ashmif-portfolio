import '@radix-ui/themes/styles.css'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Theme, ThemePanel } from '@radix-ui/themes'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import AllRIghts from './components/AllRIghts'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ashmif',
  description: 'Ashmif Office Solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance="light" accentColor="violet" radius="large">
          <NavBar />
          <main className="p-5">{children}</main>
          <Footer />
          <AllRIghts />
        </Theme>
      </body>
    </html>
  )
}
