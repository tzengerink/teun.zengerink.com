import { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import { trackPageView } from '../lib/analytics'
import '../styles/globals.css'

const App: React.FC<AppProps> = ({ Component, router, pageProps }) => {
  useEffect(() => {
    trackPageView()
    router.events.on('routeChangeComplete', trackPageView)
    return () => router.events.off('routeChangeComplete', trackPageView)
  }, [router.events])

  return <Component {...pageProps} />
}

export default App
