export const trackPageView = (): void => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const method = process.env.NEXT_PUBLIC_PIWIK_APP_ID ? _paq.push : console.info
  method(['trackPageView'])
}
