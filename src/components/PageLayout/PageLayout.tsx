'use client'

import classNames from 'classnames'
import React from 'react'
import { Project } from '@lib/types'
import Navigation from '@components/Navigation/Navigation'
import { AUTHOR_NAME } from '@lib/constants'

interface PageLayoutProps {
  title?: string
  projects: Project[]
  children?: React.ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({ projects, children }) => {
  return (
    <div>
      <Navigation pageTitle={AUTHOR_NAME} projects={projects} />
      <main className={classNames('relative', 'mt-xl', 'mx-md', 'mb-md', 'md:absolute', 'md:m-0', 'md:inset-0')}>
        {projects?.length ? children : null}
      </main>
    </div>
  )
}

export default PageLayout
