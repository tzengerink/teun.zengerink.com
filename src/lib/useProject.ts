'use client'

import { Photo, Project } from '@lib/types'
import { useRouter } from 'next/navigation'

interface UseProject {
  activeKey: string | undefined
  previous: () => void
  next: () => void
}

const NOOP = () => false

export const useProject = (project: Project, initialSlug?: string[]): UseProject => {
  const router = useRouter()

  if (!project?.photos?.length) return { activeKey: undefined, previous: NOOP, next: NOOP }

  const activeKey = initialSlug && initialSlug.length > 1 ? initialSlug[1] : project.photos[0].key
  const slideIndex = project.photos.findIndex((photo) => photo.key === activeKey)
  const firstPhoto = project.photos[0]
  const lastPhoto = [...project.photos].pop()

  if (!lastPhoto) return { activeKey, previous: NOOP, next: NOOP }

  const nextPhoto = project.photos[slideIndex + 1]
  const previousPhoto = project.photos[slideIndex - 1]
  const isLast = activeKey === lastPhoto.key
  const isFirst = activeKey === firstPhoto.key

  const go = (photo: Photo) => router.push(`${`/work/${project.slug}`}/${photo.key}`)
  const previous = () => (isFirst ? go(lastPhoto) : go(previousPhoto))
  const next = () => (isLast ? go(firstPhoto) : go(nextPhoto))

  return { activeKey, previous, next }
}
