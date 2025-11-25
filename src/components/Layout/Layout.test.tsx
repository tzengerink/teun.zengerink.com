import { render } from '@testing-library/react'
import React from 'react'
import projects from '../../__mocks__/projects'
import Layout from './Layout'

jest.mock('../Navigation/Navigation', () => ({
  __esModule: true,
  default: () => <div>[NAVIGATION]</div>,
}))

describe('Layout', () => {
  it('renders nothing when initializing', () => {
    const { container } = render(<Layout projects={[]} />)
    expect(container).toMatchSnapshot()
  })

  it('renders the children when initialized', () => {
    const child = <div>Hello World!</div>
    const { container } = render(<Layout projects={projects}>{child}</Layout>)
    expect(container).toMatchSnapshot()
  })
})
