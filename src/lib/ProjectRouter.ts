import { NextRouter } from 'next/router'
import { Project, Photo } from '../lib/projectService'

export default class ProjectRouter {
  private router: NextRouter
  private project: Project

  constructor(router: NextRouter, project: Project) {
    this.router = router
    this.project = project

    if (this.project && !this.project.statement && this.activeKey() === undefined) {
      this.go(this.firstPhoto())
    }
  }

  private getSlideIndex(): number {
    return this.project.photos.findIndex((photo) => photo.key === this.activeKey())
  }

  private firstPhoto(): Photo {
    return this.project.photos[0]
  }

  private lastPhoto(): Photo {
    return [...this.project.photos].pop()
  }

  private nextPhoto(): Photo {
    return this.project.photos[this.getSlideIndex() + 1]
  }

  private previousPhoto(): Photo {
    return this.project.photos[this.getSlideIndex() - 1]
  }

  private isLast(): boolean {
    return this.activeKey() === this.lastPhoto().key
  }

  private isFirst(): boolean {
    return this.activeKey() === this.firstPhoto().key
  }

  private go(photo?: Photo): Promise<boolean> {
    const slug = `/work/${this.project.slug}`
    if (!photo) return this.router.push(slug)
    return this.router.push(`${slug}/${photo.key}`)
  }

  private pad(str: string, length: number): string {
    const output = str.toString()
    return output.length < length ? this.pad('0' + output, length) : output
  }

  isActive(photo: Photo): boolean {
    return this.activeKey() === photo.key
  }

  activeKey(): string {
    return this.router?.query?.slug ? this.router.query?.slug[1] : undefined
  }

  countPhotos(length = 2): string {
    return this.pad(this.project?.photos.length.toString(), length)
  }

  next(): Promise<boolean> {
    if (this.project.statement) {
      if (!this.activeKey()) return this.go(this.firstPhoto())
      if (this.isLast()) return this.go()
      return this.go(this.nextPhoto())
    }

    if (this.isLast()) return this.go(this.firstPhoto())
    this.go(this.nextPhoto())
  }

  previous(): Promise<boolean> {
    if (this.project.statement) {
      if (!this.activeKey()) return this.go(this.lastPhoto())
      if (this.isFirst()) return this.go()
      return this.go(this.previousPhoto())
    }

    if (this.isFirst()) return this.go(this.lastPhoto())
    this.go(this.previousPhoto())
  }
}
