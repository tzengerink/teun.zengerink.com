import React from 'react'
import renderer from 'react-test-renderer'
import Work from '../../pages/work/[...slug]'

it('renders correctly', () => {
  const tree = renderer.create(<Work />).toJSON()
  expect(tree).toMatchSnapshot()
})
