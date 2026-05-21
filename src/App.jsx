import { useState } from "react";

function App() {
  const [verCatalogo, setVerCatalogo] = useState(false);

  const productos = [
    { nombre: "Vela Margarita", precio: "S/25", img: "🌼" },
    { nombre: "Vela Coco", precio: "S/20", img: "🥥" },
    { nombre: "Vela Bubble", precio: "S/40", img: "✨" },
    { nombre: "Vela Mariposa", precio: "S/40", img: "🦋" },
    { nombre: "Velas Peonías", precio: "S/25", img: "🌸" },
    { nombre: "Ramo Tulipanes", precio: "S/19", img: "🌷" },
  ];

  return (
    <div
      style={{
        fontFamily: "Arial",
        background: "#f7f2ee",
        color: "#2d1f1f",
        minHeight: "100vh",
      }}
    >

      {/* ===== INICIO ===== */}
      {!verCatalogo && (
        <section
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            background: "linear-gradient(135deg, #e8d9c8, #f7f2ee)",
            padding: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              letterSpacing: "5px",
              color: "#2f1f1f",
              textShadow: "2px 2px 12px rgba(0,0,0,0.15)",
              marginBottom: "10px",
            }}
          >
            JIREH OLAM
          </h1>

          <p
            style={{
              fontSize: "18px",
              opacity: 0.75,
              marginBottom: "30px",
            }}
          >
            Velas artesanales que iluminan momentos especiales
          </p>

          <button
            onClick={() => setVerCatalogo(true)}
            style={{
              padding: "14px 36px",
              border: "none",
              background: "#3e2f2f",
              color: "white",
              fontSize: "16px",
              borderRadius: "12px",
              cursor: "pointer",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}
          >
            Ver Catálogo
          </button>
        </section>
      )}

      {/* ===== CATÁLOGO ===== */}
      {verCatalogo && (
        <section style={{ padding: "50px 20px" }}>

          {/* HEADER */}
          <div style={{ textAlign: "center", marginBottom: "25px" }}>
            <h2
              style={{
                fontSize: "44px",
                color: "#2f1f1f",
                marginBottom: "5px",
                letterSpacing: "2px",
              }}
            >
              Catálogo
            </h2>

            <p style={{ color: "#6b5a5a", fontSize: "14px" }}>
              Colección artesanal premium
            </p>
          </div>

          {/* BOTÓN VOLVER */}
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <button
              onClick={() => setVerCatalogo(false)}
              style={{
                padding: "10px 16px",
                border: "none",
                background: "#3e2f2f",
                color: "white",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              ← Volver al inicio
            </button>
          </div>

          {/* PRODUCTOS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "28px",
              maxWidth: "1100px",
              margin: "0 auto",
            }}
          >
            {productos.map((p, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "25px",
                  borderRadius: "20px",
                  textAlign: "center",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <div style={{ fontSize: "60px" }}>{p.img}</div>

                <h3 style={{ marginTop: "10px" }}>{p.nombre}</h3>

                <p style={{ fontWeight: "bold", fontSize: "17px" }}>
                  {p.precio}
                </p>

                {/* WHATSAPP */}
                <a
                  href={`https://wa.me/51912492522?text=Hola, quiero información sobre ${p.nombre}`}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  <button
                    style={{
                      marginTop: "12px",
                      padding: "10px 16px",
                      border: "none",
                      background: "#25D366",
                      color: "white",
                      borderRadius: "10px",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    Pedir por WhatsApp
                  </button>
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}

export default App;