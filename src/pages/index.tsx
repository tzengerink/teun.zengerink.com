import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import Layout from '../components/Layout'
import SinglePhoto from '../components/SinglePhoto'
import { Project, getProjects } from '../lib/projectService'

const Home = (): React.ReactElement => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    getProjects().then(setProjects)
  }, [])

  return <Layout projects={projects}>{projects.length ? <SinglePhoto project={projects[0]} /> : <Loader />}</Layout>
}

export default Home
