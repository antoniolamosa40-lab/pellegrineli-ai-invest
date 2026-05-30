"use client"

import { useState } from "react"

export default function Home() {
  const [valor, setValor] = useState(10000)

  function aumentar() {
    setValor(valor + 500)
  }

  function diminuir() {
    setValor(valor - 500)
  }

  return (
    <main style={{
      background: "#0a0a0a",
      minHeight: "100vh",
      padding: "40px",
      color: "white",
      fontFamily: "Arial"
    }}>
      
      <h1>PELLEGRINELI INVEST</h1>

      <p>Carteira Simulada Interativa</p>

      <div style={{
        background: "#111",
        padding: "20px",
        borderRadius: "12px",
        marginTop: "20px"
      }}>
        <h2>Saldo da Carteira</h2>

        <h1 style={{ fontSize: "40px" }}>
          R$ {valor.toLocaleString()}
        </h1>

        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <button onClick={aumentar} style={{
            padding: "10px",
            background: "green",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}>
            + Ganhar
          </button>

          <button onClick={diminuir} style={{
            padding: "10px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}>
            - Perder
          </button>
        </div>
      </div>

    </main>
  )
}