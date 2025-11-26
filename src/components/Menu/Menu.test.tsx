import { fireEvent, render } from '@testing-library/react'
import mockProjects from '@mocks/projects'
import Menu from '@components/Menu/Menu'

jest.mock('@components/MenuItem/MenuItem', () => ({
  __esModule: true,
  default: ({ project, onClick }) => <a onClick={onClick}>{project.title}</a>,
}))

describe('Menu', () => {
  const onOpen = jest.fn()
  const onItemClick = jest.fn()
  const renderComponent = (isOpen = false) =>
    render(<Menu projects={mockProjects} isOpen={isOpen} onOpen={onOpen} onItemClick={onItemClick} />)

  beforeEach(jest.clearAllMocks)

  it('renders correctly', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it('renders correctly when open', () => {
    const { container } = renderComponent(true)
    expect(container).toMatchSnapshot()
  })

  it('handles clicks on menu items', () => {
    const { getByText } = renderComponent(true)
    fireEvent.click(getByText(mockProjects[0].title))
    expect(onItemClick).toHaveBeenCalled()
  })
})
