import React from 'react'
import { marked } from 'marked'

const toInnerHtml = (
  markdown: string,
): {
  __html: string
} => ({ __html: marked.parse(markdown) })

const Markdown: React.FC = ({ children }) => {
  return <div dangerouslySetInnerHTML={toInnerHtml(children.toString())} />
}

export default Markdown
