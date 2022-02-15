import { render } from '@testing-library/react'
import { Router } from 'next/router'
import React from 'react'
import { trackPageView } from '../lib/googleAnalytics'
import App from './_app.page'

describe('App', () => {
  const Component: React.FC = () => <div>[COMPONENT]</div>
  const router = { events: { on: jest.fn(), off: jest.fn() } } as unknown as Router

  it('renders correctly', () => {
    const { container } = render(<App Component={Component} router={router} pageProps={{}} />)
    expect(container).toMatchSnapshot()
  })

  it('registers page view tracking', () => {
    const { unmount } = render(<App Component={Component} router={router} pageProps={{}} />)
    expect(router.events.on).toHaveBeenCalledWith('routeChangeComplete', trackPageView)
    unmount()
    expect(router.events.off).toHaveBeenCalledWith('routeChangeComplete', trackPageView)
  })
})
