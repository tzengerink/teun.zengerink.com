import { NextRouter } from 'next/router'
import ProjectRouter from '../../lib/ProjectRouter'
import projects from '../../__mocks__/projects'

class MockRouter {
  route
  pathname
  asPath
  basePath
  replace
  reload
  back
  prefetch
  beforePopState
  events
  isFallback

  query = { slug: undefined }
  push = jest.fn(() => new Promise(() => true))
}

const createMockRouter = () => (new MockRouter() as unknown) as NextRouter

describe('isActive', () => {
  test('it returns true when photo is active', () => {
    const mockRouter = createMockRouter()
    const projectRouter = new ProjectRouter(mockRouter, projects[0])
    mockRouter.query = { slug: [projects[0].slug, projects[0].photos[0].key] }
    expect(projectRouter.isActive(projects[0].photos[0])).toBe(true)
  })

  test('it returns false when photo is not active', () => {
    const mockRouter = createMockRouter()
    const projectRouter = new ProjectRouter(mockRouter, projects[0])
    mockRouter.query = { slug: [projects[0].slug, projects[0].photos[0].key] }
    expect(projectRouter.isActive(projects[0].photos[1])).toBe(false)
  })
})

describe('activeKey', () => {
  test('it returns `undefined` when no photo is active', () => {
    const mockRouter = createMockRouter()
    const projectRouter = new ProjectRouter(mockRouter, projects[0])
    expect(projectRouter.activeKey()).toBeUndefined()
  })

  test('it returns the photo key', () => {
    const mockRouter = createMockRouter()
    const projectRouter = new ProjectRouter(mockRouter, projects[0])
    mockRouter.query = { slug: [projects[0].slug, projects[0].photos[0].key] }
    expect(projectRouter.activeKey()).toBe(projects[0].photos[0].key)
  })
})

describe('countPhotos', () => {
  test('it pads the number of photos to a length of 2 by default', () => {
    const mockRouter = createMockRouter()
    const projectRouter = new ProjectRouter(mockRouter, projects[0])
    expect(projectRouter.countPhotos()).toEqual('03')
  })

  test('it pads the number of photos to a configured length', () => {
    const mockRouter = createMockRouter()
    const projectRouter = new ProjectRouter(mockRouter, projects[0])
    expect(projectRouter.countPhotos(3)).toEqual('003')
  })
})

describe('next', () => {
  describe('with statement', () => {
    test('it opens the first photo when viewing the statement', () => {
      const mockRouter = createMockRouter()
      const projectRouter = new ProjectRouter(mockRouter, projects[0])
      projectRouter.next()
      expect(mockRouter.push).toHaveBeenCalledWith(`/work/${projects[0].slug}/01`)
    })

    test('it opens the statement when viewing the last photo', () => {
      const mockRouter = createMockRouter()
      const projectRouter = new ProjectRouter(mockRouter, projects[0])
      mockRouter.query = { slug: ['my-project', '03'] }
      projectRouter.next()
      expect(mockRouter.push).toHaveBeenCalledWith(`/work/${projects[0].slug}`)
    })

    test('it opens the next photo', () => {
      const mockRouter = createMockRouter()
      const projectRouter = new ProjectRouter(mockRouter, projects[0])
      mockRouter.query = { slug: ['my-project', '02'] }
      projectRouter.next()
      expect(mockRouter.push).toHaveBeenCalledWith(`/work/${projects[0].slug}/03`)
    })
  })

  describe('without statement', () => {
    test('it opens the first photo when viewing the last photo', () => {
      const mockRouter = createMockRouter()
      const projectRouter = new ProjectRouter(mockRouter, { ...projects[0], statement: undefined })
      mockRouter.query = { slug: ['my-project', '03'] }
      projectRouter.next()
      expect(mockRouter.push).toHaveBeenCalledWith(`/work/${projects[0].slug}/01`)
    })

    test('it opens the next photo', () => {
      const mockRouter = createMockRouter()
      const projectRouter = new ProjectRouter(mockRouter, { ...projects[0], statement: undefined })
      mockRouter.query = { slug: ['my-project', '02'] }
      projectRouter.next()
      expect(mockRouter.push).toHaveBeenCalledWith(`/work/${projects[0].slug}/03`)
    })
  })
})

describe('previous', () => {
  describe('with statement', () => {
    test('it opens the last photo when viewing the statement', () => {
      const mockRouter = createMockRouter()
      const projectRouter = new ProjectRouter(mockRouter, projects[0])
      projectRouter.previous()
      expect(mockRouter.push).toHaveBeenCalledWith(`/work/${projects[0].slug}/03`)
    })

    test('it opens the statement when viewing the first photo', () => {
      const mockRouter = createMockRouter()
      const projectRouter = new ProjectRouter(mockRouter, projects[0])
      mockRouter.query = { slug: ['my-project', '01'] }
      projectRouter.previous()
      expect(mockRouter.push).toHaveBeenCalledWith(`/work/${projects[0].slug}`)
    })

    test('it opens the previous photo', () => {
      const mockRouter = createMockRouter()
      const projectRouter = new ProjectRouter(mockRouter, projects[0])
      mockRouter.query = { slug: ['my-project', '02'] }
      projectRouter.previous()
      expect(mockRouter.push).toHaveBeenCalledWith(`/work/${projects[0].slug}/01`)
    })
  })

  describe('without statement', () => {
    test('it opens the last photo when viewing the first photo', () => {
      const mockRouter = createMockRouter()
      const projectRouter = new ProjectRouter(mockRouter, { ...projects[0], statement: undefined })
      mockRouter.query = { slug: ['my-project', '01'] }
      projectRouter.previous()
      expect(mockRouter.push).toHaveBeenCalledWith(`/work/${projects[0].slug}/03`)
    })

    test('it opens the previous photo', () => {
      const mockRouter = createMockRouter()
      const projectRouter = new ProjectRouter(mockRouter, { ...projects[0], statement: undefined })
      mockRouter.query = { slug: ['my-project', '02'] }
      projectRouter.previous()
      expect(mockRouter.push).toHaveBeenCalledWith(`/work/${projects[0].slug}/01`)
    })
  })
})
