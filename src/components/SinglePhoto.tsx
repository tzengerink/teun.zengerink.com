import { Photo, Project } from '../pages/api/projects'
import Link from 'next/link'
import styles from './SinglePhoto.module.scss'

interface SinglePhotoProps {
  project: Project
}

const getPhoto = (project: Project): Photo => {
  if (!project) return
  return project.photos[0]
}

const SinglePhoto = (props: SinglePhotoProps): React.ReactElement => (
  <Link href={`/work/${props.project?.slug}`}>
    <div className={styles.wrapper}>
      <div className={styles.title}>{props.project?.title}</div>
      <img src={getPhoto(props.project)?.url} />
    </div>
  </Link>
)

export default SinglePhoto
