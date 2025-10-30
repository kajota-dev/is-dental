'use client'

import React from 'react'

const LOCATIONS = [
  {
    name: 'El Carmen, Santa Cruz, Turrialba.',
    address: '300m Norte del cementerio San Rafael, Santa Cruz, Turrialba',
    phone: '8521-1021',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d394.84566137134124!2d-83.71212343441914!3d9.953902119047093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0d1c4dea868d5%3A0xbd5d35b9a7eedb73!2sIS%20DENTAL!5e1!3m2!1ses!2scr!4v1761700735703!5m2!1ses!2scr',
    whatsapp: 'https://wa.me/50685211021?text=Hola,%20quiero%20agendar%20en%20la%20sede%20de%20El%20Carmen',
    hours: 'Lunes a Sábado | 8:00am - 6:00pm',
  },
  {
    name: 'Turrialba centro.',
    address: '200m Oeste Colegio Nocturno Turrialba',
    phone: '8521-1021',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1008.16970888054!2d-83.68827573042606!3d9.906734599387127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0d70c1e578785%3A0x3ffb7f5c1f2180e9!2sIS%20Dental%20%26%20Spa!5e1!3m2!1ses!2scr!4v1761700824168!5m2!1ses!2scr',
    whatsapp: 'https://wa.me/50685211021?text=Hola,%20quiero%20agendar%20en%20la%20sede%20de%20Turrialba%20Centro',
    hours: 'Lunes a Sábado | 9:00am - 6:00pm',
  },
]

export default function LocationsSection() {
  return (
    <section id="sedes" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#6B21A8]">Nuestras Sedes</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Elija la ubicación más cercana y agende su cita fácilmente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {LOCATIONS.map((loc, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col"
            >
              <h3 className="text-xl font-semibold text-[#6B21A8] mb-2">
                {loc.name}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{loc.address}</p>
              <p className="text-gray-600 text-sm mb-1">📞 {loc.phone}</p>
              <p className="text-gray-600 text-sm mb-4">🕒 {loc.hours}</p>

              <div className="w-full h-56 rounded-xl overflow-hidden mb-5">
                <iframe
                  src={loc.map}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                ></iframe>
              </div>

              <a
                href={loc.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center justify-center px-5 py-2 bg-[#6B21A8] text-white rounded-xl font-semibold hover:bg-[#5A1A86] transition"
              >
                Agendar en esta sede
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
