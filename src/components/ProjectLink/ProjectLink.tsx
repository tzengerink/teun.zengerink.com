import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import { Project } from '../../lib/types'
import Photo from '../Photo/Photo'

interface ProjectLink {
  project: Project
}

const ProjectLink: React.FC<ProjectLink> = ({ project }) => {
  return (
    <div className={classNames('h-[calc(100vh-150px)]', 'md:h-[100vh]')}>
      <Link href={`/work/${project?.slug}/${project?.photos[1].key}`}>
        <div
          className={classNames(
            'group',
            'relative',
            'inline-block',
            'leading-[0px]',
            'cursor-pointer',
            'top-1/2',
            'translate-y-[-50%]',
            'md:left-1/2',
            'md:translate-x-[-50%]',
          )}
        >
          <div
            className={classNames(
              'absolute',
              'inset-0',
              'top-1/2',
              'opacity-0',
              'group-hover:opacity-100',
              'text-center',
              'text-white',
              'z-20',
              'after:content-[""]',
              'after:absolute',
              'after:top-[-100%]',
              'after:bottom-0',
              'after:left-0',
              'after:right-0',
              'after:bg-black/40',
              'after:z-10',
            )}
          >
            {project?.title}
          </div>
          <Photo photo={project?.photos[0]} alt={project?.title} />
        </div>
      </Link>
    </div>
  )
}

export default ProjectLink
