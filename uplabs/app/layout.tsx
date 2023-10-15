import { Footer, Header } from '@/components'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UpLabs',
  description: 'Prescription of UpLabs Software development team',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ width: "100vw", height: "100vh" }}>
      <div>
        <Header />
      </div>
      <body className={inter.className}>{children}</body>
      <div className='inset-x-0 bottom-0'>
        <Footer />
      </div>
    </html>
  )
}
