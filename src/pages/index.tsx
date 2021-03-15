import React from 'react'
import Layout from '../components/Layout'
import Loader from '../components/Loader'
import SinglePhoto from '../components/SinglePhoto'
import { Props } from '../lib/staticProps'

const Home: React.FC<Props> = ({ projects }): React.ReactElement => {
  return <Layout projects={projects}>{projects?.length ? <SinglePhoto project={projects[0]} /> : <Loader />}</Layout>
}

export { getStaticProps } from '../lib/staticProps'

export default Home
