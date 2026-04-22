import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Feuille（フィーユ）— ネイル＆まつ毛サロン｜代官山',
  description:
    '素肌に、やさしい美しさを。代官山の隠れ家ネイル＆まつ毛サロン。完全予約制・完全個室。',
  openGraph: {
    title: 'Feuille（フィーユ）— ネイル＆まつ毛サロン｜代官山',
    description: '素肌に、やさしい美しさを。代官山の隠れ家ネイル＆まつ毛サロン。',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  )
}
