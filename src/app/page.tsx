import React from 'react'
import Layout from '../components/Layout/Layout'
import ProjectLink from '../components/ProjectLink/ProjectLink'
import { Props } from '../lib/static'
import { getProjects } from '../lib/static'
import { AUTHOR_NAME } from '../lib/constants'

const Home: React.FC<Props> = ({ projects }): React.ReactElement => {
  return (
    <Layout projects={projects}>
      <ProjectLink project={projects[0]} />
    </Layout>
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
