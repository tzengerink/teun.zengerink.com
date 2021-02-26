import React from 'react'
import { useRouter, NextRouter } from 'next/router'
import { Project, getProjects } from '../../lib/projects'
import Loader from '../../components/Loader'
import Layout, { pageTitle } from '../../components/Layout'
import ProjectSlideshow from '../../components/ProjectSlideshow'

interface WorkProps {
  projects: Project[]
}

interface WorkPath {
  params: { slug: string }
}

const getProject = (router: NextRouter, projects: Project[]) => {
  const slug = router?.query?.slug?.length ? router.query.slug[0] : ''
  return projects?.find((project) => project.slug === slug)
}

const Work = (props: WorkProps): React.ReactElement => {
  const router = useRouter()
  const project = getProject(router, props.projects)

  return (
    <Layout title={project ? `${pageTitle} - ${project.title}` : pageTitle} projects={props.projects}>
      {props.projects?.length ? <ProjectSlideshow project={project} /> : <Loader />}
    </Layout>
  )
}

export const getStaticProps = async (): Promise<{ props: WorkProps }> => ({ props: { projects: await getProjects() } })

export const getStaticPaths = async (): Promise<{ paths: WorkPath[]; fallback: boolean }> => {
  const paths = []
  const projects = await getProjects()
  projects.forEach((project) => {
    if (project.statement) {
      paths.push({ params: { slug: [project.slug] } })
    }
    project.photos.forEach((photo) => {
      paths.push({ params: { slug: [project.slug, photo.key] } })
    })
  })

  return { paths, fallback: false }
}

export default Work
