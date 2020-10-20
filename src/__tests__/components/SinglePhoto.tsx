import React from 'react'
import renderer from 'react-test-renderer'
import SinglePhoto from '../../components/SinglePhoto'
import projects from './__mocks__/projects'

it('renders correctly', () => {
  const tree = renderer.create(<SinglePhoto project={projects[0]} />).toJSON()
  expect(tree).toMatchSnapshot()
})
