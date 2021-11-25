import React, { useEffect } from 'react'
import { Project } from '../../lib/projects'
import { useProject } from '../../lib/useProject'
import Photo from '../Photo/Photo'
import Markdown from '../Markdown/Markdown'
import styles from './ProjectSlideshow.module.scss'

enum Key {
  LEFT = 'ArrowLeft',
  RIGHT = 'ArrowRight',
}

interface ProjectSlideshowProps {
  project: Project
}

const ProjectSlideshow: React.FC<ProjectSlideshowProps> = ({ project }) => {
  let touchStartX: number
  const { activeKey, previous, next } = useProject(project)

  useEffect(() => {
    const keyUpHandler = ({ key }: KeyboardEvent) => {
      switch (key) {
        case Key.LEFT:
          previous()
          break
        case Key.RIGHT:
          next()
          break
      }
    }

    const ON = 'keyup'
    window.addEventListener(ON, keyUpHandler)
    return () => window.removeEventListener(ON, keyUpHandler)
  })

  const touchStartHandler = ({ touches }: React.TouchEvent) => {
    touchStartX = touches[0].clientX
  }

  const touchMoveHandler = ({ touches }: React.TouchEvent) => {
    if (!touchStartX) return
    const difference = touchStartX - touches[0].clientX
    if (difference < 0) previous()
    if (difference > 0) next()
    touchStartX = null
  }

  return (
    <>
      <div
        className={styles.slideshow}
        onTouchStart={(e) => touchStartHandler(e)}
        onTouchMove={(e) => touchMoveHandler(e)}
      >
        <div data-testid="left-side" className={styles.previous} onClick={() => previous()} />
        <div data-testid="right-side" className={styles.next} onClick={() => next()} />
        {project?.photos.map((photo) => (
          <Photo
            className={`${styles.slide}${photo.key === activeKey ? ` ${styles.active}` : ''}`}
            key={`${project.slug}--slide-${photo.key}`}
            photo={photo}
            alt={`${project?.title} - ${photo.key}`}
          />
        ))}
      </div>
      {project?.statement ? (
        <div className={styles.statement}>
          <h2>Statement</h2>
          <div className={styles.text}>
            <h3>{project.title}</h3>
            <Markdown>{project.statement}</Markdown>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default ProjectSlideshow
