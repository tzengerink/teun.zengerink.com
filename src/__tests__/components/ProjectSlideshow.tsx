import React from 'react'
import renderer from 'react-test-renderer'
import ProjectSlideshow from '../../components/ProjectSlideshow'
import projects from '../../__mocks__/projects'

const defaultProps = { project: projects[0] }

it('renders correctly', () => {
  const tree = renderer.create(<ProjectSlideshow {...defaultProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})
