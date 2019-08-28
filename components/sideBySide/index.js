import React from 'react'
import {Container} from '../../layout/container'
import {Box, Flex} from '@rebass/grid';
import {colors} from '../../styles/vars';

import styled from 'styled-components'

const Image = styled.div`
  width: calc(100% + 32px);
  padding-top: 50%;
  
  @media (min-width: 769px) {
    width: calc(50%);
    padding-top: 25%;
  }
`

export const SideBySide = (props) =>
  <section>
    <Container>
      <Flex
        flexWrap="wrap"
        p={[3,5]}
        style={{
          backgroundColor: '#FF3300',
          borderRadius: 15
        }}
      >
        <Box width={1}>
          <Flex
              alignItems="center"
              flexWrap={"wrap"}
              flexDirection="row-reverse"
              style={{ position: 'relative' }}
          >
            {/*<BackgroundItem color="#FF3300" reversed={true} />*/}
            <Image
              width={[1,1,6/12]}
              style={{
                backgroundImage: `url(${props.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 15
              }}
            />
            <Box
                width={[0,0,1/12]}
                style={{ width: '8%' }}
            />
            <Box
                width={[1,1,5/12]}
                mt={[4,4,0]}
                style={{ color: colors.lightPrimary }}
            >
              <h2>{props.heading}</h2>
              <div dangerouslySetInnerHTML={{ __html: props.content }} />
              {/*<Button outlined={true} light={true}>*/}
              {/*  Learn More*/}
              {/*</Button>*/}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Container>
  </section>
