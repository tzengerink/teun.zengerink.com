import { fireEvent, render } from '@testing-library/react'
import mockLink from '@mocks/nextLink'
import mockProjects from '@mocks/projects'
import MenuItem from '@components/MenuItem/MenuItem'

const mockPathname = jest.fn(() => `/`)
jest.mock('next/navigation', () => ({ usePathname: () => mockPathname() }))

jest.mock('next/link', () => mockLink)

describe('MenuItem', () => {
  const project = mockProjects[0]
  const onClick = jest.fn()
  const renderComponent = () => render(<MenuItem project={project} onClick={onClick} />)

  beforeEach(jest.clearAllMocks)

  it('renders correctly', () => {
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it('renders correctly if project is active', () => {
    mockPathname.mockReturnValueOnce(`/work/${project.slug}`)
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it('properly dispatches on click', () => {
    const { getByText } = renderComponent()
    fireEvent.click(getByText(project.title))
    expect(onClick).toHaveBeenCalled()
  })
})
