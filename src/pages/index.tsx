import { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../components/Layout'
import SinglePhoto from '../components/SinglePhoto'

const Home = (): React.ReactElement => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/projects').then((response) => setProjects(response.data.projects))
  }, [])

  return <Layout projects={projects}>{projects ? <SinglePhoto project={projects[0]} /> : ''}</Layout>
}

export default Home
