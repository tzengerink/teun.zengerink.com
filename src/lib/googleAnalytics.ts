declare global {
  interface Window {
    gtag: (...any) => void
  }
}

export const trackPageView = (url: string): void => {
  if (!process.env.NEXT_PUBLIC_TRACKING_ID) return console.info(`[Tracking Pageview] ${url}`)
  window.gtag('config', process.env.NEXT_PUBLIC_TRACKING_ID, {
    page_path: url,
  })
}
