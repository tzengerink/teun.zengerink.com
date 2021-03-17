import React from 'react'
import Layout from '../components/Layout/Layout'
import SinglePhoto from '../components/SinglePhoto/SinglePhoto'
import { Props } from '../lib/static'

const Home: React.FC<Props> = ({ projects }): React.ReactElement => {
  return (
    <Layout projects={projects}>
      <SinglePhoto project={projects[0]} />
    </Layout>
  )
}

export { getStaticProps } from '../lib/static'

export default Home
