import { render } from '@testing-library/react'

import Page, { generateMetadata } from './page'
import { getProjects } from '../../../lib/projects'
import { TITLE_DIV, TITLE_ROOT } from '../../../lib/constants'

jest.mock('next/navigation', () => ({ useRouter: () => ({ push: jest.fn() }) }))

describe('generateMetadata', () => {
  it('generates a title and description', async () => {
    const projects = await getProjects()
    const metadata = await generateMetadata({ params: Promise.resolve({ slug: [projects[0].slug, '01'] }) })
    const title = `${TITLE_ROOT} ${TITLE_DIV} ${projects[0].title}`
    expect(metadata).toEqual({ title, description: title })
  })
})

describe('Page', () => {
  it('renders a project slideshow', async () => {
    const projects = await getProjects()
    const { container } = render(await Page({ params: Promise.resolve({ slug: [projects[0].slug, '01'] }) }))
    expect(container).toMatchSnapshot()
  })

  it('renders a page not found message', async () => {
    const { container } = render(await Page({ params: Promise.resolve({ slug: ['non-existent-project', '01'] }) }))
    expect(container).toMatchSnapshot()
  })
})
