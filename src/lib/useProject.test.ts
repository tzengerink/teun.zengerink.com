import projects from '../__mocks__/projects'
import { useProject } from './useProject'

let mockRouter

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn(() => mockRouter),
}))

beforeEach(() => {
  mockRouter = {
    route: undefined,
    pathname: undefined,
    asPath: undefined,
    basePath: undefined,
    replace: undefined,
    reload: undefined,
    back: undefined,
    prefetch: undefined,
    beforePopState: undefined,
    events: undefined,
    isFallback: undefined,
    query: { slug: undefined },
    push: jest.fn(() => new Promise(() => true)),
  }
})

describe('activeKey', () => {
  test('it returns `undefined` when no photo is active', () => {
    const { activeKey } = useProject(projects[0])
    expect(activeKey).toBeUndefined()
  })

  test('it returns the photo key', () => {
    mockRouter.query = { slug: [projects[0].slug, projects[0].photos[0].key] }
    const { activeKey } = useProject(projects[0])
    expect(activeKey).toBe(projects[0].photos[0].key)
  })
})

describe('next', () => {
  describe('with statement', () => {
    test('it opens the first photo when viewing the statement', () => {
      const { next } = useProject(projects[0])
      next()
      expect(mockRouter.push).toHaveBeenCalledWith(`/work/${projects[0].slug}/01`)
    })

    test('it opens the statement when viewing the last photo', () => {
      mockRouter.query = { slug: ['my-project', '03'] }
      const { next } = useProject(projects[0])
      next()
      expect(mockRouter.push).toHaveBeenCalledWith(`/work/${projects[0].slug}`)
    })

    test('it opens the next photo', () => {
      mockRouter.query = { slug: ['my-project', '02'] }
      const { next } = useProject(projects[0])
      next()
      expect(mockRouter.push).toHaveBeenCalledWith(`/work/${projects[0].slug}/03`)
    })
  })

  describe('without statement', () => {
    test('it opens the first photo when viewing the last photo', () => {
      mockRouter.query = { slug: ['my-project', '03'] }
      const { next } = useProject({ ...projects[0], statement: undefined })
      next()
      expect(mockRouter.push).toHaveBeenCalledWith(`/work/${projects[0].slug}/01`)
    })

    test('it opens the next photo', () => {
      mockRouter.query = { slug: ['my-project', '02'] }
      const { next } = useProject({ ...projects[0], statement: undefined })
      next()
      expect(mockRouter.push).toHaveBeenCalledWith(`/work/${projects[0].slug}/03`)
    })
  })
})

describe('previous', () => {
  describe('with statement', () => {
    test('it opens the last photo when viewing the statement', () => {
      const { previous } = useProject(projects[0])
      previous()
      expect(mockRouter.push).toHaveBeenCalledWith(`/work/${projects[0].slug}/03`)
    })

    test('it opens the statement when viewing the first photo', () => {
      mockRouter.query = { slug: ['my-project', '01'] }
      const { previous } = useProject(projects[0])
      previous()
      expect(mockRouter.push).toHaveBeenCalledWith(`/work/${projects[0].slug}`)
    })

    test('it opens the previous photo', () => {
      mockRouter.query = { slug: ['my-project', '02'] }
      const { previous } = useProject(projects[0])
      previous()
      expect(mockRouter.push).toHaveBeenCalledWith(`/work/${projects[0].slug}/01`)
    })
  })

  describe('without statement', () => {
    test('it opens the last photo when viewing the first photo', () => {
      mockRouter.query = { slug: ['my-project', '01'] }
      const { previous } = useProject({ ...projects[0], statement: undefined })
      previous()
      expect(mockRouter.push).toHaveBeenCalledWith(`/work/${projects[0].slug}/03`)
    })

    test('it opens the previous photo', () => {
      mockRouter.query = { slug: ['my-project', '02'] }
      const { previous } = useProject({ ...projects[0], statement: undefined })
      previous()
      expect(mockRouter.push).toHaveBeenCalledWith(`/work/${projects[0].slug}/01`)
    })
  })
})
