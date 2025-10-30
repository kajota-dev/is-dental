'use client'

import Link from 'next/link'

const WHATSAPP_LINK =
  'https://wa.me/50670000000?text=Hola%20Is%20Dental,%20quiero%20agendar%20una%20valoraci%C3%B3n'

export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center justify-center bg-white text-gray-900">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-tight">
          Sonrisas naturales <br />
          <span className="bg-gradient-to-r from-[#6F2DBD] to-[#10BFA0] bg-clip-text text-transparent">
            que inspiran confianza
          </span>
        </h1>

 
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          En <span className="font-semibold text-[#6F2DBD]">Is Dental</span> combinamos tecnología moderna,
          atención personalizada y estética avanzada para que cada paciente disfrute de una sonrisa saludable
          y segura.
        </p>

   
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-[#6F2DBD] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#10BFA0]"
          >
            Agendar cita
          </Link>

          <a
            href="#tratamientos"
            className="rounded-xl border border-[#6F2DBD] px-6 py-3 text-sm font-semibold text-[#6F2DBD] transition hover:bg-[#6F2DBD] hover:text-white"
          >
            Ver tratamientos
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3 text-xs font-medium text-gray-700">
          <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-2">
            +1,000 sonrisas atendidas
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-2">
            Dos sedes en Turrialba
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-2">
            Equipo profesional certificado
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#6F2DBD]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[10%] bottom-[10%] -z-10 h-[280px] w-[280px] rounded-full bg-[#10BFA0]/10 blur-3xl"
        />
      </div>
    </section>
  )
}
