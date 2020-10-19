import React from 'react'
import renderer from 'react-test-renderer'
import ProjectSlideshow from '../ProjectSlideshow'
import projects from './__mocks__/projects'

it('renders correctly', () => {
  const tree = renderer.create(<ProjectSlideshow project={projects[0]} />).toJSON()
  expect(tree).toMatchSnapshot()
})
