import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import mockProjects from '../../__mocks__/projects'
import Menu from './Menu'

const mockRouter = jest.fn(() => ({ asPath: '/' }))
jest.mock('next/router', () => ({ useRouter: () => mockRouter() }))

const defaultProps = { pageTitle: 'My Homepage', projects: mockProjects }

beforeEach(jest.clearAllMocks)

describe('Menu', () => {
  const renderComponent = (props = defaultProps) => render(<Menu {...props} />)

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
    'only renders menu item for $title if not archived',
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
    expect(menu.classList.contains('open')).toBe(false)
    fireEvent.click(hamburger)
    expect(menu.classList.contains('open')).toBe(true)
    fireEvent.click(hamburger)
    expect(menu.classList.contains('open')).toBe(false)
  })
})
