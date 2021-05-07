import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import projects from '../../__mocks__/projects'
import Menu from './Menu'

const defaultProps = { pageTitle: 'My Homepage', projects }

describe('Menu', () => {
  const renderComponent = (props = defaultProps) => render(<Menu {...props} />)

  it('renders correctly', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

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
