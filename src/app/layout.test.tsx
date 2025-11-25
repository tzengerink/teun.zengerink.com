import React from 'react'

jest.mock('../styles/globals.css', () => ({}))

describe('RootLayout', () => {
  it('exports a default function', () => {
    const RootLayout = require('./layout').default
    expect(typeof RootLayout).toBe('function')
  })

  it('renders HTML element with lang attribute', () => {
    const RootLayout = require('./layout').default
    const result = RootLayout({ children: <div>content</div> })
    expect(result.type).toBe('html')
    expect(result.props.lang).toBe('en')
  })

  it('renders HTML with correct CSS classes', () => {
    const RootLayout = require('./layout').default
    const result = RootLayout({ children: <div>content</div> })
    expect(result.props.className).toContain('font-mono')
    expect(result.props.className).toContain('font-light')
    expect(result.props.className).toContain('text-grey/90')
  })

  it('passes children to body', () => {
    const RootLayout = require('./layout').default
    const testContent = <div>test</div>
    const result = RootLayout({ children: testContent })
    const body = result.props.children.find((child: any) => child?.type === 'body')
    expect(body).toBeDefined()
    expect(body.props.children).toBe(testContent)
  })

  it('renders body with correct CSS classes', () => {
    const RootLayout = require('./layout').default
    const result = RootLayout({ children: <div>content</div> })
    const body = result.props.children.find((child: any) => child?.type === 'body')
    const bodyClasses = String(body?.props?.className || '')
    expect(bodyClasses.includes('bg-white')).toBe(true)
    expect(bodyClasses.includes('m-0')).toBe(true)
  })

  it('includes head with Google Fonts link', () => {
    const RootLayout = require('./layout').default
    const result = RootLayout({ children: <div>content</div> })
    const head = result.props.children.find((child: any) => child?.type === 'head')
    expect(head).toBeDefined()
    const links = React.Children.toArray(head.props.children).filter(
      (child: any) => child?.type === 'link'
    )
    const googleFontsLink = links.find((link: any) =>
      link.props.href?.includes('fonts.googleapis.com')
    )
    expect(googleFontsLink).toBeDefined()
  })

  it('has correct link rel attribute for Google Fonts', () => {
    const RootLayout = require('./layout').default
    const result = RootLayout({ children: <div>content</div> })
    const head = result.props.children.find((child: any) => child?.type === 'head')
    const links = React.Children.toArray(head.props.children).filter(
      (child: any) => child?.type === 'link'
    )
    const googleFontsLink = links.find((link: any) =>
      link.props.href?.includes('fonts.googleapis.com')
    ) as any
    expect(googleFontsLink?.props?.rel).toBe('stylesheet')
  })

  it('exports metadata object', () => {
    const metadata = require('./layout').metadata
    expect(metadata).toBeDefined()
    expect(metadata.title).toBeDefined()
    expect(metadata.title.default).toBe('Teun Zengerink')
    expect(metadata.title.template).toContain('Teun Zengerink')
    expect(metadata.icons).toBeDefined()
    expect(metadata.icons.icon).toBe('/favicon.ico')
  })

  it('metadata title template includes format specifier', () => {
    const metadata = require('./layout').metadata
    expect(metadata.title.template).toContain('%s')
  })
})
