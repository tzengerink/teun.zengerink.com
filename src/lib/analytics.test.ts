import { trackPageView } from './analytics'

describe('trackPageView', () => {
  test('logs to the console', () => {
    jest.spyOn(console, 'info').mockImplementationOnce(() => undefined)
    trackPageView()
    expect(console.info).toHaveBeenCalled()
  })
})
