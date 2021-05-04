import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { Project } from '../../lib/projects'
import { useProject } from '../../lib/useProject'
import Photo from '../Photo/Photo'
import styles from './ProjectSlideshow.module.scss'

enum Key {
  LEFT = 'ArrowLeft',
  RIGHT = 'ArrowRight',
}

interface ProjectSlideshowProps {
  project: Project
}

const pad = (str: string, length: number): string => {
  const output = str?.toString() ?? ''
  return output.length < length ? pad('0' + output, length) : output
}

const ProjectSlideshow: React.FC<ProjectSlideshowProps> = ({ project }) => {
  let touchStartX: number
  const { activeKey, previous, next } = useProject(project)

  const numberOfPhotos = pad(project?.photos?.length?.toString(), 2)

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
    <div className={styles.slideshow}>
      {project?.statement && (
        <div
          className={`${styles.slide} ${activeKey === undefined ? styles.active : ''}`}
          onClick={() => next()}
          onTouchStart={(e) => touchStartHandler(e)}
          onTouchMove={(e) => touchMoveHandler(e)}
        >
          <h2>{project?.title}</h2>
          <ReactMarkdown>{project?.statement}</ReactMarkdown>
        </div>
      )}
      {project?.photos.map((photo) => (
        <div
          key={`${project.slug}--slide-${photo.key}`}
          className={`${styles.slide} ${photo.key === activeKey ? styles.active : ''}`}
          onClick={() => next()}
          onTouchStart={(e) => touchStartHandler(e)}
          onTouchMove={(e) => touchMoveHandler(e)}
        >
          <Photo photo={photo} alt={`${project?.title} - ${photo.key}`} />
        </div>
      ))}
      <div className={styles.navigation}>
        <a className={styles.leftArrow} onClick={() => previous()}>
          &larr;
        </a>
        {activeKey && (
          <h3>
            {activeKey}/{numberOfPhotos}
          </h3>
        )}
        <a className={styles.rightArrow} onClick={() => next()}>
          &rarr;
        </a>
      </div>
      {project?.photos
        .filter((photo) => photo.caption)
        .map((photo) => (
          <div
            key={`${project.slug}--caption-${photo.key}`}
            className={`${styles.caption} ${photo.key === activeKey ? styles.active : ''}`}
          >
            <ReactMarkdown>{photo.caption}</ReactMarkdown>
          </div>
        ))}
    </div>
  )
}

export default ProjectSlideshow
