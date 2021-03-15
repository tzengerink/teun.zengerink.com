import React from 'react'
import renderer from 'react-test-renderer'
import Work, { getStaticPaths } from '../../pages/work/[...slug]'
import mockProjects from '../../__mocks__/projects'

const mockGetProjects = jest.fn(() => new Promise((resolve) => resolve(mockProjects)))

jest.mock('../../lib/projects', () => ({ getProjects: () => mockGetProjects() }))

const defaultProps = { projects: mockProjects }

describe('Work', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Work {...defaultProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('displays a loader when no projects are loaded', () => {
    const props = { projects: [] }
    const tree = renderer.create(<Work {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('getStaticPaths', () => {
  it('gets the paths', async () => {
    const numberOfProjectsWithStatement = mockProjects.filter((project) => !!project.statement).length
    const numberOfPhotos = mockProjects.reduce((sum, project) => sum + project.photos.length, 0)
    const paths = await getStaticPaths()
    expect(mockGetProjects).toHaveBeenCalled()
    expect(paths.fallback).toBe(false)
    expect(paths.paths.length).toEqual(numberOfProjectsWithStatement + numberOfPhotos)
  })
})
