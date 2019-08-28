import React from 'react'

import { Container } from '../../layout/container'

import ReactPlayer from 'react-player'
import { Flex, Box } from '@rebass/grid'
import { colors } from '../../styles/vars'
import styled from 'styled-components'

const PlayerStyles = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-top: 56.25%; /* 720 / 1280 = 0.5625 */
  box-sizing: border-box;
  margin-bottom: 4rem;
  border-radius: 15px;
  overflow: hidden;

  .react-player {
   position: absolute;
   top: 0;
   left: 0;
   color: rgb(177, 30, 35);
  }
`

export const Video = (props) =>
  <section>
    <Container>
      <Flex
          flexWrap="wrap"
          p={"4"}
      >
        <Box
            width={[1,1,5/12]}
        >
          <h2>{props.heading}</h2>
        </Box>
        <Box
            width={[0,0,1/12]}
        />
        <Box
            width={[1,1,1/2]}
            style={{ textAlign: 'center', margin: 'auto' }}
        >
          <PlayerStyles>
            <ReactPlayer
                url={props.video}
                className='react-player'
                width="100%"
                height="100%"
                config={{
                  wistia: {
                    options: {
                      videoFoam: true,
                      playerColor: colors.primary
                    }
                  }
                }}
            />
          </PlayerStyles>
        </Box>
      </Flex>
    </Container>
  </section>