import React from 'react'

import Error from 'next/error'
import { withRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import { GET_CONTENT } from '../../queries'
import { NextSeo } from 'next-seo'

import {Hero} from "../../components/hero"
import {PageBuilder} from '../../components/pageBuilder'

const Page = (props) => {
  const { loading, error, data } = useQuery(GET_CONTENT, {
    variables: { slug: props.slug || 'homepage' }
  });

  if (loading) return 'Loading...';
  if (error) {
    if (process.browser) { return <Error statusCode={404} /> }
    const e = new Error()
    e.code = 'ENOENT'
    throw e
  }

  return(
    <div>
      <NextSeo
        title={data.page.seo.title}
        description={data.page.seo.description}
        canonical={`https://mysecondchancechurch.com${props.router.asPath}`}
        openGraph={{
          url: `https://mysecondchancechurch.com${props.router.asPath}`,
          title: data.page.seo.og.title,
          description: data.page.seo.og.description,
          images: [
            {
              url: data.page.seo.og.image.src,
              width: data.page.seo.og.image.width,
              height: data.page.seo.og.image.height,
              alt: data.page.seo.og.image.alt,
            }
          ],
          site_name: data.page.seo.og.siteName,
        }}
        twitter={{
          handle: data.page.seo.twitter.creator,
          site: data.page.seo.twitter.site,
          cardType: data.page.seo.twitter.card,
        }}
      />
      {/* Hero */}
      <Hero
        image={data.page.image}
        heading={data.page.heading || data.page.title}
        rotation={data.page.rotating}
        backgroundVideo={data.page.backgroundVideo}
      />

      <PageBuilder content={data.page.content} />
    </div>
  )
}

Page.getInitialProps = async ({query: {slug}}) => {
  return { slug }
}

export default withRouter(Page)