import React from 'react'
import renderer from 'react-test-renderer'
import projects from '../../__mocks__/projects'
import Layout from './Layout'

describe('Layout', () => {
  it('renders a loader when initializing', () => {
    const props = { projects: null }
    const tree = renderer.create(<Layout {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders the children when initialized', () => {
    const child = <div>Hello World!</div>
    const props = { projects }
    const tree = renderer.create(<Layout {...props}>{child}</Layout>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
