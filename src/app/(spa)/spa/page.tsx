export default function SpaPage() {
  return (
    <main>
      <section id="masajes" className="min-h-[60vh] flex flex-col items-center justify-center bg-[#F9F7FB] text-center px-6 py-24">
        <h1 className="text-4xl font-bold text-[#6B21A8] mb-4">Masajes terapéuticos</h1>
        <p className="max-w-2xl text-gray-700">
          Relaje cuerpo y mente con masajes relajantes, descontracturantes, podales y terapias para bruxismo.
        </p>
      </section>

      <section id="belleza" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-[#6B21A8] mb-6 text-center">
          Tratamientos de belleza facial
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="border rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-[#6B21A8] mb-2">Limpieza facial con vitamina C</h3>
            <p className="text-gray-600 text-sm">
              Revitaliza, hidrata y da brillo natural a tu piel con antioxidantes puros.
            </p>
          </div>
          {/* ...otros servicios */}
        </div>
      </section>
    </main>
  )
}
