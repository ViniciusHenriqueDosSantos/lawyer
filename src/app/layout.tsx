import type { Metadata } from 'next'
import './globals.css'
import Head from 'next/head'

export const metadata: Metadata = {
  title: {
    template: '%s | Integridade Capital',
    default: 'Integridade Capital',
  },
  manifest: '/manifest.json',

};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {

  return (
    <html lang="pt">
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, maximum-scale=1,user-scalable=no, viewport-fit=cover"
        />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#0466C8" />
        <meta name="apple-mobile-web-app-title" content="Integra Capital" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="viewport" content="viewport-fit=cover" />

      </Head>
      <body

      >
        {children}
      </body>
    </html>
  )
}