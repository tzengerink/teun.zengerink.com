import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import projects from '../../__mocks__/projects'
import Sidebar from './Sidebar'

const defaultProps = { pageTitle: 'My Homepage', projects }

describe('Sidebar', () => {
  const renderComponent = (props = defaultProps) => render(<Sidebar {...props} />)

  it('renders correctly', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it('toggles the menu when the hamburger is clicked', () => {
    const { getByTestId } = renderComponent()
    const sidebar = getByTestId('sidebar')
    const hamburger = getByTestId('hamburger')
    expect(sidebar.classList.contains('open')).toBe(false)
    fireEvent.click(hamburger)
    expect(sidebar.classList.contains('open')).toBe(true)
    fireEvent.click(hamburger)
    expect(sidebar.classList.contains('open')).toBe(false)
  })
})
