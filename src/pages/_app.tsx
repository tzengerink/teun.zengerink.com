import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { trackPageView } from '../lib/googleAnalytics'
import '../styles/globals.scss'

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => trackPageView(url)
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router.events])

  return <Component {...pageProps} />
}

export default App
