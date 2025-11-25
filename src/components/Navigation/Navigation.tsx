'use client'

import classNames from 'classnames'
import Link from 'next/link'
import React, { useState } from 'react'
import { Project } from '../../lib/types'
import Hamburger from '../Hamburger/Hamburger'
import Menu from '../Menu/Menu'

interface NavigationProps {
  projects: Project[]
  pageTitle: string
}

const Navigation: React.FC<NavigationProps> = ({ pageTitle, projects }): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false)
  const filteredProjects = projects.filter((project) => !project.isArchived)

  return (
    <aside>
      <Link href="/">
        <h1
          className={classNames(
            'fixed',
            'z-40',
            'top-[6px]',
            'left-md',
            'pt-4',
            'font-medium',
            'uppercase',
            'hover:underline',
          )}
        >
          {pageTitle}
        </h1>
      </Link>
      <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <Menu
        projects={filteredProjects}
        isOpen={isOpen}
        onOpen={() => setIsOpen(!isOpen)}
        onItemClick={() => setIsOpen(false)}
      />
      <a
        className={classNames(
          'absolute',
          'z-20',
          'bottom-md',
          'right-md',
          'text-xs',
          'text-grey/80',
          'uppercase',
          'hover:underline',
        )}
        href="https://www.instagram.com/t.zengerink/"
      >
        Instagram
      </a>
    </aside>
  )
}

export default Navigation
