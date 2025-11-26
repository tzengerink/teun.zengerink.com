import { render } from '@testing-library/react'
import NotFound from './not-found'
import mockProjects from '../__mocks__/projects'

jest.mock('../components/PageLayout/PageLayout')

jest.mock('../lib/static', () => ({
  getProjects: jest.fn(async () => mockProjects),
}))

describe('NotFound', () => {
  it('renders the not found page', async () => {
    const { getByText } = render(await NotFound())
    expect(getByText('Page Not Found')).toBeTruthy()
  })

  it('renders with PageLayout component', async () => {
    const { getByTestId } = render(await NotFound())
    expect(getByTestId('layout')).toBeTruthy()
  })

  it('passes all projects to PageLayout', async () => {
    const { getByTestId } = render(await NotFound())
    const layout = getByTestId('layout')
    expect(layout.getAttribute('data-projects-count')).toBe(mockProjects.length.toString())
  })

  it('has h2 with error text', async () => {
    const { container } = render(await NotFound())
    const h2 = container.querySelector('h2')
    expect(h2?.textContent).toBe('Page Not Found')
  })

  it('has correct CSS classes on h2', async () => {
    const { container } = render(await NotFound())
    const h2 = container.querySelector('h2')
    expect(h2?.className).toContain('md:absolute')
    expect(h2?.className).toContain('md:inset-20')
    expect(h2?.className).toContain('text-center')
  })

  it('renders error message in the layout', async () => {
    const { container } = render(await NotFound())
    const errorMessage = container.textContent
    expect(errorMessage).toContain('Page Not Found')
  })
})
