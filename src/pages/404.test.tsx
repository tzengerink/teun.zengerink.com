import React from 'react'
import renderer from 'react-test-renderer'
import projects from '../__mocks__/projects'
import Error404 from './404'

const defaultProps = { projects }

it('renders correctly', () => {
  const tree = renderer.create(<Error404 {...defaultProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})
