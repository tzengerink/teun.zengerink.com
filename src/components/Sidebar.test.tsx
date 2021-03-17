import React from 'react'
import renderer from 'react-test-renderer'
import projects from '../__mocks__/projects'
import Sidebar from './Sidebar'

const defaultProps = {
  pageTitle: 'My Homepage',
  projects,
}

it('renders correctly', () => {
  const tree = renderer.create(<Sidebar {...defaultProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})
