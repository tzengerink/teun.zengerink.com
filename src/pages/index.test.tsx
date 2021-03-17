import React from 'react'
import renderer from 'react-test-renderer'
import projects from '../__mocks__/projects'
import Home from './index.page'

const defaultProps = { projects }

describe('Home', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Home {...defaultProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
