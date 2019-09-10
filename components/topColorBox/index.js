import React from 'react'

import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'

import { colors } from '../../styles/vars'

const StyleWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;

  @media (min-width: 52em) {
    left: 50%;
    transform: translate(-50%);
    max-width: 106.66667rem;
  }

  .grid-container {
    margin-bottom: 7.22222rem;
    margin-left: auto;
    margin-right: auto;

    .color-box {
      height: 40rem;
      border-radius: 0 0 15px 15px;

      @media only screen and (max-width: 1919px) and (min-width: 1440px) {
        height: 37.77778rem;
      }

      @media only screen and (max-width: 1279px) and (min-width: 1024px) {
        height: 28.88889rem;
      }

      @media only screen and (max-width: 1023px) and (min-width: 768px) {
        height: 24.44444rem;
      }

      @media only screen and (max-width: 767px) {
        height: 24rem;
      }
    }
  }
`

export const TopColorBox = ({ color }) =>
  <StyleWrapper>
    <div className="grid-container">
      <Flex>
        <Box width={[0, 2/5, 1/4]} />
        <Box width={[1, 3/5, 3/4]} >
          <div
            className="color-box"
            style={{
              background: color ? color.handle ? colors[color.handle] : color.custom : colors.primary
            }}
          />
        </Box>
      </Flex>
    </div>
  </StyleWrapper>