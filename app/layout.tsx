import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'No Track Limits Mod Config Editor',
  description: "Easily configure the No Track Limits mod for Planet Coaster 2!"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
