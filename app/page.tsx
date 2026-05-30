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

  const features = [
    {
      title: "IA Financeira",
      desc: "Análises inteligentes para decisões estratégicas em tempo real.",
    },
    {
      title: "Mercado em Tempo Real",
      desc: "Ações, FIIs, dólar e cripto atualizados automaticamente.",
    },
    {
      title: "Carteira Inteligente",
      desc: "Acompanhe evolução do seu patrimônio com precisão.",
    },
    {
      title: "Alertas Estratégicos",
      desc: "Oportunidades de mercado detectadas por IA.",
    },
  ]

  return (
    <div className="min-h-screen text-white bg-black overflow-hidden">

      {/* HERO */}
      <section className="relative border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 via-transparent to-green-500/20" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <div className="inline-flex px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-sm mb-6">
              PELLEGRINELI INVEST AI
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              O mercado muda em segundos.
              <span className="block text-yellow-400 mt-2">
                Sua decisão também deveria.
              </span>
            </h1>

            <p className="text-zinc-400 mt-6 text-lg max-w-xl">
              Plataforma de inteligência financeira com IA, análise de ativos e visão profissional de mercado.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold">
                COMEÇAR AGORA
              </button>
              <button className="border border-zinc-700 px-6 py-3 rounded-xl">
                VER DEMO
              </button>
            </div>
          </div>

          {/* DASHBOARD */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6">

            <div className="flex justify-between mb-6">
              <div>
                <p className="text-zinc-500 text-sm">Carteira Total</p>
                <h2 className="text-3xl font-bold">
                  R$ {valor.toLocaleString()}
                </h2>
              </div>

              <div className="text-green-400 bg-green-500/10 px-3 py-1 rounded-lg text-sm">
                +12.84%
              </div>
            </div>

            <div className="flex gap-3 mb-6">
              <button
                onClick={ganhar}
                className="bg-green-500 text-black px-4 py-2 rounded-xl font-bold"
              >
                + Ganhar
              </button>

              <button
                onClick={perder}
                className="bg-red-500 text-white px-4 py-2 rounded-xl font-bold"
              >
                - Perder
              </button>
            </div>

            <div className="space-y-3">

              <div className="bg-zinc-900 p-4 rounded-2xl">
                <p className="font-bold">PETR4</p>
                <p className="text-zinc-400 text-sm">Petrobras</p>
              </div>

              <div className="bg-zinc-900 p-4 rounded-2xl">
                <p className="font-bold">BTC</p>
                <p className="text-zinc-400 text-sm">Bitcoin</p>
              </div>

              <div className="bg-zinc-900 p-4 rounded-2xl">
                <p className="font-bold">IFIX</p>
                <p className="text-zinc-400 text-sm">Fundos Imobiliários</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-14">
          <p className="text-yellow-400 font-bold">DIFERENCIAIS</p>
          <h2 className="text-4xl font-black mt-2">
            Inteligência para investidores modernos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((f) => (
            <div key={f.title} className="bg-zinc-950 border border-zinc-800 p-6 rounded-3xl">
              <div className="text-yellow-400 font-bold mb-3">PI</div>
              <h3 className="font-bold text-xl mb-2">{f.title}</h3>
              <p className="text-zinc-400 text-sm">{f.desc}</p>
            </div>
          ))}

        </div>

      </section>

      {/* IA SECTION */}
      <section className="border-t border-zinc-800 bg-zinc-950/40">

        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14">

          <div>
            <p className="text-yellow-400 font-bold mb-4">PELLEGRINELI AI</p>

            <h2 className="text-4xl font-black mb-6">
              Inteligência artificial aplicada ao mercado financeiro
            </h2>

            <div className="text-zinc-400 space-y-3">
              <p>• Identificação de tendências</p>
              <p>• Análise automática de ativos</p>
              <p>• Insights de mercado em tempo real</p>
              <p>• Estratégias simplificadas</p>
            </div>
          </div>

          <div className="bg-black border border-zinc-800 rounded-3xl p-6">

            <div className="flex justify-between mb-6">
              <h3 className="font-bold">IA Assistente</h3>
              <span className="text-green-400">ONLINE</span>
            </div>

            <div className="space-y-4 text-sm">

              <div className="bg-zinc-900 p-3 rounded-xl">
                Quais setores estão fortes hoje?
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 p-3 rounded-xl text-zinc-300">
                Bancos e renda fixa seguem fortes com juros elevados.
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  )
}