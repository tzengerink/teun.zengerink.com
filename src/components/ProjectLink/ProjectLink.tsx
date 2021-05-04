import Link from 'next/link'
import React from 'react'
import { Project } from '../../lib/projects'
import Photo from '../Photo/Photo'
import styles from './ProjectLink.module.scss'

interface ProjectLink {
  project: Project
}

const ProjectLink: React.FC<ProjectLink> = ({ project }) => {
  const photo = project?.photos[0]
  const href = `/work/${project?.slug}${!project.statement ? `/${photo.key}` : ''}`

  return (
    <Link href={href}>
      <div className={styles.container}>
        <div className={styles.title}>{project?.title}</div>
        <Photo photo={photo} alt={project?.title} />
      </div>
    </Link>
  )
}

export default ProjectLink
