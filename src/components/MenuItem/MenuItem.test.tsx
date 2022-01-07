import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import mockLink from '../../__mocks__/nextLink'
import mockProjects from '../../__mocks__/projects'
import MenuItem from './MenuItem'

const mockRouter = jest.fn(() => ({ asPath: `/` }))
jest.mock('next/router', () => ({ useRouter: () => mockRouter() }))

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
    mockRouter.mockReturnValueOnce({ asPath: `/work/${project.slug}` })
    const { container } = renderComponent()
    expect(container).toMatchSnapshot()
  })

  it('properly dispatches on click', () => {
    const { getByText } = renderComponent()
    fireEvent.click(getByText(project.title))
    expect(onClick).toHaveBeenCalled()
  })
})
