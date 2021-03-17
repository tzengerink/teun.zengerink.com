import mockProjects from '../__mocks__/projects'
import { getStaticProps } from './staticProps'

const mock = jest.fn(() => mockProjects)

jest.mock('./projects', () => ({
  getProjects: () => mock(),
}))

describe('getStaticProps', () => {
  it('should get the props', async () => {
    const props = await getStaticProps()
    expect(mock).toHaveBeenCalled()
    expect(props).toEqual({ props: { projects: mockProjects } })
  })
})
