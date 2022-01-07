import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import mockProjects from '../../__mocks__/projects'
import Navigation from './Navigation'

const mockRouter = jest.fn(() => ({ asPath: '/' }))
jest.mock('next/router', () => ({ useRouter: () => mockRouter() }))

jest.mock('../Menu/Menu', () => ({ projects, isOpen, onItemClick }) => (
  <button onClick={onItemClick}>
    <div>{isOpen ? '[Menu open]' : '[Menu closed]'}</div>
    <ul>
      {projects.map((project) => (
        <li key={project.slug}>{project.isArchived ? '[Archived project]' : '[Project]'}</li>
      ))}
    </ul>
  </button>
))

jest.mock('../Hamburger/Hamburger', () => ({ isOpen, onClick }) => (
  <button onClick={onClick}>{isOpen ? '[Hamburger open]' : '[Hamburger closed]'}</button>
))

const defaultProps = { pageTitle: 'My Homepage', projects: mockProjects }

beforeEach(jest.clearAllMocks)

describe('Navigation', () => {
  const renderComponent = (props = defaultProps) => render(<Navigation {...props} />)

  it('renders correctly', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it('filters out archived projects', () => {
    const { queryByText } = renderComponent()
    const found = queryByText('[Archived project]')
    expect(found).toBeNull()
  })

  it('toggles the menu when the hamburger is clicked', () => {
    const { getByText } = renderComponent()
    expect(getByText('[Menu closed]')).toBeDefined()
    fireEvent.click(getByText('[Hamburger closed]'))
    expect(getByText('[Menu open]')).toBeDefined()
    fireEvent.click(getByText('[Hamburger open]'))
    expect(getByText('[Menu closed]')).toBeDefined()
  })

  it('closes the menu when an item is clicked', () => {
    const { getByText } = renderComponent()
    fireEvent.click(getByText('[Hamburger closed]'))
    expect(getByText('[Menu open]')).toBeDefined()
    fireEvent.click(getByText('[Menu open]'))
    expect(getByText('[Menu closed]')).toBeDefined()
  })
})
