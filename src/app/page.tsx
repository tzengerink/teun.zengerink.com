import React from 'react'
import Layout from '../components/Layout/Layout'
import ProjectLink from '../components/ProjectLink/ProjectLink'
import { Props } from '../lib/static'
import { getProjects } from '../lib/static'

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
  return {
    title: 'Teun Zengerink',
  }
}

export default async function Page() {
  const projects = await getProjects()
  return <Home projects={projects} />
}
