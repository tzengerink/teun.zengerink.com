import React from 'react'
import Layout from '../components/Layout/Layout'
import { Props } from '../lib/static'

const ERROR = 'Page Not Found'

const Error: React.FC<Props> = ({ projects }): React.ReactElement => (
  <Layout title={ERROR} projects={projects}>
    <h2 className="error">{ERROR}</h2>
  </Layout>
)

export { getStaticProps } from '../lib/static'

export default Error
