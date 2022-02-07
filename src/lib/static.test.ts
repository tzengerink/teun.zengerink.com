import mockProjects from '../__mocks__/projects'
import { getStaticPaths, getStaticProps } from './static'

jest.mock('./projects', () => ({
  createGetProjects: () => () => Promise.resolve(mockProjects),
}))

describe('getStaticProps', () => {
  it('should get the props', async () => {
    const props = await getStaticProps()
    expect(props).toEqual({ props: { projects: mockProjects } })
  })
})

describe('getStaticPaths', () => {
  it('gets the paths', async () => {
    const numberOfProjectsWithStatement = mockProjects.filter((project) => !!project.statement).length
    const numberOfPhotos = mockProjects.reduce((sum, project) => sum + project.photos.length, 0)
    const paths = await getStaticPaths()
    expect(paths.fallback).toBe(false)
    expect(paths.paths.length).toEqual(numberOfProjectsWithStatement + numberOfPhotos)
  })
})
