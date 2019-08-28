import React from 'react'
import App, { Container } from 'next/app'
import { StoreProvider } from "../components/store"
import { withApollo } from '../lib/apollo';

import { Reset } from '../styles/reset';
import { Fonts } from '../styles/fonts';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMapMarker, faAd, faExternalLinkAlt } from '@fortawesome/pro-regular-svg-icons'

import {Navigation} from '../components/navigation'
import {TopColorBox} from '../components/topColorBox'
import {Footer} from '../layout/footer'

library.add(faMapMarker, faAd)

class MyApp extends App {
  render () {
    const {Component, pageProps, apolloClient} = this.props

    return (
      <Container>
        {/* Then we wrap our components with the provider */}
        <StoreProvider>
          <>
            <Reset/>
            <Fonts/>
            {/* Navigation */}
            <TopColorBox />
            <Navigation />
            <Component {...pageProps} />
            <Footer />
          </>
        </StoreProvider>
      </Container>
    )
  }
}

// export default MyApp
export default withApollo(MyApp)