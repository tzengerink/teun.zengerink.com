import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Project } from '../../lib/projects'
import Hamburger from '../Hamburger/Hamburger'

interface NavigationProps {
  projects: Project[]
  pageTitle: string
}

interface MenuItemProps {
  project: Project
  onClick: () => void
}

interface MenuProps {
  projects: Project[]
  isOpen: boolean
  onItemClick: () => void
}

const MenuItem: React.FC<MenuItemProps> = ({ project, onClick }) => {
  const router = useRouter()
  const isActive = router.asPath.includes(project.slug)

  return (
    <li key={project.slug} className={classNames('text-xs', { underline: isActive })}>
      <Link href={`/work/${project.slug}/${project.photos[0].key}`}>
        <a className={classNames('hover:underline')} onClick={onClick}>
          {project.title}
        </a>
      </Link>
    </li>
  )
}

const Menu: React.FC<MenuProps> = ({ projects, isOpen, onItemClick }) => (
  <nav
    data-testid="menu"
    className={classNames(
      'group',
      'fixed',
      'z-30',
      'inset-y-0',
      'left-xs',
      'w-full',
      'p-md',
      'pt-xl',
      'bg-transparant-white',
      'ease-linear',
      'duration-100',
      { 'translate-y-0': isOpen, 'opacity-100': isOpen, visible: isOpen },
      { 'translate-y-[-20px]': !isOpen, 'opacity-0': !isOpen, invisible: !isOpen },
      'md:visible',
      'md:opacity-100',
      'md:top-md',
      'md:right-md',
      'md:bottom-auto',
      'md:left-auto',
      'md:w-auto',
      'md:p-0',
      'md:pt-md',
      'md:text-right',
    )}
  >
    <h2 className={classNames('my-xs', 'uppercase', 'text-xs', 'text-grey/80', 'cursor-default')}>Projects</h2>
    <ul
      className={classNames(
        'leading-5',
        'md:ease-linear',
        'md:duration-100',
        'md:translate-y-[-20px]',
        'md:invisible',
        'md:group-hover:visible',
        'md:group-hover:translate-y-0',
      )}
    >
      {projects.map((project) => (
        <MenuItem key={project.slug} project={project} onClick={onItemClick} />
      ))}
    </ul>
  </nav>
)

const Navigation: React.FC<NavigationProps> = ({ pageTitle, projects }): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false)
  const filteredProjects = projects.filter((project) => !project.isArchived)

  return (
    <aside>
      <a href="/">
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
      </a>
      <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <Menu projects={filteredProjects} isOpen={isOpen} onItemClick={() => setIsOpen(false)} />
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
