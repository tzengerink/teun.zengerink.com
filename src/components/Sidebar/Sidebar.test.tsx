import { render } from '@testing-library/react'
import React from 'react'
import projects from '../../__mocks__/projects'
import Sidebar from './Sidebar'

const defaultProps = { pageTitle: 'My Homepage', projects }

it('renders correctly', () => {
  const { container } = render(<Sidebar {...defaultProps} />)
  expect(container).toMatchSnapshot()
})
