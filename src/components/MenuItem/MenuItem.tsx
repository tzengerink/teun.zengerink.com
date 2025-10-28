import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Project } from '../../lib/types'

interface MenuItemProps {
  project: Project
  onClick: () => void
}

const MenuItem: React.FC<MenuItemProps> = ({ project, onClick }) => {
  const router = useRouter()
  const isActive = router.asPath.includes(project.slug)

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
