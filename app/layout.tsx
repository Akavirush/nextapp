
import './reset.css'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { TheHeader } from '@/components/Header/TheHeader'
import { TheFooter } from '@/components/Footer/TheFooter'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Радио - В',
  description: 'Лучшее радио',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TheHeader />
        {children}
        <TheFooter />
      </body>
    </html>
  )
}
