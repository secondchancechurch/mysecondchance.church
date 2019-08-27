import React from 'react'
import { Query } from 'react-apollo'
import gql from 'apollo-boost'

import { Container } from '../../layout/container'
import { Flex, Box } from '@rebass/grid'
import { Button, LinkText } from '../../components/buttons/linkText'

import styled from 'styled-components'
import {colors} from '../../styles/vars'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BackgroundItem = styled.div`
  background-color: ${props => props.color ? props.color : colors.lightSecondary};
  position: absolute;
  top: -3.5rem;
  bottom: -3.5rem;
  left: ${props  => props.reversed ? '-32px' : '3rem'};
  right: 0;
  z-index: -1;
  border-radius: 8px;
  
  @media (min-width: 769px) {
    right: ${props => props.reversed ? '3rem' : '-32px'};
  }
`

const ServiceTime = styled.div`
  display: inline-block;
  
  &:not(:last-of-type) {
    margin-right: 1.5rem;
  }
  
  h6 {
    font-size: 12px;
    color: ${colors.lightTertiary};
    margin-bottom: 0;
  }
  
  small {
    margin-left: 4px;
    font-size: 12px;
    font-weight: 500;
    color: ${colors.lightTertiary};
  }
`

const GET_CAMPUS_INFORMATION = gql`{
  allCampuses {
    title
    hasAddress
    location {
      lat
      lng
    }
    address {
      street1
      street2
      city
      state
      postalCode
    }
    serviceTimes {
      day
      time {
        utc
        timezone
      }
    }
  }
}`

function Locations() {
  return(
    <Query query={GET_CAMPUS_INFORMATION}>
      {({ data, loading, error }) => {
        if (loading) return <div/>;
        if (error) return <p>ERROR</p>;

        return (
          <section>
            <Container flush>
              <Flex flexWrap="wrap" py="6" px={"4"}>
                <Box width={1}>
                  <Flex
                    alignItems="center"
                    flexWrap={"wrap"}
                    style={{position: 'relative'}}
                  >
                    <BackgroundItem/>
                    <Box
                      width={[1, 1 / 3]}
                      style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1494236560812-d48283be542e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        paddingTop: '50%',
                        marginLeft: '-32px',
                        borderRadius: 8
                      }}
                    />
                    <Box
                      width={[1, 2 / 3]}
                      p={[3, 6]}
                    >
                      <h2
                        style={{
                          color: colors.primary,
                          marginBottom: '2rem'
                        }}
                      >
                        <FontAwesomeIcon size="xs" icon="map-marker" style={{marginRight: '1rem'}}/>
                        Locations
                      </h2>
                      {data.allCampuses.map((location, i) => (
                        <Flex
                          key={i}
                          flexWrap="wrap"
                          style={{
                            borderBottom: `${this.props.locations.length - 1 !== i ? 1 : 0}px solid rgba(19,19,19,0.15)`,
                            paddingBottom: this.props.locations.length - 1 !== i ? '2rem' : 0,
                            marginBottom: this.props.locations.length - 1 !== i ? '2rem' : 0
                          }}
                        >
                          <Box width={1}>
                            <h3>{location.title}</h3>
                          </Box>
                          <Box width={location.hasAddress ? 1 / 2 : 1}>
                            <h5 style={{marginBottom: '0.5rem', fontSize: '1.15rem'}}>Service Times</h5>
                            <div>
                              {location.serviceTimes.map((time, i) => (
                                <ServiceTime key={i}>
                                  <h6>{time.day}</h6>
                                  <p>{moment.tz(time.time.utc, time.time.timezone).format('h:mma')}
                                    <small>{moment(time.time.utc).tz(time.time.timezone).zoneAbbr()}</small>
                                  </p>
                                </ServiceTime>
                              ))}
                            </div>
                            {location.url &&
                            <Button href={location.url} target="_blank">
                              Watch Live
                            </Button>
                            }
                          </Box>
                          {location.hasAddress &&
                          <Box width={1 / 2}>
                            <h5 style={{marginBottom: '0.5rem', fontSize: '1.15rem'}}>Address</h5>
                            <p>
                              {location.address.street}<br/>
                              {location.address.city}, {location.address.state} {location.address.zipcode}
                            </p>
                            <LinkText href="https://goo.gl/maps/9dL3gowPFXu" target="_blank">
                              Get Directions
                            </LinkText>
                          </Box>
                          }
                        </Flex>
                      ))}
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Container>
          </section>
        )
      }}
    </Query>
  )
}

export { Locations }