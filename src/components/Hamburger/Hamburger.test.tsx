import { fireEvent, render } from '@testing-library/react'
import Hamburger from '@components/Hamburger/Hamburger'

describe('Hamburger', () => {
  const onClick = jest.fn()
  const renderComponent = (isOpen: boolean) => render(<Hamburger isOpen={isOpen} onClick={onClick} />)

  beforeEach(jest.clearAllMocks)

  it('renders correctly when open', () => {
    const { container } = renderComponent(true)
    expect(container).toMatchSnapshot()
  })

  it('renders correctly when closed', () => {
    const { container } = renderComponent(false)
    expect(container).toMatchSnapshot()
  })

  it('triggers on click handler', () => {
    const { getByTestId } = renderComponent(false)
    const hamburger = getByTestId('hamburger')
    expect(onClick).not.toHaveBeenCalled()
    fireEvent.click(hamburger)
    expect(onClick).toHaveBeenCalled()
  })
})
