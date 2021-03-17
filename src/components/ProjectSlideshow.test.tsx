import React from 'react'
import renderer from 'react-test-renderer'
import projects from '../__mocks__/projects'
import ProjectSlideshow from './ProjectSlideshow'

const defaultProps = { project: projects[0] }

it('renders correctly', () => {
  const tree = renderer.create(<ProjectSlideshow {...defaultProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})
