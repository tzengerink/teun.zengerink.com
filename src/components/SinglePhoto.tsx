import React from 'react'
import Link from 'next/link'
import { Photo, Project } from '../lib/projectService'
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
        <img src={getPhoto(props.project)?.url} alt={props.project.title} />
      </div>
    </div>
  </Link>
)

export default SinglePhoto
