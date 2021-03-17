import React from 'react'
import renderer from 'react-test-renderer'
import projects from '../__mocks__/projects'
import Layout from './Layout'

const defaultProps = { projects }

it('renders correctly', () => {
  const tree = renderer.create(<Layout {...defaultProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})
