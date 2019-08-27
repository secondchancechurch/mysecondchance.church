import React from 'react'
import {LinkText} from "../buttons/linkText"
import { Flex, Box } from '@rebass/grid'

import styled from 'styled-components'

export const LandscapeImage = styled(Flex)`
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("${props => props.image}");
  border-radius: 10px;
  background-position: center;
  overflow: hidden;
  position: relative;

  &:before {
    content: '';
    display: inline-block;
    padding-top: 50%;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(19,19,19,0.4);
  }
`

export const ImageContent = styled(Box)`
  padding: 60px 30px;
  color: #fff;
  border-radius: 0 0 10px 10px;
  position: relative;
  z-index: 1;
  text-align: center;

  h3 {
    margin-bottom: 0;
  }

  a {
    color: #fff;
  }
`

export const ImageCard = (props) =>
  <LandscapeImage alignItems="center" image={props.image}>
    <ImageContent width={1}>
      <h3>{props.heading.toTitleCase()}</h3>
      <LinkText {...props}>{props.linkText || "Learn More"}</LinkText>
    </ImageContent>
  </LandscapeImage>
