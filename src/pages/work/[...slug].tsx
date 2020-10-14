import { useEffect, useState } from 'react'
import { useRouter, NextRouter } from 'next/router'
import { Project, getProjects } from '../../projectService'
import Loader from '../../components/Loader'
import Layout from '../../components/Layout'
import ProjectSlideshow from '../../components/ProjectSlideshow'

const getProject = (router: NextRouter, projects: Project[]) => {
  const slug = router.query?.slug?.length ? router.query.slug[0] : ''
  return projects.find((project) => project.slug === slug)
}

const Work = (): React.ReactElement => {
  const router = useRouter()
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    getProjects().then(setProjects)
  }, [])

  return (
    <Layout projects={projects}>
      {projects.length ? <ProjectSlideshow project={getProject(router, projects)} /> : <Loader />}
    </Layout>
  )
}

export default Work
