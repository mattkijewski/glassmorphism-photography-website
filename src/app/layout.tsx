import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Glassmorphism Photography Studio',
  description: 'Professional photography services with modern glassmorphism design',
  keywords: ['photography', 'professional', 'booking', 'consultation', 'glassmorphism'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          {children}
        </div>
      </body>
    </html>
  )
}