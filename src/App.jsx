export default function App() {
  const productos = [
    {
      nombre: "Vela Vainilla",
      aroma: "Aroma dulce y relajante",
      precio: "S/25"
    },
    {
      nombre: "Vela Lavanda",
      aroma: "Relajación y descanso",
      precio: "S/30"
    },
    {
      nombre: "Vela Canela",
      aroma: "Aroma cálido y elegante",
      precio: "S/28"
    },
    {
      nombre: "Vela Coco",
      aroma: "Fresco tropical",
      precio: "S/26"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f7f1eb] text-gray-800">

      {/* Navbar */}
      <header className="flex justify-between items-center px-10 py-6 bg-white shadow-md">
        <h1 className="text-3xl font-bold text-[#7a4e2d]">
          Velas Aura
        </h1>

        <nav className="flex gap-8 text-lg">
          <a href="#" className="hover:text-[#b37b52]">Inicio</a>
          <a href="#" className="hover:text-[#b37b52]">Catálogo</a>
          <a href="#" className="hover:text-[#b37b52]">Nosotros</a>
          <a href="#" className="hover:text-[#b37b52]">Contacto</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-28 px-6">
        <h2 className="text-6xl font-extrabold text-[#7a4e2d] mb-6">
          Velas Aromáticas Premium
        </h2>

        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-8">
          Aromas elegantes y relajantes para transformar cualquier espacio
          en un ambiente único y acogedor.
        </p>

        <button className="mt-10 bg-[#7a4e2d] hover:bg-[#5f3d23] text-white px-8 py-4 rounded-2xl text-lg shadow-lg transition">
          Ver Catálogo
        </button>
      </section>

      {/* Productos */}
      <section className="px-10 pb-24">
        <h3 className="text-4xl font-bold text-center mb-14 text-[#7a4e2d]">
          Productos Destacados
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productos.map((producto, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition"
            >
              <div className="h-64 bg-[#e8d6c7] flex items-center justify-center text-2xl font-bold text-[#7a4e2d]">
                🕯️
              </div>

              <div className="p-6">
                <h4 className="text-2xl font-bold mb-2">
                  {producto.nombre}
                </h4>

                <p className="text-gray-500 mb-4">
                  {producto.aroma}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#7a4e2d]">
                    {producto.precio}
                  </span>

                  <button className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-xl">
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#7a4e2d] text-white text-center py-8">
        <p>© 2026 Velas Aura - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}