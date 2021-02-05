import React from 'react'
import renderer from 'react-test-renderer'
import Home from '../../pages/index'
import projects from '../../__mocks__/projects'

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
