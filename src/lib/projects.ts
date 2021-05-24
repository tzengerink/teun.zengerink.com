import fs from 'fs'
import path from 'path'
import slugify from 'slugify'
import yaml from 'js-yaml'

export enum Width {
  Mobile = 768,
  Desktop = 1280,
}

interface ConfigCaption {
  key: string
  caption: string
}

interface ConfigItem {
  title: string
  statement?: string
  isArchived?: boolean
  captions?: ConfigCaption[]
}

export interface Export {
  width: Width
  url: string
}

export interface Photo {
  key: string
  caption?: string
  exports: Export[]
}
export interface Project {
  title: string
  slug: string
  photos: Photo[]
  statement?: string
  isArchived?: boolean
}

export const MAX_WIDTHS = [Width.Mobile, Width.Desktop]

const generatePhotos = (slug: string, captions: ConfigCaption[]): Photo[] => {
  const photosDirectory = path.join(process.cwd(), 'public/photos', slug, `${Width.Mobile}w`)
  const fileNames = fs.readdirSync(photosDirectory)

  return fileNames.map((filename) => {
    const key = path.basename(filename, '.jpg')
    const caption = captions?.find((c) => c.key == key)

    return {
      key,
      caption: caption?.caption ?? '',
      exports: MAX_WIDTHS.map((width) => ({ width, url: `/photos/${slug}/${width}w/${filename}` })),
    }
  })
}

const generateProjects = (item: ConfigItem[]): Project[] => {
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

export const getProjects = async (): Promise<Project[]> => {
  let projects: Project[] = []

  try {
    const file = path.join(process.cwd(), 'src', 'config.yml')
    const config = yaml.load(fs.readFileSync(file, 'utf-8'))
    projects = await generateProjects(config)
  } catch (e) {
    console.error(e)
  }

  return projects
}
