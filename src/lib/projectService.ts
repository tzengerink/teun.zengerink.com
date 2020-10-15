import axios from 'axios'

export interface Photo {
  key: string
  url: string
  caption?: string
}

export interface Project {
  title: string
  slug: string
  photos: Photo[]
  statement?: string
}

export const getProjects = (): Promise<Project[]> => {
  return axios.get('http://localhost:3000/api/projects').then((response) => response.data.projects)
}
