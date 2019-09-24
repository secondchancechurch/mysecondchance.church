import gql from 'graphql-tag'

export const GET_SERIES = gql`{
  allSeries {
    title
    description
    startDate {
      timezone
      date
    }
    endDate {
      timezone
      date
    }
    image
    backgroundImage
    promo
    logo
    uri
    branding {
      colors {
        type
        color
      }
    }
  }
}`
