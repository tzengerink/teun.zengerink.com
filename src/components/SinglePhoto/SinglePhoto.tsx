import Link from 'next/link'
import React from 'react'
import { Project } from '../../lib/projects'
import styles from './SinglePhoto.module.scss'

interface SinglePhotoProps {
  project: Project
}

const SinglePhoto: React.FC<SinglePhotoProps> = ({ project }) => {
  const photo = project?.photos[0]
  const href = `/work/${project?.slug}${!project.statement ? `/${photo.key}` : ''}`

  return (
    <Link href={href}>
      <div className={styles.container}>
        <div className={styles.title}>{project?.title}</div>
        <img width={photo.size.width} height={photo.size.height} src={photo.url} alt={project.title} />
      </div>
    </Link>
  )
}

export default SinglePhoto
