import React from 'react'
import renderer from 'react-test-renderer'
import projects from '../../__mocks__/projects'
import ProjectSlideshow from './ProjectSlideshow'

const defaultProps = { project: projects[0] }

const mockNext = jest.fn()
const mockPrevious = jest.fn()

jest.mock('../../lib/useProject', () => ({
  useProject: () => ({
    activeKey: 'active',
    next: () => mockNext(),
    previous: () => mockPrevious(),
  }),
}))

describe('ProjectSlideshow', () => {
  const create = (props = defaultProps) => renderer.create(<ProjectSlideshow {...props} />)

  it('renders correctly', () => {
    const tree = create().toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('triggers next on right arrow key up', () => {
    const event = new KeyboardEvent('keyup', { key: 'ArrowRight' })
    create().toJSON()
    window.dispatchEvent(event)
    expect(mockNext).toHaveBeenCalled()
  })

  it('triggers previous on left arrow key up', () => {
    const event = new KeyboardEvent('keyup', { key: 'ArrowLeft' })
    create().toJSON()
    window.dispatchEvent(event)
    expect(mockPrevious).toHaveBeenCalled()
  })
})
