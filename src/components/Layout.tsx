import React from 'react'
import Head from 'next/head'
import { Project } from '../lib/projects'
import Sidebar from './Sidebar'
import styles from './Layout.module.scss'

export const pageTitle = 'Teun Zengerink'

interface LayoutProps {
  title?: string
  projects: Project[]
  children?: React.ReactNode
}

const Layout = (props: LayoutProps): React.ReactElement => {
  const title = React.useMemo(() => (props.title ? props.title : pageTitle), [props.title, pageTitle])
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={title}></meta>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,500;1,300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Sidebar pageTitle={pageTitle} projects={props.projects} />
      <main className={styles.main}>{props.children}</main>
    </div>
  )
}

export default Layout
