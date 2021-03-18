import { render } from '@testing-library/react'
import React from 'react'
import projects from '../../__mocks__/projects'
import SinglePhoto from './SinglePhoto'

const defaultProps = { project: projects[0] }

it('renders correctly', () => {
  const { container } = render(<SinglePhoto {...defaultProps} />)
  expect(container).toMatchSnapshot()
})
