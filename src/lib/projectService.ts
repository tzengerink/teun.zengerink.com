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
  return axios
    .get(`${process.env.NEXT_PUBLIC_PROTO}://${process.env.NEXT_PUBLIC_HOST}/projects.json`)
    .then((response) => response.data.projects)
}
