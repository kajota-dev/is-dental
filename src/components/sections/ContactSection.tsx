'use client'

import { useMemo, useState } from 'react'

const WHATSAPP_PHONE = '50685211021' // <- cámbialo si hace falta
const SEDES = ['El Carmen, Santa Cruz, Turrialba', 'Turrialba centro'] as const
const TREATMENTS = [
  'Ortodoncia',
  'Blanqueamiento dental',
  'Limpieza dental',
  'Carillas dentales',
  'Tratamiento de nervios',
] as const

type Sede = typeof SEDES[number]
type Treatment = typeof TREATMENTS[number]

export default function ContactSection() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [sede, setSede] = useState<Sede>(SEDES[0])
  const [selected, setSelected] = useState<Set<Treatment>>(new Set())
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [message, setMessage] = useState('')

  const selectedList = useMemo(() => Array.from(selected), [selected])

  const toggleTreatment = (t: Treatment) => {
    const next = new Set(selected)
    if (next.has(t)) next.delete(t)
    else next.add(t)
    setSelected(next)
  }

  const buildWhatsAppText = () => {
    const lines = [
      'Hola, quisiera agendar una valoración.',
      `• Nombre: ${name || '-'}`,
      `• Teléfono: ${phone || '-'}`,
      `• Sede: ${sede}`,
      `• Tratamientos de interés: ${selectedList.length ? selectedList.join(', ') : '—'}`,
      message ? `• Comentarios: ${message}` : '',
    ].filter(Boolean)
    return lines.join('\n')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validaciones mínimas
    if (!name.trim()) {
      alert('Por favor, indique su nombre.')
      return
    }
    if (!phone.trim()) {
      alert('Por favor, indique su teléfono.')
      return
    }

    const text = encodeURIComponent(buildWhatsAppText())
    const url = `https://wa.me/${WHATSAPP_PHONE}?text=${text}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#6B21A8]">Agende su cita</h2>
          <p className="mt-3 text-gray-600">
            Complete los datos y le contactaremos por WhatsApp para confirmar su horario.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 rounded-2xl p-6 shadow-sm"
        >
          {/* Datos personales */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre completo *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#6B21A8] text-gray-900"
                placeholder="Su nombre"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono / WhatsApp *
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
                className="text-gray-900 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#6B21A8]"
                placeholder="Ej. 8521-1021"
                required
              />
            </div>
          </div>

          {/* Sede */}
          <div className="mt-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sede
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SEDES.map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => setSede(s)}
                  className={[
                    'rounded-xl px-4 py-2 text-sm border transition',
                    sede === s
                      ? 'bg-[#6B21A8] text-white border-[#6B21A8]'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-[#6B21A8]',
                  ].join(' ')}
                  aria-pressed={sede === s}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Tratamientos (checkbox pills) */}
          <div className="mt-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tratamientos de interés
            </label>
            <div className="flex flex-wrap gap-2">
              {TREATMENTS.map((t) => {
                const active = selected.has(t)
                return (
                  <button
                    type="button"
                    key={t}
                    onClick={() => toggleTreatment(t)}
                    className={[
                      'rounded-full px-3 py-1 text-xs border transition',
                      active
                        ? 'bg-[#6B21A8] text-white border-[#6B21A8]'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-[#6B21A8]',
                    ].join(' ')}
                    aria-pressed={active}
                  >
                    {t}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Comentarios */}
          <div className="mt-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Comentarios (opcional)
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="Cuéntenos brevemente su caso o preferencia de tratamiento."
              className="text-gray-900 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#6B21A8]"
            />
          </div>

          {/* Enviar */}
          <div className="mt-6">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-[#6B21A8] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#5A1A86]"
            >
              Enviar por WhatsApp
            </button>
            <p className="mt-2 text-xs text-gray-500">
              Al hacer clic, se abrirá WhatsApp con su solicitud prellenada.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
