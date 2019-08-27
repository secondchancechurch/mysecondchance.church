import React from 'react'
import { StoreConsumer } from "../store"

// Sanity CMS Imports
// import BlockContent from '@sanity/block-content-to-react'
// import sanityClient from '../../../lib/sanity'
// import imageUrlBuilder from '@sanity/image-url'

// Style imports
import styled from 'styled-components'
import { colors, variables} from "../../styles/vars"
// import { Container } from "../../../Layout/container"
import { Flex, Box } from '@rebass/grid'
import { Button } from "../buttons/linkText"
import {Container} from "../../layout/container";
// import {Button} from "../../../styles/base/components";

// Initialize Sanity Images
// const imageBuilder = imageUrlBuilder(sanityClient)

// Parse Optimized Url for Sanity Image
// function imageUrlFor(source) {
//   return imageBuilder.image(source).width(1800).url()
// }

// Hero Styles

const HeroWrapper = styled.div`
  h1 {
  font-size: 6.25rem;
    position: absolute;
    top: 0;
    width: 100%;
    text-align: center;
  }
  
  div {
    
  }
`
const HeroStyles = styled.section`
  margin-top: 7rem;
  display: block;
  position: relative;
  
  
  // margin: auto;
  // position: relative;
  // background-image: url("${props => props.image}");
  // background-position: center;
  // background-size: cover;
  // background-repeat: no-repeat;
    
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: rgba(19, 19, 19, 0.6)};
  }
  
  &:before {
    content: '';
    display: inline-block;
    margin-right: -1px;
    padding-top: 30%;
  }
  
  h1 {
    font-size: 2.5em;
  }
   
  .overlay {
    position: relative;
    z-index: 10;
    color: ${colors.lightPrimary};
    align-items: center;
  }
  
  // .padding {
  //   padding: ${variables.baseSpacing}px;
  //   margin: auto;
  // }
`

const Live = styled(Button)`
  display: inline-block;
  text-decoration: none;
  margin-bottom: 10px;
  transition: all 0.15s ease-in-out;
  
  &:hover {
    border-color: ${colors.primary};
    background-color: ${colors.secondary};
    transition: all 0.15s ease-in-out;
  }
  
  h4 {
    margin: 0;
  }
`

export const AlternateHero = (props) =>
  <HeroWrapper>
    <h1>A Safe Place For<br />The Misfits</h1>
    <HeroStyles image={props.image}>
      <Container flush>
        <Flex alignItems="center">
          <Box
            width={[1, 1/2]} p="4"
            className="overlay"
            style={{ marginTop: 75 }}
          >
          </Box>
        </Flex>
      </Container>
    </HeroStyles>
  </HeroWrapper>
