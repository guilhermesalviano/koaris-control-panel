import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './styles/globals.css'
import '@koaris/bloom-ui/dist/tailwind.css'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Koaris | Painel de Controle',
  description: 'Acompanhe o desempenho, gerencie equipes, e melhore a produtividade - tudo em um ambiente seguro e fácil de usar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
