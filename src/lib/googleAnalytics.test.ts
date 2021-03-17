import { trackPageView } from './googleAnalytics'

describe('trackPageView', () => {
  const ENV = process.env
  const url = '/work/project-title'

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...ENV }
    window.gtag = jest.fn()
  })

  afterEach(() => {
    process.env = ENV
  })

  test('tracks page view when tracking id is set', () => {
    const trackingId = 'my-tracking-id'
    process.env.NEXT_PUBLIC_TRACKING_ID = trackingId
    trackPageView(url)
    expect(window.gtag).toHaveBeenCalledWith('config', trackingId, { page_path: url })
  })

  test('skips tracking when tracking id not set', () => {
    process.env.NEXT_PUBLIC_TRACKING_ID = ''
    trackPageView(url)
    expect(window.gtag).not.toHaveBeenCalled()
  })
})
