'use client'

import Link from 'next/link'
import Image from 'next/image'

const PHONE_DISPLAY = '8521-1021'
const PHONE_TEL = '85211021'
const EMAIL = 'isdentalyspa@gmail.com'
const ADDRESS = 'Turrialba, Costa Rica'
const WHATSAPP_LINK =
  'https://wa.me/50685211021?text=Hola%20Is%20Dental,%20quiero%20agendar%20una%20valoraci%C3%B3n'

export default function Footer() {
  return (
    <footer className="bg-[#6B21A8] text-white ">
      <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Marca */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <Image src="/logo.png" alt="IS Dental" width={40} height={40} />
            <span className="text-lg font-semibold">IS Dental</span>
          </div>
          <p className="text-sm text-white/85 max-w-md leading-relaxed">
            Cuidamos su sonrisa con tecnología moderna y un trato humano.
            Ortodoncia, blanqueamiento, limpiezas, carillas y endodoncia en dos
            sedes de Turrialba.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#6B21A8] shadow-sm transition hover:bg-[#14B8A6] hover:text-white"
            >
              Agendar por WhatsApp
            </a>
            <a
              href={`tel:${PHONE_TEL}`}
              className="text-sm underline underline-offset-4 hover:text-[#14B8A6] transition"
            >
              Llamar: {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        {/* Enlaces */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
            Enlaces
          </h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li><a href="#tratamientos" className="hover:text-white">Tratamientos</a></li>
            <li><a href="#sedes" className="hover:text-white">Sedes</a></li>
            <li><a href="#testimonios" className="hover:text-white">Testimonios</a></li>
            <li><a href="#contacto" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide mb-4">
            Contáctenos
          </h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li>📞 {PHONE_DISPLAY}</li>
            <li>📧 {EMAIL}</li>
            <li>📍 {ADDRESS}</li>
          </ul>

          {/* Socials (coloca tus URLs reales) */}
          <div className="mt-5 flex items-center gap-4 text-white/90">
            <a href="https://www.facebook.com/profile.php?id=100064013438144" target='_blank' aria-label="Facebook" className="hover:text-[#14B8A6] transition">Facebook</a>
            <a href="https://www.instagram.com/isdental_cr/" target='_blank' aria-label="Instagram" className="hover:text-[#14B8A6] transition">Instagram</a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-white/70">
          <p>© {new Date().getFullYear()} IS Dental. Todos los derechos reservados.</p>
          <p>
            Hecho por <span className="text-white/90">KAJOTA</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
