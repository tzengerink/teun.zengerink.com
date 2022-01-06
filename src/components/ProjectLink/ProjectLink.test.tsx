import { render } from '@testing-library/react'
import React from 'react'
import mockLink from '../../__mocks__/nextLink'
import projects from '../../__mocks__/projects'
import ProjectLink from './ProjectLink'

jest.mock('next/link', () => mockLink)

describe('SinglePhoto', () => {
  it('renders correctly for projects with a statement', () => {
    const { container } = render(<ProjectLink project={projects[0]} />)
    expect(container).toMatchSnapshot()
  })

  it('renders correctly for projects without a statement', () => {
    const { container } = render(<ProjectLink project={projects[1]} />)
    expect(container).toMatchSnapshot()
  })
})
