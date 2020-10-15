declare global {
  interface Window {
    gtag: (...any) => void
  }
}

export const trackPageView = (url: string): void => {
  if (!process.env.NEXT_PUBLIC_TRACKING_ID) return
  window.gtag('config', process.env.NEXT_PUBLIC_TRACKING_ID, {
    page_path: url,
  })
}
