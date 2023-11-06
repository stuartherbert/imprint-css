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
      <body>
        <main role="main" className="imprint">
          {children}
        </main>
      </body>
    </html>
  )
}
