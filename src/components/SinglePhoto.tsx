import { Photo, Project } from '../projectService'
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
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.title}>{props.project?.title}</div>
        <img src={getPhoto(props.project)?.url} />
      </div>
    </div>
  </Link>
)

export default SinglePhoto
