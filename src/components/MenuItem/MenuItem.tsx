import classNames from 'classnames'
import Link from 'next/link'
import { Project } from '../../lib/projects'

interface MenuItemProps {
  isActive?: boolean
  project: Project
  onClick: () => void
}

const MenuItem: React.FC<MenuItemProps> = ({ project, onClick, isActive = false }) => {
  return (
    <li key={project.slug} className={classNames('text-xs', { underline: isActive })}>
      <Link
        href={`/work/${project.slug}/${project.photos[0].key}`}
        className={classNames('hover:underline')}
        onClick={onClick}
      >
        {project.title}
      </Link>
    </li>
  )
}

export default MenuItem
