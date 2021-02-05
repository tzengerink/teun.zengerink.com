import React from 'react'
import renderer from 'react-test-renderer'
import Error404 from '../../pages/404'
import projects from '../../__mocks__/projects'

const defaultProps = { projects }

it('renders correctly', () => {
  const tree = renderer.create(<Error404 {...defaultProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})
