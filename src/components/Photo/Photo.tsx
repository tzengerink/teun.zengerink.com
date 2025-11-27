import Image from 'next/image'
import classNames from 'classnames'
import React from 'react'
import { Photo as PhotoInterface, Width } from '@lib/types'

interface Props {
  className?: string
  photo: PhotoInterface
  alt: string
  hasPriority?: boolean
}

const Photo: React.FC<Props> = ({ className, photo, alt, hasPriority = false }) => {
  const findExport = (width: Width) => photo.exports.find((value) => value.width === width) || { url: '' }

  return (
    <Image
      className={classNames(className, 'w-auto', 'h-auto', 'md:max-w-[70vw]', 'md:max-h-[90vh]')}
      preload
      fetchPriority={hasPriority ? 'high' : 'low'}
      width={Width.Desktop * 2}
      height={Width.Desktop * 2}
      alt={alt}
      src={findExport(Width.Desktop).url}
    />
  )
}

export default Photo
