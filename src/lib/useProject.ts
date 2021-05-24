import { Photo, Project } from './projects'
import { useRouter } from 'next/router'

interface UseProject {
  activeKey: string | undefined
  previous: () => void
  next: () => void
}

const NOOP = () => false

export const useProject = (project: Project): UseProject => {
  if (!project?.photos?.length) return { activeKey: undefined, previous: NOOP, next: NOOP }

  const router = useRouter()

  const activeKey = router?.query?.slug?.length > 1 ? router.query?.slug[1] : project.photos[0].key
  const slideIndex = project.photos.findIndex((photo) => photo.key === activeKey)
  const firstPhoto = project.photos[0]
  const lastPhoto = [...project.photos].pop()
  const nextPhoto = project.photos[slideIndex + 1]
  const previousPhoto = project.photos[slideIndex - 1]
  const isLast = activeKey === lastPhoto.key
  const isFirst = activeKey === firstPhoto.key

  const go = (photo: Photo) => router.push(`${`/work/${project.slug}`}/${photo.key}`)
  const previous = () => (isFirst ? go(lastPhoto) : go(previousPhoto))
  const next = () => (isLast ? go(firstPhoto) : go(nextPhoto))

  return { activeKey, previous, next }
}
