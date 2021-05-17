import { render } from '@testing-library/react'
import React from 'react'
import projects from '../__mocks__/projects'
import Home from './index.page'

jest.mock('next/router', () => ({
  useRouter: () => ({ asPath: '/' }),
}))

describe('Home', () => {
  it('renders correctly', () => {
    const { container } = render(<Home projects={projects} />)
    expect(container).toMatchSnapshot()
  })
})
