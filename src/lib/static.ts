import { createGetProjects } from './projects'
import { Project } from './types'

interface Path {
  params: { slug: string[] }
}

export interface Props {
  projects: Project[]
}

export const getProjects = createGetProjects()

export const getStaticPaths = async (): Promise<{ paths: Path[]; fallback: boolean }> => {
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

export const getStaticProps = async (): Promise<{ props: Props }> => ({ props: { projects: await getProjects() } })
