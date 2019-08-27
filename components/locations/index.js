import React from 'react'
import {Container} from '../../layout/container'
import {Box, Flex} from '@rebass/grid'
import {colors} from '../../styles/vars'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Button, LinkText} from '../buttons/linkText'
import styled from 'styled-components'
import moment from 'moment-timezone'

const BackgroundItem = styled.div`
  background-color: ${props => props.color ? props.color : colors.lightSecondary};
  position: absolute;
  top: -1.5rem;
  bottom: -1.5rem;
  left: 0;
  right: 0;
  z-index: -1;
  border-radius: 15px;
  
  @media (min-width: 769px) {
    left: ${props  => props.reversed ? '-32px' : '3rem'};
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

const Image = styled(Box)`
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 50%;
  border-radius: 15px 15px 0 0;
  margin-top: -32px;
  
  @media (min-width: 768px) {
    margin-left: -32px;
    margin-top: 0;
    border-radius: 15px;
  }
`

export const Campuses = ( props ) =>
  <section>
    <Container>
      <Flex flexWrap="wrap" p={[1,4]}>
        <Box width={1}>
          <Flex
            alignItems="center"
            flexWrap={"wrap"}
            style={{ position: 'relative', borderRadius: 15, overflow: 'hidden'  }}
          >
            <BackgroundItem />
            <Image
              width={[1,1/3]}
              image={props.image}
            />
            <Box
              width={[1,2/3]}
              p={[4,6]}
            >
              <h2
                style={{
                  color: colors.primary,
                  marginBottom: '2rem'
                }}
              >
                <FontAwesomeIcon size="xs" icon="map-marker" style={{ marginRight: '1rem' }} />
                {props.heading}
              </h2>
              {props.campuses.map((location, i) => (
                <Flex
                  flexWrap="wrap"
                  style={{
                    borderBottom: `${props.campuses.length - 1 !== i ? 1 : 0}px solid rgba(19,19,19,0.15)`,
                    paddingBottom: props.campuses.length - 1 !== i ? '2rem' : 0,
                    marginBottom: props.campuses.length - 1 !== i ? '2rem' : 0
                  }}
                >
                  <Box width={1}>
                    <h3>{location.title}</h3>
                  </Box>
                  <Box width={location.physicalLocation ? [1,1/2] : [1,3/4]}>
                    <h5 style={{marginBottom: '0.5rem', fontSize: '1.15rem'}}>Service Times</h5>
                    <div>
                      {location.serviceTimes.map((time, i) => (
                        <ServiceTime key={i}>
                          <h6>{time.day}</h6>
                          <p>
                            {moment(time.time.date).format('h:mmA')}
                            <small>{moment().tz(time.time.timezone).zoneAbbr()}</small>
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
                  {location.physicalLocation &&
                    <Box width={[1,1/2]}>
                      <h5 style={{marginBottom: '0.5rem', fontSize: '1.15rem'}}>Address</h5>
                      <p>
                        {location.address.street}<br/>
                        {location.address.city}, {location.address.state} {location.address.postalCode}
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
