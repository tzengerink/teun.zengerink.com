import { AppProps } from 'next/app'
import React, { useEffect } from 'react'
import { trackPageView } from '../lib/googleAnalytics'
import '../styles/globals.css'

const App: React.FC<AppProps> = ({ Component, router, pageProps }) => {
  useEffect(() => {
    const handleRouteChange = (url: string) => trackPageView(url)
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return <Component {...pageProps} />
}

export default App
