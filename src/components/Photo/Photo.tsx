import { Photo as PhotoInterface, Width, MAX_WIDTHS } from '../../lib/projects'

interface Props {
  photo: PhotoInterface
  alt: string
}

type SrcSet = [url: string, width: Width]

const Photo: React.FC<Props> = ({ photo, alt }) => {
  const firstWidths = MAX_WIDTHS.slice(0, -1)
  const lastWidth = MAX_WIDTHS.slice(-1)[0]

  const findExport = (width: Width) => photo.exports.find((value) => value.width === width)
  const toSrcSetStr = (srcSet: SrcSet[]): string => srcSet.map(([url, width]) => `${url} ${width}w`).join(', ')

  return (
    <img
      alt={alt}
      src={findExport(Width.Desktop).url}
      sizes={`${firstWidths.map((width) => `(max-width: ${width - 1}px) ${width}px`).join(', ')}, ${lastWidth}px`}
      srcSet={toSrcSetStr(MAX_WIDTHS.map((width) => [findExport(width).url, width]))}
    />
  )
}

export default Photo
