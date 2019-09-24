import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import moment from 'moment'

import { Hero } from '../../components/hero'
import { Modal } from '../../components/modal'
import { Card } from '../../components/card'

import { faPlayCircle, faEllipsisHAlt } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ScrollContainer } from '../../components/scrollContainer'
import { LinkText } from '../../components/buttons/linkText'
import { GET_SERIES } from './GET_SERIES'

export default(props) => {
  const { loading, error, data } = useQuery(GET_SERIES);
  // const [modal, setModal] = useState(false)

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const { allSeries: series } = data

  const currentSeries = series[0]

  // const toggleModal = (e) => {
  //   e.preventDefault()
  //   const html = document.getElementsByTagName('html')[0]
  //   html.classList.toggle('preventScroll')
  //   setModal(!modal)
  // }

  return(
    <>
      <Hero
        image={currentSeries.backgroundImage}
        gradient={currentSeries.branding.colors[0].color}
      >
        <h6
          style={{
            fontWeight: 800,
            fontSize: '1em',
            textTransform: 'uppercase',
            marginBottom: '0.5em',
            letterSpacing: '2px'
          }}
        >
          {moment(currentSeries.startDate.date) <= moment() ? 'Current Series' : `Series Starts ${moment(currentSeries.startDate.date).format('dddd')}`}
        </h6>
        <h1>{currentSeries.title}</h1>

        <LinkText
          light={true}
          style={{ marginRight: 40 }}
          onClick={toggleModal}
        >
          <FontAwesomeIcon
            icon={faPlayCircle}
            style={{
              marginRight: '0.5em'
            }}
          />
          <span>
            Watch Promo
          </span>
        </LinkText>
        <LinkText
          href={currentSeries.uri}
          light={true}
          style={{
            marginLeft: '1rem'
          }}
        >

          <span>
            Series Detail
          </span>
          <FontAwesomeIcon
            icon={faEllipsisHAlt}
            style={{
              marginLeft: '0.5em'
            }}
          />
        </LinkText>

        <Modal
          playerUrl={currentSeries.promo}
        />
        {/*<SVG src={`${currentSeries.logo}`} />*/}
      </Hero>
      <ScrollContainer
        displayAtATime={3}
      >
        {series.map((item, i) => {
          let startMonth,
              startYear,
              endMonth,
              endYear

          if (item.startDate) {
            startMonth = moment(item.startDate.date).format('MMMM')
            startYear = moment(item.startDate.date).format('YYYY')
          }

          if (item.endDate) {
            endMonth = moment(item.endDate.date).format('MMMM')
            endYear = moment(item.endDate.date).format('YYYY')
          }

          let seriesDates = ''

          if (item.endDate && (moment() <= moment(item.endDate.date))) {
            seriesDates = 'Current Series'
          } else {
            if (item.startDate) {
              seriesDates = moment(item.startDate.date).format(`MMMM D${(endYear !== '' && startYear !== endYear) ? ', YYYY' : ''}`)
            }

            if (item.endDate) {
              seriesDates = seriesDates + ' - ' + moment(item.endDate.date).format(`${startMonth !== endMonth ? 'MMMM ' : ''}D, YYYY`)
            }
          }

        return(
          <Card
            key={i}
            image={item.image || item.backgroundImage}
            eyebrow={seriesDates}
            heading={item.title}
            url={item.uri}
          />
        )
      })}
      </ScrollContainer>
    </>
  )
}
