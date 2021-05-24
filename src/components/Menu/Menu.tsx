import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Project } from '../../lib/projects'
import styles from './Menu.module.scss'

interface SocialAccount {
  name: string
  url: string
  image: string
}

interface MenuProps {
  projects: Project[]
  pageTitle: string
}

interface ClickableProps {
  onClick: () => void
}

interface MenuItemProps extends ClickableProps {
  project: Project
}

interface SocialsProps {
  accounts: SocialAccount[]
}

const ACCOUNTS: SocialAccount[] = [
  {
    name: 'Instagram',
    url: 'https://instagram.com/t.zengerink/',
    image: '/img/instagram.jpg',
  },
]

const Hamburger: React.FC<ClickableProps> = ({ onClick }) => {
  return (
    <div data-testid="hamburger" className={styles.hamburger} onClick={onClick}>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </div>
  )
}

const MenuItem: React.FC<MenuItemProps> = ({ project, onClick }) => {
  const router = useRouter()
  const isActive = router.asPath.includes(project.slug)

  return (
    <li key={project.slug} className={isActive ? styles.active : ''}>
      <Link href={`/work/${project.slug}/${project.photos[0].key}`}>
        <a onClick={onClick}>{project.title}</a>
      </Link>
    </li>
  )
}

const Socials: React.FC<SocialsProps> = ({ accounts }) => (
  <span className={styles.socials}>
    {accounts.map((account) => (
      <a key={account.name} href={account.url}>
        <img src={account.image} alt={account.name} />
      </a>
    ))}
  </span>
)

const Menu: React.FC<MenuProps> = ({ pageTitle, projects }): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  const filteredProjects = projects.filter((project) => !project.isArchived)

  return (
    <aside data-testid="menu" className={`${styles.menu}${isOpen ? ` ${styles.open}` : ''}`}>
      <a href="/">
        <h1>{pageTitle}</h1>
      </a>
      <Hamburger onClick={() => setIsOpen(!isOpen)} />
      <nav className={styles.navigation}>
        <h2>Projects</h2>
        <ul>
          {filteredProjects.map((project) => (
            <MenuItem key={project.slug} project={project} onClick={() => setIsOpen(false)} />
          ))}
        </ul>
        <Socials accounts={ACCOUNTS} />
      </nav>
    </aside>
  )
}

export default Menu
