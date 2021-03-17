import React from 'react'
import renderer from 'react-test-renderer'
import projects from '../__mocks__/projects'
import Error from './404.page'

describe('Error', () => {
  it('renders correctly', () => {
    const props = { projects }
    const tree = renderer.create(<Error {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
