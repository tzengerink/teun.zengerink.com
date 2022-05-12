import { render } from '@testing-library/react'
import { Router } from 'next/router'
import React from 'react'
import { trackPageView } from '../lib/analytics'
import App from './_app.page'

const mockTrackPageView = jest.fn()
jest.mock('../lib/analytics', () => ({ trackPageView: () => mockTrackPageView() }))

describe('App', () => {
  const Component: React.FC = () => <div>[COMPONENT]</div>
  const router = { events: { on: jest.fn(), off: jest.fn() } } as unknown as Router

  it('renders correctly', () => {
    const { container } = render(<App Component={Component} router={router} pageProps={{}} />)
    expect(container).toMatchSnapshot()
  })

  it('registers page view tracking', () => {
    const { unmount } = render(<App Component={Component} router={router} pageProps={{}} />)
    expect(mockTrackPageView).toHaveBeenCalled()
    expect(router.events.on).toHaveBeenCalledWith('routeChangeComplete', trackPageView)
    unmount()
    expect(router.events.off).toHaveBeenCalledWith('routeChangeComplete', trackPageView)
  })
})
