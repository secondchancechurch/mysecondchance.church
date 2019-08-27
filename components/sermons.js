import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import { Hero } from './hero'
import {GET_CONTENT} from '../queries';

const GET_SERIES = gql`{
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
    uri
    promo
  }
}`

const Series = (props) => {
  const { loading, error, data } = useQuery(GET_SERIES);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return(
    <>
      <Hero />
    </>
  )
}

export default Series