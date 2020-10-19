import React, { useState } from 'react'
import { useRouter, NextRouter } from 'next/router'
import Link from 'next/link'
import { Project } from '../lib/projectService'
import styles from './Sidebar.module.scss'

interface SidebarProps {
  projects: Project[]
  pageTitle: string
}

const isActiveProject = (router: NextRouter, project: Project): boolean => {
  if (!router?.query?.slug) return false
  return router.query?.slug[0] === project.slug
}

const Sidebar = (props: SidebarProps): React.ReactElement => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <a href="/">
        <h1>{props.pageTitle}</h1>
      </a>
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
      <nav className={styles.navigation}>
        {props.projects.length ? <h2>Work</h2> : ''}
        <ul>
          {props.projects.map((project) => (
            <li key={project.slug} className={isActiveProject(router, project) ? styles.active : ''}>
              <Link href={`/work/${project.slug}`}>
                <a onClick={() => setIsOpen(false)}>{project.title}</a>
              </Link>
            </li>
          ))}
        </ul>
        <span className={styles.socials}>
          <a href="https://instagram.com/t.zengerink/">
            <img src="/img/instagram.jpg" alt="Instagram" />
          </a>
          <a href="https://pinterest.com/tzengerink/">
            <img src="/img/pinterest.jpg" alt="Pinterest" />
          </a>
        </span>
      </nav>
    </aside>
  )
}

export default Sidebar
