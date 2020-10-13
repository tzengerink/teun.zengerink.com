import Head from 'next/head'
import { Project } from '../projectService'
import Sidebar from './Sidebar'
import styles from './Layout.module.scss'

const title = 'Teun Zengerink'

interface LayoutProps {
  projects: Project[]
  children?: React.ReactNode
}

const Layout = (props: LayoutProps): React.ReactElement => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,500;1,300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Sidebar pageTitle={title} projects={props.projects} />
      <main className={styles.main}>{props.children}</main>
    </div>
  )
}

export default Layout
