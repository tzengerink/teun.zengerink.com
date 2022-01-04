import { test, expect, Page } from '@playwright/test'
import { getProjects, Photo, Project } from '../lib/projects'
import { getActiveProjects, titleDiv, titleRoot } from './helpers'

const open = async (page: Page, project: Project = null, photo: Photo = null) => {
  const projects = await getActiveProjects()
  const selectedProject = project ? project : projects[0]
  const selectedPhoto = photo ? photo : selectedProject.photos[0]
  await page.goto(`/work/${selectedProject.slug}/${selectedPhoto.key}`)
  await expect(page).toHaveURL(`/work/${selectedProject.slug}/${selectedPhoto.key}`)
  await expect(page).toHaveTitle(`${titleRoot} ${titleDiv} ${selectedProject.title}`)
}

test('should navigate to the homepage', async ({ page }) => {
  await open(page)
  await page.click('h1')
  await expect(page).toHaveURL('/')
  await expect(page).toHaveTitle(titleRoot)
})

test('should show next photo', async ({ page }) => {
  const projects = await getActiveProjects()
  const project = projects[0]
  await open(page, project)
  await page.click('.cursor-e-resize')
  await expect(page).toHaveURL(`/work/${project.slug}/${project.photos[1].key}`)
})

test('should show previous photo', async ({ page }) => {
  const projects = await getActiveProjects()
  const project = projects[0]
  await open(page, project, project.photos[1])
  await page.click('.cursor-w-resize')
  await expect(page).toHaveURL(`/work/${project.slug}/${project.photos[0].key}`)
})

test('should show first photo when on last photo', async ({ page }) => {
  const projects = await getActiveProjects()
  const project = projects[0]
  await open(page, project, project.photos[project.photos.length - 1])
  await page.click('.cursor-e-resize')
  await expect(page).toHaveURL(`/work/${project.slug}/${project.photos[0].key}`)
})

test('should show last photo when on first photo', async ({ page }) => {
  const projects = await getActiveProjects()
  const project = projects[0]
  await open(page, project)
  await page.click('.cursor-w-resize')
  await expect(page).toHaveURL(`/work/${project.slug}/${project.photos[project.photos.length - 1].key}`)
})

test('should show statement on hover', async ({ page }) => {
  const projects = await getProjects()
  const project = projects.filter((project) => project.statement)[0]
  await open(page, project)
  await expect(page.locator(`h3:text("${project.title}")`)).toBeHidden()
  await page.hover('text=Statement')
  await expect(page.locator(`h3:text("${project.title}")`)).toBeVisible()
  await page.hover('text=Projects')
  await expect(page.locator(`h3:text("${project.title}")`)).toBeHidden()
})

test('should show archived projects', async ({ page }) => {
  const projects = await getProjects()
  const project = projects.filter((project) => project.isArchived)[0]
  await open(page, project)
})
