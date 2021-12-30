import classNames from 'classnames'
import React, { useEffect } from 'react'
import { Project } from '../../lib/projects'
import { useProject } from '../../lib/useProject'
import Photo from '../Photo/Photo'
import Statement from '../Statement/Statement'

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
          return previous()
        case Key.RIGHT:
          return next()
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
        className={classNames(
          'absolute',
          'md:top-1/2',
          'md:left-1/2',
          'md:translate-x-[-50%]',
          'md:translate-y-[-50%]',
        )}
        onTouchStart={(e) => touchStartHandler(e)}
        onTouchMove={(e) => touchMoveHandler(e)}
      >
        <div
          data-testid="left-side"
          className={classNames('absolute', 'top-0', 'bottom-0', 'left-0', 'right-1/2', 'cursor-w-resize')}
          onClick={() => previous()}
        />
        <div
          data-testid="right-side"
          className={classNames('absolute', 'top-0', 'bottom-0', 'right-0', 'left-1/2', 'cursor-e-resize')}
          onClick={() => next()}
        />
        {project?.photos.map((photo) => (
          <Photo
            key={`${project.slug}--slide-${photo.key}`}
            className={classNames('text-center', { block: photo.key === activeKey, hidden: photo.key !== activeKey })}
            photo={photo}
            alt={`${project?.title} - ${photo.key}`}
          />
        ))}
      </div>
      {project?.statement ? <Statement title={project.title} statement={project.statement} /> : null}
    </>
  )
}

export default ProjectSlideshow
