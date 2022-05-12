import { trackPageView } from './analytics'

describe('trackPageView', () => {
  const ENV = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...ENV }
    window._paq = { push: jest.fn() }
  })

  afterEach(() => {
    process.env = ENV
  })

  test('tracks page view', () => {
    trackPageView()
    expect(window._paq.push).toHaveBeenCalledWith(['trackPageView'])
  })

  test('logs to the console when piwik app id not configured', () => {
    jest.spyOn(console, 'info').mockImplementationOnce(() => undefined)
    process.env.NEXT_PUBLIC_PIWIK_APP_ID = ''
    trackPageView()
    expect(console.info).toHaveBeenCalled()
    expect(window._paq.push).not.toHaveBeenCalled()
  })
})
