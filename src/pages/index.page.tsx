import React from 'react'
import Layout from '../components/Layout/Layout'
import Loader from '../components/Loader/Loader'
import SinglePhoto from '../components/SinglePhoto/SinglePhoto'
import { Props } from '../lib/static'

const Home: React.FC<Props> = ({ projects }): React.ReactElement => {
  return <Layout projects={projects}>{projects?.length ? <SinglePhoto project={projects[0]} /> : <Loader />}</Layout>
}

export { getStaticProps } from '../lib/static'

export default Home
