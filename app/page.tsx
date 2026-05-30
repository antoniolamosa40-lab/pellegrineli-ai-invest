export default function Home() {
  return (
    <main style={{
      background: "#0a0a0a",
      minHeight: "100vh",
      padding: "40px",
      color: "white",
      fontFamily: "Arial"
    }}>
      
      <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>
        PELLEGRINELI INVEST
      </h1>

      <p style={{ opacity: 0.7, marginBottom: "40px" }}>
        Inteligência financeira e análise de mercado em tempo real
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}>

        <div style={{ background: "#111", padding: "20px", borderRadius: "12px" }}>
          <h3>Carteira Simulada</h3>
          <p style={{ fontSize: "20px" }}>R$ 12.450,00</p>
        </div>

        <div style={{ background: "#111", padding: "20px", borderRadius: "12px" }}>
          <h3>Score de Mercado</h3>
          <p style={{ fontSize: "20px" }}>78 / 100</p>
        </div>

        <div style={{ background: "#111", padding: "20px", borderRadius: "12px" }}>
          <h3>Alertas de Ativos</h3>
          <p style={{ fontSize: "20px" }}>3 oportunidades</p>
        </div>

        <div style={{ background: "#111", padding: "20px", borderRadius: "12px" }}>
          <h3>Status da Plataforma</h3>
          <p style={{ color: "limegreen" }}>Online 🚀</p>
        </div>

      </div>

    </main>
  )
}