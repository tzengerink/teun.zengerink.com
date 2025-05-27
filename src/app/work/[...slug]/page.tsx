import React from 'react'
import Link from 'next/link'

import ProjectSlideshow from '../../../components/ProjectSlideshow/ProjectSlideshow'
import { TITLE_DIV, TITLE_ROOT } from '../../../lib/constants'
import { getProjects } from '../../../lib/projects'

type Params = { slug: string[] }
type Props = { params: Promise<Params> }

export const generateMetadata = async ({ params }) => {
  const { slug } = await params
  const projects = await getProjects()
  const project = projects?.find((project) => project.slug === slug[0])
  const title = project?.title ? [TITLE_ROOT, project.title].join(` ${TITLE_DIV} `) : TITLE_ROOT

  return { title, description: title }
}

const Page: React.FC<Props> = async ({ params }) => {
  const { slug } = await params
  const projects = await getProjects()
  const project = projects?.find((project) => project.slug === slug[0])

  if (!project) {
    return (
      <div className="md:absolute md:inset-20 text-center">
        <h2>Page not found</h2>
        <Link className="underline" href="/">
          Go to homepage
        </Link>
      </div>
    )
  }

  return <ProjectSlideshow project={project} index={slug[1]} />
}

export default Page
