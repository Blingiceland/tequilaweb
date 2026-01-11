import type { Metadata } from 'next'
import { Cinzel, Nosifer, Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' })
const nosifer = Nosifer({ weight: '400', subsets: ['latin'], variable: '--font-nosifer' })

export const metadata: Metadata = {
  title: 'Tequila Bar',
  description: 'A secret place.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cinzel.variable} ${nosifer.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
