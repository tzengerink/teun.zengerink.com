import React from 'react'
import { marked } from 'marked'
import classNames from 'classnames'

const toInnerHtml = (
  markdown: string,
): {
  __html: string
} => ({ __html: marked.parse(markdown) })

const Markdown: React.FC = ({ children }) => {
  return (
    <div
      className={classNames('space-y-sm', 'text-xs', 'text-justify')}
      dangerouslySetInnerHTML={toInnerHtml(children.toString())}
    />
  )
}

export default Markdown
