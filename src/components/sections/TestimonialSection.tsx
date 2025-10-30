'use client'

import React from 'react'

const TESTIMONIALS = [
  {
    name: 'María Rodríguez',
    comment:
      'Excelente atención desde el primer momento. Me explicaron todo el proceso con claridad y el resultado fue increíble. Sin duda los recomiendo a todos los que buscan confianza y profesionalismo.',
    treatment: 'Blanqueamiento dental',
  },
  {
    name: 'Carlos Jiménez',
    comment:
      'Tenía años sin visitar al dentista por miedo, pero en IS Dental me sentí cómodo y seguro. Me trataron con paciencia y el cambio en mi sonrisa ha sido total.',
    treatment: 'Ortodoncia estética',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#6B21A8]">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Historias reales de quienes confiaron en IS Dental para transformar su sonrisa.
          </p>
        </div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              {/* Texto del comentario */}
              <p className="text-gray-700 text-sm leading-relaxed italic mb-4">
                “{t.comment}”
              </p>

              {/* Línea divisora */}
              <div className="border-t border-gray-100 mt-4 pt-4">
                <p className="font-semibold text-[#6B21A8]">{t.name}</p>
                <p className="text-xs text-gray-500">{t.treatment}</p>
              </div>
            </div>
          ))}

          {/* Card CTA para nuevos testimonios */}
          {/* <div className="bg-[#6B21A8] text-white rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-md hover:bg-[#5A1A86] transition">
            <h3 className="text-lg font-semibold mb-3">¿Ya nos visitó?</h3>
            <p className="text-sm mb-4 max-w-xs">
              Cuéntenos su experiencia y ayude a otros a confiar en nosotros.
            </p>
            <a
              href="https://wa.me/50685211021?text=Hola,%20quiero%20compartir%20mi%20experiencia%20con%20IS%20Dental"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-[#6B21A8] px-4 py-2 rounded-xl font-semibold text-sm hover:bg-[#14B8A6] hover:text-white transition"
            >
              Enviar testimonio
            </a>
          </div> */}
        </div>
      </div>
    </section>
  )
}
