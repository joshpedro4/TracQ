import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// Remove or comment out this import
// import TopNavBar from '@/components/TopNavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tracq HR Platform',
  description: 'Empowering inclusive workplaces',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
