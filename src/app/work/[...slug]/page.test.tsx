import { render } from '@testing-library/react'
import React from 'react'
import mockProjects from '../../../__mocks__/projects'

// Set up all mocks before importing the page module
jest.mock('../../../components/Layout/Layout', () => {
  return function MockLayout({ children, projects, title }: any) {
    return (
      <div data-testid="layout" data-title={title} data-projects-count={projects?.length || 0}>
        {children}
      </div>
    )
  }
})

jest.mock('../../../components/ProjectSlideshow/ProjectSlideshow', () => {
  return function MockProjectSlideshow({ project, slug }: any) {
    return (
      <div data-testid="project-slideshow" data-slug={slug.join(',')}>
        {project.title}
      </div>
    )
  }
})

jest.mock('../../../lib/static', () => ({
  getProjects: jest.fn(async () => mockProjects),
}))

jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}))

// Import after all mocks are set up
import Page, { generateStaticParams, generateMetadata, Work } from './page'
import { notFound as notFoundFn } from 'next/navigation'

const mockNotFound = notFoundFn as any as jest.Mock

describe('Work Page', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('generateStaticParams', () => {
    it('generates params for all project photos', async () => {
      const params = await generateStaticParams()
      expect(params.length).toBeGreaterThan(0)
    })

    it('generates params with slug arrays', async () => {
      const params = await generateStaticParams()
      params.forEach((param: any) => {
        expect(Array.isArray(param.slug)).toBe(true)
        expect(param.slug.length).toBeGreaterThanOrEqual(1)
      })
    })

    it('includes project statement routes', async () => {
      const params = await generateStaticParams()
      const projectWithStatement = mockProjects.find((p) => p.statement)
      if (projectWithStatement) {
        const hasStatementRoute = params.some(
          (p: any) => p.slug[0] === projectWithStatement.slug && p.slug.length === 1,
        )
        expect(hasStatementRoute).toBe(true)
      }
    })

    it('includes photo routes for each project', async () => {
      const params = await generateStaticParams()
      const firstProject = mockProjects[0]
      const photoRoutes = params.filter((p: any) => p.slug[0] === firstProject.slug && p.slug.length === 2)
      expect(photoRoutes.length).toBe(firstProject.photos.length)
    })

    it('includes all projects in params', async () => {
      const params = await generateStaticParams()
      mockProjects.forEach((project) => {
        const projectParams = params.filter((p: any) => p.slug[0] === project.slug)
        expect(projectParams.length).toBeGreaterThanOrEqual(1)
      })
    })
  })

  describe('generateMetadata', () => {
    it('returns project title for valid project', async () => {
      const project = mockProjects[0]
      const metadata = await generateMetadata({
        params: Promise.resolve({ slug: [project.slug, '01'] }),
      })
      expect(metadata.title).toBe(project.title)
    })

    it('returns "Work" for invalid project', async () => {
      const metadata = await generateMetadata({
        params: Promise.resolve({ slug: ['invalid-slug', '01'] }),
      })
      expect(metadata.title).toBe('Work')
    })

    it('uses first slug element to find project', async () => {
      const project = mockProjects[1]
      const metadata = await generateMetadata({
        params: Promise.resolve({ slug: [project.slug, 'any-photo-key'] }),
      })
      expect(metadata.title).toBe(project.title)
    })
  })

  describe('Work Component', () => {
    it('calls notFound when projects array is empty', () => {
      expect(() => render(<Work projects={[]} slug={['any-project']} />)).toThrow()
      expect(mockNotFound).toHaveBeenCalled()
    })

    it('calls notFound when active project is not found', () => {
      expect(() => render(<Work projects={mockProjects} slug={['non-existent-project']} />)).toThrow()
      expect(mockNotFound).toHaveBeenCalled()
    })
  })

  describe('Page Component', () => {
    it('renders layout with all projects', async () => {
      const project = mockProjects[0]
      const { getByTestId } = render(
        await Page({
          params: Promise.resolve({ slug: [project.slug, '01'] }),
        }),
      )
      const layout = getByTestId('layout')
      expect(layout.getAttribute('data-projects-count')).toBe(mockProjects.length.toString())
    })

    it('renders with active project title', async () => {
      const project = mockProjects[0]
      const { getByTestId } = render(
        await Page({
          params: Promise.resolve({ slug: [project.slug, '01'] }),
        }),
      )
      const layout = getByTestId('layout')
      expect(layout.getAttribute('data-title')).toBe(project.title)
    })

    it('renders ProjectSlideshow with active project', async () => {
      const project = mockProjects[0]
      const { getByTestId } = render(
        await Page({
          params: Promise.resolve({ slug: [project.slug, '01'] }),
        }),
      )
      expect(getByTestId('project-slideshow')).toBeTruthy()
    })

    it('renders ProjectSlideshow with correct slug', async () => {
      const project = mockProjects[0]
      const slug = [project.slug, '02']
      const { getByTestId } = render(
        await Page({
          params: Promise.resolve({ slug }),
        }),
      )
      const slideshow = getByTestId('project-slideshow')
      expect(slideshow.getAttribute('data-slug')).toBe(slug.join(','))
    })

    it('calls notFound for invalid project', async () => {
      await Page({
        params: Promise.resolve({ slug: ['invalid-project', '01'] }),
      })
      expect(mockNotFound).toHaveBeenCalled()
    })

    it('does not call notFound for valid project', async () => {
      const project = mockProjects[0]
      await Page({
        params: Promise.resolve({ slug: [project.slug, '01'] }),
      })
      expect(mockNotFound).not.toHaveBeenCalled()
    })

    it('renders with multiple photos in slideshow', async () => {
      const project = mockProjects[0]
      const { getByTestId } = render(
        await Page({
          params: Promise.resolve({ slug: [project.slug, project.photos[1].key] }),
        }),
      )
      const slideshow = getByTestId('project-slideshow')
      expect(slideshow.getAttribute('data-slug')).toBe([project.slug, project.photos[1].key].join(','))
    })

    it('renders Layout component', async () => {
      const project = mockProjects[0]
      const { getByTestId } = render(
        await Page({
          params: Promise.resolve({ slug: [project.slug, '01'] }),
        }),
      )
      expect(getByTestId('layout')).toBeTruthy()
    })

    it('passes correct slug to ProjectSlideshow', async () => {
      const project = mockProjects[0]
      const photo = project.photos[0]
      const slug = [project.slug, photo.key]
      const { getByTestId } = render(
        await Page({
          params: Promise.resolve({ slug }),
        }),
      )
      const slideshow = getByTestId('project-slideshow')
      expect(slideshow.textContent).toContain(project.title)
      expect(slideshow.getAttribute('data-slug')).toBe(slug.join(','))
    })
  })
})
