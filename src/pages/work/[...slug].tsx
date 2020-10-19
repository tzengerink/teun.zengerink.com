import React, { useEffect, useState } from 'react'
import { useRouter, NextRouter } from 'next/router'
import { Project, getProjects } from '../../lib/projectService'
import Loader from '../../components/Loader'
import Layout, { pageTitle } from '../../components/Layout'
import ProjectSlideshow from '../../components/ProjectSlideshow'

const getProject = (router: NextRouter, projects: Project[]) => {
  const slug = router?.query?.slug?.length ? router.query.slug[0] : ''
  return projects.find((project) => project.slug === slug)
}

const Work = (): React.ReactElement => {
  const router = useRouter()
  const [projects, setProjects] = useState<Project[]>([])
  const project = getProject(router, projects)

  useEffect(() => {
    getProjects().then(setProjects)
  }, [])

  return (
    <Layout title={project ? `${pageTitle} - ${project.title}` : pageTitle} projects={projects}>
      {projects.length ? <ProjectSlideshow project={project} /> : <Loader />}
    </Layout>
  )
}

export default Work
