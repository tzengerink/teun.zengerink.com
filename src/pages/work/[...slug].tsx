import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../components/Layout'
import Loader from '../../components/Loader'
import ProjectSlideshow from '../../components/ProjectSlideshow'
import { getProjects, Project } from '../../lib/projects'

interface WorkProps {
  projects: Project[]
}

interface WorkPath {
  params: { slug: string[] }
}

const Work: React.FC<WorkProps> = ({ projects }): React.ReactElement => {
  const router = useRouter()
  const slug = router?.query?.slug?.length ? router.query.slug[0] : ''
  const project = projects?.find((project) => project.slug === slug)

  return (
    <Layout title={project?.title} projects={projects}>
      {projects?.length ? <ProjectSlideshow project={project} /> : <Loader />}
    </Layout>
  )
}

export const getStaticProps = async (): Promise<{ props: WorkProps }> => ({ props: { projects: await getProjects() } })

export const getStaticPaths = async (): Promise<{ paths: WorkPath[]; fallback: boolean }> => {
  const projects = await getProjects()

  return {
    paths: projects.flatMap((project) => {
      const paths = project.photos.map((photo) => ({ params: { slug: [project.slug, photo.key] } }))
      if (project.statement) paths.unshift({ params: { slug: [project.slug] } })
      return paths
    }),
    fallback: false,
  }
}

export default Work
