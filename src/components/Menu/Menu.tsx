import classNames from 'classnames'
import React from 'react'
import { Project } from '../../lib/projects'
import MenuItem from '../MenuItem/MenuItem'

interface MenuProps {
  projects: Project[]
  isOpen: boolean
  onItemClick: () => void
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

export default Menu
