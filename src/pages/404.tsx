import React from 'react'
import Layout from '../components/Layout'
import { getProjects, Project } from '../lib/projects'

interface ErrorProps {
  projects: Project[]
}

const Error = (props: ErrorProps): React.ReactElement => (
  <Layout projects={props.projects}>
    <h2 className="error">Page Not Found</h2>
  </Layout>
)
export const getStaticProps = async (): Promise<{ props: ErrorProps }> => ({ props: { projects: await getProjects() } })

export default Error
