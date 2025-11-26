import { expect } from '@playwright/test'
import { Page } from '@e2e/pages/page'

export class IndexPage extends Page {
  async open(): Promise<void> {
    await this.page.goto('/')
    await this.expectTitle()
    await expect(this.page.locator('h1')).toHaveText(this.titleRoot)
  }
}
