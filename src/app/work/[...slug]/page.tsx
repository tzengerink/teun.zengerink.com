import { notFound } from 'next/navigation'
import React from 'react'
import Layout from '../../../components/Layout/Layout'
import ProjectSlideshow from '../../../components/ProjectSlideshow/ProjectSlideshow'
import { Props } from '../../../lib/static'
import { getProjects } from '../../../lib/static'

interface PageProps {
  params: Promise<{
    slug: string[]
  }>
}

export async function generateStaticParams() {
  const projects = await getProjects()

  return projects.flatMap((project) => {
    const paths = project.photos.map((photo) => ({
      slug: [project.slug, photo.key],
    }))
    if (project.statement) {
      paths.unshift({ slug: [project.slug] })
    }
    return paths
  })
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const projects = await getProjects()
  const project = projects.find((p) => p.slug === slug[0])

  return {
    title: project?.title || 'Work',
  }
}

interface WorkProps extends Props {
  slug: string[]
}

export const Work: React.FC<WorkProps> = ({ projects, slug }): React.ReactElement => {
  if (!projects || projects.length === 0) {
    notFound()
  }

  const activeProject = projects.find((p) => p.slug === slug[0])

  if (!activeProject) {
    notFound()
  }

  return (
    <Layout title={activeProject.title} projects={projects}>
      <ProjectSlideshow project={activeProject} slug={slug} />
    </Layout>
  )
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const projects = await getProjects()
  const project = projects.find((p) => p.slug === slug[0])

  if (!project) {
    notFound()
  }

  return <Work projects={projects} slug={slug} />
}
