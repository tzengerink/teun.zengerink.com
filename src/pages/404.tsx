import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { Project, getProjects } from '../lib/projectService'

const Error = (): React.ReactElement => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    getProjects().then(setProjects)
  }, [])

  return (
    <Layout projects={projects}>
      <h2 className="error">Page Not Found</h2>
    </Layout>
  )
}

export default Error
