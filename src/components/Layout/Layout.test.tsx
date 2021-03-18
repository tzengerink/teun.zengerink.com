import { render } from '@testing-library/react'
import React from 'react'
import projects from '../../__mocks__/projects'
import Layout from './Layout'

jest.mock('../Sidebar/Sidebar', () => ({
  __esModule: true,
  default: () => <div>[SIDEBAR]</div>,
}))

describe('Layout', () => {
  it('renders a loader when initializing', () => {
    const { container } = render(<Layout projects={null} />)
    expect(container).toMatchSnapshot()
  })

  it('renders the children when initialized', () => {
    const child = <div>Hello World!</div>
    const { container } = render(<Layout projects={projects}>{child}</Layout>)
    expect(container).toMatchSnapshot()
  })
})
