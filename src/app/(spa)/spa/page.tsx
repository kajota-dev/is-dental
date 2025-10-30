'use client'

import Link from 'next/link'

const WHATSAPP = 'https://wa.me/50670000000?text=Hola%20Is%20Dental,%20quiero%20agendar%20una%20sesi%C3%B3n%20de%20spa'

type Card = {
  title: string
  desc: string
  duration?: string
  id?: string
}

const THERAPY: Card[] = [
  { title: 'Masaje relajante', desc: 'Liberación de estrés y tensión general con maniobras suaves y ritmo constante.', duration: '60–90 min' },
  { title: 'Masaje deportivo', desc: 'Prevención y recuperación muscular para atletas y personas activas.', duration: '45–60 min' },
  { title: 'Masaje de descarga', desc: 'Descontracturante profundo en zonas con nudos y rigidez.', duration: '45–60 min' },
  { title: 'Depurativo', desc: 'Drenaje suave para favorecer la eliminación de líquidos y toxinas.', duration: '45–60 min' },
  { title: 'Electroterapia', desc: 'Impulsos controlados para analgesia y recuperación muscular.', duration: '20–30 min' },
  { title: 'Podal con crioterapia', desc: 'Relajación plantar + frío localizado para desinflamar y aliviar fatiga.', duration: '30–45 min' },
  // 👇 NUEVO
  { title: 'Post operatorios', desc: 'Cuidados y drenaje para acelerar recuperación, desinflamar y mejorar cicatrización.', duration: '45–60 min' },
]

const BEAUTY: Card[] = [
  { title: 'Henna', desc: 'Pigmentación vegetal para cejas definidas y de aspecto natural.' },
  { title: 'Pestañas', desc: 'Diseños que realzan tu mirada (clásicas, efecto natural o más volumen).' },
  { title: 'Cejas', desc: 'Perfilado, diseño y mantenimiento para armonía facial.' },
  // 👇 NUEVO
  { title: 'Depilación', desc: 'Depilación profesional (cera tibia) para una piel suave y prolija.' },
]

export default function SpaPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F6F5FB] to-white">
        <div className="mx-auto max-w-6xl px-6 pt-28 pb-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[#6B21A8]">
            Spa & Bienestar <span className="text-gray-800">Is Dental</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Relajación, terapias musculares y belleza facial en un ambiente privado y profesional.
          </p>

          {/* Badges con el texto extraído de la imagen */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {[
              'TRATAMIENTOS CORPORALES',
              'TRATAMIENTOS FACIALES',
              'POST OPERATORIOS',
              'DEPILACIÓN',
              'MASAJES',
            ].map((t) => (
              <span key={t} className="rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#masajes"
              className="rounded-xl border border-[#6B21A8] px-5 py-2.5 text-sm font-semibold text-[#6B21A8] hover:bg-[#6B21A8] hover:text-white"
            >
              Ver masajes y terapias
            </a>
            <a
              href="#belleza"
              className="rounded-xl border border-[#10BFA0] px-5 py-2.5 text-sm font-semibold text-[#10BFA0] hover:bg-[#10BFA0] hover:text-white"
            >
              Ver belleza
            </a>
            <Link
              href={WHATSAPP}
              target="_blank"
              className="rounded-xl bg-[#6B21A8] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#10BFA0]"
            >
              Agendar sesión
            </Link>
          </div>
        </div>

        {/* blobs decorativos */}
        <div aria-hidden className="pointer-events-none absolute -top-10 -left-10 h-72 w-72 rounded-full bg-[#6B21A8]/10 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute bottom-0 right-0 h-60 w-60 rounded-full bg-[#10BFA0]/10 blur-3xl" />
      </section>

      {/* TERAPIAS / MASAJES */}
      <section id="masajes" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-14">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-[#6B21A8]">Masajes y terapias</h2>
          <p className="mt-2 text-gray-600">
            Opciones para aliviar dolor, relajar tensión y acelerar recuperación muscular.
          </p>
        </header>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {THERAPY.map((c) => (
            <li key={c.title} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-[#6B21A8]">{c.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
              {c.duration && <p className="mt-3 text-xs font-medium text-gray-500">Duración: {c.duration}</p>}
              <div className="mt-5">
                <Link
                  href={WHATSAPP}
                  target="_blank"
                  className="inline-block rounded-xl bg-[#6B21A8] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#10BFA0]"
                >
                  Reservar
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* BELLEZA */}
      <section id="belleza" className="scroll-mt-24 mx-auto max-w-6xl px-6 pb-20">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-[#6B21A8]">Belleza</h2>
          <p className="mt-2 text-gray-600">
            Realce su mirada y armonice su rostro con técnicas cuidadosas y resultados naturales.
          </p>
        </header>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BEAUTY.map((c) => (
            <li key={c.title} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-[#6B21A8]">{c.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
              <div className="mt-5">
                <Link
                  href={WHATSAPP}
                  target="_blank"
                  className="inline-block rounded-xl bg-[#6B21A8] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#10BFA0]"
                >
                  Reservar
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA final */}
      <section className="bg-gradient-to-r from-[#6B21A8] to-[#10BFA0]">
        <div className="mx-auto max-w-6xl px-6 py-12 text-center text-white">
          <h3 className="text-2xl font-bold">Listo para su momento de bienestar</h3>
          <p className="mt-2 text-white/90">Escríbanos por WhatsApp y agende su sesión hoy mismo.</p>
          <Link
            href={WHATSAPP}
            target="_blank"
            className="mt-5 inline-block rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-[#6B21A8] hover:bg-black/10"
          >
            Agendar por WhatsApp
          </Link>
        </div>
      </section>
    </main>
  )
}
