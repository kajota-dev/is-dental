// src/app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'Is Dental',
  description: 'Clínica dental y spa en Turrialba',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
