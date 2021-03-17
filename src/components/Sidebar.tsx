import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Project } from '../lib/projects'
import styles from './Sidebar.module.scss'

interface SocialAccount {
  name: string
  url: string
  image: string
}

interface SidebarProps {
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
  {
    name: 'Pinterest',
    url: 'https://pinterest.com/tzengerink/',
    image: '/img/pinterest.jpg',
  },
]

const Hamburger: React.FC<ClickableProps> = ({ onClick }) => {
  return (
    <div className={styles.hamburger} onClick={onClick}>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </div>
  )
}

const MenuItem: React.FC<MenuItemProps> = ({ project, onClick }) => {
  const router = useRouter()
  const isActive = router?.query?.slug ? router.query.slug[0] === project.slug : false

  return (
    <li key={project.slug} className={isActive ? styles.active : ''}>
      <Link href={`/work/${project.slug}${!project.statement ? `/${project.photos[0].key}` : ''}`}>
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

const Sidebar: React.FC<SidebarProps> = ({ pageTitle, projects }): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <a href="/">
        <h1>{pageTitle}</h1>
      </a>
      <Hamburger onClick={() => setIsOpen(!isOpen)} />
      <nav className={styles.navigation}>
        {projects?.length ? <h2>Work</h2> : null}
        <ul>
          {projects?.map((project) => (
            <MenuItem key={project.slug} project={project} onClick={() => setIsOpen(false)} />
          ))}
        </ul>
        <Socials accounts={ACCOUNTS} />
      </nav>
    </aside>
  )
}

export default Sidebar
