import React from 'react'
import {LinkText} from "../buttons/linkText"
import { Flex, Box } from '@rebass/grid'

import styled from 'styled-components'

export const LandscapeImage = styled(Box)`
  padding-top: ${props => props.ratio ? '50%' : 'unset'};
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("${props => props.image}");
  border-radius: 10px;
  background-position: center;
  
  @media (max-width: 768px) {
    padding-top: 50%;
  }
`

export const CardContent = styled(Box)`
  padding: 60px 30px;
  border-radius: 0 0 10px 10px;
  
  h3 {
    margin-top: 0;
    font-size: 36px;
    font-weight: 600;
  }
`

export const HorizontalCard = (props) =>
  <Flex flexWrap="wrap">
    {props.image &&
      <LandscapeImage width={props.orientation === 'horizontal' ? [1,1/2] : 1} image={props.image} ratio={props.orientation !== 'horizontal'} />
    }
    <CardContent width={props.orientation === 'horizontal' ? [1,1/2] : 1}>
      <h3>{props.heading}</h3>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
      <LinkText>Learn More</LinkText>
    </CardContent>
  </Flex>