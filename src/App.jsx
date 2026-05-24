import { useState } from "react";

function App() {

  const [pantalla, setPantalla] = useState("inicio");
  const [categoriaActual, setCategoriaActual] = useState("");

  const aromas = [
    "Sin aroma",
    "Bebe talco",
    "Frutal",
    "Vainilla",
    "Manzanita verde",
    "Frutos rojos",
    "Naranja",
    "Fresa madura",
    "Chicle",
    "Limon citrico",
    "Floral",
    "Tuti fruti",
    "Douce",
    "Brisa marina",
    "Bergamota",
    "Mil flores",
    "Crema de almendras",
    "Rosas",
    "Chanel",
    "Citronela",
    "Chrismast cookies",
    "Cinnamon",
    "Rosas con chocolate",
    "Milk and coffe",
    "Menta y eucalipto",
    "Coconut",
    "Lavanda",
  ];

  const [cantidades, setCantidades] = useState({});
  const [aromasSeleccionados, setAromasSeleccionados] = useState({});
  const [metodosEntrega, setMetodosEntrega] = useState({});

  const categorias = [
    {
      nombre: "Ramos",
      icono: "💐",
    },
    {
      nombre: "Velas Aromáticas",
      icono: "🕯️",
    },
    {
      nombre: "Velas con Diseño",
      icono: "✨",
    },
    {
      nombre: "Recuerditos",
      icono: "🎁",
    },
    {
      nombre: "Velas Decorativas",
      icono: "🌸",
    },
  ];

  const productos = {
    Ramos: [
      { nombre: "Ramo Tulipanes", precio: 19, img: "🌷" },
      { nombre: "Ramo Rosas", precio: 35, img: "🌹" },
    ],

    "Velas Aromáticas": [
      { nombre: "Vela Coco", precio: 20, img: "🥥" },
      { nombre: "Vela Lavanda", precio: 25, img: "💜" },
    ],

    "Velas con Diseño": [
      { nombre: "Vela Mariposa", precio: 40, img: "🦋" },
      { nombre: "Vela Bubble", precio: 40, img: "✨" },
    ],

    Recuerditos: [
      { nombre: "Mini Vela", precio: 10, img: "🎀" },
      { nombre: "Caja Floral", precio: 15, img: "🎁" },
    ],

    "Velas Decorativas": [
      { nombre: "Vela Peonía", precio: 25, img: "🌸" },
      { nombre: "Vela Margarita", precio: 25, img: "🌼" },
    ],
  };

  return (
    <div
      style={{
        fontFamily: "Arial",
        background: "#f7f2ee",
        minHeight: "100vh",
        color: "#2f1f1f",
      }}
    >

      {/* ===== INICIO ===== */}
      {pantalla === "inicio" && (
        <section
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "20px",
            background: "linear-gradient(135deg, #eadccf, #f7f2ee)",
          }}
        >

          <h1
            style={{
              fontSize: "clamp(40px, 10vw, 80px)",
              letterSpacing: "5px",
              color: "#2f1f1f",
              marginBottom: "10px",
              textShadow: "2px 2px 10px rgba(0,0,0,0.15)",
            }}
          >
            JIREH OLAM
          </h1>

          <p
            style={{
              fontSize: "clamp(14px, 3vw, 20px)",
              color: "#6b5a5a",
              marginBottom: "30px",
            }}
          >
            Detalles que permanecen
          </p>

          <button
            onClick={() => setPantalla("categorias")}
            style={{
              padding: "15px 35px",
              border: "none",
              background: "#3e2f2f",
              color: "white",
              borderRadius: "12px",
              fontSize: "16px",
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            }}
          >
            Ver Catálogo
          </button>

        </section>
      )}

      {/* ===== CATEGORÍAS ===== */}
      {pantalla === "categorias" && (
        <section style={{ padding: "50px 20px" }}>

          <h2
            style={{
              textAlign: "center",
              fontSize: "40px",
              marginBottom: "40px",
            }}
          >
            Categorías
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >

            {categorias.map((cat, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "30px",
                  borderRadius: "20px",
                  textAlign: "center",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                }}
              >

                <div style={{ fontSize: "60px" }}>
                  {cat.icono}
                </div>

                <h3 style={{ marginTop: "15px" }}>
                  {cat.nombre}
                </h3>

                <button
                  onClick={() => {
                    setCategoriaActual(cat.nombre);
                    setPantalla("productos");
                  }}
                  style={{
                    marginTop: "15px",
                    padding: "12px 22px",
                    border: "none",
                    background: "#3e2f2f",
                    color: "white",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                >
                  Ver Productos
                </button>

              </div>
            ))}

          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button
              onClick={() => setPantalla("inicio")}
              style={{
                padding: "10px 18px",
                border: "none",
                background: "#3e2f2f",
                color: "white",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              ← Volver
            </button>
          </div>

        </section>
      )}

      {/* ===== PRODUCTOS ===== */}
      {pantalla === "productos" && (
        <section style={{ padding: "50px 20px" }}>

          <h2
            style={{
              textAlign: "center",
              fontSize: "40px",
              marginBottom: "40px",
            }}
          >
            {categoriaActual}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >

            {productos[categoriaActual].map((p, index) => {

              const cantidad = cantidades[p.nombre] || 1;
              const aroma = aromasSeleccionados[p.nombre] || "Sin aroma";
              const metodo = metodosEntrega[p.nombre] || "Delivery";
              const total = p.precio * cantidad;

              const mensaje = `
Hola, quiero hacer un pedido ✨

📦 Producto: ${p.nombre}

🌸 Aroma: ${aroma}

🔢 Cantidad: ${cantidad}

💰 Total aproximado: S/${total}

🚚 Método de entrega: ${metodo}

Gracias 😊
`;

              return (
                <div
                  key={index}
                  style={{
                    background: "white",
                    padding: "25px",
                    borderRadius: "20px",
                    textAlign: "center",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                  }}
                >

                  <div style={{ fontSize: "65px" }}>
                    {p.img}
                  </div>

                  <h3 style={{ marginTop: "10px" }}>
                    {p.nombre}
                  </h3>

                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "22px",
                    }}
                  >
                    S/{p.precio}
                  </p>

                  {/* AROMA */}
                  <select
                    value={aroma}
                    onChange={(e) =>
                      setAromasSeleccionados({
                        ...aromasSeleccionados,
                        [p.nombre]: e.target.value,
                      })
                    }
                    style={{
                      width: "100%",
                      padding: "12px",
                      borderRadius: "10px",
                      border: "1px solid #ddd",
                      marginTop: "15px",
                    }}
                  >
                    {aromas.map((a, i) => (
                      <option key={i}>{a}</option>
                    ))}
                  </select>

                  {/* CANTIDAD */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "15px",
                      marginTop: "18px",
                    }}
                  >

                    <button
                      onClick={() =>
                        setCantidades({
                          ...cantidades,
                          [p.nombre]: Math.max(1, cantidad - 1),
                        })
                      }
                      style={{
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        border: "none",
                        background: "#3e2f2f",
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      -
                    </button>

                    <span style={{ fontSize: "18px" }}>
                      {cantidad}
                    </span>

                    <button
                      onClick={() =>
                        setCantidades({
                          ...cantidades,
                          [p.nombre]: cantidad + 1,
                        })
                      }
                      style={{
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                        border: "none",
                        background: "#3e2f2f",
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      +
                    </button>

                  </div>

                  {/* ENTREGA */}
                  <select
                    value={metodo}
                    onChange={(e) =>
                      setMetodosEntrega({
                        ...metodosEntrega,
                        [p.nombre]: e.target.value,
                      })
                    }
                    style={{
                      width: "100%",
                      padding: "12px",
                      borderRadius: "10px",
                      border: "1px solid #ddd",
                      marginTop: "18px",
                    }}
                  >
                    <option>Delivery</option>
                    <option>Recojo en tienda</option>
                    <option>Envío por Shalom</option>
                  </select>

                  {/* TOTAL */}
                  <p
                    style={{
                      marginTop: "18px",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    Total: S/{total}
                  </p>

                  {/* WHATSAPP */}
                  <a
                    href={`https://wa.me/51912492522?text=${encodeURIComponent(mensaje)}`}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <button
                      style={{
                        marginTop: "10px",
                        padding: "14px 20px",
                        width: "100%",
                        border: "none",
                        background: "#25D366",
                        color: "white",
                        borderRadius: "12px",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      Pedir por WhatsApp
                    </button>
                  </a>

                </div>
              );
            })}

          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <button
              onClick={() => setPantalla("categorias")}
              style={{
                padding: "10px 18px",
                border: "none",
                background: "#3e2f2f",
                color: "white",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              ← Volver a Categorías
            </button>
          </div>

        </section>
      )}

    </div>
  );
}

export default App;