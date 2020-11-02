import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import ProjectRouter from '../lib/ProjectRouter'
import { Project } from '../lib/projectService'
import styles from './ProjectSlideshow.module.scss'

enum Key {
  LEFT = 'ArrowLeft',
  RIGHT = 'ArrowRight',
}

interface ProjectSlideshowProps {
  project: Project
}

const ProjectSlideshow = (props: ProjectSlideshowProps): React.ReactElement => {
  const nextRouter = useRouter()
  const router = new ProjectRouter(nextRouter, props.project)

  useEffect(() => {
    const keyUpHandler = ({ key }: KeyboardEvent) => {
      switch (key) {
        case Key.LEFT:
          router.previous()
          break
        case Key.RIGHT:
          router.next()
          break
      }
    }

    window.addEventListener('keyup', keyUpHandler)
    return () => window.removeEventListener('keyup', keyUpHandler)
  })

  return (
    <div className={styles.slideshow}>
      <div className={styles.slides} onClick={() => router.next()}>
        {props.project?.statement ? (
          <div className={`${styles.slide} ${router.activeKey() === undefined ? styles.active : ''}`}>
            <h2>{props.project?.title}</h2>
            <ReactMarkdown source={props.project?.statement} />
          </div>
        ) : (
          ''
        )}
        {props.project?.photos.map((photo) => (
          <img
            key={`${props.project.slug}--photo-${photo.key}`}
            className={`${styles.slide} ${router.isActive(photo) ? styles.active : ''}`}
            src={photo.url}
            alt={photo.caption ? photo.caption : photo.key}
          />
        ))}
      </div>
      <div className={styles.navigation}>
        <a className={styles.leftArrow} onClick={() => router.previous()}>
          &larr;
        </a>
        {router.activeKey() ? (
          <h3>
            {router.activeKey()}/{router.countPhotos()}
          </h3>
        ) : (
          ''
        )}
        <a className={styles.rightArrow} onClick={() => router.next()}>
          &rarr;
        </a>
      </div>
      {props.project?.photos
        .filter((photo) => photo.caption)
        .map((photo) => (
          <div
            key={`${props.project.slug}--caption-${photo.key}`}
            className={`${styles.caption} ${router.isActive(photo) ? styles.active : ''}`}
          >
            <ReactMarkdown source={photo.caption} />
          </div>
        ))}
    </div>
  )
}

export default ProjectSlideshow
