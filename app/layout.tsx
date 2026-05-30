export const metadata = {
  title: "PELLEGRINELI INVEST",
  description: "Plataforma financeira",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body style={{ margin: 0, background: "black", color: "white" }}>
        {children}
      </body>
    </html>
  )
}