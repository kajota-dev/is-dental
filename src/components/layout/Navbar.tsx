'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NAV_ITEMS = [
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Sedes', href: '#sedes' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

const WHATSAPP_LINK =
  'https://wa.me/50670000000?text=Hola%20Is%20Dental,%20quiero%20agendar%20una%20valoraci%C3%B3n'

const PHONE_DISPLAY = '8521-1021'
const PHONE_TEL = '85211021'
const EMAIL = 'isdental@gmail.com'
const COUNTRY = 'Turrialba, Costa Rica'

// Colores de marca (arbitrarios Tailwind)
const VIOLET = '#6B21A8'   // morado principal
const VIOLET_HOVER = '#5A1A86'
const TEAL = '#14B8A6'     // turquesa para hover CTA

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* TOP BAR (blanco y centrado) */}
      <div className="bg-white text-gray-800 border-b border-black/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-1 py-2 text-sm sm:flex-row sm:gap-4 sm:py-2">
            <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 hover:text-[${VIOLET}]">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L8 9a16 16 0 0 0 7 7l.67-1.23a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92z"/>
              </svg>
              {PHONE_DISPLAY}
            </a>

            <span className="hidden select-none sm:inline opacity-60">•</span>

            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-[${VIOLET}]">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16v16H4z" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              {EMAIL}
            </a>

            <span className="hidden select-none sm:inline opacity-60">•</span>

            <span className="opacity-80">{COUNTRY} 🇨🇷</span>
          </div>
        </div>
      </div>

      {/* NAV BAR PRINCIPAL (morado sólido, texto blanco) */}
      <div className={['transition-all', scrolled ? 'py-1' : 'py-2', 'text-white', 'bg-[#6B21A8]'].join(' ')}>
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 py-2">
              <Image src="/logo.png" alt="Is Dental" width={34} height={34} priority />
              <span className="hidden text-sm font-semibold text-white sm:inline">Is Dental</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden items-center gap-8 lg:flex">
              <div className="flex items-center gap-6">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-white/90 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white text-[#6B21A8] px-4 py-2 text-sm font-semibold shadow-sm transition hover:bg-[#14B8A6] hover:text-white"
              >
                Agendar cita
              </a>
            </div>

            {/* Botón móvil (ahora visible) */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/30 bg-[rgba(255,255,255,0.08)] text-white hover:bg-[rgba(255,255,255,0.16)] lg:hidden"
            >
              {/* Ícono usa currentColor (blanco) */}
              {open ? (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M6 6L18 18" />
                  <path d="M6 18L18 6" />
                </svg>
              ) : (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile panel */}
          {open && (
            <div className="lg:hidden" role="dialog" aria-modal="true" aria-label="Menú">
              {/* Overlay */}
              <button
                aria-label="Cerrar menú"
                className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
                onClick={close}
              />
              {/* Sheet */}
              <div className="fixed right-0 top-0 z-[70] h-full w-full max-w-sm overflow-y-auto bg-white p-6 shadow-xl">
                <div className="mb-6 flex items-center justify-between">
                  <Link href="/" className="flex items-center gap-3" onClick={close}>
                    <Image src="/logo.png" alt="Is Dental" width={30} height={30} />
                    <span className="text-sm font-semibold text-gray-900">Is Dental</span>
                  </Link>
                  {/* Botón cerrar con ícono oscuro (se ve en blanco) */}
                  <button
                    onClick={close}
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M6 6L18 18" />
                      <path d="M6 18L18 6" />
                    </svg>
                    Cerrar
                  </button>
                </div>

                <div className="space-y-1">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={close}
                      className="block rounded-lg px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                <div className="mt-6 border-t border-gray-200 pt-6">
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    onClick={close}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-[#6B21A8] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#14B8A6]"
                  >
                    Agendar cita
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
