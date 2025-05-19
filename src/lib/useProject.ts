'use client'

import { useRouter } from 'next/navigation'
import { Photo, Project } from './projects'

interface UseProject {
  previous: () => void
  next: () => void
}

const NOOP = () => false

export const useProject = (project: Project, index: string): UseProject => {
  const router = useRouter()

  if (!project?.photos?.length) return { previous: NOOP, next: NOOP }

  const slideIndex = project.photos.findIndex((photo) => photo.key === index)
  const firstPhoto = project.photos[0]
  const lastPhoto = [...project.photos].pop() || firstPhoto
  const nextPhoto = project.photos[slideIndex + 1]
  const previousPhoto = project.photos[slideIndex - 1]
  const isLast = index === lastPhoto.key
  const isFirst = index === firstPhoto.key

  const go = (photo: Photo) => router.push(`/work/${project.slug}/${photo.key}`)
  const previous = () => (isFirst ? go(lastPhoto) : go(previousPhoto))
  const next = () => (isLast ? go(firstPhoto) : go(nextPhoto))

  return { previous, next }
}
