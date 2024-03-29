import React from 'react'
import { marked } from 'marked'
import classNames from 'classnames'

interface Props {
  children: React.ReactNode
}

const toInnerHtml = (
  markdown: string,
): {
  __html: string
} => ({ __html: marked.parse(markdown) as string })

const Markdown: React.FC<Props> = ({ children }) => {
  return (
    <div
      className={classNames('space-y-sm', 'text-xs', 'text-justify')}
      dangerouslySetInnerHTML={toInnerHtml(children.toString())}
    />
  )
}

export default Markdown
