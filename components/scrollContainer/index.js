import React, { useState, useEffect } from 'react'

import {LinkText} from '../buttons/linkText'
import {Container} from '../../layout/container'

import styled from 'styled-components'
import {Flex,Box} from '@rebass/grid'
import {colors} from '../../styles/vars'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faArrowLeft, faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/pro-solid-svg-icons'

const FlexScrollWrapper = styled.section`
  position: relative;
`

const FlexScroll = styled(Flex)`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`

const scrollContainer = (direction) => {
  const container = document.getElementById('scrollingContainer')
  const scrollWidth = container.scrollWidth - container.clientWidth
  const currentPosition = container.scrollLeft
  const containerWidth = container.clientWidth
  const windowWidth = window.innerWidth

  let scrollIncriment = containerWidth * 0.3334

  if (windowWidth < 769) {
    scrollIncriment = containerWidth
  }

  if (direction === 'right') {
    let newScrollPosition = currentPosition + scrollIncriment

    if (!(newScrollPosition <= scrollWidth)) {
      newScrollPosition = scrollWidth
    }

    container.scrollLeft = newScrollPosition
    return newScrollPosition
  } else {
    let newScrollPosition = currentPosition - scrollIncriment

    if (newScrollPosition < 0) {
      newScrollPosition = 0
    }

    container.scrollLeft = newScrollPosition
    return newScrollPosition
  }
}

const Navigation = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 100;
  height: 100%;
  top: 0;
  left: ${props => props.right ? 'unset' : 0};
  right: ${props => props.right ? 0 : 'unset'};
  
  button {
    width: 36px;
    height: 36px;
    
    &:not(:disabled) {
      .fa-circle {
        color: ${colors.darkPrimary};
        transition: all 0.25s ease-in-out;
      }
    }

    span {
      position: relative;
      left: -7px;
    }
  }
  
  &:hover {
    button:not(:disabled) {
      cursor: pointer;
      
      .fa-circle {
        color: ${colors.primary};
        transition: all 0.25s ease-in-out;
      }
    }
  }
`

export const ScrollContainer = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [scrollWidth, setScrollWidth] = useState(0)

  useEffect(() => {
    const container = document.getElementById('scrollingContainer')
    const scrollWidth = container.scrollWidth - container.clientWidth

    setScrollWidth(scrollWidth)
  })

  return (
    <Container>
      <FlexScrollWrapper>
        <Navigation>
          <button
            onClick={() => setScrollPosition(scrollContainer('left'))}
            disabled={scrollPosition <= 10}
          >
            <span className="fa-layers fa-fw">
              <FontAwesomeIcon icon={faCircle} size="2x" />
              <FontAwesomeIcon icon={faArrowLeft} inverse transform="shrink-2 right-6" />
            </span>
          </button>
        </Navigation>
        <FlexScroll id={`scrollingContainer`} mb={5}>
          {children}
        </FlexScroll>
        <Navigation right>
          <button
            onClick={() => setScrollPosition(scrollContainer('right'))}
            disabled={scrollPosition >= scrollWidth - 10}
          >
            <span className="fa-layers fa-fw">
              <FontAwesomeIcon icon={faCircle} size="2x" />
              <FontAwesomeIcon icon={faArrowRight} inverse transform="shrink-2 right-6" />
            </span>
          </button>
        </Navigation>
      </FlexScrollWrapper>
    </Container>
  )
}

