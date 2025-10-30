import './globals.css'
import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/footer'

export const metadata: Metadata = {
  title: 'Is Dental',
  description: 'Clínica dental - Turrialba',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        <Navbar />
        <div className="pt-20 lg:pt-24">{children}</div>
        <Footer/>
      </body>
    </html>
  )
}
