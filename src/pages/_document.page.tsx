import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class Doc extends Document {
  render(): React.ReactElement {
    return (
      <Html lang="en" className="font-mono font-light text-grey/90">
        {process.env.NEXT_PUBLIC_TRACKING_ID ? (
          <Head>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_TRACKING_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </Head>
        ) : (
          <Head />
        )}
        <body className="bg-white m-0">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Doc
