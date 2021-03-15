import mockProjects from '../../__mocks__/projects'
import { getStaticProps } from '../../lib/staticProps'

const mock = jest.fn(() => mockProjects)

jest.mock('../../lib/projects', () => ({
  getProjects: () => mock(),
}))

describe('getStaticProps', () => {
  it('should get the props', async () => {
    const props = await getStaticProps()
    expect(mock).toHaveBeenCalled()
    expect(props).toEqual({ props: { projects: mockProjects } })
  })
})
