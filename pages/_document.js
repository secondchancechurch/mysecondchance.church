import React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import { Reset } from "../styles/reset"
import { Fonts } from "../styles/fonts"

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
          originalRenderPage({
            enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
          })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
            <>
              {initialProps.input}
              {sheet.getStyleElement()}
            </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
  // static async getInitialProps({renderPage}) {
  //   const page = renderPage()
  //   const styles = extractCritical(page.html)
  //   return {...page, ...styles}
  // }

  constructor(props) {
    super(props)
    const {__NEXT_DATA__, ids} = props
    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />

          <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#f4802c" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}