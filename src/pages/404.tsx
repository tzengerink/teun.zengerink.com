import React from 'react'
import Layout from '../components/Layout'
import { getProjects, Project } from '../lib/projects'

const ERROR = 'Page Not Found'

interface ErrorProps {
  projects: Project[]
}

const Error: React.FC<ErrorProps> = ({ projects }): React.ReactElement => (
  <Layout title={ERROR} projects={projects}>
    <h2 className="error">{ERROR}</h2>
  </Layout>
)

export const getStaticProps = async (): Promise<{ props: ErrorProps }> => ({ props: { projects: await getProjects() } })

export default Error
