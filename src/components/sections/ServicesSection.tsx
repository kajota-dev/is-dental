'use client'

import React from 'react'

const SERVICES = [
  {
    title: 'Ortodoncia',
    description:
      'Corrija la posición de sus dientes y mejore su sonrisa con tratamientos personalizados que se adaptan a su estilo de vida.',
    tags: ['Brackets', 'Invisalign', 'Alineadores'],
    img: '/ortodoncia.jpg',
  },
  {
    title: 'Blanqueamiento dental',
    description:
      'Recupere el brillo natural de sus dientes con técnicas seguras y profesionales que no dañan el esmalte.',
    tags: ['Estética', 'Luz LED', 'Seguridad'],
    img: '/blanqueamiento.jpg',
  },
  {
    title: 'Limpieza dental',
    description:
      'Elimine placa y sarro para mantener una boca sana, fresca y libre de enfermedades bucales.',
    tags: ['Profilaxis', 'Ultrasonido', 'Prevención'],
    img: '/limpiezadental.jpg',
  },
  {
    title: 'Carillas dentales',
    description:
      'Transforme su sonrisa en pocos días con carillas estéticas de alta durabilidad y aspecto natural.',
    tags: ['Estética', 'Porcelana', 'Resina'],
    img: '/carillas.jpg',
  },
  {
    title: 'Tratamiento de nervios',
    description:
      'Alivie el dolor y salve sus dientes con tratamientos de endodoncia modernos y sin molestias.',
    tags: ['Endodoncia', 'Recuperación', 'Sin dolor'],
    img: '/tratamientonervio.jpg',
  },
]

export default function ServicesSection() {
  return (
    <section id="tratamientos" className="py-16 bg-[#6B21A8]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">
            Nuestros Tratamientos
          </h2>
          <p className="mt-3 text-white max-w-2xl mx-auto">
            Soluciones dentales completas, seguras y diseñadas para cuidar su sonrisa.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition p-5 flex flex-col justify-between"
            >
              {/* Imagen (opcional si la tienes) */}
              {service.img && (
                <div className="relative mb-4 h-44 overflow-hidden rounded-xl bg-transparent">
  <img
    src={service.img}
    alt={service.title}
    className="object-contain w-full h-full p-4"
  />
</div>

              )}

              {/* Texto */}
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-gray-100">
                {service.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-[#6B21A8]/10 text-[#6B21A8] px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
