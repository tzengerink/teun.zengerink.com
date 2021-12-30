import { render } from '@testing-library/react'
import Statement from './Statement'

describe('Statement', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Statement title="Hello World!" statement="This is a _message_ for the **entire world** to see" />,
    )
    expect(container).toMatchSnapshot()
  })
})
