import React from 'react'
import { string } from 'prop-types'

import { Flex, Box } from "@rebass/grid"

import styled from 'styled-components'
import {Button} from "../buttons/linkText";
import Head from "../head";

const Background = styled.section`
  background-image: url("${props => props.image}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.split ? 'transparent' : 'rgba(19,19,19, 0.5)'};
    z-index: 0;
  }
`

const Text = styled(Box)`
  position: relative;
  z-index: 1;
  background-color: ${props => props.split ? 'rgba(255,255,255,0.9)' : 'transparent'};
  margin-top: ${props => props.split ? '10%' : 0};
  margin-bottom: ${props => props.split ? '10%' : 0};
  margin-left: ${props => (props.align === 'right' || props.align === 'center') ? 'auto' : 0};
  margin-right: ${props => props.align === 'right' ? 0: 'auto'};
  text-align: ${props => props.align === 'center' ? 'center' : 'left'};
  color: ${props => props.split ? '' : '#fff'};
`

const Image = styled(Box)`
  background-image: url("${props => props.image}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 50%;
  
  @media (min-width: 769px) {
    position: absolute;
    top: 0;
    bottom: 0;
    right: ${props => props.align === 'left' ? 0 : 'unset'}; 
    left: ${props => props.align === 'right' ? 0 : 'unset'}; 
    padding-top: 0;
  }
`

export const AdUnit = (props) =>
  <Background
    {...props}
    image={props.split ? "" : props.image}
  >
    <Flex
      style={{ maxWidth: 1640, margin: 'auto' }}
    >
      {props.split &&
        <Image
          {...props}
          width={[1,2/3]}
        />
      }
      <Text width={[1,1/3]} px={[4, props.split ? 5 : 4]} py={6} {...props}>
        <h2>{props.heading}</h2>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
        <Button
          filled
        />
      </Text>
    </Flex>
  </Background>


AdUnit.propTypes = {
  heading: string,
  image: string,
  content: string
}
