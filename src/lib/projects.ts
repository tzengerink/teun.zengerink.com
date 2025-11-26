import fs from 'fs'
import path from 'path'
import slugify from 'slugify'
import yaml from 'js-yaml'

import { Width, ConfigCaption, ConfigItem, Photo, Project } from '@lib/types'

export const MAX_WIDTHS = [Width.Mobile, Width.Desktop]

const generatePhotos = (slug: string, captions: ConfigCaption[] = []): Photo[] => {
  const photosDirectory = path.join(process.cwd(), 'public/photos', slug, `${Width.Mobile}w`)
  const fileNames = fs.readdirSync(photosDirectory)

  return fileNames.map((filename) => {
    const key = path.basename(filename, path.extname(filename))
    const caption = captions?.find((c) => c.key == key)

    return {
      key,
      caption: caption?.caption ?? '',
      exports: MAX_WIDTHS.map((width) => ({ width, url: `/photos/${slug}/${width}w/${filename}` })),
    }
  })
}

const generateProjects = async (item: ConfigItem[]): Promise<Project[]> => {
  return item.map((project) => {
    const slug = slugify(project.title, { lower: true })

    return {
      slug,
      title: project.title,
      statement: project.statement ?? '',
      isArchived: project.isArchived ?? false,
      photos: generatePhotos(slug, project.captions),
    }
  })
}

const getProjects = async (): Promise<Project[]> => {
  let projects: Project[] = []

  try {
    const file = path.join(process.cwd(), 'src', 'config.yml')
    const config = yaml.load(fs.readFileSync(file, 'utf-8')) as ConfigItem[]
    projects = await generateProjects(config)
  } catch (e) {
    console.error(e)
  }

  return projects
}

export const createGetProjects = (): (() => Promise<Project[]>) => {
  let memoizedProjects: Project[] = []

  return async () => {
    if (!memoizedProjects.length) memoizedProjects = await getProjects()
    return memoizedProjects
  }
}
