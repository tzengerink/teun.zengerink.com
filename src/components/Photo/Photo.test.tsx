import { render } from '@testing-library/react'
import Photo from './Photo'

import projects from '../../__mocks__/projects'

describe('Photo', () => {
  it('renders correctly', () => {
    const { container } = render(<Photo photo={projects[0].photos[0]} alt="The alt text" />)
    expect(container).toMatchSnapshot()
  })
})
