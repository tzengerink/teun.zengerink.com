import React from 'react'
import renderer from 'react-test-renderer'
import Layout from '../Layout'
import projects from './__mocks__/projects'

it('renders correctly', () => {
  const tree = renderer.create(<Layout projects={projects} />).toJSON()
  expect(tree).toMatchSnapshot()
})
