import { render } from '@testing-library/react'
import React from 'react'
import projects from '../__mocks__/projects'
import Error from './404.page'

jest.mock('next/router', () => ({
  useRouter: () => ({ asPath: '/' }),
}))

describe('Error', () => {
  it('renders correctly', () => {
    const { container } = render(<Error projects={projects} />)
    expect(container).toMatchSnapshot()
  })
})
