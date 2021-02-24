import { Photo, Project } from './projectService'
import { useRouter } from 'next/router'

interface UseProjectRouter {
  activeKey: string | undefined
  previous: () => void
  next: () => void
}

export const useProjectRouter = (project: Project): UseProjectRouter => {
  const router = useRouter()

  const activeKey = router?.query?.slug ? router.query?.slug[1] : undefined

  const getSlideIndex = (): number => project.photos.findIndex((photo) => photo.key === activeKey)
  const firstPhoto = (): Photo => project.photos[0]
  const lastPhoto = (): Photo => [...project.photos].pop()
  const nextPhoto = (): Photo => project.photos[getSlideIndex() + 1]
  const previousPhoto = (): Photo => project.photos[getSlideIndex() - 1]
  const isLast = (): boolean => activeKey === lastPhoto().key
  const isFirst = (): boolean => activeKey === firstPhoto().key

  const go = (photo?: Photo) => {
    const slug = `/work/${project.slug}`
    if (!photo) return router.push(slug)
    return router.push(`${slug}/${photo.key}`)
  }

  const previous = () => {
    if (project.statement) {
      if (!activeKey) return go(lastPhoto())
      if (isFirst()) return go()
      return go(previousPhoto())
    }

    if (isFirst()) return go(lastPhoto())
    go(previousPhoto())
  }

  const next = () => {
    if (project.statement) {
      if (!activeKey) return go(firstPhoto())
      if (isLast()) return go()
      return go(nextPhoto())
    }

    if (isLast()) return go(firstPhoto())
    go(nextPhoto())
  }

  return { activeKey, previous, next }
}
