import { render } from '@testing-library/react'
import React from 'react'
import mockProjects from '../../__mocks__/projects'
import Work from './[...slug].page'

describe('Work', () => {
  it('renders correctly', () => {
    const { container } = render(<Work projects={mockProjects} />)
    expect(container).toMatchSnapshot()
  })
})
