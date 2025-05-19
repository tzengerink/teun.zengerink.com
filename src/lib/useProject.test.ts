import projects from '../__mocks__/projects'
import { useProject } from './useProject'

let mockRouter: { push: jest.Mock<Promise<void>> }

jest.mock('next/navigation', () => ({
  __esModule: true,
  useRouter: jest.fn(() => mockRouter),
}))

beforeEach(() => {
  mockRouter = { push: jest.fn(() => new Promise(() => true)) }
})

describe('next', () => {
  test('it opens the first photo when viewing the last photo', () => {
    const { next } = useProject({ ...projects[0], statement: undefined }, '03')
    next()
    expect(mockRouter.push).toHaveBeenCalledWith(`/work/${projects[0].slug}/01`)
  })

  test('it opens the next photo', () => {
    const { next } = useProject({ ...projects[0], statement: undefined }, '02')
    next()
    expect(mockRouter.push).toHaveBeenCalledWith(`/work/${projects[0].slug}/03`)
  })
})

describe('previous', () => {
  test('it opens the last photo when viewing the first photo', () => {
    const { previous } = useProject({ ...projects[0], statement: undefined }, '01')
    previous()
    expect(mockRouter.push).toHaveBeenCalledWith(`/work/${projects[0].slug}/03`)
  })

  test('it opens the previous photo', () => {
    const { previous } = useProject({ ...projects[0], statement: undefined }, '02')
    previous()
    expect(mockRouter.push).toHaveBeenCalledWith(`/work/${projects[0].slug}/01`)
  })
})
