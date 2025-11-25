import React from 'react'
import { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import '../styles/globals.css'

const robotoMono = Roboto_Mono({
  weight: ['300', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Teun Zengerink',
    template: 'Teun Zengerink - %s',
  },
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
    <html lang="en" className={`${robotoMono.className} font-light text-grey/90`}>
      <body className="bg-white m-0">
        {children}
      </body>
    </html>
  )
}
