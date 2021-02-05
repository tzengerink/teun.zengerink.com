import React from 'react'
import renderer from 'react-test-renderer'
import Layout from '../../components/Layout'
import projects from '../../__mocks__/projects'

const defaultProps = { projects }

it('renders correctly', () => {
  const tree = renderer.create(<Layout {...defaultProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})
