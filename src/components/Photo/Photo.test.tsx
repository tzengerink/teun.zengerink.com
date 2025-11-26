import { render } from '@testing-library/react'
import projects from '@mocks/projects'
import Photo from '@components/Photo/Photo'

describe('Photo', () => {
  it('renders correctly', () => {
    const { container } = render(<Photo photo={projects[0].photos[0]} alt="The alt text" />)
    expect(container).toMatchSnapshot()
  })
})
