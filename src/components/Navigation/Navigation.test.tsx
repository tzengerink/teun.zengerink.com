import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import mockProjects from '../../__mocks__/projects'
import Navigation from './Navigation'

const mockRouter = jest.fn(() => ({ asPath: '/' }))
jest.mock('next/router', () => ({ useRouter: () => mockRouter() }))

const defaultProps = { pageTitle: 'My Homepage', projects: mockProjects }

beforeEach(jest.clearAllMocks)

describe('Navigation', () => {
  const renderComponent = (props = defaultProps) => render(<Navigation {...props} />)

  it('renders correctly when on homepage', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it('renders correctly when on a project page', () => {
    mockRouter.mockImplementation(() => ({ asPath: `${mockProjects[1].slug}` }))
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it.each(mockProjects.map(({ title, isArchived }) => ({ title, isArchived })))(
    'only renders item for $title if not archived',
    ({ title, isArchived }) => {
      const { queryByText } = renderComponent()
      const anchor = queryByText(title)
      if (isArchived) return expect(anchor).toBe(null)
      expect(anchor).toBeInstanceOf(HTMLAnchorElement)
    },
  )

  it('toggles the menu when the hamburger is clicked', () => {
    const { getByTestId } = renderComponent()
    const menu = getByTestId('menu')
    const hamburger = getByTestId('hamburger')
    expect(menu.classList.contains('visible')).toBe(false)
    expect(menu.classList.contains('invisible')).toBe(true)
    fireEvent.click(hamburger)
    expect(menu.classList.contains('visible')).toBe(true)
    expect(menu.classList.contains('invisible')).toBe(false)
    fireEvent.click(hamburger)
    expect(menu.classList.contains('visible')).toBe(false)
    expect(menu.classList.contains('invisible')).toBe(true)
  })
})
