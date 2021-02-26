import { Photo, Project } from './projects'
import { useRouter } from 'next/router'

interface UseProject {
  activeKey: string | undefined
  previous: () => void
  next: () => void
}

const noop = () => false

export const useProject = (project: Project): UseProject => {
  if (!project?.photos?.length) return { activeKey: undefined, previous: noop, next: noop }

  const router = useRouter()

  const activeKey = router?.query?.slug ? router.query?.slug[1] : undefined
  const slideIndex = project.photos.findIndex((photo) => photo.key === activeKey)
  const firstPhoto = project.photos[0]
  const lastPhoto = [...project.photos].pop()
  const nextPhoto = project.photos[slideIndex + 1]
  const previousPhoto = project.photos[slideIndex - 1]
  const isLast = activeKey === lastPhoto.key
  const isFirst = activeKey === firstPhoto.key

  const go = (photo?: Photo) => {
    const slug = `/work/${project.slug}`
    if (!photo) return router.push(slug)
    return router.push(`${slug}/${photo.key}`)
  }

  const previous = () => {
    if (project.statement) {
      if (!activeKey) return go(lastPhoto)
      if (isFirst) return go()
      return go(previousPhoto)
    }

    if (isFirst) return go(lastPhoto)
    go(previousPhoto)
  }

  const next = () => {
    if (project.statement) {
      if (!activeKey) return go(firstPhoto)
      if (isLast) return go()
      return go(nextPhoto)
    }

    if (isLast) return go(firstPhoto)
    go(nextPhoto)
  }

  return { activeKey, previous, next }
}
