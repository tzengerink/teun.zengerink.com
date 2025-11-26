import { render } from '@testing-library/react'
import Markdown from '@components/Markdown/Markdown'

jest.mock('marked')

describe('Markdown', () => {
  it('renders correctly', () => {
    const markdown = `The text **that** contains _some_ markdown.
    
It also supports [multiple](http://teun.zengerink.com/) paragraphs.`
    const { container } = render(<Markdown>{markdown}</Markdown>)
    expect(container).toMatchSnapshot()
  })
})
