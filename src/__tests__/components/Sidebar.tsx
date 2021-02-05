import React from 'react'
import renderer from 'react-test-renderer'
import Sidebar from '../../components/Sidebar'
import projects from '../../__mocks__/projects'

const defaultProps = {
  pageTitle: 'My Homepage',
  projects,
}

it('renders correctly', () => {
  const tree = renderer.create(<Sidebar {...defaultProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})
