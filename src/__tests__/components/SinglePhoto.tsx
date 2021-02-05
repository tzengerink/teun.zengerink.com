import React from 'react'
import renderer from 'react-test-renderer'
import SinglePhoto from '../../components/SinglePhoto'
import projects from '../../__mocks__/projects'

const defaultProps = { project: projects[0] }

it('renders correctly', () => {
  const tree = renderer.create(<SinglePhoto {...defaultProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})
