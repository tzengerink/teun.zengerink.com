import React from 'react'
import Layout from '../components/Layout/Layout'
import ProjectLink from '../components/ProjectLink/ProjectLink'
import { Props } from '../lib/static'

const Home: React.FC<Props> = ({ projects }): React.ReactElement => {
  return (
    <Layout projects={projects}>
      <ProjectLink project={projects[0]} />
    </Layout>
  )
}

export { getStaticProps } from '../lib/static'

export default Home
