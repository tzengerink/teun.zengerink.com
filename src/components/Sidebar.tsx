import { useRouter, NextRouter } from 'next/router'
import Link from 'next/link'
import { Project } from '../projectService'
import styles from './Sidebar.module.scss'

interface SidebarProps {
  projects: Project[]
  pageTitle: string
}

const isActiveProject = (router: NextRouter, project: Project): boolean => {
  if (!router.query?.slug) return false
  return router.query?.slug[0] === project.slug
}

const Sidebar = (props: SidebarProps): React.ReactElement => {
  const router = useRouter()

  return (
    <aside className={styles.sidebar}>
      <a href="/">
        <h1>{props.pageTitle}</h1>
      </a>
      <input id="visible" className={styles.checkbox} type="checkbox" />
      <label htmlFor="visible" className={styles.hamburger}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </label>
      <nav className={styles.navigation}>
        <h2>Work</h2>
        <ul>
          {props.projects.map((project) => (
            <li key={project.slug} className={isActiveProject(router, project) ? styles.active : ''}>
              <Link href={`/work/${project.slug}`}>
                <a>{project.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <span className={styles.socials}>
          <a href="https://instagram.com/t.zengerink/">
            <img src="/img/instagram.jpg" />
          </a>
          <a href="https://pinterest.com/tzengerink/">
            <img src="/img/pinterest.jpg" />
          </a>
        </span>
      </nav>
    </aside>
  )
}

export default Sidebar
