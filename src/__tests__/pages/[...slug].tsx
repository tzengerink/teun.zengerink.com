import React from 'react'
import renderer from 'react-test-renderer'
import Work from '../../pages/work/[...slug]'
import projects from '../../__mocks__/projects'

const defaultProps = { projects }

it('renders correctly', () => {
  const tree = renderer.create(<Work {...defaultProps} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('displays a loader when no projects are loaded', () => {
  const props = { projects: [] }
  const tree = renderer.create(<Work {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
