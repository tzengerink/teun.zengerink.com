import { render } from '@testing-library/react'
import mockLink from '@mocks/nextLink'
import projects from '@mocks/projects'
import ProjectLink from '@components/ProjectLink/ProjectLink'

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
