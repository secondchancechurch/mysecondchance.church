import gql from 'graphql-tag'

export const GET_CONTENT = gql`  
  query getContent($slug: String!) {
    page(slug: $slug) {
      title
      image
      heading
      rotating {
        item
      }
      backgroundVideo
      color {
        handle
        custom
        opacity
      }
      content {
        ... on Locations {
          type
          heading
          image
          campuses {
            title
            physicalLocation
            address {
              street
              city
              state
              postalCode
            }
            serviceTimes {
              day
              time {
                date
                timezone
              }
            }
            url
          }
        }
        ... on CurrentSeries {
          type
          series {
            title
            backgroundImage
            description
            branding {
              dark
              colors {
                type
                color
              }
            }
          }
        }
        ... on SideBySide {
          type
          heading
          content
          image
        }
        ... on Body {
          type
          heading
          headingPosition
          content
          link {
            url
            text
            target
          }
        }
        ... on Video {
          type
          heading
          video
        }
        ... on Faq {
          type
          heading
          items {
            heading
            content
          }
          backgroundColor {
            handle
            custom
            opacity
          }
        }
        ... on App {
          type
          image
          video
          heading
          content
          iOS
          android
        }
      }
      seo {
        title
        description
        og {
          locale
          siteName
          type
          description
          image {
            src
            height
            width
            alt
          }
        }
        twitter {
          card
          site
          creator
        }
      }
    }
  }
`