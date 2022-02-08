import { expect, Page as PlaywrightPage } from '@playwright/test'

export abstract class Page {
  protected titleRoot = 'Teun Zengerink'
  protected titleDiv = '-'

  constructor(protected page: PlaywrightPage) {}

  async click(selector: string) {
    await this.page.click(selector)
  }

  async hover(selector: string) {
    await this.page.hover(selector)
  }

  async expectTitle(title: string = null) {
    const expected = title ? `${this.titleRoot} ${this.titleDiv} ${title}` : this.titleRoot
    await expect(this.page).toHaveTitle(expected)
  }

  async expectUrl(url: string | RegExp) {
    await expect(this.page).toHaveURL(url)
  }

  async expectVisibility(selector: string, isVisible: boolean) {
    await expect(this.page.locator(selector))[isVisible ? 'toBeVisible' : 'toBeHidden']()
  }
}
