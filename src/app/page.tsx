import React from 'react'
import ProjectLink from '../components/ProjectLink/ProjectLink'
import PageLayout from '../components/PageLayout/PageLayout'
import { Props } from '../lib/static'
import { getProjects } from '../lib/static'
import { AUTHOR_NAME } from '../lib/constants'

const Home: React.FC<Props> = ({ projects }): React.ReactElement => {
  return (
    <PageLayout projects={projects}>
      <ProjectLink project={projects[0]} />
    </PageLayout>
  )
}

export async function generateStaticParams() {
  return []
}

export async function generateMetadata() {
  return { title: AUTHOR_NAME }
}

export default async function Page() {
  const projects = await getProjects()
  return <Home projects={projects} />
}
