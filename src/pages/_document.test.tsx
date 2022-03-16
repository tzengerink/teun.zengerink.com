import { JSDOM } from 'jsdom'
import { render } from '@testing-library/react'
import { DocumentProps } from 'next/document'
import React from 'react'
import Document from './_document.page'

jest.mock('next/document', () => ({
  __esModule: true,
  default: jest.requireActual('next/document').default,
  Html: ({ children }) => <html>{children}</html>,
  Head: ({ children }) => <head>{children}</head>,
  Main: () => <>[MAIN]</>,
  NextScript: () => <>[NEXTSCRIPT]</>,
}))

describe('Document', () => {
  const ENV = process.env

  beforeEach(() => {
    jest.resetModules()
    process.env = { ...ENV }
  })

  afterAll(() => {
    process.env = ENV
  })

  it('renders correctly', () => {
    process.env.NEXT_PUBLIC_TRACKING_ID = ''
    const dom = new JSDOM()
    const props = {} as DocumentProps
    const { container } = render(<Document {...props} />, { container: dom.window.document })
    expect(container.documentElement).toMatchSnapshot()
  })

  it('renders script tags when tracking id is set', () => {
    const dom = new JSDOM()
    const props = {} as DocumentProps
    const { container } = render(<Document {...props} />, { container: dom.window.document })
    expect(container.documentElement).toMatchSnapshot()
  })
})
