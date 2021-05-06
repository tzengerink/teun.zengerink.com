import Link from 'next/link'
import React from 'react'
import { Project } from '../../lib/projects'
import Photo from '../Photo/Photo'
import styles from './ProjectLink.module.scss'

interface ProjectLink {
  project: Project
}

const ProjectLink: React.FC<ProjectLink> = ({ project }) => {
  return (
    <Link href={`/work/${project?.slug}/${project?.photos[1].key}`}>
      <div className={styles.container}>
        <div className={styles.title}>{project?.title}</div>
        <Photo photo={project?.photos[0]} alt={project?.title} />
      </div>
    </Link>
  )
}

export default ProjectLink
