import React from 'react'
import renderer from 'react-test-renderer'
import Sidebar from '../../components/Sidebar'
import projects from './__mocks__/projects'

it('renders correctly', () => {
  const tree = renderer.create(<Sidebar pageTitle="My Homepage" projects={projects} />).toJSON()
  expect(tree).toMatchSnapshot()
})
