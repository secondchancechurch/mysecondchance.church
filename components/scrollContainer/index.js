import React, { useState, useEffect } from 'react'

import {LinkText} from '../buttons/linkText'
import {Container} from '../../layout/container'

import styled from 'styled-components'
import {Flex,Box} from '@rebass/grid'

const FlexScrollWrapper = styled.section`
  position: relative;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 20px;
    z-index: 1;

    @media (min-width: 52em) {
      width: 40px;
    }
  }

  &:before {
    background: linear-gradient(90deg, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 100%);
    left: 0;
  }

  &:after {
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%,rgba(255,255,255,0.75) 100%);
    right: 0;
  }
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
  const scrollIncriment = containerWidth / 3.25

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


// TODO: Track scroll position so that we can disable buttons
export const ScrollContainer = ({ children, key, previous, next }) => {
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
        <FlexScroll id={`scrollingContainer`} mb={5}>
          {children}
        </FlexScroll>
      </FlexScrollWrapper>
      <Flex style={{ textAlign: 'center' }}>
        <Box width={1/2}>
          <LinkText
            onClick={() => setScrollPosition(scrollContainer('left'))}
            disabled={scrollPosition === 0}
          >
            {previous || 'See Newer'}
          </LinkText>
        </Box>
        <Box width={1/2}>
          <LinkText
            onClick={() => setScrollPosition(scrollContainer('right'))}
            disabled={scrollPosition >= scrollWidth}
          >
            {next || 'See Older'}
          </LinkText>
        </Box>
      </Flex>
    </Container>
  )
}

