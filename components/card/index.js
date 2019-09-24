import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@rebass/grid'
import { LinkText } from '../buttons/linkText'

import styled from 'styled-components'
import {colors} from '../../styles/vars'

const CardStyles = styled(Box)`
  flex: 0 0 100%;

  @media (min-width: 52em) {
    flex: 0 0 33.33%;
  }
`

const Image = styled.div`
  background-image: url('${props => props.backgroundImage}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 50%;
  border-radius: 15px 15px 0 0;
  overflow: hidden;
`

const Content = styled.div`
  padding: 2em;
  border-width: 0 1px 1px;
  border-radius: 0 0 15px 15px;
  border-color: ${colors.lightSecondary};
  border-style: solid;
`

export const Card = ({ image, eyebrow, heading, url, linkText }) =>
  <CardStyles
    px={[2, 3]}
    py={[2, 4]}
    style={{
      flexDirection: 'column',
      display: 'flex'
    }}
  >
    <Image backgroundImage={image}/>
    <Content
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div
        style={{
          flex: 1
        }}
      >
        {eyebrow &&
          <h6
            style={{
              fontSize: '1em',
              fontWeight: 700,
              marginBottom: 10,
              textTransform: 'uppercase'
            }}
          >
            <small>
              {eyebrow}
            </small>
          </h6>
        }
        <h3>{heading}</h3>
      </div>
      <div>
        <LinkText href={url}>
          {linkText || 'View Series'}
        </LinkText>
      </div>
    </Content>
  </CardStyles>

Card.propTypes = {
  image: PropTypes.String,
  eyebrow: PropTypes.String,
  heading: PropTypes.String,
  url: PropTypes.String,
  linkText: PropTypes.String
}