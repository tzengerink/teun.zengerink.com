import { render } from '@testing-library/react'

import Page from './page'

describe('Page', () => {
  it('renders a project link', async () => {
    const { container } = render(await Page())
    expect(container).toMatchSnapshot()
  })
})
