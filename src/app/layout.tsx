import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'U.S. Affordable Housing | Affordable Manufactured Homes & Land Solutions',
  description: 'Buy, Install, and Secure Your Future Home. We provide accessible housing solutions through affordable manufactured homes, expert installation, and land acquisition support.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable} font-body`}>
        {children}
      </body>
    </html>
  )
}
