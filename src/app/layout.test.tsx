import React from 'react'
import { AUTHOR_NAME, TITLE_SEPARATOR } from '../../src/lib/constants'
import RootLayout, { type Metadata } from './layout'

jest.mock('../styles/globals.css', () => ({}))
jest.mock('next/font/google', () => ({
  Roboto_Mono: jest.fn(() => ({
    className: 'font-mono',
  })),
}))

describe('RootLayout', () => {
  it('exports a default function', () => {
    expect(typeof RootLayout).toBe('function')
  })

  it('renders HTML element with lang attribute', () => {
    const result = RootLayout({ children: <div>content</div> })
    expect(result.type).toBe('html')
    expect(result.props.lang).toBe('en')
  })

  it('renders HTML with correct CSS classes', () => {
    const result = RootLayout({ children: <div>content</div> })
    const classNames = String(result.props.className || '')
    expect(classNames).toContain('font-light')
    expect(classNames).toContain('text-grey/90')
  })

  it('applies Roboto Mono font via next/font', () => {
    const { Roboto_Mono } = require('next/font/google')
    expect(Roboto_Mono).toHaveBeenCalledWith({
      weight: ['300', '500'],
      style: ['normal', 'italic'],
      display: 'swap',
    })
  })

  it('passes children to body', () => {
    const testContent = <div>test</div>
    const result = RootLayout({ children: testContent })
    expect(result.props.children).toBeDefined()
    const children = Array.isArray(result.props.children) ? result.props.children : [result.props.children]
    const body = children.find((child: any) => child?.type === 'body')
    expect(body).toBeDefined()
  })

  it('renders body with correct CSS classes', () => {
    const result = RootLayout({ children: <div>content</div> })
    const children = Array.isArray(result.props.children) ? result.props.children : [result.props.children]
    const body = children.find((child: any) => child?.type === 'body')
    const bodyClasses = String(body?.props?.className || '')
    expect(bodyClasses.includes('bg-white')).toBe(true)
    expect(bodyClasses.includes('m-0')).toBe(true)
  })

  it('does not use head element for fonts', () => {
    const result = RootLayout({ children: <div>content</div> })
    const children = Array.isArray(result.props.children) ? result.props.children : [result.props.children]
    const hasHeadChild = children.some((child: any) => child?.type === 'head')
    expect(hasHeadChild).toBe(false)
  })

  it('exports metadata object', () => {
    const metadata = RootLayout.metadata
    expect(metadata).toBeDefined()
    expect(metadata.title).toBeDefined()
    expect(metadata.title.default).toBe(AUTHOR_NAME)
    expect(metadata.title.template).toContain(`${AUTHOR_NAME}${TITLE_SEPARATOR}%s`)
    expect(metadata.icons).toBeDefined()
    expect(metadata.icons.icon).toBe('/favicon.ico')
  })

  it('metadata title template includes format specifier', () => {
    const metadata = RootLayout.metadata
    expect(metadata.title.template).toContain('%s')
  })
})
