import type { Metadata } from 'next'
import { Sora, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'YZIHUB',
  description: 'Hub central de automações, agentes e integrações YZI',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`dark ${sora.variable} ${mono.variable}`}>
      <body className="bg-hub-bg text-hub-text antialiased">
        {children}
      </body>
    </html>
  )
}
