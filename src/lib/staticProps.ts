import { getProjects, Project } from './projects'

export interface Props {
  projects: Project[]
}

export const getStaticProps = async (): Promise<{ props: Props }> => ({ props: { projects: await getProjects() } })
