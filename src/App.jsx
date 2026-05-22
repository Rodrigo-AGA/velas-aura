import { useState } from "react";

function App() {

  const [pantalla, setPantalla] = useState("inicio");
  const [categoriaActual, setCategoriaActual] = useState("");

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
      { nombre: "Ramo Tulipanes", precio: "S/19", img: "🌷" },
      { nombre: "Ramo Rosas", precio: "S/35", img: "🌹" },
    ],

    "Velas Aromáticas": [
      { nombre: "Vela Coco", precio: "S/20", img: "🥥" },
      { nombre: "Vela Lavanda", precio: "S/25", img: "💜" },
    ],

    "Velas con Diseño": [
      { nombre: "Vela Mariposa", precio: "S/40", img: "🦋" },
      { nombre: "Vela Bubble", precio: "S/40", img: "✨" },
    ],

    Recuerditos: [
      { nombre: "Mini Vela", precio: "S/10", img: "🎀" },
      { nombre: "Caja Floral", precio: "S/15", img: "🎁" },
    ],

    "Velas Decorativas": [
      { nombre: "Vela Peonía", precio: "S/25", img: "🌸" },
      { nombre: "Vela Margarita", precio: "S/25", img: "🌼" },
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
              fontSize: "clamp(45px, 10vw, 80px)",
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
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >

            {productos[categoriaActual].map((p, index) => (
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
                    fontSize: "18px",
                  }}
                >
                  {p.precio}
                </p>

                <a
                  href={`https://wa.me/51912492522?text=Hola, quiero información sobre ${p.nombre}`}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <button
                    style={{
                      marginTop: "10px",
                      padding: "12px 20px",
                      border: "none",
                      background: "#25D366",
                      color: "white",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Pedir por WhatsApp
                  </button>
                </a>

              </div>
            ))}

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