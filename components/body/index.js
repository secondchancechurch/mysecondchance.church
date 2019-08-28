import React from 'react'
import {Container} from '../../layout/container'
import {Box, Flex} from '@rebass/grid'
import {Button} from '../buttons/linkText'

export const Body = (props) =>
  <section>
    <Container>
      <Flex
        flexWrap="wrap"
        flexDirection={props.headingPosition === 'right' ? 'row-reverse' : ''}
        p={"4"}
      >
        {props.headingPosition !== 'hidden' &&
        <>
          <Box
            width={[1,1,5/12]}
            style={{
              textAlign: props.headingPosition === 'right' ? 'right' : 'unset'
            }}
          >
            <h2>{props.heading}</h2>
          </Box>
          <Box
            width={[0,0,1/12]}
          />
        </>
        }

        <Box
          width={[1,1, props.headingPosition === 'hidden' ? 2/3 : 1/2]}
          style={{
            margin: 'auto'
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: props.content }} />
          {props.link &&
          <Button
              href={props.link.url}
              target={props.link.target}
          >
            {props.link.text}
          </Button>
          }
        </Box>
      </Flex>
    </Container>
  </section>
