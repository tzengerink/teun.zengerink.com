import classNames from 'classnames'
import Head from 'next/head'
import React from 'react'
import { Project } from '../../lib/projects'
import Navigation from '../Navigation/Navigation'

const TITLE_ROOT = 'Teun Zengerink'
const TITLE_DIV = '-'

interface LayoutProps {
  title?: string
  projects: Project[]
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ title, projects, children }) => {
  const pageTitle = React.useMemo(() => (title ? [TITLE_ROOT, title].join(` ${TITLE_DIV} `) : TITLE_ROOT), [title])

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content={pageTitle}></meta>
        <title>{pageTitle}</title>
      </Head>
      <Navigation pageTitle={TITLE_ROOT} projects={projects} />
      <main className={classNames('relative', 'mt-xl', 'mx-md', 'mb-md', 'md:absolute', 'md:m-0', 'md:inset-0')}>
        {projects?.length ? children : null}
      </main>
    </div>
  )
}

export default Layout
