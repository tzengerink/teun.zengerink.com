import { expect, Page as PlaywrightPage } from '@playwright/test'
import { TITLE_DIV, TITLE_ROOT } from '../../lib/constants'

export abstract class Page {
  protected titleRoot = TITLE_ROOT
  protected titleDiv = TITLE_DIV

  constructor(protected page: PlaywrightPage) {}

  async click(selector: string): Promise<void> {
    await this.page.click(selector)
  }

  async hover(selector: string): Promise<void> {
    await this.page.hover(selector)
  }

  async expectTitle(title: string | null = null): Promise<void> {
    const expected = title ? `${this.titleRoot} ${this.titleDiv} ${title}` : this.titleRoot
    await expect(this.page).toHaveTitle(expected)
  }

  async expectUrl(url: string | RegExp): Promise<void> {
    await expect(this.page).toHaveURL(url)
  }

  async expectVisibility(selector: string, isVisible: boolean): Promise<void> {
    await expect(this.page.locator(selector))[isVisible ? 'toBeVisible' : 'toBeHidden']()
  }
}
