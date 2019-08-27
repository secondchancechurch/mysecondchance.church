import React from 'react'

import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components'
import {colors} from '../../styles/vars'
import { Container } from '../../layout/container'
import { Button } from '../buttons/linkText'
// import { BackgroundVideo } from '../backgroundVideo'

const StyledSection = styled.section`
  position: relative;
  color: ${colors.lightPrimary};
  
  .overlay__item {
    position: relative;
    z-index: 2;
  }
  
  
  
  a {
    vertical-align: middle;
    
    &:not(:last-of-type) {
      margin-right: 2rem;
    }
  }
  
  .BackgroundVideo {
    border-radius: 8px;
    overflow: hidden;
  }
`

const SeriesBranding = styled.div`
  position: relative;
  background-color: ${props => props.branding.colors[0].color};
  background-image: url('${props => props.backgroundImage}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 15px;
  
  &.background-image {
  
  }
  
  &.overlay{
    border-radius: 15px;
    overflow: hidden;
    
    &:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(19,19,19,0.5);
      z-index: 1;
    }
  }
`

export const CurrentSeries = (props) =>
  <StyledSection>
    <Container style={{position: 'relative', overflow: 'hidden'}}>
      <SeriesBranding
        className={props.series.backgroundImage ? 'overlay backgroundImage' : ''}
        branding={props.series.branding}
        backgroundImage={props.series.backgroundImage}
      >
        {/* TODO: Integrate Gif Background */}
        {/*<BackgroundVideo*/}
        {/*    // src="https://elevationchurch.org/app/uploads/2019/06/060919_ThisDoesntMakeSense_DustinStradley_ECdotOrg_V2.mp4"*/}
        {/*    poster={props.series.background}*/}
        {/*>*/}
          <Flex className="overlay__item" px={[2, 5]} py={[6, 7]} alignItems="center" flexWrap={"wrap"}
                flexDirection={['column-reverse', 'initial']}>
            <Box width={[1, 3/4, 1 / 2, 3 / 5]} p={[2,2,4]}>
              <h6 style={{margin: 0, fontSize: 18}}>Current Series</h6>
              <h2>{props.series.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: props.series.description }} />
              <div style={{marginTop: '2rem'}}>
                <Button
                  light={true}
                  outlined={true}
                  href={"https://www.youtube.com/secondchancechurch"}
                  target={"_blank"}
                >
                  View Series
                </Button>
              {/*  <LinkText light={true}>*/}
              {/*    Watch Latest Sermon*/}
              {/*  </LinkText>*/}
              </div>
            </Box>
          </Flex>
        {/*</BackgroundVideo>*/}
      </SeriesBranding>
    </Container>
  </StyledSection>
