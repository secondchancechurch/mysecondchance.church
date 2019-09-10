import React from 'react'
import { StoreConsumer } from "../store"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/pro-solid-svg-icons'

// Style imports
import styled from 'styled-components'
import { colors, variables} from "../../styles/vars"
import { Flex, Box } from '@rebass/grid'
import { Button, LinkText } from "../buttons/linkText"
import {Container} from "../../layout/container"

// Hero Styles
const HeroStyles = styled(Flex)`
  margin: 0 auto 30px;
  position: relative;
  background-image: url("${props => props.image}");
  background-color: ${colors.darkPrimary};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 15px;
  overflow: hidden;
  
  @media (max-width: 52em) {
    margin-top: 10px;
    min-height: 60vh;
    margin-bottom: 10px;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: ${props => (props.image && !props.gradient) ? 'rgba(19, 19, 19, 0.6)' : 'transparent'};
    background: ${props => (props.image && props.gradient) ? `linear-gradient(90deg, ${props.gradient} 0%, ${props.gradient} 35%, rgba(0,0,0,0) 100%)` : 'rgba(19, 19, 19, 0.6)'};
    border-radius: 15px;
    overflow: hidden;
  }
  
  &:before {
    content: '';
    display: inline-block;
    margin-right: -1px;
    padding-top: 100%;
    
    @media (min-width: 769px) {
      padding-top: 50%;
    }
  }
  
  h1 {
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${colors.lightPrimary};
    margin: 0;
    text-transform: none;
    
    &::selection {
      color: transparent;
      -webkit-text-stroke-color: ${colors.primary};
    }
    
    span {
      color: ${colors.lightPrimary};
      -webkit-text-stroke-width: 0px;
      -webkit-text-stroke-color: ${colors.lightPrimary}; 
      border-bottom: 6px solid;
      padding-bottom: 4px;
    }
  }
   
  .overlay {
    position: relative;
    z-index: 2;
    color: ${colors.lightPrimary};
    align-items: center;
  }
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

const WatchLive = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 40px;
  left: 32px;
  
  @media (min-width: 52em) {
    right: 40px;
    left: unset;
  }
  
  h6 {
    margin: 0;
    font-size: 0.85rem;
    font-weight: 600;
    color: ${colors.lightPrimary};
    text-transform: uppercase;
  }
`

export class Hero extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      index: 0
    }
  }

  componentDidMount = () => {
    if (this.props.rotation && this.props.rotation.length > 0) {
      this.changeAttribute();

      setInterval( () => {
        this.changeAttribute()
      }, 5000);
    }
  }

  changeAttribute = () => {

    let currentAttribute = this.state.index + 1;

    if ( currentAttribute < 0 || currentAttribute >= this.props.rotation.length ) {
      currentAttribute = 0
    }

    this.setState({
      index: currentAttribute
    });
  }

  render() {
    const { props } = this
    return(
      <StoreConsumer>
        {({ isLive }) => (
          <Container flush>
            <HeroStyles image={props.image} gradient={props.gradient || false} alignItems="center">
              <div style={{ display: 'inline-block'}}>
                <Flex alignItems="center">
                  <Box width={[1]} p={[4,6]} className="overlay">
                    <h1 style={{ marginBottom: props.subheading ? 10 : 0 }}>{props.heading}{this.props.rotation && this.props.rotation.length > 0 && <><br /><span>{this.props.rotation[this.state.index].item}</span></>}</h1>
                    {props.subheading &&
                      <h3 style={{fontSize: '1.5em', lineHeight: '1.5em', fontWeight: '600', marginTop: 0}}
                      >
                        {props.subheading}
                      </h3>
                    }
                    {/*<BlockContent blocks={props.content} />*/}
                    {props.children}
                  </Box>
                </Flex>
              </div>
              {isLive &&
                <WatchLive>
                  <LinkText
                    light={true}
                    href="//live.mysecondchancechurch.com"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={"play"}
                      size="sm"
                      style={{ marginRight: 10 }}
                    />
                    Watch Live Now
                  </LinkText>
                </WatchLive>
              }
              {props.backgroundVideo &&
              <div style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                borderRadius: 15,
                overflow: 'hidden'
              }}>
                <video
                  src={props.backgroundVideo}
                  autoPlay={true}
                  muted={true}
                  loop={true}
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
              }
            </HeroStyles>
          </Container>
        )}
      </StoreConsumer>
    )
  }
}

// export const Hero = (props) =>
