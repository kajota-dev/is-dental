'use client'

import Link from 'next/link'

const PHONE = '50685211021'
const genericMsg = 'Hola Is Dental, quiero agendar una sesión de spa'
const buildWhatsapp = (service?: string, duration?: string) => {
  const msg = service
    ? `${genericMsg}.\nServicio: ${service}${duration ? ` (${duration})` : ''}.\n¿Tienen disponibilidad esta semana?`
    : `${genericMsg}.\n¿Tienen disponibilidad esta semana?`
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`
}

type Card = { title: string; desc: string; duration?: string }

const THERAPY: Card[] = [
  { title: 'Masaje relajante', desc: 'Liberación de estrés y tensión general con maniobras suaves y ritmo constante.', duration: '60–90 min' },
  { title: 'Masaje deportivo', desc: 'Prevención y recuperación muscular para atletas y personas activas.', duration: '45–60 min' },
  { title: 'Masaje de descarga', desc: 'Descontracturante profundo en zonas con nudos y rigidez.', duration: '45–60 min' },
  { title: 'Depurativo', desc: 'Drenaje suave para favorecer la eliminación de líquidos y toxinas.', duration: '45–60 min' },
  { title: 'Electroterapia', desc: 'Impulsos controlados para analgesia y recuperación muscular.', duration: '20–30 min' },
  { title: 'Podal con crioterapia', desc: 'Relajación plantar + frío localizado para desinflamar y aliviar fatiga.', duration: '30–45 min' },
  { title: 'Post operatorios', desc: 'Cuidados y drenaje para acelerar recuperación, desinflamar y mejorar cicatrización.', duration: '45–60 min' },
]

const BEAUTY: Card[] = [
  { title: 'Henna', desc: 'Pigmentación vegetal para cejas definidas y de aspecto natural.' },
  { title: 'Pestañas', desc: 'Diseños que realzan tu mirada (clásicas, efecto natural o más volumen).' },
  { title: 'Cejas', desc: 'Perfilado, diseño y mantenimiento para armonía facial.' },
  { title: 'Depilación', desc: 'Depilación profesional (cera tibia) para una piel suave y prolija.' },
]

export default function SpaPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* HERO (decorativo con <img>) */}
<section className="relative overflow-hidden min-h-[520px]">
  {/* Imagen de fondo */}
  <img
    src="/img1.jpg"
    alt="Ambiente relajante de spa"
    className="absolute inset-0 z-0 h-full w-full object-cover"
    onError={(e) => { e.currentTarget.src = '/img3.jpg' }} // fallback opcional
  />

  {/* Overlay para legibilidad */}
  <div className="absolute inset-0 z-10 bg-white/70 backdrop-blur-[1px]" />

  {/* Contenido */}
  <div className="relative z-20 mx-auto grid max-w-6xl items-center gap-10 px-6 pt-28 pb-16 md:grid-cols-2">
    <div className="text-center md:text-left">
      <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[#6B21A8]">
        Spa & Bienestar <span className="text-gray-800">Is Dental</span>
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        Relajación, terapias musculares y belleza facial en un ambiente privado y profesional.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
        <a href="#masajes" className="rounded-xl border border-[#6B21A8] px-5 py-2.5 text-sm font-semibold text-[#6B21A8] hover:bg-[#6B21A8] hover:text-white">
          Ver masajes y terapias
        </a>
        <a href="#belleza" className="rounded-xl border border-[#10BFA0] px-5 py-2.5 text-sm font-semibold text-[#10BFA0] hover:bg-[#10BFA0] hover:text-white">
          Ver belleza
        </a>
        <Link href={buildWhatsapp()} target="_blank" className="rounded-xl bg-[#6B21A8] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#10BFA0]">
          Agendar sesión
        </Link>
      </div>
    </div>

    {/* Collage (decorativo) */}
    <div className="relative hidden md:block">
      <div className="grid grid-cols-2 gap-4">
        <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
          <img src="/img2.jpg" alt="Mascarilla facial" className="h-full w-full object-cover" />
        </figure>
        <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md">
          <img src="/img3.jpg" alt="Productos y velas" className="h-full w-full object-cover" />
        </figure>
        <figure className="relative col-span-2 aspect-[7/3] overflow-hidden rounded-2xl shadow-md">
          <img src="/img4.jpg" alt="Belleza natural" className="h-full w-full object-cover" />
        </figure>
      </div>
    </div>
  </div>
</section>


      {/* TIRA DECORATIVA con imagen muy sutil */}
      <section className="relative overflow-hidden py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2 px-6">
          {['TRATAMIENTOS CORPORALES','TRATAMIENTOS FACIALES','POST OPERATORIOS','DEPILACIÓN','MASAJES'].map(t => (
            <span key={t} className="rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700">{t}</span>
          ))}
        </div>
      </section>

      {/* SECCIÓN “AMBIENTE SPA” (banner decorativo fullscreen mediano) */}
      <section className="relative my-6 overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold text-[#6B21A8]">Un espacio diseñado para desconectar</h2>
            <p className="mt-3 text-gray-600">
              Luz cálida, aromaterapia y música suave para potenciar cada terapia y que salga renovado.
            </p>
          </div>
          <figure className="order-1 md:order-2 overflow-hidden rounded-2xl shadow-md">
            <img src="/img2.jpg" alt="Facial relajante" className="h-72 w-full object-cover md:h-80" />
          </figure>
        </div>
      </section>

      {/* TERAPIAS / MASAJES (sin imágenes en cards) */}
      <section id="masajes" className="scroll-mt-24 mx-auto max-w-6xl px-6 py-14">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-[#6B21A8]">Masajes y terapias</h2>
          <p className="mt-2 text-gray-600">Opciones para aliviar dolor, relajar tensión y acelerar recuperación muscular.</p>
        </header>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {THERAPY.map((c) => (
            <li key={c.title} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-lg font-semibold text-[#6B21A8]">{c.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
              {c.duration && <p className="mt-3 text-xs font-medium text-gray-500">Duración: {c.duration}</p>}
              <div className="mt-5">
                <Link href={buildWhatsapp(c.title, c.duration)} target="_blank" className="inline-block rounded-xl bg-[#6B21A8] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#10BFA0]">Reservar</Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* BELLEZA (sin imágenes en cards) */}
      <section id="belleza" className="scroll-mt-24 mx-auto max-w-6xl px-6 pb-20">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-[#6B21A8]">Belleza</h2>
        </header>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BEAUTY.map((c) => (
            <li key={c.title} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-lg font-semibold text-[#6B21A8]">{c.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{c.desc}</p>
              <div className="mt-5">
                <Link href={buildWhatsapp(c.title)} target="_blank" className="inline-block rounded-xl bg-[#6B21A8] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#10BFA0]">Reservar</Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA final con imagen decorativa al lado */}
      <section className="bg-gradient-to-r from-[#6B21A8] to-[#10BFA0]">
        <div className="mx-auto grid max-w-6xl items-center gap-6 px-6 py-12 md:grid-cols-2">
          <div className="text-white text-center md:text-left">
            <h3 className="text-2xl font-bold">Listo para su momento de bienestar</h3>
            <p className="mt-2 text-white/90">Escríbanos por WhatsApp y agende su sesión hoy mismo.</p>
            <Link href={buildWhatsapp()} target="_blank" className="mt-5 inline-block rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-[#6B21A8] hover:bg-black/10">Agendar por WhatsApp</Link>
          </div>
          <figure className="overflow-hidden rounded-2xl">
            <img src="/img4.jpg" alt="Belleza natural" className="h-64 w-full object-cover md:h-72" />
          </figure>
        </div>
      </section>
    </main>
  )
}
