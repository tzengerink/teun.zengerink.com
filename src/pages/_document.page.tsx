import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

class Document extends NextDocument {
  render(): React.ReactElement {
    return (
      <Html lang="en" className="font-mono font-light text-grey/90">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,500;1,300&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body className="bg-white m-0">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
