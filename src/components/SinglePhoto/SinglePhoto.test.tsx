import { render } from '@testing-library/react'
import React from 'react'
import projects from '../../__mocks__/projects'
import SinglePhoto from './SinglePhoto'

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children }) => <a href={href}>{children}</a>,
}))

describe('SinglePhoto', () => {
  it('renders correctly for projects with a statement', () => {
    const { container } = render(<SinglePhoto project={projects[0]} />)
    expect(container).toMatchSnapshot()
  })

  it('renders correctly for projects without a statement', () => {
    const { container } = render(<SinglePhoto project={projects[1]} />)
    expect(container).toMatchSnapshot()
  })
})
