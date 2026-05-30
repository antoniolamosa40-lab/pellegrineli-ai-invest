"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* NAVBAR */}
      <header className="w-full border-b border-zinc-800 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          <h1 className="text-2xl font-bold text-yellow-400">
            PELLEGRINELI INVEST
          </h1>

          <nav className="flex items-center gap-6">
            <a href="#" className="text-zinc-300 hover:text-white transition">
              Mercado
            </a>

            <a href="#" className="text-zinc-300 hover:text-white transition">
              IA Financeira
            </a>

            <a href="#" className="text-zinc-300 hover:text-white transition">
              Premium
            </a>

            <button className="bg-yellow-500 hover:bg-yellow-400 transition px-5 py-2 rounded-xl text-black font-bold">
              Login
            </button>
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-28">

        <div className="absolute w-[500px] h-[500px] bg-yellow-500/20 blur-3xl rounded-full"></div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold mb-6 relative z-10"
        >
          Inteligência Financeira
          <span className="text-yellow-400"> Premium</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-zinc-400 max-w-2xl text-lg mb-10 relative z-10"
        >
          Plataforma institucional com IA financeira,
          dados em tempo real e insights inteligentes
          para investidores modernos.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="bg-yellow-500 hover:bg-yellow-400 transition px-8 py-4 rounded-2xl text-black font-bold text-lg relative z-10"
        >
          Entrar na Lista VIP

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">

  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
    <p className="text-zinc-400">Carteira Simulada</p>
    <h3 className="text-2xl font-bold text-green-400">+ R$ 12.430</h3>
    <span className="text-zinc-500 text-sm">+3.2% hoje</span>
  </div>

  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
    <p className="text-zinc-400">Score de Mercado</p>
    <h3 className="text-2xl font-bold text-yellow-400">Neutro</h3>
    <span className="text-zinc-500 text-sm">IA analisando tendências</span>
  </div>

  <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
    <p className="text-zinc-400">Alertas Ativos</p>
    <h3 className="text-2xl font-bold text-red-400">3</h3>
    <span className="text-zinc-500 text-sm">Movimentos suspeitos</span>
  </div>

</div>

<div className="mt-16 max-w-3xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-6">

  <h3 className="text-xl font-bold text-yellow-400 mb-4">
    PELLEGRINELI AI
  </h3>

  <p className="text-zinc-400 mb-4">
    Pergunta: “O que está acontecendo com o mercado hoje?”
  </p>

  <div className="bg-black border border-zinc-800 rounded-xl p-4 text-zinc-300">
    A IA identificou aumento de volatilidade no mercado americano,
    com fluxo institucional migrando para ativos defensivos.
  </div>

</div>
        </motion.button>

      </section>

      {/* MARKET CARDS */}
      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-400 mb-2">Bitcoin</p>
            <h3 className="text-3xl font-bold">$ 118.420</h3>
            <span className="text-green-500 font-semibold">
              +4.82%
            </span>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-400 mb-2">Dólar</p>
            <h3 className="text-3xl font-bold">R$ 5,41</h3>
            <span className="text-red-500 font-semibold">
              -0.74%
            </span>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
            <p className="text-zinc-400 mb-2">IBOVESPA</p>
            <h3 className="text-3xl font-bold">138.420</h3>
            <span className="text-green-500 font-semibold">
              +1.21%
            </span>
          </div>

        </div>

      </section>

    </main>
  )
}