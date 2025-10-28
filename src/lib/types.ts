export enum Width {
  Mobile = 768,
  Desktop = 1280,
}

export interface ConfigCaption {
  key: string
  caption: string
}

export interface ConfigItem {
  title: string
  statement?: string
  isArchived?: boolean
  captions?: ConfigCaption[]
}

export interface Export {
  width: Width
  url: string
}

export interface Photo {
  key: string
  caption?: string
  exports: Export[]
}

export interface Project {
  title: string
  slug: string
  photos: Photo[]
  statement?: string
  isArchived?: boolean
}

export const MAX_WIDTHS = [Width.Mobile, Width.Desktop]
