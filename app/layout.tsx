import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eshop',
  description: 'Eshop vytvořený v nextjs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
