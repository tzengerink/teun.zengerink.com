import { getProjects, Project } from '../lib/projects'

export const titleRoot = 'Teun Zengerink'
export const titleDiv = '-'

export const getActiveProjects = async (): Promise<Project[]> => {
  const projects = await getProjects()
  return projects.filter((project) => !project.isArchived)
}
