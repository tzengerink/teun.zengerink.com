import { render } from '@testing-library/react'
import { Router } from 'next/router'
import React from 'react'
import App from './_app.page'

describe('App', () => {
  const Component: React.FC = () => <div>[COMPONENT]</div>
  const router = { events: { on: jest.fn(), off: jest.fn() } } as unknown as Router

  it('renders correctly', () => {
    const { container } = render(<App Component={Component} router={router} pageProps={{}} />)
    expect(container).toMatchSnapshot()
  })

  it('starts and stops page view tracking', () => {
    const { unmount } = render(<App Component={Component} router={router} pageProps={{}} />)
    expect(router.events.on).toHaveBeenCalledWith('routeChangeComplete', expect.any(Function))
    unmount()
    expect(router.events.off).toHaveBeenCalledWith('routeChangeComplete', expect.any(Function))
  })
})
