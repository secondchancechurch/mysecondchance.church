import React, { useState } from 'react'

import { Container } from '../../layout/container'
import { Flex, Box } from '@rebass/grid'

import styled from 'styled-components'
import { ScrollContainer } from '../scrollContainer'

const ContainerWrapper = styled(Container)`
  background-color: ${props => props.backgroundColor ? props.backgroundColor.custom : ''};
  border-radius: 15px;
  overflow: hidden;
`

const FAQItem = styled(Box)`
  flex: 0 0 90%;
  
  @media (min-width: 52em) {
    flex: 0 0 30%;
  }
`

export const FAQ = (props) => {
  const [activeItem, setActiveItem] = useState()

  return (
      <section>
        <ContainerWrapper>
          <Flex
            flexWrap={"wrap"}
            px={[2,4]}
            py={[2,4]}
          >
            <Box width={1} style={{ textAlign: 'center' }}>
              <h2>{props.heading}</h2>
            </Box>
          </Flex>
          <ScrollContainer
            previous={'See Previous'}
            next={'See More'}
          >
            {props.items.map((item, i) => (
              <FAQItem
                key={i}
                px={3}
              >
                <div
                  style={{
                    padding: 20,
                    border: '2px solid rgba(19,19,19,0.05)',
                    borderRadius: 15
                  }}
                >
                  <h4>
                    {item.heading}
                  </h4>
                  <div dangerouslySetInnerHTML={{__html: item.content}} />
                </div>
              </FAQItem>
            ))}
          </ScrollContainer>
        </ContainerWrapper>
      </section>
  )
}