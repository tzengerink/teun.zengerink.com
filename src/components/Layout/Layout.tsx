import Head from 'next/head'
import React from 'react'
import { Project } from '../../lib/projects'
import Loader from '../Loader/Loader'
import Menu from '../Menu/Menu'
import styles from './Layout.module.scss'

const TITLE_ROOT = 'Teun Zengerink'
const TITLE_DIV = ' - '

interface LayoutProps {
  title?: string
  projects: Project[]
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ title, projects, children }) => {
  const pageTitle = React.useMemo(() => (title ? [TITLE_ROOT, title].join(TITLE_DIV) : TITLE_ROOT), [title])

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={pageTitle}></meta>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,500;1,300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Menu pageTitle={TITLE_ROOT} projects={projects} />
      <main className={styles.main}>{projects?.length ? children : <Loader />}</main>
    </div>
  )
}

export default Layout
