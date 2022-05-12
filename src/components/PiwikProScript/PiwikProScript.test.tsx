import { render } from '@testing-library/react'
import { PiwikProScript } from './PiwikProScript'

describe('PiwikProScript', () => {
  it('renders a Piwik Pro script tag', () => {
    const { container } = render(<PiwikProScript host={process.env.NEXT_PUBLIC_PIWIK_HOST} appId="some-piwik-app-id" />)
    expect(container).toMatchSnapshot()
  })

  it('renders nothing when no app configured', () => {
    const { container } = render(<PiwikProScript host={process.env.NEXT_PUBLIC_PIWIK_HOST} appId="" />)
    expect(container).toMatchSnapshot()
  })
})
