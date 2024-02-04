import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ImprintCSS - Beautiful typography for document-oriented websites',
  description: 'Tutorial and reference site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="imprint">
        <main role="main">
          {children}
        </main>
      </body>
    </html>
  )
}
