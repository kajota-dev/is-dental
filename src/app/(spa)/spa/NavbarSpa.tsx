'use client'

import Link from 'next/link'
import { useState } from 'react'

const NAV_ITEMS = [
  { label: 'Masajes', href: '#masajes' },
  { label: 'Belleza', href: '#belleza' },
]

export default function NavbarSpa() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#6B21A8] text-white shadow">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo / Inicio */}
        <Link href="/" className="font-semibold text-lg hover:text-[#10BFA0]">
          ← Clínica Is Dental
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/80 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#6B21A8]/95 text-center py-4 space-y-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium hover:text-[#10BFA0]"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
