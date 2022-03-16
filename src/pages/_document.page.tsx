import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

class Document extends NextDocument {
  render(): React.ReactElement {
    const __html = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_TRACKING_ID}', {
        page_path: window.location.pathname,
      });`

    return (
      <Html lang="en" className="font-mono font-light text-grey/90">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,500;1,300&display=swap"
            rel="stylesheet"
          ></link>
          {process.env.NEXT_PUBLIC_TRACKING_ID ? (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_TRACKING_ID}`}
              />
              <script dangerouslySetInnerHTML={{ __html }} />
            </>
          ) : null}
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
