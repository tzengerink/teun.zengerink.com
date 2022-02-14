import { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import { trackPageView } from '../lib/googleAnalytics'
import '../styles/globals.css'

const App: React.FC<AppProps> = ({ Component, router, pageProps }) => {
  useEffect(() => {
    router.events.on('routeChangeComplete', trackPageView)
    return () => router.events.off('routeChangeComplete', trackPageView)
  }, [router.events])

  return <Component {...pageProps} />
}

export default App
