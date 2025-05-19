import ProjectLink from '../components/ProjectLink/ProjectLink'
import { getProjects } from '../lib/projects'

const Page = async () => {
  const projects = await getProjects()

  return <ProjectLink project={projects[0]} />
}

export default Page
