import mockProjects from '../__mocks__/projects'
import { getStaticPaths, getStaticProps } from './static'

const mockGetProjects = jest.fn(() => new Promise((resolve) => resolve(mockProjects)))

jest.mock('./projects', () => ({ getProjects: () => mockGetProjects() }))

describe('getStaticProps', () => {
  it('should get the props', async () => {
    const props = await getStaticProps()
    expect(mockGetProjects).toHaveBeenCalled()
    expect(props).toEqual({ props: { projects: mockProjects } })
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
