declare global {
  interface Window {
    _paq: { push: (...any) => void }
  }
}

export const trackPageView = (): void => {
  const method = process.env.NEXT_PUBLIC_PIWIK_APP_ID && window?._paq?.push ? window._paq.push : console.info
  method(['trackPageView'])
}
