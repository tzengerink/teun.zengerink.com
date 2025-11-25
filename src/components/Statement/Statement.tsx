'use client'

import classNames from 'classnames'
import Markdown from '../Markdown/Markdown'
import { useState } from 'react'

interface StatementProps {
  title: string
  statement: string
}

const Statement: React.FC<StatementProps> = ({ title, statement }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={classNames('group', 'text-grey/80', 'select-none')}>
      <h2
        className={classNames('fixed', 'left-md', 'bottom-md', 'z-20', 'text-xs', 'uppercase', 'cursor-help')}
        onClick={() => setIsOpen(!isOpen)}
      >
        Statement
      </h2>
      <div
        className={classNames(
          'fixed',
          'left-0',
          'bottom-md',
          'z-10',
          'right-0',
          'mb-md',
          'p-md',
          'bg-transparant-white',
          { invisible: !isOpen },
          { 'opacity-0': !isOpen },
          'ease-linear',
          'duration-100',
          { 'translate-y-[50px]': !isOpen },
          'group-hover:visible',
          'group-hover:translate-y-0',
          'group-hover:opacity-100',
          'md:w-[500px]',
        )}
      >
        <h3 className={classNames('mb-sm', 'text-sm')}>{title}</h3>
        <Markdown>{statement}</Markdown>
      </div>
    </div>
  )
}

export default Statement
