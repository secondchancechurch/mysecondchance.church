import React from 'react'
import Head from 'next/head'
import initApollo from './init-apollo'
import { getDataFromTree } from '@apollo/react-ssr'

export default App => {
  return class Apollo extends React.Component {
    static displayName = 'withApollo(App)'
    static async getInitialProps (ctx) {
      // const { AppTree } = ctx
      const {
        Component,
        router,
        ctx: { req, res }
      } = ctx

      const apollo = initApollo()
      ctx.ctx.apolloClient = apollo
      let appProps = {}
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx)
      }
      if (res && res.finished) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        return {}
      }
      if (typeof window === 'undefined') {
        // Run all graphql queries in the component tree
        // and extract the resulting data
        try {
          // Run all GraphQL queries
          await getDataFromTree(
              <App
                  {...appProps}
                  Component={Component}
                  router={router}
                  apolloClient={apollo}
              />
          )
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error('Error while running `getDataFromTree`', error)
        }
        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind()
      }
      // Extract query data from the Apollo's store
      const apolloState = apollo.cache.extract()
      return {
        ...appProps,
        apolloState
      }
    }

    constructor (props) {
      super(props)
      this.apolloClient = initApollo(props.apolloState)
    }

    render () {
      return <App apolloClient={this.apolloClient} {...this.props} />
    }
  }
}
