import fs from 'fs'
import path from 'path'
import slugify from 'slugify'
import sizeOf from 'image-size'
import yaml from 'js-yaml'

interface ConfigCaption {
  key: string
  caption: string
}

interface ConfigItem {
  title: string
  statement?: string
  captions?: ConfigCaption[]
}

export interface Photo {
  key: string
  url: string
  size: { width: number; height: number }
  caption?: string
}

export interface Project {
  title: string
  slug: string
  photos: Photo[]
  statement?: string
}

const generatePhotos = (slug: string, captions: ConfigCaption[]): Photo[] => {
  const photosDirectory = path.join(process.cwd(), 'public/photos', slug)
  const fileNames = fs.readdirSync(photosDirectory)

  return fileNames.map((filename) => {
    const key = path.basename(filename, '.jpg')
    const caption = captions?.find((c) => c.key == key)

    return {
      key,
      caption: caption?.caption ?? '',
      url: `/photos/${slug}/${filename}`,
      size: sizeOf(path.join(photosDirectory, filename)),
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
      photos: generatePhotos(slug, project.captions),
    }
  })
}

export const getProjects = async (): Promise<Project[]> => {
  try {
    const file = path.join(process.cwd(), 'src', 'config.yml')
    const config = yaml.load(fs.readFileSync(file, 'utf-8'))
    return await generateProjects(config)
  } catch (e) {
    console.error(e)
  }
}
