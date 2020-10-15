import Document, { Html, Head, Main, NextScript } from 'next/document'

class Doc extends Document {
  render(): React.ReactElement {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Doc
