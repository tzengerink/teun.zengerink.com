import { test, expect } from '@playwright/test'
import { getActiveProjects, titleDiv, titleRoot } from './helpers'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(titleRoot)
  await expect(page.locator('h1')).toHaveText(titleRoot)
})

test('should navigate to the second photo of the highlighted project', async ({ page }) => {
  const projects = await getActiveProjects()
  const highlighted = projects[0]
  await page.hover('main div')
  await page.click(`main :text("${highlighted.title}")`)
  await expect(page).toHaveTitle(`${titleRoot} ${titleDiv} ${highlighted.title}`)
  await expect(page).toHaveURL(`/work/${highlighted.slug}/02`)
})

test('should navigate to the last project in the menu', async ({ page }) => {
  const projects = await getActiveProjects()
  const last = projects[projects.length - 1]
  await page.hover('text=Projects')
  await page.click(`nav :text("${last.title}")`)
  await expect(page).toHaveTitle(`${titleRoot} ${titleDiv} ${last.title}`)
  await expect(page).toHaveURL(`/work/${last.slug}/01`)
})

test('should navigate to instagram', async ({ page }) => {
  await page.click('text=Instagram')
  await expect(page).toHaveURL(/https:\/\/www\.instagram\.com\/.*/)
})
