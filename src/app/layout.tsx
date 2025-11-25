import React from 'react'
import { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Teun Zengerink',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="font-mono font-light text-grey/90">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,500;1,300&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="bg-white m-0">
        {children}
      </body>
    </html>
  )
}
