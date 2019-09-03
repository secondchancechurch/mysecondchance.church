import React from 'react'
import {Container} from '../../layout/container'
import {Flex,Box} from '@rebass/grid'
import MobileStoreButton from 'react-mobile-store-button'
import ReactPlayer from 'react-player'
import styled, { css } from 'styled-components'
import { colors } from '../.././styles/vars'

const PlayerStyles = styled.div`
width: 100%;
height: 100%;
position: relative;
padding-top: 56.25%; /* 720 / 1280 = 0.5625 */
box-sizing: border-box;
border-radius: 15px;
overflow: hidden;

.react-player {
  position: absolute;
  top: 0;
  left: 0;
  /* TODO: Add option to specify player color */
  color: ${colors.primary};
}
`

const AppLinks = styled.div`
  div:not(:last-of-type) {
    margin-right: 20px;
  }

  a {
    box-sizing: border-box;
  }
`

export const App = (props) =>
  <section>
    <Container>
      <Flex
        alignItems={'center'}
        p={4}
      >
      <Box width={[1,1,1/2]}>
        <PlayerStyles>
          <ReactPlayer
            url={props.video}
            className={'react-player'}
            config={{
              wistia: {
                options: {
                  videoFoam: true,
                  playerColor: props.color ? props.color.handle ? colors[props.color.handle] : props.color.custom : colors.primary
                }
              }
            }}
          />
        </PlayerStyles>
      </Box>
        <Box width={[1,1,1/2]} p={4}>
          <h2>{props.heading}</h2>
          <div dangerouslySetInnerHTML={{ __html: props.content }} />
          <AppLinks>
            {props.iOS &&
              <MobileStoreButton
                store="ios"
                url={props.iOS}
                height={47}
                width={160}
                className='appLink'
              />
            }
            {props.android &&
              <MobileStoreButton
                store="android"
                url={props.android}
                width={160}
                height={47}
                className='appLink'
              />
            }
          </AppLinks>
        </Box>
      </Flex>
    </Container>
  </section>