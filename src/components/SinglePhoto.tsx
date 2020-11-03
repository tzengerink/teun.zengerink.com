import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Photo, Project } from '../lib/projectService'
import styles from './SinglePhoto.module.scss'

interface SinglePhotoProps {
  project: Project
}

const getPhoto = (project: Project): Photo => {
  if (!project) return
  return project.photos[0]
}

const SinglePhoto = (props: SinglePhotoProps): React.ReactElement => {
  const photo = getPhoto(props.project)
  return (
    <Link href={`/work/${props.project?.slug}${!props.project.statement ? `/${getPhoto(props.project).key}` : ''}`}>
      <div className={styles.container}>
        <div className={styles.title}>{props.project?.title}</div>
        <Image width={photo.size.width} height={photo.size.height} src={photo.url} alt={props.project.title} />
      </div>
    </Link>
  )
}

export default SinglePhoto
