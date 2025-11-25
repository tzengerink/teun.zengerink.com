import projects from '../__mocks__/projects'
import { useProject } from './useProject'

let mockPush: jest.Mock

jest.mock('next/navigation', () => ({
  __esModule: true,
  useRouter: jest.fn(() => ({ push: mockPush })),
}))

beforeEach(() => {
  mockPush = jest.fn(() => new Promise(() => true))
})

describe('activeKey', () => {
  test('it returns first photo key when no photo is active', () => {
    const { activeKey } = useProject(projects[0])
    expect(activeKey).toBe(projects[0].photos[0].key)
  })

  test('it returns the photo key', () => {
    const { activeKey } = useProject(projects[0], [projects[0].slug, projects[0].photos[1].key])
    expect(activeKey).toBe(projects[0].photos[1].key)
  })
})

describe('next', () => {
  test('it opens the first photo when viewing the last photo', () => {
    const { next } = useProject({ ...projects[0], statement: undefined }, ['my-project', '03'])
    next()
    expect(mockPush).toHaveBeenCalledWith(`/work/${projects[0].slug}/01`)
  })

  test('it opens the next photo', () => {
    const { next } = useProject({ ...projects[0], statement: undefined }, ['my-project', '02'])
    next()
    expect(mockPush).toHaveBeenCalledWith(`/work/${projects[0].slug}/03`)
  })
})

describe('previous', () => {
  test('it opens the last photo when viewing the first photo', () => {
    const { previous } = useProject({ ...projects[0], statement: undefined }, ['my-project', '01'])
    previous()
    expect(mockPush).toHaveBeenCalledWith(`/work/${projects[0].slug}/03`)
  })

  test('it opens the previous photo', () => {
    const { previous } = useProject({ ...projects[0], statement: undefined }, ['my-project', '02'])
    previous()
    expect(mockPush).toHaveBeenCalledWith(`/work/${projects[0].slug}/01`)
  })
})
