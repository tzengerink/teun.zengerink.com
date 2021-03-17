import React from 'react'
import renderer from 'react-test-renderer'
import projects from '../__mocks__/projects'
import Home from './index'

const defaultProps = { projects }

it('renders correctly', () => {
  const tree = renderer.create(<Home {...defaultProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('displays a loader when no projects are loaded', () => {
  const props = { projects: [] }
  const tree = renderer.create(<Home {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
