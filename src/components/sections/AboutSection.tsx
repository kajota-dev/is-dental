'use client'

import React from 'react'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Texto a la izquierda */}
        <div>
          <h2 className="text-3xl font-bold text-[#6B21A8] mb-4">
            Sobre Nosotros
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            En <strong>IS Dental</strong> nos especializamos en cuidar su sonrisa con
            un enfoque humano, tecnológico y estético. Nuestra prioridad es que
            cada paciente disfrute una atención cómoda, transparente y sin
            estrés, desde la primera cita hasta la última revisión.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Contamos con un equipo de profesionales altamente capacitados y dos
            sedes en Turrialba equipadas con tecnología moderna para ofrecer
            tratamientos integrales: ortodoncia, blanqueamiento, limpiezas,
            carillas, endodoncia y más.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Creemos que una sonrisa sana cambia la confianza, la comunicación y
            la calidad de vida. Por eso, trabajamos con compromiso y pasión para
            que cada paciente viva la experiencia <strong>IS Dental</strong>.
          </p>

          <a
            href="https://wa.me/50685211021?text=Hola,%20quiero%20agendar%20una%20valoraci%C3%B3n%20en%20IS%20Dental"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-[#6B21A8] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#5A1A86] transition"
          >
            Agendar valoración
          </a>
        </div>

        {/* Imágenes a la derecha */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden shadow-md">
            <Image
              src="/ivania.jpg"
              alt="Instalaciones de IS Dental"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

                    <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden shadow-md mt-6">
            <Image
              src="/juancarlos.jpg"
              alt="Paciente feliz en IS Dental"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden shadow-md mt-6">
            <Image
              src="/equipo.jpg"
              alt="Equipo de trabajo IS Dental"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden shadow-md">
            <Image
              src="/joselyn.jpg"
              alt="Sala de atención IS Dental"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>


        </div>
      </div>
    </section>
  )
}
