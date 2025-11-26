import { Photo, Project } from '../../lib/types'
import { Page } from './page'

export class ProjectPage extends Page {
  async open(project: Project, photo: Photo | null = null): Promise<void> {
    const selectedPhoto = photo ? photo : project.photos[0]
    await this.page.goto(`/work/${project.slug}/${selectedPhoto.key}`)
    await this.expectUrl(`/work/${project.slug}/${selectedPhoto.key}`)
    await this.expectTitle(project.title)
  }
}
