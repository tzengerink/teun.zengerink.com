import React from 'react'
import renderer from 'react-test-renderer'
import mockProjects from '../../__mocks__/projects'
import Work from './[...slug].page'

const defaultProps = { projects: mockProjects }

describe('Work', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Work {...defaultProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
