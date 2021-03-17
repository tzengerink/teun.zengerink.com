import React from 'react'
import renderer from 'react-test-renderer'
import projects from '../../__mocks__/projects'
import SinglePhoto from './SinglePhoto'

const defaultProps = { project: projects[0] }

it('renders correctly', () => {
  const tree = renderer.create(<SinglePhoto {...defaultProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})
