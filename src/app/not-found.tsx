import React from 'react'
import Layout from '../components/Layout/Layout'
import { Props } from '../lib/static'
import { getProjects } from '../lib/static'

const ERROR = 'Page Not Found'

const Error: React.FC<Props> = ({ projects }): React.ReactElement => (
  <Layout title={ERROR} projects={projects}>
    <h2 className="md:absolute md:inset-20 text-center">{ERROR}</h2>
  </Layout>
)

export default async function NotFound() {
  const projects = await getProjects()
  return <Error projects={projects} />
}
