import React, { useEffect } from 'react'
import Image from 'next/image'
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
  let touchStartX: number
  const router = new ProjectRouter(useRouter(), props.project)

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

  const touchStartHandler = ({ touches }: React.TouchEvent) => {
    touchStartX = touches[0].clientX
  }

  const touchMoveHandler = ({ touches }: React.TouchEvent) => {
    if (!touchStartX) return
    const difference = touchStartX - touches[0].clientX
    if (difference < 0) router.previous()
    if (difference > 0) router.next()
    touchStartX = null
  }

  return (
    <div className={styles.slideshow}>
      {props.project?.statement ? (
        <div
          className={`${styles.slide} ${router.activeKey() === undefined ? styles.active : ''}`}
          onClick={() => router.next()}
          onTouchStart={(e) => touchStartHandler(e)}
          onTouchMove={(e) => touchMoveHandler(e)}
        >
          <h2>{props.project?.title}</h2>
          <ReactMarkdown source={props.project?.statement} />
        </div>
      ) : (
        ''
      )}
      {props.project?.photos.map((photo) => (
        <div
          key={`${props.project.slug}--slide-${photo.key}`}
          className={`${styles.slide} ${router.isActive(photo) ? styles.active : ''}`}
          onClick={() => router.next()}
          onTouchStart={(e) => touchStartHandler(e)}
          onTouchMove={(e) => touchMoveHandler(e)}
        >
          <Image
            src={photo.url}
            alt={photo.caption ? photo.caption : photo.key}
            width={photo.size.width}
            height={photo.size.height}
          />
        </div>
      ))}
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
