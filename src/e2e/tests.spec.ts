import { test } from '@playwright/test'
import { getProjects, Project } from '../lib/projects'
import { IndexPage } from './pages/index.page'
import { ProjectPage } from './pages/project.page'

let projects: Project[]
const filterActive = (project: Project) => !project.isArchived

test.beforeAll(async () => {
  projects = await getProjects()
})

test.describe.parallel('suite', () => {
  test.describe('index', () => {
    let indexPage: IndexPage

    test.beforeEach(async ({ page }) => {
      indexPage = new IndexPage(page)
      await indexPage.open()
    })

    test('should navigate to the second photo of the highlighted project', async () => {
      const highlighted = projects.filter(filterActive)[0]
      await indexPage.hover('main div')
      await indexPage.click(`main :text("${highlighted.title}")`)
      await indexPage.expectTitle(highlighted.title)
      await indexPage.expectUrl(`/work/${highlighted.slug}/02`)
    })

    test('should navigate to the last project in the menu', async () => {
      const filteredProjects = projects.filter(filterActive)
      const last = filteredProjects[filteredProjects.length - 1]
      await indexPage.hover('text=Projects')
      await indexPage.click(`nav :text("${last.title}")`)
      await indexPage.expectTitle(last.title)
      await indexPage.expectUrl(`/work/${last.slug}/01`)
    })

    test('should navigate to instagram', async () => {
      await indexPage.click('text=Instagram')
      await indexPage.expectUrl(/https:\/\/www\.instagram\.com\/.*/)
    })
  })

  test.describe('project', () => {
    let projectPage: ProjectPage

    test.beforeEach(async ({ page }) => {
      projectPage = new ProjectPage(page)
    })

    test('should navigate to the homepage', async () => {
      await projectPage.open(projects.filter(filterActive)[0])
      await projectPage.click('h1')
      await projectPage.expectTitle()
      await projectPage.expectUrl('/')
    })

    test('should show next photo', async () => {
      const project = projects.filter(filterActive)[0]
      await projectPage.open(project)
      await projectPage.click('.cursor-e-resize')
      await projectPage.expectUrl(`/work/${project.slug}/${project.photos[1].key}`)
    })

    test('should show previous photo', async () => {
      const project = projects.filter(filterActive)[0]
      await projectPage.open(project, project.photos[1])
      await projectPage.click('.cursor-w-resize')
      await projectPage.expectUrl(`/work/${project.slug}/${project.photos[0].key}`)
    })

    test('should show first photo when on last photo', async () => {
      const project = projects.filter(filterActive)[0]
      await projectPage.open(project, project.photos[project.photos.length - 1])
      await projectPage.click('.cursor-e-resize')
      await projectPage.expectUrl(`/work/${project.slug}/${project.photos[0].key}`)
    })

    test('should show last photo when on first photo', async () => {
      const project = projects.filter(filterActive)[0]
      await projectPage.open(project)
      await projectPage.click('.cursor-w-resize')
      await projectPage.expectUrl(`/work/${project.slug}/${project.photos[project.photos.length - 1].key}`)
    })

    test('should show statement on hover', async () => {
      const project = projects.filter((project) => project.statement)[0]
      await projectPage.open(project)
      await projectPage.expectVisibility(`h3:text("${project.title}")`, false)
      await projectPage.hover('text=Statement')
      await projectPage.expectVisibility(`h3:text("${project.title}")`, true)
      await projectPage.hover('text=Projects')
      await projectPage.expectVisibility(`h3:text("${project.title}")`, false)
    })

    test('should show archived projects', async () => {
      const project = projects.filter((project) => project.isArchived)[0]
      await projectPage.open(project)
    })
  })
})
