import { render } from '@testing-library/react'
import projects from '../../__mocks__/projects'
import PageLayout from './PageLayout'

jest.mock('../Navigation/Navigation', () => ({
  __esModule: true,
  default: () => <div>[NAVIGATION]</div>,
}))

describe('PageLayout', () => {
  it('renders nothing when initializing', () => {
    const { container } = render(<PageLayout projects={[]} />)
    expect(container).toMatchSnapshot()
  })

  it('renders the children when initialized', () => {
    const child = <div>Hello World!</div>
    const { container } = render(<PageLayout projects={projects}>{child}</PageLayout>)
    expect(container).toMatchSnapshot()
  })
})
