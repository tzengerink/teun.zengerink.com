import { render } from '@testing-library/react'
import Page from './page'
import mockProjects from '../__mocks__/projects'

jest.mock('../components/PageLayout/PageLayout', () => {
  return function MockLayout({ children, projects, title }: any) {
    return (
      <div data-testid="layout" data-projects-count={projects?.length || 0} data-title={title}>
        {children}
      </div>
    )
  }
})

jest.mock('../components/ProjectLink/ProjectLink', () => {
  return function MockProjectLink({ project }: any) {
    return <div data-testid="project-link">{project.title}</div>
  }
})

jest.mock('../lib/static', () => ({
  getProjects: jest.fn(async () => mockProjects),
}))

describe('generateStaticParams', () => {
  it('exports generateStaticParams function', async () => {
    const { generateStaticParams } = await import('./page')
    expect(typeof generateStaticParams).toBe('function')
  })

  it('generateStaticParams returns empty array', async () => {
    const { generateStaticParams } = await import('./page')
    const params = await generateStaticParams()
    expect(Array.isArray(params)).toBe(true)
    expect(params.length).toBe(0)
  })
})

describe('generateMetadata', () => {
  it('exports generateMetadata function', async () => {
    const { generateMetadata } = await import('./page')
    expect(typeof generateMetadata).toBe('function')
  })

  it('generateMetadata returns metadata object', async () => {
    const { generateMetadata } = await import('./page')
    const metadata = await generateMetadata()
    expect(metadata).toBeDefined()
    expect(metadata.title).toBeDefined()
  })
})

describe('Home Page', () => {
  it('renders the home page', async () => {
    const { getByTestId } = render(await Page())
    expect(getByTestId('layout')).toBeTruthy()
  })

  it('renders with all projects in PageLayout', async () => {
    const { getByTestId } = render(await Page())
    const layout = getByTestId('layout')
    expect(layout.getAttribute('data-projects-count')).toBe(mockProjects.length.toString())
  })

  it('renders ProjectLink component', async () => {
    const { getByTestId } = render(await Page())
    expect(getByTestId('project-link')).toBeTruthy()
  })

  it('renders the first project in ProjectLink', async () => {
    const { getByText } = render(await Page())
    expect(getByText(mockProjects[0].title)).toBeTruthy()
  })

  it('renders PageLayout component with correct title', async () => {
    const { getByTestId } = render(await Page())
    const layout = getByTestId('layout')
    expect(layout).toBeTruthy()
  })

  it('renders only one ProjectLink component', async () => {
    const { getAllByTestId } = render(await Page())
    const links = getAllByTestId('project-link')
    expect(links.length).toBe(1)
  })
})
