import { Project } from '../../lib/projectService'
import ProjectRouter from '../../lib/ProjectRouter'

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
  pushed = undefined

  push(value: string): Promise<boolean> {
    this.pushed = value
    return new Promise(() => true)
  }
}

const project: Project = {
  title: 'My Project',
  slug: 'my-project',
  photos: [
    {
      key: '01',
      url: 'first-photo.jpg',
    },
    {
      key: '02',
      url: 'second-photo.jpg',
    },
    {
      key: '03',
      url: 'third-photo.jpg',
    },
  ],
  statement: 'The project statement',
}

describe('isActive', () => {
  test('it returns true when photo is active', () => {
    const mockRouter = new MockRouter()
    const projectRouter = new ProjectRouter(mockRouter, project)
    mockRouter.query = { slug: ['my-project', '01'] }
    expect(projectRouter.isActive(project.photos[0])).toBe(true)
  })

  test('it returns false when photo is not active', () => {
    const mockRouter = new MockRouter()
    const projectRouter = new ProjectRouter(mockRouter, project)
    mockRouter.query = { slug: ['my-project', '01'] }
    expect(projectRouter.isActive(project.photos[1])).toBe(false)
  })
})

describe('activeKey', () => {
  test('it returns `undefined` when no photo is active', () => {
    const mockRouter = new MockRouter()
    const projectRouter = new ProjectRouter(mockRouter, project)
    expect(projectRouter.activeKey()).toBeUndefined()
  })

  test('it returns the photo key', () => {
    const mockRouter = new MockRouter()
    const projectRouter = new ProjectRouter(mockRouter, project)
    mockRouter.query = { slug: ['my-project', '01'] }
    expect(projectRouter.activeKey()).toBe('01')
  })
})

describe('countPhotos', () => {
  test('it pads the number of photos to a length of 2 by default', () => {
    const mockRouter = new MockRouter()
    const projectRouter = new ProjectRouter(mockRouter, project)
    expect(projectRouter.countPhotos()).toEqual('03')
  })

  test('it pads the number of photos to a configured length', () => {
    const mockRouter = new MockRouter()
    const projectRouter = new ProjectRouter(mockRouter, project)
    expect(projectRouter.countPhotos(3)).toEqual('003')
  })
})

describe('next', () => {
  describe('with statement', () => {
    test('it opens the first photo when viewing the statement', () => {
      const mockRouter = new MockRouter()
      const projectRouter = new ProjectRouter(mockRouter, project)
      projectRouter.next()
      expect(mockRouter.pushed).toEqual('/work/my-project/01')
    })

    test('it opens the statement when viewing the last photo', () => {
      const mockRouter = new MockRouter()
      const projectRouter = new ProjectRouter(mockRouter, project)
      mockRouter.query = { slug: ['my-project', '03'] }
      projectRouter.next()
      expect(mockRouter.pushed).toEqual('/work/my-project')
    })

    test('it opens the next photo', () => {
      const mockRouter = new MockRouter()
      const projectRouter = new ProjectRouter(mockRouter, project)
      mockRouter.query = { slug: ['my-project', '02'] }
      projectRouter.next()
      expect(mockRouter.pushed).toEqual('/work/my-project/03')
    })
  })

  describe('without statement', () => {
    test('it opens the first photo when viewing the last photo', () => {
      const mockRouter = new MockRouter()
      const projectRouter = new ProjectRouter(mockRouter, { ...project, statement: undefined })
      mockRouter.query = { slug: ['my-project', '03'] }
      projectRouter.next()
      expect(mockRouter.pushed).toEqual('/work/my-project/01')
    })

    test('it opens the next photo', () => {
      const mockRouter = new MockRouter()
      const projectRouter = new ProjectRouter(mockRouter, { ...project, statement: undefined })
      mockRouter.query = { slug: ['my-project', '02'] }
      projectRouter.next()
      expect(mockRouter.pushed).toEqual('/work/my-project/03')
    })
  })
})

describe('previous', () => {
  describe('with statement', () => {
    test('it opens the last photo when viewing the statement', () => {
      const mockRouter = new MockRouter()
      const projectRouter = new ProjectRouter(mockRouter, project)
      projectRouter.previous()
      expect(mockRouter.pushed).toEqual('/work/my-project/03')
    })

    test('it opens the statement when viewing the first photo', () => {
      const mockRouter = new MockRouter()
      const projectRouter = new ProjectRouter(mockRouter, project)
      mockRouter.query = { slug: ['my-project', '01'] }
      projectRouter.previous()
      expect(mockRouter.pushed).toEqual('/work/my-project')
    })

    test('it opens the previous photo', () => {
      const mockRouter = new MockRouter()
      const projectRouter = new ProjectRouter(mockRouter, project)
      mockRouter.query = { slug: ['my-project', '02'] }
      projectRouter.previous()
      expect(mockRouter.pushed).toEqual('/work/my-project/01')
    })
  })

  describe('without statement', () => {
    test('it opens the last photo when viewing the first photo', () => {
      const mockRouter = new MockRouter()
      const projectRouter = new ProjectRouter(mockRouter, { ...project, statement: undefined })
      mockRouter.query = { slug: ['my-project', '01'] }
      projectRouter.previous()
      expect(mockRouter.pushed).toEqual('/work/my-project/03')
    })

    test('it opens the previous photo', () => {
      const mockRouter = new MockRouter()
      const projectRouter = new ProjectRouter(mockRouter, { ...project, statement: undefined })
      mockRouter.query = { slug: ['my-project', '02'] }
      projectRouter.previous()
      expect(mockRouter.pushed).toEqual('/work/my-project/01')
    })
  })
})
