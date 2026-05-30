<h1>TESTE 123456 - ATUALIZOU</h1>

import { useState } from "react"

export default function Home() {
  const [valor, setValor] = useState(1284920)

  function ganhar() {
    setValor(valor + Math.floor(Math.random() * 5000))
  }

  function perder() {
    setValor(valor - Math.floor(Math.random() * 3000))
  }

  return (
    <main style={{
      background: "linear-gradient(to bottom, #0a0a0a, #000)",
      minHeight: "100vh",
      padding: "30px",
      color: "white",
      fontFamily: "Arial"
    }}>

      <h1 style={{
        fontSize: "32px",
        fontWeight: "bold",
        color: "#f5c542"
      }}>
        PELLEGRINELI INVEST
      </h1>

      <p style={{ opacity: 0.7, marginBottom: "30px" }}>
        Plataforma de inteligência financeira
      </p>

      <div style={{
        background: "#111",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "20px"
      }}>
        <h2>Carteira Total</h2>
        <p style={{ fontSize: "24px" }}>
          R$ {valor.toLocaleString()}
        </p>

        <button className="btn-green" onClick={ganhar}>Ganhar</button>

        <button className="btn-red" onClick={perder}>Perder</button>

      </div>

      <div style={{
        display: "grid",
        gap: "10px"
      }}>

        <div className="card">Carteira</div>

        <div className="card">IA</div>

        <div className="card">Mercado</div>

        <div className="card">Alertas</div>

      </div>

    </main>
  )
}