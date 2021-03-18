import { render } from '@testing-library/react'
import React from 'react'
import Loader from './Loader'

it('renders correctly', () => {
  const { container } = render(<Loader />)
  expect(container).toMatchSnapshot()
})
