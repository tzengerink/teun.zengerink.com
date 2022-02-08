import { expect } from '@playwright/test'
import { Page } from './page'

export class IndexPage extends Page {
  async open() {
    await this.page.goto('/')
    await this.expectTitle()
    await expect(this.page.locator('h1')).toHaveText(this.titleRoot)
  }
}
