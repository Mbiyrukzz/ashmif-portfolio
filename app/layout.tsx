import '@radix-ui/themes/styles.css'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Theme } from '@radix-ui/themes'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import AllRightsReserved from './components/AllRightsReserved'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AOS',
  description: 'Ashmif Office Solutions (AOS)',
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
          <AllRightsReserved />
        </Theme>
      </body>
    </html>
  )
}
