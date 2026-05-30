"use client"

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

        <button onClick={ganhar} style={{
          marginRight: "10px",
          padding: "10px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "8px"
        }}>
          Ganhar
        </button>

        <button onClick={perder} style={{
          padding: "10px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "8px"
        }}>
          Perder
        </button>
      </div>

      <div style={{
        display: "grid",
        gap: "10px"
      }}>

        <div style={{ background: "#111", padding: "15px", borderRadius: "10px" }}>
          IA Financeira ativa 🤖
        </div>

        <div style={{ background: "#111", padding: "15px", borderRadius: "10px" }}>
          Mercado em análise 📊
        </div>

        <div style={{ background: "#111", padding: "15px", borderRadius: "10px" }}>
          Alertas de ativos 🔔
        </div>

      </div>

    </main>
  )
}