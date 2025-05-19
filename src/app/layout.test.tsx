import { render } from '@testing-library/react'
import Layout from './layout'

describe('Layout', () => {
  it('renders correctly', async () => {
    jest.spyOn(console, 'error').mockImplementationOnce(() => null)
    const { container } = render(await Layout({ children: <div>[CHILDREN]</div> }))
    expect(container).toMatchSnapshot()
  })
})
